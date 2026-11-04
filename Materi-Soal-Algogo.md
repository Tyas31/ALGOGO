# Materi & Soal Algogo: 6 Unit, 33 Level

Oct 18, 2026 · @Dewa · Diperbarui Nov 4, 2026

## Cara pakai dokumen ini

Dokumen ini adalah sumber utama materi dan soal aplikasi. Semua materi dibagi menjadi 6 unit. Unit 1–5 masing-masing berisi 6 level belajar. Setiap level belajar berisi 5 halaman materi, 1 layar penutup, lalu 5 soal. Unit 6 berisi 3 ujian tanpa halaman materi. Formatnya sama dengan layar Ngulik! yang sudah dibuat: progress bar di atas, judul, isi pendek, maskot, lalu tombol di bawah.

**Alur satu level**

1. Halaman materi 1/5 sampai 5/5, tombol **Selanjutnya**. Halaman 1 membuka level dengan cerita sehari-hari atau pengingat materi sebelumnya.
2. Layar penutup: **Yeay! Materi selesai!**, kartu ringkasan "Kamu sudah belajar :", lalu "Saatnya Uji Kemampuanmu! ^\_^" dan tombol **Mulai Latihan**.
3. Latihan soal 1/5 sampai 5/5, tombol **Cek Jawaban**, lalu kartu feedback dan tombol **Lanjut**.
4. Jika ada jawaban yang belum tepat, muncul halaman pemberitahuan bermaskot lalu soal yang salah diulang. Skor dan XP tetap dihitung dari jawaban pertama.

**Lima jenis soal dan komponen UI-nya**

| Jenis soal | Yang dilakukan siswa | Komponen di design system |
| --- | --- | --- |
| Pilihan ganda | Memilih 1 dari 4 jawaban | AnswerOption (radio) |
| Isian bagian kosong | Mengisi bagian `___` pada kode dengan memilih chip kata | AnswerOption versi chip, kode ditampilkan di atas |
| Susun kode / susun langkah | Mengurutkan baris kode atau langkah yang diacak | StepOption (nomor urut) |
| Tebak output / tebak hasil | Membaca kode lalu memilih hasil yang tampil | AnswerOption, kode ditampilkan di atas |
| Tulis kode | Mengetik kode pendek sendiri | Kotak kode + tombol Cek Jawaban |

Di tiap level, urutan jenis soal bergerak dari mengenali ke membuat: pilihan ganda dan isian dulu, lalu susun kode, tebak output, dan terakhir tulis kode. Level 1–5 belum memakai Python, jadi soalnya memakai **pseudocode** (blok kode `pseudo`) dan belum ada soal tulis kode.

**Kartu feedback** memakai kalimat tetap dari design system. Benar: **Hebat! Jawaban kamu benar!** dengan maskot `mascot-correct`. Salah: **Belum tepat :( Yuk pahami lagi!** dengan maskot `mascot-wrong`. Di bawahnya ada satu kalimat penjelasan yang ditulis per soal di dokumen ini.

**Aturan penulisan agar bisa disinkronkan** (`npm run curriculum:sync`)

- Unit ditulis `# Unit N · Nama`, level ditulis `## Level N · Judul`, dan nomor level berurutan.
- Halaman materi ditulis `### Materi k/5: Judul`, soal ditulis `### Soal k/n · Jenis: Judul`. Jenis diawali Pilihan Ganda, Isian, Susun, Tebak, atau Tulis.
- Setiap level wajib ada di tabel **Ringkasan level** di bawah, lengkap dengan XP-nya.
- Ujian memakai `### Layar Pembuka:`, kalimat "minimal **X dari Y soal benar**", dan tabel **Peta Soal** berisi `Level a, b:` untuk setiap soal.
- Semua variasi jawaban soal tulis kode yang diterima ditulis sebagai blok `python` di bawah **Jawaban:**.

**Ringkasan level**

| Level | Unit | Judul | XP | Fokus |
| --- | --- | --- | --- | --- |
| 1 | Pengenalan Algoritma | Apa Itu Algoritma? | +50 XP | Pengertian, tujuan, langkah, hasil |
| 2 | Pengenalan Algoritma | Ciri Algoritma yang Baik | +50 XP | Terurut, jelas, sesuai tujuan, memiliki akhir |
| 3 | Pengenalan Algoritma | Pseudocode & Flowchart | +50 XP | Pseudocode, simbol flowchart, tiga pola algoritma |
| 4 | Pengenalan Algoritma | Memecah Masalah Besar | +50 XP | Dekomposisi, pola, abstraksi |
| 5 | Pengenalan Algoritma | Menelusuri & Memperbaiki Algoritma | +50 XP | Tabel penelusuran, bug, debugging |
| 6 | Pengenalan Algoritma | Kenalan dengan Python | +50 XP | `print()`, teks, komentar, error |
| 7 | Variabel | Kotak Penyimpan Data | +50 XP | Membuat variabel, tanda `=` |
| 8 | Variabel | Tipe Data | +50 XP | `str`, `int`, `float`, `bool`, `type()` |
| 9 | Variabel | Mengubah Isi Variabel | +50 XP | Mengganti isi, `x = x + 1`, `+=`, menggabung teks |
| 10 | Variabel | Nama & Konversi Tipe | +50 XP | Aturan nama, `int()`, `str()`, `float()` |
| 11 | Variabel | Bermain dengan Teks | +50 XP | `len()`, indeks, mengulang teks, huruf besar-kecil |
| 12 | Variabel | Tukar Isi & Banyak Variabel | +50 XP | Isi banyak variabel, menukar isi, melacak |
| 13 | Input Output | Output yang Rapi | +50 XP | `print()` banyak data, `sep`, `end` |
| 14 | Input Output | Meminta Input | +50 XP | `input()`, menyimpan jawaban |
| 15 | Input Output | Input Angka | +50 XP | `int(input())`, `float(input())` |
| 16 | Input Output | Operator Hitung | +50 XP | Operator hitung, `//`, `%`, `**`, urutan operasi |
| 17 | Input Output | f-string: Teks Berisi Data | +50 XP | f-string, `round()` |
| 18 | Input Output | Proyek Mini: Struk Belanja | +50 XP | Merancang program, potongan, struk rapi |
| 19 | If Statement | Komputer Bisa Memilih | +50 XP | `if`, operator perbandingan |
| 20 | If Statement | Else dan Elif | +50 XP | `else`, `elif`, urutan kondisi |
| 21 | If Statement | and, or, not | +50 XP | Menggabungkan dan membalik syarat |
| 22 | If Statement | If Bersarang & match-case | +50 XP | `if` di dalam `if`, `match-case` |
| 23 | If Statement | Memeriksa Input | +50 XP | Validasi, isian kosong, operator `in` |
| 24 | If Statement | Proyek Mini: Kalkulator Pilihan | +50 XP | `match-case`, pembagian nol, uji program |
| 25 | Perulangan | For dan range() | +50 XP | `for`, `range()`, hitung mundur |
| 26 | Perulangan | For dengan Daftar & Total | +50 XP | Daftar, total, penghitung, `len()`, `sum()` |
| 27 | Perulangan | While Loop | +50 XP | `while`, perulangan tanpa akhir |
| 28 | Perulangan | break, continue & do-while | +50 XP | `break`, `continue`, `while True` |
| 29 | Perulangan | Perulangan Bersarang | +50 XP | `for` di dalam `for`, pola, tabel perkalian |
| 30 | Perulangan | Proyek Mini: Mengolah Data Nilai | +50 XP | Terbesar, terkecil, rata-rata, laporan |
| 31 | Ujian Akhir | Ujian 1: Algoritma sampai Input Output | +100 XP | 10 soal Unit 1–3 |
| 32 | Ujian Akhir | Ujian 2: Percabangan & Perulangan | +100 XP | 10 soal Unit 4–5 |
| 33 | Ujian Akhir | Ujian Master Algogo | +150 XP | 15 soal gabungan, lencana Master Algogo |

Semua kode memakai Python 3. Indentasi memakai 4 spasi. Level 22, Level 24, dan ujian memakai `match-case`, yang butuh **Python 3.10 ke atas**. Python tidak punya `switch` dan `do-while` bawaan, jadi keduanya diajarkan dengan padanannya di Python: `match-case` dan pola `while True` + `break`.

# Unit 1 · Pengenalan Algoritma

## Level 1 · Apa Itu Algoritma?

Siswa paham apa itu algoritma, bisa menemukan algoritma dalam kegiatan sehari-hari, dan bisa menguraikan tujuan, langkah, dan hasilnya.

### Materi 1/5: Pernah Mengikuti Petunjuk?

*Tampilan: ilustrasi `illust-mi-instan`, maskot `mascot-think` di atas pertanyaan pemantik.*

**Pernahkah kamu membuat mi instan, mengikuti resep, atau mengikuti petunjuk permainan?**

Bayangkan kamu ingin membuat mi instan. Kamu perlu menyiapkan alat dan bahan, memasak mi, menyiapkan bumbu, lalu menyajikannya.

Kalau langkahnya tertukar, hasilnya bisa berbeda dari yang kamu harapkan. Kamu juga memakai cara berpikir seperti ini saat memberi perintah ke komputer!

**Pertanyaan pemantik:** Menurutmu, mengapa kita perlu mengikuti langkah-langkah secara berurutan?

### Materi 2/5: Apa Itu Algoritma?

*Tampilan: chip "Ingat tiga hal ini!" + 3 ikon kecil, maskot `mascot-laptop`.*

**Algoritma adalah serangkaian langkah yang disusun secara logis dan sistematis untuk menyelesaikan masalah atau mencapai tujuan.**

Jadi, algoritma berisi petunjuk tentang apa yang harus kamu lakukan dan cara melakukannya. Dalam pemrograman, algoritma membantu kita merencanakan instruksi sebelum menuliskannya menjadi kode.

**Ingat tiga hal ini!**

- **Tujuan**: Apa yang ingin dicapai?
- **Langkah**: Apa yang harus dilakukan?
- **Hasil**: Apakah tujuan sudah tercapai?

### Materi 3/5: Algoritma di Sekitar Kita

*Tampilan: tiga kartu kegiatan (cuci tangan, menyeberang, peta digital), maskot `mascot-happy`.*

Tanpa sadar, kamu menjalankan algoritma setiap hari. Contohnya mencuci tangan:

1. Basahi tangan dengan air.
2. Tuang sabun ke telapak tangan.
3. Gosok seluruh tangan selama 20 detik.
4. Bilas sampai bersih.
5. Keringkan dengan handuk.

Aplikasi di HP juga penuh algoritma. Peta digital memakai algoritma untuk mencari jalan tercepat, dan kalkulator memakai algoritma untuk menghitung.

**Tips:** Perhatikan kegiatan pagimu: bangun tidur, mandi, sarapan, lalu berangkat sekolah. Itu juga algoritma!

### Materi 4/5: Tujuan, Langkah, Hasil

*Tampilan: tabel tiga baris, maskot `mascot-laptop`.*

Setiap algoritma bisa dibedah menjadi tiga bagian. Contohnya algoritma menyeberang jalan:

| Bagian | Isi |
| --- | --- |
| Tujuan | Sampai di seberang jalan dengan selamat |
| Langkah | Berhenti di tepi jalan, lihat kanan, lihat kiri, lihat kanan lagi, lalu menyeberang saat jalan sepi |
| Hasil | Kamu sudah di seberang jalan dan tetap aman |

Kalau hasilnya tidak sesuai tujuan, berarti ada langkah yang salah atau terlewat. Perbaiki langkahnya, lalu coba lagi.

### Materi 5/5: Komputer Butuh Algoritma

*Tampilan: ilustrasi robot kebingungan memegang teko, maskot `mascot-think`.*

Manusia bisa menebak maksud perintah yang kurang lengkap. Komputer tidak bisa. Komputer hanya mengerjakan **persis** apa yang diperintahkan, sesuai urutannya.

Misalnya kamu menyuruh robot "buatkan teh". Robot bingung: gelasnya di mana? Airnya panas atau dingin? Gulanya berapa sendok?

Karena itu, sebelum menulis program, programmer menyusun algoritmanya dulu. Algoritma yang baik membuat programnya benar.

**Awas!** Komputer tidak bisa menebak. Langkah yang kamu lewatkan tidak akan dikerjakan.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah berkenalan dengan algoritma.

**Kamu sudah belajar :**

- Pengertian algoritma
- Algoritma dalam kehidupan sehari-hari
- Tujuan, langkah, dan hasil sebuah algoritma
- Alasan komputer butuh algoritma

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Apa Itu Algoritma?

Manakah pengertian yang paling tepat?

- Bahasa khusus untuk membuat komputer menyala
- **Urutan langkah logis untuk menyelesaikan masalah** (benar)
- Kumpulan perangkat keras komputer
- Hasil akhir dari sebuah perhitungan

**Benar:** Algoritma adalah urutan langkah yang logis dan sistematis untuk menyelesaikan masalah atau mencapai tujuan.

**Salah:** Algoritma itu urutan langkah untuk mencapai tujuan, seperti langkah membuat mi instan.

### Soal 2/5 · Isian Bagian Kosong: Bagian yang Hilang

Lengkapi bagian algoritma menyikat gigi berikut.

```pseudo
Tujuan  : Gigi bersih
_____ : Ambil sikat, beri pasta, sikat gigi, berkumur
Hasil   : Gigi bersih dan napas segar
```

Pilihan chip: `Langkah` (benar) · `Masalah` · `Alat`

**Benar:** Bagian di antara tujuan dan hasil berisi langkah-langkah yang dikerjakan.

**Salah:** Algoritma terdiri dari tujuan, langkah, dan hasil. Bagian yang berisi daftar kegiatan adalah langkah.

### Soal 3/5 · Susun Kode: Susun Langkahnya!

Urutkan langkah-langkah menyikat gigi dari awal sampai akhir.

Tampil acak: Berkumur · Ambil sikat gigi · Sikat gigi · Beri pasta gigi pada sikat gigi

Urutan benar:

1. Ambil sikat gigi
2. Beri pasta gigi pada sikat gigi
3. Sikat gigi
4. Berkumur

**Benar:** Langkahmu terurut, jadi tujuannya tercapai: gigi bersih!

**Salah:** Pasta gigi harus ada di sikat sebelum menyikat, dan berkumur dilakukan paling akhir.

### Soal 4/5 · Tebak Hasil: Robot Penurut

Robot menjalankan algoritma ini persis sesuai urutan. Di kotak nomor berapa robot berhenti?

```pseudo
Mulai di kotak 1
Maju 2 kotak
Mundur 1 kotak
Maju 3 kotak
```

- Kotak 4
- **Kotak 5** (benar)
- Kotak 6
- Kotak 7

**Benar:** Dari kotak 1 maju 2 ke kotak 3, mundur 1 ke kotak 2, lalu maju 3 ke kotak 5.

**Salah:** Jalankan satu per satu: 1 → 3 → 2 → 5. Robot mengerjakan semua langkah sesuai urutan, termasuk langkah mundur.

### Soal 5/5 · Pilihan Ganda: Komputer Tidak Bisa Menebak

Instruksi mana yang bisa dikerjakan komputer tanpa bingung?

- Buatkan aku sesuatu yang enak
- Tunggu sebentar lalu lanjutkan
- **Tampilkan tulisan "Halo" satu kali** (benar)
- Kerjakan seperti biasanya

**Benar:** Instruksi ini jelas: apa yang dikerjakan dan berapa kali.

**Salah:** Kata "enak", "sebentar", dan "seperti biasa" bisa diartikan berbeda. Komputer butuh instruksi yang pasti.

## Level 2 · Ciri Algoritma yang Baik

Siswa bisa menilai algoritma memakai empat ciri algoritma yang baik, lalu memperbaiki algoritma yang keliru.

### Materi 1/5: Algoritma Itu Seperti Resep

*Tampilan: ilustrasi `illust-cokelat`, daftar bernomor, maskot `mascot-happy`.*

Resep memberi langkah-langkah agar bahan bisa diolah menjadi makanan. Contohnya, membuat minuman cokelat:

1. Siapkan gelas, susu, dan bubuk cokelat.
2. Masukkan bubuk cokelat ke dalam gelas.
3. Tuangkan susu.
4. Aduk hingga tercampur.
5. Sajikan minuman.

**Hubungannya dengan pemrograman:** program juga berisi instruksi berurutan. Bedanya, kamu harus menulis instruksi program dalam bahasa yang dimengerti komputer.

### Materi 2/5: Bagaimana Algoritma yang Baik?

*Tampilan: 4 ConceptItem besar dengan ikon `icon-ordered`, `icon-clear`, `icon-goal`, `icon-finite`, maskot `mascot-wave`.*

1. **Terurut**: Langkah disusun dalam urutan yang masuk akal.
2. **Jelas**: Setiap instruksi mudah dipahami dan tidak membingungkan.
3. **Sesuai tujuan**: Langkah-langkahnya membantu menyelesaikan masalah yang ditentukan.
4. **Memiliki akhir**: Algoritma punya langkah terakhir, tidak berjalan selamanya.

### Materi 3/5: Jelas, Bukan Kira-Kira

*Tampilan: dua kolom, kartu merah "Kurang jelas" dan kartu hijau "Jelas", maskot `mascot-think`.*

Kata seperti "secukupnya", "sebentar", atau "agak" membuat setiap orang mengerjakannya dengan cara berbeda. Ganti dengan ukuran yang pasti.

| Kurang jelas | Jelas |
| --- | --- |
| Masak air secukupnya | Masak 400 ml air |
| Aduk sebentar | Aduk 10 kali |
| Tunggu sampai matang | Tunggu 3 menit |

**Tips:** Bayangkan algoritmamu dibaca oleh robot. Kalau robot masih harus bertanya "berapa?", instruksinya belum jelas.

### Materi 4/5: Harus Punya Akhir

*Tampilan: ilustrasi kelereng masuk toples tanpa henti, kartu merah "Awas!", maskot `mascot-wrong`.*

Coba perhatikan algoritma ini:

```pseudo
1. Ambil satu kelereng
2. Masukkan ke toples
3. Ulangi langkah 1
```

Kapan berhentinya? Tidak pernah! Algoritma ini tidak memiliki akhir. Perbaikannya: **Ulangi langkah 1 sampai ada 10 kelereng di toples.**

**Awas!** Algoritma tanpa akhir akan membuat program macet. Kamu akan bertemu masalah ini lagi di unit Perulangan.

### Materi 5/5: Memperbaiki Algoritma

*Tampilan: daftar langkah yang salah urut lalu dibenarkan dengan animasi panah, maskot `mascot-laptop`.*

Algoritma menelepon teman ini punya masalah:

1. Bicara dengan teman
2. Tekan tombol panggil
3. Cari nama teman di kontak
4. Buka aplikasi telepon

Urutannya terbalik! Algoritma yang benar: buka aplikasi telepon, cari nama teman, tekan tombol panggil, lalu bicara.

**Tips:** Saat memeriksa algoritma, jalankan di kepalamu satu langkah demi satu langkah, persis seperti robot.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa menilai algoritma yang baik.

**Kamu sudah belajar :**

- Algoritma itu seperti resep
- Empat ciri algoritma yang baik
- Membuat instruksi yang jelas dan punya akhir
- Memperbaiki algoritma yang keliru

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Ciri yang Dilanggar

Algoritma "Ambil satu kelereng, lalu ulangi langkah ini" **paling** melanggar ciri algoritma yang mana?

- Terurut
- Jelas
- Sesuai tujuan
- **Memiliki akhir** (benar)

**Benar:** Tidak ada kapan berhentinya, jadi algoritma ini berjalan selamanya.

**Salah:** Masalahnya ada pada "ulangi" tanpa batas. Algoritma yang baik harus punya akhir, misalnya "sampai ada 10 kelereng".

### Soal 2/5 · Isian Bagian Kosong: Ukuran yang Pasti

Lengkapi langkah membuat mi agar instruksinya jelas.

```pseudo
1. Masak _____ air
2. Masukkan mi lalu masak 3 menit
3. Tuang bumbu dan aduk 10 kali
```

Pilihan chip: `400 ml` (benar) · `secukupnya` · `sedikit`

**Benar:** Ukuran pasti seperti 400 ml membuat semua orang mengerjakan langkah yang sama.

**Salah:** "Secukupnya" dan "sedikit" bisa diartikan berbeda oleh tiap orang. Pakai ukuran yang pasti.

### Soal 3/5 · Susun Kode: Minuman Cokelat

Urutkan langkah membuat minuman cokelat.

Tampil acak: Aduk hingga tercampur · Siapkan gelas, susu, dan bubuk cokelat · Sajikan minuman · Tuangkan susu · Masukkan bubuk cokelat ke dalam gelas

Urutan benar:

1. Siapkan gelas, susu, dan bubuk cokelat
2. Masukkan bubuk cokelat ke dalam gelas
3. Tuangkan susu
4. Aduk hingga tercampur
5. Sajikan minuman

**Benar:** Bahan disiapkan dulu, dicampur, diaduk, baru disajikan. Lezat!

**Salah:** Siapkan semua bahan dulu. Cokelat dan susu harus masuk gelas sebelum diaduk, dan menyajikan selalu paling akhir.

### Soal 4/5 · Tebak Hasil: Berapa Kali?

Berapa kali langkah 2 dikerjakan sampai algoritma selesai?

```pseudo
1. Isi gelas dengan 3 kelereng
2. Ambil 1 kelereng dari gelas
3. Ulangi langkah 2 sampai gelas kosong
```

- 1 kali
- 2 kali
- **3 kali** (benar)
- Tidak pernah berhenti

**Benar:** Ada 3 kelereng dan setiap putaran mengambil 1, jadi langkah 2 dikerjakan 3 kali lalu berhenti.

**Salah:** Algoritma ini punya akhir: berhenti saat gelas kosong. 3 kelereng diambil satu per satu, jadi 3 kali.

### Soal 5/5 · Pilihan Ganda: Algoritma Terbaik

Manakah algoritma yang paling baik untuk menyalakan komputer?

- Tekan tombol apa saja, lalu tunggu
- Nyalakan komputer dengan benar
- **Colokkan kabel, tekan tombol power, tunggu sampai layar menampilkan menu utama** (benar)
- Tunggu, lalu colokkan kabel jika perlu

**Benar:** Langkahnya terurut, jelas, sesuai tujuan, dan punya akhir yang pasti.

**Salah:** Algoritma yang baik menyebut langkah pasti secara berurutan dan tahu kapan selesai.

## Level 3 · Pseudocode & Flowchart

Siswa bisa menulis algoritma sebagai pseudocode, mengenal simbol flowchart, dan mengenali tiga pola algoritma: urutan, pilihan, dan pengulangan.

### Materi 1/5: Menulis Algoritma Seperti Kode

*Tampilan: kotak pseudocode dengan kata kunci berwarna, maskot `mascot-laptop`.*

**Pseudocode** adalah algoritma yang ditulis mirip kode program, tapi masih memakai bahasa sehari-hari. Pseudocode tidak dijalankan komputer. Gunanya untuk merencanakan program sebelum ditulis dalam bahasa pemrograman.

```pseudo
MULAI
  BACA nama
  TAMPILKAN "Halo", nama
SELESAI
```

**Ingat tiga hal ini!**

- **BACA**: meminta data, misalnya dari keyboard
- **TAMPILKAN**: menampilkan hasil ke layar
- **MULAI** dan **SELESAI**: penanda awal dan akhir algoritma

### Materi 2/5: Simbol Flowchart

*Tampilan: lima simbol flowchart dengan warna berbeda, maskot `mascot-happy`.*

**Flowchart** adalah algoritma yang digambar dengan simbol dan panah. Setiap simbol punya arti:

| Simbol | Nama | Artinya |
| --- | --- | --- |
| Oval | Terminal | Mulai atau selesai |
| Persegi panjang | Proses | Menghitung atau mengolah data |
| Jajar genjang | Input/Output | Membaca data atau menampilkan hasil |
| Belah ketupat | Keputusan | Memilih jalan: ya atau tidak |
| Panah | Garis alir | Menunjukkan urutan langkah |

**Tips:** Flowchart selalu dibaca dari simbol Mulai, mengikuti arah panah, sampai simbol Selesai.

### Materi 3/5: Tiga Pola Algoritma

*Tampilan: tiga kartu pola dengan diagram mini, maskot `mascot-wave`.*

Hampir semua algoritma tersusun dari tiga pola:

1. **Urutan**: langkah dikerjakan satu per satu dari atas ke bawah.
2. **Pilihan**: langkah dipilih berdasarkan syarat. Contoh: jika hujan, bawa payung.
3. **Pengulangan**: langkah diulang beberapa kali. Contoh: putari lapangan 3 kali.

Di Python nanti, pola pilihan menjadi `if`, dan pola pengulangan menjadi `for` serta `while`.

### Materi 4/5: Pola Pilihan

*Tampilan: flowchart belah ketupat "Hujan?" bercabang Ya/Tidak, maskot `mascot-think`.*

Pola pilihan ditulis dengan **JIKA ... MAKA ...** dan **SELAIN ITU**:

```pseudo
BACA cuaca
JIKA cuaca = "hujan" MAKA
  TAMPILKAN "Bawa payung"
SELAIN ITU
  TAMPILKAN "Pakai topi"
```

Jika cuaca berisi "hujan", hanya "Bawa payung" yang tampil. Selain itu, yang tampil "Pakai topi". Hanya satu jalan yang dipilih.

### Materi 5/5: Pola Pengulangan

*Tampilan: flowchart dengan panah kembali ke atas, maskot `mascot-laptop`.*

Pola pengulangan ditulis dengan **ULANGI**:

```pseudo
skor = 0
ULANGI 3 KALI
  skor = skor + 10
TAMPILKAN skor
```

Skor bertambah 10 sebanyak 3 kali, jadi yang tampil 30.

**Awas!** Setiap pengulangan harus punya batas, misalnya "3 KALI" atau "SAMPAI gelas kosong". Ingat ciri algoritma yang baik: memiliki akhir.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa menulis dan membaca algoritma seperti programmer.

**Kamu sudah belajar :**

- Menulis algoritma sebagai pseudocode
- Lima simbol flowchart
- Tiga pola algoritma: urutan, pilihan, pengulangan
- Membaca JIKA dan ULANGI

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Simbol Keputusan

Simbol flowchart apa yang dipakai untuk memilih jalan "ya" atau "tidak"?

- Oval
- Persegi panjang
- Jajar genjang
- **Belah ketupat** (benar)

**Benar:** Belah ketupat adalah simbol keputusan. Dari simbol ini keluar dua jalan: ya dan tidak.

**Salah:** Oval untuk mulai/selesai, persegi panjang untuk proses, jajar genjang untuk input/output. Keputusan memakai belah ketupat.

### Soal 2/5 · Isian Bagian Kosong: Lengkapi Pseudocode

Lengkapi pseudocode agar "Lulus" tampil hanya jika nilai minimal 75.

```pseudo
BACA nilai
_____ nilai >= 75 MAKA
  TAMPILKAN "Lulus"
```

Pilihan chip: `JIKA` (benar) · `ULANGI` · `TAMPILKAN`

**Benar:** JIKA ... MAKA adalah pola pilihan: aksinya hanya dikerjakan saat syaratnya terpenuhi.

**Salah:** ULANGI dipakai untuk pengulangan, TAMPILKAN untuk menampilkan. Untuk memilih berdasarkan syarat, pakai JIKA.

### Soal 3/5 · Susun Kode: Luas Persegi

Susun pseudocode untuk menghitung luas persegi.

Tampil acak: TAMPILKAN luas · MULAI · HITUNG luas = sisi x sisi · SELESAI · BACA sisi

Urutan benar:

1. MULAI
2. BACA sisi
3. HITUNG luas = sisi x sisi
4. TAMPILKAN luas
5. SELESAI

**Benar:** Mulai, baca data, olah, tampilkan, lalu selesai. Pola urutan yang rapi!

**Salah:** Sisi harus dibaca sebelum dihitung, dan luas baru bisa ditampilkan setelah dihitung. MULAI dan SELESAI ada di ujung.

### Soal 4/5 · Tebak Hasil: Angka yang Bertambah

Apa yang ditampilkan algoritma berikut?

```pseudo
angka = 1
ULANGI 3 KALI
  angka = angka + 2
TAMPILKAN angka
```

- 3
- 5
- **7** (benar)
- 9

**Benar:** angka berubah dari 1 menjadi 3, 5, lalu 7.

**Salah:** Setiap putaran angka ditambah 2, sebanyak 3 kali: 1 + 2 + 2 + 2 = 7.

### Soal 5/5 · Pilihan Ganda: Pola Algoritma

"Bel sekolah berbunyi setiap 45 menit sampai jam pulang" adalah contoh pola algoritma apa?

- Urutan
- Pilihan
- **Pengulangan** (benar)
- Tidak memakai pola

**Benar:** Bunyi bel diulang terus setiap 45 menit, dan berhenti saat jam pulang.

**Salah:** Ada kegiatan yang terjadi berulang kali dengan batas akhir, jadi ini pola pengulangan.

## Level 4 · Memecah Masalah Besar

Siswa bisa memecah masalah besar menjadi bagian kecil (dekomposisi), menemukan pola, memilih informasi yang penting (abstraksi), lalu menyusunnya menjadi algoritma.

### Materi 1/5: Masalah Besar Terasa Sulit

*Tampilan: ilustrasi tumpukan tugas pesta ulang tahun, maskot `mascot-think` di atas pertanyaan pemantik.*

Bayangkan kamu diminta menyiapkan pesta ulang tahun kelas. Kalau dipikirkan sekaligus, rasanya bingung harus mulai dari mana.

Coba pecah menjadi bagian kecil: **undangan**, **makanan**, **dekorasi**, dan **acara**. Setiap bagian lebih mudah dikerjakan, bahkan bisa dibagi ke teman yang berbeda.

**Pertanyaan pemantik:** Tugas besar apa yang pernah kamu selesaikan dengan cara membaginya menjadi bagian kecil?

### Materi 2/5: Dekomposisi

*Tampilan: diagram pohon, satu kotak besar bercabang menjadi lima kotak kecil, maskot `mascot-laptop`.*

**Dekomposisi** adalah memecah masalah besar menjadi bagian-bagian kecil yang lebih mudah diselesaikan. Programmer selalu melakukannya sebelum menulis kode.

Contohnya membuat game tebak angka:

1. Pilih angka rahasia.
2. Minta tebakan pemain.
3. Bandingkan tebakan dengan angka rahasia.
4. Beri petunjuk "lebih besar" atau "lebih kecil".
5. Ulangi sampai tebakan benar.

**Tips:** Kalau satu bagian masih terasa sulit, pecah lagi bagian itu menjadi langkah yang lebih kecil.

### Materi 3/5: Mencari Pola

*Tampilan: robot menggambar persegi di atas kertas petak, maskot `mascot-happy`.*

Setelah dipecah, sering ada langkah yang **berulang**. Langkah berulang itu disebut **pola**. Contohnya robot menggambar persegi:

```pseudo
MAJU 1 langkah
BELOK KANAN
MAJU 1 langkah
BELOK KANAN
MAJU 1 langkah
BELOK KANAN
MAJU 1 langkah
BELOK KANAN
```

Ada pola "maju lalu belok kanan" sebanyak 4 kali. Algoritmanya bisa diringkas:

```pseudo
ULANGI 4 KALI
  MAJU 1 langkah
  BELOK KANAN
```

### Materi 4/5: Abstraksi: Fokus pada yang Penting

*Tampilan: peta jalur kereta yang hanya berisi nama stasiun dan garis, maskot `mascot-think`.*

**Abstraksi** artinya memilih informasi yang penting dan mengabaikan yang tidak perlu. Peta jalur kereta tidak menggambar rumah dan pohon, hanya stasiun dan rutenya, karena itulah yang dibutuhkan penumpang.

Untuk algoritma menghitung luas kamar, yang penting hanya **panjang** dan **lebar**. Warna cat atau jumlah jendela tidak dibutuhkan.

**Ingat tiga hal ini!**

- **Dekomposisi**: pecah masalah besar
- **Pola**: temukan langkah yang berulang
- **Abstraksi**: ambil informasi yang penting saja

### Materi 5/5: Dari Bagian Kecil ke Algoritma

*Tampilan: kotak-kotak kecil disusun berurutan menjadi satu jalur, maskot `mascot-wave`.*

Setelah dipecah, setiap bagian disusun kembali secara berurutan menjadi satu algoritma utuh. Contoh algoritma berangkat sekolah:

```pseudo
BAGIAN 1: Bersiap
  Mandi, berpakaian, sarapan
BAGIAN 2: Periksa tas
  Buku, alat tulis, botol minum
BAGIAN 3: Berangkat
  Pamit, lalu jalan ke sekolah
```

**Tahukah kamu?** Dekomposisi, pola, abstraksi, dan algoritma disebut empat pilar **berpikir komputasional**. Cara berpikir ini berguna bukan hanya untuk pemrograman, tapi juga untuk memecahkan masalah sehari-hari.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah berpikir seperti programmer!

**Kamu sudah belajar :**

- Dekomposisi: memecah masalah besar
- Mencari pola yang berulang
- Abstraksi: memilih informasi penting
- Menyusun bagian kecil menjadi algoritma

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Apa Itu Dekomposisi?

Apa yang dimaksud dengan **dekomposisi**?

- Menghapus langkah yang tidak perlu
- **Memecah masalah besar menjadi bagian-bagian kecil** (benar)
- Mengulang langkah yang sama berkali-kali
- Menggambar algoritma dengan simbol

**Benar:** Dekomposisi membuat masalah besar lebih mudah diselesaikan karena dikerjakan per bagian.

**Salah:** Mengulang langkah adalah pola, dan menggambar dengan simbol adalah flowchart. Dekomposisi artinya memecah masalah.

### Soal 2/5 · Isian Bagian Kosong: Ringkas dengan Pola

Lengkapi pseudocode agar robot menggambar persegi dengan lebih ringkas.

```pseudo
_____ 4 KALI
  MAJU 1 langkah
  BELOK KANAN
```

Pilihan chip: `ULANGI` (benar) · `JIKA` · `BACA`

**Benar:** Pola "maju lalu belok kanan" diulang 4 kali, jadi pakai ULANGI.

**Salah:** JIKA dipakai untuk pilihan, BACA untuk meminta data. Langkah berulang ditulis dengan ULANGI.

### Soal 3/5 · Susun Kode: Bagian Game Tebak Angka

Susun bagian-bagian game tebak angka berikut sesuai urutannya.

Tampil acak: Bandingkan tebakan dengan angka rahasia · Ulangi sampai tebakan benar · Pilih angka rahasia · Beri petunjuk lebih besar atau lebih kecil · Minta tebakan pemain

Urutan benar:

1. Pilih angka rahasia
2. Minta tebakan pemain
3. Bandingkan tebakan dengan angka rahasia
4. Beri petunjuk lebih besar atau lebih kecil
5. Ulangi sampai tebakan benar

**Benar:** Masalah besar sudah dipecah dan disusun kembali dengan urutan yang masuk akal.

**Salah:** Angka rahasia harus ada sebelum ditebak, tebakan dibandingkan dulu sebelum diberi petunjuk, dan pengulangan ada di akhir.

### Soal 4/5 · Tebak Hasil: Langkah Robot

Berapa nilai yang ditampilkan algoritma berikut?

```pseudo
langkah = 0
ULANGI 3 KALI
  MAJU 2 langkah
  langkah = langkah + 2
TAMPILKAN langkah
```

- 2
- 3
- **6** (benar)
- 8

**Benar:** Setiap putaran langkah bertambah 2, sebanyak 3 kali: 0 + 2 + 2 + 2 = 6.

**Salah:** Perhatikan pola yang diulang 3 kali. Setiap putaran menambah 2, jadi totalnya 6.

### Soal 5/5 · Pilihan Ganda: Informasi yang Penting

Kamu ingin membuat algoritma untuk menghitung **luas kamar**. Informasi apa yang dibutuhkan?

- Warna cat dinding
- Jumlah jendela
- **Panjang dan lebar kamar** (benar)
- Nama pemilik kamar

**Benar:** Itulah abstraksi: luas hanya butuh panjang dan lebar.

**Salah:** Luas dihitung dari panjang × lebar. Informasi lain tidak memengaruhi hasilnya, jadi bisa diabaikan.

## Level 5 · Menelusuri & Memperbaiki Algoritma

Siswa bisa menelusuri algoritma memakai tabel, menemukan kesalahan (bug), dan memperbaikinya langkah demi langkah.

### Materi 1/5: Menjadi Komputer Sejenak

*Tampilan: siswa memegang kertas dan pensil di samping robot, maskot `mascot-think`.*

Sebelum algoritma dijalankan komputer, programmer sering "menjadi komputer" dulu. Caranya: mengerjakan setiap langkah **persis** sesuai urutan, lalu mencatat hasilnya.

Kegiatan ini disebut **menelusuri** (*tracing*). Dengan menelusuri, kesalahan bisa ditemukan sebelum program dibuat.

**Pertanyaan pemantik:** Pernahkah kamu memeriksa ulang jawaban PR matematika langkah demi langkah? Itu juga menelusuri!

### Materi 2/5: Tabel Penelusuran

*Tampilan: pseudocode di kiri, tabel isi variabel di kanan, maskot `mascot-laptop`.*

Saat ada data yang berubah, catat isinya di tabel:

```pseudo
uang = 5000
uang = uang + 2000
uang = uang - 3000
TAMPILKAN uang
```

| Baris | Isi uang |
| --- | --- |
| 1 | 5000 |
| 2 | 7000 |
| 3 | 4000 |

Yang ditampilkan: **4000**.

**Tips:** Selalu pakai isi **terbaru** dari baris sebelumnya, bukan isi awalnya.

### Materi 3/5: Menelusuri Pilihan

*Tampilan: flowchart dengan jalur yang dilewati diberi warna, maskot `mascot-happy`.*

Untuk pola pilihan, periksa syaratnya dulu, lalu ikuti **satu** jalan saja:

```pseudo
nilai = 70
JIKA nilai >= 75 MAKA
  TAMPILKAN "Lulus"
SELAIN ITU
  TAMPILKAN "Remedial"
```

70 tidak lebih dari atau sama dengan 75, jadi syaratnya salah. Jalan SELAIN ITU yang dipilih, dan yang tampil adalah "Remedial".

### Materi 4/5: Bug: Kesalahan dalam Algoritma

*Tampilan: ilustrasi serangga kecil di dalam komputer tua, maskot `mascot-wrong`.*

Kesalahan dalam algoritma atau program disebut **bug**. Contohnya algoritma keliling persegi ini:

```pseudo
BACA sisi
keliling = sisi + 4
TAMPILKAN keliling
```

Untuk sisi 5, hasilnya 9. Padahal keliling persegi 5 × 4 = 20. Bug-nya ada di baris 2: seharusnya **dikali** 4, bukan ditambah 4.

**Tahukah kamu?** Istilah *bug* populer sejak 1947, saat seekor ngengat ditemukan tersangkut di dalam komputer Harvard Mark II dan membuatnya bermasalah.

### Materi 5/5: Langkah Memperbaiki Bug

*Tampilan: empat kartu bernomor dengan ikon kaca pembesar, maskot `mascot-laptop`.*

Memperbaiki bug disebut **debugging**. Lakukan dengan urutan berikut:

1. Telusuri algoritmanya dengan contoh data.
2. Bandingkan hasilnya dengan hasil yang diharapkan.
3. Temukan langkah yang menjadi penyebab kesalahan.
4. Perbaiki langkah itu, lalu uji lagi.

**Awas!** Setelah memperbaiki, selalu uji lagi. Kadang perbaikan satu baris memunculkan bug baru di tempat lain.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa menjadi detektif bug!

**Kamu sudah belajar :**

- Menelusuri algoritma langkah demi langkah
- Mencatat isi data dengan tabel penelusuran
- Pengertian bug
- Empat langkah debugging

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Apa Itu Bug?

Apa yang dimaksud dengan **bug**?

- Serangga yang merusak kabel komputer
- **Kesalahan dalam algoritma atau program yang membuat hasilnya tidak sesuai** (benar)
- Program yang berjalan terlalu cepat
- Nama lain dari algoritma

**Benar:** Bug adalah kesalahan dalam algoritma atau program. Memperbaikinya disebut debugging.

**Salah:** Walau namanya berarti serangga, dalam pemrograman bug adalah kesalahan yang membuat hasil tidak sesuai harapan.

### Soal 2/5 · Isian Bagian Kosong: Perbaiki Keliling

Lengkapi pseudocode agar keliling persegi dihitung dengan benar.

```pseudo
BACA sisi
keliling = sisi _____ 4
TAMPILKAN keliling
```

Pilihan chip: `x` (benar) · `+` · `-`

**Benar:** Keliling persegi adalah sisi dikali 4, misalnya 5 × 4 = 20.

**Salah:** Keliling persegi menjumlahkan 4 sisi yang sama panjang, sama dengan sisi dikali 4.

### Soal 3/5 · Susun Kode: Langkah Debugging

Urutkan langkah memperbaiki bug.

Tampil acak: Perbaiki lalu uji lagi · Telusuri algoritmanya · Temukan langkah penyebab kesalahan · Bandingkan hasil dengan yang diharapkan

Urutan benar:

1. Telusuri algoritmanya
2. Bandingkan hasil dengan yang diharapkan
3. Temukan langkah penyebab kesalahan
4. Perbaiki lalu uji lagi

**Benar:** Telusuri, bandingkan, temukan, lalu perbaiki dan uji. Itulah debugging yang rapi.

**Salah:** Kesalahan baru bisa diperbaiki setelah ditemukan, dan ditemukan setelah hasilnya ditelusuri dan dibandingkan.

### Soal 4/5 · Tebak Hasil: Telusuri Datanya

Berapa nilai yang ditampilkan?

```pseudo
a = 3
b = a + 2
a = b x 2
TAMPILKAN a
```

- 5
- 6
- **10** (benar)
- 12

**Benar:** b = 3 + 2 = 5, lalu a = 5 × 2 = 10.

**Salah:** Isi a diganti di baris 3 memakai b yang sudah 5. Jadi a = 5 × 2 = 10.

### Soal 5/5 · Pilihan Ganda: Temukan Bug-nya

Algoritma rata-rata dua nilai ditulis `rata = nilai1 + nilai2 / 2`. Untuk nilai 80 dan 60, hasilnya 110, padahal seharusnya 70. Apa masalahnya?

- Nilainya terlalu besar
- **Penjumlahan harus dikurung dulu: (nilai1 + nilai2) / 2** (benar)
- Seharusnya dikali 2, bukan dibagi 2
- Tidak ada masalah

**Benar:** Pembagian dikerjakan lebih dulu, jadi 80 + 30 = 110. Dengan kurung, (80 + 60) / 2 = 70.

**Salah:** Telusuri: 60 / 2 = 30, lalu 80 + 30 = 110. Jumlahkan dulu dengan tanda kurung, baru dibagi 2.

## Level 6 · Kenalan dengan Python

Siswa bisa menampilkan teks dengan `print()`, membedakan teks dan angka, menulis komentar, dan mengenali error yang sering terjadi.

### Materi 1/5: Kenalan dengan Python!

*Tampilan: kotak kode + kotak "Hasilnya:", callout merah kecil "Awas!", maskot `mascot-laptop`.*

Komputer tidak mengerti bahasa Indonesia. Kita perlu **bahasa pemrograman**, dan salah satu yang paling ramah untuk pemula adalah **Python**. Orang memakai Python untuk membuat website, game sederhana, sampai kecerdasan buatan (AI).

Perintah pertamamu: `print()`, artinya "tampilkan".

```python
print("Halo, dunia!")
```

Hasilnya:

```
Halo, dunia!
```

**Awas!** Teks harus diapit tanda kutip `" "`, dan `print` ditulis dengan huruf kecil semua. `Print` atau `PRINT` tidak dikenali Python.

### Materi 2/5: Banyak Baris, Banyak print()

*Tampilan: kotak kode tiga baris + Hasilnya, panah urutan dari atas ke bawah, maskot `mascot-happy`.*

Python menjalankan kode dari baris paling atas ke bawah, persis seperti pola urutan. Setiap `print()` menampilkan satu baris baru. `print()` yang kosong menampilkan baris kosong.

```python
print("Halo!")
print()
print("Aku sedang belajar Python.")
```

Hasilnya:

```
Halo!

Aku sedang belajar Python.
```

### Materi 3/5: Teks atau Angka?

*Tampilan: dua kotak kode bersebelahan dengan hasil berbeda, maskot `mascot-think`.*

Perhatikan bedanya:

```python
print("5 + 3")
print(5 + 3)
```

Hasilnya:

```
5 + 3
8
```

Yang diapit tanda kutip adalah **teks**, ditampilkan apa adanya. Angka tanpa kutip bisa **dihitung** oleh Python.

**Tips:** Kutip tunggal juga boleh: `print('Halo')` sama dengan `print("Halo")`. Yang penting, kutip pembuka dan penutup sama.

### Materi 4/5: Komentar dengan Tanda #

*Tampilan: kotak kode dengan baris komentar berwarna abu-abu, maskot `mascot-laptop`.*

Tulisan setelah tanda `#` disebut **komentar**. Python melewati komentar dan tidak menjalankannya. Komentar dipakai untuk memberi catatan bagi manusia yang membaca kode.

```python
# Program menyapa teman
print("Halo, Rani!")  # tampilkan sapaan
```

Hasilnya:

```
Halo, Rani!
```

### Materi 5/5: Kalau Muncul Error

*Tampilan: tiga kartu merah berisi error dan perbaikannya, maskot `mascot-wrong` lalu `mascot-correct`.*

Error itu wajar! Programmer profesional juga sering bertemu error. Tiga error yang paling sering terjadi:

| Kode yang salah | Masalahnya | Perbaikan |
| --- | --- | --- |
| `Print("Hai")` | Huruf P kapital | `print("Hai")` |
| `print(Hai)` | Teks tanpa tanda kutip | `print("Hai")` |
| `print("Hai"` | Kurung tidak ditutup | `print("Hai")` |

**Tips:** Baca pesan error dari bawah. Python biasanya menunjuk baris yang bermasalah.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah menulis program Python pertamamu!

**Kamu sudah belajar :**

- Menampilkan teks dengan `print()`
- Kode dijalankan dari atas ke bawah
- Beda teks dan angka
- Komentar dengan `#` dan error yang sering muncul

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Penulisan yang Benar

Manakah penulisan kode Python yang benar untuk menampilkan *Halo*?

- `Print("Halo")`
- `print(Halo)`
- **`print("Halo")`** (benar)
- `print "Halo"`

**Benar:** `print` huruf kecil, lalu teks dalam tanda kutip di dalam kurung.

**Salah:** Ingat polanya: `print` huruf kecil, kurung buka, teks dalam tanda kutip, kurung tutup.

### Soal 2/5 · Isian Bagian Kosong: Lengkapi Perintahnya!

Lengkapi kode agar komputer menampilkan *Halo, dunia!*

```python
_____("Halo, dunia!")
```

Pilihan chip: `print` (benar) · `Print` · `tampil`

**Benar:** `print()` adalah perintah untuk menampilkan sesuatu ke layar.

**Salah:** Python membedakan huruf besar dan kecil, dan perintahnya dalam bahasa Inggris: `print`.

### Soal 3/5 · Susun Kode: Kartu Ucapan

Susun kode agar hasilnya:

```
Selamat ulang tahun!
Semoga sehat selalu.
Dari: Rani
```

Tampil acak: `print("Dari: Rani")` · `print("Selamat ulang tahun!")` · `print("Semoga sehat selalu.")`

Urutan benar:

```python
print("Selamat ulang tahun!")
print("Semoga sehat selalu.")
print("Dari: Rani")
```

**Benar:** Python menjalankan `print` dari atas ke bawah, jadi urutan baris kode sama dengan urutan hasilnya.

**Salah:** Baris yang ditulis lebih atas tampil lebih dulu. Ucapan di atas, nama pengirim paling bawah.

### Soal 4/5 · Tebak Output: Apa yang Muncul?

```python
print("Aku suka Python")
```

- **Aku suka Python** (benar)
- "Aku suka Python"
- print("Aku suka Python")
- Muncul pesan error

**Benar:** Tanda kutip hanya penanda teks, jadi tidak ikut tampil.

**Salah:** Yang tampil hanya isi di dalam tanda kutip, tanpa kata `print` dan tanpa tanda kutipnya.

### Soal 5/5 · Tulis Kode: Giliranmu!

Tulis kode untuk menampilkan: **Selamat pagi!**

Jawaban:

```python
print("Selamat pagi!")
```

Diterima juga: kutip tunggal `print('Selamat pagi!')`. Spasi di dalam kurung boleh.

**Benar:** Kamu baru saja menulis program Python pertamamu!

**Salah:** Ingat polanya: `print`, kurung buka, teks dalam tanda kutip, kurung tutup.

# Unit 2 · Variabel

## Level 7 · Kotak Penyimpan Data

Siswa bisa membuat variabel dengan tanda `=`, menampilkan isinya, dan memahami bahwa satu variabel menyimpan satu isi.

### Materi 1/5: Kotak Berlabel

*Tampilan: ilustrasi kotak-kotak berlabel (pensil, penghapus, uang jajan), maskot `mascot-think` di atas pertanyaan pemantik.*

Di meja belajarmu mungkin ada kotak pensil, kotak penghapus, dan celengan. Setiap kotak punya **label** supaya kamu tahu isinya tanpa harus membuka satu per satu.

Komputer juga butuh "kotak" untuk menyimpan data, misalnya nama pemain atau skor game. Kotak itu disebut **variabel**.

**Pertanyaan pemantik:** Kalau semua kotak tidak diberi label, apa yang terjadi saat kamu mencari penghapus?

### Materi 2/5: Membuat Variabel

*Tampilan: kotak kode dengan 3 bagian diberi warna berbeda, chip "Ingat tiga hal ini!", maskot `mascot-laptop`.*

Membuat variabel di Python cukup satu baris:

```python
nama = "Rani"
umur = 13
```

**Ingat tiga hal ini!**

- **Nama variabel** di sebelah kiri, yaitu labelnya: `nama`, `umur`
- **Tanda `=`**: artinya "simpan ke dalam"
- **Nilai** di sebelah kanan, yaitu isinya: `"Rani"`, `13`

**Awas!** Di Python, `=` bukan "sama dengan" seperti di matematika. Baca `umur = 13` sebagai "simpan 13 ke dalam umur".

### Materi 3/5: Menampilkan Isi Variabel

*Tampilan: dua kotak kode bersebelahan, satu dengan kutip dan satu tanpa kutip, maskot `mascot-happy`.*

Untuk melihat isi variabel, tulis namanya di dalam `print()` **tanpa** tanda kutip:

```python
nama = "Rani"
print(nama)
print("nama")
print("Halo", nama)
```

Hasilnya:

```
Rani
nama
Halo Rani
```

**Awas!** `print(nama)` menampilkan **isi** variabel. `print("nama")` menampilkan **tulisan** nama apa adanya.

### Materi 4/5: Satu Kotak, Satu Isi

*Tampilan: animasi kotak "a" disalin ke kotak "b", lalu isi "a" diganti, maskot `mascot-laptop`.*

Satu variabel hanya menyimpan **satu** isi. Kalau diisi lagi, isi lamanya diganti. Isi variabel juga bisa disalin ke variabel lain:

```python
a = 5
b = a
a = 9
print(a)
print(b)
```

Hasilnya:

```
9
5
```

`b` mendapat salinan isi `a` saat baris `b = a` dijalankan, yaitu 5. Saat `a` diganti menjadi 9, `b` tetap 5.

### Materi 5/5: Variabel Membuat Program Mudah Diubah

*Tampilan: kotak kode dengan nama yang disorot di tiga tempat, maskot `mascot-wave`.*

Bayangkan nama "Rani" ditulis di banyak baris. Kalau ingin diganti "Dika", kamu harus mengubah semuanya. Dengan variabel, cukup ubah satu baris:

```python
nama = "Dika"
print("Halo", nama)
print(nama, "sedang belajar Python")
```

Hasilnya:

```
Halo Dika
Dika sedang belajar Python
```

**Tips:** Programmer memakai variabel agar program mudah diubah dan tidak perlu menulis data yang sama berulang kali.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa menyimpan data di dalam variabel.

**Kamu sudah belajar :**

- Variabel sebagai kotak berlabel
- Membuat variabel dengan tanda `=`
- Menampilkan isi variabel tanpa tanda kutip
- Satu variabel menyimpan satu isi

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Arti Tanda Sama Dengan

Apa arti tanda `=` pada kode `skor = 100`?

- Skor sama besar dengan 100
- **Simpan 100 ke dalam variabel skor** (benar)
- Bandingkan skor dengan 100
- Tampilkan skor dan 100

**Benar:** Di Python, `=` artinya menyimpan nilai di kanan ke variabel di kiri.

**Salah:** Tanda `=` bukan "sama dengan" seperti di matematika. Bacalah sebagai "simpan ke dalam".

### Soal 2/5 · Isian Bagian Kosong: Simpan Buahnya!

Lengkapi kode agar kata *apel* tersimpan di variabel `buah`.

```python
buah ___ "apel"
```

Pilihan chip: `=` (benar) · `==` · `:`

**Benar:** Satu tanda `=` artinya "simpan ke dalam".

**Salah:** Untuk menyimpan nilai, pakai satu tanda `=`. Tanda `==` dipakai untuk membandingkan, nanti di Level 19.

### Soal 3/5 · Susun Kode: Sapa Dika

Susun kode agar hasilnya:

```
Halo Dika
Dika suka sepak bola
```

Tampil acak: `print(nama, "suka sepak bola")` · `nama = "Dika"` · `print("Halo", nama)`

Urutan benar:

```python
nama = "Dika"
print("Halo", nama)
print(nama, "suka sepak bola")
```

**Benar:** Variabel dibuat dulu, baru isinya bisa dipakai di `print`.

**Salah:** Variabel `nama` harus diisi sebelum dipakai. Setelah itu, `print` ditulis sesuai urutan hasil.

### Soal 4/5 · Tebak Output: Isi Terakhir

```python
x = 5
x = 8
print(x)
```

- 5
- **8** (benar)
- 13
- x

**Benar:** Nilai 5 sudah diganti 8, jadi yang tampil isi terakhirnya.

**Salah:** Variabel tidak menjumlahkan isinya. Nilai baru menggantikan nilai lama.

### Soal 5/5 · Tulis Kode: Kota Asalmu

Buat variabel `kota` yang berisi teks **Bandung**, lalu tampilkan isinya.

Jawaban:

```python
kota = "Bandung"
print(kota)
```

Diterima juga: kutip tunggal ('Bandung'). Hasil yang tampil harus `Bandung` (tanpa kutip).

**Benar:** Kamu sudah bisa membuat variabel dan menampilkan isinya.

**Salah:** Dua langkah: simpan dulu dengan `kota = "Bandung"`, lalu tampilkan dengan `print(kota)` tanpa tanda kutip.

## Level 8 · Tipe Data

Siswa mengenal 4 tipe data dasar, bisa membedakan teks dan angka, dan bisa memeriksa tipe data dengan `type()`.

### Materi 1/5: Isi Kotak Bisa Berbeda Jenis

*Tampilan: 4 ConceptItem kecil dalam tile krem, satu per tipe data, maskot `mascot-happy`.*

Data yang disimpan punya jenis atau **tipe data**. Empat yang paling sering dipakai:

| Tipe data | Isinya | Contoh |
| --- | --- | --- |
| Teks (`str`) | Huruf, kata, kalimat; selalu pakai tanda kutip | `kelas = "7A"` |
| Bilangan bulat (`int`) | Angka tanpa koma | `skor = 90` |
| Bilangan desimal (`float`) | Angka berkoma, ditulis pakai titik | `tinggi = 1.55` |
| Benar/Salah (`bool`) | Hanya `True` atau `False` | `sudah_makan = True` |

**Tips:** `"13"` (pakai kutip) itu teks, sedangkan `13` (tanpa kutip) itu angka. Bedanya akan penting di level berikutnya.

### Materi 2/5: Kutip Mengubah Segalanya

*Tampilan: dua kolom "angka" dan "teks" dengan contoh yang mirip, maskot `mascot-think`.*

Tanda kutip menentukan tipe data. Perhatikan pasangan berikut:

| Tanpa kutip | Dengan kutip |
| --- | --- |
| `13` adalah `int` | `"13"` adalah `str` |
| `2.5` adalah `float` | `"2.5"` adalah `str` |
| `True` adalah `bool` | `"True"` adalah `str` |

Angka yang ditulis dalam kutip tidak bisa dihitung, karena Python menganggapnya tulisan, bukan bilangan.

### Materi 3/5: Mengecek Tipe dengan type()

*Tampilan: kotak kode + Hasilnya dengan label tipe berwarna, maskot `mascot-laptop`.*

Kalau ragu, tanyakan ke Python dengan `type()`:

```python
print(type("halo"))
print(type(13))
print(type(1.5))
print(type(True))
```

Hasilnya:

```
<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
```

**Tips:** `type()` sangat berguna saat programmu error karena tipe data yang tidak cocok.

### Materi 4/5: Desimal Pakai Titik

*Tampilan: kartu merah "1,5" dan kartu hijau "1.5", maskot `mascot-wrong` lalu `mascot-correct`.*

Di Indonesia kita menulis satu koma lima sebagai 1,5. Di Python, desimal **wajib** memakai titik:

```python
tinggi = 1.5
print(tinggi)
print(1,5)
```

Hasilnya:

```
1.5
1 5
```

**Awas!** `print(1,5)` tidak menampilkan satu koma lima. Koma di dalam `print` memisahkan dua data, yaitu 1 dan 5.

### Materi 5/5: Benar atau Salah: bool

*Tampilan: saklar lampu menyala (True) dan mati (False), maskot `mascot-wave`.*

Tipe `bool` hanya punya dua nilai: `True` dan `False`. Huruf pertamanya wajib kapital dan tanpa tanda kutip.

```python
sudah_mandi = True
hujan = False
print(sudah_mandi, hujan)
```

Hasilnya:

```
True False
```

Nilai `bool` nanti dipakai sebagai syarat di unit If Statement, misalnya "jika hujan, bawa payung".

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah mengenal jenis-jenis isi kotak variabel.

**Kamu sudah belajar :**

- Tipe data: teks, bilangan bulat, desimal, benar/salah
- Tanda kutip mengubah angka menjadi teks
- Mengecek tipe data dengan `type()`
- Desimal pakai titik dan nilai `True`/`False`

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Tipe Data Kelas

Variabel `kelas = "7A"` menyimpan tipe data apa?

- `int` (bilangan bulat)
- `float` (bilangan desimal)
- **`str` (teks)** (benar)
- `bool` (benar/salah)

**Benar:** Isinya diapit tanda kutip, jadi termasuk teks (`str`).

**Salah:** Ada huruf dan tanda kutip, jadi bukan angka dan bukan `True`/`False`. Itu teks.

### Soal 2/5 · Isian Bagian Kosong: Sudah Makan?

Lengkapi kode agar `sudah_makan` bertipe `bool`.

```python
sudah_makan = ____
print(type(sudah_makan))
```

Pilihan chip: `True` (benar) · `"True"` · `true`

**Benar:** `True` dengan T kapital dan tanpa kutip adalah nilai `bool`.

**Salah:** `"True"` pakai kutip jadi teks, dan `true` huruf kecil tidak dikenali Python.

### Soal 3/5 · Susun Kode: Teks Jadi Angka

Susun kode agar hasilnya:

```
<class 'str'>
<class 'int'>
```

Tampil acak: `print(type(angka))` · `angka = 5` · `print(type(angka))` · `angka = "5"`

Urutan benar:

```python
angka = "5"
print(type(angka))
angka = 5
print(type(angka))
```

**Benar:** Mula-mula angka berisi teks "5", lalu diganti dengan bilangan 5. Tipe datanya ikut berubah.

**Salah:** Baris pertama yang tampil adalah `str`, jadi isi dengan kutip harus disimpan dan dicek lebih dulu.

### Soal 4/5 · Tebak Output: Tipe yang Tampil

```python
print(type(3.0))
```

- `<class 'int'>`
- **`<class 'float'>`** (benar)
- `<class 'str'>`
- `3.0`

**Benar:** 3.0 memakai titik desimal, jadi bertipe `float` walaupun nilainya bulat.

**Salah:** `type()` menampilkan tipe datanya, bukan nilainya. Angka dengan titik desimal selalu `float`.

### Soal 5/5 · Tulis Kode: Data Rapor

Buat variabel `nilai` berisi angka **88** dan variabel `lulus` berisi **True**, lalu tampilkan keduanya dalam satu baris dengan satu `print`.

```
88 True
```

Jawaban:

```python
nilai = 88
lulus = True
print(nilai, lulus)
```

```python
lulus = True
nilai = 88
print(nilai, lulus)
```

**Benar:** Kamu sudah memakai dua tipe data sekaligus: `int` dan `bool`.

**Salah:** Tulis `nilai = 88` dan `lulus = True` tanpa tanda kutip, lalu `print(nilai, lulus)` dengan koma sebagai pemisah.

## Level 9 · Mengubah Isi Variabel

Siswa bisa mengganti isi variabel, menambah isi dari nilai lamanya, memakai `+=` dan kawan-kawan, menggabung teks, dan melacak isi variabel baris demi baris.

### Materi 1/5: Memakai dan Mengganti Isi

*Tampilan: animasi kotak "skor" yang isinya berganti dari 10 ke 25, kotak kode + Hasilnya, maskot `mascot-laptop`.*

Isi variabel bisa ditampilkan dengan `print()` dan bisa diganti kapan saja:

```python
skor = 10
print(skor)
skor = 25
print(skor)
```

Hasilnya:

```
10
25
```

Saat diisi nilai baru, nilai lama hilang dan diganti. Kotak hanya muat **satu** isi.

**Awas!** `print(skor)` menampilkan **isi** variabel (10). `print("skor")` menampilkan **tulisan** skor apa adanya.

### Materi 2/5: Menambah dari Isi Lama

*Tampilan: animasi koin masuk ke kotak "koin", maskot `mascot-happy`.*

Bagaimana kalau kamu ingin **menambah** isi, bukan mengganti? Pakai isi lamanya di sebelah kanan:

```python
koin = 20
koin = koin + 5
print(koin)
```

Hasilnya: `25`.

Python mengerjakan sebelah kanan dulu: isi `koin` (20) ditambah 5 menjadi 25, lalu hasilnya disimpan kembali ke `koin`.

### Materi 3/5: Cara Singkat: +=

*Tampilan: tabel cara panjang dan cara singkat, maskot `mascot-laptop`.*

Pola `x = x + 5` sangat sering dipakai, jadi Python punya cara singkatnya:

| Cara panjang | Cara singkat | Artinya |
| --- | --- | --- |
| `x = x + 5` | `x += 5` | Tambah 5 |
| `x = x - 2` | `x -= 2` | Kurangi 2 |
| `x = x * 3` | `x *= 3` | Kalikan 3 |

Keduanya menghasilkan hal yang sama. Pilih yang menurutmu paling mudah dibaca.

### Materi 4/5: Menggabung Teks dengan +

*Tampilan: dua potong kertas teks disambung, maskot `mascot-think`.*

Tanda `+` pada teks artinya **menyambung**:

```python
depan = "Algo"
belakang = "go"
print(depan + belakang)
print(depan + " " + belakang)
```

Hasilnya:

```
Algogo
Algo go
```

**Awas!** Teks tidak bisa disambung langsung dengan angka. `"Umur: " + 13` membuat error. Untuk sekarang, pakai koma: `print("Umur:", 13)`. Cara lain dipelajari di Level 10.

### Materi 5/5: Melacak Isi Variabel

*Tampilan: tabel pelacakan baris demi baris di samping kode, maskot `mascot-wave`.*

Programmer sering **melacak** isi variabel untuk memastikan programnya benar:

```python
uang = 10000
uang = uang - 3000
uang = uang + 5000
print(uang)
```

| Baris | Isi `uang` |
| --- | --- |
| 1 | 10000 |
| 2 | 7000 |
| 3 | 12000 |

Hasilnya: `12000`.

**Tips:** Saat soal terasa sulit, tulis tabel seperti ini di kertas. Isi satu baris demi satu baris.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa membuat isi variabel berubah-ubah.

**Kamu sudah belajar :**

- Mengganti isi variabel
- Menambah dari isi lama dengan `x = x + 5`
- Cara singkat `+=`, `-=`, `*=`
- Menggabung teks dan melacak isi variabel

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Arti +=

Apa arti kode `skor += 5`?

- Isi skor diganti menjadi 5
- **Isi skor ditambah 5** (benar)
- Skor dibandingkan dengan 5
- Membuat variabel baru bernama skor5

**Benar:** `skor += 5` sama dengan `skor = skor + 5`.

**Salah:** `+=` tidak mengganti isi, tapi menambahkan ke isi lama.

### Soal 2/5 · Isian Bagian Kosong: Nyawa Berkurang

Lengkapi kode agar nyawa berkurang 1 dan yang tampil `2`.

```python
nyawa = 3
nyawa ___ 1
print(nyawa)
```

Pilihan chip: `-=` (benar) · `=` · `+=`

**Benar:** `nyawa -= 1` mengurangi isi lama: 3 - 1 = 2.

**Salah:** `=` mengganti isi menjadi 1, dan `+=` justru menambah menjadi 4. Untuk mengurangi, pakai `-=`.

### Soal 3/5 · Susun Kode: Hewan Peliharaan

Susun kode agar hasilnya:

```
kucing
kelinci
```

Tampil acak: `print(hewan)` · `hewan = "kelinci"` · `hewan = "kucing"` · `print(hewan)`

Urutan benar:

```python
hewan = "kucing"
print(hewan)
hewan = "kelinci"
print(hewan)
```

**Benar:** Isi variabel diganti di tengah program, jadi `print` kedua menampilkan isi yang baru.

**Salah:** Variabel harus diisi dulu sebelum ditampilkan. Isi "kucing" dulu, tampilkan, baru ganti ke "kelinci".

### Soal 4/5 · Tebak Output: Lacak Poinnya

```python
poin = 4
poin = poin * 3
poin -= 2
print(poin)
```

- 12
- **10** (benar)
- 4
- 2

**Benar:** poin menjadi 4, lalu 4 × 3 = 12, lalu 12 − 2 = 10.

**Salah:** Lacak baris demi baris: 4 → 12 → 10. Setiap baris memakai isi terbaru dari baris sebelumnya.

### Soal 5/5 · Tulis Kode: Tabungan

Buat variabel `tabungan` berisi **20000**, tambahkan **15000** ke dalamnya, lalu tampilkan isinya.

```
35000
```

Jawaban:

```python
tabungan = 20000
tabungan += 15000
print(tabungan)
```

```python
tabungan = 20000
tabungan = tabungan + 15000
print(tabungan)
```

**Benar:** Tabunganmu bertambah! Kamu sudah bisa mengubah isi variabel dari nilai lamanya.

**Salah:** Isi dulu `tabungan = 20000`, lalu tambahkan dengan `tabungan += 15000`, baru tampilkan dengan `print(tabungan)`.

## Level 10 · Nama & Konversi Tipe

Siswa bisa memberi nama variabel dengan benar dan mengubah tipe data dengan `int()`, `float()`, dan `str()`.

### Materi 1/5: Aturan Memberi Nama

*Tampilan: dua kolom, kartu hijau "Boleh" dan kartu merah "Tidak boleh", maskot `mascot-wave`.*

Nama variabel tidak boleh sembarangan. Ikuti aturan ini:

- Boleh pakai huruf, angka, dan garis bawah `_`
- Tidak boleh diawali angka
- Tidak boleh ada spasi atau tanda `-`
- Huruf besar dan kecil dianggap berbeda: `Nama` dan `nama` adalah dua variabel berbeda

| Boleh | Tidak boleh |
| --- | --- |
| `nilai_ujian` | `nilai ujian` (ada spasi) |
| `kelas7` | `7kelas` (diawali angka) |
| `jumlahSiswa` | `jumlah-siswa` (ada tanda minus) |

**Tips:** Pilih nama yang menjelaskan isinya. `uang_jajan` lebih mudah dipahami daripada `x`.

### Materi 2/5: Kata yang Sudah Dipakai Python

*Tampilan: daftar kata kunci Python dalam chip abu-abu, maskot `mascot-think`.*

Beberapa kata sudah punya arti khusus di Python, sehingga tidak boleh dipakai sebagai nama variabel. Contohnya `if`, `else`, `for`, `while`, `True`, `False`, dan `and`.

```python
if = 5        # Error!
jika = 5      # Boleh
```

**Tips:** Programmer Python biasanya memakai huruf kecil dan garis bawah untuk nama variabel, misalnya `nilai_akhir` dan `jumlah_buku`.

### Materi 3/5: Teks Jadi Angka dengan int()

*Tampilan: mesin pengubah dengan masukan "13" dan keluaran 13, maskot `mascot-laptop`.*

Teks berisi angka bisa diubah menjadi bilangan dengan `int()` (bulat) atau `float()` (desimal):

```python
umur = "13"
umur = int(umur)
print(umur + 1)
tinggi = float("1.5")
print(tinggi * 2)
```

Hasilnya:

```
14
3.0
```

Setelah diubah, isinya bisa dihitung.

### Materi 4/5: Angka Jadi Teks dengan str()

*Tampilan: mesin pengubah dengan masukan 13 dan keluaran "13", maskot `mascot-happy`.*

Ingat masalah `"Umur: " + 13` yang error? Ubah angkanya menjadi teks dengan `str()`, lalu sambung:

```python
umur = 13
print("Umur: " + str(umur))
```

Hasilnya: `Umur: 13`.

**Ingat tiga hal ini!**

- `int()` mengubah menjadi bilangan bulat
- `float()` mengubah menjadi bilangan desimal
- `str()` mengubah menjadi teks

### Materi 5/5: Kapan Konversi Gagal?

*Tampilan: tiga kartu, dua merah dan satu kuning, maskot `mascot-wrong`.*

Tidak semua data bisa diubah:

| Kode | Hasil |
| --- | --- |
| `int("tiga")` | Error, karena "tiga" bukan angka |
| `int("3.5")` | Error, karena teks desimal tidak bisa langsung jadi bilangan bulat |
| `int(3.9)` | `3`, karena bagian desimalnya dibuang |

**Awas!** `int()` tidak membulatkan ke atas. Bilangan desimal hanya dipotong bagian di belakang titiknya.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa mengubah satu tipe data menjadi tipe lain.

**Kamu sudah belajar :**

- Aturan memberi nama variabel
- Kata yang tidak boleh dipakai sebagai nama
- Mengubah tipe dengan `int()`, `float()`, dan `str()`
- Konversi yang bisa gagal

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Nama yang Benar

Manakah nama variabel yang **boleh** dipakai di Python?

- 2nilai
- nilai siswa
- **nilai\_siswa** (benar)
- nilai-siswa

**Benar:** Garis bawah `_` boleh dipakai untuk memisahkan kata dalam nama variabel.

**Salah:** Nama variabel tidak boleh diawali angka, berisi spasi, atau memakai tanda minus.

### Soal 2/5 · Isian Bagian Kosong: Sambung Nilai

Lengkapi kode agar tampil `Nilai: 90` tanpa error.

```python
print("Nilai: " + ___(90))
```

Pilihan chip: `str` (benar) · `int` · `float`

**Benar:** `str(90)` mengubah angka menjadi teks, sehingga bisa disambung dengan `+`.

**Salah:** Teks hanya bisa disambung dengan teks. Ubah angkanya menjadi teks dengan `str()`.

### Soal 3/5 · Susun Kode: Harga Baru

Susun kode agar hasilnya:

```
Harga baru: 12000
```

Tampil acak: `harga = harga + 2000` · `print("Harga baru:", harga)` · `harga = "10000"` · `harga = int(harga)`

Urutan benar:

```python
harga = "10000"
harga = int(harga)
harga = harga + 2000
print("Harga baru:", harga)
```

**Benar:** Teks diubah menjadi angka dulu, baru bisa ditambah 2000.

**Salah:** `"10000"` masih teks, jadi harus diubah dengan `int()` sebelum dijumlahkan.

### Soal 4/5 · Tebak Output: Sambung atau Jumlah?

```python
a = "4"
b = "6"
print(a + b)
print(int(a) + int(b))
```

- **46 lalu 10** (benar)
- 10 lalu 10
- 46 lalu 46
- Error

**Benar:** Teks "4" + "6" disambung menjadi 46, sedangkan setelah diubah dengan `int()` keduanya dijumlah menjadi 10.

**Salah:** Tanda `+` pada teks menyambung, pada angka menjumlahkan. Baris pertama masih teks, baris kedua sudah angka.

### Soal 5/5 · Tulis Kode: Buku Dikali Dua

Variabel `jumlah_buku` berisi teks **"7"**. Ubah menjadi angka, lalu tampilkan hasil kalinya dengan 2.

```
14
```

Jawaban:

```python
jumlah_buku = "7"
jumlah_buku = int(jumlah_buku)
print(jumlah_buku * 2)
```

```python
jumlah_buku = "7"
print(int(jumlah_buku) * 2)
```

```python
jumlah_buku = "7"
angka = int(jumlah_buku)
print(angka * 2)
```

**Benar:** Teks "7" berhasil diubah menjadi angka 7, lalu dikali 2.

**Salah:** Kalau langsung dikali, teks "7" justru diulang menjadi "77". Ubah dulu dengan `int()`.

## Level 11 · Bermain dengan Teks

Siswa bisa mengolah teks: menghitung panjang dengan `len()`, mengambil huruf dengan indeks, mengulang teks dengan `*`, dan mengubah huruf besar-kecil.

### Materi 1/5: Teks Adalah Deretan Huruf

*Tampilan: kata "Python" dipecah menjadi 6 kotak huruf berurutan, maskot `mascot-think`.*

Teks (`str`) sebenarnya adalah **deretan huruf** yang berbaris rapi. Kata "Python" terdiri dari 6 huruf: P, y, t, h, o, n.

Spasi dan tanda baca juga dihitung sebagai huruf. Teks "Hai, Rani" terdiri dari 9 karakter, termasuk koma dan spasi.

**Pertanyaan pemantik:** Kalau kamu mengetik kata sandi di HP, bagaimana aplikasi tahu sandimu minimal 8 karakter?

### Materi 2/5: Menghitung Panjang dengan len()

*Tampilan: penggaris di bawah deretan huruf, maskot `mascot-laptop`.*

`len()` menghitung banyaknya karakter dalam teks:

```python
nama = "Algogo"
print(len(nama))
print(len("Halo dunia"))
```

Hasilnya:

```
6
10
```

"Halo dunia" berisi 10 karakter karena spasi di tengahnya ikut dihitung.

### Materi 3/5: Mengambil Huruf dengan Indeks

*Tampilan: kotak huruf bernomor 0 sampai 5 di atas dan -6 sampai -1 di bawah, maskot `mascot-happy`.*

Setiap huruf punya nomor urut yang disebut **indeks**. Ambil satu huruf dengan tanda kurung siku:

```python
kata = "Python"
print(kata[0])
print(kata[2])
print(kata[-1])
```

Hasilnya:

```
P
t
n
```

**Awas!** Indeks dimulai dari **0**, bukan 1. Indeks `-1` artinya huruf paling belakang.

### Materi 4/5: Mengulang Teks dengan *

*Tampilan: kata "ha" yang disalin tiga kali, maskot `mascot-happy`.*

Tanda `*` pada teks artinya **mengulang**:

```python
print("ha" * 3)
print("-" * 10)
```

Hasilnya:

```
hahaha
----------
```

**Tips:** `"-" * 10` sering dipakai untuk membuat garis pemisah yang rapi pada tampilan program.

### Materi 5/5: Huruf Besar dan Kecil

*Tampilan: tombol Caps Lock menyala dan mati, maskot `mascot-laptop`.*

Teks punya perintah bawaan untuk mengubah huruf. Tulis titik setelah teks, lalu nama perintahnya:

```python
sapa = "Halo Algo"
print(sapa.upper())
print(sapa.lower())
```

Hasilnya:

```
HALO ALGO
halo algo
```

**Tahukah kamu?** `lower()` berguna saat membandingkan jawaban. Dengan `jawaban.lower() == "jakarta"`, ketikan "Jakarta" maupun "JAKARTA" sama-sama dianggap benar.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa mengolah teks seperti programmer.

**Kamu sudah belajar :**

- Teks adalah deretan karakter
- Menghitung panjang teks dengan `len()`
- Mengambil huruf dengan indeks
- Mengulang teks dan mengubah huruf besar-kecil

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Panjang Kata

Berapa hasil `len("Belajar")`?

- 6
- **7** (benar)
- 8
- Belajar

**Benar:** B-e-l-a-j-a-r terdiri dari 7 huruf.

**Salah:** `len()` menghitung semua karakternya. Hitung satu per satu: B, e, l, a, j, a, r.

### Soal 2/5 · Isian Bagian Kosong: Huruf Pertama

Lengkapi kode agar tampil huruf pertama, yaitu `B`.

```python
kata = "Buku"
print(kata[___])
```

Pilihan chip: `0` (benar) · `1` · `-1`

**Benar:** Indeks pertama selalu 0.

**Salah:** Indeks 1 adalah huruf kedua ("u"), dan -1 adalah huruf terakhir. Huruf pertama ada di indeks 0.

### Soal 3/5 · Susun Kode: Kartu Nama

Susun kode agar hasilnya:

```
Algogo
6
==========
```

Tampil acak: `print("=" * 10)` · `print(len(kata))` · `kata = "Algogo"` · `print(kata)`

Urutan benar:

```python
kata = "Algogo"
print(kata)
print(len(kata))
print("=" * 10)
```

**Benar:** Teks disimpan dulu, lalu ditampilkan, dihitung panjangnya, dan ditutup garis.

**Salah:** Variabel harus diisi sebelum dipakai, lalu `print` disusun sesuai urutan hasil yang tampil.

### Soal 4/5 · Tebak Output: Huruf Pilihan

```python
kata = "Merdeka"
print(kata[1] + kata[-1])
```

- **ea** (benar)
- Ma
- ra
- ek

**Benar:** `kata[1]` adalah huruf kedua, "e", dan `kata[-1]` adalah huruf terakhir, "a". Disambung menjadi "ea".

**Salah:** Ingat, indeks dimulai dari 0. Indeks 1 adalah "e", dan -1 adalah huruf paling belakang, "a".

### Soal 5/5 · Tulis Kode: Panjang dan Huruf Pertama

Buat variabel `kata` berisi **Python**, lalu tampilkan panjangnya dan huruf pertamanya dalam satu baris dengan satu `print`.

```
6 P
```

Jawaban:

```python
kata = "Python"
print(len(kata), kata[0])
```

**Benar:** Kamu sudah memakai `len()` dan indeks sekaligus!

**Salah:** Simpan teks di `kata`, lalu tulis `print(len(kata), kata[0])`. Ingat, huruf pertama ada di indeks 0.

## Level 12 · Tukar Isi & Banyak Variabel

Siswa bisa mengisi banyak variabel sekaligus, menukar isi dua variabel dengan benar, dan menelusuri program yang memakai beberapa variabel.

### Materi 1/5: Mengisi Banyak Variabel Sekaligus

*Tampilan: tiga kotak yang terisi bersamaan, maskot `mascot-laptop`.*

Beberapa variabel bisa diisi dalam satu baris. Pisahkan dengan koma di kiri dan kanan tanda `=`:

```python
a, b, c = 1, 2, 3
print(a, b, c)
x = y = 0
print(x, y)
```

Hasilnya:

```
1 2 3
0 0
```

Nilai di kanan dipasangkan sesuai urutan: `a` mendapat 1, `b` mendapat 2, `c` mendapat 3. `x = y = 0` mengisi keduanya dengan 0.

### Materi 2/5: Masalah Menukar Isi

*Tampilan: dua gelas berisi susu dan teh, maskot `mascot-think`.*

Kamu punya gelas `a` berisi 5 dan gelas `b` berisi 9. Bagaimana menukar isinya? Coba cara ini:

```python
a = 5
b = 9
a = b
b = a
print(a, b)
```

Hasilnya `9 9`, bukan `9 5`! Saat `a = b` dijalankan, isi lama `a` (5) langsung hilang. Akibatnya `b = a` hanya menyalin 9.

**Pertanyaan pemantik:** Kalau kamu ingin menukar isi dua gelas, gelas apa yang kamu butuhkan?

### Materi 3/5: Menukar dengan Gelas Bantu

*Tampilan: tiga gelas, satu kosong sebagai gelas bantu, panah perpindahan bernomor, maskot `mascot-happy`.*

Seperti di dunia nyata, kita butuh **gelas bantu**. Simpan dulu isi `a` ke variabel sementara:

```python
a = 5
b = 9
sementara = a
a = b
b = sementara
print(a, b)
```

Hasilnya: `9 5`. Isinya berhasil ditukar!

### Materi 4/5: Cara Singkat ala Python

*Tampilan: dua kotak yang bertukar posisi dalam satu langkah, maskot `mascot-laptop`.*

Python punya cara yang lebih singkat untuk menukar isi:

```python
a = 5
b = 9
a, b = b, a
print(a, b)
```

Hasilnya: `9 5`.

Python mengambil dulu semua nilai di kanan (9 dan 5), baru memasangkannya ke kiri. Jadi tidak ada isi yang hilang.

### Materi 5/5: Melacak Banyak Variabel

*Tampilan: tabel penelusuran dua kolom x dan y, maskot `mascot-wave`.*

Saat ada beberapa variabel, buat tabel dengan satu kolom untuk setiap variabel:

```python
x = 2
y = x + 3
x = x * y
y = y - x
print(x, y)
```

| Baris | x | y |
| --- | --- | --- |
| 1 | 2 | - |
| 2 | 2 | 5 |
| 3 | 10 | 5 |
| 4 | 10 | -5 |

Hasilnya: `10 -5`.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah mahir mengatur banyak variabel.

**Kamu sudah belajar :**

- Mengisi banyak variabel sekaligus
- Kenapa `a = b` lalu `b = a` gagal menukar
- Menukar isi dengan variabel sementara
- Cara singkat `a, b = b, a` dan melacak banyak variabel

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Isi Variabel b

Setelah `a, b, c = 4, 5, 6` dijalankan, apa isi variabel `b`?

- 4
- **5** (benar)
- 6
- 4, 5, 6

**Benar:** Nilai dipasangkan sesuai urutan: a = 4, b = 5, c = 6.

**Salah:** Variabel kedua di kiri mendapat nilai kedua di kanan, yaitu 5.

### Soal 2/5 · Isian Bagian Kosong: Tukar Minuman

Lengkapi kode agar tampil `teh kopi`.

```python
a = "kopi"
b = "teh"
a, b = b, ___
print(a, b)
```

Pilihan chip: `a` (benar) · `b` · `sementara`

**Benar:** `a, b = b, a` menukar isi keduanya dalam satu baris.

**Salah:** Pasangannya harus bersilang: `a` mendapat isi `b`, dan `b` mendapat isi `a`. Variabel `sementara` juga belum pernah dibuat.

### Soal 3/5 · Susun Kode: Tukar dengan Gelas Bantu

Susun kode agar isi `a` dan `b` tertukar dan hasilnya:

```
9 5
```

Tampil acak: `b = sementara` · `print(a, b)` · `a, b = 5, 9` · `a = b` · `sementara = a`

Urutan benar:

```python
a, b = 5, 9
sementara = a
a = b
b = sementara
print(a, b)
```

**Benar:** Isi `a` diamankan dulu di gelas bantu, baru `a` boleh ditimpa.

**Salah:** Kalau `a = b` dijalankan sebelum `sementara = a`, isi lama `a` hilang dan hasilnya menjadi `9 9`.

### Soal 4/5 · Tebak Output: Tukar Tanpa Gelas

```python
p, q = 3, 4
p = p + q
q = p - q
p = p - q
print(p, q)
```

- **4 3** (benar)
- 7 3
- 3 4
- 7 4

**Benar:** p = 7, lalu q = 7 − 4 = 3, lalu p = 7 − 3 = 4. Isinya tertukar memakai penjumlahan!

**Salah:** Telusuri dengan tabel: p menjadi 7, q menjadi 3, lalu p menjadi 4.

### Soal 5/5 · Tulis Kode: Tukar Sepatu

Buat variabel `kiri` berisi **sepatu** dan `kanan` berisi **sandal**. Tukar isi keduanya, lalu tampilkan dengan `print(kiri, kanan)`.

```
sandal sepatu
```

Jawaban:

```python
kiri = "sepatu"
kanan = "sandal"
kiri, kanan = kanan, kiri
print(kiri, kanan)
```

```python
kiri = "sepatu"
kanan = "sandal"
kanan, kiri = kiri, kanan
print(kiri, kanan)
```

```python
kiri = "sepatu"
kanan = "sandal"
sementara = kiri
kiri = kanan
kanan = sementara
print(kiri, kanan)
```

**Benar:** Isinya tertukar dengan benar. Sepatu dan sandal sudah pindah tempat!

**Salah:** Pakai `kiri, kanan = kanan, kiri`, atau simpan dulu isi `kiri` ke variabel sementara sebelum ditimpa.

# Unit 3 · Input Output

## Level 13 · Output yang Rapi

Siswa paham alur input, proses, output dan bisa mengatur tampilan `print()` dengan banyak data, `sep`, dan `end`.

### Materi 1/5: Komputer Bisa Diajak Ngobrol?

*Tampilan: ilustrasi kasir kantin (pesan → hitung → struk), 3 kotak alur Masukan → Proses → Keluaran, maskot `mascot-think`.*

Saat jajan di kantin, kamu **menyebutkan pesanan**. Penjual **menghitung harga**, lalu **memberi tahu totalnya**.

Program juga bekerja seperti itu:

1. **Input (masukan)**: data yang kita berikan, misalnya ketikan di keyboard
2. **Proses**: komputer mengolah data
3. **Output (keluaran)**: hasil yang ditampilkan di layar

**Pertanyaan pemantik:** Coba sebutkan satu contoh input dan output saat kamu memakai HP!

### Materi 2/5: Output: print() Bisa Lebih dari Satu

*Tampilan: kotak kode + Hasilnya, panah kecil menunjuk spasi otomatis, maskot `mascot-laptop`.*

Kamu sudah kenal `print()`. Perintah ini juga bisa menampilkan beberapa data sekaligus. Pisahkan datanya dengan tanda koma:

```python
nama = "Dika"
kelas = 8
print("Halo", nama, "dari kelas", kelas)
```

Hasilnya:

```
Halo Dika dari kelas 8
```

**Tips:** Tanda koma otomatis memberi satu spasi di antara data. Kamu tidak perlu menambah spasi sendiri.

### Materi 3/5: Mengatur Pemisah dengan sep

*Tampilan: kotak kode tanggal dengan pemisah berwarna, maskot `mascot-happy`.*

Spasi otomatis bisa diganti dengan pemisah lain memakai `sep` (singkatan *separator*):

```python
print("08", "11", "2026", sep="-")
print("a", "b", "c", sep="")
```

Hasilnya:

```
08-11-2026
abc
```

`sep=""` artinya tanpa pemisah sama sekali, jadi datanya menempel.

### Materi 4/5: Tetap di Baris yang Sama dengan end

*Tampilan: animasi kursor yang tidak turun baris, maskot `mascot-laptop`.*

Biasanya setiap `print()` berakhir dengan pindah baris. Dengan `end`, kamu bisa mengganti akhirnya:

```python
print("Memuat", end="...")
print("Selesai!")
```

Hasilnya:

```
Memuat...Selesai!
```

Karena `print` pertama diakhiri `"..."` dan tidak pindah baris, `print` kedua melanjutkan di baris yang sama.

### Materi 5/5: Merancang Tampilan Struk

*Tampilan: struk belanja di kertas putih, maskot `mascot-wave`.*

Dengan `print()`, `sep`, dan `end`, kamu bisa membuat tampilan yang rapi:

```python
print("==== STRUK ====")
print("Roti", 5000, sep=" : ")
print("Susu", 7000, sep=" : ")
print("===============")
```

Hasilnya:

```
==== STRUK ====
Roti : 5000
Susu : 7000
===============
```

**Tips:** Rancang dulu tampilan yang kamu inginkan di kertas, baru tulis kodenya baris demi baris.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Output programmu sekarang bisa tampil rapi.

**Kamu sudah belajar :**

- Alur input, proses, output
- Menampilkan banyak data dengan `print()`
- Mengganti pemisah dengan `sep`
- Tetap di baris yang sama dengan `end`

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Fungsi Koma

Apa yang tampil dari `print("Halo", "Algo")`?

- HaloAlgo
- **Halo Algo** (benar)
- Halo, Algo
- "Halo" "Algo"

**Benar:** Koma memisahkan dua data, dan `print` otomatis memberi satu spasi di antaranya.

**Salah:** Koma di dalam `print` tidak ikut tampil. Penggantinya adalah satu spasi.

### Soal 2/5 · Isian Bagian Kosong: Tanggal Pakai Garis Miring

Lengkapi kode agar tampil `04/11/2026`.

```python
print("04", "11", "2026", ___="/")
```

Pilihan chip: `sep` (benar) · `end` · `pisah`

**Benar:** `sep="/"` mengganti spasi di antara data menjadi garis miring.

**Salah:** `end` mengatur akhir baris, bukan pemisah antardata. Untuk pemisah, pakai `sep`.

### Soal 3/5 · Susun Kode: Satu Baris Sapaan

Susun kode agar hasilnya satu baris:

```
Halo, Bima!
```

Tampil acak: `print("!")` · `print("Halo,", end=" ")` · `print("Bima", end="")`

Urutan benar:

```python
print("Halo,", end=" ")
print("Bima", end="")
print("!")
```

**Benar:** Dua `print` pertama tidak pindah baris, jadi semuanya menyambung menjadi satu kalimat.

**Salah:** Urutan `print` sama dengan urutan tulisan di layar. "Halo," dulu, lalu "Bima", lalu tanda seru.

### Soal 4/5 · Tebak Output: Kata yang Menempel

```python
print("Ba", end="")
print("ta")
```

- **Bata** (benar)
- Ba ta
- Ba lalu ta di baris baru
- Error

**Benar:** `end=""` membuat `print` pertama tidak pindah baris dan tanpa spasi, jadi "ta" menempel.

**Salah:** Dengan `end=""`, baris tidak berganti. `print` kedua melanjutkan tepat setelah "Ba".

### Soal 5/5 · Tulis Kode: Hari Kemerdekaan

Tampilkan tanggal kemerdekaan Indonesia dengan tiga data terpisah dan `sep`:

```
17-08-1945
```

Jawaban:

```python
print("17", "08", "1945", sep="-")
```

```python
print(17, "08", 1945, sep="-")
```

**Benar:** Merdeka! Kamu sudah bisa mengatur pemisah output.

**Salah:** Tulis tiga data dipisah koma di dalam `print`, lalu tambahkan `sep="-"` di bagian akhir.

## Level 14 · Meminta Input

Siswa bisa meminta data dari pengguna dengan `input()`, menyimpannya ke variabel, dan memakainya di output.

### Materi 1/5: Input: Meminta Jawaban dengan input()

*Tampilan: simulasi layar terminal (pertanyaan muncul, kursor berkedip, siswa mengetik), chip "Ingat tiga hal ini!", maskot `mascot-happy`.*

Supaya program bisa bertanya, pakai `input()`:

```python
nama = input("Siapa namamu? ")
print("Halo,", nama)
```

Jika pengguna mengetik **Sari**, layar menampilkan:

```
Siapa namamu? Sari
Halo, Sari
```

**Ingat tiga hal ini!**

- `input()` membuat program **berhenti dan menunggu** pengguna mengetik lalu menekan Enter
- Teks di dalam kurung adalah **pertanyaan** yang ditampilkan
- Jawaban pengguna **disimpan ke variabel** di sebelah kiri

### Materi 2/5: Program yang Menunggu

*Tampilan: jam pasir di samping kursor yang berkedip, maskot `mascot-think`.*

Saat bertemu `input()`, program **berhenti**. Baris berikutnya baru dijalankan setelah pengguna menekan Enter.

```python
print("Program dimulai")
warna = input("Warna favorit? ")
print("Kamu suka", warna)
```

Jika diketik **biru**:

```
Program dimulai
Warna favorit? biru
Kamu suka biru
```

**Tips:** Beri spasi di akhir pertanyaan, misalnya `"Warna favorit? "`, supaya ketikan pengguna tidak menempel dengan tanda tanya.

### Materi 3/5: Bertanya Lebih dari Sekali

*Tampilan: dua kotak pertanyaan bertumpuk, maskot `mascot-laptop`.*

Program bisa bertanya beberapa kali. Setiap jawaban disimpan di variabel yang berbeda:

```python
nama = input("Nama: ")
hobi = input("Hobi: ")
print(nama, "suka", hobi)
```

Jika diketik **Tyas** lalu **menggambar**:

```
Nama: Tyas
Hobi: menggambar
Tyas suka menggambar
```

### Materi 4/5: Hasil input() Selalu Teks

*Tampilan: dua kartu, "5" + "5" = "55" berwarna merah, maskot `mascot-wrong`.*

Apa pun yang diketik, `input()` selalu menyimpannya sebagai **teks**, termasuk angka:

```python
a = input("Angka pertama: ")
b = input("Angka kedua: ")
print(a + b)
```

Jika diketik 5 lalu 5, hasilnya `55`, bukan 10! Kedua teks disambung, bukan dijumlah.

**Awas!** Kalau ingin menghitung hasil `input()`, ubah dulu menjadi angka. Caranya ada di level berikutnya.

### Materi 5/5: Input, Proses, Output dalam Satu Program

*Tampilan: tiga kotak alur dengan kode di dalamnya, maskot `mascot-wave`.*

Sekarang gabungkan semuanya:

```python
kata = input("Ketik satu kata: ")
ulang = kata + kata + kata
print(ulang)
```

Jika diketik **hore**, hasilnya `horehorehore`.

1. **Input**: `input()` meminta kata
2. **Proses**: kata disambung tiga kali
3. **Output**: `print()` menampilkan hasilnya

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Programmu sekarang sudah bisa diajak ngobrol!

**Kamu sudah belajar :**

- Meminta data dengan `input()`
- Program berhenti dan menunggu Enter
- Menyimpan banyak jawaban di variabel berbeda
- Hasil `input()` selalu teks

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Program Bertanya

Perintah apa yang dipakai agar program bisa meminta pengguna mengetik sesuatu?

- `print()`
- **`input()`** (benar)
- `int()`
- `type()`

**Benar:** `input()` membuat program menunggu ketikan dari pengguna.

**Salah:** `print()` untuk menampilkan, `int()` untuk mengubah ke angka. Untuk bertanya, pakai `input()`.

### Soal 2/5 · Isian Bagian Kosong: Tanya Kota

Lengkapi kode agar program menanyakan kota pengguna.

```python
kota = _____("Kamu tinggal di mana? ")
print("Salam untuk warga", kota)
```

Pilihan chip: `input` (benar) · `print` · `int`

**Benar:** `input()` menampilkan pertanyaan lalu menyimpan jawabannya ke `kota`.

**Salah:** Untuk mendapatkan jawaban dari pengguna, pakai `input()`, bukan `print()`.

### Soal 3/5 · Susun Kode: Tanya Hobi

Susun kode agar layar menampilkan ini (pengguna mengetik *membaca*):

```
Halo!
Apa hobimu? membaca
Hobimu: membaca
```

Tampil acak: `print("Hobimu:", hobi)` · `print("Halo!")` · `hobi = input("Apa hobimu? ")`

Urutan benar:

```python
print("Halo!")
hobi = input("Apa hobimu? ")
print("Hobimu:", hobi)
```

**Benar:** Program menyapa, bertanya, lalu menampilkan jawaban. Urut!

**Salah:** Variabel `hobi` baru ada isinya setelah `input()` dijalankan, jadi pertanyaan harus muncul sebelum jawabannya ditampilkan.

### Soal 4/5 · Tebak Output: Lima Tambah Lima

Pengguna mengetik **5** lalu **5**. Apa yang tampil di baris terakhir?

```python
a = input("Angka pertama: ")
b = input("Angka kedua: ")
print(a + b)
```

- 10
- **55** (benar)
- a + b
- Error

**Benar:** Hasil `input()` berupa teks, jadi "5" + "5" disambung menjadi 55.

**Salah:** Tanpa `int()`, ketikan angka tetap dianggap teks. Tanda `+` menyambung teks, bukan menjumlah.

### Soal 5/5 · Tulis Kode: Makanan Favorit

Buat program yang menanyakan **nama** lalu **makanan favorit**, kemudian menampilkan kalimat seperti contoh (pengguna mengetik *Rani* dan *bakso*):

```
Nama: Rani
Makanan favorit: bakso
Rani suka bakso
```

Jawaban:

```python
nama = input("Nama: ")
makanan = input("Makanan favorit: ")
print(nama, "suka", makanan)
```

**Benar:** Programmu sudah bisa mengenal selera makan penggunanya!

**Salah:** Simpan dua jawaban `input()` di dua variabel, lalu tampilkan dengan `print(nama, "suka", makanan)`.

## Level 15 · Input Angka

Siswa bisa mengubah hasil `input()` menjadi angka dengan `int()` dan `float()`, lalu menghitungnya.

### Materi 1/5: Awas! Hasil input() Selalu Teks

*Tampilan: dua kartu bersebelahan, merah "Error" dan hijau "Berhasil", maskot `mascot-wrong` lalu `mascot-correct`.*

Apa pun yang diketik, `input()` selalu menyimpannya sebagai **teks**, termasuk angka. Teks tidak bisa dihitung:

```python
umur = input("Umur kamu: ")
print(umur + 1)   # Error!
```

Solusinya, ubah teks menjadi bilangan bulat dengan `int()`:

```python
umur = int(input("Umur kamu: "))
print(umur + 1)
```

Jika diketik 13, hasilnya `14`.

**Tips:** Ingat bentuknya: `int(input("..."))`. Ada dua kurung tutup di akhir.

### Materi 2/5: Dari Dalam ke Luar

*Tampilan: kotak bersarang dengan panah dari dalam ke luar, maskot `mascot-laptop`.*

Python mengerjakan `int(input("Umur: "))` dari **dalam ke luar**:

1. `input("Umur: ")` berjalan dulu. Misalnya pengguna mengetik 13, hasilnya teks `"13"`.
2. `int("13")` mengubah teks itu menjadi angka `13`.
3. Angka 13 disimpan ke variabel.

Cara panjangnya juga boleh:

```python
teks = input("Umur: ")
umur = int(teks)
```

### Materi 3/5: Angka Desimal dengan float()

*Tampilan: penggaris tinggi badan, maskot `mascot-happy`.*

Untuk angka berkoma seperti tinggi badan atau berat, pakai `float()`:

```python
tinggi = float(input("Tinggi (m): "))
print("Tinggimu", tinggi * 100, "cm")
```

Jika diketik 1.5, hasilnya `Tinggimu 150.0 cm`.

**Awas!** Pengguna juga harus mengetik desimal dengan titik, misalnya 1.5, bukan 1,5.

### Materi 4/5: Kalau yang Diketik Bukan Angka

*Tampilan: layar error merah "ValueError", maskot `mascot-think`.*

Jika program meminta angka dengan `int(input())`, tapi pengguna mengetik **dua belas**, program akan berhenti dengan error **ValueError**. Teks "dua belas" tidak bisa diubah menjadi bilangan.

Hal yang sama terjadi jika diketik 12.5 untuk `int()`. Untuk desimal, pakai `float()`.

**Tips:** Tulis pertanyaan yang jelas, misalnya `"Umur (angka): "`, supaya pengguna tahu harus mengetik angka.

### Materi 5/5: Program Kasir Mini

*Tampilan: struk kasir dengan angka dihitung otomatis, maskot `mascot-laptop`.*

Gabungkan semuanya jadi program kasir mini:

```python
harga = int(input("Harga satu roti: "))
jumlah = int(input("Beli berapa? "))
print("Total bayar:", harga * jumlah)
```

Jika diketik 5000 dan 3, hasilnya `Total bayar: 15000`.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Programmu sekarang bisa menghitung angka dari pengguna.

**Kamu sudah belajar :**

- Mengubah hasil `input()` dengan `int()`
- Membaca kode dari dalam ke luar
- Angka desimal dengan `float()`
- Error jika yang diketik bukan angka

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Kenapa Perlu int()?

Kenapa hasil `input()` perlu dibungkus `int()` sebelum dihitung?

- Agar pertanyaannya tampil
- **Karena hasil `input()` selalu berupa teks** (benar)
- Agar program berjalan lebih cepat
- Karena `input()` hanya menerima angka

**Benar:** `input()` selalu menghasilkan teks, dan teks tidak bisa dihitung. `int()` mengubahnya menjadi angka.

**Salah:** Ketikan apa pun, termasuk angka, disimpan sebagai teks. Itulah sebabnya kita butuh `int()`.

### Soal 2/5 · Isian Bagian Kosong: Jadikan Angka!

Lengkapi kode agar ketikan pengguna bisa dihitung.

```python
angka = ___(input("Masukkan angka: "))
print(angka * 2)
```

Pilihan chip: `int` (benar) · `str` · `print`

**Benar:** `int()` mengubah teks hasil `input()` menjadi bilangan bulat.

**Salah:** Hasil `input()` selalu teks. Agar bisa dihitung, bungkus dengan `int()`.

### Soal 3/5 · Susun Kode: Jam Belajar Seminggu

Susun kode agar hasilnya seperti ini (pengguna mengetik *3*):

```
Berapa jam belajar sehari? 3
Dalam seminggu: 21 jam
```

Tampil acak: `seminggu = jam * 7` · `print("Dalam seminggu:", seminggu, "jam")` · `jam = int(input("Berapa jam belajar sehari? "))`

Urutan benar:

```python
jam = int(input("Berapa jam belajar sehari? "))
seminggu = jam * 7
print("Dalam seminggu:", seminggu, "jam")
```

**Benar:** Input dulu, hitung, lalu tampilkan. Alur input, proses, output!

**Salah:** Jam harus diminta sebelum dikalikan, dan hasilnya baru bisa ditampilkan setelah dihitung.

### Soal 4/5 · Tebak Output: Kasir Kantin

Pengguna mengetik **4** lalu menekan Enter. Apa yang tampil di baris terakhir?

```python
jumlah = int(input("Beli berapa gorengan? "))
print("Bayar:", jumlah * 1000)
```

- **Bayar: 4000** (benar)
- Bayar: jumlah \* 1000
- Bayar: 41000
- 4000

**Benar:** 4 dikali 1000 sama dengan 4000, lalu ditampilkan setelah teks "Bayar:".

**Salah:** Karena sudah diubah dengan `int()`, `jumlah` berisi angka 4 dan bisa dikalikan. Teks "Bayar:" juga ikut tampil.

### Soal 5/5 · Tulis Kode: Luas Kamar

Buat program yang meminta **panjang** dan **lebar** kamar (bilangan bulat), lalu menampilkan luasnya.

Contoh jika diketik 4 dan 3:

```
Panjang: 4
Lebar: 3
Luas: 12
```

Jawaban:

```python
panjang = int(input("Panjang: "))
lebar = int(input("Lebar: "))
print("Luas:", panjang * lebar)
```

```python
panjang = int(input("Panjang: "))
lebar = int(input("Lebar: "))
luas = panjang * lebar
print("Luas:", luas)
```

Diterima juga: nama variabel lain dan teks pertanyaan lain, selama memakai `int(input())` dua kali dan mengalikan keduanya.

**Benar:** Keren! Kamu sudah membuat program yang menerima input, menghitung, dan menampilkan hasil.

**Salah:** Ingat tiga langkahnya: minta panjang dengan `int(input())`, minta lebar dengan cara yang sama, lalu `print` hasil kalinya.

## Level 16 · Operator Hitung

Siswa bisa memakai semua operator hitung Python, termasuk bagi bulat, sisa bagi, dan pangkat, serta memahami urutan operasi.

### Materi 1/5: Komputer Jago Berhitung

*Tampilan: tabel operator berwarna, maskot `mascot-laptop`.*

Python bisa berhitung dengan **operator** berikut:

| Operator | Arti | Contoh | Hasil |
| --- | --- | --- | --- |
| `+` | Tambah | `7 + 3` | `10` |
| `-` | Kurang | `7 - 3` | `4` |
| `*` | Kali | `7 * 3` | `21` |
| `/` | Bagi | `8 / 2` | `4.0` |

Catatan: hasil pembagian `/` selalu berupa desimal, jadi `8 / 2` menghasilkan `4.0`.

### Materi 2/5: Bagi Bulat dan Sisa Bagi

*Tampilan: ilustrasi 17 permen dibagi ke 5 anak, 2 permen tersisa, maskot `mascot-happy`.*

Ada 17 permen untuk 5 anak. Setiap anak dapat berapa, dan sisa berapa?

```python
print(17 // 5)
print(17 % 5)
```

Hasilnya:

```
3
2
```

- `//` (**bagi bulat**): hasil bagi tanpa desimal. Setiap anak dapat 3 permen.
- `%` (**sisa bagi**, dibaca modulo): sisanya. Ada 2 permen tersisa.

### Materi 3/5: Pangkat dengan Bintang Dua

*Tampilan: kubus 2 × 2 × 2, maskot `mascot-laptop`.*

Tanda `**` artinya pangkat:

```python
print(2 ** 3)
print(5 ** 2)
```

Hasilnya:

```
8
25
```

`2 ** 3` sama dengan 2 × 2 × 2 = 8. Pangkat dua cocok untuk menghitung luas persegi: `sisi ** 2`.

### Materi 4/5: Urutan Operasi

*Tampilan: tangga prioritas operator, maskot `mascot-think`.*

Seperti di matematika, Python tidak selalu menghitung dari kiri ke kanan. Urutannya:

1. Tanda kurung `( )`
2. Pangkat `**`
3. Kali dan bagi: `*`, `/`, `//`, `%`
4. Tambah dan kurang: `+`, `-`

```python
print(2 + 3 * 4)
print((2 + 3) * 4)
```

Hasilnya:

```
14
20
```

**Tips:** Kalau ragu, pakai tanda kurung. Kode jadi lebih mudah dibaca dan hasilnya pasti sesuai keinginanmu.

### Materi 5/5: Genap atau Ganjil?

*Tampilan: angka genap berwarna biru dan ganjil berwarna oranye, maskot `mascot-wave`.*

Sisa bagi `%` punya kegunaan istimewa: mengecek **genap atau ganjil**. Bilangan genap selalu bersisa 0 jika dibagi 2.

```python
print(10 % 2)
print(7 % 2)
```

Hasilnya:

```
0
1
```

**Tahukah kamu?** Di unit If Statement, kamu akan memakai `angka % 2 == 0` untuk membuat program yang bisa menentukan genap atau ganjil sendiri.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah menguasai kalkulator Python.

**Kamu sudah belajar :**

- Operator `+ - * /`
- Bagi bulat `//` dan sisa bagi `%`
- Pangkat `**`
- Urutan operasi dan tanda kurung

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Sisa Bagi

Berapa hasil `17 % 5`?

- 3
- **2** (benar)
- 3.4
- 85

**Benar:** 17 dibagi 5 hasilnya 3, sisanya 2. Operator `%` mengambil sisanya.

**Salah:** `%` bukan persen dan bukan hasil bagi. `%` mengambil sisa pembagian: 17 = 5 × 3 + 2.

### Soal 2/5 · Isian Bagian Kosong: Permen Sisa

Ada 20 permen dibagi rata ke 6 anak. Lengkapi kode agar tampil sisa permennya, yaitu `2`.

```python
sisa = 20 ___ 6
print(sisa)
```

Pilihan chip: `%` (benar) · `//` · `/`

**Benar:** `20 % 6` menghasilkan sisa bagi, yaitu 2.

**Salah:** `//` menghasilkan 3 (hasil bagi bulat) dan `/` menghasilkan 3.333... Untuk sisa, pakai `%`.

### Soal 3/5 · Susun Kode: Nilai Rata-Rata

Susun kode agar hasilnya:

```
Rata-rata: 80.0
```

Tampil acak: `rata = total / 3` · `print("Rata-rata:", rata)` · `total = 70 + 80 + 90`

Urutan benar:

```python
total = 70 + 80 + 90
rata = total / 3
print("Rata-rata:", rata)
```

**Benar:** Jumlahkan dulu, bagi 3, lalu tampilkan. Hasil `/` selalu desimal, jadi 80.0.

**Salah:** Rata-rata baru bisa dihitung setelah totalnya ada, dan baru bisa ditampilkan setelah dihitung.

### Soal 4/5 · Tebak Output: Kurung Mengubah Hasil

```python
print(2 + 3 * 4)
print((2 + 3) * 4)
```

- **14 lalu 20** (benar)
- 20 lalu 20
- 14 lalu 14
- 20 lalu 14

**Benar:** Tanpa kurung, perkalian didahulukan: 2 + 12 = 14. Dengan kurung: 5 × 4 = 20.

**Salah:** Kali dikerjakan sebelum tambah, kecuali ada tanda kurung yang mendahulukan penjumlahan.

### Soal 5/5 · Tulis Kode: Menit ke Jam

Buat program yang meminta jumlah **menit** (bilangan bulat), lalu menampilkannya dalam jam dan sisa menit. Contoh jika diketik 135:

```
Menit: 135
2 jam 15 menit
```

Jawaban:

```python
menit = int(input("Menit: "))
print(menit // 60, "jam", menit % 60, "menit")
```

```python
menit = int(input("Menit: "))
jam = menit // 60
sisa = menit % 60
print(jam, "jam", sisa, "menit")
```

**Benar:** Hebat! `//` memberi jumlah jam penuh, `%` memberi sisa menitnya.

**Salah:** Satu jam = 60 menit. Pakai `menit // 60` untuk jam dan `menit % 60` untuk sisa menit.

## Level 17 · f-string: Teks Berisi Data

Siswa bisa menyisipkan isi variabel dan hasil hitungan ke dalam teks memakai f-string, serta membulatkan angka desimal dengan `round()`.

### Materi 1/5: Repot Kalau Banyak Koma

*Tampilan: kotak kode panjang penuh koma dan tanda kutip, maskot `mascot-think`.*

Coba lihat kode ini:

```python
nama = "Rani"
umur = 13
print("Halo", nama + ",", "umurmu", umur, "tahun")
```

Hasilnya `Halo Rani, umurmu 13 tahun`, tapi kodenya penuh koma dan tanda kutip. Mudah salah, sulit dibaca.

**Pertanyaan pemantik:** Bagaimana kalau kita bisa menulis kalimatnya utuh, lalu cukup "menempelkan" isi variabel di tempatnya?

### Materi 2/5: Mengenal f-string

*Tampilan: kalimat dengan kotak kurawal berwarna sebagai tempat isi variabel, maskot `mascot-laptop`.*

**f-string** adalah teks yang diawali huruf `f`. Isi variabel ditulis di dalam kurung kurawal `{ }`:

```python
nama = "Rani"
umur = 13
print(f"Halo {nama}, umurmu {umur} tahun")
```

Hasilnya:

```
Halo Rani, umurmu 13 tahun
```

**Ingat tiga hal ini!**

- Huruf `f` ditulis tepat sebelum tanda kutip pembuka
- Nama variabel ditulis di dalam `{ }`
- Spasi dan tanda baca diatur sendiri, persis seperti yang kamu ketik

### Materi 3/5: Menghitung di Dalam Kurung Kurawal

*Tampilan: kalkulator kecil di dalam kurung kurawal, maskot `mascot-happy`.*

Di dalam `{ }` juga boleh ditulis hitungan. Python menghitungnya dulu, baru menempelkan hasilnya:

```python
a = 3
b = 4
print(f"{a} x {b} = {a * b}")
print(f"Tahun depan umurku {13 + 1}")
```

Hasilnya:

```
3 x 4 = 12
Tahun depan umurku 14
```

**Awas!** Tanpa huruf `f` di depan, kurung kurawal ikut tampil apa adanya: `print("{a}")` menampilkan tulisan `{a}`.

### Materi 4/5: Membulatkan dengan round()

*Tampilan: angka 3.3333 dipotong menjadi 3.33, maskot `mascot-laptop`.*

Hasil pembagian sering punya banyak angka di belakang titik. Rapikan dengan `round()`:

```python
hasil = 10 / 3
print(hasil)
print(round(hasil, 2))
print(round(7.6))
```

Hasilnya:

```
3.3333333333333335
3.33
8
```

`round(angka, 2)` membulatkan menjadi 2 angka di belakang titik. Tanpa angka kedua, hasilnya dibulatkan menjadi bilangan bulat.

### Materi 5/5: f-string Bertemu input()

*Tampilan: layar terminal dengan jawaban pengguna yang langsung masuk ke kalimat, maskot `mascot-wave`.*

Gabungkan dengan `input()` untuk membuat program yang ramah:

```python
nama = input("Nama: ")
nilai = int(input("Nilai: "))
print(f"{nama} mendapat nilai {nilai}, tambah bonus jadi {nilai + 5}")
```

Jika diketik **Dika** dan **80**:

```
Nama: Dika
Nilai: 80
Dika mendapat nilai 80, tambah bonus jadi 85
```

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kalimat dalam programmu sekarang jauh lebih rapi.

**Kamu sudah belajar :**

- Menyisipkan variabel dengan f-string
- Menghitung di dalam kurung kurawal
- Membulatkan angka dengan `round()`
- Memakai f-string bersama `input()`

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Hitung di Kurawal

Apa yang tampil dari `print(f"Skor: {10 + 5}")`?

- Skor: {10 + 5}
- Skor: 10 + 5
- **Skor: 15** (benar)
- Skor: 105

**Benar:** Isi kurung kurawal dihitung dulu, lalu hasilnya ditempelkan ke dalam teks.

**Salah:** Karena ada huruf `f`, isi `{ }` dihitung sebagai angka: 10 + 5 = 15.

### Soal 2/5 · Isian Bagian Kosong: Huruf Ajaib

Lengkapi kode agar tampil `Halo Rani`.

```python
nama = "Rani"
print(___"Halo {nama}")
```

Pilihan chip: `f` (benar) · `s` · `$`

**Benar:** Huruf `f` sebelum tanda kutip membuat `{nama}` diganti dengan isinya.

**Salah:** f-string selalu diawali huruf `f`. Tanpa itu, tulisan `{nama}` tampil apa adanya.

### Soal 3/5 · Susun Kode: Kelas Dika

Susun kode agar hasilnya seperti ini (pengguna mengetik *Dika* dan *8*):

```
Nama: Dika
Kelas: 8
Dika duduk di kelas 8
```

Tampil acak: `print(f"{nama} duduk di kelas {kelas}")` · `kelas = input("Kelas: ")` · `nama = input("Nama: ")`

Urutan benar:

```python
nama = input("Nama: ")
kelas = input("Kelas: ")
print(f"{nama} duduk di kelas {kelas}")
```

**Benar:** Dua jawaban diminta dulu, lalu ditempelkan ke kalimat dengan f-string.

**Salah:** Pertanyaan nama muncul lebih dulu, lalu kelas, dan kalimatnya baru bisa ditampilkan setelah keduanya terisi.

### Soal 4/5 · Tebak Output: Harga Diskon

```python
harga = 10000
diskon = 25
bayar = harga - harga * diskon / 100
print(f"Bayar: {bayar}")
```

- **Bayar: 7500.0** (benar)
- Bayar: 7500
- Bayar: {bayar}
- Bayar: 2500.0

**Benar:** 10000 × 25 / 100 = 2500.0, lalu 10000 − 2500.0 = 7500.0. Ada `/`, jadi hasilnya desimal.

**Salah:** Kali dan bagi dikerjakan sebelum kurang. Pembagian `/` selalu menghasilkan desimal, jadi tampil 7500.0.

### Soal 5/5 · Tulis Kode: Umur Tahun Depan

Buat program yang meminta `nama` (teks) dan `umur` (bilangan bulat), lalu memakai **f-string** untuk menampilkan kalimat seperti contoh. Pakai nama variabel `nama` dan `umur`.

```
Nama: Sari
Umur: 12
Halo Sari, tahun depan kamu 13 tahun
```

Jawaban:

```python
nama = input("Nama: ")
umur = int(input("Umur: "))
print(f"Halo {nama}, tahun depan kamu {umur + 1} tahun")
```

**Benar:** Keren! Kamu menempelkan variabel dan hasil hitungan sekaligus ke dalam kalimat.

**Salah:** Minta umur dengan `int(input())`, lalu tulis `f"Halo {nama}, tahun depan kamu {umur + 1} tahun"` di dalam `print`.

## Level 18 · Proyek Mini: Struk Belanja

Siswa merancang dan menulis program struk belanja yang menggabungkan input, operator hitung, f-string, dan output yang rapi.

### Materi 1/5: Rancang Dulu, Baru Ketik

*Tampilan: kertas rancangan berisi pseudocode di samping laptop, maskot `mascot-think`.*

Programmer tidak langsung mengetik kode. Mereka **merancang** algoritmanya dulu dengan pola input, proses, output:

```pseudo
BACA harga dan jumlah
HITUNG total = harga x jumlah
HITUNG potongan = 10% dari total
HITUNG bayar = total - potongan
TAMPILKAN struk
```

**Pertanyaan pemantik:** Apa saja yang biasanya tertulis di struk belanja minimarket?

### Materi 2/5: Langkah 1: Input

*Tampilan: dua kotak input di layar kasir, maskot `mascot-laptop`.*

Harga dan jumlah barang berupa angka, jadi bungkus `input()` dengan `int()`:

```python
harga = int(input("Harga: "))
jumlah = int(input("Jumlah: "))
```

**Tips:** Tulis pertanyaan yang jelas supaya kasir tahu harus mengetik apa.

### Materi 3/5: Langkah 2: Proses

*Tampilan: kalkulator dengan tombol persen, maskot `mascot-happy`.*

Hitung total, potongan 10%, dan uang yang harus dibayar:

```python
total = harga * jumlah
potongan = total * 10 // 100
bayar = total - potongan
```

Potongan 10% sama dengan total dikali 10 lalu dibagi 100. Pakai `//` supaya hasilnya bilangan bulat tanpa desimal.

### Materi 4/5: Langkah 3: Output yang Rapi

*Tampilan: struk dengan garis pemisah dan titik dua sejajar, maskot `mascot-laptop`.*

Tampilkan hasilnya seperti struk sungguhan dengan garis pemisah dan f-string:

```python
print("=" * 20)
print(f"Total   : {total}")
print(f"Potongan: {potongan}")
print(f"Bayar   : {bayar}")
print("=" * 20)
```

Spasi tambahan setelah kata "Total" dan "Bayar" membuat titik duanya sejajar dan lebih rapi.

### Materi 5/5: Program Lengkap dan Uji Coba

*Tampilan: struk utuh yang keluar dari mesin kasir, maskot `mascot-wave`.*

Gabungkan ketiga langkah. Jika diketik 5000 dan 3:

```
Harga: 5000
Jumlah: 3
====================
Total   : 15000
Potongan: 1500
Bayar   : 13500
====================
```

**Tips:** Uji programmu dengan beberapa angka berbeda, lalu cocokkan dengan hitungan manual. Kalau berbeda, telusuri kodenya seperti di Level 5.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah membuat program kasir pertamamu!

**Kamu sudah belajar :**

- Merancang program dengan input, proses, output
- Menghitung total dan potongan persen
- Menampilkan struk yang rapi
- Menguji program dengan beberapa data

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Langkah Pertama

Apa langkah pertama yang paling baik sebelum menulis program?

- Langsung mengetik kode secepatnya
- **Merancang algoritmanya: input, proses, dan output** (benar)
- Memilih warna tampilan program
- Menyalin kode program lain

**Benar:** Rancangan membuat kamu tahu data apa yang diminta, apa yang dihitung, dan apa yang ditampilkan.

**Salah:** Tanpa rancangan, mudah ada langkah yang terlewat. Susun dulu input, proses, dan output-nya.

### Soal 2/5 · Isian Bagian Kosong: Potongan Bulat

Lengkapi kode agar potongan 10% berupa bilangan bulat tanpa desimal.

```python
total = 25000
potongan = total * 10 ___ 100
print(potongan)
```

Pilihan chip: `//` (benar) · `%` · `**`

**Benar:** `//` membagi dan membuang desimalnya, jadi hasilnya 2500.

**Salah:** `%` mengambil sisa bagi, dan `**` adalah pangkat. Untuk membagi tanpa desimal, pakai `//`.

### Soal 3/5 · Susun Kode: Total Bayar

Susun kode agar hasilnya seperti ini (pengguna mengetik *4000* dan *5*):

```
Harga: 4000
Jumlah: 5
Total bayar: 20000
```

Tampil acak: `print(f"Total bayar: {total}")` · `jumlah = int(input("Jumlah: "))` · `total = harga * jumlah` · `harga = int(input("Harga: "))`

Urutan benar:

```python
harga = int(input("Harga: "))
jumlah = int(input("Jumlah: "))
total = harga * jumlah
print(f"Total bayar: {total}")
```

**Benar:** Input, proses, output, persis seperti rancangan struk.

**Salah:** Harga ditanya lebih dulu, lalu jumlah. Total baru bisa dihitung setelah keduanya ada.

### Soal 4/5 · Tebak Output: Setelah Potongan

```python
total = 25000
potongan = total * 10 // 100
print(f"Bayar {total - potongan}")
```

- **Bayar 22500** (benar)
- Bayar 2500
- Bayar 25000
- Bayar 22500.0

**Benar:** Potongan = 250000 // 100 = 2500, lalu 25000 − 2500 = 22500. Karena memakai `//`, tidak ada desimal.

**Salah:** Hitung potongannya dulu (2500), lalu kurangi dari total di dalam kurung kurawal.

### Soal 5/5 · Tulis Kode: Patungan

Buat program yang meminta `total` harga dan banyaknya `teman` (bilangan bulat), lalu menampilkan bagian per orang (bagi bulat) dan sisanya. Contoh jika diketik 50000 dan 3:

```
Total: 50000
Teman: 3
Per orang: 16666
Sisa: 2
```

Jawaban:

```python
total = int(input("Total: "))
teman = int(input("Teman: "))
print(f"Per orang: {total // teman}")
print(f"Sisa: {total % teman}")
```

```python
total = int(input("Total: "))
teman = int(input("Teman: "))
print("Per orang:", total // teman)
print("Sisa:", total % teman)
```

**Benar:** Mantap! `//` membagi rata dan `%` menunjukkan sisa yang belum terbagi.

**Salah:** Pakai `total // teman` untuk bagian per orang dan `total % teman` untuk sisanya.

# Unit 4 · If Statement

## Level 19 · Komputer Bisa Memilih

Siswa bisa membuat program yang mengambil keputusan dengan `if` dan memakai operator perbandingan.

### Materi 1/5: Setiap Hari Kita Memilih

*Tampilan: ilustrasi jalan bercabang dua (payung vs topi), maskot `mascot-think` di atas pertanyaan pemantik.*

Sebelum berangkat sekolah, kamu melihat ke luar jendela. **Jika hujan, bawa payung.** Kalau tidak, cukup pakai topi.

Keputusan seperti ini punya dua bagian: **kondisi** (hujan atau tidak) dan **aksi** (bawa payung). Program juga bisa memilih aksi berdasarkan kondisi.

**Pertanyaan pemantik:** Sebutkan satu keputusan "jika… maka…" yang kamu buat hari ini!

### Materi 2/5: Bentuk if di Python

*Tampilan: kotak kode dengan penanda warna pada `if`, kondisi, titik dua, dan indentasi; chip "Ingat empat hal ini!", maskot `mascot-laptop`.*

```python
nilai = 80
if nilai >= 75:
    print("Lulus!")
```

Hasilnya: `Lulus!`. Kalau `nilai` diganti 60, tidak ada yang tampil karena kondisinya tidak terpenuhi.

**Ingat empat hal ini!**

- Diawali kata **`if`**
- Diikuti **kondisi**: `nilai >= 75`
- Diakhiri **titik dua** `:`
- Baris aksinya **menjorok ke dalam** 4 spasi (indentasi)

**Awas!** Lupa titik dua atau lupa indentasi akan membuat program error.

### Materi 3/5: Alat Pembanding

*Tampilan: 6 kartu kecil operator dengan contoh benar/salah, maskot `mascot-happy`.*

Kondisi dibuat dengan **operator perbandingan**. Hasilnya selalu `True` (benar) atau `False` (salah).

| Operator | Arti | Contoh | Hasil |
| --- | --- | --- | --- |
| `==` | Sama dengan | `5 == 5` | `True` |
| `!=` | Tidak sama dengan | `5 != 3` | `True` |
| `>` | Lebih besar | `3 > 7` | `False` |
| `<` | Lebih kecil | `3 < 7` | `True` |
| `>=` | Lebih besar atau sama | `7 >= 7` | `True` |
| `<=` | Lebih kecil atau sama | `8 <= 7` | `False` |

**Awas!** `=` untuk menyimpan ke variabel, `==` untuk membandingkan. Jangan tertukar!

### Materi 4/5: Banyak Baris di Dalam if

*Tampilan: kotak kode dengan blok menjorok diberi latar ungu muda, maskot `mascot-laptop`.*

Semua baris yang menjorok di bawah `if` adalah satu **blok**. Blok hanya dijalankan jika kondisinya benar. Baris yang tidak menjorok selalu dijalankan.

```python
nilai = 90
if nilai >= 75:
    print("Lulus!")
    print("Selamat ya!")
print("Program selesai")
```

Hasilnya:

```
Lulus!
Selamat ya!
Program selesai
```

Jika `nilai` diganti 60, yang tampil hanya `Program selesai`.

### Materi 5/5: Membandingkan Teks

*Tampilan: dua kartu teks "Jakarta" dan "jakarta" dengan tanda tidak sama, maskot `mascot-think`.*

Operator `==` juga bisa membandingkan teks. Teks dianggap sama hanya jika **semua hurufnya persis sama**, termasuk huruf besar dan kecil.

```python
kota = input("Ibu kota Indonesia? ")
if kota == "Jakarta":
    print("Benar!")
```

Jika diketik **Jakarta**, tampil `Benar!`. Jika diketik **jakarta** dengan huruf kecil, tidak ada yang tampil.

**Tips:** Untuk teks, pastikan ejaan dan huruf kapitalnya sama dengan yang kamu tulis di dalam kode.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Programmu sekarang sudah bisa mengambil keputusan.

**Kamu sudah belajar :**

- Kondisi dan aksi dalam keputusan sehari-hari
- Menulis `if` dengan titik dua dan indentasi
- Operator perbandingan `== != > < >= <=`
- Blok `if` dan membandingkan teks

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Sama Persis

Tanda apa yang dipakai untuk memeriksa apakah dua nilai **sama**?

- `=`
- **`==`** (benar)
- `!=`
- `>=`

**Benar:** Dua tanda `==` dipakai untuk membandingkan.

**Salah:** Satu `=` untuk menyimpan, `!=` artinya tidak sama. Untuk "sama dengan" pakai `==`.

### Soal 2/5 · Isian Bagian Kosong: Yang Ketinggalan

Lengkapi baris `if` berikut.

```python
skor = 70
if skor > 50___
    print("Hebat!")
```

Pilihan chip: `:` (benar) · `;` · `,`

**Benar:** Baris `if` selalu diakhiri titik dua.

**Salah:** Bukan titik koma atau koma. Baris `if` diakhiri titik dua `:`.

### Soal 3/5 · Susun Kode: Cek Umur KTP

Susun kode agar hasilnya seperti ini (pengguna mengetik *18*):

```
Umur: 18
Boleh membuat KTP
Terima kasih
```

Tampil acak (indentasi sudah tertulis): `print("Terima kasih")` · `     print("Boleh membuat KTP") ` · `if umur >= 17:` · `umur = int(input("Umur: "))`

Urutan benar:

```python
umur = int(input("Umur: "))
if umur >= 17:
    print("Boleh membuat KTP")
print("Terima kasih")
```

**Benar:** Umur diminta dulu, lalu diperiksa. "Terima kasih" tidak menjorok, jadi selalu tampil di akhir.

**Salah:** Kondisi `if` butuh umur yang sudah diminta. Aksi yang menjorok ada tepat di bawah `if`.

### Soal 4/5 · Tebak Output: Huruf Besar Kecil

```python
kata = "Python"
if kata == "python":
    print("Sama")
print("Cek selesai")
```

- Sama
- **Cek selesai** (benar)
- Sama lalu Cek selesai
- Error

**Benar:** "Python" dan "python" berbeda di huruf P, jadi kondisinya salah. Hanya baris di luar `if` yang tampil.

**Salah:** Python membedakan huruf besar dan kecil. Kondisinya salah, sehingga "Sama" tidak tampil.

### Soal 5/5 · Tulis Kode: Angka Besar

Buat program yang meminta sebuah **angka** (bilangan bulat). Jika angkanya lebih dari 100, tampilkan **Angka besar!**

Jawaban:

```python
angka = int(input("Angka: "))
if angka > 100:
    print("Angka besar!")
```

```python
angka = int(input("Angka: "))
if 100 < angka:
    print("Angka besar!")
```

**Benar:** Programmu bisa menilai angka sendiri!

**Salah:** Ubah input dengan `int()`, tulis `if angka > 100:` dengan titik dua, lalu `print` yang menjorok 4 spasi.

## Level 20 · Else dan Elif

Siswa bisa membuat program dengan dua pilihan memakai `else` dan banyak pilihan memakai `elif`, serta memahami pentingnya urutan kondisi.

### Materi 1/5: Kalau Tidak, Pakai else

*Tampilan: diagram dua jalur (Benar → Lulus, Salah → Remedial), kotak kode + Hasilnya, maskot `mascot-wave`.*

`else` artinya "kalau tidak". Bagian ini dijalankan saat kondisi `if` bernilai salah.

```python
nilai = 60
if nilai >= 75:
    print("Lulus!")
else:
    print("Ayo remedial, kamu pasti bisa!")
```

Hasilnya:

```
Ayo remedial, kamu pasti bisa!
```

**Tips:** `else` tidak punya kondisi sendiri dan sejajar dengan `if` (tidak menjorok).

### Materi 2/5: Banyak Pilihan dengan elif

*Tampilan: ilustrasi termometer dengan 3 zona warna, kotak kode + Hasilnya, maskot `mascot-laptop`.*

Kalau pilihannya lebih dari dua, pakai `elif` (singkatan *else if*):

```python
suhu = 30
if suhu > 32:
    print("Panas sekali!")
elif suhu > 25:
    print("Hangat")
else:
    print("Sejuk")
```

Hasilnya: `Hangat`.

Python memeriksa kondisi dari atas ke bawah. Begitu menemukan kondisi yang benar, ia menjalankan aksinya lalu **berhenti memeriksa** sisanya.

### Materi 3/5: Urutan Kondisi Itu Penting

*Tampilan: dua kotak kode, kiri salah urut berlabel merah, kanan benar berlabel hijau, maskot `mascot-think`.*

Lihat program nilai huruf ini. Nilai 95 seharusnya mendapat A:

```python
nilai = 95
if nilai >= 60:
    print("C")
elif nilai >= 90:
    print("A")
```

Hasilnya justru `C`! Kondisi `nilai >= 60` sudah benar lebih dulu, jadi `elif` di bawahnya tidak pernah diperiksa.

**Awas!** Saat memakai `elif` untuk rentang nilai, tulis kondisi yang **paling ketat** di atas: `>= 90` dulu, lalu `>= 75`, lalu `>= 60`.

### Materi 4/5: Genap atau Ganjil?

*Tampilan: dua keranjang "genap" dan "ganjil", maskot `mascot-happy`.*

Ingat sisa bagi `%` dari Level 16? Sekarang pakai di dalam `if`:

```python
angka = int(input("Angka: "))
if angka % 2 == 0:
    print("Genap")
else:
    print("Ganjil")
```

Jika diketik 7, hasilnya `Ganjil`, karena 7 % 2 bernilai 1, bukan 0.

### Materi 5/5: Aturan Menyusun if, elif, else

*Tampilan: diagram tangga satu if, banyak elif, satu else, maskot `mascot-laptop`.*

**Ingat empat hal ini!**

- Selalu dimulai dengan **satu** `if`
- Boleh ada **banyak** `elif` di tengah, atau tidak sama sekali
- Boleh ada **satu** `else` di paling akhir, atau tidak sama sekali
- Dari semua cabang, **hanya satu** yang dijalankan

**Tips:** `else` cocok sebagai "jawaban cadangan" saat tidak ada kondisi yang benar.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Programmu sekarang bisa memilih dari banyak pilihan.

**Kamu sudah belajar :**

- Memakai `else` untuk "kalau tidak"
- Memakai `elif` untuk banyak pilihan
- Urutan kondisi yang benar
- Mengecek genap atau ganjil

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Kapan else Jalan?

Kapan bagian `else` dijalankan?

- Selalu, setiap program berjalan
- **Saat semua kondisi `if` dan `elif` di atasnya salah** (benar)
- Saat kondisi `if` benar
- Hanya jika tidak ada `elif`

**Benar:** `else` adalah cadangan: dijalankan hanya jika tidak ada kondisi di atasnya yang benar.

**Salah:** Jika kondisi `if` atau `elif` ada yang benar, `else` dilewati. `else` hanya untuk saat semuanya salah.

### Soal 2/5 · Isian Bagian Kosong: Nilai B

Lengkapi kode agar nilai 82 menampilkan `B`.

```python
nilai = 82
if nilai >= 90:
    print("A")
____ nilai >= 80:
    print("B")
else:
    print("C")
```

Pilihan chip: `elif` (benar) · `else` · `when`

**Benar:** `elif` menambahkan pilihan baru yang punya kondisi sendiri.

**Salah:** `else` tidak boleh diikuti kondisi, dan `when` bukan perintah Python. Untuk pilihan berkondisi berikutnya, pakai `elif`.

### Soal 3/5 · Susun Kode: Cek Kelulusan

Susun kode agar program menampilkan **Lulus** jika nilai minimal 75, dan **Remedial** jika kurang.

Tampil acak (indentasi sudah tertulis): `else:` · `     print("Lulus") ` · `nilai = int(input("Nilai: "))` · `     print("Remedial") ` · `if nilai >= 75:`

Urutan benar:

```python
nilai = int(input("Nilai: "))
if nilai >= 75:
    print("Lulus")
else:
    print("Remedial")
```

**Benar:** Ambil nilai dulu, periksa kondisinya, lalu pilih aksi yang sesuai.

**Salah:** Nilai harus diminta sebelum diperiksa. Aksi "Lulus" ada di bawah `if`, aksi "Remedial" di bawah `else`.

### Soal 4/5 · Tebak Output: Uang Jajan

```python
uang = 15000
if uang >= 20000:
    print("Beli buku cerita")
elif uang >= 10000:
    print("Beli pensil warna")
else:
    print("Menabung dulu")
```

- Beli buku cerita
- **Beli pensil warna** (benar)
- Menabung dulu
- Beli pensil warna dan Menabung dulu

**Benar:** 15000 tidak mencapai 20000, tapi sudah lebih dari 10000. Begitu satu kondisi benar, sisanya tidak diperiksa.

**Salah:** Periksa dari atas: 15000 >= 20000 salah, 15000 >= 10000 benar. Hanya satu aksi yang dijalankan.

### Soal 5/5 · Tulis Kode: Sapaan Otomatis

Buat program yang meminta **jam** (angka 0–23). Jika jam kurang dari 12, tampilkan **Selamat pagi**. Selain itu, tampilkan **Selamat siang**.

Jawaban:

```python
jam = int(input("Jam berapa sekarang? "))
if jam < 12:
    print("Selamat pagi")
else:
    print("Selamat siang")
```

```python
jam = int(input("Jam berapa sekarang? "))
if jam >= 12:
    print("Selamat siang")
else:
    print("Selamat pagi")
```

Diterima juga: nama variabel atau teks pertanyaan lain.

**Benar:** Programmu sudah bisa menyapa sesuai waktu!

**Salah:** Ubah input jadi angka dengan `int()`, tulis `if` dengan titik dua, lalu aksi yang menjorok 4 spasi, dan `else` untuk pilihan lainnya.

## Level 21 · and, or, not

Siswa bisa menggabungkan beberapa syarat dengan `and` dan `or`, membalik syarat dengan `not`, dan memeriksa rentang nilai.

### Materi 1/5: Dua Syarat Sekaligus

*Tampilan: ilustrasi dua gembok (PR dan makan siang) yang harus terbuka untuk membuka pintu game, maskot `mascot-think`.*

Ibu berkata: "Kamu boleh main game **jika PR sudah selesai dan sudah makan siang**."

Di sini ada **dua syarat**, dan keduanya harus terpenuhi. Kalau baru salah satu, kamu belum boleh main.

Di level ini kamu belajar membuat program yang bisa memeriksa beberapa syarat sekaligus.

**Pertanyaan pemantik:** Kalau ibu bilang "PR selesai **atau** sudah makan", apa bedanya?

### Materi 2/5: and dan or

*Tampilan: dua kartu, kartu `and` (dua lampu harus menyala) dan kartu `or` (cukup satu lampu), kotak kode + Hasilnya, maskot `mascot-laptop`.*

- **`and`** (dan) bernilai benar hanya jika **semua** syarat benar.
- **`or`** (atau) bernilai benar jika **minimal satu** syarat benar.

| Syarat A | Syarat B | A `and` B | A `or` B |
| --- | --- | --- | --- |
| True | True | True | True |
| True | False | False | True |
| False | True | False | True |
| False | False | False | False |

```python
pr_selesai = True
sudah_makan = False
if pr_selesai and sudah_makan:
    print("Boleh main game!")
else:
    print("Selesaikan dulu, ya.")
```

Hasilnya: `Selesaikan dulu, ya.` karena `sudah_makan` masih `False`.

### Materi 3/5: not, Si Pembalik

*Tampilan: ilustrasi saklar lampu dibalik, kotak kode + Hasilnya, maskot `mascot-happy`.*

`not` membalik nilai: `True` jadi `False`, `False` jadi `True`.

```python
hujan = False
if not hujan:
    print("Ayo main bola di lapangan!")
```

Hasilnya: `Ayo main bola di lapangan!` karena "tidak hujan" bernilai benar.

**Tips:** Gabungkan dengan perbandingan untuk memeriksa rentang nilai:

```python
nilai = 85
if nilai >= 0 and nilai <= 100:
    print("Nilai valid")
```

### Materi 4/5: Rentang Nilai Cara Singkat

*Tampilan: garis bilangan 20 sampai 30 diarsir hijau, maskot `mascot-laptop`.*

Memeriksa "antara 20 dan 30" bisa ditulis dengan dua cara yang hasilnya sama:

```python
suhu = 25
if suhu >= 20 and suhu <= 30:
    print("Nyaman")
if 20 <= suhu <= 30:
    print("Tetap nyaman")
```

Hasilnya:

```
Nyaman
Tetap nyaman
```

Cara kedua dibaca seperti di matematika: 20 ≤ suhu ≤ 30. Python mendukung keduanya.

### Materi 5/5: Banyak Syarat dan Tanda Kurung

*Tampilan: loket tiket bioskop dengan papan harga, maskot `mascot-wave`.*

Syarat bisa digabung lebih dari dua. Pakai tanda kurung agar maksudnya jelas:

```python
umur = 65
pelajar = False
if (umur < 12 or umur >= 60) and not pelajar:
    print("Dapat diskon lansia atau anak")
```

Hasilnya: `Dapat diskon lansia atau anak`.

**Awas!** Tanpa tanda kurung, `and` dikerjakan lebih dulu daripada `or`. Gunakan kurung supaya Python menghitung sesuai yang kamu maksud.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Programmu sekarang bisa memeriksa banyak syarat.

**Kamu sudah belajar :**

- `and` dan `or` untuk menggabungkan syarat
- `not` untuk membalik nilai
- Memeriksa rentang nilai dengan dua cara
- Tanda kurung pada syarat yang panjang

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Hasil and

Apa hasil dari `True and False`?

- True
- **False** (benar)
- TrueFalse
- Error

**Benar:** `and` hanya bernilai benar jika kedua sisinya benar.

**Salah:** Ada satu sisi yang `False`, jadi hasil `and` ikut `False`.

### Soal 2/5 · Isian Bagian Kosong: Hari Libur

Lengkapi kode agar "Libur!" tampil di hari Sabtu **maupun** Minggu.

```python
hari = input("Hari apa? ")
if hari == "Sabtu" ___ hari == "Minggu":
    print("Libur!")
```

Pilihan chip: `or` (benar) · `and` · `not`

**Benar:** Cukup salah satu syarat benar, jadi pakai `or`.

**Salah:** Hari tidak mungkin Sabtu **dan** Minggu sekaligus. Karena cukup salah satu, pakai `or`.

### Soal 3/5 · Susun Kode: Nilai Valid

Susun kode agar program menampilkan **Nilai valid** untuk nilai 0 sampai 100, dan **Nilai tidak valid** selain itu.

Tampil acak (indentasi sudah tertulis): `     print("Nilai tidak valid") ` · `if nilai >= 0 and nilai <= 100:` · `else:` · `nilai = int(input("Nilai: "))` · `     print("Nilai valid") `

Urutan benar:

```python
nilai = int(input("Nilai: "))
if nilai >= 0 and nilai <= 100:
    print("Nilai valid")
else:
    print("Nilai tidak valid")
```

**Benar:** Dua syarat digabung dengan `and`, jadi nilai harus memenuhi batas bawah dan batas atas.

**Salah:** Minta nilai dulu, periksa dengan `if ... and ...`, lalu `else` untuk nilai di luar rentang.

### Soal 4/5 · Tebak Output: Tiket Bioskop

```python
umur = 14
punya_tiket = False
if umur >= 13 or punya_tiket:
    print("Boleh masuk")
else:
    print("Tidak boleh masuk")
```

- **Boleh masuk** (benar)
- Tidak boleh masuk
- Boleh masuk dan Tidak boleh masuk
- Error

**Benar:** `umur >= 13` sudah benar, dan dengan `or` satu syarat benar sudah cukup.

**Salah:** Walau `punya_tiket` bernilai `False`, `or` hanya butuh satu syarat yang benar.

### Soal 5/5 · Tulis Kode: Suhu Nyaman

Buat program yang meminta **suhu** (bilangan bulat). Jika suhu antara 20 sampai 30 (termasuk 20 dan 30), tampilkan **Nyaman**. Selain itu, tampilkan **Tidak nyaman**.

Jawaban:

```python
suhu = int(input("Suhu: "))
if suhu >= 20 and suhu <= 30:
    print("Nyaman")
else:
    print("Tidak nyaman")
```

```python
suhu = int(input("Suhu: "))
if 20 <= suhu <= 30:
    print("Nyaman")
else:
    print("Tidak nyaman")
```

**Benar:** Kamu sudah bisa memeriksa rentang nilai dengan dua syarat sekaligus.

**Salah:** Suhu harus memenuhi dua syarat sekaligus: `suhu >= 20` **dan** `suhu <= 30`. Gabungkan dengan `and`.

## Level 22 · If Bersarang & match-case

Siswa bisa menulis `if` di dalam `if`, memakai `match-case` (versi *switch* di Python), dan memilih antara `if` dan `match`. Catatan teknis: `match-case` butuh Python 3.10 ke atas.

### Materi 1/5: if di Dalam if

*Tampilan: dua pintu berurutan, pintu kedua hanya terlihat setelah pintu pertama terbuka, maskot `mascot-think`.*

Kadang keputusan kedua baru diperiksa setelah keputusan pertama terpenuhi. Contohnya di perpustakaan:

```python
umur = 15
punya_kartu = True
if umur >= 13:
    if punya_kartu:
        print("Boleh pinjam buku")
    else:
        print("Buat kartu dulu")
else:
    print("Ajak orang tua")
```

Hasilnya: `Boleh pinjam buku`.

`if` yang berada di dalam blok `if` lain disebut **if bersarang**.

### Materi 2/5: Membaca Indentasi Bersarang

*Tampilan: kode bersarang dengan garis vertikal penanda tiap tingkat indentasi, maskot `mascot-laptop`.*

Pada if bersarang, indentasi bertingkat: 4 spasi untuk blok pertama, 8 spasi untuk blok di dalamnya.

**Ingat tiga hal ini!**

- `else` selalu berpasangan dengan `if` yang **sejajar** dengannya
- Blok dalam (8 spasi) hanya diperiksa jika kondisi luar (4 spasi) benar
- Baca dari luar ke dalam, seperti membuka pintu satu per satu

**Tips:** Kalau bersarangnya terlalu dalam, coba ganti dengan `and`. Misalnya `if umur >= 13 and punya_kartu:`.

### Materi 3/5: Switch di Python: match-case

*Tampilan: ilustrasi papan jadwal dengan 7 hari, kotak kode + Hasilnya, callout "Tahukah kamu?", maskot `mascot-laptop`.*

Di bahasa pemrograman lain ada perintah **switch** untuk memilih satu dari banyak pilihan. Di Python, namanya **`match-case`**.

```python
hari = "Senin"
match hari:
    case "Sabtu":
        print("Ekskul pramuka")
    case "Minggu":
        print("Libur!")
    case _:
        print("Waktunya sekolah")
```

Hasilnya: `Waktunya sekolah`.

**Ingat tiga hal ini!**

- `match` diikuti variabel yang mau dicocokkan
- Setiap `case` berisi satu pilihan dan aksinya
- `case _` artinya "selain semua pilihan di atas", mirip `else`. Tulis paling bawah.

### Materi 4/5: Pakai if atau match?

*Tampilan: dua kolom perbandingan, contoh menu aplikasi, maskot `mascot-wave`.*

| Pakai `if` | Pakai `match` |
| --- | --- |
| Memeriksa rentang: `nilai >= 75` | Mencocokkan satu nilai dengan pilihan tetap |
| Menggabungkan syarat dengan `and`/`or` | Menu bernomor, nama hari, kode warna |

Contoh `match` untuk menu aplikasi:

```python
menu = int(input("Pilih menu (1-3): "))
match menu:
    case 1:
        print("Mulai belajar")
    case 2:
        print("Lihat skor")
    case 3:
        print("Keluar")
    case _:
        print("Menu tidak ada")
```

Jika diketik 2, hasilnya `Lihat skor`.

### Materi 5/5: Beberapa Pilihan dalam Satu case

*Tampilan: kalender dengan Sabtu dan Minggu diberi warna sama, maskot `mascot-happy`.*

Satu `case` bisa berisi beberapa pilihan sekaligus dengan tanda `|` yang artinya "atau":

```python
hari = "Minggu"
match hari:
    case "Sabtu" | "Minggu":
        print("Akhir pekan!")
    case _:
        print("Hari sekolah")
```

Hasilnya: `Akhir pekan!`.

**Tahukah kamu?** Tanda `|` di dalam `case` bekerja seperti `or` di dalam `if`.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Programmu sekarang bisa membuat keputusan bertingkat dan memilih dari banyak menu.

**Kamu sudah belajar :**

- `if` di dalam `if` dan indentasi bertingkat
- `match-case` sebagai switch di Python
- Memilih antara `if` dan `match`
- Beberapa pilihan dalam satu `case`

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Arti case _

Apa arti `case _` di dalam `match`?

- Pilihan yang berisi garis bawah
- Pilihan pertama yang selalu diperiksa
- **Semua nilai yang tidak cocok dengan `case` di atasnya** (benar)
- Tanda untuk menghentikan program

**Benar:** `case _` menangkap semua sisa nilai, mirip `else` di `if`.

**Salah:** Garis bawah di `case _` artinya "apa saja". Karena itu `case _` ditulis paling bawah sebagai cadangan.

### Soal 2/5 · Isian Bagian Kosong: Lampu Lalu Lintas

Lengkapi kode berikut.

```python
warna = "merah"
match warna:
    ____ "merah":
        print("Berhenti")
    case _:
        print("Hati-hati")
```

Pilihan chip: `case` (benar) · `if` · `when`

**Benar:** Setiap pilihan di dalam `match` diawali kata `case`.

**Salah:** Di dalam `match`, setiap pilihan ditulis dengan `case`, bukan `if`.

### Soal 3/5 · Susun Kode: Nilai Huruf

Susun kode agar program menampilkan **Istimewa** jika nilai huruf A, dan **Tetap semangat** untuk huruf lain.

Tampil acak (indentasi sudah tertulis): `     case _: ` · `match huruf:` · `         print("Istimewa") ` · `huruf = input("Nilai huruf: ")` · `         print("Tetap semangat") ` · `     case "A": `

Urutan benar:

```python
huruf = input("Nilai huruf: ")
match huruf:
    case "A":
        print("Istimewa")
    case _:
        print("Tetap semangat")
```

**Benar:** Ambil input dulu, cocokkan dengan `match`, dan `case _` ditaruh paling akhir.

**Salah:** `case _` menangkap semua sisa pilihan, jadi harus paling bawah. Kalau di atas, `case "A"` tidak akan pernah dicek.

### Soal 4/5 · Tebak Output: Perpustakaan

```python
umur = 15
punya_kartu = False
if umur >= 13:
    if punya_kartu:
        print("Boleh pinjam buku")
    else:
        print("Buat kartu dulu")
else:
    print("Ajak orang tua")
```

- Boleh pinjam buku
- **Buat kartu dulu** (benar)
- Ajak orang tua
- Tidak ada yang tampil

**Benar:** Umur 15 lolos pemeriksaan luar, lalu `punya_kartu` bernilai `False`, jadi `else` di dalam yang dijalankan.

**Salah:** Periksa dari luar: 15 >= 13 benar, masuk ke dalam. Di dalam, `punya_kartu` salah, jadi tampil "Buat kartu dulu".

### Soal 5/5 · Tulis Kode: Kode Warna

Buat program dengan `match-case`. Minta satu huruf: **m** tampilkan *Merah*, **k** tampilkan *Kuning*, **h** tampilkan *Hijau*, selain itu tampilkan *Warna tidak dikenal*.

Jawaban:

```python
huruf = input("Kode warna: ")
match huruf:
    case "m":
        print("Merah")
    case "k":
        print("Kuning")
    case "h":
        print("Hijau")
    case _:
        print("Warna tidak dikenal")
```

```python
huruf = input("Kode warna: ")
if huruf == "m":
    print("Merah")
elif huruf == "k":
    print("Kuning")
elif huruf == "h":
    print("Hijau")
else:
    print("Warna tidak dikenal")
```

**Benar:** Mantap! Pilihan tetap seperti kode warna paling rapi ditulis dengan `match-case`.

**Salah:** Tulis `match huruf:`, lalu satu `case` untuk setiap huruf, dan `case _` di paling bawah untuk huruf lainnya.

## Level 23 · Memeriksa Input

Siswa bisa membuat program yang memeriksa input sebelum dipakai: angka yang tidak masuk akal, rentang nilai, teks kosong, dan huruf dengan operator `in`.

### Materi 1/5: Pengguna Bisa Salah Ketik

*Tampilan: layar formulir dengan isian umur -5 berwarna merah, maskot `mascot-think`.*

Program tidak bisa memaksa pengguna mengetik dengan benar. Ada yang mengetik umur **-5**, nilai **150**, atau tidak mengetik apa pun lalu menekan Enter.

Program yang baik **memeriksa** input dulu sebelum memakainya. Pemeriksaan ini disebut **validasi**.

**Pertanyaan pemantik:** Pernahkah kamu melihat pesan "Nomor HP tidak valid" saat mendaftar di aplikasi? Itu validasi!

### Materi 2/5: Menolak Angka yang Tidak Masuk Akal

*Tampilan: dua kartu, umur -5 ditolak dan umur 13 diterima, maskot `mascot-laptop`.*

Umur tidak mungkin negatif. Periksa dengan `if`:

```python
umur = int(input("Umur: "))
if umur < 0:
    print("Umur tidak boleh negatif")
else:
    print("Umur kamu", umur)
```

Jika diketik -5, tampil `Umur tidak boleh negatif`. Jika diketik 13, tampil `Umur kamu 13`.

### Materi 3/5: Isian Kosong

*Tampilan: kotak isian nama yang kosong dengan garis merah, maskot `mascot-happy`.*

Jika pengguna langsung menekan Enter, `input()` menghasilkan **teks kosong** `""`. Periksa seperti ini:

```python
nama = input("Nama: ")
if nama == "":
    print("Nama belum diisi")
else:
    print("Halo,", nama)
```

**Tips:** Teks kosong ditulis dengan dua tanda kutip tanpa isi apa pun di antaranya.

### Materi 4/5: Operator in

*Tampilan: huruf "a" yang dicari di dalam kata "aiueo", maskot `mascot-laptop`.*

Operator `in` memeriksa apakah sesuatu **ada di dalam** teks atau daftar. Hasilnya `True` atau `False`:

```python
huruf = input("Huruf: ")
if huruf in "aiueo":
    print("Huruf vokal")
else:
    print("Huruf konsonan")
```

Jika diketik **e**, hasilnya `Huruf vokal`. `in` juga bisa dipakai pada daftar: `"apel" in ["apel", "jeruk"]` bernilai `True`.

### Materi 5/5: Validasi Bertingkat

*Tampilan: tiga pintu berurutan: valid, lulus, remedial, maskot `mascot-wave`.*

Periksa input yang salah **lebih dulu**, baru proses input yang benar:

```python
nilai = int(input("Nilai: "))
if nilai < 0 or nilai > 100:
    print("Nilai tidak valid")
elif nilai >= 75:
    print("Lulus")
else:
    print("Remedial")
```

Jika diketik 150, hasilnya `Nilai tidak valid`. Nilai 80 menghasilkan `Lulus`, dan nilai 60 menghasilkan `Remedial`.

**Awas!** Kalau pemeriksaan `nilai >= 75` ditulis paling atas, nilai 150 akan dianggap lulus. Validasi selalu ditulis lebih dulu.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Programmu sekarang tidak mudah tertipu input yang salah.

**Kamu sudah belajar :**

- Pengertian validasi input
- Menolak angka yang tidak masuk akal
- Memeriksa isian kosong
- Operator `in` dan validasi bertingkat

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Kenapa Validasi?

Kenapa program perlu memeriksa input dari pengguna?

- Agar program berjalan lebih lambat
- **Karena pengguna bisa mengetik data yang salah atau tidak masuk akal** (benar)
- Karena Python mewajibkannya di setiap program
- Agar kodenya terlihat lebih panjang

**Benar:** Validasi menjaga program tetap benar walaupun pengguna salah ketik.

**Salah:** Program tidak bisa memaksa pengguna mengetik dengan benar, jadi programlah yang harus memeriksa.

### Soal 2/5 · Isian Bagian Kosong: Huruf Vokal

Lengkapi kode agar "Vokal" tampil jika huruf yang diketik ada di dalam "aiueo".

```python
huruf = input("Huruf: ")
if huruf ___ "aiueo":
    print("Vokal")
```

Pilihan chip: `in` (benar) · `==` · `and`

**Benar:** `in` memeriksa apakah huruf itu ada di dalam teks "aiueo".

**Salah:** `==` hanya benar jika hurufnya sama persis dengan seluruh teks "aiueo". Untuk "ada di dalam", pakai `in`.

### Soal 3/5 · Susun Kode: Nama Wajib Diisi

Susun kode agar program menampilkan **Nama belum diisi** jika pengguna tidak mengetik apa pun, dan menyapa jika sudah diisi.

Tampil acak (indentasi sudah tertulis): `     print("Halo,", nama) ` · `if nama == "":` · `nama = input("Nama: ")` · `else:` · `     print("Nama belum diisi") `

Urutan benar:

```python
nama = input("Nama: ")
if nama == "":
    print("Nama belum diisi")
else:
    print("Halo,", nama)
```

**Benar:** Isian kosong diperiksa dulu, dan sapaan hanya muncul jika nama sudah diisi.

**Salah:** Minta nama dulu, lalu `if nama == "":` untuk isian kosong, dan `else` untuk menyapa.

### Soal 4/5 · Tebak Output: Nilai Kebesaran

```python
nilai = 120
if nilai < 0 or nilai > 100:
    print("Nilai tidak valid")
elif nilai >= 75:
    print("Lulus")
else:
    print("Remedial")
```

- Lulus
- **Nilai tidak valid** (benar)
- Remedial
- Nilai tidak valid lalu Lulus

**Benar:** 120 lebih dari 100, jadi validasi pertama sudah benar dan cabang lain tidak diperiksa.

**Salah:** Walau 120 juga ≥ 75, Python berhenti di kondisi pertama yang benar, yaitu validasi.

### Soal 5/5 · Tulis Kode: Pesan Tiket

Buat program yang meminta **jumlah tiket** (bilangan bulat). Jika kurang dari 1 atau lebih dari 5, tampilkan **Jumlah tiket harus 1 sampai 5**. Selain itu, tampilkan **Pesanan diterima**.

Jawaban:

```python
tiket = int(input("Jumlah tiket: "))
if tiket < 1 or tiket > 5:
    print("Jumlah tiket harus 1 sampai 5")
else:
    print("Pesanan diterima")
```

```python
tiket = int(input("Jumlah tiket: "))
if tiket >= 1 and tiket <= 5:
    print("Pesanan diterima")
else:
    print("Jumlah tiket harus 1 sampai 5")
```

```python
tiket = int(input("Jumlah tiket: "))
if 1 <= tiket <= 5:
    print("Pesanan diterima")
else:
    print("Jumlah tiket harus 1 sampai 5")
```

**Benar:** Programmu menolak pesanan yang tidak masuk akal!

**Salah:** Gabungkan dua batas dengan `or`: `tiket < 1 or tiket > 5` untuk pesan salah, lalu `else` untuk pesanan diterima.

## Level 24 · Proyek Mini: Kalkulator Pilihan

Siswa menggabungkan input, `match-case`, dan `if` untuk membuat kalkulator sederhana yang aman dari pembagian dengan nol.

### Materi 1/5: Merancang Kalkulator

*Tampilan: kalkulator mainan dengan empat tombol operator, maskot `mascot-think`.*

Kita akan membuat kalkulator yang bisa menambah, mengurangi, mengali, dan membagi. Rancang dulu algoritmanya:

```pseudo
BACA angka1, operator, angka2
JIKA operator = "+" MAKA TAMPILKAN angka1 + angka2
JIKA operator = "-" MAKA TAMPILKAN angka1 - angka2
JIKA operator = "*" MAKA TAMPILKAN angka1 x angka2
JIKA operator = "/" MAKA TAMPILKAN angka1 / angka2
SELAIN ITU TAMPILKAN "Operator tidak dikenal"
```

**Pertanyaan pemantik:** Apa yang terjadi kalau kamu menekan 6 ÷ 0 di kalkulator HP?

### Materi 2/5: Membaca Tiga Input

*Tampilan: tiga kotak input berurutan: angka, operator, angka, maskot `mascot-laptop`.*

Angka dibungkus `int()`, tapi operator tetap berupa teks:

```python
a = int(input("Angka 1: "))
op = input("Operator: ")
b = int(input("Angka 2: "))
```

**Tips:** Jangan bungkus operator dengan `int()`. Tanda `+` atau `*` bukan angka, jadi akan error.

### Materi 3/5: Memilih Operasi dengan match

*Tampilan: papan pilihan operator dengan panah ke hasilnya, maskot `mascot-happy`.*

Operator adalah pilihan tetap, jadi cocok memakai `match-case`:

```python
match op:
    case "+":
        print(a + b)
    case "-":
        print(a - b)
    case "*":
        print(a * b)
    case "/":
        print(a / b)
    case _:
        print("Operator tidak dikenal")
```

Jika diketik 6, `*`, dan 2, hasilnya `12`.

### Materi 4/5: Awas Pembagian dengan Nol

*Tampilan: layar error merah ZeroDivisionError, maskot `mascot-wrong`.*

Angka berapa pun tidak bisa dibagi dengan nol. Jika diketik 6, `/`, dan 0, program berhenti dengan error **ZeroDivisionError**. Cegah dengan `if` di dalam `case`:

```python
match op:
    case "/":
        if b == 0:
            print("Tidak bisa dibagi nol")
        else:
            print(a / b)
```

**Awas!** Validasi seperti ini membuat programmu tidak berhenti tiba-tiba di tengah jalan.

### Materi 5/5: Uji dengan Banyak Input

*Tampilan: tabel uji coba dengan centang hijau, maskot `mascot-wave`.*

Programmer menguji programnya dengan berbagai input, termasuk input yang aneh:

| Input | Hasil yang diharapkan |
| --- | --- |
| 6, +, 2 | 8 |
| 6, /, 2 | 3.0 |
| 6, /, 0 | Tidak bisa dibagi nol |
| 6, %, 2 | Operator tidak dikenal |

**Tips:** Uji juga kasus yang "tidak biasa". Justru di situlah bug paling sering bersembunyi.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah membuat kalkulatormu sendiri!

**Kamu sudah belajar :**

- Merancang kalkulator dengan pseudocode
- Membaca angka dan operator
- Memilih operasi dengan `match-case`
- Mencegah pembagian dengan nol dan menguji program

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Dibagi Nol

Apa yang terjadi jika Python menjalankan `print(6 / 0)`?

- Tampil 0
- Tampil 6
- **Program berhenti dengan error ZeroDivisionError** (benar)
- Tampil tak terhingga

**Benar:** Pembagian dengan nol tidak bisa dihitung, jadi Python menghentikan program dengan error.

**Salah:** Python tidak bisa membagi dengan nol. Karena itu kita perlu memeriksa `b == 0` sebelum membagi.

### Soal 2/5 · Isian Bagian Kosong: Cegah Error

Lengkapi kode agar pesan muncul ketika pembaginya nol.

```python
a = 6
b = 0
if b ___ 0:
    print("Tidak bisa dibagi nol")
else:
    print(a / b)
```

Pilihan chip: `==` (benar) · `=` · `!=`

**Benar:** `b == 0` memeriksa apakah pembaginya nol, sebelum pembagian dijalankan.

**Salah:** Satu `=` untuk menyimpan, dan `!=` artinya tidak sama. Untuk memeriksa sama dengan nol, pakai `==`.

### Soal 3/5 · Susun Kode: Bagi dengan Aman

Susun kode agar hasilnya seperti ini (pengguna mengetik *8* dan *2*):

```
Angka 1: 8
Angka 2: 2
4.0
```

Tampil acak (indentasi sudah tertulis): `else:` · `b = int(input("Angka 2: "))` · `     print(a / b) ` · `if b == 0:` · `a = int(input("Angka 1: "))` · `     print("Tidak bisa dibagi nol") `

Urutan benar:

```python
a = int(input("Angka 1: "))
b = int(input("Angka 2: "))
if b == 0:
    print("Tidak bisa dibagi nol")
else:
    print(a / b)
```

**Benar:** Pembagi diperiksa dulu. Jika bukan nol, pembagian aman dijalankan.

**Salah:** Kedua angka diminta dulu. Pemeriksaan `b == 0` ada di `if`, dan pembagian ada di `else`.

### Soal 4/5 · Tebak Output: Pilih Operasi

```python
a, b = 7, 2
op = "*"
match op:
    case "+":
        print(a + b)
    case "*":
        print(a * b)
    case _:
        print("?")
```

- 9
- **14** (benar)
- ?
- 72

**Benar:** `op` berisi "*", jadi `case "*"` yang cocok: 7 × 2 = 14.

**Salah:** `match` mencari `case` yang cocok dengan isi `op`, yaitu "*". Hasilnya perkalian 7 dan 2.

### Soal 5/5 · Tulis Kode: Kalkulator Tambah Kurang

Buat kalkulator yang meminta angka 1, operator, dan angka 2 (angka berupa bilangan bulat). Jika operator **+** tampilkan hasil tambah, jika **-** tampilkan hasil kurang, selain itu tampilkan **Operator tidak dikenal**. Contoh jika diketik 9, -, dan 4:

```
Angka 1: 9
Operator: -
Angka 2: 4
5
```

Jawaban:

```python
a = int(input("Angka 1: "))
op = input("Operator: ")
b = int(input("Angka 2: "))
match op:
    case "+":
        print(a + b)
    case "-":
        print(a - b)
    case _:
        print("Operator tidak dikenal")
```

```python
a = int(input("Angka 1: "))
op = input("Operator: ")
b = int(input("Angka 2: "))
if op == "+":
    print(a + b)
elif op == "-":
    print(a - b)
else:
    print("Operator tidak dikenal")
```

**Benar:** Kalkulator buatanmu berhasil! Kamu menggabungkan input, pilihan, dan operator.

**Salah:** Minta tiga input (operator tanpa `int()`), lalu pakai `match op:` dengan `case "+"`, `case "-"`, dan `case _`.

# Unit 5 · Perulangan

## Level 25 · For dan range()

Siswa bisa mengulang perintah dengan `for` dan `range()`, membaca nilai penghitung, mengatur awal, akhir, dan lompatan, serta menghitung mundur.

### Materi 1/5: Disuruh Menulis 100 Kali?

*Tampilan: ilustrasi buku tulis penuh kalimat yang sama, tangan lelah, maskot `mascot-wrong` lalu `mascot-think`.*

Bayangkan kamu disuruh menulis "Saya akan mengerjakan PR" sebanyak **100 kali**. Capek dan membosankan, kan?

Komputer tidak pernah capek. Kita cukup menulis perintahnya **sekali**, lalu menyuruh komputer **mengulanginya**. Cara ini disebut **perulangan** atau *loop*.

**Pertanyaan pemantik:** Kegiatan apa yang kamu lakukan berulang-ulang setiap hari?

### Materi 2/5: Bentuk for dan range()

*Tampilan: kotak kode dengan penanda warna, chip "Ingat empat hal ini!", maskot `mascot-laptop`.*

```python
for i in range(3):
    print("Semangat!")
```

Hasilnya:

```
Semangat!
Semangat!
Semangat!
```

**Ingat empat hal ini!**

- Diawali kata **`for`**
- **`i`** adalah variabel penghitung (boleh diberi nama lain)
- **`range(3)`** artinya ulangi 3 kali
- Ada **titik dua** `:` dan baris yang diulang **menjorok** 4 spasi, sama seperti `if`

### Materi 3/5: Mengintip Si Penghitung

*Tampilan: animasi angka di kotak `i` berganti 0→1→2→3→4, kotak Hasilnya, maskot `mascot-happy`.*

Setiap putaran, isi `i` berubah. Coba tampilkan:

```python
for i in range(5):
    print(i)
```

Hasilnya:

```
0
1
2
3
4
```

**Awas!** Python mulai menghitung dari **0**, dan berhenti **sebelum** angka di dalam `range`. Jadi `range(5)` menghasilkan 0 sampai 4, tetap 5 putaran.

### Materi 4/5: Atur Awal, Akhir, dan Lompatan

*Tampilan: garis bilangan dengan lompatan berwarna untuk tiap contoh, maskot `mascot-laptop`.*

`range()` bisa diisi lebih dari satu angka:

| Bentuk | Artinya | Menghasilkan |
| --- | --- | --- |
| `range(5)` | 0 sampai sebelum 5 | 0, 1, 2, 3, 4 |
| `range(1, 6)` | Mulai 1, berhenti sebelum 6 | 1, 2, 3, 4, 5 |
| `range(2, 11, 2)` | Mulai 2, sebelum 11, lompat 2 | 2, 4, 6, 8, 10 |

Contoh naik tangga gedung sekolah:

```python
for lantai in range(1, 4):
    print("Naik ke lantai", lantai)
```

Hasilnya:

```
Naik ke lantai 1
Naik ke lantai 2
Naik ke lantai 3
```

### Materi 5/5: Menghitung Mundur

*Tampilan: papan hitung mundur peluncuran roket, maskot `mascot-wave`.*

Lompatan juga bisa **negatif** untuk menghitung mundur:

```python
for detik in range(5, 0, -1):
    print(detik)
print("Meluncur!")
```

Hasilnya:

```
5
4
3
2
1
Meluncur!
```

`range(5, 0, -1)` mulai dari 5, turun 1 setiap putaran, dan berhenti **sebelum** 0.

**Tips:** Saat menghitung mundur, angka awal harus lebih besar dari angka akhir.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa menyuruh komputer bekerja berulang-ulang tanpa capek.

**Kamu sudah belajar :**

- Kegunaan perulangan
- Menulis `for` dengan `range()`
- Penghitung mulai dari 0
- `range` dengan awal, akhir, dan lompatan
- Menghitung mundur dengan lompatan negatif

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Isi range

Angka apa saja yang dihasilkan `range(1, 4)`?

- 1, 2, 3, 4
- **1, 2, 3** (benar)
- 0, 1, 2, 3
- 4

**Benar:** `range` berhenti sebelum angka terakhir, jadi 4 tidak ikut.

**Salah:** Mulai dari angka pertama (1) dan berhenti sebelum angka kedua (4).

### Soal 2/5 · Isian Bagian Kosong: Ulangi 5 Kali

Lengkapi kode agar tulisan *Halo!* tampil 5 kali.

```python
for i in _____(5):
    print("Halo!")
```

Pilihan chip: `range` (benar) · `print` · `input`

**Benar:** `range(5)` membuat perulangan berjalan 5 kali.

**Salah:** Untuk menentukan berapa kali perulangan berjalan, pakai `range()`.

### Soal 3/5 · Susun Kode: Hitung Lalu Selesai

Susun kode agar hasilnya:

```
Hitung: 1
Hitung: 2
Hitung: 3
Selesai!
```

Tampil acak (indentasi sudah tertulis): `print("Selesai!")` · `     print("Hitung:", i) ` · `for i in range(1, 4):`

Urutan benar:

```python
for i in range(1, 4):
    print("Hitung:", i)
print("Selesai!")
```

**Benar:** Baris yang menjorok diulang, baris yang tidak menjorok dijalankan sekali setelah perulangan selesai.

**Salah:** `for` harus di atas baris yang diulang. "Selesai!" tidak menjorok, jadi berada di luar perulangan dan muncul paling akhir.

### Soal 4/5 · Tebak Output: Lompat Mundur

```python
for i in range(10, 0, -3):
    print(i)
```

- **10, 7, 4, 1 (masing-masing di baris baru)** (benar)
- 10, 7, 4
- 10, 7, 4, 1, -2
- 1, 4, 7, 10

**Benar:** Mulai 10, turun 3 setiap putaran: 10, 7, 4, 1. Angka berikutnya, -2, sudah melewati batas 0.

**Salah:** Lompatan -3 membuat angka turun: 10 → 7 → 4 → 1. Perulangan berhenti sebelum melewati 0.

### Soal 5/5 · Tulis Kode: Kelipatan 5

Buat program yang menampilkan bilangan kelipatan 5 dari **5 sampai 50**, satu angka per baris.

Jawaban:

```python
for i in range(5, 51, 5):
    print(i)
```

Diterima juga:

```python
for i in range(1, 11):
    print(5 * i)
```

```python
for i in range(1, 11):
    print(i * 5)
```

**Benar:** Hebat! Satu baris perulangan bisa menggantikan 10 baris `print`.

**Salah:** Pakai `range` dengan tiga angka: mulai 5, berhenti sebelum 51, lompat 5. Jangan lupa titik dua dan indentasi.

## Level 26 · For dengan Daftar & Total

Siswa bisa mengulang isi daftar, menjumlahkan dan menghitung dengan perulangan, menggabungkan `for` dengan `if`, serta memakai `len()` dan `sum()`.

### Materi 1/5: Mengulang Isi Daftar

*Tampilan: ilustrasi keranjang berisi 3 buah, kotak kode + Hasilnya, maskot `mascot-wave`.*

Selain angka, `for` bisa mengambil isi sebuah **daftar** (*list*) satu per satu. Daftar ditulis di dalam kurung siku `[ ]`, setiap isi dipisah koma.

```python
buah = ["apel", "jeruk", "mangga"]
for b in buah:
    print("Aku suka", b)
```

Hasilnya:

```
Aku suka apel
Aku suka jeruk
Aku suka mangga
```

**Tips:** `for` juga bisa digabung dengan `if` dan variabel dari level sebelumnya. Kamu akan sering memakainya bersama-sama.

### Materi 2/5: Menjumlahkan dengan Perulangan

*Tampilan: celengan yang terisi koin setiap putaran, maskot `mascot-laptop`.*

Untuk menjumlahkan banyak angka, siapkan variabel **total** berisi 0 sebelum perulangan, lalu tambahkan setiap putaran:

```python
total = 0
for harga in [5000, 3000, 2000]:
    total = total + harga
print("Total belanja:", total)
```

Hasilnya: `Total belanja: 10000`.

**Awas!** `total = 0` harus ditulis **di luar** dan **sebelum** perulangan. Kalau ditulis di dalam, total akan kembali menjadi 0 setiap putaran.

### Materi 3/5: Menghitung Banyaknya

*Tampilan: papan penghitung dengan turus, maskot `mascot-happy`.*

Polanya mirip total, tapi yang ditambah selalu 1. Variabel ini disebut **penghitung**:

```python
hitung = 0
for nama in ["Rani", "Dika", "Sari", "Bima"]:
    hitung = hitung + 1
print("Jumlah siswa:", hitung)
```

Hasilnya: `Jumlah siswa: 4`.

### Materi 4/5: for Bertemu if

*Tampilan: saringan yang hanya meloloskan angka genap, maskot `mascot-think`.*

Dengan `if` di dalam `for`, setiap putaran bisa memilih aksinya sendiri. Contoh menampilkan angka genap saja:

```python
for angka in range(1, 7):
    if angka % 2 == 0:
        print(angka, "genap")
```

Hasilnya:

```
2 genap
4 genap
6 genap
```

**Tips:** Perhatikan indentasinya: `if` menjorok 4 spasi di dalam `for`, dan `print` menjorok 8 spasi di dalam `if`.

### Materi 5/5: Jalan Pintas len() dan sum()

*Tampilan: dua tombol ajaib "len" dan "sum" di samping daftar angka, maskot `mascot-laptop`.*

Python punya perintah siap pakai untuk daftar:

```python
nilai = [80, 90, 70]
print(len(nilai))
print(sum(nilai))
print(sum(nilai) / len(nilai))
```

Hasilnya:

```
3
240
80.0
```

- `len()` menghitung banyaknya isi daftar
- `sum()` menjumlahkan semua isi daftar

**Tahukah kamu?** `sum()` dan `len()` bekerja persis seperti pola total dan penghitung yang kamu tulis sendiri tadi.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa mengolah banyak data dengan perulangan.

**Kamu sudah belajar :**

- Mengulang isi daftar dengan `for`
- Pola total dan pola penghitung
- Menggabungkan `for` dengan `if`
- Jalan pintas `len()` dan `sum()`

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Letak total = 0

Pada program penjumlahan dengan perulangan, di mana `total = 0` sebaiknya ditulis?

- Di dalam perulangan, sebagai baris pertama
- **Sebelum perulangan dimulai** (benar)
- Setelah perulangan selesai
- Tidak perlu ditulis

**Benar:** Total disiapkan sekali sebelum perulangan, lalu terus ditambah di setiap putaran.

**Salah:** Kalau di dalam perulangan, total kembali ke 0 setiap putaran. Kalau tidak ditulis, Python tidak tahu nilai awalnya.

### Soal 2/5 · Isian Bagian Kosong: Ulangi Daftar Nilai

Lengkapi kode agar setiap nilai di daftar tampil satu per satu.

```python
nilai = [80, 90, 70]
for n in _____:
    print(n)
```

Pilihan chip: `nilai` (benar) · `n` · `range`

**Benar:** `for n in nilai:` mengambil isi daftar `nilai` satu per satu ke dalam `n`.

**Salah:** Setelah `in`, tulis daftar yang mau diulang, yaitu `nilai`. `n` adalah penampung setiap isinya.

### Soal 3/5 · Susun Kode: Hitung yang Lulus

Susun kode agar hasilnya:

```
Yang lulus: 2
```

Tampil acak (indentasi sudah tertulis): `         lulus = lulus + 1 ` · `print("Yang lulus:", lulus)` · `lulus = 0` · `     if n >= 75: ` · `for n in [80, 60, 90, 70]:`

Urutan benar:

```python
lulus = 0
for n in [80, 60, 90, 70]:
    if n >= 75:
        lulus = lulus + 1
print("Yang lulus:", lulus)
```

**Benar:** Penghitung disiapkan, setiap nilai diperiksa, dan hanya yang minimal 75 yang dihitung. Ada 2: 80 dan 90.

**Salah:** Siapkan `lulus = 0` sebelum `for`, letakkan `if` di dalam `for`, dan `print` di luar perulangan agar tampil sekali.

### Soal 4/5 · Tebak Output: Celengan Ajaib

```python
total = 0
for i in range(1, 4):
    total = total + i
print(total)
```

- 3
- **6** (benar)
- 10
- 0

**Benar:** Putaran 1: 0 + 1 = 1. Putaran 2: 1 + 2 = 3. Putaran 3: 3 + 3 = 6.

**Salah:** `i` berisi 1, 2, lalu 3, dan setiap putaran ditambahkan ke `total`. Jadi 1 + 2 + 3 = 6.

### Soal 5/5 · Tulis Kode: Jumlah Bilangan Genap

Buat program yang menjumlahkan bilangan genap dari **2 sampai 10** dengan perulangan, lalu menampilkan hasilnya.

```
30
```

Jawaban:

```python
total = 0
for i in range(2, 11, 2):
    total = total + i
print(total)
```

```python
total = 0
for i in range(2, 11, 2):
    total += i
print(total)
```

```python
total = 0
for i in range(1, 11):
    if i % 2 == 0:
        total = total + i
print(total)
```

```python
total = 0
for i in range(1, 11):
    if i % 2 == 0:
        total += i
print(total)
```

**Benar:** 2 + 4 + 6 + 8 + 10 = 30. Pola total kamu sudah tepat!

**Salah:** Siapkan `total = 0`, ulangi bilangan genap dengan `range(2, 11, 2)`, tambahkan ke total, lalu tampilkan di luar perulangan.

## Level 27 · While Loop

Siswa bisa memakai `while`, menghindari perulangan tanpa akhir, dan memilih antara `for` dan `while`.

### Materi 1/5: Sampai Kapan Diulang?

*Tampilan: ilustrasi game dengan 3 ikon hati yang berkurang satu per satu, maskot `mascot-think`.*

Di Level 25, kamu memakai `for` saat **jumlah ulangannya sudah pasti**, misalnya 5 kali.

Tapi ada kalanya kita tidak tahu berapa kali harus mengulang. Contohnya bermain game: kamu terus bermain **selama nyawa masih ada**. Untuk kasus seperti ini, Python punya **`while`**.

**Pertanyaan pemantik:** Sebutkan kegiatan yang kamu ulangi "selama" sesuatu masih terjadi!

### Materi 2/5: Bentuk while

*Tampilan: kotak kode + Hasilnya, ikon hati berkurang tiap baris, chip "Ingat tiga hal ini!", maskot `mascot-laptop`.*

```python
nyawa = 3
while nyawa > 0:
    print("Nyawa tersisa:", nyawa)
    nyawa = nyawa - 1
print("Game over!")
```

Hasilnya:

```
Nyawa tersisa: 3
Nyawa tersisa: 2
Nyawa tersisa: 1
Game over!
```

**Ingat tiga hal ini!**

- `while` diikuti **kondisi**, titik dua, dan baris yang menjorok
- Perulangan berjalan **selama** kondisinya benar
- Di dalam perulangan harus ada yang **mengubah** variabel di kondisi, supaya suatu saat berhenti

### Materi 3/5: Awas! Perulangan Tanpa Akhir

*Tampilan: ilustrasi roda hamster berputar terus, kartu merah "Awas!", maskot `mascot-wrong`.*

Coba lihat kode ini. Apa yang hilang?

```python
nyawa = 3
while nyawa > 0:
    print("Nyawa tersisa:", nyawa)
```

Baris `nyawa = nyawa - 1` tidak ada, jadi `nyawa` selalu 3. Kondisinya selalu benar, dan program **tidak pernah berhenti**. Ini disebut **infinite loop**.

Ingat ciri algoritma yang baik dari Level 2: **memiliki akhir**. Pastikan perulanganmu punya jalan keluar.

**Tips:** Kalau program terlanjur berputar terus di komputer, tekan **Ctrl + C** untuk menghentikannya.

### Materi 4/5: Menabung Sampai Cukup

*Tampilan: celengan yang terisi tiap minggu dengan target harga sepatu, maskot `mascot-happy`.*

`while` cocok saat kita menunggu sampai target tercapai. Berapa minggu menabung 10000 per minggu untuk membeli sepatu seharga 45000?

```python
tabungan = 0
minggu = 0
while tabungan < 45000:
    tabungan = tabungan + 10000
    minggu = minggu + 1
print("Butuh", minggu, "minggu")
```

Hasilnya: `Butuh 5 minggu`.

Setelah 4 minggu, tabungan baru 40000 (belum cukup). Di minggu ke-5, tabungan menjadi 50000 dan perulangan berhenti.

### Materi 5/5: for atau while?

*Tampilan: dua kolom perbandingan dengan ikon, maskot `mascot-wave`.*

| Pakai `for` | Pakai `while` |
| --- | --- |
| Jumlah ulangan sudah pasti | Jumlah ulangan belum pasti |
| Mengulang isi daftar | Mengulang sampai syarat berubah |
| Contoh: tampilkan 1 sampai 10 | Contoh: menabung sampai cukup |

**Tips:** Tanyakan pada dirimu: "Apakah aku tahu berapa kali harus mengulang?" Kalau tahu, pakai `for`. Kalau tidak, pakai `while`.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa mengulang selama syarat masih benar.

**Kamu sudah belajar :**

- Menulis `while` dengan kondisi
- Menghindari perulangan tanpa akhir
- Mengulang sampai target tercapai
- Memilih antara `for` dan `while`

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Pilih Perulangan

Kapan sebaiknya memakai `while` dibandingkan `for`?

- Saat jumlah ulangannya sudah pasti
- **Saat perulangan berjalan selama sebuah syarat masih benar** (benar)
- Saat hanya ingin menampilkan teks sekali
- Saat ingin membuat variabel baru

**Benar:** `while` cocok saat kita tidak tahu pasti berapa kali harus mengulang.

**Salah:** Jika jumlah ulangan sudah pasti, `for` lebih cocok. `while` dipakai "selama" syarat masih benar.

### Soal 2/5 · Isian Bagian Kosong: Isi Ember

Lengkapi kondisi agar yang tampil di akhir adalah `5`.

```python
air = 0
while air ___ 5:
    air = air + 1
print(air)
```

Pilihan chip: `<` (benar) · `<=` · `>`

**Benar:** Perulangan berjalan selama air kurang dari 5, jadi berhenti tepat saat air bernilai 5.

**Salah:** Dengan `<=`, perulangan masih jalan saat air 5 sehingga hasilnya 6. Dengan `>`, perulangan tidak pernah jalan dan hasilnya 0.

### Soal 3/5 · Susun Kode: Hitung Mundur Roket

Susun kode agar hasilnya:

```
3
2
1
Meluncur!
```

Tampil acak (indentasi sudah tertulis): `     hitung = hitung - 1 ` · `print("Meluncur!")` · `hitung = 3` · `     print(hitung) ` · `while hitung > 0:`

Urutan benar:

```python
hitung = 3
while hitung > 0:
    print(hitung)
    hitung = hitung - 1
print("Meluncur!")
```

**Benar:** Tampilkan angkanya dulu, baru dikurangi. Roket siap meluncur!

**Salah:** Kalau dikurangi dulu baru ditampilkan, yang muncul 2, 1, 0. Dan "Meluncur!" harus di luar perulangan.

### Soal 4/5 · Tebak Output: Lipat Ganda

```python
x = 1
while x < 20:
    x = x * 2
print(x)
```

- 16
- **32** (benar)
- 20
- 64

**Benar:** x menjadi 2, 4, 8, 16, lalu 32. Saat x = 32, kondisi `x < 20` salah dan perulangan berhenti.

**Salah:** Saat x = 16, kondisi `16 < 20` masih benar, jadi x dikali 2 sekali lagi menjadi 32.

### Soal 5/5 · Tulis Kode: Target Tabungan

Buat program dengan `while`. Tabungan mulai dari 0 dan bertambah **10000** setiap minggu sampai mencapai minimal **50000**. Tampilkan jumlah minggunya.

```
5
```

Jawaban:

```python
tabungan = 0
minggu = 0
while tabungan < 50000:
    tabungan = tabungan + 10000
    minggu = minggu + 1
print(minggu)
```

```python
minggu = 0
tabungan = 0
while tabungan < 50000:
    tabungan = tabungan + 10000
    minggu = minggu + 1
print(minggu)
```

```python
tabungan = 0
minggu = 0
while tabungan < 50000:
    tabungan += 10000
    minggu += 1
print(minggu)
```

```python
tabungan = 0
minggu = 0
while tabungan < 50000:
    minggu = minggu + 1
    tabungan = tabungan + 10000
print(minggu)
```

**Benar:** Lima minggu menabung, target tercapai!

**Salah:** Siapkan `tabungan = 0` dan `minggu = 0`, ulangi `while tabungan < 50000:`, tambah keduanya di dalam perulangan, lalu tampilkan `minggu` di luar.

## Level 28 · break, continue & do-while

Siswa bisa menghentikan atau melewati putaran dengan `break` dan `continue`, dan membuat pola *do-while* di Python.

### Materi 1/5: break: Berhenti Sekarang Juga

*Tampilan: rambu STOP di tengah lintasan lari, maskot `mascot-think`.*

`break` menghentikan perulangan **saat itu juga**, walaupun putarannya belum habis:

```python
for angka in range(1, 10):
    if angka == 4:
        break
    print(angka)
print("Berhenti di 4")
```

Hasilnya:

```
1
2
3
Berhenti di 4
```

Saat `angka` bernilai 4, `break` dijalankan sehingga perulangan langsung selesai. Program lanjut ke baris setelah perulangan.

### Materi 2/5: continue: Lewati Putaran Ini

*Tampilan: rambu "lewati" di tengah lintasan, pelari melompat, maskot `mascot-happy`.*

`continue` **melewati sisa putaran ini** lalu lanjut ke putaran berikutnya. Perulangannya tidak berhenti:

```python
for angka in range(1, 6):
    if angka == 3:
        continue
    print(angka)
```

Hasilnya:

```
1
2
4
5
```

Angka 3 tidak tampil karena `print` dilewati, tapi 4 dan 5 tetap tampil.

### Materi 3/5: break dan continue Bersama

*Tampilan: ilustrasi lintasan lari dengan rambu "lewati" dan "stop", kotak kode + Hasilnya, maskot `mascot-happy`.*

Dua perintah ini bisa dipakai di `for` maupun `while`:

- **`break`**: hentikan perulangan sekarang juga
- **`continue`**: lewati sisa putaran ini, lanjut ke putaran berikutnya

```python
for angka in range(1, 6):
    if angka == 3:
        continue
    if angka == 5:
        break
    print(angka)
```

Hasilnya:

```
1
2
4
```

Angka 3 dilewati karena `continue`. Saat sampai di 5, perulangan dihentikan oleh `break`, jadi 5 tidak tampil.

### Materi 4/5: Do-While ala Python

*Tampilan: ilustrasi gembok dengan kotak sandi, diagram "jalankan dulu → baru cek", maskot `mascot-laptop`.*

Di bahasa lain ada **do-while**: perintah dijalankan **dulu minimal sekali**, baru kondisinya dicek. Python tidak punya do-while, tapi kita bisa membuatnya dengan `while True` dan `break`:

```python
while True:
    sandi = input("Masukkan sandi: ")
    if sandi == "algogo":
        break
    print("Sandi salah, coba lagi!")
print("Berhasil masuk!")
```

Jika diketik `kucing` lalu `algogo`, hasilnya:

```
Masukkan sandi: kucing
Sandi salah, coba lagi!
Masukkan sandi: algogo
Berhasil masuk!
```

**Cara kerjanya:** `while True` artinya "ulangi terus". Pertanyaan sandi pasti muncul minimal sekali, dan `break` menjadi pintu keluarnya.

### Materi 5/5: Menghitung Percobaan

*Tampilan: papan skor jumlah percobaan di samping kotak sandi, maskot `mascot-wave`.*

Pola do-while bisa digabung dengan penghitung untuk mencatat berapa kali pengguna mencoba:

```python
coba = 0
while True:
    coba = coba + 1
    tebakan = int(input("Tebak angka: "))
    if tebakan == 7:
        break
print("Benar setelah", coba, "kali mencoba")
```

Jika diketik 3, 9, lalu 7, hasil terakhirnya `Benar setelah 3 kali mencoba`.

**Tips:** Pola ini dipakai di banyak aplikasi, misalnya membatasi percobaan login.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah menguasai dua jenis perulangan di Python!

**Kamu sudah belajar :**

- `break` untuk berhenti
- `continue` untuk melewati putaran
- Membuat do-while dengan `while True` dan `break`
- Menghitung jumlah percobaan

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Arti continue

Apa yang terjadi saat `continue` dijalankan di dalam perulangan?

- Perulangan berhenti total
- Program keluar dan selesai
- **Sisa putaran ini dilewati, lalu lanjut ke putaran berikutnya** (benar)
- Putaran yang sama diulang sekali lagi

**Benar:** `continue` hanya melompati sisa putaran saat ini. Perulangannya tetap berjalan.

**Salah:** Yang menghentikan perulangan adalah `break`. `continue` hanya melewati satu putaran.

### Soal 2/5 · Isian Bagian Kosong: Pintu Keluar

Lengkapi kode agar perulangan berhenti saat pengguna mengetik **t**.

```python
while True:
    jawab = input("Lanjut main? (y/t) ")
    if jawab == "t":
        _____
print("Sampai jumpa!")
```

Pilihan chip: `break` (benar) · `continue` · `stop`

**Benar:** `break` menghentikan perulangan, lalu program lanjut ke `print` di bawahnya.

**Salah:** `continue` hanya melewati satu putaran, dan `stop` bukan perintah Python. Untuk keluar, pakai `break`.

### Soal 3/5 · Susun Kode: Menu Berulang

Susun kode do-while agar program terus menampilkan "Ayo lanjut!" sampai pengguna mengetik **t**, lalu menampilkan "Sampai jumpa!".

Tampil acak (indentasi sudah tertulis): `print("Sampai jumpa!")` · `         break ` · `     print("Ayo lanjut!") ` · `while True:` · `     if jawab == "t": ` · `     jawab = input("Lanjut? (y/t) ") `

Urutan benar:

```python
while True:
    jawab = input("Lanjut? (y/t) ")
    if jawab == "t":
        break
    print("Ayo lanjut!")
print("Sampai jumpa!")
```

**Benar:** Jawaban diminta dulu, diperiksa, dan hanya jika bukan "t" program menampilkan "Ayo lanjut!".

**Salah:** Di dalam `while True`, minta jawaban dulu, lalu `if` dengan `break`. "Ayo lanjut!" ada setelah `if`, dan "Sampai jumpa!" di luar perulangan.

### Soal 4/5 · Tebak Output: Jebakan continue

```python
for i in range(1, 8):
    if i % 3 == 0:
        continue
    if i == 6:
        break
    print(i)
```

- 1, 2, 4, 5
- **1, 2, 4, 5, 7** (benar)
- 1, 2, 3, 4, 5
- 1, 2

**Benar:** 3 dan 6 habis dibagi 3, jadi `continue` melewatinya lebih dulu. `break` untuk 6 tidak pernah sempat dijalankan, sehingga 7 tetap tampil.

**Salah:** Periksa urutannya: saat i = 6, `if i % 3 == 0` benar duluan, jadi `continue` dijalankan dan `break` di bawahnya terlewat.

### Soal 5/5 · Tulis Kode: Tebak Angka

Buat program yang terus meminta pengguna menebak angka sampai ia mengetik **7**, lalu tampilkan **Benar!**

Jawaban:

```python
while True:
    tebakan = int(input("Tebak angka: "))
    if tebakan == 7:
        break
print("Benar!")
```

Diterima juga:

```python
tebakan = 0
while tebakan != 7:
    tebakan = int(input("Tebak angka: "))
print("Benar!")
```

**Benar:** Kamu baru saja membuat game tebak angka sederhana!

**Salah:** Pakai `while True` agar pertanyaan diulang terus, lalu `break` saat tebakannya 7. Jangan lupa `int()` karena yang dibandingkan angka.

## Level 29 · Perulangan Bersarang

Siswa bisa menulis perulangan di dalam perulangan, menghitung jumlah putarannya, membuat pola bintang, dan tabel perkalian.

### Materi 1/5: Jam Dinding Punya Dua Jarum

*Tampilan: jam dinding dengan jarum menit berputar penuh setiap jarum jam bergeser, maskot `mascot-think`.*

Lihat jam dinding. Setiap kali jarum jam maju satu angka, jarum menit sudah berputar **satu putaran penuh**.

Perulangan juga bisa seperti itu: ada perulangan **luar** dan perulangan **dalam**. Setiap satu putaran luar, perulangan dalam berjalan sampai selesai. Ini disebut **perulangan bersarang**.

**Pertanyaan pemantik:** Dalam satu hari ada 24 jam, dan setiap jam ada 60 menit. Berapa kali jarum menit berputar dalam sehari?

### Materi 2/5: for di Dalam for

*Tampilan: kotak kode dengan dua tingkat indentasi diberi warna berbeda, maskot `mascot-laptop`.*

```python
for baris in range(1, 3):
    for kolom in range(1, 4):
        print(baris, kolom)
```

Hasilnya:

```
1 1
1 2
1 3
2 1
2 2
2 3
```

Saat `baris` bernilai 1, `kolom` berjalan 1, 2, 3. Setelah itu baru `baris` menjadi 2, dan `kolom` mulai lagi dari 1.

### Materi 3/5: Menghitung Jumlah Putaran

*Tampilan: kisi 3 baris × 4 kolom berisi titik, maskot `mascot-happy`.*

Jumlah putaran perulangan dalam = putaran luar **dikali** putaran dalam:

```python
hitung = 0
for i in range(3):
    for j in range(4):
        hitung = hitung + 1
print(hitung)
```

Hasilnya: `12`, karena 3 × 4 = 12.

**Tips:** Bayangkan kisi kotak: perulangan luar adalah baris, perulangan dalam adalah kolom.

### Materi 4/5: Membuat Pola Bintang

*Tampilan: segitiga bintang yang tumbuh baris demi baris, maskot `mascot-laptop`.*

Ingat mengulang teks dengan `*` dari Level 11? Gabungkan dengan perulangan untuk membuat pola:

```python
for i in range(1, 5):
    print("*" * i)
```

Hasilnya:

```
*
**
***
****
```

Pola yang sama bisa dibuat dengan perulangan bersarang:

```python
for i in range(1, 5):
    for j in range(i):
        print("*", end="")
    print()
```

`print()` kosong di akhir setiap baris membuat baris baru.

### Materi 5/5: Tabel Perkalian

*Tampilan: tabel perkalian 3 × 3 yang terisi satu per satu, maskot `mascot-wave`.*

Perulangan bersarang paling sering dipakai untuk membuat tabel:

```python
for a in range(1, 4):
    for b in range(1, 4):
        print(a * b, end=" ")
    print()
```

Hasilnya:

```
1 2 3
2 4 6
3 6 9
```

**Awas!** Perhatikan letak `print()` kosong. Ia menjorok 4 spasi (di dalam perulangan luar), bukan 8 spasi. Kalau salah tempat, semua angka bisa tampil di baris yang berbeda.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa membuat perulangan bertingkat!

**Kamu sudah belajar :**

- Perulangan luar dan perulangan dalam
- Menghitung jumlah putaran
- Membuat pola bintang
- Membuat tabel perkalian

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Berapa Kali?

Berapa kali tulisan *Hai* tampil?

```python
for i in range(3):
    for j in range(5):
        print("Hai")
```

- 3 kali
- 5 kali
- 8 kali
- **15 kali** (benar)

**Benar:** Setiap 1 putaran luar, perulangan dalam berjalan 5 kali. Jadi 3 × 5 = 15.

**Salah:** Jumlah putaran bersarang dikali, bukan dijumlah: 3 × 5 = 15.

### Soal 2/5 · Isian Bagian Kosong: Pola Pagar

Lengkapi kode agar tampil tiga baris: `#`, lalu `##`, lalu `###`.

```python
for i in range(1, 4):
    print("#" ___ i)
```

Pilihan chip: `*` (benar) · `+` · `**`

**Benar:** `"#" * i` mengulang tanda pagar sebanyak `i` kali.

**Salah:** Teks tidak bisa ditambah dengan angka, dan `**` tidak berlaku untuk teks. Untuk mengulang teks, pakai `*`.

### Soal 3/5 · Susun Kode: Pasangan Angka

Susun kode agar hasilnya:

```
1 1
1 2
2 1
2 2
Selesai
```

Tampil acak (indentasi sudah tertulis): `print("Selesai")` · `         print(i, j) ` · `for i in range(1, 3):` · `     for j in range(1, 3): `

Urutan benar:

```python
for i in range(1, 3):
    for j in range(1, 3):
        print(i, j)
print("Selesai")
```

**Benar:** `for i` di luar, `for j` di dalamnya, dan `print(i, j)` paling dalam. "Selesai" berada di luar semua perulangan.

**Salah:** Angka pertama (i) berganti lebih lambat, jadi `for i` adalah perulangan luar. "Selesai" tidak menjorok sama sekali.

### Soal 4/5 · Tebak Output: Hitung Putaran

```python
hitung = 0
for i in range(4):
    for j in range(3):
        hitung = hitung + 1
print(hitung)
```

- 7
- **12** (benar)
- 3
- 4

**Benar:** Perulangan dalam berjalan 3 kali untuk setiap 4 putaran luar: 4 × 3 = 12.

**Salah:** Jumlahnya dikali, bukan dijumlah. 4 putaran luar × 3 putaran dalam = 12.

### Soal 5/5 · Tulis Kode: Segitiga Bintang

Buat program yang menampilkan segitiga bintang 5 baris:

```
*
**
***
****
*****
```

Jawaban:

```python
for i in range(1, 6):
    print("*" * i)
```

```python
for i in range(1, 6):
    print(i * "*")
```

```python
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()
```

**Benar:** Segitigamu jadi! Perulangan membuat pola apa pun mudah dibuat.

**Salah:** Ulangi `i` dari 1 sampai 5 dengan `range(1, 6)`, lalu tampilkan `"*" * i` di setiap putaran.

## Level 30 · Proyek Mini: Mengolah Data Nilai

Siswa memakai perulangan untuk mencari nilai terbesar dan terkecil, menghitung rata-rata, menghitung yang lulus, dan membuat laporan sederhana.

### Materi 1/5: Data Nilai Satu Kelas

*Tampilan: buku nilai guru berisi deretan angka, maskot `mascot-think`.*

Guru punya daftar nilai ulangan satu kelas. Ia ingin tahu: berapa nilai tertinggi? Terendah? Berapa rata-ratanya? Berapa siswa yang lulus?

Kalau siswanya ada 30, menghitung manual sangat melelahkan. Di proyek ini, kamu membuat program yang menjawab semua pertanyaan itu.

**Pertanyaan pemantik:** Bagaimana caramu mencari nilai tertinggi dari 30 angka tanpa kalkulator?

### Materi 2/5: Mencari Nilai Terbesar

*Tampilan: mahkota yang berpindah ke angka yang lebih besar, maskot `mascot-laptop`.*

Caranya seperti lomba: anggap nilai pertama sebagai juara, lalu bandingkan dengan nilai berikutnya satu per satu. Jika ada yang lebih besar, juaranya diganti:

```python
nilai = [70, 95, 80, 60]
terbesar = nilai[0]
for n in nilai:
    if n > terbesar:
        terbesar = n
print("Terbesar:", terbesar)
```

Hasilnya: `Terbesar: 95`.

**Tips:** `terbesar` diisi `nilai[0]` (data pertama), bukan 0. Dengan begitu, program tetap benar walaupun semua datanya negatif.

### Materi 3/5: Mencari Nilai Terkecil

*Tampilan: mahkota terbalik yang berpindah ke angka yang lebih kecil, maskot `mascot-happy`.*

Untuk terkecil, cukup balik tanda perbandingannya:

```python
nilai = [70, 95, 80, 60]
terkecil = nilai[0]
for n in nilai:
    if n < terkecil:
        terkecil = n
print("Terkecil:", terkecil)
```

Hasilnya: `Terkecil: 60`.

**Tahukah kamu?** Python juga punya jalan pintas `max(nilai)` dan `min(nilai)`. Tapi memahami cara kerjanya membuatmu bisa membuat aturan sendiri, misalnya "nilai terbesar yang masih di bawah 75".

### Materi 4/5: Rata-Rata dan Jumlah yang Lulus

*Tampilan: dua papan skor: rata-rata dan jumlah lulus, maskot `mascot-laptop`.*

Gabungkan pola total (Level 26) dan pola penghitung dengan `if`:

```python
nilai = [70, 95, 80, 60]
total = 0
lulus = 0
for n in nilai:
    total = total + n
    if n >= 75:
        lulus = lulus + 1
print("Rata-rata:", total / len(nilai))
print("Lulus:", lulus)
```

Hasilnya:

```
Rata-rata: 76.25
Lulus: 2
```

### Materi 5/5: Laporan Lengkap

*Tampilan: kartu laporan nilai yang rapi dengan garis pemisah, maskot `mascot-wave`.*

Satu perulangan bisa mengerjakan semuanya sekaligus, lalu hasilnya ditampilkan rapi dengan f-string:

```python
nilai = [70, 95, 80, 60]
total = 0
terbesar = nilai[0]
for n in nilai:
    total = total + n
    if n > terbesar:
        terbesar = n
print("=" * 18)
print(f"Rata-rata: {total / len(nilai)}")
print(f"Terbesar : {terbesar}")
print("=" * 18)
```

Hasilnya:

```
==================
Rata-rata: 76.25
Terbesar : 95
==================
```

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah membuat program pengolah nilai sungguhan!

**Kamu sudah belajar :**

- Mencari nilai terbesar dan terkecil
- Menghitung rata-rata dengan perulangan
- Menghitung data yang memenuhi syarat
- Membuat laporan lengkap dalam satu perulangan

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Juara Pertama

Saat mencari nilai terbesar, kenapa `terbesar` diisi `nilai[0]` di awal?

- Agar perulangan berjalan lebih cepat
- **Agar ada nilai awal pembanding yang diambil dari datanya sendiri** (benar)
- Karena nilai pertama pasti yang terbesar
- Karena Python melarang nilai 0

**Benar:** Data pertama dijadikan juara sementara, lalu dibandingkan dengan data lainnya satu per satu.

**Salah:** Nilai pertama belum tentu terbesar. Ia hanya menjadi pembanding awal yang bisa diganti saat ada yang lebih besar.

### Soal 2/5 · Isian Bagian Kosong: Si Terkecil

Lengkapi kode agar `terkecil` berisi nilai paling kecil.

```python
data = [8, 3, 5]
terkecil = data[0]
for n in data:
    if n ___ terkecil:
        terkecil = n
print(terkecil)
```

Pilihan chip: `<` (benar) · `>` · `==`

**Benar:** Juara diganti setiap kali ada angka yang lebih kecil, jadi hasil akhirnya 3.

**Salah:** Dengan `>`, yang didapat justru nilai terbesar. Untuk terkecil, pakai `<`.

### Soal 3/5 · Susun Kode: Cari yang Terbesar

Susun kode agar hasilnya:

```
Terbesar: 95
```

Tampil acak (indentasi sudah tertulis): `         terbesar = n ` · `terbesar = nilai[0]` · `print("Terbesar:", terbesar)` · `     if n > terbesar: ` · `nilai = [70, 95, 80]` · `for n in nilai:`

Urutan benar:

```python
nilai = [70, 95, 80]
terbesar = nilai[0]
for n in nilai:
    if n > terbesar:
        terbesar = n
print("Terbesar:", terbesar)
```

**Benar:** Data dibuat, juara sementara dipilih, setiap nilai dibandingkan, lalu hasilnya ditampilkan sekali.

**Salah:** `terbesar = nilai[0]` butuh daftar `nilai` yang sudah ada. `if` berada di dalam `for`, dan `print` di luar perulangan.

### Soal 4/5 · Tebak Output: Nilai Terendah

```python
data = [4, 9, 2, 7]
terkecil = data[0]
for n in data:
    if n < terkecil:
        terkecil = n
print(terkecil)
```

- 4
- 9
- **2** (benar)
- 7

**Benar:** Juara sementara berganti dari 4 menjadi 2, dan tidak ada yang lebih kecil dari 2.

**Salah:** Telusuri: mulai 4, lalu 9 tidak lebih kecil, 2 lebih kecil (ganti), 7 tidak lebih kecil. Hasilnya 2.

### Soal 5/5 · Tulis Kode: Hitung Remedial

Buat program yang menghitung berapa nilai dalam daftar **[90, 55, 75, 40, 88]** yang kurang dari 60, lalu menampilkan jumlahnya.

```
2
```

Jawaban:

```python
remedial = 0
for n in [90, 55, 75, 40, 88]:
    if n < 60:
        remedial = remedial + 1
print(remedial)
```

```python
remedial = 0
for n in [90, 55, 75, 40, 88]:
    if n < 60:
        remedial += 1
print(remedial)
```

```python
nilai = [90, 55, 75, 40, 88]
remedial = 0
for n in nilai:
    if n < 60:
        remedial = remedial + 1
print(remedial)
```

```python
nilai = [90, 55, 75, 40, 88]
remedial = 0
for n in nilai:
    if n < 60:
        remedial += 1
print(remedial)
```

**Benar:** Ada 2 nilai di bawah 60, yaitu 55 dan 40. Programmu bisa membantu guru!

**Salah:** Siapkan penghitung `remedial = 0`, periksa setiap nilai dengan `if n < 60:`, tambahkan 1, lalu tampilkan di luar perulangan.

# Unit 6 · Ujian Akhir

## Level 31 · Ujian 1: Algoritma sampai Input Output

Ujian berisi 10 soal dari Unit 1–3 (Level 1–18), tanpa halaman materi. Setiap jenis soal muncul 2 kali. Siswa lulus jika minimal **7 dari 10 soal benar**, lalu mendapat **+100 XP**.

### Layar Pembuka: Ujian Pertama!

*Tampilan: maskot `mascot-wave`, kartu ungu berisi aturan, tombol **Mulai Ujian**.*

Kamu sudah menyelesaikan Unit Pengenalan Algoritma, Variabel, dan Input Output. Saatnya menguji pemahamanmu!

- 10 soal dari Level 1 sampai 18
- Tidak ada halaman materi, jadi andalkan ingatanmu
- Feedback tetap muncul setelah setiap soal
- Jawab benar minimal 7 soal untuk lulus

### Peta Soal

Tim pengembang memakai tabel ini untuk menyarankan level yang perlu siswa ulangi saat belum lulus.

| Soal | Jenis | Materi yang diuji |
| --- | --- | --- |
| 1 | Pilihan ganda | Level 3: Simbol flowchart |
| 2 | Pilihan ganda | Level 8: Tipe data |
| 3 | Isian kosong | Level 16: Sisa bagi |
| 4 | Isian kosong | Level 7, 14: Variabel dan input |
| 5 | Susun langkah | Level 1, 2: Algoritma yang terurut |
| 6 | Susun kode | Level 15, 16: Input desimal dan operator |
| 7 | Tebak output | Level 9: Melacak isi variabel |
| 8 | Tebak output | Level 13: Mengatur sep dan end |
| 9 | Tulis kode | Level 6, 14: Menampilkan teks dan input |
| 10 | Tulis kode | Level 15, 16: Input angka dan menghitung |

### Soal 1/10 · Pilihan Ganda: Simbol Input Output

Simbol flowchart apa yang dipakai untuk **membaca data** atau **menampilkan hasil**?

- Oval
- Persegi panjang
- **Jajar genjang** (benar)
- Belah ketupat

**Benar:** Jajar genjang adalah simbol input/output, misalnya BACA nilai atau TAMPILKAN hasil.

**Salah:** Oval untuk mulai/selesai, persegi panjang untuk proses, belah ketupat untuk keputusan. Input/output memakai jajar genjang.

### Soal 2/10 · Pilihan Ganda: Angka dalam Kutip

Variabel `pi = "3.14"` menyimpan tipe data apa?

- `int` (bilangan bulat)
- `float` (bilangan desimal)
- **`str` (teks)** (benar)
- `bool` (benar/salah)

**Benar:** Walaupun isinya angka, tanda kutip membuatnya menjadi teks.

**Salah:** Perhatikan tanda kutipnya. Apa pun yang diapit kutip adalah teks (`str`).

### Soal 3/10 · Isian Bagian Kosong: Sisa Kelereng

Lengkapi kode agar tampil `Total: 1`.

```python
print("Total:", 10 ___ 3)
```

Pilihan chip: `%` (benar) · `//` · `**`

**Benar:** 10 dibagi 3 hasilnya 3 dengan sisa 1. Operator `%` mengambil sisanya.

**Salah:** `//` menghasilkan 3 dan `**` menghasilkan 1000. Yang menghasilkan 1 adalah sisa bagi `%`.

### Soal 4/10 · Isian Bagian Kosong: Simpan Jawaban

Lengkapi kode agar jawaban pengguna tersimpan di variabel `nama`.

```python
nama ___ input("Nama: ")
print("Halo,", nama)
```

Pilihan chip: `=` (benar) · `==` · `:`

**Benar:** Tanda `=` menyimpan hasil `input()` ke dalam variabel `nama`.

**Salah:** Untuk menyimpan, pakai satu tanda `=`. Tanda `==` untuk membandingkan.

### Soal 5/10 · Susun Kode: Kirim Pesan

Urutkan langkah mengirim pesan ke teman lewat HP.

Tampil acak: Ketik pesan · Tekan tombol kirim · Buka aplikasi pesan · Pilih kontak teman

Urutan benar:

1. Buka aplikasi pesan
2. Pilih kontak teman
3. Ketik pesan
4. Tekan tombol kirim

**Benar:** Langkahmu terurut dan punya akhir yang jelas: pesan terkirim!

**Salah:** Aplikasi harus dibuka dan kontak dipilih dulu sebelum mengetik. Menekan kirim adalah langkah terakhir.

### Soal 6/10 · Susun Kode: Kilometer ke Meter

Susun kode agar hasilnya seperti ini (pengguna mengetik *2.5*):

```
Jarak (km): 2.5
2.5 km = 2500.0 meter
```

Tampil acak: `print(km, "km =", meter, "meter")` · `km = float(input("Jarak (km): "))` · `meter = km * 1000`

Urutan benar:

```python
km = float(input("Jarak (km): "))
meter = km * 1000
print(km, "km =", meter, "meter")
```

**Benar:** Jarak desimal diminta dengan `float()`, dikalikan 1000, lalu ditampilkan.

**Salah:** Ikuti alur input, proses, output: minta jarak, hitung meter, baru tampilkan.

### Soal 7/10 · Tebak Output: Lacak Dua Variabel

```python
a = 5
b = a * 2
a = b - 3
print(a, b)
```

- 5 10
- **7 10** (benar)
- 7 7
- 2 10

**Benar:** b = 5 × 2 = 10, lalu a = 10 − 3 = 7. Yang tampil 7 dan 10.

**Salah:** Lacak baris demi baris. `a` diganti di baris ketiga memakai isi `b` yang sudah 10.

### Soal 8/10 · Tebak Output: Pemisah dan Akhiran

```python
print("Halo", "Algo", sep="-", end="!")
print("Go")
```

- **Halo-Algo!Go** (benar)
- Halo-Algo! Go
- Halo Algo!Go
- Halo-Algo! lalu Go di baris baru

**Benar:** `sep="-"` menyambung dua data dengan tanda minus, dan `end="!"` membuat baris tidak berganti, jadi "Go" menempel.

**Salah:** `end="!"` mengganti pindah baris dengan tanda seru. `print` kedua melanjutkan tepat setelahnya tanpa spasi.

### Soal 9/10 · Tulis Kode: Sambutan

Buat program yang menanyakan nama pengguna, lalu menampilkan dua baris. Contoh jika diketik *Bima*:

```
Siapa namamu? Bima
Halo, Bima
Selamat datang di Algogo!
```

Jawaban:

```python
nama = input("Siapa namamu? ")
print("Halo,", nama)
print("Selamat datang di Algogo!")
```

Diterima juga: nama variabel lain dan kutip tunggal.

**Benar:** Programmu bisa menyapa siapa saja!

**Salah:** Simpan jawaban `input()` ke variabel, lalu tampilkan dengan dua `print`.

### Soal 10/10 · Tulis Kode: Uang Kembalian

Buat program yang meminta **uang** yang dibayarkan dan **harga** barang (bilangan bulat), lalu menampilkan kembaliannya. Contoh jika diketik 20000 dan 13500:

```
Uang: 20000
Harga: 13500
Kembalian: 6500
```

Jawaban:

```python
uang = int(input("Uang: "))
harga = int(input("Harga: "))
print("Kembalian:", uang - harga)
```

```python
uang = int(input("Uang: "))
harga = int(input("Harga: "))
kembalian = uang - harga
print("Kembalian:", kembalian)
```

**Benar:** Kasir mini buatanmu sudah bisa menghitung kembalian!

**Salah:** Minta dua angka dengan `int(input())`, lalu tampilkan selisihnya: uang dikurangi harga.

## Level 32 · Ujian 2: Percabangan & Perulangan

Ujian berisi 10 soal dari Unit 4–5 (Level 19–30), tanpa halaman materi. Setiap jenis soal muncul 2 kali. Siswa lulus jika minimal **7 dari 10 soal benar**, lalu mendapat **+100 XP**.

### Layar Pembuka: Ujian Kedua!

*Tampilan: maskot `mascot-wave`, kartu ungu berisi aturan, tombol **Mulai Ujian**.*

Kamu sudah menguasai If Statement dan Perulangan. Buktikan kemampuanmu!

- 10 soal dari Level 19 sampai 30
- Tidak ada halaman materi, jadi andalkan ingatanmu
- Feedback tetap muncul setelah setiap soal
- Jawab benar minimal 7 soal untuk lulus

### Peta Soal

Tim pengembang memakai tabel ini untuk menyarankan level yang perlu siswa ulangi saat belum lulus.

| Soal | Jenis | Materi yang diuji |
| --- | --- | --- |
| 1 | Pilihan ganda | Level 27, 28: Perulangan tanpa akhir |
| 2 | Pilihan ganda | Level 21: not dan or |
| 3 | Isian kosong | Level 25: range dengan lompatan |
| 4 | Isian kosong | Level 22: case _ |
| 5 | Susun kode | Level 20, 26: for + if-else |
| 6 | Susun kode | Level 28: Do-while |
| 7 | Tebak output | Level 20: elif |
| 8 | Tebak output | Level 21, 28: or + continue |
| 9 | Tulis kode | Level 22: match-case |
| 10 | Tulis kode | Level 26, 27: Menjumlahkan dengan perulangan |

### Soal 1/10 · Pilihan Ganda: Tidak Pernah Berhenti

Perulangan mana yang **tidak akan pernah berhenti**?

- `for i in range(10):`
- **`while True:` tanpa `break` di dalamnya** (benar)
- `while x < 5:` dengan `x = x + 1` di dalamnya
- `for b in buah:`

**Benar:** `while True` selalu benar. Tanpa `break`, tidak ada jalan keluar.

**Salah:** `for` selalu berhenti setelah semua putaran selesai. `while True` butuh `break` sebagai pintu keluar.

### Soal 2/10 · Pilihan Ganda: Balik dan Gabung

Apa hasil dari `not True or False`?

- True
- **False** (benar)
- Error
- None

**Benar:** `not True` menjadi `False`, lalu `False or False` hasilnya `False`.

**Salah:** Kerjakan `not` dulu: `not True` adalah `False`. Kemudian `or` butuh minimal satu `True`, padahal keduanya `False`.

### Soal 3/10 · Isian Bagian Kosong: Bilangan Genap

Lengkapi kode agar tampil 2, 4, 6, 8, 10.

```python
for i in range(2, 11, ___):
    print(i)
```

Pilihan chip: `2` (benar) · `1` · `10`

**Benar:** Angka ketiga di `range` adalah lompatan. Lompat 2 dari angka 2 menghasilkan bilangan genap.

**Salah:** Lompatan 1 akan menampilkan semua angka 2 sampai 10. Supaya genap saja, lompat 2.

### Soal 4/10 · Isian Bagian Kosong: Selain Itu

Lengkapi kode agar pilihan selain 1 menampilkan pesan.

```python
match pilihan:
    case 1:
        print("Main")
    case ___:
        print("Pilihan tidak ada")
```

Pilihan chip: `_` (benar) · `else` · `default`

**Benar:** `case _` menangkap semua nilai yang tidak cocok dengan `case` di atasnya.

**Salah:** Di bahasa lain dipakai `default`, tapi di Python ditulis `case _`.

### Soal 5/10 · Susun Kode: Angka Spesial

Susun kode agar hasilnya:

```
1
2
Tiga!
4
5
```

Tampil acak (indentasi sudah tertulis): `         print(i) ` · `     if i == 3: ` · `for i in range(1, 6):` · `     else: ` · `         print("Tiga!") `

Urutan benar:

```python
for i in range(1, 6):
    if i == 3:
        print("Tiga!")
    else:
        print(i)
```

**Benar:** `if` di dalam `for` membuat setiap putaran bisa memilih aksinya sendiri.

**Salah:** `for` paling luar, `if-else` di dalamnya. Aksi "Tiga!" ada di bawah `if`, `print(i)` di bawah `else`.

### Soal 6/10 · Susun Kode: Brankas Rahasia

Susun kode do-while agar program terus meminta sandi sampai pengguna mengetik **1234**, lalu menampilkan **Terbuka!**

Tampil acak (indentasi sudah tertulis): `print("Terbuka!")` · `         break ` · `while True:` · `     if sandi == "1234": ` · `     sandi = input("Sandi: ") `

Urutan benar:

```python
while True:
    sandi = input("Sandi: ")
    if sandi == "1234":
        break
print("Terbuka!")
```

**Benar:** Sandi selalu ditanya minimal sekali, dan `break` membuka jalan keluar.

**Salah:** Sandi harus diminta dulu sebelum diperiksa. "Terbuka!" ada di luar perulangan, jadi tidak menjorok.

### Soal 7/10 · Tebak Output: Nilai Rapor

```python
skor = 85
if skor >= 90:
    print("A")
elif skor >= 80:
    print("B")
elif skor >= 70:
    print("C")
else:
    print("D")
```

- A
- **B** (benar)
- B dan C
- C

**Benar:** 85 belum mencapai 90, tapi sudah mencapai 80. Setelah itu, kondisi lain tidak diperiksa.

**Salah:** Walau 85 juga ≥ 70, Python berhenti di kondisi pertama yang benar, yaitu `skor >= 80`.

### Soal 8/10 · Tebak Output: Lompati Genap

```python
for i in range(1, 6):
    if i == 2 or i == 4:
        continue
    print(i)
```

- **1, 3, 5 (masing-masing di baris baru)** (benar)
- 2, 4
- 1, 2, 3, 4, 5
- 1

**Benar:** Saat `i` bernilai 2 atau 4, `continue` melewati `print`.

**Salah:** `continue` tidak menghentikan perulangan, hanya melewati putaran 2 dan 4.

### Soal 9/10 · Tulis Kode: Menu Es Krim

Buat program dengan `match-case`. Minta angka pilihan (bilangan bulat): **1** tampilkan *Cokelat*, **2** tampilkan *Vanila*, **3** tampilkan *Stroberi*, selain itu tampilkan *Pilihan tidak ada*.

Jawaban:

```python
pilihan = int(input("Pilih rasa (1-3): "))
match pilihan:
    case 1:
        print("Cokelat")
    case 2:
        print("Vanila")
    case 3:
        print("Stroberi")
    case _:
        print("Pilihan tidak ada")
```

Diterima juga: versi `if`/`elif`/`else` dengan hasil yang sama, karena soal ini menilai logika. Bisa diberi feedback tambahan: "Coba juga pakai `match-case`, ya!"

```python
pilihan = int(input("Pilih rasa (1-3): "))
if pilihan == 1:
    print("Cokelat")
elif pilihan == 2:
    print("Vanila")
elif pilihan == 3:
    print("Stroberi")
else:
    print("Pilihan tidak ada")
```

**Benar:** Mantap! Menu pilihan seperti ini paling rapi ditulis dengan `match-case`.

**Salah:** Ubah input dengan `int()`, tulis satu `case` untuk setiap angka, lalu `case _` di paling bawah.

### Soal 10/10 · Tulis Kode: Jumlah 1 sampai 10

Buat program yang menghitung 1 + 2 + 3 + … + 10, lalu menampilkan hasilnya (**55**).

Jawaban:

```python
total = 0
for i in range(1, 11):
    total = total + i
print(total)
```

Diterima juga: versi `while`, atau `total += i`. Tidak diterima: `print(55)` langsung, karena soal meminta komputer yang menghitung.

```python
total = 0
for i in range(1, 11):
    total += i
print(total)
```

```python
total = 0
i = 1
while i <= 10:
    total = total + i
    i = i + 1
print(total)
```

```python
total = 0
i = 1
while i <= 10:
    total += i
    i += 1
print(total)
```

**Benar:** Selamat, kamu berhasil membuat komputer menjumlahkan sendiri!

**Salah:** Siapkan `total = 0`, ulangi `i` dari 1 sampai 10 dengan `range(1, 11)`, tambahkan `i` ke `total` setiap putaran, lalu tampilkan `total` di luar perulangan.

## Level 33 · Ujian Master Algogo

Ujian berisi 15 soal gabungan dari semua unit (Level 1–30), tanpa halaman materi, dengan soal yang lebih kompleks. Setiap jenis soal muncul 3 kali. Siswa lulus jika minimal **11 dari 15 soal benar** (sekitar 70%), lalu mendapat **+150 XP** dan lencana **Master Algogo**.

### Layar Pembuka: Siap Jadi Master?

*Tampilan: maskot `mascot-wave`, kartu ungu berisi aturan, tombol **Mulai Ujian**.*

Kamu sudah menyelesaikan semua level dan dua ujian. Sekarang saatnya membuktikan kemampuanmu!

- 15 soal dari semua unit
- Tidak ada halaman materi, jadi andalkan ingatanmu
- Feedback tetap muncul setelah setiap soal
- Jawab benar minimal 11 soal untuk lulus

### Peta Soal

Tim pengembang memakai tabel ini untuk menyarankan level yang perlu siswa ulangi saat belum lulus.

| Soal | Jenis | Materi yang diuji |
| --- | --- | --- |
| 1 | Pilihan ganda | Level 2: Ciri algoritma |
| 2 | Pilihan ganda | Level 8: Tipe data |
| 3 | Pilihan ganda | Level 9, 10: Menyambung teks dan angka |
| 4 | Isian kosong | Level 15, 21: Input dan and |
| 5 | Isian kosong | Level 28: break |
| 6 | Isian kosong | Level 9, 26: Total dengan += |
| 7 | Susun kode | Level 14, 15, 16: Variabel, input, operator |
| 8 | Susun kode | Level 20: Urutan elif |
| 9 | Susun kode | Level 15, 25: Input dan for |
| 10 | Tebak output | Level 9: Mengganti isi variabel, operator |
| 11 | Tebak output | Level 26, 27: while + if + total |
| 12 | Tebak output | Level 16, 21: and, or, sisa bagi |
| 13 | Tulis kode | Level 20, 25: for + if-else |
| 14 | Tulis kode | Level 15, 16, 20: Input, rata-rata, if-else |
| 15 | Tulis kode | Level 25, 27: Hitung mundur |

### Soal 1/15 · Pilihan Ganda: Instruksi Kurang Jelas

Instruksi "Buat air minum secukupnya" **paling** kurang memenuhi ciri algoritma yang mana?

- Terurut
- **Jelas** (benar)
- Memiliki akhir
- Sesuai tujuan

**Benar:** Kata "secukupnya" bisa diartikan berbeda oleh tiap orang, jadi instruksinya tidak jelas.

**Salah:** Masalahnya ada di kata "secukupnya". Instruksi yang jelas menyebut ukuran pasti, misalnya 200 ml.

### Soal 2/15 · Pilihan Ganda: Tipe Data

Variabel `tinggi = 1.55` menyimpan tipe data apa?

- `int` (bilangan bulat)
- **`float` (bilangan desimal)** (benar)
- `str` (teks)
- `bool` (benar/salah)

**Benar:** Angka yang memakai titik desimal termasuk `float`.

**Salah:** 1.55 punya koma (ditulis titik), jadi bukan bilangan bulat. Tanpa tanda kutip, jadi bukan teks.

### Soal 3/15 · Pilihan Ganda: Kode yang Error

Kode mana yang akan membuat **error**?

- `print("Nilai:", 90)`
- **`print("Nilai: " + 90)`** (benar)
- `print("Nilai: " + str(90))`
- `print("Nilai:", str(90))`

**Benar:** Teks tidak bisa disambung langsung dengan angka memakai `+`. Angkanya harus diubah dulu dengan `str()`.

**Salah:** Koma boleh memisahkan teks dan angka, dan `str(90)` sudah berupa teks. Yang error adalah teks `+` angka.

### Soal 4/15 · Isian Bagian Kosong: Nilai Valid

Lengkapi kode agar program menampilkan **Lulus** hanya untuk nilai 75 sampai 100.

```python
nilai = int(input("Nilai: "))
if nilai >= 75 ___ nilai <= 100:
    print("Lulus")
```

Pilihan chip: `and` (benar) · `or` · `not`

**Benar:** Kedua syarat harus terpenuhi, jadi pakai `and`.

**Salah:** Dengan `or`, nilai 150 juga akan lulus. Kita butuh kedua syarat benar sekaligus.

### Soal 5/15 · Isian Bagian Kosong: Berhenti di Tiga

Lengkapi kode agar yang tampil hanya 1, 2, dan 3.

```python
for i in range(1, 6):
    if i == 4:
        _____
    print(i)
```

Pilihan chip: `break` (benar) · `continue` · `pass`

**Benar:** Saat i = 4, `break` menghentikan perulangan sebelum 4 sempat ditampilkan.

**Salah:** `continue` hanya melewati 4, jadi 5 tetap tampil. `pass` tidak melakukan apa-apa. Untuk berhenti, pakai `break`.

### Soal 6/15 · Isian Bagian Kosong: Total Belanja

Lengkapi kode agar tampil `10000`.

```python
total = 0
for harga in [5000, 3000, 2000]:
    total ___ harga
print(total)
```

Pilihan chip: `+=` (benar) · `=` · `-=`

**Benar:** `total += harga` menambahkan setiap harga ke total: 5000 + 3000 + 2000 = 10000.

**Salah:** Dengan `=`, total hanya berisi harga terakhir (2000). Dengan `-=`, total malah menjadi negatif.

### Soal 7/15 · Susun Kode: Hitung Umur

Susun kode agar hasilnya seperti ini (pengguna mengetik *Rani* dan *2013*):

```
Nama: Rani
Tahun lahir: 2013
Rani berumur 13 tahun
```

Tampil acak: `umur = 2026 - lahir` · `print(nama, "berumur", umur, "tahun")` · `nama = input("Nama: ")` · `lahir = int(input("Tahun lahir: "))`

Urutan benar:

```python
nama = input("Nama: ")
lahir = int(input("Tahun lahir: "))
umur = 2026 - lahir
print(nama, "berumur", umur, "tahun")
```

**Benar:** Input dulu, hitung, baru tampilkan. Alur input, proses, output!

**Salah:** Umur baru bisa dihitung setelah tahun lahir diketahui, dan pertanyaan nama muncul lebih dulu.

### Soal 8/15 · Susun Kode: Nilai Huruf A, B, C

Susun kode agar nilai minimal 90 mendapat **A**, minimal 75 mendapat **B**, dan sisanya **C**.

Tampil acak (indentasi sudah tertulis): `else:` · `     print("B") ` · `if nilai >= 90:` · `     print("C") ` · `elif nilai >= 75:` · `nilai = int(input("Nilai: "))` · `     print("A") `

Urutan benar:

```python
nilai = int(input("Nilai: "))
if nilai >= 90:
    print("A")
elif nilai >= 75:
    print("B")
else:
    print("C")
```

**Benar:** Kondisi paling ketat (>= 90) diperiksa paling atas, jadi nilai 95 mendapat A, bukan B.

**Salah:** Jika `nilai >= 75` di atas, nilai 95 berhenti di B. Tulis kondisi paling ketat lebih dulu, dan `else` paling akhir.

### Soal 9/15 · Susun Kode: Tabel Perkalian

Susun kode agar hasilnya seperti ini (pengguna mengetik *7*):

```
Angka: 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
Selesai
```

Tampil acak (indentasi sudah tertulis): `print("Selesai")` · `for i in range(1, 4):` · `angka = int(input("Angka: "))` · `     print(angka, "x", i, "=", angka * i) `

Urutan benar:

```python
angka = int(input("Angka: "))
for i in range(1, 4):
    print(angka, "x", i, "=", angka * i)
print("Selesai")
```

**Benar:** Angka diminta sekali, lalu perulangan menampilkan tiga baris perkalian, dan "Selesai" tampil di akhir.

**Salah:** Minta angka sebelum perulangan. Baris perkalian menjorok di dalam `for`, sedangkan "Selesai" di luar.

### Soal 10/15 · Tebak Output: Isi yang Berubah

```python
a = 10
b = 4
a = a - b
print(a * 2)
```

- **12** (benar)
- 16
- 6
- 20

**Benar:** `a` menjadi 10 − 4 = 6, lalu 6 × 2 = 12.

**Salah:** Isi `a` sudah diganti jadi 6 sebelum dikali 2.

### Soal 11/15 · Tebak Output: Total Bilangan Ganjil

```python
total = 0
i = 1
while i <= 4:
    if i % 2 == 1:
        total = total + i
    i = i + 1
print(total)
```

- **4** (benar)
- 10
- 6
- 3

**Benar:** Hanya bilangan ganjil yang dijumlah: 1 + 3 = 4.

**Salah:** `i % 2 == 1` hanya benar untuk bilangan ganjil. Dari 1 sampai 4, yang ganjil hanya 1 dan 3.

### Soal 12/15 · Tebak Output: Syarat Berlapis

```python
x = 7
if x > 5 and x % 2 == 0:
    print("A")
elif x > 5 or x < 0:
    print("B")
else:
    print("C")
```

- A
- **B** (benar)
- C
- A dan B

**Benar:** 7 lebih dari 5 tapi ganjil, jadi syarat `and` salah. Syarat `or` benar karena 7 > 5.

**Salah:** `and` butuh dua syarat benar, padahal 7 % 2 hasilnya 1, bukan 0. Lanjut ke `elif`: `or` cukup satu syarat benar.

### Soal 13/15 · Tulis Kode: Algo atau Angka

Buat program yang menampilkan angka 1 sampai 15, satu per baris. Tetapi untuk angka kelipatan 3, tampilkan **Algo** sebagai pengganti angkanya.

```
1
2
Algo
4
5
Algo
...
```

Jawaban:

```python
for i in range(1, 16):
    if i % 3 == 0:
        print("Algo")
    else:
        print(i)
```

```python
for i in range(1, 16):
    if i % 3 != 0:
        print(i)
    else:
        print("Algo")
```

**Benar:** Keren! Kamu sudah menggabungkan perulangan, sisa bagi, dan percabangan.

**Salah:** Ulangi 1 sampai 15 dengan `range(1, 16)`. Di dalamnya, periksa `i % 3 == 0` untuk menampilkan "Algo", dan `else` untuk menampilkan angkanya.

### Soal 14/15 · Tulis Kode: Rata-Rata Rapor

Buat program yang meminta **3 nilai** (bilangan bulat), menghitung rata-ratanya, lalu menampilkan **Lulus** jika rata-ratanya minimal 75, dan **Belum lulus** jika kurang. Contoh jika diketik 80, 70, dan 90:

```
Nilai 1: 80
Nilai 2: 70
Nilai 3: 90
Lulus
```

Jawaban:

```python
a = int(input("Nilai 1: "))
b = int(input("Nilai 2: "))
c = int(input("Nilai 3: "))
rata = (a + b + c) / 3
if rata >= 75:
    print("Lulus")
else:
    print("Belum lulus")
```

```python
a = int(input("Nilai 1: "))
b = int(input("Nilai 2: "))
c = int(input("Nilai 3: "))
if (a + b + c) / 3 >= 75:
    print("Lulus")
else:
    print("Belum lulus")
```

**Benar:** Programmu bisa menghitung dan menilai rapor sendiri!

**Salah:** Minta tiga nilai dengan `int(input())`, hitung `(a + b + c) / 3` dengan tanda kurung, lalu periksa dengan `if` dan `else`.

### Soal 15/15 · Tulis Kode: Hitung Mundur

Buat program yang meminta angka **awal** (bilangan bulat), lalu menghitung mundur sampai 1, dan terakhir menampilkan **Mulai!** Contoh jika diketik 3:

```
Mulai dari: 3
3
2
1
Mulai!
```

Jawaban:

```python
n = int(input("Mulai dari: "))
while n > 0:
    print(n)
    n = n - 1
print("Mulai!")
```

```python
n = int(input("Mulai dari: "))
while n > 0:
    print(n)
    n -= 1
print("Mulai!")
```

```python
n = int(input("Mulai dari: "))
for i in range(n, 0, -1):
    print(i)
print("Mulai!")
```

**Benar:** Selamat, ini soal terakhir dan kamu berhasil!

**Salah:** Pakai `while n > 0:` lalu tampilkan dan kurangi `n` di dalamnya, atau `for` dengan `range(n, 0, -1)`. "Mulai!" ditulis di luar perulangan.

### Layar Hasil

*Tampilan: skor besar (misalnya 13/15), progress bar hijau, tombol sesuai hasil.*

**Lulus (11–15 benar):** maskot `mascot-celebrate`, judul **Selamat! Kamu Master Algogo!**, kartu lencana **Master Algogo**, **+150 XP**, tombol **Kembali ke Peta**.

**Belum lulus (0–10 benar):** maskot `mascot-happy`, judul **Hampir sampai! Yuk, ulangi sedikit lagi.**, kartu "Coba ulas lagi:" berisi daftar level dari soal yang salah (lihat Peta Soal), tombol **Ulangi Ujian**.

Ujian 1 dan Ujian 2 memakai layar hasil yang sama, dengan batas lulus 7 dari 10 dan hadiah +100 XP, tanpa lencana.
