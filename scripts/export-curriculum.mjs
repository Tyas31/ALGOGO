import { mkdir, writeFile } from 'node:fs/promises';
import { loadTypeScript } from './load-typescript.mjs';

const { CURRICULUM } = await loadTypeScript('../src/data/curriculum.ts');
const documents = [];
for (const { slides, questions, ...level } of CURRICULUM) {
  const base = `levels/${level.id}`;
  documents.push({ path: base, data: { ...level, order: level.id, materialCount: slides.length, questionCount: questions.length } });
  slides.forEach((slide, index) => documents.push({ path: `${base}/materials/${slide.id}`, data: { ...slide, order: index + 1 } }));
  questions.forEach((question, index) => documents.push({ path: `${base}/questions/${question.id}`, data: { ...question, order: index + 1 } }));
}
await mkdir(new URL('../firebase/', import.meta.url), { recursive: true });
await writeFile(new URL('../firebase/curriculum.json', import.meta.url), `${JSON.stringify(documents, null, 2)}\n`);
console.log(`Exported ${documents.length} documents from ${CURRICULUM.length} levels.`);
