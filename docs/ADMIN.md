# Admin ALGOGO

Admin memiliki dua fitur: menambahkan soal ke level yang sudah ada dan melihat
riwayat nilai peserta yang sudah pernah masuk ke aplikasi. Akses tersedia melalui
**Profil → Panel Admin**, di web maupun aplikasi mobile.

## Menetapkan akun admin

Peran berasal dari custom claim Firebase Authentication `role: 'admin'`. Pengguna
tanpa claim tersebut diperlakukan sebagai pengguna biasa. Role tidak ditentukan
oleh kolom formulir, alamat email yang di-hardcode, atau field profil yang dapat
diubah pengguna. SQL baru menjadi referensi konsep admin/user; aplikasi tetap
memakai Firebase Authentication dan Firestore.

Pemilik proyek menjalankan script menggunakan kredensial pengelola tepercaya:

```powershell
npm run admin:grant -- --email akun-yang-sudah-terdaftar@example.com
npm run admin:grant -- --email akun-yang-sudah-terdaftar@example.com --apply
```

Tanpa `--apply`, script hanya menampilkan akun dan peran saat ini. Saat diterapkan,
claim sebelumnya dicadangkan di `.expo/verification/admin/`, claim lain tetap
dipertahankan, lalu hasil pemberian peran diperiksa kembali. Akun harus sudah
terdaftar dan tidak sedang dinonaktifkan. Kredensial pengelola tidak dimasukkan
ke aplikasi atau Git. Muat ulang aplikasi atau login kembali setelah perubahan role.

## Menambah soal

Form mendukung pilihan ganda, isi bagian kosong, susun kode, tebak output, dan
tulis kode. Kunci jawaban dan pembahasan wajib diisi; untuk ujian diperlukan juga
level ulasan. Baris kode pada soal susun kode diacak dan duplikat baris dipertahankan.

Soal disimpan dalam `levels/{id}/questions/{idSoal}` dengan `source: 'admin'`,
identitas pembuat, waktu server, dan ID mulai dari 1000. Soal bawaan MD memakai ID
di bawah 1000. Transaksi yang sama memperbarui `questionCount` dan penghitung ID
admin. Firestore Rules memeriksa claim serta pasangan penulisan soal/metadata;
pengguna biasa tidak dapat menambahkan soal atau mengubah metadata level.

Seluruh soal tambahan ikut dikerjakan pada kuis level tersebut. Validasi hasil
membaca jumlah soal terbaru dari metadata server. XP per level dan batas jumlah
jawaban benar untuk lulus ujian tetap mengikuti kurikulum. Jika soal ditambahkan
saat peserta sedang mengerjakan kuis lama, peserta perlu memuat ulang materi dan
memulai kuis kembali untuk memakai daftar soal terbaru.

`firebase:seed` mempertahankan soal berlabel admin, menggabungkan jumlahnya dengan
jumlah soal bawaan MD, dan mempertahankan penghitung ID. Unggahan materi berikutnya
tidak menghapus soal tambahan admin atau menghitungnya dua kali.

## Melihat nilai

Daftar peserta berasal dari profil yang dibuat saat pengguna masuk. Admin dapat
mencari peserta berdasarkan nama/email, lalu membaca riwayat di
`users/{uid}/attempts`. Setiap baris menampilkan level, nilai persentase, jumlah
jawaban benar, jumlah soal pada percobaan tersebut, dan waktu pengerjaan Jakarta.
Riwayat dimuat 30 percobaan per halaman. Peserta tanpa percobaan ditandai belum
menyelesaikan kuis. Daftar ini menunjukkan pengguna yang pernah masuk, bukan status
sedang online.

Izin admin hanya menambahkan soal serta membaca profil dan hasil latihan. Admin
tidak mendapat izin mengubah nilai percobaan, XP/progres peserta lain, materi MD,
atau akun Authentication dari aplikasi. Penilaian jawaban tetap memakai mekanisme
aplikasi yang dijelaskan pada `FIRESTORE.md`.

## Verifikasi

`npm test` mencakup validasi soal, jumlah soal dinamis, dan perlindungan soal admin
saat seed. Dengan kredensial pemilik, `npm run test:admin` membuat dua akun sementara,
menguji penolakan pengguna biasa, penambahan soal di level 30, penyimpanan nilai
dengan jumlah soal tambahan, dan pembacaan hasil oleh admin. Soal, metadata level,
akun, serta hasil latihan uji dipulihkan/dibersihkan dalam `finally`.
