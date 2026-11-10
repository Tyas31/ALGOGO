import {
  collection, doc, getDocs, limit, orderBy, query, runTransaction, serverTimestamp, startAfter,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';

import { getFirebaseAuth } from '@/lib/firebase-auth';
import { getDatabase } from '@/lib/firebase';
import { validateQuestionDraft, type QuestionDraft } from '@/lib/admin-question';
import { invalidateLevel } from '@/services/firestore';

async function requireAdmin() {
  const user = getFirebaseAuth().currentUser;
  if (!user || (await user.getIdTokenResult()).claims.role !== 'admin') throw new Error('Fitur ini hanya tersedia untuk admin.');
  return user;
}

export async function addQuestion(levelId: number, draft: QuestionDraft) {
  const user = await requireAdmin();
  validateQuestionDraft(draft);
  const db = getDatabase();
  const levelRef = doc(db, 'levels', String(levelId));
  const id = await runTransaction(db, async (transaction) => {
    const level = await transaction.get(levelRef);
    if (!level.exists()) throw new Error('Level tidak ditemukan.');
    const data = level.data();
    if (data.examIntro && !draft.reviewLevelIds?.length) throw new Error('Pilih level ulasan untuk soal ujian.');
    const nextId = Number(data.nextAdminQuestionId ?? 999) + 1;
    const questionRef = doc(collection(levelRef, 'questions'), String(nextId));
    if ((await transaction.get(questionRef)).exists()) throw new Error('Nomor soal sudah digunakan. Muat ulang level.');
    const questionCount = Number(data.questionCount) + 1;
    transaction.set(questionRef, {
      ...draft, id: nextId, order: questionCount, source: 'admin', createdBy: user.uid, createdAt: serverTimestamp(),
    });
    transaction.update(levelRef, { questionCount, nextAdminQuestionId: nextId });
    return nextId;
  });
  invalidateLevel(levelId);
  return id;
}

export type AdminStudent = { uid: string; name: string; email: string };
export async function listStudents(): Promise<AdminStudent[]> {
  const admin = await requireAdmin();
  const snapshots = await getDocs(collection(getDatabase(), 'users'));
  return snapshots.docs.filter((entry) => entry.id !== admin.uid).map((entry) => ({
    uid: entry.id, name: String(entry.data().displayName), email: String(entry.data().email),
  })).sort((a, b) => a.name.localeCompare(b.name));
}

export type AdminAttempt = { id: string; levelId: number; score: number; correctCount: number; totalQuestions: number; completedAt: number | null };
export async function listStudentAttempts(uid: string, after?: QueryDocumentSnapshot) {
  await requireAdmin();
  const base = collection(getDatabase(), 'users', uid, 'attempts');
  const snapshots = await getDocs(query(base, orderBy('completedAt', 'desc'), ...(after ? [startAfter(after)] : []), limit(30)));
  return {
    attempts: snapshots.docs.map((entry): AdminAttempt => ({
      id: entry.id, levelId: Number(entry.data().levelId), score: Number(entry.data().score),
      correctCount: Number(entry.data().correctCount), totalQuestions: Number(entry.data().totalQuestions),
      completedAt: entry.data().completedAt?.toMillis?.() ?? null,
    })),
    cursor: snapshots.docs.length === 30 ? snapshots.docs.at(-1) : undefined,
  };
}
