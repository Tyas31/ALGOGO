import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { loadTypeScript } from './load-typescript.mjs';

const { CURRICULUM } = await loadTypeScript('../src/data/curriculum.ts');
const { LEVEL_CATALOG } = await loadTypeScript('../src/data/level-catalog.ts');
const { buildLearningPath } = await loadTypeScript('../src/data/learning-path.ts');
const { isCorrectAnswer, normalizedPython } = await loadTypeScript('../src/lib/quiz-answers.ts');
const source = await readFile(new URL('../Materi-Soal-Algogo.md', import.meta.url), 'utf8');

test('each of the eight visible nodes opens its own unique documented level', () => {
  const nodes = buildLearningPath(LEVEL_CATALOG).flatMap((section) => section.nodes);
  assert.deepEqual(nodes.map((node) => node.id), [1, 2, 3, 4, 5, 6, 7, 8]);
  assert.deepEqual(nodes.map((node) => node.levelId), [1, 2, 3, 4, 5, 6, 7, 8]);
  assert.equal(new Set(nodes.map((node) => CURRICULUM.find((level) => level.id === node.levelId).questions[0].title)).size, 8);
});
test('all 50 question titles match the supplied document in their original order', () => {
  const headings = [...source.matchAll(/^### Soal \d+\/\d+ · (.+)\r?$/gm)].map((match) => match[1].trim());
  assert.equal(headings.length, 50);
  assert.deepEqual(CURRICULUM.flatMap((level) => level.questions.map((question) => question.title)), headings);
  assert.deepEqual(CURRICULUM.map((level) => level.questions.length), [5, 5, 5, 5, 5, 5, 5, 15]);
  assert.deepEqual(CURRICULUM.map((level) => level.slides.length), [5, 5, 5, 5, 5, 5, 5, 0]);
  assert.equal(CURRICULUM[7].passingCorrectCount, 11);
  assert.ok(CURRICULUM[7].examIntro.body.includes('11'));
  assert.deepEqual(CURRICULUM[7].questions.map((q) => q.type).reduce((counts, type) => ({...counts, [type]: (counts[type] || 0) + 1}), {}),
    { choice: 3, blank: 3, order: 3, output: 3, write: 3 });
});
test('every generated correct answer is accepted and ordering retains duplicate code lines', () => {
  for (const level of CURRICULUM) for (const question of level.questions) {
    assert.equal(isCorrectAnswer(question, question.type === 'order' ? question.correctOrder : question.correctAnswer), true, `${level.id}/${question.id}`);
    if (question.type === 'order') assert.deepEqual([...question.stepItems].sort(), [...question.correctOrder].sort());
    if (question.acceptedAnswers) for (const answer of question.acceptedAnswers) assert.equal(isCorrectAnswer(question, answer), true);
  }
  const petQuestion = CURRICULUM[1].questions[2];
  assert.equal(petQuestion.stepItems.filter((step) => step === 'print(hewan)').length, 2);
  assert.equal(isCorrectAnswer(petQuestion, petQuestion.correctOrder.slice(0, 3)), false);
});
test('written answers accept the documented variations but preserve literal spaces and block structure', () => {
  assert.equal(isCorrectAnswer(CURRICULUM[0].questions[4], "print( 'Selamat pagi!' )"), true);
  assert.equal(isCorrectAnswer(CURRICULUM[0].questions[4], 'print("Selamatpagi!")'), false);
  const room = CURRICULUM[2].questions[4];
  assert.equal(isCorrectAnswer(room, 'p = int(input("p?"))\nl = int(input("l?"))\nprint("Luas:", p*l)'), true);
  const greeting = CURRICULUM[3].questions[4];
  assert.equal(isCorrectAnswer(greeting, 'jam = int(input("Jam?"))\nif jam < 12:\nprint("Selamat pagi")\nelse:\nprint("Selamat siang")'), false);
  assert.equal(normalizedPython('print("belum ditutup)'), null);
  assert.equal(isCorrectAnswer(CURRICULUM[7].questions[14], 'print(55)'), false);
});
