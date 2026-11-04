import { loadTypeScript } from './load-typescript.mjs';

// Firestore documents for the whole curriculum: levels/{id} plus its materials and questions.
export async function curriculumDocuments() {
  const { CURRICULUM } = await loadTypeScript('../src/data/curriculum.ts');
  const documents = [];
  for (const { slides, questions, ...level } of CURRICULUM) {
    const base = `levels/${level.id}`;
    documents.push({ path: base, data: { ...level, order: level.id, materialCount: slides.length, questionCount: questions.length } });
    slides.forEach((slide, index) => documents.push({ path: `${base}/materials/${slide.id}`, data: { ...slide, order: index + 1 } }));
    questions.forEach((question, index) => documents.push({ path: `${base}/questions/${question.id}`, data: { ...question, order: index + 1 } }));
  }
  return { levels: CURRICULUM, documents };
}
