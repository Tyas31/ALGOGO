// Explicit live test: owner credentials create isolated fixture accounts. A single
// question on level 30 is restored in finally; learner accounts are never reset.
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { createRequire } from 'node:module';
import { applicationDefault, initializeApp as initializeAdmin, deleteApp as deleteAdmin } from 'firebase-admin/app';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import { getFirestore as getAdminFirestore, FieldValue } from 'firebase-admin/firestore';
import { loadService } from './load-typescript.mjs';

const require = createRequire(new URL('../package.json', import.meta.url));
const { initializeApp, deleteApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const { collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } = require('firebase/firestore');
try { process.loadEnvFile(new URL('../.env.local', import.meta.url)); } catch (error) { if (error.code !== 'ENOENT') throw error; }
process.loadEnvFile(new URL('../.env', import.meta.url));
const projectId = process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID;
const server = initializeAdmin({ credential: applicationDefault(), projectId }, 'admin-live-fixtures');
const ownerAuth = getAdminAuth(server);
const ownerDb = getAdminFirestore(server);
const app = initializeApp({ apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY, projectId, appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID });
const auth = getAuth(app);
const db = getFirestore(app);
const fixtures = [];
const levelRef = ownerDb.doc('levels/30');
let originalLevel;
let addedId;
const denied = (error) => error.code === 'permission-denied';
const draft = { type: 'choice', title: 'Uji backend admin sementara', prompt: 'Pilih A.', options: ['A', 'B'], correctAnswer: 'A', explanation: { correct: 'A benar.', wrong: 'A benar.' } };

try {
  for (const role of ['admin', 'student']) {
    const email = `algogo-${role}-${randomBytes(6).toString('hex')}@example.test`;
    const password = randomBytes(24).toString('base64url');
    const record = await ownerAuth.createUser({ email, password, displayName: `Uji ${role}` });
    fixtures.push({ uid: record.uid, email, password });
  }
  const [teacher, student] = fixtures;
  await ownerAuth.setCustomUserClaims(teacher.uid, { role: 'admin' });
  const service = loadService('services/firestore');
  const admin = loadService('services/admin');
  const login = async (fixture) => {
    const credential = await signInWithEmailAndPassword(auth, fixture.email, fixture.password);
    await credential.user.getIdToken(true);
    const account = service.appUser(credential.user);
    await service.ensureAccount(account);
    return account;
  };
  await login(student);
  await assert.rejects(admin.addQuestion(30, draft), /admin/);
  await assert.rejects(getDocs(collection(db, 'users')), denied);
  await assert.rejects(updateDoc(doc(db, 'users', student.uid), { role: 'admin' }), denied);
  await assert.rejects(updateDoc(doc(db, 'levels', '30'), { questionCount: 6 }), denied);
  await assert.rejects(setDoc(doc(db, 'levels', '30', 'questions', '999999'), { ...draft, id: 999999 }), denied);
  console.log('PASS ordinary users cannot list students, self-promote, change counts, or create questions.');

  await login(teacher);
  originalLevel = (await levelRef.get()).data();
  addedId = await admin.addQuestion(30, draft);
  const loaded = await service.loadLevel(30);
  assert.equal(loaded.questions.length, originalLevel.questionCount + 1);
  assert.ok(loaded.questions.some((question) => question.id === addedId && question.title === draft.title));
  assert.ok((await admin.listStudents()).some((user) => user.uid === student.uid));
  await assert.rejects(updateDoc(doc(db, 'progress', student.uid), { xp: 9999 }), denied);
  await assert.rejects(updateDoc(doc(db, 'levels', '30'), { title: 'forbidden' }), denied);
  console.log('PASS admin adds a question and reads students, while unrelated progress/curriculum changes remain denied.');

  const account = await login(student);
  const progress = { xp: 1450, streakDays: 0, longestStreak: 0, lastStudyDay: null, completedLevels: Array.from({ length: 29 }, (_, index) => index + 1), updatedAt: FieldValue.serverTimestamp() };
  const setup = ownerDb.batch();
  setup.set(ownerDb.doc(`progress/${student.uid}`), progress);
  setup.update(ownerDb.doc(`leaderboard/${student.uid}`), { xp: 1450, streakDays: 0, updatedAt: FieldValue.serverTimestamp() });
  await setup.commit();
  const attemptId = service.newAttemptId(student.uid);
  const count = originalLevel.questionCount + 1;
  await assert.rejects(service.saveQuiz(account, 30, { correctCount: 5, totalQuestions: 5, attemptId }), /tidak valid/);
  assert.equal((await service.saveQuiz(account, 30, { correctCount: count - 1, totalQuestions: count, attemptId })).xpAwarded, 50);
  await login(teacher);
  const grades = await admin.listStudentAttempts(student.uid);
  const grade = grades.attempts.find((entry) => entry.id === attemptId);
  assert.equal(grade.totalQuestions, count);
  assert.equal(grade.score, Math.round((count - 1) / count * 100));
  await assert.rejects(updateDoc(doc(db, 'users', student.uid, 'attempts', attemptId), { score: 100 }), denied);
  console.log('PASS the added question is playable, live question count is validated, and admin reads immutable student scores.');
} finally {
  try {
    if (addedId && originalLevel) {
      await ownerDb.runTransaction(async (transaction) => {
        const current = await transaction.get(levelRef);
        const added = ownerDb.doc(`levels/30/questions/${addedId}`);
        if (!(await transaction.get(added)).exists) return;
        transaction.delete(added);
        transaction.update(levelRef, {
          questionCount: current.data().questionCount - 1,
          ...(current.data().nextAdminQuestionId === addedId ? { nextAdminQuestionId: originalLevel.nextAdminQuestionId ?? FieldValue.delete() } : {}),
        });
      });
    }
    for (const fixture of fixtures) {
      const attempts = await ownerDb.collection(`users/${fixture.uid}/attempts`).get();
      const batch = ownerDb.batch();
      attempts.docs.forEach((attempt) => batch.delete(attempt.ref));
      for (const name of ['users', 'progress', 'leaderboard']) batch.delete(ownerDb.doc(`${name}/${fixture.uid}`));
      await batch.commit();
      await ownerAuth.deleteUser(fixture.uid);
    }
    console.log('Temporary question restored and admin/student fixture accounts removed.');
  } finally { await deleteApp(app); await deleteAdmin(server); }
}
