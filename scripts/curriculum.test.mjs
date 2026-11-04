import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { loadTypeScript } from './load-typescript.mjs';

const { CURRICULUM } = await loadTypeScript('../src/data/curriculum.ts');
const { LEVEL_CATALOG } = await loadTypeScript('../src/data/level-catalog.ts');
const { buildLearningPath } = await loadTypeScript('../src/data/learning-path.ts');
const { isCorrectAnswer, normalizedPython } = await loadTypeScript('../src/lib/quiz-answers.ts');
const source = await readFile(new URL('../Materi-Soal-Algogo.md', import.meta.url), 'utf8');
const rules = await readFile(new URL('../firestore.rules', import.meta.url), 'utf8');
const question = (title) => {
  const found = CURRICULUM.flatMap((level) => level.questions).find((item) => item.title === title);
  assert.ok(found, `Missing question "${title}"`);
  return found;
};
const typeCounts = (level) => level.questions.map((q) => q.type)
  .reduce((counts, type) => ({ ...counts, [type]: (counts[type] || 0) + 1 }), {});

test('six units hold 6 learning levels each plus 3 final exams', () => {
  assert.equal(CURRICULUM.length, 33);
  assert.deepEqual([...new Set(CURRICULUM.map((level) => level.unit))], [
    'Unit 1 · Pengenalan Algoritma', 'Unit 2 · Variabel', 'Unit 3 · Input Output',
    'Unit 4 · If Statement', 'Unit 5 · Perulangan', 'Unit 6 · Ujian Akhir',
  ]);
  for (let unit = 1; unit <= 5; unit++) {
    assert.equal(CURRICULUM.filter((level) => level.unitNumber === unit).length, 6, `Unit ${unit}`);
  }
  assert.deepEqual(CURRICULUM.filter((level) => level.examIntro).map((level) => level.id), [31, 32, 33]);
});
test('each visible node opens its own unique documented level', () => {
  const nodes = buildLearningPath(LEVEL_CATALOG).flatMap((section) => section.nodes);
  const ids = CURRICULUM.map((level) => level.id);
  assert.deepEqual(nodes.map((node) => node.id), ids);
  assert.deepEqual(nodes.map((node) => node.levelId), ids);
  assert.equal(new Set(nodes.map((node) => CURRICULUM.find((level) => level.id === node.levelId).questions[0].title)).size, ids.length);
});
test('all question titles match the supplied document in their original order', () => {
  const headings = [...source.matchAll(/^### Soal \d+\/\d+ · (.+)\r?$/gm)].map((match) => match[1].trim());
  assert.equal(headings.length, 185);
  assert.deepEqual(CURRICULUM.flatMap((level) => level.questions.map((item) => item.title)), headings);
});
test('learning levels have 5 pages and 5 questions; exams follow their stated rules', () => {
  for (const level of CURRICULUM.filter((item) => !item.examIntro)) {
    assert.equal(level.slides.length, 5, `Level ${level.id} pages`);
    assert.equal(level.questions.length, 5, `Level ${level.id} questions`);
    const types = typeCounts(level);
    // Level 1-5 belum memakai Python, jadi belum ada soal tulis kode.
    if (level.id >= 6) assert.deepEqual(Object.keys(types).sort(), ['blank', 'choice', 'order', 'output', 'write'], `Level ${level.id} types`);
    else assert.equal(types.write, undefined, `Level ${level.id} must not ask for code yet`);
  }
  const [exam1, exam2, master] = CURRICULUM.filter((level) => level.examIntro);
  for (const [exam, total, pass, perType] of [[exam1, 10, 7, 2], [exam2, 10, 7, 2], [master, 15, 11, 3]]) {
    assert.equal(exam.slides.length, 0);
    assert.equal(exam.questions.length, total);
    assert.equal(exam.passingCorrectCount, pass);
    assert.ok(exam.examIntro.body.includes(String(pass)));
    assert.deepEqual(typeCounts(exam), { choice: perType, blank: perType, order: perType, output: perType, write: perType });
  }
});
test('firestore.rules carries the generated level, XP and passing tables', () => {
  const total = CURRICULUM.reduce((sum, level) => sum + level.xp, 0);
  assert.match(rules, new RegExp(`function maxLevel\\(\\) \\{ return ${CURRICULUM.length}; \\}`));
  assert.match(rules, new RegExp(`, ${total}\\]\\[count\\]`));
  assert.match(rules, /, 7, 7, 11\]\[levelId\]/);
});
test('every generated correct answer is accepted and ordering retains duplicate code lines', () => {
  for (const level of CURRICULUM) for (const item of level.questions) {
    assert.equal(isCorrectAnswer(item, item.type === 'order' ? item.correctOrder : item.correctAnswer), true, `${level.id}/${item.id}`);
    if (item.type === 'order') assert.deepEqual([...item.stepItems].sort(), [...item.correctOrder].sort());
    if (item.acceptedAnswers) for (const answer of item.acceptedAnswers) {
      assert.notEqual(normalizedPython(answer), null, `${level.id}/${item.id} answer cannot be graded`);
      assert.equal(isCorrectAnswer(item, answer), true);
    }
  }
  const petQuestion = question('Susun Kode: Hewan Peliharaan');
  assert.equal(petQuestion.stepItems.filter((step) => step === 'print(hewan)').length, 2);
  assert.equal(isCorrectAnswer(petQuestion, petQuestion.correctOrder.slice(0, 3)), false);
});
test('written answers accept the documented variations but preserve literal spaces and block structure', () => {
  const morning = question('Tulis Kode: Giliranmu!');
  assert.equal(isCorrectAnswer(morning, "print( 'Selamat pagi!' )"), true);
  assert.equal(isCorrectAnswer(morning, 'print("Selamatpagi!")'), false);
  const room = question('Tulis Kode: Luas Kamar');
  assert.equal(isCorrectAnswer(room, 'p = int(input("p?"))\nl = int(input("l?"))\nprint("Luas:", p*l)'), true);
  const greeting = question('Tulis Kode: Sapaan Otomatis');
  assert.equal(isCorrectAnswer(greeting, 'jam = int(input("Jam?"))\nif jam >= 12:\n    print("Selamat siang")\nelse:\n    print("Selamat pagi")'), true);
  assert.equal(isCorrectAnswer(greeting, 'jam = int(input("Jam?"))\nif jam < 12:\nprint("Selamat pagi")\nelse:\nprint("Selamat siang")'), false);
  assert.equal(isCorrectAnswer(question('Tulis Kode: Suhu Nyaman'), 'suhu = int(input())\nif 20 <= suhu <= 30:\n    print("Nyaman")\nelse:\n    print("Tidak nyaman")'), true);
  assert.equal(normalizedPython('print("belum ditutup)'), null);
  assert.equal(isCorrectAnswer(question('Tulis Kode: Jumlah 1 sampai 10'), 'print(55)'), false);
});
test('exam review links point to earlier learning levels', () => {
  for (const exam of CURRICULUM.filter((level) => level.examIntro)) for (const item of exam.questions) {
    assert.ok(item.reviewLevelIds.length > 0);
    assert.ok(item.reviewLevelIds.every((id) => id >= 1 && id <= 30), `${exam.id}/${item.id}`);
  }
});
