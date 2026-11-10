import { Timestamp } from 'firebase-admin/firestore';

const TYPE_KEY = '__algogoBackupType';

// Keep Firestore timestamp precision; JSON alone would lose its class on restore.
export function encodeBackupData(value) {
  if (value instanceof Timestamp) {
    return { [TYPE_KEY]: 'timestamp', seconds: value.seconds, nanoseconds: value.nanoseconds };
  }
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return value;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (Array.isArray(value)) return value.map(encodeBackupData);
  if (value && Object.getPrototypeOf(value) === Object.prototype && !(TYPE_KEY in value)) {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, encodeBackupData(item)]));
  }
  // Abort before migration instead of silently losing unsupported data types.
  throw new Error('Backup encountered an unsupported Firestore value. No migration was applied.');
}

export function decodeBackupData(value) {
  if (value === null || typeof value !== 'object') return value;
  if (Array.isArray(value)) return value.map(decodeBackupData);
  if (value[TYPE_KEY] === 'timestamp') return new Timestamp(value.seconds, value.nanoseconds);
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, decodeBackupData(item)]));
}
