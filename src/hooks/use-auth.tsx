import {
  createUserWithEmailAndPassword, onIdTokenChanged, signInWithEmailAndPassword,
  signOut as firebaseSignOut, updateProfile,
} from 'firebase/auth';
import { createContext, use, useEffect, useRef, useState, type ReactNode } from 'react';

import { firebaseConfigured } from '@/lib/firebase';
import { getFirebaseAuth } from '@/lib/firebase-auth';
import { appUser, type AppUser } from '@/services/firestore';

type AuthContextValue = {
  user: AppUser | null;
  initializing: boolean;
  configured: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [initializing, setInitializing] = useState(firebaseConfigured);
  const [isAdmin, setIsAdmin] = useState(false);
  const registering = useRef(false);

  useEffect(() => {
    if (!firebaseConfigured) return;
    let revision = 0;
    let refreshedUid: string | null = null;
    const stop = onIdTokenChanged(getFirebaseAuth(), async (value) => {
      const current = ++revision;
      try {
        const refresh = !!value && refreshedUid !== value.uid;
        refreshedUid = value?.uid ?? null;
        const token = value ? await value.getIdTokenResult(refresh) : null;
        if (current !== revision) return;
        setIsAdmin(token?.claims.role === 'admin');
        if (!registering.current) setUser(value ? appUser(value) : null);
      } catch {
        if (current !== revision) return;
        setIsAdmin(false);
        if (!registering.current) setUser(value ? appUser(value) : null);
      } finally {
        if (current === revision) setInitializing(false);
      }
    });
    return () => { revision++; stop(); };
  }, []);

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(getFirebaseAuth(), email.trim(), password);
  };

  const signUp = async (name: string, email: string, password: string) => {
    registering.current = true;
    const auth = getFirebaseAuth();
    try {
      const credential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      await updateProfile(credential.user, { displayName: name.trim() });
      setUser(appUser(credential.user));
    } catch (failure) {
      if (auth.currentUser) setUser(appUser(auth.currentUser));
      throw failure;
    } finally {
      registering.current = false;
    }
  };

  return (
    <AuthContext value={{
      user, initializing, isAdmin, configured: firebaseConfigured, signIn, signUp,
      signOut: () => firebaseSignOut(getFirebaseAuth()),
    }}>
      {children}
    </AuthContext>
  );
}

export function useAuth() {
  const value = use(AuthContext);
  if (!value) throw new Error('useAuth harus dipakai di dalam AuthProvider');
  return value;
}
