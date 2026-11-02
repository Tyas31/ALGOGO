import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { createRequire } from 'node:module';
import { loadService } from './load-typescript.mjs';

// Match the CommonJS entrypoints used by the transpiled service loader so Auth
// and Firestore share one Firebase registry during this Node-only smoke test.
const require = createRequire(new URL('../package.json', import.meta.url));
const { initializeApp, deleteApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, updateProfile, deleteUser } = require('firebase/auth');
const { collection, doc, getDoc, getDocs, getFirestore, updateDoc, serverTimestamp, writeBatch } = require('firebase/firestore');

process.loadEnvFile(new URL('../.env.local', import.meta.url));
const config = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};
const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);
let user;

try {
  user = (await createUserWithEmailAndPassword(auth, `algogo-regression-${randomBytes(6).toString('hex')}@example.test`, randomBytes(24).toString('base64url'))).user;
  await updateProfile(user, { displayName: 'Uji Regresi' });
  const service = loadService('services/firestore');
  const { progressPath } = loadService('lib/progress-state');
  const account = service.appUser(user);
  await service.ensureAccount(account);
  const first = await service.loadLevel(1);
  const second = await service.loadLevel(2);
  assert.notEqual(first.questions[0].title, second.questions[0].title);
  assert.equal(second.questions[2].stepItems.filter((step) => step === 'print(hewan)').length, 2);
  console.log('PASS levels 1 and 2 load different documented questions, including duplicate order lines.');

  const submit = (id, correctCount = 5, totalQuestions = 5, attemptId = service.newAttemptId(user.uid)) =>
    service.saveQuiz(account, id, { correctCount, totalQuestions, attemptId });
  const state = async () => (await getDoc(doc(db, 'progress', user.uid))).data();
  await assert.rejects(submit(1, 1, 1), /tidak valid/);
  assert.deepEqual((await state()).completedLevels, []);
  const attemptId = service.newAttemptId(user.uid);
  assert.deepEqual(await submit(1, 5, 5, attemptId), { xpAwarded: 50, passed: true });
  assert.deepEqual(progressPath((await state()).completedLevels).completedStepNodes, [1]);
  assert.equal(progressPath((await state()).completedLevels).currentStepNodeId, 2);
  await submit(1, 5, 5, attemptId);
  assert.equal((await submit(1)).xpAwarded, 0);
  assert.equal((await state()).xp, 50);
  console.log('PASS partial quiz does not unlock anything; full quiz unlocks only level 2; retries award no duplicate XP.');

  const concurrent = await Promise.all([submit(2), submit(2)]);
  assert.deepEqual(concurrent.map((result) => result.xpAwarded).sort((a, b) => a - b), [0, 50]);
  console.log('PASS concurrent completions of a new level award XP exactly once.');
  for (let id = 3; id <= 7; id++) await submit(id);
  const exam = await service.loadLevel(8);
  assert.equal(exam.questions.length, 15);
  assert.equal(exam.slides.length, 0);
  assert.equal(exam.passingCorrectCount, 11);
  assert.equal(exam.questions.filter((question) => question.reviewLevelIds?.length).length, 15);
  assert.deepEqual(await submit(8, 10, 15), { xpAwarded: 0, passed: false });
  assert.equal((await state()).xp, 350);
  assert.deepEqual((await state()).completedLevels, [1, 2, 3, 4, 5, 6, 7]);
  assert.deepEqual(await submit(8, 11, 15), { xpAwarded: 150, passed: true });
  assert.equal((await state()).xp, 500);
  assert.equal((await state()).streakDays, 1);
  assert.equal((await service.saveQuiz(account, 8, { correctCount: 15, totalQuestions: 15, attemptId: service.newAttemptId(user.uid) })).xpAwarded, 0);
  console.log('PASS 15-question exam fails at 10, passes at 11, unlocks the badge once, and keeps the daily streak at 1.');

  await assert.rejects(updateDoc(doc(db, 'progress', user.uid), { xp: 9999, updatedAt: serverTimestamp() }), (error) => error.code === 'permission-denied');
  await assert.rejects(updateDoc(doc(db, 'levels', '1'), { title: 'forbidden' }), (error) => error.code === 'permission-denied');
  console.log('PASS database rejects arbitrary XP and client curriculum edits.');
} finally {
  if (user) {
    const attempts = await getDocs(collection(db, 'users', user.uid, 'attempts'));
    const cleanup = writeBatch(db);
    attempts.docs.forEach((entry) => cleanup.delete(entry.ref));
    for (const name of ['users', 'progress', 'leaderboard']) cleanup.delete(doc(db, name, user.uid));
    await cleanup.commit();
    await deleteUser(user);
    console.log('Disposable regression account and its own records removed.');
  }
  await deleteApp(app);
}
