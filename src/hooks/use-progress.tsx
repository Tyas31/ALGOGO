import { createContext, use, useState, type ReactNode } from 'react';
import { CURRICULUM } from '@/data/curriculum';

export type LeaderboardUser = {
  rank: number;
  name: string;
  handle: string;
  xp: number;
  streak: number;
  isCurrentUser?: boolean;
};

type ProgressContextValue = {
  xp: number;
  streakDays: number;
  currentLevelId: number;
  currentStepNodeId: number;
  unlockedLevels: number[];
  completedLevels: number[];
  completedStepNodes: number[];
  rank: number;
  completeLevel: (levelId: number, xpGained: number) => void;
  completeStepNode: (nodeId: number, xpGained?: number) => void;
  resetProgress: () => void;
  leaderboard: LeaderboardUser[];
  completedLevelTitles: string[];
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

const INITIAL_UNLOCKED = [1];
const INITIAL_COMPLETED: number[] = [];
const INITIAL_XP = 50;
const INITIAL_STREAK = 2;
const INITIAL_STEP_NODE = 1;

export function ProgressProvider({ children, userName = 'teman' }: { children: ReactNode; userName?: string }) {
  const [xp, setXp] = useState(INITIAL_XP);
  const [streakDays, setStreakDays] = useState(INITIAL_STREAK);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>(INITIAL_UNLOCKED);
  const [completedLevels, setCompletedLevels] = useState<number[]>(INITIAL_COMPLETED);
  const [currentLevelId, setCurrentLevelId] = useState(1);
  const [currentStepNodeId, setCurrentStepNodeId] = useState(INITIAL_STEP_NODE);
  const [completedStepNodes, setCompletedStepNodes] = useState<number[]>([]);

  const completeStepNode = (nodeId: number, xpGained: number = 10) => {
    setXp((prev) => prev + xpGained);
    setCompletedStepNodes((prev) => (prev.includes(nodeId) ? prev : [...prev, nodeId]));
    setCurrentStepNodeId((prev) => Math.max(prev, nodeId + 1));
  };

  const completeLevel = (levelId: number, xpGained: number) => {
    setXp((prev) => prev + xpGained);
    setStreakDays((prev) => prev + 1);

    setCompletedLevels((prev) => (prev.includes(levelId) ? prev : [...prev, levelId]));

    setCompletedStepNodes((prev) =>
      prev.includes(currentStepNodeId) ? prev : [...prev, currentStepNodeId]
    );
    setCurrentStepNodeId((prev) => prev + 1);

    const nextId = levelId + 1;
    if (nextId <= CURRICULUM.length) {
      setUnlockedLevels((prev) => (prev.includes(nextId) ? prev : [...prev, nextId]));
      setCurrentLevelId(nextId);
    }
  };

  const resetProgress = () => {
    setXp(INITIAL_XP);
    setStreakDays(INITIAL_STREAK);
    setUnlockedLevels(INITIAL_UNLOCKED);
    setCompletedLevels(INITIAL_COMPLETED);
    setCurrentLevelId(1);
    setCurrentStepNodeId(INITIAL_STEP_NODE);
    setCompletedStepNodes([]);
  };

  // Hitung peringkat leaderboard dinamis berdasarkan XP user
  const otherUsers: Omit<LeaderboardUser, 'rank'>[] = [
    { name: 'Ahmad Faiz', handle: 'faiz_coder', xp: 450, streak: 9 },
    { name: 'Siti Sarah', handle: 'sarah_dev', xp: 320, streak: 6 },
    { name: 'Rian Pratama', handle: 'rian_py', xp: 210, streak: 4 },
    { name: 'Budi Santoso', handle: 'budi_algo', xp: 80, streak: 1 },
    { name: 'Dina Lestari', handle: 'dina_code', xp: 40, streak: 1 },
  ];

  const allUsers = [
    ...otherUsers,
    {
      name: userName || 'Kamu',
      handle: (userName || 'kamu').toLowerCase().replace(/\s+/g, '_'),
      xp,
      streak: streakDays,
      isCurrentUser: true,
    },
  ].sort((a, b) => b.xp - a.xp);

  const leaderboard: LeaderboardUser[] = allUsers.map((u, idx) => ({
    ...u,
    rank: idx + 1,
  }));

  const currentUserRank = leaderboard.find((u) => u.isCurrentUser)?.rank ?? 4;

  const completedLevelTitles = completedLevels.map((lvlId) => {
    const item = CURRICULUM.find((c) => c.id === lvlId);
    return item ? `Level ${item.id}: ${item.title}` : `Level ${lvlId}`;
  });

  return (
    <ProgressContext
      value={{
        xp,
        streakDays,
        currentLevelId,
        currentStepNodeId,
        unlockedLevels,
        completedLevels,
        completedStepNodes,
        rank: currentUserRank,
        completeLevel,
        completeStepNode,
        resetProgress,
        leaderboard,
        completedLevelTitles,
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
