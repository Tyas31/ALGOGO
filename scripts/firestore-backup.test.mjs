import assert from 'node:assert/strict';
import test from 'node:test';
import { Timestamp } from 'firebase-admin/firestore';
import { decodeBackupData, encodeBackupData } from './firestore-backup.mjs';

test('migration backups restore progress, nested curriculum, and nanosecond timestamps', () => {
  const original = {
    xp: 500, streakDays: 2, lastStudyDay: null, completedLevels: [1, 2, 3],
    updatedAt: new Timestamp(1794300000, 123456789),
    questions: [{ code: 'print("Halo")', enabled: true, explanation: '', options: ['A', 'B'] }],
  };
  const restored = decodeBackupData(JSON.parse(JSON.stringify(encodeBackupData(original))));
  assert.deepEqual(restored, original);
  assert.equal(restored.updatedAt.nanoseconds, 123456789);
});

test('migration aborts rather than produce a lossy or ambiguous backup', () => {
  for (const value of [undefined, NaN, new Date(), { __algogoBackupType: 'timestamp' }]) {
    assert.throws(() => encodeBackupData({ nested: [value] }), /unsupported/);
  }
});
