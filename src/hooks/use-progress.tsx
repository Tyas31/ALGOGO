import { createContext, use, useEffect, useState, type ReactNode } from 'react';

import { LEVEL_CATALOG } from '@/data/level-catalog';
import { useAuth } from '@/hooks/use-auth';
import { errorMessage } from '@/lib/errors';
import { initialProgress, progressPath, visibleStreak, type ProgressState } from '@/lib/progress-state';
import {
  ensureAccount, newAttemptId, resetProgress as resetSavedProgress, saveQuiz, synchronizedDate,
  watchLeaderboard, watchProgress, type LeaderboardEntry, type QuizResult, type QuizCompletion,
} from '@/services/firestore';

type ProgressContextValue = ReturnType<typeof progressPath> & {
  xp: number;
  streakDays: number;
  completedLevels: number[];
  rank: number;
  loading: boolean;
  error: string | null;
  leaderboardError: string | null;
  retry: () => void;
  completeLevel: (levelId: number, result: QuizResult) => Promise<QuizCompletion>;
  createAttemptId: () => string;
  resetProgress: () => Promise<void>;
  leaderboard: LeaderboardEntry[];
  completedLevelTitles: string[];
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressState>(initialProgress);
  const [loading, setLoading] = useState(!!user);
  const [error, setError] = useState<string | null>(null);
  const [leaderboardError, setLeaderboardError] = useState<string | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [rank, setRank] = useState(0);
  const [revision, setRevision] = useState(0);

  const uid = user?.uid;
  const name = user?.name;
  const email = user?.email;

  useEffect(() => {
    if (!uid || !name || !email) return;

    let cancelled = false;
    let stopProgress: (() => void) | undefined;
    let stopLeaderboard: (() => void) | undefined;

    const account = { uid, name, email, joinedYear: 0 };

    ensureAccount(account).then(() => {
      if (cancelled) return;

      stopProgress = watchProgress(uid, (value) => {
        setProgress(value);
        setLoading(false);
        setError(null);
      }, (failure) => {
        setError(errorMessage(failure));
        setLoading(false);
      });

      stopLeaderboard = watchLeaderboard(uid, (entries) => {
        setLeaderboard(entries);

        const currentUser = entries.find(
          (entry) => entry.isCurrentUser
        );

        setRank(currentUser?.rank ?? 0);
        setLeaderboardError(null);
      }, (failure) => {
        setLeaderboardError(errorMessage(failure));
      });
    }).catch((failure) => {
      if (!cancelled) {
        setError(errorMessage(failure));
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
      stopProgress?.();
      stopLeaderboard?.();
    };
  }, [uid, name, email, revision]);

  return (
    <ProgressContext value={{
      ...progressPath(progress.completedLevels),
      xp: progress.xp,
      streakDays: visibleStreak(progress, synchronizedDate(uid)),
      completedLevels: progress.completedLevels,
      rank,
      loading,
      error,
      leaderboardError,
      leaderboard,

      retry: () => {
        setLoading(!!user);
        setError(null);
        setLeaderboardError(null);
        setRevision((value) => value + 1);
      },

      createAttemptId: () => {
        if (!user) throw new Error('Silakan masuk terlebih dahulu.');
        return newAttemptId(user.uid);
      },

      completeLevel: async (levelId, result) => {
        if (!user) throw new Error('Silakan masuk terlebih dahulu.');
        return saveQuiz(user, levelId, result);
      },

      resetProgress: async () => {
        if (!user) throw new Error('Silakan masuk terlebih dahulu.');
        await resetSavedProgress(user);
      },

      completedLevelTitles: progress.completedLevels.map((id) => {
        const level = LEVEL_CATALOG.find((item) => item.id === id);
        return `Level ${id}: ${level?.title || id}`;
      }),
    }}>
      {children}
    </ProgressContext>
  );
}

export function useProgress() {
  const value = use(ProgressContext);

  if (!value) {
    throw new Error('useProgress harus digunakan di dalam ProgressProvider');
  }

  return value;
}