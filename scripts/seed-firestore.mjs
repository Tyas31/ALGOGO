// Upload the curriculum to Firestore and optionally reset every learner's progress.
// Runs with Admin credentials (bypasses Security Rules), so only the project owner runs it:
//
//   GOOGLE_APPLICATION_CREDENTIALS=/path/service-account.json npm run firebase:seed            (preview)
//   GOOGLE_APPLICATION_CREDENTIALS=/path/service-account.json npm run firebase:seed -- --apply
//   GOOGLE_APPLICATION_CREDENTIALS=/path/service-account.json npm run firebase:seed -- --apply --reset-progress
//
// Without --apply nothing is written; the script only prints what it would change.
import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';

import { curriculumDocuments } from './curriculum-documents.mjs';

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'algogo-af45b';
const apply = process.argv.includes('--apply');
const resetProgress = process.argv.includes('--reset-progress');

initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
const db = getFirestore();
const { levels, documents } = await curriculumDocuments();

// Collect stale curriculum documents: old levels, pages and questions no longer in the document.
const wanted = new Set(documents.map((document) => document.path));
const stale = [];
for (const level of (await db.collection('levels').get()).docs) {
  for (const name of ['materials', 'questions']) {
    for (const child of (await level.ref.collection(name).get()).docs) {
      if (!wanted.has(child.ref.path)) stale.push(child.ref);
    }
  }
  if (!wanted.has(level.ref.path)) stale.push(level.ref);
}

const progress = resetProgress ? (await db.collection('progress').get()).docs : [];
const leaderboard = resetProgress ? (await db.collection('leaderboard').get()).docs : [];

console.log(`Project ${PROJECT_ID}: ${levels.length} levels, ${documents.length} curriculum documents to write.`);
console.log(`${stale.length} stale curriculum documents to delete.`);
if (resetProgress) console.log(`${progress.length} progress and ${leaderboard.length} leaderboard entries to reset to 0 XP.`);
if (!apply) {
  console.log('Preview only. Run again with --apply to write these changes.');
  process.exit(0);
}

const operations = [
  ...documents.map((document) => (batch) => batch.set(db.doc(document.path), document.data)),
  ...stale.map((ref) => (batch) => batch.delete(ref)),
  ...progress.map((entry) => (batch) => batch.set(entry.ref, {
    xp: 0, streakDays: 0, longestStreak: 0, lastStudyDay: null, completedLevels: [],
    updatedAt: FieldValue.serverTimestamp(),
  })),
  // Keep names and handles; only the learning statistics go back to zero.
  ...leaderboard.map((entry) => (batch) => batch.update(entry.ref, {
    xp: 0, streakDays: 0, updatedAt: FieldValue.serverTimestamp(),
  })),
];
for (let start = 0; start < operations.length; start += 400) {
  const batch = db.batch();
  operations.slice(start, start + 400).forEach((operation) => operation(batch));
  await batch.commit();
}
console.log(`Done: ${operations.length} writes committed.`);
