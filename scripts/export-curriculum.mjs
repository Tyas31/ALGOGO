import { mkdir, writeFile } from 'node:fs/promises';
import { curriculumDocuments } from './curriculum-documents.mjs';

const { levels, documents } = await curriculumDocuments();
await mkdir(new URL('../firebase/', import.meta.url), { recursive: true });
await writeFile(new URL('../firebase/curriculum.json', import.meta.url), `${JSON.stringify(documents, null, 2)}\n`);
console.log(`Exported ${documents.length} documents from ${levels.length} levels.`);
