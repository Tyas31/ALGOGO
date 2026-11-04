import { useEffect, useState } from 'react';

import { useAuth } from '@/hooks/use-auth';
import { errorMessage } from '@/lib/errors';
import { followUser, unfollowUser, watchFollowers, watchFollowing } from '@/services/firestore';

/** Daftar teman yang diikuti dan pengikut pengguna saat ini, diperbarui langsung dari Firestore. */
export function useFollows() {
  const { user } = useAuth();
  const uid = user?.uid;
  const [following, setFollowing] = useState<string[]>([]);
  const [followers, setFollowers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<string | null>(null);

  useEffect(() => {
    if (!uid) return;
    const onError = (failure: Error) => setError(errorMessage(failure));
    const stopFollowing = watchFollowing(uid, setFollowing, onError);
    const stopFollowers = watchFollowers(uid, setFollowers, onError);
    return () => { stopFollowing(); stopFollowers(); };
  }, [uid]);

  const toggleFollow = async (targetUid: string) => {
    if (!uid || pending) return;
    setPending(targetUid);
    setError(null);
    try {
      if (following.includes(targetUid)) await unfollowUser(uid, targetUid);
      else await followUser(uid, targetUid);
    } catch (failure) {
      setError(errorMessage(failure));
    } finally {
      setPending(null);
    }
  };

  return { following, followers, error, pending, toggleFollow };
}
