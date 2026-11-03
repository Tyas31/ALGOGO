import type { User } from 'firebase/auth';
import {
  collection, doc, getDoc, getDocs, onSnapshot, orderBy,
  query, runTransaction, serverTimestamp, getDocFromServer, updateDoc,
  type Timestamp,
} from 'firebase/firestore';

import type { LevelData, LessonSlide, QuestionData } from '@/data/curriculum';
import { getDatabase } from '@/lib/firebase';
import { finishLevel, initialProgress, type ProgressState } from '@/lib/progress-state';

export type AppUser = { uid: string; name: string; email: string; joinedYear: number };

export type LeaderboardEntry = {
  uid: string;
  rank: number;
  name: string;
  handle: string;
  xp: number;
  streak: number;
  isCurrentUser: boolean;
};

export type QuizResult = { correctCount: number; totalQuestions: number; attemptId: string };
export type QuizCompletion = { xpAwarded: number; passed: boolean };

const serverClocks = new Map<string, { offset: number; sampledAt: number }>();

export function synchronizedDate(uid?: string) {
  return new Date(Date.now() + (uid ? serverClocks.get(uid)?.offset ?? 0 : 0));
}

function rememberServerTime(uid: string, timestamp: Timestamp) {
  serverClocks.set(uid, { offset: timestamp.toMillis() - Date.now(), sampledAt: Date.now() });
}

async function studyNow(uid: string) {
  const clock = serverClocks.get(uid);
  if (!clock || Math.abs(Date.now() - clock.sampledAt) > 60_000) {
    // Sample a server timestamp in an existing owner-only document.
    const profileRef = doc(getDatabase(), 'users', uid);
    await updateDoc(profileRef, { updatedAt: serverTimestamp() });
    const profile = await getDocFromServer(profileRef);
    rememberServerTime(uid, profile.data()!.updatedAt as Timestamp);
  }
  return synchronizedDate(uid);
}

export function appUser(user: User): AppUser {
  return {
    uid: user.uid,
    name: user.displayName || user.email?.split('@')[0] || 'Sobat Algo',
    email: user.email || '',
    joinedYear: new Date(user.metadata.creationTime || Date.now()).getFullYear(),
  };
}

function leaderboardData(user: AppUser, progress: ProgressState) {
  return {
    displayName: user.name,
    handle: user.name.toLowerCase().replace(/\s+/g, '_'),
    xp: progress.xp,
    streakDays: progress.streakDays,
    updatedAt: serverTimestamp(),
  };
}

export async function ensureAccount(user: AppUser) {
  const db = getDatabase();
  const profileRef = doc(db, 'users', user.uid);
  const progressRef = doc(db, 'progress', user.uid);
  const boardRef = doc(db, 'leaderboard', user.uid);

  await runTransaction(db, async (transaction) => {
    const [profile, progress, board] = await Promise.all([
      transaction.get(profileRef),
      transaction.get(progressRef),
      transaction.get(boardRef),
    ]);

    if (!profile.exists()) {
      transaction.set(profileRef, {
        displayName: user.name, email: user.email,
        createdAt: serverTimestamp(), updatedAt: serverTimestamp(),
      });
    } else if (profile.data().displayName !== user.name) {
      transaction.update(profileRef, {
        displayName: user.name,
        updatedAt: serverTimestamp(),
      });
    }

    const state = progress.exists()
      ? progress.data() as ProgressState
      : initialProgress();

    if (!progress.exists()) {
      transaction.set(progressRef, {
        ...state,
        updatedAt: serverTimestamp(),
      });
    }

    // Buat data leaderboard hanya jika belum tersedia.
    // Login berikutnya tidak mengubah waktu updatedAt leaderboard.
    if (!board.exists()) {
      transaction.set(boardRef, leaderboardData(user, state));
    }
  });

  const board = await getDocFromServer(boardRef);
  if (board.exists() && board.data().updatedAt) {
    rememberServerTime(user.uid, board.data().updatedAt as Timestamp);
  }
}

export function watchProgress(
  uid: string,
  next: (value: ProgressState) => void,
  error: (error: Error) => void
) {
  return onSnapshot(doc(getDatabase(), 'progress', uid), (snapshot) => {
    if (!snapshot.exists()) {
      return error(new Error('Progres belum tersedia. Coba lagi.'));
    }
    next(snapshot.data() as ProgressState);
  }, error);
}

export function watchLeaderboard(
  uid: string,
  next: (value: LeaderboardEntry[]) => void,
  error: (error: Error) => void
) {
  return onSnapshot(
    query(
      collection(getDatabase(), 'leaderboard'),
      orderBy('xp', 'desc')
    ),
    (snapshot) => {
      const entries = snapshot.docs.map((entry) => {
        const data = entry.data();

        return {
          uid: entry.id,
          rank: 0,
          name: String(data.displayName),
          handle: String(data.handle),
          xp: Number(data.xp),
          streak: Number(data.streakDays),
          isCurrentUser: entry.id === uid,
          updatedAt: data.updatedAt ?? null,
        };
      });

      // XP tertinggi berada di atas.
      // Jika XP sama, updatedAt yang lebih awal berada di atas.
      entries.sort((a, b) => {
        if (b.xp !== a.xp) {
          return b.xp - a.xp;
        }

        const timeA = a.updatedAt?.toMillis?.() ?? 0;
        const timeB = b.updatedAt?.toMillis?.() ?? 0;

        if (timeA !== timeB) {
          return timeA - timeB;
        }

        return a.uid.localeCompare(b.uid);
      });

      // Berikan nomor ranking unik dan berurutan.
      const rankedEntries: LeaderboardEntry[] = entries.map(
        (entry, index) => ({
          uid: entry.uid,
          rank: index + 1,
          name: entry.name,
          handle: entry.handle,
          xp: entry.xp,
          streak: entry.streak,
          isCurrentUser: entry.isCurrentUser,
        })
      );

      next(rankedEntries);
    },
    error
  );
}

export async function saveQuiz(
  user: AppUser,
  levelId: number,
  result: QuizResult
): Promise<QuizCompletion> {
  const db = getDatabase();
  const now = await studyNow(user.uid);
  const progressRef = doc(db, 'progress', user.uid);
  const attemptRef = doc(db, 'users', user.uid, 'attempts', result.attemptId);

  let observedCompletion: boolean | undefined;

  const commit = () => runTransaction(db, async (transaction) => {
    // Keep the attempt ID on retry, including when the first commit's response is lost.
    const [progress, existingAttempt] = await Promise.all([
      transaction.get(progressRef),
      transaction.get(attemptRef),
    ]);

    if (existingAttempt.exists()) {
      const data = existingAttempt.data();
      return {
        xpAwarded: Number(data.xpAwarded),
        passed: data.passed ?? (data.levelId !== 8 || data.correctCount >= 11),
      };
    }

    if (!progress.exists()) {
      throw new Error('Progres belum siap. Coba lagi.');
    }

    observedCompletion = (progress.data().completedLevels as number[]).includes(levelId);

    const { next, xpAwarded, passed } = finishLevel(
      progress.data() as ProgressState,
      levelId,
      result,
      now
    );

    if (
      !Number.isInteger(result.correctCount) ||
      result.correctCount < 0 ||
      result.correctCount > result.totalQuestions ||
      result.totalQuestions < 1
    ) {
      throw new Error('Hasil latihan tidak valid.');
    }

    transaction.set(progressRef, {
      ...next,
      updatedAt: serverTimestamp(),
    });

    transaction.set(
      doc(db, 'leaderboard', user.uid),
      leaderboardData(user, next)
    );

    transaction.set(attemptRef, {
      levelId,
      correctCount: result.correctCount,
      totalQuestions: result.totalQuestions,
      score: Math.round(result.correctCount / result.totalQuestions * 100),
      xpAwarded,
      passed,
      completedAt: serverTimestamp(),
    });

    return { xpAwarded, passed };
  });

  try {
    return await commit();
  } catch (failure) {
    // A competing device may finish the same level between our read and commit.
    // Rules can reject the stale XP delta before the SDK reports a transaction
    // conflict. Retry once only when a fresh owner read confirms that exact race.
    if (
      typeof failure === 'object' &&
      failure !== null &&
      'code' in failure &&
      failure.code === 'permission-denied' &&
      observedCompletion === false
    ) {
      const current = await getDocFromServer(progressRef);
      if (
        (current.data()?.completedLevels as number[] | undefined)
          ?.includes(levelId)
      ) {
        return commit();
      }
    }
    throw failure;
  }
}

export function newAttemptId(uid: string) {
  return doc(collection(getDatabase(), 'users', uid, 'attempts')).id;
}

export async function resetProgress(user: AppUser) {
  const db = getDatabase();
  const state = initialProgress();

  await runTransaction(db, async (transaction) => {
    await transaction.get(doc(db, 'progress', user.uid));

    transaction.set(
      doc(db, 'progress', user.uid),
      { ...state, updatedAt: serverTimestamp() }
    );

    transaction.set(
      doc(db, 'leaderboard', user.uid),
      leaderboardData(user, state)
    );
  });
}

const levelCache = new Map<number, { level: LevelData; loadedAt: number }>();

export async function loadLevel(levelId: number): Promise<LevelData> {
  const cached = levelCache.get(levelId);
  if (cached && Date.now() - cached.loadedAt < 60_000) return cached.level;

  if (!Number.isInteger(levelId) || levelId < 1 || levelId > 8) {
    throw new Error('Level tidak ditemukan.');
  }

  const levelRef = doc(getDatabase(), 'levels', String(levelId));

  const [level, materials, questions] = await Promise.all([
    getDoc(levelRef),
    getDocs(query(collection(levelRef, 'materials'), orderBy('order'))),
    getDocs(query(collection(levelRef, 'questions'), orderBy('order'))),
  ]);

  if (!level.exists() || questions.empty) {
    throw new Error('Materi belum tersedia. Coba lagi nanti.');
  }

  if (level.data().id !== levelId || questions.size !== level.data().questionCount) {
    throw new Error('Materi sedang diperbarui. Coba muat ulang beberapa saat lagi.');
  }

  const data = {
    ...level.data(),
    id: levelId,
    slides: level.data().examIntro
      ? []
      : materials.docs.map((item) => item.data() as LessonSlide),
    questions: questions.docs.map((item) => item.data() as QuestionData),
  } as LevelData;

  levelCache.set(levelId, { level: data, loadedAt: Date.now() });
  return data;
}