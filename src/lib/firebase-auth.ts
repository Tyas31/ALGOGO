import { getAuth } from 'firebase/auth';

import { firebaseApp } from '@/lib/firebase';

export function getFirebaseAuth() {
  if (!firebaseApp) throw new Error('Konfigurasi Firebase belum tersedia. Periksa .env.local.');
  return getAuth(firebaseApp);
}
