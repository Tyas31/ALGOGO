import { useEffect, useState } from 'react';

import type { LevelData } from '@/data/curriculum';
import { errorMessage } from '@/lib/errors';
import { loadLevel } from '@/services/firestore';

export function useLevel(levelId: number) {
  const [result, setResult] = useState<{
    levelId: number; revision: number; level: LevelData | null; error: string | null;
  } | null>(null);
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    let cancelled = false;
    loadLevel(levelId).then((level) => {
      if (!cancelled) setResult({ levelId, revision, level, error: null });
    }).catch((failure) => {
      if (!cancelled) setResult({ levelId, revision, level: null, error: errorMessage(failure) });
    });
    return () => { cancelled = true; };
  }, [levelId, revision]);
  const current = result?.levelId === levelId && result.revision === revision ? result : null;
  return { level: current?.level ?? null, error: current?.error ?? null, retry: () => setRevision((value) => value + 1) };
}
