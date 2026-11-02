import 'firebase/auth';
import type AsyncStorage from '@react-native-async-storage/async-storage';
import type { Persistence } from 'firebase/auth';

// Firebase 13's common typings omit this documented React Native-only export.
// Metro resolves the actual implementation from @firebase/auth's react-native entrypoint.
declare module 'firebase/auth' {
  export function getReactNativePersistence(
    storage: Pick<typeof AsyncStorage, 'getItem' | 'setItem' | 'removeItem'>,
  ): Persistence;
}
