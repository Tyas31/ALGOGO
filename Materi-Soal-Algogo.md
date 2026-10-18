# Materi & Soal Algogo: Level 1 sampai 8

Oct 18, 2026 · @Dewa

## Cara pakai dokumen ini

Level 1–7 masing-masing berisi 5 halaman materi, 1 layar penutup, lalu 5 soal yang mencakup kelima jenis soal. Level 8 adalah ujian akhir berisi 15 soal gabungan tanpa materi. Formatnya sama dengan layar Ngulik! yang sudah dibuat: progress bar di atas, judul, isi pendek, maskot, lalu tombol di bawah.

**Alur satu level**

1. Halaman materi 1/5 sampai 5/5, tombol **Selanjutnya**. Halaman 1 membuka level dengan cerita sehari-hari dan pertanyaan pemantik.
2. Layar penutup: **Yeay! Materi selesai!**, kartu ringkasan "Kamu sudah belajar :", lalu "Saatnya Uji Kemampuanmu! ^\_^" dan tombol **Mulai Latihan**.
3. Latihan soal 1/5 sampai 5/5, tombol **Cek Jawaban**, lalu kartu feedback dan tombol **Lanjut**.

**Lima jenis soal dan komponen UI-nya**

| Jenis soal | Yang dilakukan siswa | Komponen di design system |
| --- | --- | --- |
| Pilihan ganda | Memilih 1 dari 4 jawaban | AnswerOption (radio) |
| Isian bagian kosong | Mengisi bagian `___` pada kode dengan memilih chip kata | AnswerOption versi chip, kode ditampilkan di atas |
| Susun kode | Mengurutkan baris kode atau langkah yang diacak | StepOption (nomor urut) |
| Tebak output | Membaca kode lalu memilih hasil yang tampil | AnswerOption, kode ditampilkan di atas |
| Tulis kode | Mengetik kode pendek sendiri | Kotak kode + tombol Cek Jawaban |

Di tiap level, urutan jenis soal bergerak dari mengenali ke membuat: pilihan ganda dan isian dulu, lalu susun kode, tebak output, dan terakhir tulis kode.

**Kartu feedback** memakai kalimat tetap dari design system. Benar: **Hebat! Jawaban kamu benar!** dengan maskot `mascot-correct`. Salah: **Belum tepat :( Yuk pahami lagi!** dengan maskot `mascot-wrong`. Di bawahnya ada satu kalimat penjelasan yang ditulis per soal di dokumen ini.

**Ringkasan level**

| Level | Judul | XP | Fokus |
| --- | --- | --- | --- |
| 1 | Mengenal Algoritma & Python | +50 XP | Algoritma, `print()` |
| 2 | Variabel: Kotak Penyimpan Data | +50 XP | Membuat variabel, tipe data, aturan nama |
| 3 | Input & Output: Ngobrol dengan Komputer | +50 XP | `input()`, `int()`, operator hitung |
| 4 | If: Komputer Bisa Memilih | +50 XP | `if`, `else`, `elif`, perbandingan |
| 5 | For Loop: Mengulang Tanpa Capek | +50 XP | `for`, `range()`, perulangan daftar |
| 6 | Percabangan Lanjut | +50 XP | `and`, `or`, `not`, `match-case` (switch) |
| 7 | While Loop | +50 XP | `while`, `break`, `continue`, do-while |
| 8 | Ujian Akhir | +150 XP | 15 soal gabungan, lencana Master Algogo |

Semua kode memakai Python 3. Indentasi memakai 4 spasi. Level 6 dan ujian memakai `match-case`, yang butuh **Python 3.10 ke atas**. Python tidak punya `switch` dan `do-while` bawaan, jadi keduanya diajarkan dengan padanannya di Python: `match-case` dan pola `while True` + `break`.

## Level 1 · Mengenal Algoritma & Python

Siswa paham apa itu algoritma, ciri algoritma yang baik, dan bisa menampilkan teks dengan `print()`. Halaman 1–4 memakai materi yang sudah ada di aplikasi. Halaman 5 baru, sebagai jembatan ke Python.

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

### Materi 3/5: Algoritma Itu Seperti Resep

*Tampilan: ilustrasi `illust-cokelat`, daftar bernomor, maskot `mascot-happy`.*

Resep memberi langkah-langkah agar bahan bisa diolah menjadi makanan. Contohnya, membuat minuman cokelat:

1. Siapkan gelas, susu, dan bubuk cokelat.
2. Masukkan bubuk cokelat ke dalam gelas.
3. Tuangkan susu.
4. Aduk hingga tercampur.
5. Sajikan minuman.

**Hubungannya dengan pemrograman:** program juga berisi instruksi berurutan. Bedanya, kamu harus menulis instruksi program dalam bahasa yang dimengerti komputer.

### Materi 4/5: Bagaimana Algoritma yang Baik?

*Tampilan: 4 ConceptItem besar dengan ikon `icon-ordered`, `icon-clear`, `icon-goal`, `icon-finite`, maskot `mascot-wave`.*

1. **Terurut**: Langkah disusun dalam urutan yang masuk akal.
2. **Jelas**: Setiap instruksi mudah dipahami dan tidak membingungkan.
3. **Sesuai tujuan**: Langkah-langkahnya membantu menyelesaikan masalah yang ditentukan.
4. **Memiliki akhir**: Algoritma punya langkah terakhir, tidak berjalan selamanya.

### Materi 5/5: Kenalan dengan Python!

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

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah mengenal apa itu algoritma dan perintah pertamamu di Python.

**Kamu sudah belajar :**

- Pengertian algoritma
- Algoritma dalam kehidupan sehari-hari
- Ciri-ciri algoritma yang baik
- Menampilkan teks dengan `print()`

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Apa Itu Algoritma?

Manakah pengertian yang paling tepat?

- Bahasa khusus untuk membuat komputer menyala
- **Urutan langkah logis untuk menyelesaikan masalah** (benar)
- Kumpulan perangkat keras komputer
- Hasil akhir dari sebuah perhitungan

**Benar:** Algoritma adalah urutan langkah yang logis dan sistematis untuk menyelesaikan masalah atau mencapai tujuan.

**Salah:** Algoritma itu urutan langkah untuk mencapai tujuan, seperti langkah membuat mi instan.

### Soal 2/5 · Susun Kode: Susun Langkahnya!

Urutkan langkah-langkah menyikat gigi dari awal sampai akhir.

Tampil acak: Berkumur · Ambil sikat gigi · Sikat gigi · Beri pasta gigi pada sikat gigi

Urutan benar:

1. Ambil sikat gigi
2. Beri pasta gigi pada sikat gigi
3. Sikat gigi
4. Berkumur

**Benar:** Langkahmu terurut, jadi tujuannya tercapai: gigi bersih!

**Salah:** Pasta gigi harus ada di sikat sebelum menyikat, dan berkumur dilakukan paling akhir.

### Soal 3/5 · Isian Bagian Kosong: Lengkapi Perintahnya!

Lengkapi kode agar komputer menampilkan *Halo, dunia!*

```python
_____("Halo, dunia!")
```

Pilihan chip: `print` (benar) · `Print` · `tampil`

**Benar:** `print()` adalah perintah untuk menampilkan sesuatu ke layar.

**Salah:** Python membedakan huruf besar dan kecil, dan perintahnya dalam bahasa Inggris: `print`.

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

## Level 2 · Variabel: Kotak Penyimpan Data

Siswa bisa membuat variabel, mengenal 4 tipe data dasar, mengubah isi variabel, dan memberi nama variabel dengan benar.

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

### Materi 3/5: Isi Kotak Bisa Berbeda Jenis

*Tampilan: 4 ConceptItem kecil dalam tile krem, satu per tipe data, maskot `mascot-happy`.*

Data yang disimpan punya jenis atau **tipe data**. Empat yang paling sering dipakai:

| Tipe data | Isinya | Contoh |
| --- | --- | --- |
| Teks (`str`) | Huruf, kata, kalimat; selalu pakai tanda kutip | `kelas = "7A"` |
| Bilangan bulat (`int`) | Angka tanpa koma | `skor = 90` |
| Bilangan desimal (`float`) | Angka berkoma, ditulis pakai titik | `tinggi = 1.55` |
| Benar/Salah (`bool`) | Hanya `True` atau `False` | `sudah_makan = True` |

**Tips:** `"13"` (pakai kutip) itu teks, sedangkan `13` (tanpa kutip) itu angka. Bedanya akan penting di level berikutnya.

### Materi 4/5: Memakai dan Mengganti Isi

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

### Materi 5/5: Aturan Memberi Nama

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

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa menyimpan data di dalam variabel.

**Kamu sudah belajar :**

- Membuat variabel dengan tanda `=`
- Tipe data: teks, bilangan bulat, desimal, benar/salah
- Menampilkan dan mengganti isi variabel
- Aturan memberi nama variabel

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Nama yang Benar

Manakah nama variabel yang **boleh** dipakai di Python?

- 2nilai
- nilai siswa
- **nilai\_siswa** (benar)
- nilai-siswa

**Benar:** Garis bawah `_` boleh dipakai untuk memisahkan kata dalam nama variabel.

**Salah:** Nama variabel tidak boleh diawali angka, berisi spasi, atau memakai tanda minus.

### Soal 2/5 · Isian Bagian Kosong: Simpan Buahnya!

Lengkapi kode agar kata *apel* tersimpan di variabel `buah`.

```python
buah ___ "apel"
```

Pilihan chip: `=` (benar) · `==` · `:`

**Benar:** Satu tanda `=` artinya "simpan ke dalam".

**Salah:** Untuk menyimpan nilai, pakai satu tanda `=`. Tanda `==` dipakai untuk membandingkan, nanti di Level 4.

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

## Level 3 · Input & Output: Ngobrol dengan Komputer

Siswa bisa meminta data dari pengguna dengan `input()`, mengubahnya jadi angka dengan `int()`, menghitung, lalu menampilkan hasilnya.

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

### Materi 3/5: Input: Meminta Jawaban dengan input()

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

### Materi 4/5: Awas! Hasil input() Selalu Teks

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

### Materi 5/5: Komputer Jago Berhitung

*Tampilan: tabel operator berwarna, contoh program kasir, maskot `mascot-laptop`.*

Python bisa berhitung dengan **operator** berikut:

| Operator | Arti | Contoh | Hasil |
| --- | --- | --- | --- |
| `+` | Tambah | `7 + 3` | `10` |
| `-` | Kurang | `7 - 3` | `4` |
| `*` | Kali | `7 * 3` | `21` |
| `/` | Bagi | `8 / 2` | `4.0` |

Catatan: hasil pembagian `/` selalu berupa desimal, jadi `8 / 2` menghasilkan `4.0`.

Gabungkan semuanya jadi program kasir mini:

```python
harga = int(input("Harga satu roti: "))
jumlah = int(input("Beli berapa? "))
print("Total bayar:", harga * jumlah)
```

Jika diketik 5000 dan 3, hasilnya `Total bayar: 15000`.

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Programmu sekarang sudah bisa diajak ngobrol!

**Kamu sudah belajar :**

- Alur input, proses, output
- Menampilkan banyak data dengan `print()`
- Meminta data dengan `input()` dan mengubahnya dengan `int()`
- Operator hitung `+ - * /`

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Program Bertanya

Perintah apa yang dipakai agar program bisa meminta pengguna mengetik sesuatu?

- `print()`
- **`input()`** (benar)
- `int()`
- `type()`

**Benar:** `input()` membuat program menunggu ketikan dari pengguna.

**Salah:** `print()` untuk menampilkan, `int()` untuk mengubah ke angka. Untuk bertanya, pakai `input()`.

### Soal 2/5 · Isian Bagian Kosong: Jadikan Angka!

Lengkapi kode agar ketikan pengguna bisa dihitung.

```python
angka = ___(input("Masukkan angka: "))
print(angka * 2)
```

Pilihan chip: `int` (benar) · `str` · `print`

**Benar:** `int()` mengubah teks hasil `input()` menjadi bilangan bulat.

**Salah:** Hasil `input()` selalu teks. Agar bisa dihitung, bungkus dengan `int()`.

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

Diterima juga: nama variabel lain dan teks pertanyaan lain, selama memakai `int(input())` dua kali dan mengalikan keduanya.

**Benar:** Keren! Kamu sudah membuat program yang menerima input, menghitung, dan menampilkan hasil.

**Salah:** Ingat tiga langkahnya: minta panjang dengan `int(input())`, minta lebar dengan cara yang sama, lalu `print` hasil kalinya.

## Level 4 · If: Komputer Bisa Memilih

Siswa bisa membuat program yang mengambil keputusan dengan `if`, `else`, dan `elif`, serta memakai operator perbandingan.

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

### Materi 4/5: Kalau Tidak, Pakai else

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

### Materi 5/5: Banyak Pilihan dengan elif

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

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Programmu sekarang sudah bisa mengambil keputusan.

**Kamu sudah belajar :**

- Kondisi dan aksi dalam keputusan sehari-hari
- Menulis `if` dengan titik dua dan indentasi
- Operator perbandingan `== != > < >= <=`
- Memakai `else` dan `elif`

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

Diterima juga: nama variabel atau teks pertanyaan lain, dan `if jam >= 12` dengan isi `if` dan `else` ditukar.

**Benar:** Programmu sudah bisa menyapa sesuai waktu!

**Salah:** Ubah input jadi angka dengan `int()`, tulis `if` dengan titik dua, lalu aksi yang menjorok 4 spasi, dan `else` untuk pilihan lainnya.

## Level 5 · For Loop: Mengulang Tanpa Capek

Siswa bisa mengulang perintah dengan `for` dan `range()`, membaca nilai penghitung, dan mengulang isi sebuah daftar.

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

### Materi 5/5: Mengulang Isi Daftar

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

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah bisa menyuruh komputer bekerja berulang-ulang tanpa capek.

**Kamu sudah belajar :**

- Kegunaan perulangan
- Menulis `for` dengan `range()`
- Penghitung mulai dari 0
- `range` dengan awal, akhir, dan lompatan
- Mengulang isi daftar

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

**Benar:** Hebat! Satu baris perulangan bisa menggantikan 10 baris `print`.

**Salah:** Pakai `range` dengan tiga angka: mulai 5, berhenti sebelum 51, lompat 5. Jangan lupa titik dua dan indentasi.

## Level 6 · Percabangan Lanjut: and, or, not & match-case

Siswa bisa menggabungkan beberapa syarat dengan `and`, `or`, `not`, dan memakai `match-case`, yaitu versi *switch* di Python. Catatan teknis: `match-case` butuh Python 3.10 ke atas.

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

### Materi 4/5: Switch di Python: match-case

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

**Tahukah kamu?** Satu `case` bisa berisi beberapa pilihan dengan tanda `|`: `case "Sabtu" | "Minggu":`

### Materi 5/5: Pakai if atau match?

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

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Programmu sekarang bisa memeriksa banyak syarat dan banyak pilihan.

**Kamu sudah belajar :**

- `and` dan `or` untuk menggabungkan syarat
- `not` untuk membalik nilai
- `match-case` sebagai switch di Python
- Memilih antara `if` dan `match`

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Hasil and

Apa hasil dari `True and False`?

- True
- **False** (benar)
- TrueFalse
- Error

**Benar:** `and` hanya bernilai benar jika kedua sisinya benar.

**Salah:** Ada satu sisi yang `False`, jadi hasil `and` ikut `False`.

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

Diterima juga: `if 20 <= suhu <= 30:`.

**Benar:** Kamu sudah bisa memeriksa rentang nilai dengan dua syarat sekaligus.

**Salah:** Suhu harus memenuhi dua syarat sekaligus: `suhu >= 20` **dan** `suhu <= 30`. Gabungkan dengan `and`.

## Level 7 · While Loop: Ulangi Selama Masih Benar

Siswa bisa memakai `while`, menghentikan atau melewati putaran dengan `break` dan `continue`, dan membuat pola *do-while* di Python.

### Materi 1/5: Sampai Kapan Diulang?

*Tampilan: ilustrasi game dengan 3 ikon hati yang berkurang satu per satu, maskot `mascot-think`.*

Di Level 5, kamu memakai `for` saat **jumlah ulangannya sudah pasti**, misalnya 5 kali.

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

Ingat ciri algoritma yang baik dari Level 1: **memiliki akhir**. Pastikan perulanganmu punya jalan keluar.

**Tips:** Kalau program terlanjur berputar terus di komputer, tekan **Ctrl + C** untuk menghentikannya.

### Materi 4/5: break dan continue

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

### Materi 5/5: Do-While ala Python

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

### Penutup: Yeay! Materi selesai!

*Tampilan: maskot `mascot-celebrate`, SummaryCard, tombol Mulai Latihan.*

Kamu sudah menguasai dua jenis perulangan di Python!

**Kamu sudah belajar :**

- Kapan memakai `while` dan kapan `for`
- Menghindari perulangan tanpa akhir
- `break` untuk berhenti, `continue` untuk melewati
- Membuat do-while dengan `while True` dan `break`

Saatnya Uji Kemampuanmu! ^\_^

### Soal 1/5 · Pilihan Ganda: Pilih Perulangan

Kapan sebaiknya memakai `while` dibandingkan `for`?

- Saat jumlah ulangannya sudah pasti
- **Saat perulangan berjalan selama sebuah syarat masih benar** (benar)
- Saat hanya ingin menampilkan teks sekali
- Saat ingin membuat variabel baru

**Benar:** `while` cocok saat kita tidak tahu pasti berapa kali harus mengulang.

**Salah:** Jika jumlah ulangan sudah pasti, `for` lebih cocok. `while` dipakai "selama" syarat masih benar.

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

## Level 8 · Ujian Akhir: Tantangan Master Algogo

Ujian berisi 15 soal gabungan dari Level 1–7, tanpa halaman materi. Setiap jenis soal muncul 3 kali. Siswa lulus jika minimal **11 dari 15 soal benar** (sekitar 70%), lalu mendapat **+150 XP** dan lencana **Master Algogo**.

### Layar Pembuka: Siap Jadi Master?

*Tampilan: maskot `mascot-wave`, kartu ungu berisi aturan, tombol **Mulai Ujian**.*

Kamu sudah menyelesaikan semua level. Sekarang saatnya membuktikan kemampuanmu!

- 15 soal dari semua materi
- Tidak ada halaman materi, jadi andalkan ingatanmu
- Feedback tetap muncul setelah setiap soal
- Jawab benar minimal 11 soal untuk lulus

### Peta Soal

Tim pengembang memakai tabel ini untuk menyarankan level yang perlu siswa ulangi saat belum lulus.

| Soal | Jenis | Materi yang diuji |
| --- | --- | --- |
| 1 | Pilihan ganda | Level 1: Ciri algoritma |
| 2 | Pilihan ganda | Level 2: Tipe data |
| 3 | Pilihan ganda | Level 7: Perulangan tanpa akhir |
| 4 | Isian kosong | Level 3, 6: Input dan `and` |
| 5 | Isian kosong | Level 5: `range` dengan lompatan |
| 6 | Isian kosong | Level 6: `case _` |
| 7 | Susun kode | Level 2, 3: Variabel, input, operator |
| 8 | Susun kode | Level 4, 5: `for` + `if-else` |
| 9 | Susun kode | Level 7: Do-while |
| 10 | Tebak output | Level 2, 3: Mengganti isi variabel, operator |
| 11 | Tebak output | Level 4: `elif` |
| 12 | Tebak output | Level 5, 6, 7: `or` + `continue` |
| 13 | Tulis kode | Level 1, 3: `print` dan `input` |
| 14 | Tulis kode | Level 6: `match-case` |
| 15 | Tulis kode | Level 5: Menjumlahkan dengan `for` |

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

### Soal 3/15 · Pilihan Ganda: Tidak Pernah Berhenti

Perulangan mana yang **tidak akan pernah berhenti**?

- `for i in range(10):`
- **`while True:` tanpa `break` di dalamnya** (benar)
- `while x < 5:` dengan `x = x + 1` di dalamnya
- `for b in buah:`

**Benar:** `while True` selalu benar. Tanpa `break`, tidak ada jalan keluar.

**Salah:** `for` selalu berhenti setelah semua putaran selesai. `while True` butuh `break` sebagai pintu keluar.

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

### Soal 5/15 · Isian Bagian Kosong: Bilangan Genap

Lengkapi kode agar tampil 2, 4, 6, 8, 10.

```python
for i in range(2, 11, ___):
    print(i)
```

Pilihan chip: `2` (benar) · `1` · `10`

**Benar:** Angka ketiga di `range` adalah lompatan. Lompat 2 dari angka 2 menghasilkan bilangan genap.

**Salah:** Lompatan 1 akan menampilkan semua angka 2 sampai 10. Supaya genap saja, lompat 2.

### Soal 6/15 · Isian Bagian Kosong: Selain Itu

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

### Soal 8/15 · Susun Kode: Angka Spesial

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

### Soal 9/15 · Susun Kode: Brankas Rahasia

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

### Soal 11/15 · Tebak Output: Nilai Rapor

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

### Soal 12/15 · Tebak Output: Lompati Genap

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

### Soal 13/15 · Tulis Kode: Sambutan

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

### Soal 14/15 · Tulis Kode: Menu Es Krim

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

**Benar:** Mantap! Menu pilihan seperti ini paling rapi ditulis dengan `match-case`.

**Salah:** Ubah input dengan `int()`, tulis satu `case` untuk setiap angka, lalu `case _` di paling bawah.

### Soal 15/15 · Tulis Kode: Jumlah 1 sampai 10

Buat program yang menghitung 1 + 2 + 3 + … + 10, lalu menampilkan hasilnya (**55**).

Jawaban:

```python
total = 0
for i in range(1, 11):
    total = total + i
print(total)
```

Diterima juga: versi `while`, atau `total += i`. Tidak diterima: `print(55)` langsung, karena soal meminta komputer yang menghitung.

**Benar:** Selamat, ini soal terakhir dan kamu berhasil!

**Salah:** Siapkan `total = 0`, ulangi `i` dari 1 sampai 10 dengan `range(1, 11)`, tambahkan `i` ke `total` setiap putaran, lalu tampilkan `total` di luar perulangan.

### Layar Hasil

*Tampilan: skor besar (misalnya 13/15), progress bar hijau, tombol sesuai hasil.*

**Lulus (11–15 benar):** maskot `mascot-celebrate`, judul **Selamat! Kamu Master Algogo!**, kartu lencana **Master Algogo**, **+150 XP**, tombol **Kembali ke Peta**.

**Belum lulus (0–10 benar):** maskot `mascot-happy`, judul **Hampir sampai! Yuk, ulangi sedikit lagi.**, kartu "Coba ulas lagi:" berisi daftar level dari soal yang salah (lihat Peta Soal), tombol **Ulangi Ujian**.
