import type { Mascots, Icons, Illustrations } from '@/constants/assets';

export type QuestionType = 'choice' | 'blank' | 'order' | 'output' | 'write';

export type ConceptItemData = {
  iconKey: keyof typeof Icons;
  title: string;
  description: string;
  size?: 'sm' | 'lg';
};

export type LessonBlock = {
  kind: 'paragraph' | 'code' | 'output' | 'callout' | 'warning' | 'tip';
  text: string;
};

export type LessonSlide = {
  id: number;
  title: string;
  blocks?: LessonBlock[];
  story?: string;
  questionPrompt?: string;
  conceptItems?: ConceptItemData[];
  stepsList?: string[];
  codeSnippet?: string;
  codeOutput?: string;
  warningCallout?: string;
  tipCallout?: string;
  illustrationKey?: keyof typeof Illustrations;
  mascotKey: keyof typeof Mascots;
};

export type QuestionData = {
  id: number;
  type: QuestionType;
  title: string;
  prompt: string;
  codeSnippet?: string;
  codeTemplate?: string;
  options?: string[];
  chips?: string[];
  stepItems?: string[];
  correctAnswer: string;
  correctOrder?: string[];
  acceptedAnswers?: string[];
  reviewLevelIds?: number[];
  explanation: {
    correct: string;
    wrong: string;
  };
};

export type LevelData = {
  id: number;
  unit: string;
  unitNumber: number;
  title: string;
  subtitle: string;
  xp: number;
  description: string;
  examIntro?: { title: string; body: string };
  passingCorrectCount?: number;
  contentVersion?: string;
  slides: LessonSlide[];
  summaryPoints: string[];
  questions: QuestionData[];
};

// Generated from Materi-Soal-Algogo.md by scripts/sync-curriculum.mjs.
export const CURRICULUM: LevelData[] = [
  {
    "id": 1,
    "unitNumber": 1,
    "unit": "Unit 1 · Dasar Algoritma & Python",
    "title": "Mengenal Algoritma & Python",
    "subtitle": "Algoritma, print()",
    "xp": 50,
    "description": "Siswa paham apa itu algoritma, ciri algoritma yang baik, dan bisa menampilkan teks dengan print(). Halaman 1–4 memakai materi yang sudah ada di aplikasi. Halaman 5 baru, sebagai jembatan ke Python.",
    "slides": [
      {
        "id": 1,
        "title": "Pernah Mengikuti Petunjuk?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pernahkah kamu membuat mi instan, mengikuti resep, atau mengikuti petunjuk permainan?"
          },
          {
            "kind": "paragraph",
            "text": "Bayangkan kamu ingin membuat mi instan. Kamu perlu menyiapkan alat dan bahan, memasak mi, menyiapkan bumbu, lalu menyajikannya."
          },
          {
            "kind": "paragraph",
            "text": "Kalau langkahnya tertukar, hasilnya bisa berbeda dari yang kamu harapkan. Kamu juga memakai cara berpikir seperti ini saat memberi perintah ke komputer!"
          },
          {
            "kind": "callout",
            "text": "Menurutmu, mengapa kita perlu mengikuti langkah-langkah secara berurutan?"
          }
        ],
        "mascotKey": "think",
        "illustrationKey": "miInstan"
      },
      {
        "id": 2,
        "title": "Apa Itu Algoritma?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Algoritma adalah serangkaian langkah yang disusun secara logis dan sistematis untuk menyelesaikan masalah atau mencapai tujuan."
          },
          {
            "kind": "paragraph",
            "text": "Jadi, algoritma berisi petunjuk tentang apa yang harus kamu lakukan dan cara melakukannya. Dalam pemrograman, algoritma membantu kita merencanakan instruksi sebelum menuliskannya menjadi kode."
          },
          {
            "kind": "tip",
            "text": "Ingat tiga hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- Tujuan: Apa yang ingin dicapai?\n- Langkah: Apa yang harus dilakukan?\n- Hasil: Apakah tujuan sudah tercapai?"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Algoritma Itu Seperti Resep",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Resep memberi langkah-langkah agar bahan bisa diolah menjadi makanan. Contohnya, membuat minuman cokelat:"
          },
          {
            "kind": "paragraph",
            "text": "1. Siapkan gelas, susu, dan bubuk cokelat.\n2. Masukkan bubuk cokelat ke dalam gelas.\n3. Tuangkan susu.\n4. Aduk hingga tercampur.\n5. Sajikan minuman."
          },
          {
            "kind": "paragraph",
            "text": "Hubungannya dengan pemrograman: program juga berisi instruksi berurutan. Bedanya, kamu harus menulis instruksi program dalam bahasa yang dimengerti komputer."
          }
        ],
        "mascotKey": "happy",
        "illustrationKey": "cokelat"
      },
      {
        "id": 4,
        "title": "Bagaimana Algoritma yang Baik?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "1. Terurut: Langkah disusun dalam urutan yang masuk akal.\n2. Jelas: Setiap instruksi mudah dipahami dan tidak membingungkan.\n3. Sesuai tujuan: Langkah-langkahnya membantu menyelesaikan masalah yang ditentukan.\n4. Memiliki akhir: Algoritma punya langkah terakhir, tidak berjalan selamanya."
          }
        ],
        "mascotKey": "wave"
      },
      {
        "id": 5,
        "title": "Kenalan dengan Python!",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Komputer tidak mengerti bahasa Indonesia. Kita perlu bahasa pemrograman, dan salah satu yang paling ramah untuk pemula adalah Python. Orang memakai Python untuk membuat website, game sederhana, sampai kecerdasan buatan (AI)."
          },
          {
            "kind": "paragraph",
            "text": "Perintah pertamamu: print(), artinya \"tampilkan\"."
          },
          {
            "kind": "code",
            "text": "print(\"Halo, dunia!\")"
          },
          {
            "kind": "output",
            "text": "Halo, dunia!"
          },
          {
            "kind": "warning",
            "text": "Awas! Teks harus diapit tanda kutip \" \", dan print ditulis dengan huruf kecil semua. Print atau PRINT tidak dikenali Python."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Pengertian algoritma",
      "Algoritma dalam kehidupan sehari-hari",
      "Ciri-ciri algoritma yang baik",
      "Menampilkan teks dengan print()"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Apa Itu Algoritma?",
        "prompt": "Manakah pengertian yang paling tepat?",
        "correctAnswer": "Urutan langkah logis untuk menyelesaikan masalah",
        "explanation": {
          "correct": "Algoritma adalah urutan langkah yang logis dan sistematis untuk menyelesaikan masalah atau mencapai tujuan.",
          "wrong": "Algoritma itu urutan langkah untuk mencapai tujuan, seperti langkah membuat mi instan."
        },
        "options": [
          "Bahasa khusus untuk membuat komputer menyala",
          "Urutan langkah logis untuk menyelesaikan masalah",
          "Kumpulan perangkat keras komputer",
          "Hasil akhir dari sebuah perhitungan"
        ]
      },
      {
        "id": 2,
        "type": "order",
        "title": "Susun Kode: Susun Langkahnya!",
        "prompt": "Urutkan langkah-langkah menyikat gigi dari awal sampai akhir.",
        "correctAnswer": "Ambil sikat gigi\nBeri pasta gigi pada sikat gigi\nSikat gigi\nBerkumur",
        "explanation": {
          "correct": "Langkahmu terurut, jadi tujuannya tercapai: gigi bersih!",
          "wrong": "Pasta gigi harus ada di sikat sebelum menyikat, dan berkumur dilakukan paling akhir."
        },
        "correctOrder": [
          "Ambil sikat gigi",
          "Beri pasta gigi pada sikat gigi",
          "Sikat gigi",
          "Berkumur"
        ],
        "stepItems": [
          "Berkumur",
          "Ambil sikat gigi",
          "Sikat gigi",
          "Beri pasta gigi pada sikat gigi"
        ]
      },
      {
        "id": 3,
        "type": "blank",
        "title": "Isian Bagian Kosong: Lengkapi Perintahnya!",
        "prompt": "Lengkapi kode agar komputer menampilkan Halo, dunia!",
        "correctAnswer": "print",
        "explanation": {
          "correct": "print() adalah perintah untuk menampilkan sesuatu ke layar.",
          "wrong": "Python membedakan huruf besar dan kecil, dan perintahnya dalam bahasa Inggris: print."
        },
        "codeTemplate": "_____(\"Halo, dunia!\")",
        "chips": [
          "print",
          "Print",
          "tampil"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Apa yang Muncul?",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "Aku suka Python",
        "explanation": {
          "correct": "Tanda kutip hanya penanda teks, jadi tidak ikut tampil.",
          "wrong": "Yang tampil hanya isi di dalam tanda kutip, tanpa kata print dan tanpa tanda kutipnya."
        },
        "options": [
          "Aku suka Python",
          "\"Aku suka Python\"",
          "print(\"Aku suka Python\")",
          "Muncul pesan error"
        ],
        "codeSnippet": "print(\"Aku suka Python\")"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Giliranmu!",
        "prompt": "Tulis kode untuk menampilkan: Selamat pagi!",
        "correctAnswer": "print(\"Selamat pagi!\")",
        "explanation": {
          "correct": "Kamu baru saja menulis program Python pertamamu!",
          "wrong": "Ingat polanya: print, kurung buka, teks dalam tanda kutip, kurung tutup."
        },
        "acceptedAnswers": [
          "print(\"Selamat pagi!\")"
        ]
      }
    ],
    "contentVersion": "89205936de62"
  },
  {
    "id": 2,
    "unitNumber": 1,
    "unit": "Unit 1 · Dasar Algoritma & Python",
    "title": "Variabel: Kotak Penyimpan Data",
    "subtitle": "Membuat variabel, tipe data, aturan nama",
    "xp": 50,
    "description": "Siswa bisa membuat variabel, mengenal 4 tipe data dasar, mengubah isi variabel, dan memberi nama variabel dengan benar.",
    "slides": [
      {
        "id": 1,
        "title": "Kotak Berlabel",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Di meja belajarmu mungkin ada kotak pensil, kotak penghapus, dan celengan. Setiap kotak punya label supaya kamu tahu isinya tanpa harus membuka satu per satu."
          },
          {
            "kind": "paragraph",
            "text": "Komputer juga butuh \"kotak\" untuk menyimpan data, misalnya nama pemain atau skor game. Kotak itu disebut variabel."
          },
          {
            "kind": "callout",
            "text": "Kalau semua kotak tidak diberi label, apa yang terjadi saat kamu mencari penghapus?"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Membuat Variabel",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Membuat variabel di Python cukup satu baris:"
          },
          {
            "kind": "code",
            "text": "nama = \"Rani\"\numur = 13"
          },
          {
            "kind": "tip",
            "text": "Ingat tiga hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- Nama variabel di sebelah kiri, yaitu labelnya: nama, umur\n- Tanda =: artinya \"simpan ke dalam\"\n- Nilai di sebelah kanan, yaitu isinya: \"Rani\", 13"
          },
          {
            "kind": "warning",
            "text": "Awas! Di Python, = bukan \"sama dengan\" seperti di matematika. Baca umur = 13 sebagai \"simpan 13 ke dalam umur\"."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Isi Kotak Bisa Berbeda Jenis",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Data yang disimpan punya jenis atau tipe data. Empat yang paling sering dipakai:"
          },
          {
            "kind": "paragraph",
            "text": "Tipe data — Isinya — Contoh\nTeks (str) — Huruf, kata, kalimat; selalu pakai tanda kutip — kelas = \"7A\"\nBilangan bulat (int) — Angka tanpa koma — skor = 90\nBilangan desimal (float) — Angka berkoma, ditulis pakai titik — tinggi = 1.55\nBenar/Salah (bool) — Hanya True atau False — sudah_makan = True"
          },
          {
            "kind": "tip",
            "text": "Tips: \"13\" (pakai kutip) itu teks, sedangkan 13 (tanpa kutip) itu angka. Bedanya akan penting di level berikutnya."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Memakai dan Mengganti Isi",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Isi variabel bisa ditampilkan dengan print() dan bisa diganti kapan saja:"
          },
          {
            "kind": "code",
            "text": "skor = 10\nprint(skor)\nskor = 25\nprint(skor)"
          },
          {
            "kind": "output",
            "text": "10\n25"
          },
          {
            "kind": "paragraph",
            "text": "Saat diisi nilai baru, nilai lama hilang dan diganti. Kotak hanya muat satu isi."
          },
          {
            "kind": "warning",
            "text": "Awas! print(skor) menampilkan isi variabel (10). print(\"skor\") menampilkan tulisan skor apa adanya."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Aturan Memberi Nama",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Nama variabel tidak boleh sembarangan. Ikuti aturan ini:"
          },
          {
            "kind": "paragraph",
            "text": "- Boleh pakai huruf, angka, dan garis bawah _\n- Tidak boleh diawali angka\n- Tidak boleh ada spasi atau tanda -\n- Huruf besar dan kecil dianggap berbeda: Nama dan nama adalah dua variabel berbeda"
          },
          {
            "kind": "paragraph",
            "text": "Boleh — Tidak boleh\nnilai_ujian — nilai ujian (ada spasi)\nkelas7 — 7kelas (diawali angka)\njumlahSiswa — jumlah-siswa (ada tanda minus)"
          },
          {
            "kind": "tip",
            "text": "Tips: Pilih nama yang menjelaskan isinya. uang_jajan lebih mudah dipahami daripada x."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Membuat variabel dengan tanda =",
      "Tipe data: teks, bilangan bulat, desimal, benar/salah",
      "Menampilkan dan mengganti isi variabel",
      "Aturan memberi nama variabel"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Nama yang Benar",
        "prompt": "Manakah nama variabel yang boleh dipakai di Python?",
        "correctAnswer": "nilai_siswa",
        "explanation": {
          "correct": "Garis bawah _ boleh dipakai untuk memisahkan kata dalam nama variabel.",
          "wrong": "Nama variabel tidak boleh diawali angka, berisi spasi, atau memakai tanda minus."
        },
        "options": [
          "2nilai",
          "nilai siswa",
          "nilai_siswa",
          "nilai-siswa"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Simpan Buahnya!",
        "prompt": "Lengkapi kode agar kata apel tersimpan di variabel buah.",
        "correctAnswer": "=",
        "explanation": {
          "correct": "Satu tanda = artinya \"simpan ke dalam\".",
          "wrong": "Untuk menyimpan nilai, pakai satu tanda =. Tanda == dipakai untuk membandingkan, nanti di Level 4."
        },
        "codeTemplate": "buah ___ \"apel\"",
        "chips": [
          "=",
          "==",
          ":"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Hewan Peliharaan",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\nkucing\nkelinci",
        "correctAnswer": "hewan = \"kucing\"\nprint(hewan)\nhewan = \"kelinci\"\nprint(hewan)",
        "explanation": {
          "correct": "Isi variabel diganti di tengah program, jadi print kedua menampilkan isi yang baru.",
          "wrong": "Variabel harus diisi dulu sebelum ditampilkan. Isi \"kucing\" dulu, tampilkan, baru ganti ke \"kelinci\"."
        },
        "correctOrder": [
          "hewan = \"kucing\"",
          "print(hewan)",
          "hewan = \"kelinci\"",
          "print(hewan)"
        ],
        "stepItems": [
          "print(hewan)",
          "hewan = \"kelinci\"",
          "hewan = \"kucing\"",
          "print(hewan)"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Isi Terakhir",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "8",
        "explanation": {
          "correct": "Nilai 5 sudah diganti 8, jadi yang tampil isi terakhirnya.",
          "wrong": "Variabel tidak menjumlahkan isinya. Nilai baru menggantikan nilai lama."
        },
        "options": [
          "5",
          "8",
          "13",
          "x"
        ],
        "codeSnippet": "x = 5\nx = 8\nprint(x)"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Kota Asalmu",
        "prompt": "Buat variabel kota yang berisi teks Bandung, lalu tampilkan isinya.",
        "correctAnswer": "kota = \"Bandung\"\nprint(kota)",
        "explanation": {
          "correct": "Kamu sudah bisa membuat variabel dan menampilkan isinya.",
          "wrong": "Dua langkah: simpan dulu dengan kota = \"Bandung\", lalu tampilkan dengan print(kota) tanpa tanda kutip."
        },
        "acceptedAnswers": [
          "kota = \"Bandung\"\nprint(kota)"
        ]
      }
    ],
    "contentVersion": "89205936de62"
  },
  {
    "id": 3,
    "unitNumber": 1,
    "unit": "Unit 1 · Dasar Algoritma & Python",
    "title": "Input & Output: Ngobrol dengan Komputer",
    "subtitle": "input(), int(), operator hitung",
    "xp": 50,
    "description": "Siswa bisa meminta data dari pengguna dengan input(), mengubahnya jadi angka dengan int(), menghitung, lalu menampilkan hasilnya.",
    "slides": [
      {
        "id": 1,
        "title": "Komputer Bisa Diajak Ngobrol?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Saat jajan di kantin, kamu menyebutkan pesanan. Penjual menghitung harga, lalu memberi tahu totalnya."
          },
          {
            "kind": "paragraph",
            "text": "Program juga bekerja seperti itu:"
          },
          {
            "kind": "paragraph",
            "text": "1. Input (masukan): data yang kita berikan, misalnya ketikan di keyboard\n2. Proses: komputer mengolah data\n3. Output (keluaran): hasil yang ditampilkan di layar"
          },
          {
            "kind": "callout",
            "text": "Coba sebutkan satu contoh input dan output saat kamu memakai HP!"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Output: print() Bisa Lebih dari Satu",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Kamu sudah kenal print(). Perintah ini juga bisa menampilkan beberapa data sekaligus. Pisahkan datanya dengan tanda koma:"
          },
          {
            "kind": "code",
            "text": "nama = \"Dika\"\nkelas = 8\nprint(\"Halo\", nama, \"dari kelas\", kelas)"
          },
          {
            "kind": "output",
            "text": "Halo Dika dari kelas 8"
          },
          {
            "kind": "tip",
            "text": "Tips: Tanda koma otomatis memberi satu spasi di antara data. Kamu tidak perlu menambah spasi sendiri."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Input: Meminta Jawaban dengan input()",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Supaya program bisa bertanya, pakai input():"
          },
          {
            "kind": "code",
            "text": "nama = input(\"Siapa namamu? \")\nprint(\"Halo,\", nama)"
          },
          {
            "kind": "paragraph",
            "text": "Jika pengguna mengetik Sari, layar menampilkan:"
          },
          {
            "kind": "output",
            "text": "Siapa namamu? Sari\nHalo, Sari"
          },
          {
            "kind": "tip",
            "text": "Ingat tiga hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- input() membuat program berhenti dan menunggu pengguna mengetik lalu menekan Enter\n- Teks di dalam kurung adalah pertanyaan yang ditampilkan\n- Jawaban pengguna disimpan ke variabel di sebelah kiri"
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Awas! Hasil input() Selalu Teks",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Apa pun yang diketik, input() selalu menyimpannya sebagai teks, termasuk angka. Teks tidak bisa dihitung:"
          },
          {
            "kind": "code",
            "text": "umur = input(\"Umur kamu: \")\nprint(umur + 1)   # Error!"
          },
          {
            "kind": "paragraph",
            "text": "Solusinya, ubah teks menjadi bilangan bulat dengan int():"
          },
          {
            "kind": "code",
            "text": "umur = int(input(\"Umur kamu: \"))\nprint(umur + 1)"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik 13, hasilnya 14."
          },
          {
            "kind": "tip",
            "text": "Tips: Ingat bentuknya: int(input(\"...\")). Ada dua kurung tutup di akhir."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Komputer Jago Berhitung",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Python bisa berhitung dengan operator berikut:"
          },
          {
            "kind": "paragraph",
            "text": "Operator — Arti — Contoh — Hasil\n+ — Tambah — 7 + 3 — 10\n- — Kurang — 7 - 3 — 4\n* — Kali — 7 * 3 — 21\n/ — Bagi — 8 / 2 — 4.0"
          },
          {
            "kind": "paragraph",
            "text": "Catatan: hasil pembagian / selalu berupa desimal, jadi 8 / 2 menghasilkan 4.0."
          },
          {
            "kind": "paragraph",
            "text": "Gabungkan semuanya jadi program kasir mini:"
          },
          {
            "kind": "code",
            "text": "harga = int(input(\"Harga satu roti: \"))\njumlah = int(input(\"Beli berapa? \"))\nprint(\"Total bayar:\", harga * jumlah)"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik 5000 dan 3, hasilnya Total bayar: 15000."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Alur input, proses, output",
      "Menampilkan banyak data dengan print()",
      "Meminta data dengan input() dan mengubahnya dengan int()",
      "Operator hitung + - * /"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Program Bertanya",
        "prompt": "Perintah apa yang dipakai agar program bisa meminta pengguna mengetik sesuatu?",
        "correctAnswer": "input()",
        "explanation": {
          "correct": "input() membuat program menunggu ketikan dari pengguna.",
          "wrong": "print() untuk menampilkan, int() untuk mengubah ke angka. Untuk bertanya, pakai input()."
        },
        "options": [
          "print()",
          "input()",
          "int()",
          "type()"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Jadikan Angka!",
        "prompt": "Lengkapi kode agar ketikan pengguna bisa dihitung.",
        "correctAnswer": "int",
        "explanation": {
          "correct": "int() mengubah teks hasil input() menjadi bilangan bulat.",
          "wrong": "Hasil input() selalu teks. Agar bisa dihitung, bungkus dengan int()."
        },
        "codeTemplate": "angka = ___(input(\"Masukkan angka: \"))\nprint(angka * 2)",
        "chips": [
          "int",
          "str",
          "print"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Tanya Hobi",
        "prompt": "Susun kode agar layar menampilkan ini (pengguna mengetik membaca):\n\nContoh hasil:\nHalo!\nApa hobimu? membaca\nHobimu: membaca",
        "correctAnswer": "print(\"Halo!\")\nhobi = input(\"Apa hobimu? \")\nprint(\"Hobimu:\", hobi)",
        "explanation": {
          "correct": "Program menyapa, bertanya, lalu menampilkan jawaban. Urut!",
          "wrong": "Variabel hobi baru ada isinya setelah input() dijalankan, jadi pertanyaan harus muncul sebelum jawabannya ditampilkan."
        },
        "correctOrder": [
          "print(\"Halo!\")",
          "hobi = input(\"Apa hobimu? \")",
          "print(\"Hobimu:\", hobi)"
        ],
        "stepItems": [
          "print(\"Hobimu:\", hobi)",
          "print(\"Halo!\")",
          "hobi = input(\"Apa hobimu? \")"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Kasir Kantin",
        "prompt": "Pengguna mengetik 4 lalu menekan Enter. Apa yang tampil di baris terakhir?",
        "correctAnswer": "Bayar: 4000",
        "explanation": {
          "correct": "4 dikali 1000 sama dengan 4000, lalu ditampilkan setelah teks \"Bayar:\".",
          "wrong": "Karena sudah diubah dengan int(), jumlah berisi angka 4 dan bisa dikalikan. Teks \"Bayar:\" juga ikut tampil."
        },
        "options": [
          "Bayar: 4000",
          "Bayar: jumlah * 1000",
          "Bayar: 41000",
          "4000"
        ],
        "codeSnippet": "jumlah = int(input(\"Beli berapa gorengan? \"))\nprint(\"Bayar:\", jumlah * 1000)"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Luas Kamar",
        "prompt": "Buat program yang meminta panjang dan lebar kamar (bilangan bulat), lalu menampilkan luasnya.\n\nContoh jika diketik 4 dan 3:\n\nContoh hasil:\nPanjang: 4\nLebar: 3\nLuas: 12",
        "correctAnswer": "panjang = int(input(\"Panjang: \"))\nlebar = int(input(\"Lebar: \"))\nprint(\"Luas:\", panjang * lebar)",
        "explanation": {
          "correct": "Keren! Kamu sudah membuat program yang menerima input, menghitung, dan menampilkan hasil.",
          "wrong": "Ingat tiga langkahnya: minta panjang dengan int(input()), minta lebar dengan cara yang sama, lalu print hasil kalinya."
        },
        "acceptedAnswers": [
          "panjang = int(input(\"Panjang: \"))\nlebar = int(input(\"Lebar: \"))\nprint(\"Luas:\", panjang * lebar)"
        ]
      }
    ],
    "contentVersion": "89205936de62"
  },
  {
    "id": 4,
    "unitNumber": 2,
    "unit": "Unit 2 · Percabangan & Perulangan",
    "title": "If: Komputer Bisa Memilih",
    "subtitle": "if, else, elif, perbandingan",
    "xp": 50,
    "description": "Siswa bisa membuat program yang mengambil keputusan dengan if, else, dan elif, serta memakai operator perbandingan.",
    "slides": [
      {
        "id": 1,
        "title": "Setiap Hari Kita Memilih",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Sebelum berangkat sekolah, kamu melihat ke luar jendela. Jika hujan, bawa payung. Kalau tidak, cukup pakai topi."
          },
          {
            "kind": "paragraph",
            "text": "Keputusan seperti ini punya dua bagian: kondisi (hujan atau tidak) dan aksi (bawa payung). Program juga bisa memilih aksi berdasarkan kondisi."
          },
          {
            "kind": "callout",
            "text": "Sebutkan satu keputusan \"jika… maka…\" yang kamu buat hari ini!"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Bentuk if di Python",
        "blocks": [
          {
            "kind": "code",
            "text": "nilai = 80\nif nilai >= 75:\n    print(\"Lulus!\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Lulus!. Kalau nilai diganti 60, tidak ada yang tampil karena kondisinya tidak terpenuhi."
          },
          {
            "kind": "paragraph",
            "text": "Ingat empat hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- Diawali kata if\n- Diikuti kondisi: nilai >= 75\n- Diakhiri titik dua :\n- Baris aksinya menjorok ke dalam 4 spasi (indentasi)"
          },
          {
            "kind": "warning",
            "text": "Awas! Lupa titik dua atau lupa indentasi akan membuat program error."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Alat Pembanding",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Kondisi dibuat dengan operator perbandingan. Hasilnya selalu True (benar) atau False (salah)."
          },
          {
            "kind": "paragraph",
            "text": "Operator — Arti — Contoh — Hasil\n== — Sama dengan — 5 == 5 — True\n!= — Tidak sama dengan — 5 != 3 — True\n> — Lebih besar — 3 > 7 — False\n< — Lebih kecil — 3 < 7 — True\n>= — Lebih besar atau sama — 7 >= 7 — True\n<= — Lebih kecil atau sama — 8 <= 7 — False"
          },
          {
            "kind": "warning",
            "text": "Awas! = untuk menyimpan ke variabel, == untuk membandingkan. Jangan tertukar!"
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Kalau Tidak, Pakai else",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "else artinya \"kalau tidak\". Bagian ini dijalankan saat kondisi if bernilai salah."
          },
          {
            "kind": "code",
            "text": "nilai = 60\nif nilai >= 75:\n    print(\"Lulus!\")\nelse:\n    print(\"Ayo remedial, kamu pasti bisa!\")"
          },
          {
            "kind": "output",
            "text": "Ayo remedial, kamu pasti bisa!"
          },
          {
            "kind": "tip",
            "text": "Tips: else tidak punya kondisi sendiri dan sejajar dengan if (tidak menjorok)."
          }
        ],
        "mascotKey": "wave"
      },
      {
        "id": 5,
        "title": "Banyak Pilihan dengan elif",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Kalau pilihannya lebih dari dua, pakai elif (singkatan else if):"
          },
          {
            "kind": "code",
            "text": "suhu = 30\nif suhu > 32:\n    print(\"Panas sekali!\")\nelif suhu > 25:\n    print(\"Hangat\")\nelse:\n    print(\"Sejuk\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Hangat."
          },
          {
            "kind": "paragraph",
            "text": "Python memeriksa kondisi dari atas ke bawah. Begitu menemukan kondisi yang benar, ia menjalankan aksinya lalu berhenti memeriksa sisanya."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Kondisi dan aksi dalam keputusan sehari-hari",
      "Menulis if dengan titik dua dan indentasi",
      "Operator perbandingan == != > < >= <=",
      "Memakai else dan elif"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Sama Persis",
        "prompt": "Tanda apa yang dipakai untuk memeriksa apakah dua nilai sama?",
        "correctAnswer": "==",
        "explanation": {
          "correct": "Dua tanda == dipakai untuk membandingkan.",
          "wrong": "Satu = untuk menyimpan, != artinya tidak sama. Untuk \"sama dengan\" pakai ==."
        },
        "options": [
          "=",
          "==",
          "!=",
          ">="
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Yang Ketinggalan",
        "prompt": "Lengkapi baris if berikut.",
        "correctAnswer": ":",
        "explanation": {
          "correct": "Baris if selalu diakhiri titik dua.",
          "wrong": "Bukan titik koma atau koma. Baris if diakhiri titik dua :."
        },
        "codeTemplate": "skor = 70\nif skor > 50___\n    print(\"Hebat!\")",
        "chips": [
          ":",
          ";",
          ","
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Cek Kelulusan",
        "prompt": "Susun kode agar program menampilkan Lulus jika nilai minimal 75, dan Remedial jika kurang.",
        "correctAnswer": "nilai = int(input(\"Nilai: \"))\nif nilai >= 75:\n    print(\"Lulus\")\nelse:\n    print(\"Remedial\")",
        "explanation": {
          "correct": "Ambil nilai dulu, periksa kondisinya, lalu pilih aksi yang sesuai.",
          "wrong": "Nilai harus diminta sebelum diperiksa. Aksi \"Lulus\" ada di bawah if, aksi \"Remedial\" di bawah else."
        },
        "correctOrder": [
          "nilai = int(input(\"Nilai: \"))",
          "if nilai >= 75:",
          "    print(\"Lulus\")",
          "else:",
          "    print(\"Remedial\")"
        ],
        "stepItems": [
          "else:",
          "    print(\"Lulus\")",
          "nilai = int(input(\"Nilai: \"))",
          "    print(\"Remedial\")",
          "if nilai >= 75:"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Uang Jajan",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "Beli pensil warna",
        "explanation": {
          "correct": "15000 tidak mencapai 20000, tapi sudah lebih dari 10000. Begitu satu kondisi benar, sisanya tidak diperiksa.",
          "wrong": "Periksa dari atas: 15000 >= 20000 salah, 15000 >= 10000 benar. Hanya satu aksi yang dijalankan."
        },
        "options": [
          "Beli buku cerita",
          "Beli pensil warna",
          "Menabung dulu",
          "Beli pensil warna dan Menabung dulu"
        ],
        "codeSnippet": "uang = 15000\nif uang >= 20000:\n    print(\"Beli buku cerita\")\nelif uang >= 10000:\n    print(\"Beli pensil warna\")\nelse:\n    print(\"Menabung dulu\")"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Sapaan Otomatis",
        "prompt": "Buat program yang meminta jam (angka 0–23). Jika jam kurang dari 12, tampilkan Selamat pagi. Selain itu, tampilkan Selamat siang.",
        "correctAnswer": "jam = int(input(\"Jam berapa sekarang? \"))\nif jam < 12:\n    print(\"Selamat pagi\")\nelse:\n    print(\"Selamat siang\")",
        "explanation": {
          "correct": "Programmu sudah bisa menyapa sesuai waktu!",
          "wrong": "Ubah input jadi angka dengan int(), tulis if dengan titik dua, lalu aksi yang menjorok 4 spasi, dan else untuk pilihan lainnya."
        },
        "acceptedAnswers": [
          "jam = int(input(\"Jam berapa sekarang? \"))\nif jam < 12:\n    print(\"Selamat pagi\")\nelse:\n    print(\"Selamat siang\")",
          "jam = int(input(\"Jam berapa sekarang? \"))\nif jam >= 12:\n    print(\"Selamat siang\")\nelse:\n    print(\"Selamat pagi\")"
        ]
      }
    ],
    "contentVersion": "89205936de62"
  },
  {
    "id": 5,
    "unitNumber": 2,
    "unit": "Unit 2 · Percabangan & Perulangan",
    "title": "For Loop: Mengulang Tanpa Capek",
    "subtitle": "for, range(), perulangan daftar",
    "xp": 50,
    "description": "Siswa bisa mengulang perintah dengan for dan range(), membaca nilai penghitung, dan mengulang isi sebuah daftar.",
    "slides": [
      {
        "id": 1,
        "title": "Disuruh Menulis 100 Kali?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Bayangkan kamu disuruh menulis \"Saya akan mengerjakan PR\" sebanyak 100 kali. Capek dan membosankan, kan?"
          },
          {
            "kind": "paragraph",
            "text": "Komputer tidak pernah capek. Kita cukup menulis perintahnya sekali, lalu menyuruh komputer mengulanginya. Cara ini disebut perulangan atau loop."
          },
          {
            "kind": "callout",
            "text": "Kegiatan apa yang kamu lakukan berulang-ulang setiap hari?"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 2,
        "title": "Bentuk for dan range()",
        "blocks": [
          {
            "kind": "code",
            "text": "for i in range(3):\n    print(\"Semangat!\")"
          },
          {
            "kind": "output",
            "text": "Semangat!\nSemangat!\nSemangat!"
          },
          {
            "kind": "paragraph",
            "text": "Ingat empat hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- Diawali kata for\n- i adalah variabel penghitung (boleh diberi nama lain)\n- range(3) artinya ulangi 3 kali\n- Ada titik dua : dan baris yang diulang menjorok 4 spasi, sama seperti if"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Mengintip Si Penghitung",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Setiap putaran, isi i berubah. Coba tampilkan:"
          },
          {
            "kind": "code",
            "text": "for i in range(5):\n    print(i)"
          },
          {
            "kind": "output",
            "text": "0\n1\n2\n3\n4"
          },
          {
            "kind": "warning",
            "text": "Awas! Python mulai menghitung dari 0, dan berhenti sebelum angka di dalam range. Jadi range(5) menghasilkan 0 sampai 4, tetap 5 putaran."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Atur Awal, Akhir, dan Lompatan",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "range() bisa diisi lebih dari satu angka:"
          },
          {
            "kind": "paragraph",
            "text": "Bentuk — Artinya — Menghasilkan\nrange(5) — 0 sampai sebelum 5 — 0, 1, 2, 3, 4\nrange(1, 6) — Mulai 1, berhenti sebelum 6 — 1, 2, 3, 4, 5\nrange(2, 11, 2) — Mulai 2, sebelum 11, lompat 2 — 2, 4, 6, 8, 10"
          },
          {
            "kind": "paragraph",
            "text": "Contoh naik tangga gedung sekolah:"
          },
          {
            "kind": "code",
            "text": "for lantai in range(1, 4):\n    print(\"Naik ke lantai\", lantai)"
          },
          {
            "kind": "output",
            "text": "Naik ke lantai 1\nNaik ke lantai 2\nNaik ke lantai 3"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Mengulang Isi Daftar",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Selain angka, for bisa mengambil isi sebuah daftar (list) satu per satu. Daftar ditulis di dalam kurung siku [ ], setiap isi dipisah koma."
          },
          {
            "kind": "code",
            "text": "buah = [\"apel\", \"jeruk\", \"mangga\"]\nfor b in buah:\n    print(\"Aku suka\", b)"
          },
          {
            "kind": "output",
            "text": "Aku suka apel\nAku suka jeruk\nAku suka mangga"
          },
          {
            "kind": "tip",
            "text": "Tips: for juga bisa digabung dengan if dan variabel dari level sebelumnya. Kamu akan sering memakainya bersama-sama."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Kegunaan perulangan",
      "Menulis for dengan range()",
      "Penghitung mulai dari 0",
      "range dengan awal, akhir, dan lompatan",
      "Mengulang isi daftar"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Isi range",
        "prompt": "Angka apa saja yang dihasilkan range(1, 4)?",
        "correctAnswer": "1, 2, 3",
        "explanation": {
          "correct": "range berhenti sebelum angka terakhir, jadi 4 tidak ikut.",
          "wrong": "Mulai dari angka pertama (1) dan berhenti sebelum angka kedua (4)."
        },
        "options": [
          "1, 2, 3, 4",
          "1, 2, 3",
          "0, 1, 2, 3",
          "4"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Ulangi 5 Kali",
        "prompt": "Lengkapi kode agar tulisan Halo! tampil 5 kali.",
        "correctAnswer": "range",
        "explanation": {
          "correct": "range(5) membuat perulangan berjalan 5 kali.",
          "wrong": "Untuk menentukan berapa kali perulangan berjalan, pakai range()."
        },
        "codeTemplate": "for i in _____(5):\n    print(\"Halo!\")",
        "chips": [
          "range",
          "print",
          "input"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Hitung Lalu Selesai",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\nHitung: 1\nHitung: 2\nHitung: 3\nSelesai!",
        "correctAnswer": "for i in range(1, 4):\n    print(\"Hitung:\", i)\nprint(\"Selesai!\")",
        "explanation": {
          "correct": "Baris yang menjorok diulang, baris yang tidak menjorok dijalankan sekali setelah perulangan selesai.",
          "wrong": "for harus di atas baris yang diulang. \"Selesai!\" tidak menjorok, jadi berada di luar perulangan dan muncul paling akhir."
        },
        "correctOrder": [
          "for i in range(1, 4):",
          "    print(\"Hitung:\", i)",
          "print(\"Selesai!\")"
        ],
        "stepItems": [
          "print(\"Selesai!\")",
          "    print(\"Hitung:\", i)",
          "for i in range(1, 4):"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Celengan Ajaib",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "6",
        "explanation": {
          "correct": "Putaran 1: 0 + 1 = 1. Putaran 2: 1 + 2 = 3. Putaran 3: 3 + 3 = 6.",
          "wrong": "i berisi 1, 2, lalu 3, dan setiap putaran ditambahkan ke total. Jadi 1 + 2 + 3 = 6."
        },
        "options": [
          "3",
          "6",
          "10",
          "0"
        ],
        "codeSnippet": "total = 0\nfor i in range(1, 4):\n    total = total + i\nprint(total)"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Kelipatan 5",
        "prompt": "Buat program yang menampilkan bilangan kelipatan 5 dari 5 sampai 50, satu angka per baris.",
        "correctAnswer": "for i in range(5, 51, 5):\n    print(i)",
        "explanation": {
          "correct": "Hebat! Satu baris perulangan bisa menggantikan 10 baris print.",
          "wrong": "Pakai range dengan tiga angka: mulai 5, berhenti sebelum 51, lompat 5. Jangan lupa titik dua dan indentasi."
        },
        "acceptedAnswers": [
          "for i in range(5, 51, 5):\n    print(i)",
          "for i in range(1, 11):\n    print(5 * i)"
        ]
      }
    ],
    "contentVersion": "89205936de62"
  },
  {
    "id": 6,
    "unitNumber": 2,
    "unit": "Unit 2 · Percabangan & Perulangan",
    "title": "Percabangan Lanjut: and, or, not & match-case",
    "subtitle": "and, or, not, match-case",
    "xp": 50,
    "description": "Siswa bisa menggabungkan beberapa syarat dengan and, or, not, dan memakai match-case, yaitu versi switch di Python. Catatan teknis: match-case butuh Python 3.10 ke atas.",
    "slides": [
      {
        "id": 1,
        "title": "Dua Syarat Sekaligus",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Ibu berkata: \"Kamu boleh main game jika PR sudah selesai dan sudah makan siang.\""
          },
          {
            "kind": "paragraph",
            "text": "Di sini ada dua syarat, dan keduanya harus terpenuhi. Kalau baru salah satu, kamu belum boleh main."
          },
          {
            "kind": "paragraph",
            "text": "Di level ini kamu belajar membuat program yang bisa memeriksa beberapa syarat sekaligus."
          },
          {
            "kind": "callout",
            "text": "Kalau ibu bilang \"PR selesai atau sudah makan\", apa bedanya?"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "and dan or",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "- and (dan) bernilai benar hanya jika semua syarat benar.\n- or (atau) bernilai benar jika minimal satu syarat benar."
          },
          {
            "kind": "paragraph",
            "text": "Syarat A — Syarat B — A and B — A or B\nTrue — True — True — True\nTrue — False — False — True\nFalse — True — False — True\nFalse — False — False — False"
          },
          {
            "kind": "code",
            "text": "pr_selesai = True\nsudah_makan = False\nif pr_selesai and sudah_makan:\n    print(\"Boleh main game!\")\nelse:\n    print(\"Selesaikan dulu, ya.\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Selesaikan dulu, ya. karena sudah_makan masih False."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "not, Si Pembalik",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "not membalik nilai: True jadi False, False jadi True."
          },
          {
            "kind": "code",
            "text": "hujan = False\nif not hujan:\n    print(\"Ayo main bola di lapangan!\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Ayo main bola di lapangan! karena \"tidak hujan\" bernilai benar."
          },
          {
            "kind": "tip",
            "text": "Tips: Gabungkan dengan perbandingan untuk memeriksa rentang nilai:"
          },
          {
            "kind": "code",
            "text": "nilai = 85\nif nilai >= 0 and nilai <= 100:\n    print(\"Nilai valid\")"
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Switch di Python: match-case",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Di bahasa pemrograman lain ada perintah switch untuk memilih satu dari banyak pilihan. Di Python, namanya match-case."
          },
          {
            "kind": "code",
            "text": "hari = \"Senin\"\nmatch hari:\n    case \"Sabtu\":\n        print(\"Ekskul pramuka\")\n    case \"Minggu\":\n        print(\"Libur!\")\n    case _:\n        print(\"Waktunya sekolah\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Waktunya sekolah."
          },
          {
            "kind": "tip",
            "text": "Ingat tiga hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- match diikuti variabel yang mau dicocokkan\n- Setiap case berisi satu pilihan dan aksinya\n- case _ artinya \"selain semua pilihan di atas\", mirip else. Tulis paling bawah."
          },
          {
            "kind": "tip",
            "text": "Tahukah kamu? Satu case bisa berisi beberapa pilihan dengan tanda |: case \"Sabtu\" | \"Minggu\":"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Pakai if atau match?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pakai if — Pakai match\nMemeriksa rentang: nilai >= 75 — Mencocokkan satu nilai dengan pilihan tetap\nMenggabungkan syarat dengan and/or — Menu bernomor, nama hari, kode warna"
          },
          {
            "kind": "paragraph",
            "text": "Contoh match untuk menu aplikasi:"
          },
          {
            "kind": "code",
            "text": "menu = int(input(\"Pilih menu (1-3): \"))\nmatch menu:\n    case 1:\n        print(\"Mulai belajar\")\n    case 2:\n        print(\"Lihat skor\")\n    case 3:\n        print(\"Keluar\")\n    case _:\n        print(\"Menu tidak ada\")"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik 2, hasilnya Lihat skor."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "and dan or untuk menggabungkan syarat",
      "not untuk membalik nilai",
      "match-case sebagai switch di Python",
      "Memilih antara if dan match"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Hasil and",
        "prompt": "Apa hasil dari True and False?",
        "correctAnswer": "False",
        "explanation": {
          "correct": "and hanya bernilai benar jika kedua sisinya benar.",
          "wrong": "Ada satu sisi yang False, jadi hasil and ikut False."
        },
        "options": [
          "True",
          "False",
          "TrueFalse",
          "Error"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Lampu Lalu Lintas",
        "prompt": "Lengkapi kode berikut.",
        "correctAnswer": "case",
        "explanation": {
          "correct": "Setiap pilihan di dalam match diawali kata case.",
          "wrong": "Di dalam match, setiap pilihan ditulis dengan case, bukan if."
        },
        "codeTemplate": "warna = \"merah\"\nmatch warna:\n    ____ \"merah\":\n        print(\"Berhenti\")\n    case _:\n        print(\"Hati-hati\")",
        "chips": [
          "case",
          "if",
          "when"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Nilai Huruf",
        "prompt": "Susun kode agar program menampilkan Istimewa jika nilai huruf A, dan Tetap semangat untuk huruf lain.",
        "correctAnswer": "huruf = input(\"Nilai huruf: \")\nmatch huruf:\n    case \"A\":\n        print(\"Istimewa\")\n    case _:\n        print(\"Tetap semangat\")",
        "explanation": {
          "correct": "Ambil input dulu, cocokkan dengan match, dan case _ ditaruh paling akhir.",
          "wrong": "case _ menangkap semua sisa pilihan, jadi harus paling bawah. Kalau di atas, case \"A\" tidak akan pernah dicek."
        },
        "correctOrder": [
          "huruf = input(\"Nilai huruf: \")",
          "match huruf:",
          "    case \"A\":",
          "        print(\"Istimewa\")",
          "    case _:",
          "        print(\"Tetap semangat\")"
        ],
        "stepItems": [
          "    case _:",
          "match huruf:",
          "        print(\"Istimewa\")",
          "huruf = input(\"Nilai huruf: \")",
          "        print(\"Tetap semangat\")",
          "    case \"A\":"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Tiket Bioskop",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "Boleh masuk",
        "explanation": {
          "correct": "umur >= 13 sudah benar, dan dengan or satu syarat benar sudah cukup.",
          "wrong": "Walau punya_tiket bernilai False, or hanya butuh satu syarat yang benar."
        },
        "options": [
          "Boleh masuk",
          "Tidak boleh masuk",
          "Boleh masuk dan Tidak boleh masuk",
          "Error"
        ],
        "codeSnippet": "umur = 14\npunya_tiket = False\nif umur >= 13 or punya_tiket:\n    print(\"Boleh masuk\")\nelse:\n    print(\"Tidak boleh masuk\")"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Suhu Nyaman",
        "prompt": "Buat program yang meminta suhu (bilangan bulat). Jika suhu antara 20 sampai 30 (termasuk 20 dan 30), tampilkan Nyaman. Selain itu, tampilkan Tidak nyaman.",
        "correctAnswer": "suhu = int(input(\"Suhu: \"))\nif suhu >= 20 and suhu <= 30:\n    print(\"Nyaman\")\nelse:\n    print(\"Tidak nyaman\")",
        "explanation": {
          "correct": "Kamu sudah bisa memeriksa rentang nilai dengan dua syarat sekaligus.",
          "wrong": "Suhu harus memenuhi dua syarat sekaligus: suhu >= 20 dan suhu <= 30. Gabungkan dengan and."
        },
        "acceptedAnswers": [
          "suhu = int(input(\"Suhu: \"))\nif suhu >= 20 and suhu <= 30:\n    print(\"Nyaman\")\nelse:\n    print(\"Tidak nyaman\")",
          "suhu = int(input(\"Suhu: \"))\nif 20 <= suhu <= 30:\n    print(\"Nyaman\")\nelse:\n    print(\"Tidak nyaman\")"
        ]
      }
    ],
    "contentVersion": "89205936de62"
  },
  {
    "id": 7,
    "unitNumber": 2,
    "unit": "Unit 2 · Percabangan & Perulangan",
    "title": "While Loop: Ulangi Selama Masih Benar",
    "subtitle": "while, break, continue, do-while",
    "xp": 50,
    "description": "Siswa bisa memakai while, menghentikan atau melewati putaran dengan break dan continue, dan membuat pola do-while di Python.",
    "slides": [
      {
        "id": 1,
        "title": "Sampai Kapan Diulang?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Di Level 5, kamu memakai for saat jumlah ulangannya sudah pasti, misalnya 5 kali."
          },
          {
            "kind": "paragraph",
            "text": "Tapi ada kalanya kita tidak tahu berapa kali harus mengulang. Contohnya bermain game: kamu terus bermain selama nyawa masih ada. Untuk kasus seperti ini, Python punya while."
          },
          {
            "kind": "callout",
            "text": "Sebutkan kegiatan yang kamu ulangi \"selama\" sesuatu masih terjadi!"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Bentuk while",
        "blocks": [
          {
            "kind": "code",
            "text": "nyawa = 3\nwhile nyawa > 0:\n    print(\"Nyawa tersisa:\", nyawa)\n    nyawa = nyawa - 1\nprint(\"Game over!\")"
          },
          {
            "kind": "output",
            "text": "Nyawa tersisa: 3\nNyawa tersisa: 2\nNyawa tersisa: 1\nGame over!"
          },
          {
            "kind": "tip",
            "text": "Ingat tiga hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- while diikuti kondisi, titik dua, dan baris yang menjorok\n- Perulangan berjalan selama kondisinya benar\n- Di dalam perulangan harus ada yang mengubah variabel di kondisi, supaya suatu saat berhenti"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Awas! Perulangan Tanpa Akhir",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Coba lihat kode ini. Apa yang hilang?"
          },
          {
            "kind": "code",
            "text": "nyawa = 3\nwhile nyawa > 0:\n    print(\"Nyawa tersisa:\", nyawa)"
          },
          {
            "kind": "paragraph",
            "text": "Baris nyawa = nyawa - 1 tidak ada, jadi nyawa selalu 3. Kondisinya selalu benar, dan program tidak pernah berhenti. Ini disebut infinite loop."
          },
          {
            "kind": "paragraph",
            "text": "Ingat ciri algoritma yang baik dari Level 1: memiliki akhir. Pastikan perulanganmu punya jalan keluar."
          },
          {
            "kind": "tip",
            "text": "Tips: Kalau program terlanjur berputar terus di komputer, tekan Ctrl + C untuk menghentikannya."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 4,
        "title": "break dan continue",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Dua perintah ini bisa dipakai di for maupun while:"
          },
          {
            "kind": "paragraph",
            "text": "- break: hentikan perulangan sekarang juga\n- continue: lewati sisa putaran ini, lanjut ke putaran berikutnya"
          },
          {
            "kind": "code",
            "text": "for angka in range(1, 6):\n    if angka == 3:\n        continue\n    if angka == 5:\n        break\n    print(angka)"
          },
          {
            "kind": "output",
            "text": "1\n2\n4"
          },
          {
            "kind": "paragraph",
            "text": "Angka 3 dilewati karena continue. Saat sampai di 5, perulangan dihentikan oleh break, jadi 5 tidak tampil."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 5,
        "title": "Do-While ala Python",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Di bahasa lain ada do-while: perintah dijalankan dulu minimal sekali, baru kondisinya dicek. Python tidak punya do-while, tapi kita bisa membuatnya dengan while True dan break:"
          },
          {
            "kind": "code",
            "text": "while True:\n    sandi = input(\"Masukkan sandi: \")\n    if sandi == \"algogo\":\n        break\n    print(\"Sandi salah, coba lagi!\")\nprint(\"Berhasil masuk!\")"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik kucing lalu algogo, hasilnya:"
          },
          {
            "kind": "output",
            "text": "Masukkan sandi: kucing\nSandi salah, coba lagi!\nMasukkan sandi: algogo\nBerhasil masuk!"
          },
          {
            "kind": "paragraph",
            "text": "Cara kerjanya: while True artinya \"ulangi terus\". Pertanyaan sandi pasti muncul minimal sekali, dan break menjadi pintu keluarnya."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Kapan memakai while dan kapan for",
      "Menghindari perulangan tanpa akhir",
      "break untuk berhenti, continue untuk melewati",
      "Membuat do-while dengan while True dan break"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Pilih Perulangan",
        "prompt": "Kapan sebaiknya memakai while dibandingkan for?",
        "correctAnswer": "Saat perulangan berjalan selama sebuah syarat masih benar",
        "explanation": {
          "correct": "while cocok saat kita tidak tahu pasti berapa kali harus mengulang.",
          "wrong": "Jika jumlah ulangan sudah pasti, for lebih cocok. while dipakai \"selama\" syarat masih benar."
        },
        "options": [
          "Saat jumlah ulangannya sudah pasti",
          "Saat perulangan berjalan selama sebuah syarat masih benar",
          "Saat hanya ingin menampilkan teks sekali",
          "Saat ingin membuat variabel baru"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Pintu Keluar",
        "prompt": "Lengkapi kode agar perulangan berhenti saat pengguna mengetik t.",
        "correctAnswer": "break",
        "explanation": {
          "correct": "break menghentikan perulangan, lalu program lanjut ke print di bawahnya.",
          "wrong": "continue hanya melewati satu putaran, dan stop bukan perintah Python. Untuk keluar, pakai break."
        },
        "codeTemplate": "while True:\n    jawab = input(\"Lanjut main? (y/t) \")\n    if jawab == \"t\":\n        _____\nprint(\"Sampai jumpa!\")",
        "chips": [
          "break",
          "continue",
          "stop"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Hitung Mundur Roket",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\n3\n2\n1\nMeluncur!",
        "correctAnswer": "hitung = 3\nwhile hitung > 0:\n    print(hitung)\n    hitung = hitung - 1\nprint(\"Meluncur!\")",
        "explanation": {
          "correct": "Tampilkan angkanya dulu, baru dikurangi. Roket siap meluncur!",
          "wrong": "Kalau dikurangi dulu baru ditampilkan, yang muncul 2, 1, 0. Dan \"Meluncur!\" harus di luar perulangan."
        },
        "correctOrder": [
          "hitung = 3",
          "while hitung > 0:",
          "    print(hitung)",
          "    hitung = hitung - 1",
          "print(\"Meluncur!\")"
        ],
        "stepItems": [
          "    hitung = hitung - 1",
          "print(\"Meluncur!\")",
          "hitung = 3",
          "    print(hitung)",
          "while hitung > 0:"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Lipat Ganda",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "32",
        "explanation": {
          "correct": "x menjadi 2, 4, 8, 16, lalu 32. Saat x = 32, kondisi x < 20 salah dan perulangan berhenti.",
          "wrong": "Saat x = 16, kondisi 16 < 20 masih benar, jadi x dikali 2 sekali lagi menjadi 32."
        },
        "options": [
          "16",
          "32",
          "20",
          "64"
        ],
        "codeSnippet": "x = 1\nwhile x < 20:\n    x = x * 2\nprint(x)"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Tebak Angka",
        "prompt": "Buat program yang terus meminta pengguna menebak angka sampai ia mengetik 7, lalu tampilkan Benar!",
        "correctAnswer": "while True:\n    tebakan = int(input(\"Tebak angka: \"))\n    if tebakan == 7:\n        break\nprint(\"Benar!\")",
        "explanation": {
          "correct": "Kamu baru saja membuat game tebak angka sederhana!",
          "wrong": "Pakai while True agar pertanyaan diulang terus, lalu break saat tebakannya 7. Jangan lupa int() karena yang dibandingkan angka."
        },
        "acceptedAnswers": [
          "while True:\n    tebakan = int(input(\"Tebak angka: \"))\n    if tebakan == 7:\n        break\nprint(\"Benar!\")",
          "tebakan = 0\nwhile tebakan != 7:\n    tebakan = int(input(\"Tebak angka: \"))\nprint(\"Benar!\")"
        ]
      }
    ],
    "contentVersion": "89205936de62"
  },
  {
    "id": 8,
    "unitNumber": 3,
    "unit": "Unit 3 · Ujian Akhir",
    "title": "Ujian Akhir: Tantangan Master Algogo",
    "subtitle": "15 soal gabungan, lencana Master Algogo",
    "xp": 150,
    "description": "Ujian berisi 15 soal gabungan dari Level 1–7, tanpa halaman materi. Setiap jenis soal muncul 3 kali. Siswa lulus jika minimal 11 dari 15 soal benar (sekitar 70%), lalu mendapat +150 XP dan lencana Master Algogo.",
    "slides": [],
    "summaryPoints": [],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Instruksi Kurang Jelas",
        "prompt": "Instruksi \"Buat air minum secukupnya\" paling kurang memenuhi ciri algoritma yang mana?",
        "correctAnswer": "Jelas",
        "explanation": {
          "correct": "Kata \"secukupnya\" bisa diartikan berbeda oleh tiap orang, jadi instruksinya tidak jelas.",
          "wrong": "Masalahnya ada di kata \"secukupnya\". Instruksi yang jelas menyebut ukuran pasti, misalnya 200 ml."
        },
        "options": [
          "Terurut",
          "Jelas",
          "Memiliki akhir",
          "Sesuai tujuan"
        ],
        "reviewLevelIds": [
          1
        ]
      },
      {
        "id": 2,
        "type": "choice",
        "title": "Pilihan Ganda: Tipe Data",
        "prompt": "Variabel tinggi = 1.55 menyimpan tipe data apa?",
        "correctAnswer": "float (bilangan desimal)",
        "explanation": {
          "correct": "Angka yang memakai titik desimal termasuk float.",
          "wrong": "1.55 punya koma (ditulis titik), jadi bukan bilangan bulat. Tanpa tanda kutip, jadi bukan teks."
        },
        "options": [
          "int (bilangan bulat)",
          "float (bilangan desimal)",
          "str (teks)",
          "bool (benar/salah)"
        ],
        "reviewLevelIds": [
          2
        ]
      },
      {
        "id": 3,
        "type": "choice",
        "title": "Pilihan Ganda: Tidak Pernah Berhenti",
        "prompt": "Perulangan mana yang tidak akan pernah berhenti?",
        "correctAnswer": "while True: tanpa break di dalamnya",
        "explanation": {
          "correct": "while True selalu benar. Tanpa break, tidak ada jalan keluar.",
          "wrong": "for selalu berhenti setelah semua putaran selesai. while True butuh break sebagai pintu keluar."
        },
        "options": [
          "for i in range(10):",
          "while True: tanpa break di dalamnya",
          "while x < 5: dengan x = x + 1 di dalamnya",
          "for b in buah:"
        ],
        "reviewLevelIds": [
          7
        ]
      },
      {
        "id": 4,
        "type": "blank",
        "title": "Isian Bagian Kosong: Nilai Valid",
        "prompt": "Lengkapi kode agar program menampilkan Lulus hanya untuk nilai 75 sampai 100.",
        "correctAnswer": "and",
        "explanation": {
          "correct": "Kedua syarat harus terpenuhi, jadi pakai and.",
          "wrong": "Dengan or, nilai 150 juga akan lulus. Kita butuh kedua syarat benar sekaligus."
        },
        "codeTemplate": "nilai = int(input(\"Nilai: \"))\nif nilai >= 75 ___ nilai <= 100:\n    print(\"Lulus\")",
        "chips": [
          "and",
          "or",
          "not"
        ],
        "reviewLevelIds": [
          3,
          6
        ]
      },
      {
        "id": 5,
        "type": "blank",
        "title": "Isian Bagian Kosong: Bilangan Genap",
        "prompt": "Lengkapi kode agar tampil 2, 4, 6, 8, 10.",
        "correctAnswer": "2",
        "explanation": {
          "correct": "Angka ketiga di range adalah lompatan. Lompat 2 dari angka 2 menghasilkan bilangan genap.",
          "wrong": "Lompatan 1 akan menampilkan semua angka 2 sampai 10. Supaya genap saja, lompat 2."
        },
        "codeTemplate": "for i in range(2, 11, ___):\n    print(i)",
        "chips": [
          "2",
          "1",
          "10"
        ],
        "reviewLevelIds": [
          5
        ]
      },
      {
        "id": 6,
        "type": "blank",
        "title": "Isian Bagian Kosong: Selain Itu",
        "prompt": "Lengkapi kode agar pilihan selain 1 menampilkan pesan.",
        "correctAnswer": "_",
        "explanation": {
          "correct": "case _ menangkap semua nilai yang tidak cocok dengan case di atasnya.",
          "wrong": "Di bahasa lain dipakai default, tapi di Python ditulis case _."
        },
        "codeTemplate": "match pilihan:\n    case 1:\n        print(\"Main\")\n    case ___:\n        print(\"Pilihan tidak ada\")",
        "chips": [
          "_",
          "else",
          "default"
        ],
        "reviewLevelIds": [
          6
        ]
      },
      {
        "id": 7,
        "type": "order",
        "title": "Susun Kode: Hitung Umur",
        "prompt": "Susun kode agar hasilnya seperti ini (pengguna mengetik Rani dan 2013):\n\nContoh hasil:\nNama: Rani\nTahun lahir: 2013\nRani berumur 13 tahun",
        "correctAnswer": "nama = input(\"Nama: \")\nlahir = int(input(\"Tahun lahir: \"))\numur = 2026 - lahir\nprint(nama, \"berumur\", umur, \"tahun\")",
        "explanation": {
          "correct": "Input dulu, hitung, baru tampilkan. Alur input, proses, output!",
          "wrong": "Umur baru bisa dihitung setelah tahun lahir diketahui, dan pertanyaan nama muncul lebih dulu."
        },
        "correctOrder": [
          "nama = input(\"Nama: \")",
          "lahir = int(input(\"Tahun lahir: \"))",
          "umur = 2026 - lahir",
          "print(nama, \"berumur\", umur, \"tahun\")"
        ],
        "stepItems": [
          "umur = 2026 - lahir",
          "print(nama, \"berumur\", umur, \"tahun\")",
          "nama = input(\"Nama: \")",
          "lahir = int(input(\"Tahun lahir: \"))"
        ],
        "reviewLevelIds": [
          2,
          3
        ]
      },
      {
        "id": 8,
        "type": "order",
        "title": "Susun Kode: Angka Spesial",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\n1\n2\nTiga!\n4\n5",
        "correctAnswer": "for i in range(1, 6):\n    if i == 3:\n        print(\"Tiga!\")\n    else:\n        print(i)",
        "explanation": {
          "correct": "if di dalam for membuat setiap putaran bisa memilih aksinya sendiri.",
          "wrong": "for paling luar, if-else di dalamnya. Aksi \"Tiga!\" ada di bawah if, print(i) di bawah else."
        },
        "correctOrder": [
          "for i in range(1, 6):",
          "    if i == 3:",
          "        print(\"Tiga!\")",
          "    else:",
          "        print(i)"
        ],
        "stepItems": [
          "        print(i)",
          "    if i == 3:",
          "for i in range(1, 6):",
          "    else:",
          "        print(\"Tiga!\")"
        ],
        "reviewLevelIds": [
          4,
          5
        ]
      },
      {
        "id": 9,
        "type": "order",
        "title": "Susun Kode: Brankas Rahasia",
        "prompt": "Susun kode do-while agar program terus meminta sandi sampai pengguna mengetik 1234, lalu menampilkan Terbuka!",
        "correctAnswer": "while True:\n    sandi = input(\"Sandi: \")\n    if sandi == \"1234\":\n        break\nprint(\"Terbuka!\")",
        "explanation": {
          "correct": "Sandi selalu ditanya minimal sekali, dan break membuka jalan keluar.",
          "wrong": "Sandi harus diminta dulu sebelum diperiksa. \"Terbuka!\" ada di luar perulangan, jadi tidak menjorok."
        },
        "correctOrder": [
          "while True:",
          "    sandi = input(\"Sandi: \")",
          "    if sandi == \"1234\":",
          "        break",
          "print(\"Terbuka!\")"
        ],
        "stepItems": [
          "print(\"Terbuka!\")",
          "        break",
          "while True:",
          "    if sandi == \"1234\":",
          "    sandi = input(\"Sandi: \")"
        ],
        "reviewLevelIds": [
          7
        ]
      },
      {
        "id": 10,
        "type": "output",
        "title": "Tebak Output: Isi yang Berubah",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "12",
        "explanation": {
          "correct": "a menjadi 10 − 4 = 6, lalu 6 × 2 = 12.",
          "wrong": "Isi a sudah diganti jadi 6 sebelum dikali 2."
        },
        "options": [
          "12",
          "16",
          "6",
          "20"
        ],
        "codeSnippet": "a = 10\nb = 4\na = a - b\nprint(a * 2)",
        "reviewLevelIds": [
          2,
          3
        ]
      },
      {
        "id": 11,
        "type": "output",
        "title": "Tebak Output: Nilai Rapor",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "B",
        "explanation": {
          "correct": "85 belum mencapai 90, tapi sudah mencapai 80. Setelah itu, kondisi lain tidak diperiksa.",
          "wrong": "Walau 85 juga ≥ 70, Python berhenti di kondisi pertama yang benar, yaitu skor >= 80."
        },
        "options": [
          "A",
          "B",
          "B dan C",
          "C"
        ],
        "codeSnippet": "skor = 85\nif skor >= 90:\n    print(\"A\")\nelif skor >= 80:\n    print(\"B\")\nelif skor >= 70:\n    print(\"C\")\nelse:\n    print(\"D\")",
        "reviewLevelIds": [
          4
        ]
      },
      {
        "id": 12,
        "type": "output",
        "title": "Tebak Output: Lompati Genap",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "1, 3, 5 (masing-masing di baris baru)",
        "explanation": {
          "correct": "Saat i bernilai 2 atau 4, continue melewati print.",
          "wrong": "continue tidak menghentikan perulangan, hanya melewati putaran 2 dan 4."
        },
        "options": [
          "1, 3, 5 (masing-masing di baris baru)",
          "2, 4",
          "1, 2, 3, 4, 5",
          "1"
        ],
        "codeSnippet": "for i in range(1, 6):\n    if i == 2 or i == 4:\n        continue\n    print(i)",
        "reviewLevelIds": [
          5,
          6,
          7
        ]
      },
      {
        "id": 13,
        "type": "write",
        "title": "Tulis Kode: Sambutan",
        "prompt": "Buat program yang menanyakan nama pengguna, lalu menampilkan dua baris. Contoh jika diketik Bima:\n\nContoh hasil:\nSiapa namamu? Bima\nHalo, Bima\nSelamat datang di Algogo!",
        "correctAnswer": "nama = input(\"Siapa namamu? \")\nprint(\"Halo,\", nama)\nprint(\"Selamat datang di Algogo!\")",
        "explanation": {
          "correct": "Programmu bisa menyapa siapa saja!",
          "wrong": "Simpan jawaban input() ke variabel, lalu tampilkan dengan dua print."
        },
        "acceptedAnswers": [
          "nama = input(\"Siapa namamu? \")\nprint(\"Halo,\", nama)\nprint(\"Selamat datang di Algogo!\")"
        ],
        "reviewLevelIds": [
          1,
          3
        ]
      },
      {
        "id": 14,
        "type": "write",
        "title": "Tulis Kode: Menu Es Krim",
        "prompt": "Buat program dengan match-case. Minta angka pilihan (bilangan bulat): 1 tampilkan Cokelat, 2 tampilkan Vanila, 3 tampilkan Stroberi, selain itu tampilkan Pilihan tidak ada.",
        "correctAnswer": "pilihan = int(input(\"Pilih rasa (1-3): \"))\nmatch pilihan:\n    case 1:\n        print(\"Cokelat\")\n    case 2:\n        print(\"Vanila\")\n    case 3:\n        print(\"Stroberi\")\n    case _:\n        print(\"Pilihan tidak ada\")",
        "explanation": {
          "correct": "Mantap! Menu pilihan seperti ini paling rapi ditulis dengan match-case.",
          "wrong": "Ubah input dengan int(), tulis satu case untuk setiap angka, lalu case _ di paling bawah."
        },
        "acceptedAnswers": [
          "pilihan = int(input(\"Pilih rasa (1-3): \"))\nmatch pilihan:\n    case 1:\n        print(\"Cokelat\")\n    case 2:\n        print(\"Vanila\")\n    case 3:\n        print(\"Stroberi\")\n    case _:\n        print(\"Pilihan tidak ada\")",
          "pilihan = int(input(\"Pilih rasa (1-3): \"))\nif pilihan == 1:\n    print(\"Cokelat\")\nelif pilihan == 2:\n    print(\"Vanila\")\nelif pilihan == 3:\n    print(\"Stroberi\")\nelse:\n    print(\"Pilihan tidak ada\")"
        ],
        "reviewLevelIds": [
          6
        ]
      },
      {
        "id": 15,
        "type": "write",
        "title": "Tulis Kode: Jumlah 1 sampai 10",
        "prompt": "Buat program yang menghitung 1 + 2 + 3 + … + 10, lalu menampilkan hasilnya (55).",
        "correctAnswer": "total = 0\nfor i in range(1, 11):\n    total = total + i\nprint(total)",
        "explanation": {
          "correct": "Selamat, ini soal terakhir dan kamu berhasil!",
          "wrong": "Siapkan total = 0, ulangi i dari 1 sampai 10 dengan range(1, 11), tambahkan i ke total setiap putaran, lalu tampilkan total di luar perulangan."
        },
        "acceptedAnswers": [
          "total = 0\nfor i in range(1, 11):\n    total = total + i\nprint(total)",
          "total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)",
          "total = 0\ni = 1\nwhile i <= 10:\n    total = total + i\n    i = i + 1\nprint(total)",
          "total = 0\ni = 1\nwhile i <= 10:\n    total += i\n    i += 1\nprint(total)"
        ],
        "reviewLevelIds": [
          5
        ]
      }
    ],
    "contentVersion": "89205936de62",
    "examIntro": {
      "title": "Siap Jadi Master?",
      "body": "Kamu sudah menyelesaikan semua level. Sekarang saatnya membuktikan kemampuanmu!\n\n- 15 soal dari semua materi\n- Tidak ada halaman materi, jadi andalkan ingatanmu\n- Feedback tetap muncul setelah setiap soal\n- Jawab benar minimal 11 soal untuk lulus"
    },
    "passingCorrectCount": 11
  }
];
