# ALGOGO

Aplikasi belajar algoritma dan Python dengan Expo SDK 57, Expo Router,
Firebase Authentication, dan Cloud Firestore.

## Mulai

```powershell
npm ci
```

Siapkan `.env.local` dari `.env.example` menggunakan konfigurasi aplikasi Web
Firebase. File lokal pada komputer pengembangan sudah dikonfigurasi untuk
`algogo-af45b` dan diabaikan Git.

```powershell
npx expo start
```

Buka aplikasi dengan Expo Go atau web, lalu daftar menggunakan email dan kata sandi.
Materi, progres, dan hasil latihan memerlukan koneksi internet.

## Pemeriksaan

```powershell
npx expo lint
npx tsc --noEmit
npm test
```

## Backend

[Panduan Firestore](docs/FIRESTORE.md) menjelaskan struktur data, pemetaan dump SQL,
pengaturan Firebase, aturan XP/streak, batas penilaian di klien, dan pengelolaan aturan akses.

- Konfigurasi aplikasi: `.env.local` dan `src/lib/firebase.ts`.
- Integrasi data: `src/services/firestore.ts`.
- Aturan database: `firestore.rules`.
- Sumber materi: `Materi-Soal-Algogo.md`, dengan 8 level, 35 slide, dan 50 soal.
- Satu bintang mewakili satu level; hanya level berikutnya yang terbuka setelah kuis selesai.
- Sinkronisasi sumber: `npm run curriculum:sync`.
- Uji integrasi Firebase dengan akun sementara: `npm run test:firestore`.
- Ekspor data awal: `npm run firebase:export`.
