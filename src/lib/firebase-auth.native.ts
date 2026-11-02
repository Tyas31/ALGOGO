import AsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseError } from 'firebase/app';
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth';

import { firebaseApp } from '@/lib/firebase';

export function getFirebaseAuth() {
  if (!firebaseApp) throw new Error('Konfigurasi Firebase belum tersedia. Periksa .env.local.');
  try {
    return initializeAuth(firebaseApp, { persistence: getReactNativePersistence(AsyncStorage) });
  } catch (error) {
    if (error instanceof FirebaseError && error.code === 'auth/already-initialized') {
      return getAuth(firebaseApp);
    }
    throw error;
  }
}
