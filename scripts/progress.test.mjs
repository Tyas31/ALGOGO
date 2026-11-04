import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypeScript } from './load-typescript.mjs';

const { finishLevel, initialProgress, visibleStreak, studyDay, progressPath, LEVEL_XP, LEVEL_QUESTION_COUNTS, LEVEL_PASSING_COUNTS } =
  await loadTypeScript('../src/lib/progress-state.ts');
const { CURRICULUM } = await loadTypeScript('../src/data/curriculum.ts');
const now = new Date('2026-11-01T10:00:00Z');
const levelById = (id) => CURRICULUM.find((level) => level.id === id);
const fullScore = (id) => ({ correctCount: levelById(id).questions.length, totalQuestions: levelById(id).questions.length });
const exams = CURRICULUM.filter((level) => level.examIntro);
const finalLevel = CURRICULUM.at(-1);
const completeUpTo = (lastId) => {
  let state = initialProgress();
  for (let id = 1; id <= lastId; id++) state = finishLevel(state, id, fullScore(id), now).next;
  return state;
};

test('generated progress tables match the curriculum', () => {
  assert.deepEqual([...LEVEL_XP], CURRICULUM.map((level) => level.xp));
  assert.deepEqual([...LEVEL_QUESTION_COUNTS], CURRICULUM.map((level) => level.questions.length));
  assert.deepEqual([...LEVEL_PASSING_COUNTS], CURRICULUM.map((level) => level.passingCorrectCount ?? 0));
});
test('new accounts start at zero and cannot skip a level', () => {
  assert.equal(initialProgress().xp, 0);
  assert.throws(() => finishLevel(initialProgress(), 2, fullScore(2), now), /sebelumnya/);
  assert.throws(() => finishLevel(initialProgress(), 0, fullScore(1), now), /ditemukan/);
  assert.throws(() => finishLevel(completeUpTo(CURRICULUM.length), CURRICULUM.length + 1, fullScore(1), now), /ditemukan/);
});
test('replaying a completed level does not award XP twice or add a same-day streak', () => {
  const first = finishLevel(initialProgress(), 1, fullScore(1), now);
  const replay = finishLevel(first.next, 1, fullScore(1), now);
  assert.equal(first.xpAwarded, 50);
  assert.equal(replay.xpAwarded, 0);
  assert.equal(replay.next.xp, 50);
  assert.equal(replay.next.streakDays, 1);
});
test('a learning level completes at any score; only exams have a passing count', () => {
  const zero = finishLevel(initialProgress(), 1, { correctCount: 0, totalQuestions: fullScore(1).totalQuestions }, now);
  assert.equal(zero.passed, true);
  assert.equal(zero.xpAwarded, 50);
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
  const all = CURRICULUM.map((level) => level.id);
  assert.equal(progressPath(all).currentStepNodeId, CURRICULUM.length + 1);
});
test('Firestore XP policy matches the actual curriculum and final level award', () => {
  let state = initialProgress();
  for (const level of CURRICULUM) {
    const result = finishLevel(state, level.id, fullScore(level.id), now);
    assert.equal(result.xpAwarded, level.xp);
    state = result.next;
  }
  assert.equal(state.xp, CURRICULUM.reduce((sum, level) => sum + level.xp, 0));
  assert.equal(state.streakDays, 1);
});
for (const exam of exams) {
  const pass = exam.passingCorrectCount;
  const total = exam.questions.length;
  test(`exam level ${exam.id} requires ${pass} of ${total} correct and awards nothing at ${pass - 1}`, () => {
    const state = completeUpTo(exam.id - 1);
    const failed = finishLevel(state, exam.id, { correctCount: pass - 1, totalQuestions: total }, now);
    assert.equal(failed.passed, false);
    assert.equal(failed.xpAwarded, 0);
    assert.equal(failed.next.xp, state.xp);
    assert.deepEqual(failed.next.completedLevels, state.completedLevels);
    assert.equal(progressPath(failed.next.completedLevels).currentStepNodeId, exam.id);
    const passed = finishLevel(failed.next, exam.id, { correctCount: pass, totalQuestions: total }, now);
    assert.equal(passed.passed, true);
    assert.equal(passed.xpAwarded, exam.xp);
    assert.equal(passed.next.xp, state.xp + exam.xp);
  });
}
test('partial quizzes and stale question counts cannot complete a level', () => {
  assert.throws(() => finishLevel(initialProgress(), 1, { correctCount: 1, totalQuestions: 1 }, now), /tidak valid/);
  const state = completeUpTo(finalLevel.id - 1);
  assert.throws(() => finishLevel(state, finalLevel.id, { correctCount: 5, totalQuestions: 5 }, now), /tidak valid/);
});
