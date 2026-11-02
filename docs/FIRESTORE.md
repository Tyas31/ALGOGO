# Backend ALGOGO

Proyek Firebase: `algogo-af45b`. Database `(default)` menggunakan Firestore Standard,
lokasi `asia-southeast2` (Jakarta), paket Spark. Aplikasi Web terdaftar sebagai
`algogo-app`. Penyedia Authentication yang digunakan adalah Email/Password.

## Menjalankan aplikasi

1. Pasang dependensi dengan `npm ci`.
2. Salin `.env.example` menjadi `.env.local` dan isi konfigurasi aplikasi Web dari
   Firebase Console. Pada komputer yang dipakai menyiapkan proyek ini, `.env.local`
   sudah diisi dan diabaikan Git.
3. Jalankan `npx expo start`, lalu buka melalui Expo Go atau web.
4. Pilih **Belum punya akun? Daftar**. Nama tampilan, email, dan kata sandi diperlukan.
   Kata sandi dikelola Firebase Authentication dan tidak disimpan di Firestore.

Jika `npm`/`npx` tidak dikenali di terminal komputer ini, launcher npm sementara
yang disiapkan saat integrasi dapat dipakai dari folder ALGOGO:

```powershell
& "$env:TEMP\algogo-npm-tools\npx.cmd" expo start
```

Firebase JS SDK dipakai bersama AsyncStorage untuk mempertahankan sesi pada Android/iOS.
Versi AsyncStorage dipilih oleh `expo install`. Tidak diperlukan perubahan folder native.
Koneksi internet diperlukan untuk inisialisasi akun dan penyimpanan hasil kuis.

## Pemetaan dari algogo_db.sql

Dump SQL berisi tujuh tabel tanpa baris data. Struktur diadaptasi sebagai berikut:

| SQL | Firestore | Isi |
| --- | --- | --- |
| users | users/{uid} | displayName, email, createdAt, updatedAt |
| statistik | progress/{uid} | xp, streakDays, longestStreak, lastStudyDay, completedLevels, updatedAt |
| level_belajar | levels/{id} | metadata level, XP, ringkasan, urutan, questionCount |
| materi | levels/{id}/materials/{id} | slide beserta ilustrasi, contoh kode, dan urutan |
| bank_soal | levels/{id}/questions/{id} | lima jenis soal, pembahasan, dan reviewLevelIds untuk ujian |
| pilihan_jawaban | field di dokumen soal | options, chips, stepItems, correctAnswer, correctOrder, acceptedAnswers |
| hasil_latihan | users/{uid}/attempts/{id} | levelId, correctCount, totalQuestions, score, xpAwarded, passed, completedAt |

`leaderboard/{uid}` hanya memuat displayName, handle, xp, streakDays, dan updatedAt.
Email hanya ada di profil privat. UID Firebase menggantikan nomor pengguna SQL.
Nama tampilan tidak digunakan sebagai identitas unik akun.

Sumber materi adalah `Materi-Soal-Algogo.md`. `npm run curriculum:sync` menyusun
`src/data/curriculum.ts` dan katalog ringan `src/data/level-catalog.ts` dari dokumen
tersebut: 8 level, 35 slide, 50 soal, total 93 dokumen. Level 1–7 masing-masing
memiliki 5 slide dan 5 soal; level 8 memiliki pembuka ujian dan 15 soal tanpa slide
materi. `npm run firebase:export` mengekspor ulang ke
`firebase/curriculum.json`. File ini adalah daftar path/data untuk proses seed;
bukan format managed import/export Google Cloud. Data awal sudah diunggah ke proyek.
Perubahan materi berikutnya harus dilakukan oleh pemilik melalui Firebase Console
atau lingkungan server tepercaya. Klien aplikasi tidak diberi izin mengubah materi.

## Aturan perilaku

- Profil, progres, dan entri peringkat awal dibuat bersama dalam transaksi.
- Akun baru memiliki 0 XP dan 0 hari streak; hanya level 1 yang terbuka.
- Menyelesaikan kuis level memberi 50 XP untuk level 1–7 dan 150 XP untuk level 8,
  sekali per level. Maksimum dari kurikulum saat ini adalah 500 XP.
- Ujian akhir baru selesai jika minimal 11 dari 15 soal benar. Nilai 0–10 tetap
  dicatat sebagai percobaan, dengan 0 XP tambahan dan tanpa membuka lencana.
  Layar hasil menyarankan level yang perlu diulas berdasarkan soal yang salah.
- Kuis ulang disimpan sebagai percobaan baru dengan 0 XP tambahan. Mencoba ulang
  penyimpanan setelah gangguan koneksi memakai ID percobaan yang sama agar tidak ganda.
- Hasil kuis, progres, dan peringkat diperbarui dalam transaksi yang sama.
- Streak mengikuti hari Asia/Jakarta dengan waktu yang disinkronkan dari timestamp
  Firestore. Belajar beberapa kali sehari tidak menambah
  streak lagi; setelah melewatkan satu hari, streak berikutnya dimulai dari 1.
- Satu node visual mewakili tepat satu level dokumen. Menjawab satu soal belum
  menyelesaikan node. Menuntaskan seluruh kuis hanya menandai node itu selesai dan
  membuka satu node berikutnya. Kuis ulang tidak membuka node tambahan.
- Delapan ID level yang sudah tersimpan tetap digunakan, sehingga progres akun
  lama tidak direset saat jalur 43 node diganti dengan 8 node yang sesuai dokumen.
- Kolom tulis kode menerima beberapa baris. Pembanding mempertahankan teks literal
  dan struktur indentasi, serta menerima variasi nama variabel dan kutip yang
  diajarkan dokumen. Soal susun kode memakai indeks pilihan sehingga dua baris
  identik dapat dipilih masing-masing satu kali.
- Reset mengosongkan progres dan peringkat setelah konfirmasi di aplikasi.
  Riwayat percobaan tetap ada.
- Peringkat memakai total XP; pengguna dengan XP sama memiliki peringkat yang sama.
  Halaman menampilkan sepuluh entri teratas dan peringkat pengguna saat ini.

## Keamanan dan pengelolaan

`firestore.rules` adalah salinan aturan yang sudah dipublikasikan. Aturan membatasi
profil, progres, dan riwayat ke pemilik UID; membatasi field dan nilai; mencocokkan
XP/peringkat dengan progres; serta menolak perubahan riwayat dan materi dari klien.
Semua akses tanpa autentikasi ditolak. Tidak ada izin seed sementara yang tersisa.

Penilaian jawaban masih dilakukan di aplikasi untuk umpan balik belajar. Aturan
memvalidasi struktur/nilai hasil dan perubahan XP, tetapi tidak membuktikan jawaban
benar secara independen. Untuk ujian atau kompetisi yang membutuhkan penilaian
tepercaya, pindahkan kunci jawaban dan penilaian ke server sebelum penggunaan tersebut.

Konfigurasi `EXPO_PUBLIC_FIREBASE_*` adalah konfigurasi klien yang masuk ke bundel.
Kendali akses ada pada Authentication dan Security Rules. Jangan memasukkan private
key Admin SDK ke aplikasi atau ke variabel `EXPO_PUBLIC_*`.

Untuk menerapkan perubahan aturan dari terminal dengan Firebase CLI yang sudah login:

```powershell
npx firebase-tools deploy --only "firestore:rules,firestore:indexes" --project algogo-af45b
```

Aturan XP dan progres saat ini mengikuti delapan level yang ada. Jika menambah level
atau mengubah hadiah XP, perbarui `LEVEL_XP`, `LEVEL_QUESTION_COUNTS`, aturan Firestore,
dan pengujiannya sebelum menyebarkan kurikulum baru. Firestore tidak menjalankan
foreign key atau ON DELETE CASCADE SQL; penghapusan akun harus mencakup data turunannya.

## Verifikasi

```powershell
npx expo lint
npx tsc --noEmit
npm test
npx expo export --platform android --output-dir .expo/verify-android
```

`npm run test:firestore` menjalankan regresi langsung ke proyek Firebase memakai
akun sementara, lalu membersihkan akun dan data milik akun uji itu. Pengujian
mencakup pembukaan satu node, perbedaan soal per level, percobaan bersamaan,
serta batas ujian 10/15 dan 11/15. Tidak mengubah progres pengguna lain.

Uji integrasi ke Firestore juga telah dijalankan dengan akun sementara: profil baru,
pengambilan materi/soal, simpan dan ulang kuis, percobaan bersamaan, peringkat, reset,
penolakan XP arbitrer, penolakan penulisan materi, penolakan perubahan hasil lama,
serta isolasi data antarakun. Akun dan data uji dibersihkan setelah pengujian.
