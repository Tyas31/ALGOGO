# Backend ALGOGO

Proyek Firebase: `algogo-af45b`. Database `(default)` menggunakan Firestore Standard,
lokasi `asia-southeast2` (Jakarta), paket Spark. Aplikasi Web terdaftar sebagai
`algogo-app`. Penyedia Authentication yang digunakan adalah Email/Password.

## Menjalankan aplikasi

1. Pasang dependensi dengan `npm ci`.
2. Konfigurasi Firebase Web proyek bersama sudah tersedia dalam `.env` yang ikut Git.
   Tidak perlu membuat `.env.local` untuk mencoba aplikasi setelah clone/pull.
3. Jalankan `npx expo start`, lalu buka melalui Expo Go atau web.
4. Pilih **Belum punya akun? Daftar**. Nama tampilan, email, dan kata sandi diperlukan.
   Kata sandi dikelola Firebase Authentication dan tidak disimpan di Firestore.

Expo memuat `.env` secara otomatis. `.env.local` tetap diabaikan Git dan dapat
menimpa nilainya jika pengembang ingin memakai proyek Firebase berbeda. Gunakan
`.env.example` sebagai panduan untuk override dan isi semua enam field dari satu
aplikasi Web Firebase yang sama. Jangan mengisi override dengan nilai kosong.
Jika pernah menyalin template kosong menjadi `.env.local`, hapus file kosong
tersebut agar konfigurasi proyek bersama terbaca.

Setelah pull perubahan konfigurasi, hentikan server Expo yang lama dengan
`Ctrl+C`, jalankan `npx expo start --go --clear`, lalu muat ulang web/Expo Go.
Setiap pengembang terhubung ke backend bersama yang sama melalui internet;
localhost hanya menjalankan aplikasi di komputernya masing-masing.

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

`follows/{pengikut}_{diikuti}` menyimpan satu hubungan ikuti (follower, followed, createdAt)
untuk halaman Cari Teman. Hanya pengikut yang boleh membuat atau menghapusnya, tidak bisa
mengikuti diri sendiri, dan yang diikuti harus sudah ada di `leaderboard`.

Sumber materi adalah `Materi-Soal-Algogo.md`. `npm run curriculum:sync` menyusun
`src/data/curriculum.ts` dan katalog ringan `src/data/level-catalog.ts` dari dokumen
tersebut: 6 unit, 33 level, 150 slide, 185 soal, total 368 dokumen. Unit 1–5 masing-masing
berisi 6 level (5 slide dan 5 soal per level); Unit 6 berisi 3 ujian tanpa slide materi
(10, 10, dan 15 soal). Script yang sama juga menulis tabel XP, jumlah soal, dan batas lulus
ke `src/lib/progress-state.ts` dan ke blok `BEGIN GENERATED` di `firestore.rules`, jadi
angka-angka itu tidak perlu diubah manual. `npm run firebase:export` mengekspor ulang ke
`firebase/curriculum.json` untuk diperiksa. Klien aplikasi tidak diberi izin mengubah materi.

### Mengunggah materi dan me-reset progres (khusus pemilik proyek)

`npm run firebase:seed` memakai Firebase Admin SDK, sehingga hanya bisa dijalankan dengan
kredensial pemilik/editor proyek. Buat service account key di Firebase Console > Project
settings > Service accounts > Generate new private key, simpan **di luar folder repo**, lalu:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/ke/service-account.json
npm run firebase:seed                                   # pratinjau, tidak menulis apa pun
npm run firebase:seed -- --apply --reset-progress       # unggah materi + reset semua progres
npx firebase-tools deploy --only firestore:rules --project algogo-af45b
```

Seed menulis semua level, materi, dan soal, lalu menghapus dokumen materi lama yang sudah
tidak ada di dokumen. `--reset-progress` mengembalikan semua progres dan leaderboard ke
0 XP; nama, akun, riwayat percobaan, dan data follow tetap ada. Jalankan seed **sebelum**
deploy rules, lalu minta semua anggota tim pull dan memuat ulang aplikasi.

Setiap penerapan `--apply` terlebih dahulu menyimpan cadangan lokal di
`.expo/verification/upgrade-33/firestore-before-<waktu>.json`. Cadangan berisi dokumen
kurikulum lama serta progres dan leaderboard yang akan direset. Timestamp disimpan
dengan presisi nanodetik; gunakan `decodeBackupData` dari `scripts/firestore-backup.mjs`
untuk membaca kembali nilainya sebagai tipe Firestore saat pemulihan oleh pengelola.
Penulisan dibatalkan jika cadangan gagal atau menemukan tipe data yang tidak didukung.
Reset memakai prasyarat `lastUpdateTime` agar perubahan pengguna setelah pencadangan
tidak tertimpa diam-diam. Cadangan berada di folder yang diabaikan Git.

Pada 10 November 2026, backend `algogo-af45b` telah diperbarui menjadi 33 level,
150 halaman materi, dan 185 soal (368 dokumen kurikulum). Progres dan leaderboard
7 akun lama dicadangkan, lalu direset atas persetujuan pemilik proyek. Aturan baru
mendukung 33 level dan follow/unfollow. Validasi progres mengatasi daftar level kosong
secara khusus, karena operasi slice `0:0` menghasilkan error indeks pada Rules runtime.

## Aturan perilaku

- Profil, progres, dan entri peringkat awal dibuat bersama dalam transaksi.
- Akun baru memiliki 0 XP dan 0 hari streak; hanya level 1 yang terbuka.
- Menyelesaikan kuis level belajar memberi 50 XP (level 1–30), Ujian 1 dan Ujian 2
  memberi 100 XP, dan Ujian Master memberi 150 XP, sekali per level. Maksimum dari
  kurikulum saat ini adalah 1850 XP.
- Ujian 1 dan Ujian 2 baru selesai jika minimal 7 dari 10 soal benar; Ujian Master
  jika minimal 11 dari 15 soal benar. Nilai di bawahnya tetap dicatat sebagai percobaan,
  dengan 0 XP tambahan, dan Ujian Master tidak membuka lencana.
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
- Saat kurikulum dipecah dari 8 menjadi 33 level, isi setiap nomor level berubah,
  sehingga semua progres di-reset dengan `npm run firebase:seed -- --apply --reset-progress`.
- Kolom tulis kode menerima beberapa baris. Pembanding mempertahankan teks literal
  dan struktur indentasi, serta menerima variasi nama variabel dan kutip yang
  diajarkan dokumen. Soal susun kode memakai indeks pilihan sehingga dua baris
  identik dapat dipilih masing-masing satu kali.
- Reset mengosongkan progres dan peringkat setelah konfirmasi di aplikasi.
  Riwayat percobaan tetap ada.
- Peringkat menampilkan semua pengguna terdaftar, diurutkan XP tertinggi. Jika XP sama,
  yang lebih dulu mencapainya (updatedAt lebih awal) berada di atas, dan nomor peringkat
  selalu berurutan.

## Keamanan dan pengelolaan

`firestore.rules` adalah salinan aturan yang sudah dipublikasikan. Aturan membatasi
profil, progres, dan riwayat ke pemilik UID; membatasi field dan nilai; mencocokkan
XP/peringkat dengan progres; serta menolak perubahan riwayat dan materi dari klien.
Semua akses tanpa autentikasi ditolak. Tidak ada izin seed sementara yang tersisa.

Penilaian jawaban masih dilakukan di aplikasi untuk umpan balik belajar. Aturan
memvalidasi struktur/nilai hasil dan perubahan XP, tetapi tidak membuktikan jawaban
benar secara independen. Untuk ujian atau kompetisi yang membutuhkan penilaian
tepercaya, pindahkan kunci jawaban dan penilaian ke server sebelum penggunaan tersebut.

Konfigurasi `EXPO_PUBLIC_FIREBASE_*` dalam `.env` adalah konfigurasi klien publik
yang ikut Git dan masuk ke bundel.
Kendali akses ada pada Authentication dan Security Rules. Jangan memasukkan private
key Admin SDK ke aplikasi atau ke variabel `EXPO_PUBLIC_*`.

Untuk menerapkan perubahan aturan dari terminal dengan Firebase CLI yang sudah login:

```powershell
npx firebase-tools deploy --only "firestore:rules,firestore:indexes" --project algogo-af45b
```

Jika menambah level atau mengubah hadiah XP, ubah `Materi-Soal-Algogo.md`, jalankan
`npm run curriculum:sync` dan `npm test`, lalu seed materi dan deploy rules seperti di atas. Firestore tidak menjalankan
foreign key atau ON DELETE CASCADE SQL; penghapusan akun harus mencakup data turunannya.

## Verifikasi

```powershell
npx expo lint
npx tsc --noEmit
npm test
npx expo export --platform android --output-dir .expo/verify-android
```

Dengan kredensial pengelola yang sama seperti seed, `npm run test:rules` menjalankan
40 kasus pada Rules API tanpa memublikasikan aturan atau menulis dokumen. Kasusnya
mencakup progres kosong, seluruh tahap 1–33, level yang dilompati/duplikat/tidak valid,
dan XP palsu. Hasil terperinci disimpan di
`.expo/verification/upgrade-33/rules-state-tests.json`.

`npm run test:firestore` membaca `.env` bersama (dengan override `.env.local` opsional)
dan menguji pendaftaran serta login, lalu menjalankan regresi langsung ke Firebase memakai
akun sementara, lalu membersihkan akun dan data milik akun uji itu. Pengujian
mencakup pembukaan satu node, perbedaan soal per level, percobaan bersamaan,
serta batas lulus setiap ujian. Dua akun uji juga memeriksa follow/unfollow secara
realtime, penolakan mengikuti diri sendiri/pengguna tidak terdaftar, pemalsuan pengikut,
penghapusan hubungan milik orang lain, dan akses progres privat antarakun.
Tidak mengubah progres pengguna lain.

Uji integrasi ke Firestore juga telah dijalankan dengan akun sementara: profil baru,
pengambilan materi/soal, simpan dan ulang kuis, percobaan bersamaan, peringkat, reset,
penolakan XP arbitrer, penolakan penulisan materi, penolakan perubahan hasil lama,
serta isolasi data antarakun. Akun dan data uji dibersihkan setelah pengujian.
