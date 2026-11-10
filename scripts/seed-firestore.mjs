// Upload the curriculum to Firestore and optionally reset every learner's progress.
// Runs with Admin credentials (bypasses Security Rules), so only the project owner runs it:
//
//   GOOGLE_APPLICATION_CREDENTIALS=/path/service-account.json npm run firebase:seed            (preview)
//   GOOGLE_APPLICATION_CREDENTIALS=/path/service-account.json npm run firebase:seed -- --apply
//   GOOGLE_APPLICATION_CREDENTIALS=/path/service-account.json npm run firebase:seed -- --apply --reset-progress
//
// Without --apply nothing is written; the script only prints what it would change.
import { mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { applicationDefault, deleteApp, initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';

import { curriculumDocuments } from './curriculum-documents.mjs';
import { encodeBackupData } from './firestore-backup.mjs';
import { preserveAdminQuestions } from './preserve-admin-questions.mjs';

export async function seedCurriculum({ db, projectId, apply = false, resetProgress = false }) {
  if (db.projectId !== projectId) throw new Error('Firebase project does not match migration target.');

  const { levels, documents: generatedDocuments } = await curriculumDocuments();

  // Collect stale curriculum documents: old levels, pages and questions no longer in the document.
  const wanted = new Set(generatedDocuments.map((document) => document.path));
  const stale = [];
  const curriculumBefore = [];
  for (const level of (await db.collection('levels').get()).docs) {
    curriculumBefore.push(level);
    for (const name of ['materials', 'questions']) {
      for (const child of (await level.ref.collection(name).get()).docs) {
        curriculumBefore.push(child);
        const adminQuestion = name === 'questions' && child.data().source === 'admin' && wanted.has(level.ref.path);
        if (!wanted.has(child.ref.path) && !adminQuestion) stale.push(child.ref);
      }
    }
    if (!wanted.has(level.ref.path)) stale.push(level.ref);
  }
  const documents = preserveAdminQuestions(generatedDocuments, curriculumBefore.map((entry) => ({ path: entry.ref.path, data: entry.data() })));

  const progress = resetProgress ? (await db.collection('progress').get()).docs : [];
  const leaderboard = resetProgress ? (await db.collection('leaderboard').get()).docs : [];

  console.log(`Project ${projectId}: ${levels.length} levels, ${documents.length} curriculum documents to write.`);
  console.log(`${stale.length} stale curriculum documents to delete.`);
  if (resetProgress) console.log(`${progress.length} progress and ${leaderboard.length} leaderboard entries to reset to 0 XP.`);
  if (!apply) {
    console.log('Preview only. Run again with --apply to write these changes.');
    return { applied: false, levelCount: levels.length, documentCount: documents.length, resetCount: progress.length };
  }

  // The backup must be written successfully before any cloud mutation is attempted.
  const backupDirectory = new URL('../.expo/verification/upgrade-33/', import.meta.url);
  await mkdir(backupDirectory, { recursive: true });
  const backupFile = new URL(`firestore-before-${Date.now()}.json`, backupDirectory);
  const backup = {
    format: 'algogo-firestore-backup-v1', projectId, createdAt: new Date().toISOString(),
    documents: [...curriculumBefore, ...progress, ...leaderboard].map((entry) => ({
      path: entry.ref.path, data: encodeBackupData(entry.data()),
      updateTime: encodeBackupData(entry.updateTime),
    })),
  };
  await writeFile(backupFile, JSON.stringify(backup, null, 2), { flag: 'wx' });
  console.log(`Backup saved before migration: ${backupFile.pathname} (${backup.documents.length} documents).`);

  const operations = [
    ...documents.map((document) => (batch) => batch.set(db.doc(document.path), document.data)),
    ...stale.map((ref) => (batch) => batch.delete(ref)),
    ...progress.map((entry) => (batch) => batch.update(entry.ref, {
      xp: 0, streakDays: 0, longestStreak: 0, lastStudyDay: null, completedLevels: [],
      updatedAt: FieldValue.serverTimestamp(),
    }, { lastUpdateTime: entry.updateTime })),
    // Keep names and handles; only the learning statistics go back to zero.
    ...leaderboard.map((entry) => (batch) => batch.update(entry.ref, {
      xp: 0, streakDays: 0, updatedAt: FieldValue.serverTimestamp(),
    }, { lastUpdateTime: entry.updateTime })),
  ];
  for (let start = 0; start < operations.length; start += 400) {
    const batch = db.batch();
    operations.slice(start, start + 400).forEach((operation) => operation(batch));
    await batch.commit();
  }
  console.log(`Done: ${operations.length} writes committed.`);
  return { applied: true, backupFile: backupFile.pathname, levelCount: levels.length, documentCount: documents.length, resetCount: progress.length };
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  const projectId = process.env.FIREBASE_PROJECT_ID || 'algogo-af45b';
  const app = initializeApp({ credential: applicationDefault(), projectId });
  try {
    await seedCurriculum({
      db: getFirestore(app), projectId,
      apply: process.argv.includes('--apply'),
      resetProgress: process.argv.includes('--reset-progress'),
    });
  } finally {
    await deleteApp(app);
  }
}
