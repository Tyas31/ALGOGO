import { createContext, use, useState, type ReactNode } from 'react';

/**
 * Auth dummy: hanya disimpan di memori, belum terhubung ke server.
 * Semua kombinasi nama pengguna + kata sandi diterima.
 */
type AuthContextValue = {
  user: { name: string } | null;
  signIn: (name: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const FAKE_DELAY = 800;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextValue['user']>(null);

  const signIn = async (name: string) => {
    await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY));
    setUser({ name: name.trim() });
  };

  return (
    <AuthContext value={{ user, signIn, signOut: () => setUser(null) }}>{children}</AuthContext>
  );
}

export function useAuth() {
  const value = use(AuthContext);
  if (!value) throw new Error('useAuth harus dipakai di dalam AuthProvider');
  return value;
}
