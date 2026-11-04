import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

// Keep the supplied teaching document authoritative instead of hand-copying questions.
// Unit, level, XP, and exam passing counts all come from the document, then flow into
// the app data, the progress rules in src/lib/progress-state.ts, and firestore.rules.
const source = (await readFile(new URL('../Materi-Soal-Algogo.md', import.meta.url), 'utf8')).replace(/\r\n/g, '\n');
const version = createHash('sha256').update(source).digest('hex').slice(0, 12);
// Python comments (# ...) inside code blocks must not be read as headings, so find the
// heading positions on a copy with code blocks blanked out, then slice the real text.
const masked = source.replace(/```[\s\S]*?```/g, (block) => block.replace(/[^\n]/g, ' '));
const units = [...masked.matchAll(/^# Unit (\d+) · ([^\n]+)$/gm)]
  .map((match) => ({ number: Number(match[1]), name: `Unit ${match[1]} · ${match[2].trim()}`, index: match.index }));
const sections = [...masked.matchAll(/^## Level (\d+) · ([^\n]+)\n([\s\S]*?)(?=^#{1,2} |$(?![\s\S]))/gm)]
  .map((match) => {
    const bodyStart = match.index + match[0].length - match[3].length;
    const section = [match[0], match[1], match[2], source.slice(bodyStart, match.index + match[0].length)];
    section.index = match.index;
    return section;
  });
assert.ok(units.length > 0, 'The source must define at least one "# Unit N · Name" heading');
assert.deepEqual(sections.map((section) => Number(section[1])), sections.map((_, index) => index + 1),
  'Levels must be numbered 1, 2, 3, ... in document order');

function plain(text) {
  const snippets = [];
  return text.replace(/`([^`]+)`/g, (_, value) => {
    snippets.push(value);
    return `\u0000${snippets.length - 1}\u0000`;
  }).replace(/\\([_*])/g, '$1').replace(/\*\*/g, '')
    .replace(/\*([^*\n]+)\*/g, '$1')
    .replace(/\u0000(\d+)\u0000/g, (_, index) => snippets[Number(index)]).trim();
}

// "Ringkasan level" table: | Level | Unit | Judul | XP | Fokus |
const summaryRows = new Map([...source.matchAll(/^\| (\d+) \| [^|\n]+\| [^|\n]+\| \+(\d+) XP \| ([^|\n]+)\|$/gm)]
  .map((match) => [Number(match[1]), { xp: Number(match[2]), subtitle: plain(match[3]) }]));

const CODE_LANGUAGES = new Set(['python', 'pseudo']);
function codeBlocks(text) {
  return [...text.matchAll(/```([^\n]*)\n([\s\S]*?)```/g)].map((match) => ({
    language: match[1].trim(), text: match[2].replace(/\n$/, ''),
  }));
}
function textParagraphs(text) {
  return text.replace(/^\*Tampilan:.*\*\s*$/gm, '').split(/\n\s*\n/).map((part) => {
    if (/^\s*\|/.test(part)) {
      return part.split('\n').filter((line) => !/^\|\s*[-:]+/.test(line))
        .map((line) => line.replace(/^\||\|$/g, '').split('|').map((cell) => plain(cell)).join(' — ')).join('\n');
    }
    return plain(part);
  }).filter((part) => part && !/^Hasilnya\s*:$/.test(part));
}
function materialBlocks(text) {
  const blocks = [];
  let offset = 0;
  function paragraphs(value) {
    for (const paragraph of textParagraphs(value)) {
      const kind = paragraph.startsWith('Pertanyaan pemantik:') ? 'callout'
        : paragraph.startsWith('Awas!') ? 'warning'
          : /^(Tips:|Tahukah kamu\?|Ingat (tiga|empat) hal ini!)/.test(paragraph) ? 'tip' : 'paragraph';
      blocks.push({ kind, text: paragraph.replace(/^Pertanyaan pemantik:\s*/, '') });
    }
  }
  for (const match of text.matchAll(/```([^\n]*)\n([\s\S]*?)```/g)) {
    paragraphs(text.slice(offset, match.index));
    const language = match[1].trim();
    blocks.push({
      kind: language === 'python' ? 'code' : language === 'pseudo' ? 'pseudocode' : 'output',
      text: match[2].replace(/\n$/, ''),
    });
    offset = match.index + match[0].length;
  }
  paragraphs(text.slice(offset));
  return blocks;
}
function parseQuestion(match, levelId, reviewMap) {
  const [, number, , title, body] = match;
  const id = Number(number);
  const type = title.startsWith('Pilihan Ganda') ? 'choice' : title.startsWith('Isian') ? 'blank'
    : title.startsWith('Susun') ? 'order' : title.startsWith('Tebak') ? 'output' : 'write';
  const main = body.split('**Benar:**')[0];
  const prompt = plain(main.split(/\n(?:```|[-]\s|Tampil acak|Jawaban:|Urutan benar:|Pilihan chip:)/)[0])
    || (type === 'output' ? 'Apa yang tampil di layar setelah kode berikut dijalankan?' : title);
  const result = {
    id, type, title, prompt,
    correctAnswer: '',
    explanation: {
      correct: plain(body.match(/\*\*Benar:\*\*\s*([\s\S]*?)(?=\n\s*\n\*\*Salah:)/)?.[1] || ''),
      wrong: plain(body.match(/\*\*Salah:\*\*\s*([\s\S]*)/)?.[1] || ''),
    },
  };
  if (type === 'choice' || type === 'output') {
    const lines = main.split('\n').filter((line) => line.startsWith('- '));
    assert.equal(lines.length, 4, `Level ${levelId} question ${id}: expected four choices`);
    assert.equal(lines.filter((line) => line.includes('(benar)')).length, 1, `Level ${levelId} question ${id}: one (benar)`);
    result.options = lines.map((line) => plain(line.slice(2).replace(/\s*\(benar\)\s*$/, '')));
    assert.equal(new Set(result.options).size, 4, `Level ${levelId} question ${id}: duplicate choices`);
    result.correctAnswer = result.options[lines.findIndex((line) => line.includes('(benar)'))];
    const snippet = codeBlocks(main).find((block) => CODE_LANGUAGES.has(block.language));
    if (snippet) result.codeSnippet = snippet.text;
  } else if (type === 'blank') {
    result.codeTemplate = codeBlocks(main).find((block) => CODE_LANGUAGES.has(block.language))?.text;
    const choices = main.match(/Pilihan chip:\s*([^\n]+)/)?.[1].split('·').map((value) => value.trim()) || [];
    assert.equal(choices.length, 3, `Level ${levelId} question ${id}: expected three chips`);
    result.chips = choices.map((value) => plain(value.replace(/\s*\(benar\)\s*$/, '')));
    result.correctAnswer = result.chips[choices.findIndex((value) => value.includes('(benar)'))];
    assert.ok(result.codeTemplate && /_{3,}/.test(result.codeTemplate), `Level ${levelId} question ${id}: missing ___`);
  } else if (type === 'order') {
    const answerSection = main.split('Urutan benar:')[1];
    assert.ok(answerSection, `Missing ordering key for ${levelId}/${id}`);
    result.correctOrder = codeBlocks(answerSection).find((block) => block.language === 'python')?.text.split('\n')
      || [...answerSection.matchAll(/^\d+\. (.+)$/gm)].map((item) => plain(item[1]));
    const randomLine = main.match(/^Tampil acak[^:]*:\s*(.+)$/m)?.[1] || '';
    const quoted = [...randomLine.matchAll(/`([^`]+)`/g)].map((item) => item[1].trim());
    const randomItems = quoted.length ? quoted : randomLine.split('·').map((value) => value.trim());
    const available = [...result.correctOrder];
    result.stepItems = randomItems.map((item) => {
      const index = available.findIndex((line) => line.trim() === item);
      assert.ok(index >= 0, `Unmatched ordering choice ${levelId}/${id}: ${item}`);
      return available.splice(index, 1)[0];
    });
    assert.equal(available.length, 0, `Missing ordering choices for ${levelId}/${id}`);
    result.correctAnswer = result.correctOrder.join('\n');
    const example = codeBlocks(main.split('Tampil acak')[0]).find((block) => !block.language);
    if (example) result.prompt += `\n\nContoh hasil:\n${example.text}`;
  } else {
    // Every accepted variation is written as its own python block under "Jawaban:".
    const answerSection = main.split(/\nJawaban:\s*\n/)[1];
    assert.ok(answerSection, `Missing written answer for ${levelId}/${id}`);
    result.acceptedAnswers = codeBlocks(answerSection).filter((block) => block.language === 'python').map((block) => block.text);
    result.correctAnswer = result.acceptedAnswers[0];
    const example = codeBlocks(main.split(/\nJawaban:/)[0]).find((block) => !block.language);
    if (example) result.prompt += `\n\nContoh hasil:\n${example.text}`;
  }
  if (reviewMap[id]) result.reviewLevelIds = reviewMap[id];
  assert.ok(result.correctAnswer && result.explanation.correct && result.explanation.wrong, `Incomplete ${levelId}/${id}`);
  return result;
}

const curriculum = sections.map((section) => {
  const [, rawId, title, body] = section;
  const id = Number(rawId);
  const unit = units.filter((item) => item.index < section.index).at(-1);
  assert.ok(unit, `Level ${id} must sit under a "# Unit" heading`);
  const summary = summaryRows.get(id);
  assert.ok(summary, `Level ${id} is missing from the "Ringkasan level" table`);
  const examOpening = body.match(/^### Layar Pembuka: ([^\n]+)\n([\s\S]*?)(?=^### )/m);
  // Exam question map: | 3 | Isian kosong | Level 11, 15: ... |
  const reviewMap = {};
  if (examOpening) for (const row of body.matchAll(/^\| (\d+) \| [^|\n]+\| Level ([\d, ]+):/gm)) {
    reviewMap[Number(row[1])] = row[2].split(',').map((value) => Number(value.trim()));
  }
  const slides = [...body.matchAll(/^### Materi (\d+)\/(\d+): ([^\n]+)\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)].map((slide) => {
    const mascot = slide[4].match(/maskot `mascot-([^`]+)`/)?.[1] || 'laptop';
    const illustration = slide[4].match(/`illust-([^`]+)`/)?.[1];
    return {
      id: Number(slide[1]), total: Number(slide[2]), title: slide[3], blocks: materialBlocks(slide[4]),
      mascotKey: mascot === 'correct' || mascot === 'wrong' ? 'laptop' : mascot,
      ...(illustration === 'mi-instan' ? { illustrationKey: 'miInstan' } : illustration === 'cokelat' ? { illustrationKey: 'cokelat' } : {}),
    };
  });
  const questions = [...body.matchAll(/^### Soal (\d+)\/(\d+) · ([^\n]+)\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)];
  assert.ok(questions.length > 0, `Level ${id} has no questions`);
  for (const [index, question] of questions.entries()) {
    assert.equal(Number(question[1]), index + 1, `Level ${id}: questions must be numbered in order`);
    assert.equal(Number(question[2]), questions.length, `Level ${id}: "Soal k/n" must match the question count`);
  }
  if (examOpening) assert.equal(slides.length, 0, `Exam level ${id} must not have material pages`);
  else {
    assert.ok(slides.length > 0, `Level ${id} has no material pages`);
    slides.forEach((slide, index) => {
      assert.equal(slide.id, index + 1, `Level ${id}: material pages must be numbered in order`);
      assert.equal(slide.total, slides.length, `Level ${id}: "Materi k/n" must match the page count`);
    });
  }
  const ending = body.match(/^### Penutup:[^\n]+\n([\s\S]*?)(?=^### )/m)?.[1] || '';
  const result = {
    id, unitNumber: unit.number, unit: unit.name,
    title, subtitle: summary.subtitle,
    xp: summary.xp,
    description: plain(body.split(/^### /m)[0]),
    slides: slides.map(({ total, ...slide }) => slide),
    summaryPoints: [...ending.matchAll(/^- (.+)$/gm)].map((item) => plain(item[1])),
    questions: questions.map((question) => parseQuestion(question, id, reviewMap)),
    contentVersion: version,
  };
  if (examOpening) {
    const passing = body.match(/minimal \*\*(\d+) dari (\d+) soal benar\*\*/);
    assert.ok(passing, `Exam level ${id} must state "minimal **X dari Y soal benar**"`);
    assert.equal(Number(passing[2]), result.questions.length, `Exam level ${id}: stated total must match its questions`);
    result.examIntro = { title: examOpening[1], body: textParagraphs(examOpening[2]).join('\n\n') };
    result.passingCorrectCount = Number(passing[1]);
    for (const question of result.questions) {
      assert.ok(question.reviewLevelIds?.length, `Exam level ${id} question ${question.id} needs a "Peta Soal" row`);
      assert.ok(question.reviewLevelIds.every((levelId) => levelId >= 1 && levelId < id), `Exam level ${id}: review levels must come earlier`);
    }
  }
  return result;
});

const levelXp = curriculum.map((level) => level.xp);
const questionCounts = curriculum.map((level) => level.questions.length);
const passingCounts = curriculum.map((level) => level.passingCorrectCount ?? 0);
const cumulativeXp = levelXp.reduce((sums, xp) => [...sums, sums.at(-1) + xp], [0]);
const list = (values) => `[${values.join(', ')}]`;

async function replaceGenerated(relative, start, end, content) {
  const url = new URL(relative, import.meta.url);
  const text = await readFile(url, 'utf8');
  const from = text.indexOf(start);
  const to = text.indexOf(end);
  assert.ok(from >= 0 && to > from, `${relative} must contain the generated markers`);
  // Keep the end marker on its own line with its original indentation.
  const endLine = text.lastIndexOf('\n', to) + 1;
  await writeFile(url, `${text.slice(0, from + start.length)}\n${content}\n${text.slice(endLine)}`);
}

const oldSource = await readFile(new URL('../src/data/curriculum.ts', import.meta.url), 'utf8');
const types = oldSource.split('export const CURRICULUM: LevelData[] =')[0]
  .replace(/\/\/ Generated from Materi-Soal-Algogo\.md[^\n]*\n/g, '');
await writeFile(new URL('../src/data/curriculum.ts', import.meta.url), `${types}// Generated from Materi-Soal-Algogo.md by scripts/sync-curriculum.mjs.\nexport const CURRICULUM: LevelData[] = ${JSON.stringify(curriculum, null, 2)};\n`);
const catalog = curriculum.map(({ id, unitNumber, unit, title, subtitle, xp, description }) => ({ id, unitNumber, unit, title, subtitle, xp, description }));
await writeFile(new URL('../src/data/level-catalog.ts', import.meta.url), `// Generated from Materi-Soal-Algogo.md.\nimport type { LevelData } from './curriculum';\n\nexport type LevelCatalogEntry = Pick<LevelData, 'id' | 'unitNumber' | 'unit' | 'title' | 'subtitle' | 'xp' | 'description'>;\nexport const LEVEL_CATALOG: LevelCatalogEntry[] = ${JSON.stringify(catalog, null, 2)};\n`);
await replaceGenerated('../src/lib/progress-state.ts',
  '// BEGIN GENERATED by scripts/sync-curriculum.mjs from Materi-Soal-Algogo.md.', '// END GENERATED', [
    `export const LEVEL_XP = ${list(levelXp)} as const;`,
    `export const LEVEL_QUESTION_COUNTS = ${list(questionCounts)} as const;`,
    '/** Minimal jawaban benar agar lulus; 0 berarti latihan biasa yang selalu selesai. */',
    `export const LEVEL_PASSING_COUNTS = ${list(passingCounts)} as const;`,
  ].join('\n'));
await replaceGenerated('../firestore.rules',
  '// BEGIN GENERATED by scripts/sync-curriculum.mjs from Materi-Soal-Algogo.md.', '// END GENERATED', [
    `    function maxLevel() { return ${curriculum.length}; }`,
    `    function levelIds() { return ${list(curriculum.map((level) => level.id))}; }`,
    '    // XP total setelah menyelesaikan n level pertama (indeks = jumlah level selesai).',
    `    function xpAfter(count) { return ${list(cumulativeXp)}[count]; }`,
    '    // Minimal jawaban benar per level (indeks = levelId; indeks 0 tidak dipakai).',
    `    function passingCount(levelId) { return ${list([0, ...passingCounts])}[levelId]; }`,
  ].join('\n'));
console.log(`Synced ${units.length} units, ${curriculum.length} levels, ${curriculum.flatMap((level) => level.slides).length} slides and ${curriculum.flatMap((level) => level.questions).length} questions (${version}).`);
