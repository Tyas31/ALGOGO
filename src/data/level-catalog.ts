// Generated from Materi-Soal-Algogo.md.
import type { LevelData } from './curriculum';

export type LevelCatalogEntry = Pick<LevelData, 'id' | 'unitNumber' | 'unit' | 'title' | 'subtitle' | 'xp' | 'description'>;
export const LEVEL_CATALOG: LevelCatalogEntry[] = [
  {
    "id": 1,
    "unitNumber": 1,
    "unit": "Unit 1 · Dasar Algoritma & Python",
    "title": "Mengenal Algoritma & Python",
    "subtitle": "Algoritma, print()",
    "xp": 50,
    "description": "Siswa paham apa itu algoritma, ciri algoritma yang baik, dan bisa menampilkan teks dengan print(). Halaman 1–4 memakai materi yang sudah ada di aplikasi. Halaman 5 baru, sebagai jembatan ke Python."
  },
  {
    "id": 2,
    "unitNumber": 1,
    "unit": "Unit 1 · Dasar Algoritma & Python",
    "title": "Variabel: Kotak Penyimpan Data",
    "subtitle": "Membuat variabel, tipe data, aturan nama",
    "xp": 50,
    "description": "Siswa bisa membuat variabel, mengenal 4 tipe data dasar, mengubah isi variabel, dan memberi nama variabel dengan benar."
  },
  {
    "id": 3,
    "unitNumber": 1,
    "unit": "Unit 1 · Dasar Algoritma & Python",
    "title": "Input & Output: Ngobrol dengan Komputer",
    "subtitle": "input(), int(), operator hitung",
    "xp": 50,
    "description": "Siswa bisa meminta data dari pengguna dengan input(), mengubahnya jadi angka dengan int(), menghitung, lalu menampilkan hasilnya."
  },
  {
    "id": 4,
    "unitNumber": 2,
    "unit": "Unit 2 · Percabangan & Perulangan",
    "title": "If: Komputer Bisa Memilih",
    "subtitle": "if, else, elif, perbandingan",
    "xp": 50,
    "description": "Siswa bisa membuat program yang mengambil keputusan dengan if, else, dan elif, serta memakai operator perbandingan."
  },
  {
    "id": 5,
    "unitNumber": 2,
    "unit": "Unit 2 · Percabangan & Perulangan",
    "title": "For Loop: Mengulang Tanpa Capek",
    "subtitle": "for, range(), perulangan daftar",
    "xp": 50,
    "description": "Siswa bisa mengulang perintah dengan for dan range(), membaca nilai penghitung, dan mengulang isi sebuah daftar."
  },
  {
    "id": 6,
    "unitNumber": 2,
    "unit": "Unit 2 · Percabangan & Perulangan",
    "title": "Percabangan Lanjut: and, or, not & match-case",
    "subtitle": "and, or, not, match-case",
    "xp": 50,
    "description": "Siswa bisa menggabungkan beberapa syarat dengan and, or, not, dan memakai match-case, yaitu versi switch di Python. Catatan teknis: match-case butuh Python 3.10 ke atas."
  },
  {
    "id": 7,
    "unitNumber": 2,
    "unit": "Unit 2 · Percabangan & Perulangan",
    "title": "While Loop: Ulangi Selama Masih Benar",
    "subtitle": "while, break, continue, do-while",
    "xp": 50,
    "description": "Siswa bisa memakai while, menghentikan atau melewati putaran dengan break dan continue, dan membuat pola do-while di Python."
  },
  {
    "id": 8,
    "unitNumber": 3,
    "unit": "Unit 3 · Ujian Akhir",
    "title": "Ujian Akhir: Tantangan Master Algogo",
    "subtitle": "15 soal gabungan, lencana Master Algogo",
    "xp": 150,
    "description": "Ujian berisi 15 soal gabungan dari Level 1–7, tanpa halaman materi. Setiap jenis soal muncul 3 kali. Siswa lulus jika minimal 11 dari 15 soal benar (sekitar 70%), lalu mendapat +150 XP dan lencana Master Algogo."
  }
];
