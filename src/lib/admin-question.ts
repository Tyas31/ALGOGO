import type { QuestionData } from '@/data/curriculum';

export type QuestionDraft = Omit<QuestionData, 'id'>;

export function validateQuestionDraft(draft: QuestionDraft) {
  const text = (value: unknown, max = 10000): value is string => typeof value === 'string' && value.trim().length > 0 && value.length <= max;
  const list = (value: unknown, min: number, max: number): value is string[] =>
    Array.isArray(value) && value.length >= min && value.length <= max && value.every((item) => text(item, 2000));
  if (!text(draft.title, 200) || !text(draft.prompt) || !text(draft.explanation?.correct) || !text(draft.explanation?.wrong)) {
    throw new Error('Lengkapi judul, pertanyaan, dan pembahasan soal.');
  }
  if (draft.codeSnippet && draft.codeSnippet.length > 10000) throw new Error('Contoh kode terlalu panjang.');
  if (draft.type === 'choice' || draft.type === 'output') {
    if (!list(draft.options, 2, 8) || new Set(draft.options).size !== draft.options.length || !draft.options.includes(draft.correctAnswer)) {
      throw new Error('Isi 2–8 pilihan yang berbeda dan pastikan kunci jawaban sama dengan salah satu pilihan.');
    }
  } else if (draft.type === 'blank') {
    if (!list(draft.chips, 2, 12) || !draft.chips.includes(draft.correctAnswer) || !text(draft.codeTemplate) || !/_{3,}/.test(draft.codeTemplate)) {
      throw new Error('Isi pilihan, kunci jawaban, dan kode dengan bagian kosong berupa ___.');
    }
  } else if (draft.type === 'order') {
    if (!list(draft.stepItems, 2, 20) || !list(draft.correctOrder, 2, 20) ||
        JSON.stringify([...draft.stepItems].sort()) !== JSON.stringify([...draft.correctOrder].sort())) {
      throw new Error('Urutan jawaban harus memuat semua baris kode, termasuk baris yang berulang.');
    }
  } else if (draft.type === 'write') {
    if (!text(draft.correctAnswer)) throw new Error('Isi contoh kode jawaban yang benar.');
  } else throw new Error('Jenis soal tidak dikenal.');
  if (draft.acceptedAnswers && !list(draft.acceptedAnswers, 1, 12)) throw new Error('Variasi jawaban tidak valid.');
  if (draft.reviewLevelIds && (!Array.isArray(draft.reviewLevelIds) || draft.reviewLevelIds.length > 30 ||
      draft.reviewLevelIds.some((id) => !Number.isInteger(id) || id < 1 || id > 30))) throw new Error('Level ulasan harus berada di antara 1 dan 30.');
  return draft;
}
