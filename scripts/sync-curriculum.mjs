import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { loadTypeScript } from './load-typescript.mjs';

// Keep the supplied teaching document authoritative instead of hand-copying questions.
const source = (await readFile(new URL('../Materi-Soal-Algogo.md', import.meta.url), 'utf8')).replace(/\r\n/g, '\n');
const { CURRICULUM: previous } = await loadTypeScript('../src/data/curriculum.ts');
const version = createHash('sha256').update(source).digest('hex').slice(0, 12);
const sections = [...source.matchAll(/^## Level (\d+) · ([^\n]+)\n([\s\S]*?)(?=^## Level |$(?![\s\S]))/gm)];
assert.equal(sections.length, 8, 'The source must define exactly eight levels');

function plain(text) {
  const snippets = [];
  return text.replace(/`([^`]+)`/g, (_, value) => {
    snippets.push(value);
    return `\u0000${snippets.length - 1}\u0000`;
  }).replace(/\\([_*])/g, '$1').replace(/\*\*/g, '')
    .replace(/\*([^*\n]+)\*/g, '$1')
    .replace(/\u0000(\d+)\u0000/g, (_, index) => snippets[Number(index)]).trim();
}
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
          : /^(Tips:|Tahukah kamu\?|Ingat tiga hal ini!)/.test(paragraph) ? 'tip' : 'paragraph';
      blocks.push({ kind, text: paragraph.replace(/^Pertanyaan pemantik:\s*/, '') });
    }
  }
  for (const match of text.matchAll(/```([^\n]*)\n([\s\S]*?)```/g)) {
    paragraphs(text.slice(offset, match.index));
    blocks.push({ kind: match[1].trim() === 'python' ? 'code' : 'output', text: match[2].replace(/\n$/, '') });
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
    assert.equal(lines.filter((line) => line.includes('(benar)')).length, 1);
    result.options = lines.map((line) => plain(line.slice(2).replace(/\s*\(benar\)\s*$/, '')));
    result.correctAnswer = result.options[lines.findIndex((line) => line.includes('(benar)'))];
    const snippet = codeBlocks(main).find((block) => block.language === 'python');
    if (snippet) result.codeSnippet = snippet.text;
  } else if (type === 'blank') {
    result.codeTemplate = codeBlocks(main).find((block) => block.language === 'python')?.text;
    const choices = main.match(/Pilihan chip:\s*([^\n]+)/)?.[1].split('·').map((value) => value.trim()) || [];
    assert.equal(choices.length, 3);
    result.chips = choices.map((value) => plain(value.replace(/\s*\(benar\)\s*$/, '')));
    result.correctAnswer = result.chips[choices.findIndex((value) => value.includes('(benar)'))];
    assert.ok(result.codeTemplate && /_{3,}/.test(result.codeTemplate));
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
    const answerSection = main.split(/\nJawaban:\s*\n/)[1];
    assert.ok(answerSection, `Missing written answer for ${levelId}/${id}`);
    result.acceptedAnswers = codeBlocks(answerSection).filter((block) => block.language === 'python').map((block) => block.text);
    result.correctAnswer = result.acceptedAnswers[0];
    if (levelId === 4) result.acceptedAnswers.push(result.correctAnswer
      .replace('jam < 12', 'jam >= 12').replace('"Selamat pagi"', '"__SWAP__"')
      .replace('"Selamat siang"', '"Selamat pagi"').replace('"__SWAP__"', '"Selamat siang"'));
    if (levelId === 6) result.acceptedAnswers.push(result.correctAnswer.replace('suhu >= 20 and suhu <= 30', '20 <= suhu <= 30'));
    if (levelId === 8 && id === 14) result.acceptedAnswers.push(
      'pilihan = int(input("Pilih rasa (1-3): "))\nif pilihan == 1:\n    print("Cokelat")\nelif pilihan == 2:\n    print("Vanila")\nelif pilihan == 3:\n    print("Stroberi")\nelse:\n    print("Pilihan tidak ada")');
    if (levelId === 8 && id === 15) result.acceptedAnswers.push(
      result.correctAnswer.replace('total = total + i', 'total += i'),
      'total = 0\ni = 1\nwhile i <= 10:\n    total = total + i\n    i = i + 1\nprint(total)',
      'total = 0\ni = 1\nwhile i <= 10:\n    total += i\n    i += 1\nprint(total)');
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
  const old = previous.find((level) => level.id === id);
  const reviewMap = {};
  if (id === 8) for (const row of body.matchAll(/^\| (\d+) \|[^\n]+?\| (Level [^\n|]+)\|/gm)) {
    reviewMap[Number(row[1])] = row[2].match(/\d+/g).map(Number);
  }
  const slides = [...body.matchAll(/^### Materi (\d+)\/5: ([^\n]+)\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)].map((slide) => {
    const slideId = Number(slide[1]);
    const mascot = slide[3].match(/maskot `mascot-([^`]+)`/)?.[1] || 'laptop';
    const illustration = slide[3].match(/`illust-([^`]+)`/)?.[1];
    return {
      id: slideId, title: slide[2], blocks: materialBlocks(slide[3]),
      mascotKey: mascot === 'correct' || mascot === 'wrong' ? 'laptop' : mascot,
      ...(illustration === 'mi-instan' ? { illustrationKey: 'miInstan' } : illustration === 'cokelat' ? { illustrationKey: 'cokelat' } : {}),
    };
  });
  assert.equal(slides.length, id === 8 ? 0 : 5);
  const questions = [...body.matchAll(/^### Soal (\d+)\/(\d+) · ([^\n]+)\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)]
    .map((question) => parseQuestion(question, id, reviewMap));
  assert.equal(questions.length, id === 8 ? 15 : 5);
  const ending = body.match(/^### Penutup:[^\n]+\n([\s\S]*?)(?=^### )/m)?.[1] || '';
  const examOpening = body.match(/^### Layar Pembuka: ([^\n]+)\n([\s\S]*?)(?=^### )/m);
  const result = {
    id, unitNumber: id <= 3 ? 1 : id <= 7 ? 2 : 3,
    unit: id <= 3 ? 'Unit 1 · Dasar Algoritma & Python' : id <= 7 ? 'Unit 2 · Percabangan & Perulangan' : 'Unit 3 · Ujian Akhir',
    title, subtitle: old.subtitle,
    xp: id === 8 ? 150 : 50,
    description: plain(body.split(/^### /m)[0]),
    slides,
    summaryPoints: [...ending.matchAll(/^- (.+)$/gm)].map((item) => plain(item[1])),
    questions,
    contentVersion: version,
  };
  if (examOpening) {
    result.examIntro = { title: examOpening[1], body: textParagraphs(examOpening[2]).join('\n\n') };
    result.passingCorrectCount = 11;
  }
  return result;
});
const oldSource = await readFile(new URL('../src/data/curriculum.ts', import.meta.url), 'utf8');
const types = oldSource.split('export const CURRICULUM: LevelData[] =')[0]
  .replace(/\/\/ Generated from Materi-Soal-Algogo\.md[^\n]*\n/g, '');
await writeFile(new URL('../src/data/curriculum.ts', import.meta.url), `${types}// Generated from Materi-Soal-Algogo.md by scripts/sync-curriculum.mjs.\nexport const CURRICULUM: LevelData[] = ${JSON.stringify(curriculum, null, 2)};\n`);
const catalog = curriculum.map(({ id, unitNumber, unit, title, subtitle, xp, description }) => ({ id, unitNumber, unit, title, subtitle, xp, description }));
await writeFile(new URL('../src/data/level-catalog.ts', import.meta.url), `// Generated from Materi-Soal-Algogo.md.\nimport type { LevelData } from './curriculum';\n\nexport type LevelCatalogEntry = Pick<LevelData, 'id' | 'unitNumber' | 'unit' | 'title' | 'subtitle' | 'xp' | 'description'>;\nexport const LEVEL_CATALOG: LevelCatalogEntry[] = ${JSON.stringify(catalog, null, 2)};\n`);
console.log(`Synced ${curriculum.length} levels, ${curriculum.flatMap((level) => level.slides).length} slides and ${curriculum.flatMap((level) => level.questions).length} questions (${version}).`);
