export function errorMessage(error: unknown) {
  const code = typeof error === 'object' && error !== null && 'code' in error
    ? String(error.code) : '';
  switch (code) {
    case 'auth/invalid-email': return 'Alamat email belum benar.';
    case 'auth/email-already-in-use': return 'Email ini sudah terdaftar. Silakan masuk.';
    case 'auth/weak-password': return 'Gunakan kata sandi dengan sedikitnya 6 karakter.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found': return 'Email atau kata sandi tidak cocok.';
    case 'auth/too-many-requests': return 'Terlalu banyak percobaan. Coba lagi beberapa saat.';
    case 'auth/network-request-failed':
    case 'unavailable': return 'Koneksi terputus. Periksa internet lalu coba lagi.';
    case 'permission-denied': return 'Data belum dapat diakses. Coba masuk kembali.';
    default: return error instanceof Error ? error.message : 'Terjadi kesalahan. Coba lagi.';
  }
}
