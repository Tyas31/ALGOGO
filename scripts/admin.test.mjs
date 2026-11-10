import assert from 'node:assert/strict';
import test from 'node:test';
import { loadService } from './load-typescript.mjs';
import { preserveAdminQuestions } from './preserve-admin-questions.mjs';
const { validateQuestionDraft } = loadService('lib/admin-question');
const { finishLevel, initialProgress } = loadService('lib/progress-state');
const valid = { type: 'choice', title: 'Algoritma', prompt: 'Pilih jawaban', options: ['A', 'B'], correctAnswer: 'A', explanation: { correct: 'A benar', wrong: 'A benar' } };

test('admin question validation rejects incomplete keys and retains duplicate ordering lines', () => {
  assert.equal(validateQuestionDraft(valid), valid);
  assert.throws(() => validateQuestionDraft({ ...valid, correctAnswer: 'C' }));
  assert.throws(() => validateQuestionDraft({ ...valid, options: ['A', 'A'] }));
  const order = { ...valid, type: 'order', stepItems: ['print(a)', 'a = 1', 'print(a)'], correctOrder: ['a = 1', 'print(a)', 'print(a)'] };
  assert.equal(validateQuestionDraft(order), order);
  assert.throws(() => validateQuestionDraft({ ...order, correctOrder: ['a = 1', 'a = 1', 'print(a)'] }));
});

test('quiz completion uses the current server count after an admin adds a question', () => {
  const state = initialProgress();
  assert.equal(finishLevel(state, 1, { totalQuestions: 6, correctCount: 5 }, new Date(), 6).xpAwarded, 50);
  assert.throws(() => finishLevel(state, 1, { totalQuestions: 5, correctCount: 5 }, new Date(), 6));
});

test('curriculum seed preserves admin questions and recomputes counts without duplication', () => {
  const documents = [{ path: 'levels/1', data: { questionCount: 5 } }];
  const existing = [{ path: 'levels/1', data: { questionCount: 6, nextAdminQuestionId: 1000 } }, { path: 'levels/1/questions/1000', data: { id: 1000, source: 'admin' } }];
  const result = preserveAdminQuestions(documents, existing);
  assert.equal(result[0].data.questionCount, 6);
  assert.equal(result[0].data.nextAdminQuestionId, 1000);
  assert.deepEqual(preserveAdminQuestions(documents, existing), result);
});
