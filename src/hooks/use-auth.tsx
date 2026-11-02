import {
  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,
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
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [initializing, setInitializing] = useState(firebaseConfigured);
  const registering = useRef(false);

  useEffect(() => {
    if (!firebaseConfigured) return;
    return onAuthStateChanged(getFirebaseAuth(), (value) => {
      if (!registering.current) setUser(value ? appUser(value) : null);
      setInitializing(false);
    });
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
      user, initializing, configured: firebaseConfigured, signIn, signUp,
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
