import { applicationDefault, deleteApp, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export async function grantAdmin({ app, email, apply = false }) {
  const auth = getAuth(app);
  const user = await auth.getUserByEmail(email.trim());
  if (user.disabled) throw new Error('Akun yang dinonaktifkan tidak dapat dijadikan admin.');
  if (!apply) return { uid: user.uid, email: user.email, role: user.customClaims?.role ?? 'user', applied: false };
  const directory = new URL('../.expo/verification/admin/', import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL(`role-before-${Date.now()}.json`, directory), JSON.stringify({
    projectId: app.options.projectId, uid: user.uid, email: user.email, claims: user.customClaims ?? {},
  }, null, 2), { flag: 'wx' });
  await auth.setCustomUserClaims(user.uid, { ...user.customClaims, role: 'admin' });
  if ((await auth.getUser(user.uid)).customClaims?.role !== 'admin') throw new Error('Peran admin belum tersimpan.');
  return { uid: user.uid, email: user.email, role: 'admin', applied: true };
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  const email = process.argv[process.argv.indexOf('--email') + 1];
  if (!process.argv.includes('--email') || !email?.includes('@')) throw new Error('Gunakan --email akun-yang-sudah-terdaftar.');
  const app = initializeApp({ credential: applicationDefault(), projectId: process.env.FIREBASE_PROJECT_ID || 'algogo-af45b' });
  try { console.log(JSON.stringify(await grantAdmin({ app, email, apply: process.argv.includes('--apply') }))); }
  finally { await deleteApp(app); }
}
