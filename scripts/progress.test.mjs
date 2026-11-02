import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypeScript } from './load-typescript.mjs';

const { finishLevel, initialProgress, visibleStreak, studyDay, progressPath } =
  await loadTypeScript('../src/lib/progress-state.ts');
const { CURRICULUM } = await loadTypeScript('../src/data/curriculum.ts');
const now = new Date('2026-11-01T10:00:00Z');
const fullScore = (id) => ({ correctCount: id === 8 ? 15 : 5, totalQuestions: id === 8 ? 15 : 5 });

test('new accounts start at zero and cannot skip a level', () => {
  assert.equal(initialProgress().xp, 0);
  assert.throws(() => finishLevel(initialProgress(), 2, fullScore(2), now), /sebelumnya/);
  assert.throws(() => finishLevel(initialProgress(), 0, fullScore(1), now), /ditemukan/);
});
test('replaying a completed level does not award XP twice or add a same-day streak', () => {
  const first = finishLevel(initialProgress(), 1, fullScore(1), now);
  const replay = finishLevel(first.next, 1, fullScore(1), now);
  assert.equal(first.xpAwarded, 50);
  assert.equal(replay.xpAwarded, 0);
  assert.equal(replay.next.xp, 50);
  assert.equal(replay.next.streakDays, 1);
});
test('streak follows Jakarta midnight, continues the next day and resets after a gap', () => {
  const before = new Date('2026-11-01T16:59:59Z');
  const after = new Date('2026-11-01T17:00:00Z');
  assert.equal(studyDay(after) - studyDay(before), 1);
  const first = finishLevel(initialProgress(), 1, fullScore(1), before).next;
  const second = finishLevel(first, 2, fullScore(2), after).next;
  assert.equal(second.streakDays, 2);
  const missed = finishLevel(second, 3, fullScore(3), new Date('2026-11-04T17:00:00Z')).next;
  assert.equal(missed.streakDays, 1);
  assert.equal(missed.longestStreak, 2);
  assert.equal(visibleStreak(second, new Date('2026-11-04T17:00:00Z')), 0);
});
test('one completed level marks one node complete and unlocks exactly its immediate successor', () => {
  const path = progressPath([1]);
  assert.equal(path.currentLevelId, 2);
  assert.equal(path.currentStepNodeId, 2);
  assert.deepEqual(path.completedStepNodes, [1]);
  assert.deepEqual(path.unlockedLevels, [1, 2]);
  assert.equal(progressPath([1, 2, 3, 4, 5, 6, 7, 8]).currentStepNodeId, 9);
});
test('Firestore XP policy matches the actual curriculum and final level award', () => {
  let state = initialProgress();
  for (const level of CURRICULUM) {
    const result = finishLevel(state, level.id, fullScore(level.id), now);
    assert.equal(result.xpAwarded, level.xp);
    state = result.next;
  }
  assert.equal(state.xp, 500);
  assert.equal(state.streakDays, 1);
});

test('the final exam requires 11 of 15 correct and cannot award XP or a badge at 10', () => {
  let state = initialProgress();
  for (let id = 1; id <= 7; id++) state = finishLevel(state, id, fullScore(id), now).next;
  const failed = finishLevel(state, 8, { correctCount: 10, totalQuestions: 15 }, now);
  assert.equal(failed.passed, false);
  assert.equal(failed.xpAwarded, 0);
  assert.equal(failed.next.xp, 350);
  assert.deepEqual(failed.next.completedLevels, [1, 2, 3, 4, 5, 6, 7]);
  assert.equal(progressPath(failed.next.completedLevels).currentStepNodeId, 8);
  const passed = finishLevel(failed.next, 8, { correctCount: 11, totalQuestions: 15 }, now);
  assert.equal(passed.passed, true);
  assert.equal(passed.xpAwarded, 150);
  assert.equal(passed.next.xp, 500);
});

test('partial quizzes and stale five-question exams cannot complete a level', () => {
  assert.throws(() => finishLevel(initialProgress(), 1, { correctCount: 1, totalQuestions: 1 }, now), /tidak valid/);
  const state = { ...initialProgress(), xp: 350, completedLevels: [1, 2, 3, 4, 5, 6, 7] };
  assert.throws(() => finishLevel(state, 8, { correctCount: 5, totalQuestions: 5 }, now), /tidak valid/);
});
