import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { createRequire } from 'node:module';
import { loadService } from './load-typescript.mjs';

// Match the CommonJS entrypoints used by the transpiled service loader so Auth
// and Firestore share one Firebase registry during this Node-only smoke test.
const require = createRequire(new URL('../package.json', import.meta.url));
const { initializeApp, deleteApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, deleteUser } = require('firebase/auth');
const { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, updateDoc, serverTimestamp, writeBatch } = require('firebase/firestore');

// Node preserves existing values: optional local overrides load before the shared
// defaults, matching Expo's priority without requiring a private file after clone.
try {
  process.loadEnvFile(new URL('../.env.local', import.meta.url));
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
process.loadEnvFile(new URL('../.env', import.meta.url));
const config = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};
const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);
let user;
let friendApp;
let friend;

async function expectWatch(subscribe, uid, expected) {
  await new Promise((resolve, reject) => {
    let stop;
    const timer = setTimeout(() => { stop?.(); reject(new Error('Follow subscription did not update.')); }, 15000);
    stop = subscribe(uid, (list) => {
      if (JSON.stringify([...list].sort()) !== JSON.stringify([...expected].sort())) return;
      clearTimeout(timer);
      stop?.();
      resolve();
    }, (error) => { clearTimeout(timer); stop?.(); reject(error); });
  });
}

async function cleanAccount(account, database) {
  const attempts = await getDocs(collection(database, 'users', account.uid, 'attempts'));
  const cleanup = writeBatch(database);
  attempts.docs.forEach((entry) => cleanup.delete(entry.ref));
  for (const name of ['users', 'progress', 'leaderboard']) cleanup.delete(doc(database, name, account.uid));
  await cleanup.commit();
  await deleteUser(account);
}

try {
  const email = `algogo-regression-${randomBytes(6).toString('hex')}@example.test`;
  const password = randomBytes(24).toString('base64url');
  user = (await createUserWithEmailAndPassword(auth, email, password)).user;
  const loginApp = initializeApp(config, 'login-regression');
  try {
    const login = await signInWithEmailAndPassword(getAuth(loginApp), email, password);
    assert.equal(login.user.uid, user.uid);
    console.log('PASS registration and a separate login session use the same Firebase account.');
  } finally {
    await deleteApp(loginApp);
  }
  await updateProfile(user, { displayName: 'Uji Regresi' });
  const service = loadService('services/firestore');
  const { progressPath } = loadService('lib/progress-state');
  const account = service.appUser(user);
  await service.ensureAccount(account);
  console.log('PASS new account profile, progress, leaderboard, and server time initialize.');

  friendApp = initializeApp(config, 'friend-regression');
  const friendAuth = getAuth(friendApp);
  friend = (await createUserWithEmailAndPassword(friendAuth, `algogo-friend-${randomBytes(6).toString('hex')}@example.test`, randomBytes(24).toString('base64url'))).user;
  const friendDb = getFirestore(friendApp);
  const friendSetup = writeBatch(friendDb);
  friendSetup.set(doc(friendDb, 'users', friend.uid), {
    displayName: 'Teman Uji', email: friend.email, createdAt: serverTimestamp(), updatedAt: serverTimestamp(),
  });
  friendSetup.set(doc(friendDb, 'progress', friend.uid), {
    xp: 0, streakDays: 0, longestStreak: 0, lastStudyDay: null, completedLevels: [], updatedAt: serverTimestamp(),
  });
  friendSetup.set(doc(friendDb, 'leaderboard', friend.uid), {
    displayName: 'Teman Uji', handle: 'teman_uji', xp: 0, streakDays: 0, updatedAt: serverTimestamp(),
  });
  await friendSetup.commit();
  console.log('PASS a second account initializes in an isolated authenticated session.');
  await service.followUser(user.uid, friend.uid);
  await Promise.all([
    expectWatch(service.watchFollowing, user.uid, [friend.uid]),
    expectWatch(service.watchFollowers, friend.uid, [user.uid]),
  ]);
  const denied = (error) => error.code === 'permission-denied';
  await assert.rejects(service.followUser(user.uid, user.uid), denied);
  await assert.rejects(service.followUser(user.uid, 'nonexistent-regression-user'), denied);
  await assert.rejects(service.followUser(friend.uid, user.uid), denied);
  await assert.rejects(deleteDoc(doc(friendDb, 'follows', `${user.uid}_${friend.uid}`)), denied);
  await assert.rejects(getDoc(doc(friendDb, 'progress', user.uid)), denied);
  await service.unfollowUser(user.uid, friend.uid);
  await Promise.all([
    expectWatch(service.watchFollowing, user.uid, []),
    expectWatch(service.watchFollowers, friend.uid, []),
  ]);
  console.log('PASS follow/unfollow updates both lists; self-follow, forged followers, foreign deletion, and private progress access are denied.');
  const { LEVEL_XP, LEVEL_QUESTION_COUNTS, LEVEL_PASSING_COUNTS } = loadService('lib/progress-state');
  const first = await service.loadLevel(1);
  const second = await service.loadLevel(2);
  assert.notEqual(first.questions[0].title, second.questions[0].title);
  const pets = (await service.loadLevel(9)).questions.find((question) => question.title === 'Susun Kode: Hewan Peliharaan');
  assert.ok(pets, 'The duplicate-line ordering question must exist in the documented level 9.');
  assert.equal(pets.stepItems.filter((step) => step === 'print(hewan)').length, 2);
  console.log('PASS levels load different documented questions, including duplicate order lines.');

  const count = (id) => LEVEL_QUESTION_COUNTS[id - 1];
  const submit = (id, correctCount = count(id), totalQuestions = count(id), attemptId = service.newAttemptId(user.uid)) =>
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

  const finalId = LEVEL_XP.length;
  const xpBefore = (id) => LEVEL_XP.slice(0, id - 1).reduce((sum, xp) => sum + xp, 0);
  for (let id = 3; id <= finalId; id++) {
    const pass = LEVEL_PASSING_COUNTS[id - 1];
    if (pass > 0) {
      const exam = await service.loadLevel(id);
      assert.equal(exam.questions.length, count(id));
      assert.equal(exam.slides.length, 0);
      assert.equal(exam.passingCorrectCount, pass);
      assert.equal(exam.questions.filter((question) => question.reviewLevelIds?.length).length, count(id));
      assert.deepEqual(await submit(id, pass - 1), { xpAwarded: 0, passed: false });
      assert.equal((await state()).xp, xpBefore(id));
      assert.equal((await state()).completedLevels.length, id - 1);
      assert.deepEqual(await submit(id, pass), { xpAwarded: LEVEL_XP[id - 1], passed: true });
      console.log(`PASS exam level ${id} fails at ${pass - 1}/${count(id)} and passes at ${pass}/${count(id)}.`);
    } else await submit(id);
  }
  assert.equal((await state()).xp, xpBefore(finalId + 1));
  assert.equal((await state()).streakDays, 1);
  assert.equal((await submit(finalId)).xpAwarded, 0);
  console.log(`PASS all ${finalId} levels complete with ${xpBefore(finalId + 1)} XP, the final badge is awarded once, and the daily streak stays at 1.`);

  await assert.rejects(updateDoc(doc(db, 'progress', user.uid), { xp: 9999, updatedAt: serverTimestamp() }), (error) => error.code === 'permission-denied');
  await assert.rejects(updateDoc(doc(db, 'levels', '1'), { title: 'forbidden' }), (error) => error.code === 'permission-denied');
  console.log('PASS database rejects arbitrary XP and client curriculum edits.');
} finally {
  try {
    if (user && friend) {
      const relation = doc(db, 'follows', `${user.uid}_${friend.uid}`);
      if ((await getDoc(relation)).exists()) await deleteDoc(relation);
    }
    if (friend) await cleanAccount(friend, getFirestore(friendApp));
    if (user) await cleanAccount(user, db);
    console.log('Disposable regression accounts and their own records removed.');
  } finally {
    if (friendApp) await deleteApp(friendApp);
    await deleteApp(app);
  }
}
