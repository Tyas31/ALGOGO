# ALGOGO

Aplikasi belajar algoritma dan Python dengan Expo SDK 57, Expo Router,
Firebase Authentication, dan Cloud Firestore.

## Mulai

```powershell
npm ci
```

Konfigurasi Firebase Web untuk proyek bersama `algogo-af45b` tersedia dalam `.env`
yang ikut Git. Setelah clone atau pull, tidak perlu membuat `.env.local` atau
meminta akses Firebase Console untuk mencoba login dan mendaftar.

```powershell
npx expo start
```

Buka aplikasi dengan Expo Go atau web, lalu daftar menggunakan email dan kata sandi.
Materi, progres, dan hasil latihan memerlukan koneksi internet.

Jika Expo sudah berjalan sebelum pull, hentikan dengan `Ctrl+C`, lalu jalankan
`npx expo start --go --clear` dan muat ulang aplikasi. Untuk web, gunakan alamat
yang ditampilkan terminal (biasanya `http://localhost:8081`).

Jika masih muncul **Layanan akun belum tersedia**, periksa `.env.local` lama:
nilai kosong di file tersebut menimpa `.env`. Hapus file lokal yang hanya berisi
template kosong agar konfigurasi bersama digunakan. Jika ingin memakai proyek
Firebase berbeda, gunakan `.env.example` sebagai panduan lalu isi keenam nilai
di `.env.local`; file lokal tetap diabaikan Git.

`.env` hanya berisi identitas publik aplikasi Firebase. Akses akun dan data
tetap diperiksa oleh Firebase Authentication dan Security Rules.

## Pemeriksaan

```powershell
npx expo lint
npx tsc --noEmit
npm test
```

## Backend

[Panduan Firestore](docs/FIRESTORE.md) menjelaskan struktur data, pemetaan dump SQL,
pengaturan Firebase, aturan XP/streak, batas penilaian di klien, dan pengelolaan aturan akses.

[Panduan Admin](docs/ADMIN.md) menjelaskan penetapan role, penambahan soal, serta
pembacaan nilai peserta melalui **Profil → Panel Admin**.

- Konfigurasi aplikasi bersama: `.env` dan `src/lib/firebase.ts`; override opsional: `.env.local`.
- Integrasi data: `src/services/firestore.ts`.
- Aturan database: `firestore.rules`.
- Sumber materi: `Materi-Soal-Algogo.md`, dengan 6 unit, 33 level, 150 slide, dan 185 soal.
- Unggah materi dan reset progres (khusus pemilik proyek): `npm run firebase:seed`, lihat [Panduan Firestore](docs/FIRESTORE.md).
- Satu bintang mewakili satu level; hanya level berikutnya yang terbuka setelah kuis selesai.
- Sinkronisasi sumber: `npm run curriculum:sync`.
- Uji integrasi Firebase dengan akun sementara: `npm run test:firestore`.
- Ekspor data awal: `npm run firebase:export`.
