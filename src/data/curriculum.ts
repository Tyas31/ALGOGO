import type { Mascots, Icons, Illustrations } from '@/constants/assets';

export type QuestionType = 'choice' | 'blank' | 'order' | 'output' | 'write';

export type ConceptItemData = {
  iconKey: keyof typeof Icons;
  title: string;
  description: string;
  size?: 'sm' | 'lg';
};

export type LessonBlock = {
  kind: 'paragraph' | 'code' | 'pseudocode' | 'output' | 'callout' | 'warning' | 'tip';
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
    "unit": "Unit 1 · Pengenalan Algoritma",
    "title": "Apa Itu Algoritma?",
    "subtitle": "Pengertian, tujuan, langkah, hasil",
    "xp": 50,
    "description": "Siswa paham apa itu algoritma, bisa menemukan algoritma dalam kegiatan sehari-hari, dan bisa menguraikan tujuan, langkah, dan hasilnya.",
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
        "title": "Algoritma di Sekitar Kita",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Tanpa sadar, kamu menjalankan algoritma setiap hari. Contohnya mencuci tangan:"
          },
          {
            "kind": "paragraph",
            "text": "1. Basahi tangan dengan air.\n2. Tuang sabun ke telapak tangan.\n3. Gosok seluruh tangan selama 20 detik.\n4. Bilas sampai bersih.\n5. Keringkan dengan handuk."
          },
          {
            "kind": "paragraph",
            "text": "Aplikasi di HP juga penuh algoritma. Peta digital memakai algoritma untuk mencari jalan tercepat, dan kalkulator memakai algoritma untuk menghitung."
          },
          {
            "kind": "tip",
            "text": "Tips: Perhatikan kegiatan pagimu: bangun tidur, mandi, sarapan, lalu berangkat sekolah. Itu juga algoritma!"
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Tujuan, Langkah, Hasil",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Setiap algoritma bisa dibedah menjadi tiga bagian. Contohnya algoritma menyeberang jalan:"
          },
          {
            "kind": "paragraph",
            "text": "Bagian — Isi\nTujuan — Sampai di seberang jalan dengan selamat\nLangkah — Berhenti di tepi jalan, lihat kanan, lihat kiri, lihat kanan lagi, lalu menyeberang saat jalan sepi\nHasil — Kamu sudah di seberang jalan dan tetap aman"
          },
          {
            "kind": "paragraph",
            "text": "Kalau hasilnya tidak sesuai tujuan, berarti ada langkah yang salah atau terlewat. Perbaiki langkahnya, lalu coba lagi."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Komputer Butuh Algoritma",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Manusia bisa menebak maksud perintah yang kurang lengkap. Komputer tidak bisa. Komputer hanya mengerjakan persis apa yang diperintahkan, sesuai urutannya."
          },
          {
            "kind": "paragraph",
            "text": "Misalnya kamu menyuruh robot \"buatkan teh\". Robot bingung: gelasnya di mana? Airnya panas atau dingin? Gulanya berapa sendok?"
          },
          {
            "kind": "paragraph",
            "text": "Karena itu, sebelum menulis program, programmer menyusun algoritmanya dulu. Algoritma yang baik membuat programnya benar."
          },
          {
            "kind": "warning",
            "text": "Awas! Komputer tidak bisa menebak. Langkah yang kamu lewatkan tidak akan dikerjakan."
          }
        ],
        "mascotKey": "think"
      }
    ],
    "summaryPoints": [
      "Pengertian algoritma",
      "Algoritma dalam kehidupan sehari-hari",
      "Tujuan, langkah, dan hasil sebuah algoritma",
      "Alasan komputer butuh algoritma"
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
        "type": "blank",
        "title": "Isian Bagian Kosong: Bagian yang Hilang",
        "prompt": "Lengkapi bagian algoritma menyikat gigi berikut.",
        "correctAnswer": "Langkah",
        "explanation": {
          "correct": "Bagian di antara tujuan dan hasil berisi langkah-langkah yang dikerjakan.",
          "wrong": "Algoritma terdiri dari tujuan, langkah, dan hasil. Bagian yang berisi daftar kegiatan adalah langkah."
        },
        "codeTemplate": "Tujuan  : Gigi bersih\n_____ : Ambil sikat, beri pasta, sikat gigi, berkumur\nHasil   : Gigi bersih dan napas segar",
        "chips": [
          "Langkah",
          "Masalah",
          "Alat"
        ]
      },
      {
        "id": 3,
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
        "id": 4,
        "type": "output",
        "title": "Tebak Hasil: Robot Penurut",
        "prompt": "Robot menjalankan algoritma ini persis sesuai urutan. Di kotak nomor berapa robot berhenti?",
        "correctAnswer": "Kotak 5",
        "explanation": {
          "correct": "Dari kotak 1 maju 2 ke kotak 3, mundur 1 ke kotak 2, lalu maju 3 ke kotak 5.",
          "wrong": "Jalankan satu per satu: 1 → 3 → 2 → 5. Robot mengerjakan semua langkah sesuai urutan, termasuk langkah mundur."
        },
        "options": [
          "Kotak 4",
          "Kotak 5",
          "Kotak 6",
          "Kotak 7"
        ],
        "codeSnippet": "Mulai di kotak 1\nMaju 2 kotak\nMundur 1 kotak\nMaju 3 kotak"
      },
      {
        "id": 5,
        "type": "choice",
        "title": "Pilihan Ganda: Komputer Tidak Bisa Menebak",
        "prompt": "Instruksi mana yang bisa dikerjakan komputer tanpa bingung?",
        "correctAnswer": "Tampilkan tulisan \"Halo\" satu kali",
        "explanation": {
          "correct": "Instruksi ini jelas: apa yang dikerjakan dan berapa kali.",
          "wrong": "Kata \"enak\", \"sebentar\", dan \"seperti biasa\" bisa diartikan berbeda. Komputer butuh instruksi yang pasti."
        },
        "options": [
          "Buatkan aku sesuatu yang enak",
          "Tunggu sebentar lalu lanjutkan",
          "Tampilkan tulisan \"Halo\" satu kali",
          "Kerjakan seperti biasanya"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 2,
    "unitNumber": 1,
    "unit": "Unit 1 · Pengenalan Algoritma",
    "title": "Ciri Algoritma yang Baik",
    "subtitle": "Terurut, jelas, sesuai tujuan, memiliki akhir",
    "xp": 50,
    "description": "Siswa bisa menilai algoritma memakai empat ciri algoritma yang baik, lalu memperbaiki algoritma yang keliru.",
    "slides": [
      {
        "id": 1,
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
        "id": 2,
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
        "id": 3,
        "title": "Jelas, Bukan Kira-Kira",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Kata seperti \"secukupnya\", \"sebentar\", atau \"agak\" membuat setiap orang mengerjakannya dengan cara berbeda. Ganti dengan ukuran yang pasti."
          },
          {
            "kind": "paragraph",
            "text": "Kurang jelas — Jelas\nMasak air secukupnya — Masak 400 ml air\nAduk sebentar — Aduk 10 kali\nTunggu sampai matang — Tunggu 3 menit"
          },
          {
            "kind": "tip",
            "text": "Tips: Bayangkan algoritmamu dibaca oleh robot. Kalau robot masih harus bertanya \"berapa?\", instruksinya belum jelas."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 4,
        "title": "Harus Punya Akhir",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Coba perhatikan algoritma ini:"
          },
          {
            "kind": "pseudocode",
            "text": "1. Ambil satu kelereng\n2. Masukkan ke toples\n3. Ulangi langkah 1"
          },
          {
            "kind": "paragraph",
            "text": "Kapan berhentinya? Tidak pernah! Algoritma ini tidak memiliki akhir. Perbaikannya: Ulangi langkah 1 sampai ada 10 kelereng di toples."
          },
          {
            "kind": "warning",
            "text": "Awas! Algoritma tanpa akhir akan membuat program macet. Kamu akan bertemu masalah ini lagi di unit Perulangan."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Memperbaiki Algoritma",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Algoritma menelepon teman ini punya masalah:"
          },
          {
            "kind": "paragraph",
            "text": "1. Bicara dengan teman\n2. Tekan tombol panggil\n3. Cari nama teman di kontak\n4. Buka aplikasi telepon"
          },
          {
            "kind": "paragraph",
            "text": "Urutannya terbalik! Algoritma yang benar: buka aplikasi telepon, cari nama teman, tekan tombol panggil, lalu bicara."
          },
          {
            "kind": "tip",
            "text": "Tips: Saat memeriksa algoritma, jalankan di kepalamu satu langkah demi satu langkah, persis seperti robot."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Algoritma itu seperti resep",
      "Empat ciri algoritma yang baik",
      "Membuat instruksi yang jelas dan punya akhir",
      "Memperbaiki algoritma yang keliru"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Ciri yang Dilanggar",
        "prompt": "Algoritma \"Ambil satu kelereng, lalu ulangi langkah ini\" paling melanggar ciri algoritma yang mana?",
        "correctAnswer": "Memiliki akhir",
        "explanation": {
          "correct": "Tidak ada kapan berhentinya, jadi algoritma ini berjalan selamanya.",
          "wrong": "Masalahnya ada pada \"ulangi\" tanpa batas. Algoritma yang baik harus punya akhir, misalnya \"sampai ada 10 kelereng\"."
        },
        "options": [
          "Terurut",
          "Jelas",
          "Sesuai tujuan",
          "Memiliki akhir"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Ukuran yang Pasti",
        "prompt": "Lengkapi langkah membuat mi agar instruksinya jelas.",
        "correctAnswer": "400 ml",
        "explanation": {
          "correct": "Ukuran pasti seperti 400 ml membuat semua orang mengerjakan langkah yang sama.",
          "wrong": "\"Secukupnya\" dan \"sedikit\" bisa diartikan berbeda oleh tiap orang. Pakai ukuran yang pasti."
        },
        "codeTemplate": "1. Masak _____ air\n2. Masukkan mi lalu masak 3 menit\n3. Tuang bumbu dan aduk 10 kali",
        "chips": [
          "400 ml",
          "secukupnya",
          "sedikit"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Minuman Cokelat",
        "prompt": "Urutkan langkah membuat minuman cokelat.",
        "correctAnswer": "Siapkan gelas, susu, dan bubuk cokelat\nMasukkan bubuk cokelat ke dalam gelas\nTuangkan susu\nAduk hingga tercampur\nSajikan minuman",
        "explanation": {
          "correct": "Bahan disiapkan dulu, dicampur, diaduk, baru disajikan. Lezat!",
          "wrong": "Siapkan semua bahan dulu. Cokelat dan susu harus masuk gelas sebelum diaduk, dan menyajikan selalu paling akhir."
        },
        "correctOrder": [
          "Siapkan gelas, susu, dan bubuk cokelat",
          "Masukkan bubuk cokelat ke dalam gelas",
          "Tuangkan susu",
          "Aduk hingga tercampur",
          "Sajikan minuman"
        ],
        "stepItems": [
          "Aduk hingga tercampur",
          "Siapkan gelas, susu, dan bubuk cokelat",
          "Sajikan minuman",
          "Tuangkan susu",
          "Masukkan bubuk cokelat ke dalam gelas"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Hasil: Berapa Kali?",
        "prompt": "Berapa kali langkah 2 dikerjakan sampai algoritma selesai?",
        "correctAnswer": "3 kali",
        "explanation": {
          "correct": "Ada 3 kelereng dan setiap putaran mengambil 1, jadi langkah 2 dikerjakan 3 kali lalu berhenti.",
          "wrong": "Algoritma ini punya akhir: berhenti saat gelas kosong. 3 kelereng diambil satu per satu, jadi 3 kali."
        },
        "options": [
          "1 kali",
          "2 kali",
          "3 kali",
          "Tidak pernah berhenti"
        ],
        "codeSnippet": "1. Isi gelas dengan 3 kelereng\n2. Ambil 1 kelereng dari gelas\n3. Ulangi langkah 2 sampai gelas kosong"
      },
      {
        "id": 5,
        "type": "choice",
        "title": "Pilihan Ganda: Algoritma Terbaik",
        "prompt": "Manakah algoritma yang paling baik untuk menyalakan komputer?",
        "correctAnswer": "Colokkan kabel, tekan tombol power, tunggu sampai layar menampilkan menu utama",
        "explanation": {
          "correct": "Langkahnya terurut, jelas, sesuai tujuan, dan punya akhir yang pasti.",
          "wrong": "Algoritma yang baik menyebut langkah pasti secara berurutan dan tahu kapan selesai."
        },
        "options": [
          "Tekan tombol apa saja, lalu tunggu",
          "Nyalakan komputer dengan benar",
          "Colokkan kabel, tekan tombol power, tunggu sampai layar menampilkan menu utama",
          "Tunggu, lalu colokkan kabel jika perlu"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 3,
    "unitNumber": 1,
    "unit": "Unit 1 · Pengenalan Algoritma",
    "title": "Pseudocode & Flowchart",
    "subtitle": "Pseudocode, simbol flowchart, tiga pola algoritma",
    "xp": 50,
    "description": "Siswa bisa menulis algoritma sebagai pseudocode, mengenal simbol flowchart, dan mengenali tiga pola algoritma: urutan, pilihan, dan pengulangan.",
    "slides": [
      {
        "id": 1,
        "title": "Menulis Algoritma Seperti Kode",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pseudocode adalah algoritma yang ditulis mirip kode program, tapi masih memakai bahasa sehari-hari. Pseudocode tidak dijalankan komputer. Gunanya untuk merencanakan program sebelum ditulis dalam bahasa pemrograman."
          },
          {
            "kind": "pseudocode",
            "text": "MULAI\n  BACA nama\n  TAMPILKAN \"Halo\", nama\nSELESAI"
          },
          {
            "kind": "tip",
            "text": "Ingat tiga hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- BACA: meminta data, misalnya dari keyboard\n- TAMPILKAN: menampilkan hasil ke layar\n- MULAI dan SELESAI: penanda awal dan akhir algoritma"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 2,
        "title": "Simbol Flowchart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Flowchart adalah algoritma yang digambar dengan simbol dan panah. Setiap simbol punya arti:"
          },
          {
            "kind": "paragraph",
            "text": "Simbol — Nama — Artinya\nOval — Terminal — Mulai atau selesai\nPersegi panjang — Proses — Menghitung atau mengolah data\nJajar genjang — Input/Output — Membaca data atau menampilkan hasil\nBelah ketupat — Keputusan — Memilih jalan: ya atau tidak\nPanah — Garis alir — Menunjukkan urutan langkah"
          },
          {
            "kind": "tip",
            "text": "Tips: Flowchart selalu dibaca dari simbol Mulai, mengikuti arah panah, sampai simbol Selesai."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 3,
        "title": "Tiga Pola Algoritma",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Hampir semua algoritma tersusun dari tiga pola:"
          },
          {
            "kind": "paragraph",
            "text": "1. Urutan: langkah dikerjakan satu per satu dari atas ke bawah.\n2. Pilihan: langkah dipilih berdasarkan syarat. Contoh: jika hujan, bawa payung.\n3. Pengulangan: langkah diulang beberapa kali. Contoh: putari lapangan 3 kali."
          },
          {
            "kind": "paragraph",
            "text": "Di Python nanti, pola pilihan menjadi if, dan pola pengulangan menjadi for serta while."
          }
        ],
        "mascotKey": "wave"
      },
      {
        "id": 4,
        "title": "Pola Pilihan",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pola pilihan ditulis dengan JIKA ... MAKA ... dan SELAIN ITU:"
          },
          {
            "kind": "pseudocode",
            "text": "BACA cuaca\nJIKA cuaca = \"hujan\" MAKA\n  TAMPILKAN \"Bawa payung\"\nSELAIN ITU\n  TAMPILKAN \"Pakai topi\""
          },
          {
            "kind": "paragraph",
            "text": "Jika cuaca berisi \"hujan\", hanya \"Bawa payung\" yang tampil. Selain itu, yang tampil \"Pakai topi\". Hanya satu jalan yang dipilih."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 5,
        "title": "Pola Pengulangan",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pola pengulangan ditulis dengan ULANGI:"
          },
          {
            "kind": "pseudocode",
            "text": "skor = 0\nULANGI 3 KALI\n  skor = skor + 10\nTAMPILKAN skor"
          },
          {
            "kind": "paragraph",
            "text": "Skor bertambah 10 sebanyak 3 kali, jadi yang tampil 30."
          },
          {
            "kind": "warning",
            "text": "Awas! Setiap pengulangan harus punya batas, misalnya \"3 KALI\" atau \"SAMPAI gelas kosong\". Ingat ciri algoritma yang baik: memiliki akhir."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Menulis algoritma sebagai pseudocode",
      "Lima simbol flowchart",
      "Tiga pola algoritma: urutan, pilihan, pengulangan",
      "Membaca JIKA dan ULANGI"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Simbol Keputusan",
        "prompt": "Simbol flowchart apa yang dipakai untuk memilih jalan \"ya\" atau \"tidak\"?",
        "correctAnswer": "Belah ketupat",
        "explanation": {
          "correct": "Belah ketupat adalah simbol keputusan. Dari simbol ini keluar dua jalan: ya dan tidak.",
          "wrong": "Oval untuk mulai/selesai, persegi panjang untuk proses, jajar genjang untuk input/output. Keputusan memakai belah ketupat."
        },
        "options": [
          "Oval",
          "Persegi panjang",
          "Jajar genjang",
          "Belah ketupat"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Lengkapi Pseudocode",
        "prompt": "Lengkapi pseudocode agar \"Lulus\" tampil hanya jika nilai minimal 75.",
        "correctAnswer": "JIKA",
        "explanation": {
          "correct": "JIKA ... MAKA adalah pola pilihan: aksinya hanya dikerjakan saat syaratnya terpenuhi.",
          "wrong": "ULANGI dipakai untuk pengulangan, TAMPILKAN untuk menampilkan. Untuk memilih berdasarkan syarat, pakai JIKA."
        },
        "codeTemplate": "BACA nilai\n_____ nilai >= 75 MAKA\n  TAMPILKAN \"Lulus\"",
        "chips": [
          "JIKA",
          "ULANGI",
          "TAMPILKAN"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Luas Persegi",
        "prompt": "Susun pseudocode untuk menghitung luas persegi.",
        "correctAnswer": "MULAI\nBACA sisi\nHITUNG luas = sisi x sisi\nTAMPILKAN luas\nSELESAI",
        "explanation": {
          "correct": "Mulai, baca data, olah, tampilkan, lalu selesai. Pola urutan yang rapi!",
          "wrong": "Sisi harus dibaca sebelum dihitung, dan luas baru bisa ditampilkan setelah dihitung. MULAI dan SELESAI ada di ujung."
        },
        "correctOrder": [
          "MULAI",
          "BACA sisi",
          "HITUNG luas = sisi x sisi",
          "TAMPILKAN luas",
          "SELESAI"
        ],
        "stepItems": [
          "TAMPILKAN luas",
          "MULAI",
          "HITUNG luas = sisi x sisi",
          "SELESAI",
          "BACA sisi"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Hasil: Angka yang Bertambah",
        "prompt": "Apa yang ditampilkan algoritma berikut?",
        "correctAnswer": "7",
        "explanation": {
          "correct": "angka berubah dari 1 menjadi 3, 5, lalu 7.",
          "wrong": "Setiap putaran angka ditambah 2, sebanyak 3 kali: 1 + 2 + 2 + 2 = 7."
        },
        "options": [
          "3",
          "5",
          "7",
          "9"
        ],
        "codeSnippet": "angka = 1\nULANGI 3 KALI\n  angka = angka + 2\nTAMPILKAN angka"
      },
      {
        "id": 5,
        "type": "choice",
        "title": "Pilihan Ganda: Pola Algoritma",
        "prompt": "\"Bel sekolah berbunyi setiap 45 menit sampai jam pulang\" adalah contoh pola algoritma apa?",
        "correctAnswer": "Pengulangan",
        "explanation": {
          "correct": "Bunyi bel diulang terus setiap 45 menit, dan berhenti saat jam pulang.",
          "wrong": "Ada kegiatan yang terjadi berulang kali dengan batas akhir, jadi ini pola pengulangan."
        },
        "options": [
          "Urutan",
          "Pilihan",
          "Pengulangan",
          "Tidak memakai pola"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 4,
    "unitNumber": 1,
    "unit": "Unit 1 · Pengenalan Algoritma",
    "title": "Memecah Masalah Besar",
    "subtitle": "Dekomposisi, pola, abstraksi",
    "xp": 50,
    "description": "Siswa bisa memecah masalah besar menjadi bagian kecil (dekomposisi), menemukan pola, memilih informasi yang penting (abstraksi), lalu menyusunnya menjadi algoritma.",
    "slides": [
      {
        "id": 1,
        "title": "Masalah Besar Terasa Sulit",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Bayangkan kamu diminta menyiapkan pesta ulang tahun kelas. Kalau dipikirkan sekaligus, rasanya bingung harus mulai dari mana."
          },
          {
            "kind": "paragraph",
            "text": "Coba pecah menjadi bagian kecil: undangan, makanan, dekorasi, dan acara. Setiap bagian lebih mudah dikerjakan, bahkan bisa dibagi ke teman yang berbeda."
          },
          {
            "kind": "callout",
            "text": "Tugas besar apa yang pernah kamu selesaikan dengan cara membaginya menjadi bagian kecil?"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Dekomposisi",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Dekomposisi adalah memecah masalah besar menjadi bagian-bagian kecil yang lebih mudah diselesaikan. Programmer selalu melakukannya sebelum menulis kode."
          },
          {
            "kind": "paragraph",
            "text": "Contohnya membuat game tebak angka:"
          },
          {
            "kind": "paragraph",
            "text": "1. Pilih angka rahasia.\n2. Minta tebakan pemain.\n3. Bandingkan tebakan dengan angka rahasia.\n4. Beri petunjuk \"lebih besar\" atau \"lebih kecil\".\n5. Ulangi sampai tebakan benar."
          },
          {
            "kind": "tip",
            "text": "Tips: Kalau satu bagian masih terasa sulit, pecah lagi bagian itu menjadi langkah yang lebih kecil."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Mencari Pola",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Setelah dipecah, sering ada langkah yang berulang. Langkah berulang itu disebut pola. Contohnya robot menggambar persegi:"
          },
          {
            "kind": "pseudocode",
            "text": "MAJU 1 langkah\nBELOK KANAN\nMAJU 1 langkah\nBELOK KANAN\nMAJU 1 langkah\nBELOK KANAN\nMAJU 1 langkah\nBELOK KANAN"
          },
          {
            "kind": "paragraph",
            "text": "Ada pola \"maju lalu belok kanan\" sebanyak 4 kali. Algoritmanya bisa diringkas:"
          },
          {
            "kind": "pseudocode",
            "text": "ULANGI 4 KALI\n  MAJU 1 langkah\n  BELOK KANAN"
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Abstraksi: Fokus pada yang Penting",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Abstraksi artinya memilih informasi yang penting dan mengabaikan yang tidak perlu. Peta jalur kereta tidak menggambar rumah dan pohon, hanya stasiun dan rutenya, karena itulah yang dibutuhkan penumpang."
          },
          {
            "kind": "paragraph",
            "text": "Untuk algoritma menghitung luas kamar, yang penting hanya panjang dan lebar. Warna cat atau jumlah jendela tidak dibutuhkan."
          },
          {
            "kind": "tip",
            "text": "Ingat tiga hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- Dekomposisi: pecah masalah besar\n- Pola: temukan langkah yang berulang\n- Abstraksi: ambil informasi yang penting saja"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 5,
        "title": "Dari Bagian Kecil ke Algoritma",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Setelah dipecah, setiap bagian disusun kembali secara berurutan menjadi satu algoritma utuh. Contoh algoritma berangkat sekolah:"
          },
          {
            "kind": "pseudocode",
            "text": "BAGIAN 1: Bersiap\n  Mandi, berpakaian, sarapan\nBAGIAN 2: Periksa tas\n  Buku, alat tulis, botol minum\nBAGIAN 3: Berangkat\n  Pamit, lalu jalan ke sekolah"
          },
          {
            "kind": "tip",
            "text": "Tahukah kamu? Dekomposisi, pola, abstraksi, dan algoritma disebut empat pilar berpikir komputasional. Cara berpikir ini berguna bukan hanya untuk pemrograman, tapi juga untuk memecahkan masalah sehari-hari."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Dekomposisi: memecah masalah besar",
      "Mencari pola yang berulang",
      "Abstraksi: memilih informasi penting",
      "Menyusun bagian kecil menjadi algoritma"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Apa Itu Dekomposisi?",
        "prompt": "Apa yang dimaksud dengan dekomposisi?",
        "correctAnswer": "Memecah masalah besar menjadi bagian-bagian kecil",
        "explanation": {
          "correct": "Dekomposisi membuat masalah besar lebih mudah diselesaikan karena dikerjakan per bagian.",
          "wrong": "Mengulang langkah adalah pola, dan menggambar dengan simbol adalah flowchart. Dekomposisi artinya memecah masalah."
        },
        "options": [
          "Menghapus langkah yang tidak perlu",
          "Memecah masalah besar menjadi bagian-bagian kecil",
          "Mengulang langkah yang sama berkali-kali",
          "Menggambar algoritma dengan simbol"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Ringkas dengan Pola",
        "prompt": "Lengkapi pseudocode agar robot menggambar persegi dengan lebih ringkas.",
        "correctAnswer": "ULANGI",
        "explanation": {
          "correct": "Pola \"maju lalu belok kanan\" diulang 4 kali, jadi pakai ULANGI.",
          "wrong": "JIKA dipakai untuk pilihan, BACA untuk meminta data. Langkah berulang ditulis dengan ULANGI."
        },
        "codeTemplate": "_____ 4 KALI\n  MAJU 1 langkah\n  BELOK KANAN",
        "chips": [
          "ULANGI",
          "JIKA",
          "BACA"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Bagian Game Tebak Angka",
        "prompt": "Susun bagian-bagian game tebak angka berikut sesuai urutannya.",
        "correctAnswer": "Pilih angka rahasia\nMinta tebakan pemain\nBandingkan tebakan dengan angka rahasia\nBeri petunjuk lebih besar atau lebih kecil\nUlangi sampai tebakan benar",
        "explanation": {
          "correct": "Masalah besar sudah dipecah dan disusun kembali dengan urutan yang masuk akal.",
          "wrong": "Angka rahasia harus ada sebelum ditebak, tebakan dibandingkan dulu sebelum diberi petunjuk, dan pengulangan ada di akhir."
        },
        "correctOrder": [
          "Pilih angka rahasia",
          "Minta tebakan pemain",
          "Bandingkan tebakan dengan angka rahasia",
          "Beri petunjuk lebih besar atau lebih kecil",
          "Ulangi sampai tebakan benar"
        ],
        "stepItems": [
          "Bandingkan tebakan dengan angka rahasia",
          "Ulangi sampai tebakan benar",
          "Pilih angka rahasia",
          "Beri petunjuk lebih besar atau lebih kecil",
          "Minta tebakan pemain"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Hasil: Langkah Robot",
        "prompt": "Berapa nilai yang ditampilkan algoritma berikut?",
        "correctAnswer": "6",
        "explanation": {
          "correct": "Setiap putaran langkah bertambah 2, sebanyak 3 kali: 0 + 2 + 2 + 2 = 6.",
          "wrong": "Perhatikan pola yang diulang 3 kali. Setiap putaran menambah 2, jadi totalnya 6."
        },
        "options": [
          "2",
          "3",
          "6",
          "8"
        ],
        "codeSnippet": "langkah = 0\nULANGI 3 KALI\n  MAJU 2 langkah\n  langkah = langkah + 2\nTAMPILKAN langkah"
      },
      {
        "id": 5,
        "type": "choice",
        "title": "Pilihan Ganda: Informasi yang Penting",
        "prompt": "Kamu ingin membuat algoritma untuk menghitung luas kamar. Informasi apa yang dibutuhkan?",
        "correctAnswer": "Panjang dan lebar kamar",
        "explanation": {
          "correct": "Itulah abstraksi: luas hanya butuh panjang dan lebar.",
          "wrong": "Luas dihitung dari panjang × lebar. Informasi lain tidak memengaruhi hasilnya, jadi bisa diabaikan."
        },
        "options": [
          "Warna cat dinding",
          "Jumlah jendela",
          "Panjang dan lebar kamar",
          "Nama pemilik kamar"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 5,
    "unitNumber": 1,
    "unit": "Unit 1 · Pengenalan Algoritma",
    "title": "Menelusuri & Memperbaiki Algoritma",
    "subtitle": "Tabel penelusuran, bug, debugging",
    "xp": 50,
    "description": "Siswa bisa menelusuri algoritma memakai tabel, menemukan kesalahan (bug), dan memperbaikinya langkah demi langkah.",
    "slides": [
      {
        "id": 1,
        "title": "Menjadi Komputer Sejenak",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Sebelum algoritma dijalankan komputer, programmer sering \"menjadi komputer\" dulu. Caranya: mengerjakan setiap langkah persis sesuai urutan, lalu mencatat hasilnya."
          },
          {
            "kind": "paragraph",
            "text": "Kegiatan ini disebut menelusuri (tracing). Dengan menelusuri, kesalahan bisa ditemukan sebelum program dibuat."
          },
          {
            "kind": "callout",
            "text": "Pernahkah kamu memeriksa ulang jawaban PR matematika langkah demi langkah? Itu juga menelusuri!"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Tabel Penelusuran",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Saat ada data yang berubah, catat isinya di tabel:"
          },
          {
            "kind": "pseudocode",
            "text": "uang = 5000\nuang = uang + 2000\nuang = uang - 3000\nTAMPILKAN uang"
          },
          {
            "kind": "paragraph",
            "text": "Baris — Isi uang\n1 — 5000\n2 — 7000\n3 — 4000"
          },
          {
            "kind": "paragraph",
            "text": "Yang ditampilkan: 4000."
          },
          {
            "kind": "tip",
            "text": "Tips: Selalu pakai isi terbaru dari baris sebelumnya, bukan isi awalnya."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Menelusuri Pilihan",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Untuk pola pilihan, periksa syaratnya dulu, lalu ikuti satu jalan saja:"
          },
          {
            "kind": "pseudocode",
            "text": "nilai = 70\nJIKA nilai >= 75 MAKA\n  TAMPILKAN \"Lulus\"\nSELAIN ITU\n  TAMPILKAN \"Remedial\""
          },
          {
            "kind": "paragraph",
            "text": "70 tidak lebih dari atau sama dengan 75, jadi syaratnya salah. Jalan SELAIN ITU yang dipilih, dan yang tampil adalah \"Remedial\"."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Bug: Kesalahan dalam Algoritma",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Kesalahan dalam algoritma atau program disebut bug. Contohnya algoritma keliling persegi ini:"
          },
          {
            "kind": "pseudocode",
            "text": "BACA sisi\nkeliling = sisi + 4\nTAMPILKAN keliling"
          },
          {
            "kind": "paragraph",
            "text": "Untuk sisi 5, hasilnya 9. Padahal keliling persegi 5 × 4 = 20. Bug-nya ada di baris 2: seharusnya dikali 4, bukan ditambah 4."
          },
          {
            "kind": "tip",
            "text": "Tahukah kamu? Istilah bug populer sejak 1947, saat seekor ngengat ditemukan tersangkut di dalam komputer Harvard Mark II dan membuatnya bermasalah."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Langkah Memperbaiki Bug",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Memperbaiki bug disebut debugging. Lakukan dengan urutan berikut:"
          },
          {
            "kind": "paragraph",
            "text": "1. Telusuri algoritmanya dengan contoh data.\n2. Bandingkan hasilnya dengan hasil yang diharapkan.\n3. Temukan langkah yang menjadi penyebab kesalahan.\n4. Perbaiki langkah itu, lalu uji lagi."
          },
          {
            "kind": "warning",
            "text": "Awas! Setelah memperbaiki, selalu uji lagi. Kadang perbaikan satu baris memunculkan bug baru di tempat lain."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Menelusuri algoritma langkah demi langkah",
      "Mencatat isi data dengan tabel penelusuran",
      "Pengertian bug",
      "Empat langkah debugging"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Apa Itu Bug?",
        "prompt": "Apa yang dimaksud dengan bug?",
        "correctAnswer": "Kesalahan dalam algoritma atau program yang membuat hasilnya tidak sesuai",
        "explanation": {
          "correct": "Bug adalah kesalahan dalam algoritma atau program. Memperbaikinya disebut debugging.",
          "wrong": "Walau namanya berarti serangga, dalam pemrograman bug adalah kesalahan yang membuat hasil tidak sesuai harapan."
        },
        "options": [
          "Serangga yang merusak kabel komputer",
          "Kesalahan dalam algoritma atau program yang membuat hasilnya tidak sesuai",
          "Program yang berjalan terlalu cepat",
          "Nama lain dari algoritma"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Perbaiki Keliling",
        "prompt": "Lengkapi pseudocode agar keliling persegi dihitung dengan benar.",
        "correctAnswer": "x",
        "explanation": {
          "correct": "Keliling persegi adalah sisi dikali 4, misalnya 5 × 4 = 20.",
          "wrong": "Keliling persegi menjumlahkan 4 sisi yang sama panjang, sama dengan sisi dikali 4."
        },
        "codeTemplate": "BACA sisi\nkeliling = sisi _____ 4\nTAMPILKAN keliling",
        "chips": [
          "x",
          "+",
          "-"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Langkah Debugging",
        "prompt": "Urutkan langkah memperbaiki bug.",
        "correctAnswer": "Telusuri algoritmanya\nBandingkan hasil dengan yang diharapkan\nTemukan langkah penyebab kesalahan\nPerbaiki lalu uji lagi",
        "explanation": {
          "correct": "Telusuri, bandingkan, temukan, lalu perbaiki dan uji. Itulah debugging yang rapi.",
          "wrong": "Kesalahan baru bisa diperbaiki setelah ditemukan, dan ditemukan setelah hasilnya ditelusuri dan dibandingkan."
        },
        "correctOrder": [
          "Telusuri algoritmanya",
          "Bandingkan hasil dengan yang diharapkan",
          "Temukan langkah penyebab kesalahan",
          "Perbaiki lalu uji lagi"
        ],
        "stepItems": [
          "Perbaiki lalu uji lagi",
          "Telusuri algoritmanya",
          "Temukan langkah penyebab kesalahan",
          "Bandingkan hasil dengan yang diharapkan"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Hasil: Telusuri Datanya",
        "prompt": "Berapa nilai yang ditampilkan?",
        "correctAnswer": "10",
        "explanation": {
          "correct": "b = 3 + 2 = 5, lalu a = 5 × 2 = 10.",
          "wrong": "Isi a diganti di baris 3 memakai b yang sudah 5. Jadi a = 5 × 2 = 10."
        },
        "options": [
          "5",
          "6",
          "10",
          "12"
        ],
        "codeSnippet": "a = 3\nb = a + 2\na = b x 2\nTAMPILKAN a"
      },
      {
        "id": 5,
        "type": "choice",
        "title": "Pilihan Ganda: Temukan Bug-nya",
        "prompt": "Algoritma rata-rata dua nilai ditulis rata = nilai1 + nilai2 / 2. Untuk nilai 80 dan 60, hasilnya 110, padahal seharusnya 70. Apa masalahnya?",
        "correctAnswer": "Penjumlahan harus dikurung dulu: (nilai1 + nilai2) / 2",
        "explanation": {
          "correct": "Pembagian dikerjakan lebih dulu, jadi 80 + 30 = 110. Dengan kurung, (80 + 60) / 2 = 70.",
          "wrong": "Telusuri: 60 / 2 = 30, lalu 80 + 30 = 110. Jumlahkan dulu dengan tanda kurung, baru dibagi 2."
        },
        "options": [
          "Nilainya terlalu besar",
          "Penjumlahan harus dikurung dulu: (nilai1 + nilai2) / 2",
          "Seharusnya dikali 2, bukan dibagi 2",
          "Tidak ada masalah"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 6,
    "unitNumber": 1,
    "unit": "Unit 1 · Pengenalan Algoritma",
    "title": "Kenalan dengan Python",
    "subtitle": "print(), teks, komentar, error",
    "xp": 50,
    "description": "Siswa bisa menampilkan teks dengan print(), membedakan teks dan angka, menulis komentar, dan mengenali error yang sering terjadi.",
    "slides": [
      {
        "id": 1,
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
      },
      {
        "id": 2,
        "title": "Banyak Baris, Banyak print()",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Python menjalankan kode dari baris paling atas ke bawah, persis seperti pola urutan. Setiap print() menampilkan satu baris baru. print() yang kosong menampilkan baris kosong."
          },
          {
            "kind": "code",
            "text": "print(\"Halo!\")\nprint()\nprint(\"Aku sedang belajar Python.\")"
          },
          {
            "kind": "output",
            "text": "Halo!\n\nAku sedang belajar Python."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 3,
        "title": "Teks atau Angka?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Perhatikan bedanya:"
          },
          {
            "kind": "code",
            "text": "print(\"5 + 3\")\nprint(5 + 3)"
          },
          {
            "kind": "output",
            "text": "5 + 3\n8"
          },
          {
            "kind": "paragraph",
            "text": "Yang diapit tanda kutip adalah teks, ditampilkan apa adanya. Angka tanpa kutip bisa dihitung oleh Python."
          },
          {
            "kind": "tip",
            "text": "Tips: Kutip tunggal juga boleh: print('Halo') sama dengan print(\"Halo\"). Yang penting, kutip pembuka dan penutup sama."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 4,
        "title": "Komentar dengan Tanda #",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Tulisan setelah tanda # disebut komentar. Python melewati komentar dan tidak menjalankannya. Komentar dipakai untuk memberi catatan bagi manusia yang membaca kode."
          },
          {
            "kind": "code",
            "text": "# Program menyapa teman\nprint(\"Halo, Rani!\")  # tampilkan sapaan"
          },
          {
            "kind": "output",
            "text": "Halo, Rani!"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Kalau Muncul Error",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Error itu wajar! Programmer profesional juga sering bertemu error. Tiga error yang paling sering terjadi:"
          },
          {
            "kind": "paragraph",
            "text": "Kode yang salah — Masalahnya — Perbaikan\nPrint(\"Hai\") — Huruf P kapital — print(\"Hai\")\nprint(Hai) — Teks tanpa tanda kutip — print(\"Hai\")\nprint(\"Hai\" — Kurung tidak ditutup — print(\"Hai\")"
          },
          {
            "kind": "tip",
            "text": "Tips: Baca pesan error dari bawah. Python biasanya menunjuk baris yang bermasalah."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Menampilkan teks dengan print()",
      "Kode dijalankan dari atas ke bawah",
      "Beda teks dan angka",
      "Komentar dengan # dan error yang sering muncul"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Penulisan yang Benar",
        "prompt": "Manakah penulisan kode Python yang benar untuk menampilkan Halo?",
        "correctAnswer": "print(\"Halo\")",
        "explanation": {
          "correct": "print huruf kecil, lalu teks dalam tanda kutip di dalam kurung.",
          "wrong": "Ingat polanya: print huruf kecil, kurung buka, teks dalam tanda kutip, kurung tutup."
        },
        "options": [
          "Print(\"Halo\")",
          "print(Halo)",
          "print(\"Halo\")",
          "print \"Halo\""
        ]
      },
      {
        "id": 2,
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
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Kartu Ucapan",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\nSelamat ulang tahun!\nSemoga sehat selalu.\nDari: Rani",
        "correctAnswer": "print(\"Selamat ulang tahun!\")\nprint(\"Semoga sehat selalu.\")\nprint(\"Dari: Rani\")",
        "explanation": {
          "correct": "Python menjalankan print dari atas ke bawah, jadi urutan baris kode sama dengan urutan hasilnya.",
          "wrong": "Baris yang ditulis lebih atas tampil lebih dulu. Ucapan di atas, nama pengirim paling bawah."
        },
        "correctOrder": [
          "print(\"Selamat ulang tahun!\")",
          "print(\"Semoga sehat selalu.\")",
          "print(\"Dari: Rani\")"
        ],
        "stepItems": [
          "print(\"Dari: Rani\")",
          "print(\"Selamat ulang tahun!\")",
          "print(\"Semoga sehat selalu.\")"
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
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 7,
    "unitNumber": 2,
    "unit": "Unit 2 · Variabel",
    "title": "Kotak Penyimpan Data",
    "subtitle": "Membuat variabel, tanda =",
    "xp": 50,
    "description": "Siswa bisa membuat variabel dengan tanda =, menampilkan isinya, dan memahami bahwa satu variabel menyimpan satu isi.",
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
        "title": "Menampilkan Isi Variabel",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Untuk melihat isi variabel, tulis namanya di dalam print() tanpa tanda kutip:"
          },
          {
            "kind": "code",
            "text": "nama = \"Rani\"\nprint(nama)\nprint(\"nama\")\nprint(\"Halo\", nama)"
          },
          {
            "kind": "output",
            "text": "Rani\nnama\nHalo Rani"
          },
          {
            "kind": "warning",
            "text": "Awas! print(nama) menampilkan isi variabel. print(\"nama\") menampilkan tulisan nama apa adanya."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Satu Kotak, Satu Isi",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Satu variabel hanya menyimpan satu isi. Kalau diisi lagi, isi lamanya diganti. Isi variabel juga bisa disalin ke variabel lain:"
          },
          {
            "kind": "code",
            "text": "a = 5\nb = a\na = 9\nprint(a)\nprint(b)"
          },
          {
            "kind": "output",
            "text": "9\n5"
          },
          {
            "kind": "paragraph",
            "text": "b mendapat salinan isi a saat baris b = a dijalankan, yaitu 5. Saat a diganti menjadi 9, b tetap 5."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Variabel Membuat Program Mudah Diubah",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Bayangkan nama \"Rani\" ditulis di banyak baris. Kalau ingin diganti \"Dika\", kamu harus mengubah semuanya. Dengan variabel, cukup ubah satu baris:"
          },
          {
            "kind": "code",
            "text": "nama = \"Dika\"\nprint(\"Halo\", nama)\nprint(nama, \"sedang belajar Python\")"
          },
          {
            "kind": "output",
            "text": "Halo Dika\nDika sedang belajar Python"
          },
          {
            "kind": "tip",
            "text": "Tips: Programmer memakai variabel agar program mudah diubah dan tidak perlu menulis data yang sama berulang kali."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Variabel sebagai kotak berlabel",
      "Membuat variabel dengan tanda =",
      "Menampilkan isi variabel tanpa tanda kutip",
      "Satu variabel menyimpan satu isi"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Arti Tanda Sama Dengan",
        "prompt": "Apa arti tanda = pada kode skor = 100?",
        "correctAnswer": "Simpan 100 ke dalam variabel skor",
        "explanation": {
          "correct": "Di Python, = artinya menyimpan nilai di kanan ke variabel di kiri.",
          "wrong": "Tanda = bukan \"sama dengan\" seperti di matematika. Bacalah sebagai \"simpan ke dalam\"."
        },
        "options": [
          "Skor sama besar dengan 100",
          "Simpan 100 ke dalam variabel skor",
          "Bandingkan skor dengan 100",
          "Tampilkan skor dan 100"
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
          "wrong": "Untuk menyimpan nilai, pakai satu tanda =. Tanda == dipakai untuk membandingkan, nanti di Level 19."
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
        "title": "Susun Kode: Sapa Dika",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\nHalo Dika\nDika suka sepak bola",
        "correctAnswer": "nama = \"Dika\"\nprint(\"Halo\", nama)\nprint(nama, \"suka sepak bola\")",
        "explanation": {
          "correct": "Variabel dibuat dulu, baru isinya bisa dipakai di print.",
          "wrong": "Variabel nama harus diisi sebelum dipakai. Setelah itu, print ditulis sesuai urutan hasil."
        },
        "correctOrder": [
          "nama = \"Dika\"",
          "print(\"Halo\", nama)",
          "print(nama, \"suka sepak bola\")"
        ],
        "stepItems": [
          "print(nama, \"suka sepak bola\")",
          "nama = \"Dika\"",
          "print(\"Halo\", nama)"
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
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 8,
    "unitNumber": 2,
    "unit": "Unit 2 · Variabel",
    "title": "Tipe Data",
    "subtitle": "str, int, float, bool, type()",
    "xp": 50,
    "description": "Siswa mengenal 4 tipe data dasar, bisa membedakan teks dan angka, dan bisa memeriksa tipe data dengan type().",
    "slides": [
      {
        "id": 1,
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
        "id": 2,
        "title": "Kutip Mengubah Segalanya",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Tanda kutip menentukan tipe data. Perhatikan pasangan berikut:"
          },
          {
            "kind": "paragraph",
            "text": "Tanpa kutip — Dengan kutip\n13 adalah int — \"13\" adalah str\n2.5 adalah float — \"2.5\" adalah str\nTrue adalah bool — \"True\" adalah str"
          },
          {
            "kind": "paragraph",
            "text": "Angka yang ditulis dalam kutip tidak bisa dihitung, karena Python menganggapnya tulisan, bukan bilangan."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 3,
        "title": "Mengecek Tipe dengan type()",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Kalau ragu, tanyakan ke Python dengan type():"
          },
          {
            "kind": "code",
            "text": "print(type(\"halo\"))\nprint(type(13))\nprint(type(1.5))\nprint(type(True))"
          },
          {
            "kind": "output",
            "text": "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>"
          },
          {
            "kind": "tip",
            "text": "Tips: type() sangat berguna saat programmu error karena tipe data yang tidak cocok."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 4,
        "title": "Desimal Pakai Titik",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Di Indonesia kita menulis satu koma lima sebagai 1,5. Di Python, desimal wajib memakai titik:"
          },
          {
            "kind": "code",
            "text": "tinggi = 1.5\nprint(tinggi)\nprint(1,5)"
          },
          {
            "kind": "output",
            "text": "1.5\n1 5"
          },
          {
            "kind": "warning",
            "text": "Awas! print(1,5) tidak menampilkan satu koma lima. Koma di dalam print memisahkan dua data, yaitu 1 dan 5."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Benar atau Salah: bool",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Tipe bool hanya punya dua nilai: True dan False. Huruf pertamanya wajib kapital dan tanpa tanda kutip."
          },
          {
            "kind": "code",
            "text": "sudah_mandi = True\nhujan = False\nprint(sudah_mandi, hujan)"
          },
          {
            "kind": "output",
            "text": "True False"
          },
          {
            "kind": "paragraph",
            "text": "Nilai bool nanti dipakai sebagai syarat di unit If Statement, misalnya \"jika hujan, bawa payung\"."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Tipe data: teks, bilangan bulat, desimal, benar/salah",
      "Tanda kutip mengubah angka menjadi teks",
      "Mengecek tipe data dengan type()",
      "Desimal pakai titik dan nilai True/False"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Tipe Data Kelas",
        "prompt": "Variabel kelas = \"7A\" menyimpan tipe data apa?",
        "correctAnswer": "str (teks)",
        "explanation": {
          "correct": "Isinya diapit tanda kutip, jadi termasuk teks (str).",
          "wrong": "Ada huruf dan tanda kutip, jadi bukan angka dan bukan True/False. Itu teks."
        },
        "options": [
          "int (bilangan bulat)",
          "float (bilangan desimal)",
          "str (teks)",
          "bool (benar/salah)"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Sudah Makan?",
        "prompt": "Lengkapi kode agar sudah_makan bertipe bool.",
        "correctAnswer": "True",
        "explanation": {
          "correct": "True dengan T kapital dan tanpa kutip adalah nilai bool.",
          "wrong": "\"True\" pakai kutip jadi teks, dan true huruf kecil tidak dikenali Python."
        },
        "codeTemplate": "sudah_makan = ____\nprint(type(sudah_makan))",
        "chips": [
          "True",
          "\"True\"",
          "true"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Teks Jadi Angka",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\n<class 'str'>\n<class 'int'>",
        "correctAnswer": "angka = \"5\"\nprint(type(angka))\nangka = 5\nprint(type(angka))",
        "explanation": {
          "correct": "Mula-mula angka berisi teks \"5\", lalu diganti dengan bilangan 5. Tipe datanya ikut berubah.",
          "wrong": "Baris pertama yang tampil adalah str, jadi isi dengan kutip harus disimpan dan dicek lebih dulu."
        },
        "correctOrder": [
          "angka = \"5\"",
          "print(type(angka))",
          "angka = 5",
          "print(type(angka))"
        ],
        "stepItems": [
          "print(type(angka))",
          "angka = 5",
          "print(type(angka))",
          "angka = \"5\""
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Tipe yang Tampil",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "<class 'float'>",
        "explanation": {
          "correct": "3.0 memakai titik desimal, jadi bertipe float walaupun nilainya bulat.",
          "wrong": "type() menampilkan tipe datanya, bukan nilainya. Angka dengan titik desimal selalu float."
        },
        "options": [
          "<class 'int'>",
          "<class 'float'>",
          "<class 'str'>",
          "3.0"
        ],
        "codeSnippet": "print(type(3.0))"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Data Rapor",
        "prompt": "Buat variabel nilai berisi angka 88 dan variabel lulus berisi True, lalu tampilkan keduanya dalam satu baris dengan satu print.\n\nContoh hasil:\n88 True",
        "correctAnswer": "nilai = 88\nlulus = True\nprint(nilai, lulus)",
        "explanation": {
          "correct": "Kamu sudah memakai dua tipe data sekaligus: int dan bool.",
          "wrong": "Tulis nilai = 88 dan lulus = True tanpa tanda kutip, lalu print(nilai, lulus) dengan koma sebagai pemisah."
        },
        "acceptedAnswers": [
          "nilai = 88\nlulus = True\nprint(nilai, lulus)",
          "lulus = True\nnilai = 88\nprint(nilai, lulus)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 9,
    "unitNumber": 2,
    "unit": "Unit 2 · Variabel",
    "title": "Mengubah Isi Variabel",
    "subtitle": "Mengganti isi, x = x + 1, +=, menggabung teks",
    "xp": 50,
    "description": "Siswa bisa mengganti isi variabel, menambah isi dari nilai lamanya, memakai += dan kawan-kawan, menggabung teks, dan melacak isi variabel baris demi baris.",
    "slides": [
      {
        "id": 1,
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
        "id": 2,
        "title": "Menambah dari Isi Lama",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Bagaimana kalau kamu ingin menambah isi, bukan mengganti? Pakai isi lamanya di sebelah kanan:"
          },
          {
            "kind": "code",
            "text": "koin = 20\nkoin = koin + 5\nprint(koin)"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: 25."
          },
          {
            "kind": "paragraph",
            "text": "Python mengerjakan sebelah kanan dulu: isi koin (20) ditambah 5 menjadi 25, lalu hasilnya disimpan kembali ke koin."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 3,
        "title": "Cara Singkat: +=",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pola x = x + 5 sangat sering dipakai, jadi Python punya cara singkatnya:"
          },
          {
            "kind": "paragraph",
            "text": "Cara panjang — Cara singkat — Artinya\nx = x + 5 — x += 5 — Tambah 5\nx = x - 2 — x -= 2 — Kurangi 2\nx = x * 3 — x *= 3 — Kalikan 3"
          },
          {
            "kind": "paragraph",
            "text": "Keduanya menghasilkan hal yang sama. Pilih yang menurutmu paling mudah dibaca."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 4,
        "title": "Menggabung Teks dengan +",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Tanda + pada teks artinya menyambung:"
          },
          {
            "kind": "code",
            "text": "depan = \"Algo\"\nbelakang = \"go\"\nprint(depan + belakang)\nprint(depan + \" \" + belakang)"
          },
          {
            "kind": "output",
            "text": "Algogo\nAlgo go"
          },
          {
            "kind": "warning",
            "text": "Awas! Teks tidak bisa disambung langsung dengan angka. \"Umur: \" + 13 membuat error. Untuk sekarang, pakai koma: print(\"Umur:\", 13). Cara lain dipelajari di Level 10."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 5,
        "title": "Melacak Isi Variabel",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Programmer sering melacak isi variabel untuk memastikan programnya benar:"
          },
          {
            "kind": "code",
            "text": "uang = 10000\nuang = uang - 3000\nuang = uang + 5000\nprint(uang)"
          },
          {
            "kind": "paragraph",
            "text": "Baris — Isi uang\n1 — 10000\n2 — 7000\n3 — 12000"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: 12000."
          },
          {
            "kind": "tip",
            "text": "Tips: Saat soal terasa sulit, tulis tabel seperti ini di kertas. Isi satu baris demi satu baris."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Mengganti isi variabel",
      "Menambah dari isi lama dengan x = x + 5",
      "Cara singkat +=, -=, *=",
      "Menggabung teks dan melacak isi variabel"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Arti +=",
        "prompt": "Apa arti kode skor += 5?",
        "correctAnswer": "Isi skor ditambah 5",
        "explanation": {
          "correct": "skor += 5 sama dengan skor = skor + 5.",
          "wrong": "+= tidak mengganti isi, tapi menambahkan ke isi lama."
        },
        "options": [
          "Isi skor diganti menjadi 5",
          "Isi skor ditambah 5",
          "Skor dibandingkan dengan 5",
          "Membuat variabel baru bernama skor5"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Nyawa Berkurang",
        "prompt": "Lengkapi kode agar nyawa berkurang 1 dan yang tampil 2.",
        "correctAnswer": "-=",
        "explanation": {
          "correct": "nyawa -= 1 mengurangi isi lama: 3 - 1 = 2.",
          "wrong": "= mengganti isi menjadi 1, dan += justru menambah menjadi 4. Untuk mengurangi, pakai -=."
        },
        "codeTemplate": "nyawa = 3\nnyawa ___ 1\nprint(nyawa)",
        "chips": [
          "-=",
          "=",
          "+="
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
        "title": "Tebak Output: Lacak Poinnya",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "10",
        "explanation": {
          "correct": "poin menjadi 4, lalu 4 × 3 = 12, lalu 12 − 2 = 10.",
          "wrong": "Lacak baris demi baris: 4 → 12 → 10. Setiap baris memakai isi terbaru dari baris sebelumnya."
        },
        "options": [
          "12",
          "10",
          "4",
          "2"
        ],
        "codeSnippet": "poin = 4\npoin = poin * 3\npoin -= 2\nprint(poin)"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Tabungan",
        "prompt": "Buat variabel tabungan berisi 20000, tambahkan 15000 ke dalamnya, lalu tampilkan isinya.\n\nContoh hasil:\n35000",
        "correctAnswer": "tabungan = 20000\ntabungan += 15000\nprint(tabungan)",
        "explanation": {
          "correct": "Tabunganmu bertambah! Kamu sudah bisa mengubah isi variabel dari nilai lamanya.",
          "wrong": "Isi dulu tabungan = 20000, lalu tambahkan dengan tabungan += 15000, baru tampilkan dengan print(tabungan)."
        },
        "acceptedAnswers": [
          "tabungan = 20000\ntabungan += 15000\nprint(tabungan)",
          "tabungan = 20000\ntabungan = tabungan + 15000\nprint(tabungan)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 10,
    "unitNumber": 2,
    "unit": "Unit 2 · Variabel",
    "title": "Nama & Konversi Tipe",
    "subtitle": "Aturan nama, int(), str(), float()",
    "xp": 50,
    "description": "Siswa bisa memberi nama variabel dengan benar dan mengubah tipe data dengan int(), float(), dan str().",
    "slides": [
      {
        "id": 1,
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
      },
      {
        "id": 2,
        "title": "Kata yang Sudah Dipakai Python",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Beberapa kata sudah punya arti khusus di Python, sehingga tidak boleh dipakai sebagai nama variabel. Contohnya if, else, for, while, True, False, dan and."
          },
          {
            "kind": "code",
            "text": "if = 5        # Error!\njika = 5      # Boleh"
          },
          {
            "kind": "tip",
            "text": "Tips: Programmer Python biasanya memakai huruf kecil dan garis bawah untuk nama variabel, misalnya nilai_akhir dan jumlah_buku."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 3,
        "title": "Teks Jadi Angka dengan int()",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Teks berisi angka bisa diubah menjadi bilangan dengan int() (bulat) atau float() (desimal):"
          },
          {
            "kind": "code",
            "text": "umur = \"13\"\numur = int(umur)\nprint(umur + 1)\ntinggi = float(\"1.5\")\nprint(tinggi * 2)"
          },
          {
            "kind": "output",
            "text": "14\n3.0"
          },
          {
            "kind": "paragraph",
            "text": "Setelah diubah, isinya bisa dihitung."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 4,
        "title": "Angka Jadi Teks dengan str()",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Ingat masalah \"Umur: \" + 13 yang error? Ubah angkanya menjadi teks dengan str(), lalu sambung:"
          },
          {
            "kind": "code",
            "text": "umur = 13\nprint(\"Umur: \" + str(umur))"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Umur: 13."
          },
          {
            "kind": "tip",
            "text": "Ingat tiga hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- int() mengubah menjadi bilangan bulat\n- float() mengubah menjadi bilangan desimal\n- str() mengubah menjadi teks"
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 5,
        "title": "Kapan Konversi Gagal?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Tidak semua data bisa diubah:"
          },
          {
            "kind": "paragraph",
            "text": "Kode — Hasil\nint(\"tiga\") — Error, karena \"tiga\" bukan angka\nint(\"3.5\") — Error, karena teks desimal tidak bisa langsung jadi bilangan bulat\nint(3.9) — 3, karena bagian desimalnya dibuang"
          },
          {
            "kind": "warning",
            "text": "Awas! int() tidak membulatkan ke atas. Bilangan desimal hanya dipotong bagian di belakang titiknya."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Aturan memberi nama variabel",
      "Kata yang tidak boleh dipakai sebagai nama",
      "Mengubah tipe dengan int(), float(), dan str()",
      "Konversi yang bisa gagal"
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
        "title": "Isian Bagian Kosong: Sambung Nilai",
        "prompt": "Lengkapi kode agar tampil Nilai: 90 tanpa error.",
        "correctAnswer": "str",
        "explanation": {
          "correct": "str(90) mengubah angka menjadi teks, sehingga bisa disambung dengan +.",
          "wrong": "Teks hanya bisa disambung dengan teks. Ubah angkanya menjadi teks dengan str()."
        },
        "codeTemplate": "print(\"Nilai: \" + ___(90))",
        "chips": [
          "str",
          "int",
          "float"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Harga Baru",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\nHarga baru: 12000",
        "correctAnswer": "harga = \"10000\"\nharga = int(harga)\nharga = harga + 2000\nprint(\"Harga baru:\", harga)",
        "explanation": {
          "correct": "Teks diubah menjadi angka dulu, baru bisa ditambah 2000.",
          "wrong": "\"10000\" masih teks, jadi harus diubah dengan int() sebelum dijumlahkan."
        },
        "correctOrder": [
          "harga = \"10000\"",
          "harga = int(harga)",
          "harga = harga + 2000",
          "print(\"Harga baru:\", harga)"
        ],
        "stepItems": [
          "harga = harga + 2000",
          "print(\"Harga baru:\", harga)",
          "harga = \"10000\"",
          "harga = int(harga)"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Sambung atau Jumlah?",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "46 lalu 10",
        "explanation": {
          "correct": "Teks \"4\" + \"6\" disambung menjadi 46, sedangkan setelah diubah dengan int() keduanya dijumlah menjadi 10.",
          "wrong": "Tanda + pada teks menyambung, pada angka menjumlahkan. Baris pertama masih teks, baris kedua sudah angka."
        },
        "options": [
          "46 lalu 10",
          "10 lalu 10",
          "46 lalu 46",
          "Error"
        ],
        "codeSnippet": "a = \"4\"\nb = \"6\"\nprint(a + b)\nprint(int(a) + int(b))"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Buku Dikali Dua",
        "prompt": "Variabel jumlah_buku berisi teks \"7\". Ubah menjadi angka, lalu tampilkan hasil kalinya dengan 2.\n\nContoh hasil:\n14",
        "correctAnswer": "jumlah_buku = \"7\"\njumlah_buku = int(jumlah_buku)\nprint(jumlah_buku * 2)",
        "explanation": {
          "correct": "Teks \"7\" berhasil diubah menjadi angka 7, lalu dikali 2.",
          "wrong": "Kalau langsung dikali, teks \"7\" justru diulang menjadi \"77\". Ubah dulu dengan int()."
        },
        "acceptedAnswers": [
          "jumlah_buku = \"7\"\njumlah_buku = int(jumlah_buku)\nprint(jumlah_buku * 2)",
          "jumlah_buku = \"7\"\nprint(int(jumlah_buku) * 2)",
          "jumlah_buku = \"7\"\nangka = int(jumlah_buku)\nprint(angka * 2)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 11,
    "unitNumber": 2,
    "unit": "Unit 2 · Variabel",
    "title": "Bermain dengan Teks",
    "subtitle": "len(), indeks, mengulang teks, huruf besar-kecil",
    "xp": 50,
    "description": "Siswa bisa mengolah teks: menghitung panjang dengan len(), mengambil huruf dengan indeks, mengulang teks dengan *, dan mengubah huruf besar-kecil.",
    "slides": [
      {
        "id": 1,
        "title": "Teks Adalah Deretan Huruf",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Teks (str) sebenarnya adalah deretan huruf yang berbaris rapi. Kata \"Python\" terdiri dari 6 huruf: P, y, t, h, o, n."
          },
          {
            "kind": "paragraph",
            "text": "Spasi dan tanda baca juga dihitung sebagai huruf. Teks \"Hai, Rani\" terdiri dari 9 karakter, termasuk koma dan spasi."
          },
          {
            "kind": "callout",
            "text": "Kalau kamu mengetik kata sandi di HP, bagaimana aplikasi tahu sandimu minimal 8 karakter?"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Menghitung Panjang dengan len()",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "len() menghitung banyaknya karakter dalam teks:"
          },
          {
            "kind": "code",
            "text": "nama = \"Algogo\"\nprint(len(nama))\nprint(len(\"Halo dunia\"))"
          },
          {
            "kind": "output",
            "text": "6\n10"
          },
          {
            "kind": "paragraph",
            "text": "\"Halo dunia\" berisi 10 karakter karena spasi di tengahnya ikut dihitung."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Mengambil Huruf dengan Indeks",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Setiap huruf punya nomor urut yang disebut indeks. Ambil satu huruf dengan tanda kurung siku:"
          },
          {
            "kind": "code",
            "text": "kata = \"Python\"\nprint(kata[0])\nprint(kata[2])\nprint(kata[-1])"
          },
          {
            "kind": "output",
            "text": "P\nt\nn"
          },
          {
            "kind": "warning",
            "text": "Awas! Indeks dimulai dari 0, bukan 1. Indeks -1 artinya huruf paling belakang."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Mengulang Teks dengan *",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Tanda * pada teks artinya mengulang:"
          },
          {
            "kind": "code",
            "text": "print(\"ha\" * 3)\nprint(\"-\" * 10)"
          },
          {
            "kind": "output",
            "text": "hahaha\n----------"
          },
          {
            "kind": "tip",
            "text": "Tips: \"-\" * 10 sering dipakai untuk membuat garis pemisah yang rapi pada tampilan program."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 5,
        "title": "Huruf Besar dan Kecil",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Teks punya perintah bawaan untuk mengubah huruf. Tulis titik setelah teks, lalu nama perintahnya:"
          },
          {
            "kind": "code",
            "text": "sapa = \"Halo Algo\"\nprint(sapa.upper())\nprint(sapa.lower())"
          },
          {
            "kind": "output",
            "text": "HALO ALGO\nhalo algo"
          },
          {
            "kind": "tip",
            "text": "Tahukah kamu? lower() berguna saat membandingkan jawaban. Dengan jawaban.lower() == \"jakarta\", ketikan \"Jakarta\" maupun \"JAKARTA\" sama-sama dianggap benar."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Teks adalah deretan karakter",
      "Menghitung panjang teks dengan len()",
      "Mengambil huruf dengan indeks",
      "Mengulang teks dan mengubah huruf besar-kecil"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Panjang Kata",
        "prompt": "Berapa hasil len(\"Belajar\")?",
        "correctAnswer": "7",
        "explanation": {
          "correct": "B-e-l-a-j-a-r terdiri dari 7 huruf.",
          "wrong": "len() menghitung semua karakternya. Hitung satu per satu: B, e, l, a, j, a, r."
        },
        "options": [
          "6",
          "7",
          "8",
          "Belajar"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Huruf Pertama",
        "prompt": "Lengkapi kode agar tampil huruf pertama, yaitu B.",
        "correctAnswer": "0",
        "explanation": {
          "correct": "Indeks pertama selalu 0.",
          "wrong": "Indeks 1 adalah huruf kedua (\"u\"), dan -1 adalah huruf terakhir. Huruf pertama ada di indeks 0."
        },
        "codeTemplate": "kata = \"Buku\"\nprint(kata[___])",
        "chips": [
          "0",
          "1",
          "-1"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Kartu Nama",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\nAlgogo\n6\n==========",
        "correctAnswer": "kata = \"Algogo\"\nprint(kata)\nprint(len(kata))\nprint(\"=\" * 10)",
        "explanation": {
          "correct": "Teks disimpan dulu, lalu ditampilkan, dihitung panjangnya, dan ditutup garis.",
          "wrong": "Variabel harus diisi sebelum dipakai, lalu print disusun sesuai urutan hasil yang tampil."
        },
        "correctOrder": [
          "kata = \"Algogo\"",
          "print(kata)",
          "print(len(kata))",
          "print(\"=\" * 10)"
        ],
        "stepItems": [
          "print(\"=\" * 10)",
          "print(len(kata))",
          "kata = \"Algogo\"",
          "print(kata)"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Huruf Pilihan",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "ea",
        "explanation": {
          "correct": "kata[1] adalah huruf kedua, \"e\", dan kata[-1] adalah huruf terakhir, \"a\". Disambung menjadi \"ea\".",
          "wrong": "Ingat, indeks dimulai dari 0. Indeks 1 adalah \"e\", dan -1 adalah huruf paling belakang, \"a\"."
        },
        "options": [
          "ea",
          "Ma",
          "ra",
          "ek"
        ],
        "codeSnippet": "kata = \"Merdeka\"\nprint(kata[1] + kata[-1])"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Panjang dan Huruf Pertama",
        "prompt": "Buat variabel kata berisi Python, lalu tampilkan panjangnya dan huruf pertamanya dalam satu baris dengan satu print.\n\nContoh hasil:\n6 P",
        "correctAnswer": "kata = \"Python\"\nprint(len(kata), kata[0])",
        "explanation": {
          "correct": "Kamu sudah memakai len() dan indeks sekaligus!",
          "wrong": "Simpan teks di kata, lalu tulis print(len(kata), kata[0]). Ingat, huruf pertama ada di indeks 0."
        },
        "acceptedAnswers": [
          "kata = \"Python\"\nprint(len(kata), kata[0])"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 12,
    "unitNumber": 2,
    "unit": "Unit 2 · Variabel",
    "title": "Tukar Isi & Banyak Variabel",
    "subtitle": "Isi banyak variabel, menukar isi, melacak",
    "xp": 50,
    "description": "Siswa bisa mengisi banyak variabel sekaligus, menukar isi dua variabel dengan benar, dan menelusuri program yang memakai beberapa variabel.",
    "slides": [
      {
        "id": 1,
        "title": "Mengisi Banyak Variabel Sekaligus",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Beberapa variabel bisa diisi dalam satu baris. Pisahkan dengan koma di kiri dan kanan tanda =:"
          },
          {
            "kind": "code",
            "text": "a, b, c = 1, 2, 3\nprint(a, b, c)\nx = y = 0\nprint(x, y)"
          },
          {
            "kind": "output",
            "text": "1 2 3\n0 0"
          },
          {
            "kind": "paragraph",
            "text": "Nilai di kanan dipasangkan sesuai urutan: a mendapat 1, b mendapat 2, c mendapat 3. x = y = 0 mengisi keduanya dengan 0."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 2,
        "title": "Masalah Menukar Isi",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Kamu punya gelas a berisi 5 dan gelas b berisi 9. Bagaimana menukar isinya? Coba cara ini:"
          },
          {
            "kind": "code",
            "text": "a = 5\nb = 9\na = b\nb = a\nprint(a, b)"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya 9 9, bukan 9 5! Saat a = b dijalankan, isi lama a (5) langsung hilang. Akibatnya b = a hanya menyalin 9."
          },
          {
            "kind": "callout",
            "text": "Kalau kamu ingin menukar isi dua gelas, gelas apa yang kamu butuhkan?"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 3,
        "title": "Menukar dengan Gelas Bantu",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Seperti di dunia nyata, kita butuh gelas bantu. Simpan dulu isi a ke variabel sementara:"
          },
          {
            "kind": "code",
            "text": "a = 5\nb = 9\nsementara = a\na = b\nb = sementara\nprint(a, b)"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: 9 5. Isinya berhasil ditukar!"
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Cara Singkat ala Python",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Python punya cara yang lebih singkat untuk menukar isi:"
          },
          {
            "kind": "code",
            "text": "a = 5\nb = 9\na, b = b, a\nprint(a, b)"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: 9 5."
          },
          {
            "kind": "paragraph",
            "text": "Python mengambil dulu semua nilai di kanan (9 dan 5), baru memasangkannya ke kiri. Jadi tidak ada isi yang hilang."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Melacak Banyak Variabel",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Saat ada beberapa variabel, buat tabel dengan satu kolom untuk setiap variabel:"
          },
          {
            "kind": "code",
            "text": "x = 2\ny = x + 3\nx = x * y\ny = y - x\nprint(x, y)"
          },
          {
            "kind": "paragraph",
            "text": "Baris — x — y\n1 — 2 — -\n2 — 2 — 5\n3 — 10 — 5\n4 — 10 — -5"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: 10 -5."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Mengisi banyak variabel sekaligus",
      "Kenapa a = b lalu b = a gagal menukar",
      "Menukar isi dengan variabel sementara",
      "Cara singkat a, b = b, a dan melacak banyak variabel"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Isi Variabel b",
        "prompt": "Setelah a, b, c = 4, 5, 6 dijalankan, apa isi variabel b?",
        "correctAnswer": "5",
        "explanation": {
          "correct": "Nilai dipasangkan sesuai urutan: a = 4, b = 5, c = 6.",
          "wrong": "Variabel kedua di kiri mendapat nilai kedua di kanan, yaitu 5."
        },
        "options": [
          "4",
          "5",
          "6",
          "4, 5, 6"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Tukar Minuman",
        "prompt": "Lengkapi kode agar tampil teh kopi.",
        "correctAnswer": "a",
        "explanation": {
          "correct": "a, b = b, a menukar isi keduanya dalam satu baris.",
          "wrong": "Pasangannya harus bersilang: a mendapat isi b, dan b mendapat isi a. Variabel sementara juga belum pernah dibuat."
        },
        "codeTemplate": "a = \"kopi\"\nb = \"teh\"\na, b = b, ___\nprint(a, b)",
        "chips": [
          "a",
          "b",
          "sementara"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Tukar dengan Gelas Bantu",
        "prompt": "Susun kode agar isi a dan b tertukar dan hasilnya:\n\nContoh hasil:\n9 5",
        "correctAnswer": "a, b = 5, 9\nsementara = a\na = b\nb = sementara\nprint(a, b)",
        "explanation": {
          "correct": "Isi a diamankan dulu di gelas bantu, baru a boleh ditimpa.",
          "wrong": "Kalau a = b dijalankan sebelum sementara = a, isi lama a hilang dan hasilnya menjadi 9 9."
        },
        "correctOrder": [
          "a, b = 5, 9",
          "sementara = a",
          "a = b",
          "b = sementara",
          "print(a, b)"
        ],
        "stepItems": [
          "b = sementara",
          "print(a, b)",
          "a, b = 5, 9",
          "a = b",
          "sementara = a"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Tukar Tanpa Gelas",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "4 3",
        "explanation": {
          "correct": "p = 7, lalu q = 7 − 4 = 3, lalu p = 7 − 3 = 4. Isinya tertukar memakai penjumlahan!",
          "wrong": "Telusuri dengan tabel: p menjadi 7, q menjadi 3, lalu p menjadi 4."
        },
        "options": [
          "4 3",
          "7 3",
          "3 4",
          "7 4"
        ],
        "codeSnippet": "p, q = 3, 4\np = p + q\nq = p - q\np = p - q\nprint(p, q)"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Tukar Sepatu",
        "prompt": "Buat variabel kiri berisi sepatu dan kanan berisi sandal. Tukar isi keduanya, lalu tampilkan dengan print(kiri, kanan).\n\nContoh hasil:\nsandal sepatu",
        "correctAnswer": "kiri = \"sepatu\"\nkanan = \"sandal\"\nkiri, kanan = kanan, kiri\nprint(kiri, kanan)",
        "explanation": {
          "correct": "Isinya tertukar dengan benar. Sepatu dan sandal sudah pindah tempat!",
          "wrong": "Pakai kiri, kanan = kanan, kiri, atau simpan dulu isi kiri ke variabel sementara sebelum ditimpa."
        },
        "acceptedAnswers": [
          "kiri = \"sepatu\"\nkanan = \"sandal\"\nkiri, kanan = kanan, kiri\nprint(kiri, kanan)",
          "kiri = \"sepatu\"\nkanan = \"sandal\"\nkanan, kiri = kiri, kanan\nprint(kiri, kanan)",
          "kiri = \"sepatu\"\nkanan = \"sandal\"\nsementara = kiri\nkiri = kanan\nkanan = sementara\nprint(kiri, kanan)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 13,
    "unitNumber": 3,
    "unit": "Unit 3 · Input Output",
    "title": "Output yang Rapi",
    "subtitle": "print() banyak data, sep, end",
    "xp": 50,
    "description": "Siswa paham alur input, proses, output dan bisa mengatur tampilan print() dengan banyak data, sep, dan end.",
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
        "title": "Mengatur Pemisah dengan sep",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Spasi otomatis bisa diganti dengan pemisah lain memakai sep (singkatan separator):"
          },
          {
            "kind": "code",
            "text": "print(\"08\", \"11\", \"2026\", sep=\"-\")\nprint(\"a\", \"b\", \"c\", sep=\"\")"
          },
          {
            "kind": "output",
            "text": "08-11-2026\nabc"
          },
          {
            "kind": "paragraph",
            "text": "sep=\"\" artinya tanpa pemisah sama sekali, jadi datanya menempel."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Tetap di Baris yang Sama dengan end",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Biasanya setiap print() berakhir dengan pindah baris. Dengan end, kamu bisa mengganti akhirnya:"
          },
          {
            "kind": "code",
            "text": "print(\"Memuat\", end=\"...\")\nprint(\"Selesai!\")"
          },
          {
            "kind": "output",
            "text": "Memuat...Selesai!"
          },
          {
            "kind": "paragraph",
            "text": "Karena print pertama diakhiri \"...\" dan tidak pindah baris, print kedua melanjutkan di baris yang sama."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Merancang Tampilan Struk",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Dengan print(), sep, dan end, kamu bisa membuat tampilan yang rapi:"
          },
          {
            "kind": "code",
            "text": "print(\"==== STRUK ====\")\nprint(\"Roti\", 5000, sep=\" : \")\nprint(\"Susu\", 7000, sep=\" : \")\nprint(\"===============\")"
          },
          {
            "kind": "output",
            "text": "==== STRUK ====\nRoti : 5000\nSusu : 7000\n==============="
          },
          {
            "kind": "tip",
            "text": "Tips: Rancang dulu tampilan yang kamu inginkan di kertas, baru tulis kodenya baris demi baris."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Alur input, proses, output",
      "Menampilkan banyak data dengan print()",
      "Mengganti pemisah dengan sep",
      "Tetap di baris yang sama dengan end"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Fungsi Koma",
        "prompt": "Apa yang tampil dari print(\"Halo\", \"Algo\")?",
        "correctAnswer": "Halo Algo",
        "explanation": {
          "correct": "Koma memisahkan dua data, dan print otomatis memberi satu spasi di antaranya.",
          "wrong": "Koma di dalam print tidak ikut tampil. Penggantinya adalah satu spasi."
        },
        "options": [
          "HaloAlgo",
          "Halo Algo",
          "Halo, Algo",
          "\"Halo\" \"Algo\""
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Tanggal Pakai Garis Miring",
        "prompt": "Lengkapi kode agar tampil 04/11/2026.",
        "correctAnswer": "sep",
        "explanation": {
          "correct": "sep=\"/\" mengganti spasi di antara data menjadi garis miring.",
          "wrong": "end mengatur akhir baris, bukan pemisah antardata. Untuk pemisah, pakai sep."
        },
        "codeTemplate": "print(\"04\", \"11\", \"2026\", ___=\"/\")",
        "chips": [
          "sep",
          "end",
          "pisah"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Satu Baris Sapaan",
        "prompt": "Susun kode agar hasilnya satu baris:\n\nContoh hasil:\nHalo, Bima!",
        "correctAnswer": "print(\"Halo,\", end=\" \")\nprint(\"Bima\", end=\"\")\nprint(\"!\")",
        "explanation": {
          "correct": "Dua print pertama tidak pindah baris, jadi semuanya menyambung menjadi satu kalimat.",
          "wrong": "Urutan print sama dengan urutan tulisan di layar. \"Halo,\" dulu, lalu \"Bima\", lalu tanda seru."
        },
        "correctOrder": [
          "print(\"Halo,\", end=\" \")",
          "print(\"Bima\", end=\"\")",
          "print(\"!\")"
        ],
        "stepItems": [
          "print(\"!\")",
          "print(\"Halo,\", end=\" \")",
          "print(\"Bima\", end=\"\")"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Kata yang Menempel",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "Bata",
        "explanation": {
          "correct": "end=\"\" membuat print pertama tidak pindah baris dan tanpa spasi, jadi \"ta\" menempel.",
          "wrong": "Dengan end=\"\", baris tidak berganti. print kedua melanjutkan tepat setelah \"Ba\"."
        },
        "options": [
          "Bata",
          "Ba ta",
          "Ba lalu ta di baris baru",
          "Error"
        ],
        "codeSnippet": "print(\"Ba\", end=\"\")\nprint(\"ta\")"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Hari Kemerdekaan",
        "prompt": "Tampilkan tanggal kemerdekaan Indonesia dengan tiga data terpisah dan sep:\n\nContoh hasil:\n17-08-1945",
        "correctAnswer": "print(\"17\", \"08\", \"1945\", sep=\"-\")",
        "explanation": {
          "correct": "Merdeka! Kamu sudah bisa mengatur pemisah output.",
          "wrong": "Tulis tiga data dipisah koma di dalam print, lalu tambahkan sep=\"-\" di bagian akhir."
        },
        "acceptedAnswers": [
          "print(\"17\", \"08\", \"1945\", sep=\"-\")",
          "print(17, \"08\", 1945, sep=\"-\")"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 14,
    "unitNumber": 3,
    "unit": "Unit 3 · Input Output",
    "title": "Meminta Input",
    "subtitle": "input(), menyimpan jawaban",
    "xp": 50,
    "description": "Siswa bisa meminta data dari pengguna dengan input(), menyimpannya ke variabel, dan memakainya di output.",
    "slides": [
      {
        "id": 1,
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
        "id": 2,
        "title": "Program yang Menunggu",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Saat bertemu input(), program berhenti. Baris berikutnya baru dijalankan setelah pengguna menekan Enter."
          },
          {
            "kind": "code",
            "text": "print(\"Program dimulai\")\nwarna = input(\"Warna favorit? \")\nprint(\"Kamu suka\", warna)"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik biru:"
          },
          {
            "kind": "output",
            "text": "Program dimulai\nWarna favorit? biru\nKamu suka biru"
          },
          {
            "kind": "tip",
            "text": "Tips: Beri spasi di akhir pertanyaan, misalnya \"Warna favorit? \", supaya ketikan pengguna tidak menempel dengan tanda tanya."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 3,
        "title": "Bertanya Lebih dari Sekali",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Program bisa bertanya beberapa kali. Setiap jawaban disimpan di variabel yang berbeda:"
          },
          {
            "kind": "code",
            "text": "nama = input(\"Nama: \")\nhobi = input(\"Hobi: \")\nprint(nama, \"suka\", hobi)"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik Tyas lalu menggambar:"
          },
          {
            "kind": "output",
            "text": "Nama: Tyas\nHobi: menggambar\nTyas suka menggambar"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 4,
        "title": "Hasil input() Selalu Teks",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Apa pun yang diketik, input() selalu menyimpannya sebagai teks, termasuk angka:"
          },
          {
            "kind": "code",
            "text": "a = input(\"Angka pertama: \")\nb = input(\"Angka kedua: \")\nprint(a + b)"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik 5 lalu 5, hasilnya 55, bukan 10! Kedua teks disambung, bukan dijumlah."
          },
          {
            "kind": "warning",
            "text": "Awas! Kalau ingin menghitung hasil input(), ubah dulu menjadi angka. Caranya ada di level berikutnya."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Input, Proses, Output dalam Satu Program",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Sekarang gabungkan semuanya:"
          },
          {
            "kind": "code",
            "text": "kata = input(\"Ketik satu kata: \")\nulang = kata + kata + kata\nprint(ulang)"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik hore, hasilnya horehorehore."
          },
          {
            "kind": "paragraph",
            "text": "1. Input: input() meminta kata\n2. Proses: kata disambung tiga kali\n3. Output: print() menampilkan hasilnya"
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Meminta data dengan input()",
      "Program berhenti dan menunggu Enter",
      "Menyimpan banyak jawaban di variabel berbeda",
      "Hasil input() selalu teks"
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
        "title": "Isian Bagian Kosong: Tanya Kota",
        "prompt": "Lengkapi kode agar program menanyakan kota pengguna.",
        "correctAnswer": "input",
        "explanation": {
          "correct": "input() menampilkan pertanyaan lalu menyimpan jawabannya ke kota.",
          "wrong": "Untuk mendapatkan jawaban dari pengguna, pakai input(), bukan print()."
        },
        "codeTemplate": "kota = _____(\"Kamu tinggal di mana? \")\nprint(\"Salam untuk warga\", kota)",
        "chips": [
          "input",
          "print",
          "int"
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
        "title": "Tebak Output: Lima Tambah Lima",
        "prompt": "Pengguna mengetik 5 lalu 5. Apa yang tampil di baris terakhir?",
        "correctAnswer": "55",
        "explanation": {
          "correct": "Hasil input() berupa teks, jadi \"5\" + \"5\" disambung menjadi 55.",
          "wrong": "Tanpa int(), ketikan angka tetap dianggap teks. Tanda + menyambung teks, bukan menjumlah."
        },
        "options": [
          "10",
          "55",
          "a + b",
          "Error"
        ],
        "codeSnippet": "a = input(\"Angka pertama: \")\nb = input(\"Angka kedua: \")\nprint(a + b)"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Makanan Favorit",
        "prompt": "Buat program yang menanyakan nama lalu makanan favorit, kemudian menampilkan kalimat seperti contoh (pengguna mengetik Rani dan bakso):\n\nContoh hasil:\nNama: Rani\nMakanan favorit: bakso\nRani suka bakso",
        "correctAnswer": "nama = input(\"Nama: \")\nmakanan = input(\"Makanan favorit: \")\nprint(nama, \"suka\", makanan)",
        "explanation": {
          "correct": "Programmu sudah bisa mengenal selera makan penggunanya!",
          "wrong": "Simpan dua jawaban input() di dua variabel, lalu tampilkan dengan print(nama, \"suka\", makanan)."
        },
        "acceptedAnswers": [
          "nama = input(\"Nama: \")\nmakanan = input(\"Makanan favorit: \")\nprint(nama, \"suka\", makanan)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 15,
    "unitNumber": 3,
    "unit": "Unit 3 · Input Output",
    "title": "Input Angka",
    "subtitle": "int(input()), float(input())",
    "xp": 50,
    "description": "Siswa bisa mengubah hasil input() menjadi angka dengan int() dan float(), lalu menghitungnya.",
    "slides": [
      {
        "id": 1,
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
        "id": 2,
        "title": "Dari Dalam ke Luar",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Python mengerjakan int(input(\"Umur: \")) dari dalam ke luar:"
          },
          {
            "kind": "paragraph",
            "text": "1. input(\"Umur: \") berjalan dulu. Misalnya pengguna mengetik 13, hasilnya teks \"13\".\n2. int(\"13\") mengubah teks itu menjadi angka 13.\n3. Angka 13 disimpan ke variabel."
          },
          {
            "kind": "paragraph",
            "text": "Cara panjangnya juga boleh:"
          },
          {
            "kind": "code",
            "text": "teks = input(\"Umur: \")\numur = int(teks)"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Angka Desimal dengan float()",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Untuk angka berkoma seperti tinggi badan atau berat, pakai float():"
          },
          {
            "kind": "code",
            "text": "tinggi = float(input(\"Tinggi (m): \"))\nprint(\"Tinggimu\", tinggi * 100, \"cm\")"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik 1.5, hasilnya Tinggimu 150.0 cm."
          },
          {
            "kind": "warning",
            "text": "Awas! Pengguna juga harus mengetik desimal dengan titik, misalnya 1.5, bukan 1,5."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Kalau yang Diketik Bukan Angka",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Jika program meminta angka dengan int(input()), tapi pengguna mengetik dua belas, program akan berhenti dengan error ValueError. Teks \"dua belas\" tidak bisa diubah menjadi bilangan."
          },
          {
            "kind": "paragraph",
            "text": "Hal yang sama terjadi jika diketik 12.5 untuk int(). Untuk desimal, pakai float()."
          },
          {
            "kind": "tip",
            "text": "Tips: Tulis pertanyaan yang jelas, misalnya \"Umur (angka): \", supaya pengguna tahu harus mengetik angka."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 5,
        "title": "Program Kasir Mini",
        "blocks": [
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
      "Mengubah hasil input() dengan int()",
      "Membaca kode dari dalam ke luar",
      "Angka desimal dengan float()",
      "Error jika yang diketik bukan angka"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Kenapa Perlu int()?",
        "prompt": "Kenapa hasil input() perlu dibungkus int() sebelum dihitung?",
        "correctAnswer": "Karena hasil input() selalu berupa teks",
        "explanation": {
          "correct": "input() selalu menghasilkan teks, dan teks tidak bisa dihitung. int() mengubahnya menjadi angka.",
          "wrong": "Ketikan apa pun, termasuk angka, disimpan sebagai teks. Itulah sebabnya kita butuh int()."
        },
        "options": [
          "Agar pertanyaannya tampil",
          "Karena hasil input() selalu berupa teks",
          "Agar program berjalan lebih cepat",
          "Karena input() hanya menerima angka"
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
        "title": "Susun Kode: Jam Belajar Seminggu",
        "prompt": "Susun kode agar hasilnya seperti ini (pengguna mengetik 3):\n\nContoh hasil:\nBerapa jam belajar sehari? 3\nDalam seminggu: 21 jam",
        "correctAnswer": "jam = int(input(\"Berapa jam belajar sehari? \"))\nseminggu = jam * 7\nprint(\"Dalam seminggu:\", seminggu, \"jam\")",
        "explanation": {
          "correct": "Input dulu, hitung, lalu tampilkan. Alur input, proses, output!",
          "wrong": "Jam harus diminta sebelum dikalikan, dan hasilnya baru bisa ditampilkan setelah dihitung."
        },
        "correctOrder": [
          "jam = int(input(\"Berapa jam belajar sehari? \"))",
          "seminggu = jam * 7",
          "print(\"Dalam seminggu:\", seminggu, \"jam\")"
        ],
        "stepItems": [
          "seminggu = jam * 7",
          "print(\"Dalam seminggu:\", seminggu, \"jam\")",
          "jam = int(input(\"Berapa jam belajar sehari? \"))"
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
          "panjang = int(input(\"Panjang: \"))\nlebar = int(input(\"Lebar: \"))\nprint(\"Luas:\", panjang * lebar)",
          "panjang = int(input(\"Panjang: \"))\nlebar = int(input(\"Lebar: \"))\nluas = panjang * lebar\nprint(\"Luas:\", luas)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 16,
    "unitNumber": 3,
    "unit": "Unit 3 · Input Output",
    "title": "Operator Hitung",
    "subtitle": "Operator hitung, //, %, **, urutan operasi",
    "xp": 50,
    "description": "Siswa bisa memakai semua operator hitung Python, termasuk bagi bulat, sisa bagi, dan pangkat, serta memahami urutan operasi.",
    "slides": [
      {
        "id": 1,
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
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 2,
        "title": "Bagi Bulat dan Sisa Bagi",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Ada 17 permen untuk 5 anak. Setiap anak dapat berapa, dan sisa berapa?"
          },
          {
            "kind": "code",
            "text": "print(17 // 5)\nprint(17 % 5)"
          },
          {
            "kind": "output",
            "text": "3\n2"
          },
          {
            "kind": "paragraph",
            "text": "- // (bagi bulat): hasil bagi tanpa desimal. Setiap anak dapat 3 permen.\n- % (sisa bagi, dibaca modulo): sisanya. Ada 2 permen tersisa."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 3,
        "title": "Pangkat dengan Bintang Dua",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Tanda ** artinya pangkat:"
          },
          {
            "kind": "code",
            "text": "print(2 ** 3)\nprint(5 ** 2)"
          },
          {
            "kind": "output",
            "text": "8\n25"
          },
          {
            "kind": "paragraph",
            "text": "2 ** 3 sama dengan 2 × 2 × 2 = 8. Pangkat dua cocok untuk menghitung luas persegi: sisi ** 2."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 4,
        "title": "Urutan Operasi",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Seperti di matematika, Python tidak selalu menghitung dari kiri ke kanan. Urutannya:"
          },
          {
            "kind": "paragraph",
            "text": "1. Tanda kurung ( )\n2. Pangkat **\n3. Kali dan bagi: *, /, //, %\n4. Tambah dan kurang: +, -"
          },
          {
            "kind": "code",
            "text": "print(2 + 3 * 4)\nprint((2 + 3) * 4)"
          },
          {
            "kind": "output",
            "text": "14\n20"
          },
          {
            "kind": "tip",
            "text": "Tips: Kalau ragu, pakai tanda kurung. Kode jadi lebih mudah dibaca dan hasilnya pasti sesuai keinginanmu."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 5,
        "title": "Genap atau Ganjil?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Sisa bagi % punya kegunaan istimewa: mengecek genap atau ganjil. Bilangan genap selalu bersisa 0 jika dibagi 2."
          },
          {
            "kind": "code",
            "text": "print(10 % 2)\nprint(7 % 2)"
          },
          {
            "kind": "output",
            "text": "0\n1"
          },
          {
            "kind": "tip",
            "text": "Tahukah kamu? Di unit If Statement, kamu akan memakai angka % 2 == 0 untuk membuat program yang bisa menentukan genap atau ganjil sendiri."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Operator + - * /",
      "Bagi bulat // dan sisa bagi %",
      "Pangkat **",
      "Urutan operasi dan tanda kurung"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Sisa Bagi",
        "prompt": "Berapa hasil 17 % 5?",
        "correctAnswer": "2",
        "explanation": {
          "correct": "17 dibagi 5 hasilnya 3, sisanya 2. Operator % mengambil sisanya.",
          "wrong": "% bukan persen dan bukan hasil bagi. % mengambil sisa pembagian: 17 = 5 × 3 + 2."
        },
        "options": [
          "3",
          "2",
          "3.4",
          "85"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Permen Sisa",
        "prompt": "Ada 20 permen dibagi rata ke 6 anak. Lengkapi kode agar tampil sisa permennya, yaitu 2.",
        "correctAnswer": "%",
        "explanation": {
          "correct": "20 % 6 menghasilkan sisa bagi, yaitu 2.",
          "wrong": "// menghasilkan 3 (hasil bagi bulat) dan / menghasilkan 3.333... Untuk sisa, pakai %."
        },
        "codeTemplate": "sisa = 20 ___ 6\nprint(sisa)",
        "chips": [
          "%",
          "//",
          "/"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Nilai Rata-Rata",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\nRata-rata: 80.0",
        "correctAnswer": "total = 70 + 80 + 90\nrata = total / 3\nprint(\"Rata-rata:\", rata)",
        "explanation": {
          "correct": "Jumlahkan dulu, bagi 3, lalu tampilkan. Hasil / selalu desimal, jadi 80.0.",
          "wrong": "Rata-rata baru bisa dihitung setelah totalnya ada, dan baru bisa ditampilkan setelah dihitung."
        },
        "correctOrder": [
          "total = 70 + 80 + 90",
          "rata = total / 3",
          "print(\"Rata-rata:\", rata)"
        ],
        "stepItems": [
          "rata = total / 3",
          "print(\"Rata-rata:\", rata)",
          "total = 70 + 80 + 90"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Kurung Mengubah Hasil",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "14 lalu 20",
        "explanation": {
          "correct": "Tanpa kurung, perkalian didahulukan: 2 + 12 = 14. Dengan kurung: 5 × 4 = 20.",
          "wrong": "Kali dikerjakan sebelum tambah, kecuali ada tanda kurung yang mendahulukan penjumlahan."
        },
        "options": [
          "14 lalu 20",
          "20 lalu 20",
          "14 lalu 14",
          "20 lalu 14"
        ],
        "codeSnippet": "print(2 + 3 * 4)\nprint((2 + 3) * 4)"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Menit ke Jam",
        "prompt": "Buat program yang meminta jumlah menit (bilangan bulat), lalu menampilkannya dalam jam dan sisa menit. Contoh jika diketik 135:\n\nContoh hasil:\nMenit: 135\n2 jam 15 menit",
        "correctAnswer": "menit = int(input(\"Menit: \"))\nprint(menit // 60, \"jam\", menit % 60, \"menit\")",
        "explanation": {
          "correct": "Hebat! // memberi jumlah jam penuh, % memberi sisa menitnya.",
          "wrong": "Satu jam = 60 menit. Pakai menit // 60 untuk jam dan menit % 60 untuk sisa menit."
        },
        "acceptedAnswers": [
          "menit = int(input(\"Menit: \"))\nprint(menit // 60, \"jam\", menit % 60, \"menit\")",
          "menit = int(input(\"Menit: \"))\njam = menit // 60\nsisa = menit % 60\nprint(jam, \"jam\", sisa, \"menit\")"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 17,
    "unitNumber": 3,
    "unit": "Unit 3 · Input Output",
    "title": "f-string: Teks Berisi Data",
    "subtitle": "f-string, round()",
    "xp": 50,
    "description": "Siswa bisa menyisipkan isi variabel dan hasil hitungan ke dalam teks memakai f-string, serta membulatkan angka desimal dengan round().",
    "slides": [
      {
        "id": 1,
        "title": "Repot Kalau Banyak Koma",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Coba lihat kode ini:"
          },
          {
            "kind": "code",
            "text": "nama = \"Rani\"\numur = 13\nprint(\"Halo\", nama + \",\", \"umurmu\", umur, \"tahun\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya Halo Rani, umurmu 13 tahun, tapi kodenya penuh koma dan tanda kutip. Mudah salah, sulit dibaca."
          },
          {
            "kind": "callout",
            "text": "Bagaimana kalau kita bisa menulis kalimatnya utuh, lalu cukup \"menempelkan\" isi variabel di tempatnya?"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Mengenal f-string",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "f-string adalah teks yang diawali huruf f. Isi variabel ditulis di dalam kurung kurawal { }:"
          },
          {
            "kind": "code",
            "text": "nama = \"Rani\"\numur = 13\nprint(f\"Halo {nama}, umurmu {umur} tahun\")"
          },
          {
            "kind": "output",
            "text": "Halo Rani, umurmu 13 tahun"
          },
          {
            "kind": "tip",
            "text": "Ingat tiga hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- Huruf f ditulis tepat sebelum tanda kutip pembuka\n- Nama variabel ditulis di dalam { }\n- Spasi dan tanda baca diatur sendiri, persis seperti yang kamu ketik"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Menghitung di Dalam Kurung Kurawal",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Di dalam { } juga boleh ditulis hitungan. Python menghitungnya dulu, baru menempelkan hasilnya:"
          },
          {
            "kind": "code",
            "text": "a = 3\nb = 4\nprint(f\"{a} x {b} = {a * b}\")\nprint(f\"Tahun depan umurku {13 + 1}\")"
          },
          {
            "kind": "output",
            "text": "3 x 4 = 12\nTahun depan umurku 14"
          },
          {
            "kind": "warning",
            "text": "Awas! Tanpa huruf f di depan, kurung kurawal ikut tampil apa adanya: print(\"{a}\") menampilkan tulisan {a}."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Membulatkan dengan round()",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Hasil pembagian sering punya banyak angka di belakang titik. Rapikan dengan round():"
          },
          {
            "kind": "code",
            "text": "hasil = 10 / 3\nprint(hasil)\nprint(round(hasil, 2))\nprint(round(7.6))"
          },
          {
            "kind": "output",
            "text": "3.3333333333333335\n3.33\n8"
          },
          {
            "kind": "paragraph",
            "text": "round(angka, 2) membulatkan menjadi 2 angka di belakang titik. Tanpa angka kedua, hasilnya dibulatkan menjadi bilangan bulat."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "f-string Bertemu input()",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Gabungkan dengan input() untuk membuat program yang ramah:"
          },
          {
            "kind": "code",
            "text": "nama = input(\"Nama: \")\nnilai = int(input(\"Nilai: \"))\nprint(f\"{nama} mendapat nilai {nilai}, tambah bonus jadi {nilai + 5}\")"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik Dika dan 80:"
          },
          {
            "kind": "output",
            "text": "Nama: Dika\nNilai: 80\nDika mendapat nilai 80, tambah bonus jadi 85"
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Menyisipkan variabel dengan f-string",
      "Menghitung di dalam kurung kurawal",
      "Membulatkan angka dengan round()",
      "Memakai f-string bersama input()"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Hitung di Kurawal",
        "prompt": "Apa yang tampil dari print(f\"Skor: {10 + 5}\")?",
        "correctAnswer": "Skor: 15",
        "explanation": {
          "correct": "Isi kurung kurawal dihitung dulu, lalu hasilnya ditempelkan ke dalam teks.",
          "wrong": "Karena ada huruf f, isi { } dihitung sebagai angka: 10 + 5 = 15."
        },
        "options": [
          "Skor: {10 + 5}",
          "Skor: 10 + 5",
          "Skor: 15",
          "Skor: 105"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Huruf Ajaib",
        "prompt": "Lengkapi kode agar tampil Halo Rani.",
        "correctAnswer": "f",
        "explanation": {
          "correct": "Huruf f sebelum tanda kutip membuat {nama} diganti dengan isinya.",
          "wrong": "f-string selalu diawali huruf f. Tanpa itu, tulisan {nama} tampil apa adanya."
        },
        "codeTemplate": "nama = \"Rani\"\nprint(___\"Halo {nama}\")",
        "chips": [
          "f",
          "s",
          "$"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Kelas Dika",
        "prompt": "Susun kode agar hasilnya seperti ini (pengguna mengetik Dika dan 8):\n\nContoh hasil:\nNama: Dika\nKelas: 8\nDika duduk di kelas 8",
        "correctAnswer": "nama = input(\"Nama: \")\nkelas = input(\"Kelas: \")\nprint(f\"{nama} duduk di kelas {kelas}\")",
        "explanation": {
          "correct": "Dua jawaban diminta dulu, lalu ditempelkan ke kalimat dengan f-string.",
          "wrong": "Pertanyaan nama muncul lebih dulu, lalu kelas, dan kalimatnya baru bisa ditampilkan setelah keduanya terisi."
        },
        "correctOrder": [
          "nama = input(\"Nama: \")",
          "kelas = input(\"Kelas: \")",
          "print(f\"{nama} duduk di kelas {kelas}\")"
        ],
        "stepItems": [
          "print(f\"{nama} duduk di kelas {kelas}\")",
          "kelas = input(\"Kelas: \")",
          "nama = input(\"Nama: \")"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Harga Diskon",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "Bayar: 7500.0",
        "explanation": {
          "correct": "10000 × 25 / 100 = 2500.0, lalu 10000 − 2500.0 = 7500.0. Ada /, jadi hasilnya desimal.",
          "wrong": "Kali dan bagi dikerjakan sebelum kurang. Pembagian / selalu menghasilkan desimal, jadi tampil 7500.0."
        },
        "options": [
          "Bayar: 7500.0",
          "Bayar: 7500",
          "Bayar: {bayar}",
          "Bayar: 2500.0"
        ],
        "codeSnippet": "harga = 10000\ndiskon = 25\nbayar = harga - harga * diskon / 100\nprint(f\"Bayar: {bayar}\")"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Umur Tahun Depan",
        "prompt": "Buat program yang meminta nama (teks) dan umur (bilangan bulat), lalu memakai f-string untuk menampilkan kalimat seperti contoh. Pakai nama variabel nama dan umur.\n\nContoh hasil:\nNama: Sari\nUmur: 12\nHalo Sari, tahun depan kamu 13 tahun",
        "correctAnswer": "nama = input(\"Nama: \")\numur = int(input(\"Umur: \"))\nprint(f\"Halo {nama}, tahun depan kamu {umur + 1} tahun\")",
        "explanation": {
          "correct": "Keren! Kamu menempelkan variabel dan hasil hitungan sekaligus ke dalam kalimat.",
          "wrong": "Minta umur dengan int(input()), lalu tulis f\"Halo {nama}, tahun depan kamu {umur + 1} tahun\" di dalam print."
        },
        "acceptedAnswers": [
          "nama = input(\"Nama: \")\numur = int(input(\"Umur: \"))\nprint(f\"Halo {nama}, tahun depan kamu {umur + 1} tahun\")"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 18,
    "unitNumber": 3,
    "unit": "Unit 3 · Input Output",
    "title": "Proyek Mini: Struk Belanja",
    "subtitle": "Merancang program, potongan, struk rapi",
    "xp": 50,
    "description": "Siswa merancang dan menulis program struk belanja yang menggabungkan input, operator hitung, f-string, dan output yang rapi.",
    "slides": [
      {
        "id": 1,
        "title": "Rancang Dulu, Baru Ketik",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Programmer tidak langsung mengetik kode. Mereka merancang algoritmanya dulu dengan pola input, proses, output:"
          },
          {
            "kind": "pseudocode",
            "text": "BACA harga dan jumlah\nHITUNG total = harga x jumlah\nHITUNG potongan = 10% dari total\nHITUNG bayar = total - potongan\nTAMPILKAN struk"
          },
          {
            "kind": "callout",
            "text": "Apa saja yang biasanya tertulis di struk belanja minimarket?"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Langkah 1: Input",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Harga dan jumlah barang berupa angka, jadi bungkus input() dengan int():"
          },
          {
            "kind": "code",
            "text": "harga = int(input(\"Harga: \"))\njumlah = int(input(\"Jumlah: \"))"
          },
          {
            "kind": "tip",
            "text": "Tips: Tulis pertanyaan yang jelas supaya kasir tahu harus mengetik apa."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Langkah 2: Proses",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Hitung total, potongan 10%, dan uang yang harus dibayar:"
          },
          {
            "kind": "code",
            "text": "total = harga * jumlah\npotongan = total * 10 // 100\nbayar = total - potongan"
          },
          {
            "kind": "paragraph",
            "text": "Potongan 10% sama dengan total dikali 10 lalu dibagi 100. Pakai // supaya hasilnya bilangan bulat tanpa desimal."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Langkah 3: Output yang Rapi",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Tampilkan hasilnya seperti struk sungguhan dengan garis pemisah dan f-string:"
          },
          {
            "kind": "code",
            "text": "print(\"=\" * 20)\nprint(f\"Total   : {total}\")\nprint(f\"Potongan: {potongan}\")\nprint(f\"Bayar   : {bayar}\")\nprint(\"=\" * 20)"
          },
          {
            "kind": "paragraph",
            "text": "Spasi tambahan setelah kata \"Total\" dan \"Bayar\" membuat titik duanya sejajar dan lebih rapi."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Program Lengkap dan Uji Coba",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Gabungkan ketiga langkah. Jika diketik 5000 dan 3:"
          },
          {
            "kind": "output",
            "text": "Harga: 5000\nJumlah: 3\n====================\nTotal   : 15000\nPotongan: 1500\nBayar   : 13500\n===================="
          },
          {
            "kind": "tip",
            "text": "Tips: Uji programmu dengan beberapa angka berbeda, lalu cocokkan dengan hitungan manual. Kalau berbeda, telusuri kodenya seperti di Level 5."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Merancang program dengan input, proses, output",
      "Menghitung total dan potongan persen",
      "Menampilkan struk yang rapi",
      "Menguji program dengan beberapa data"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Langkah Pertama",
        "prompt": "Apa langkah pertama yang paling baik sebelum menulis program?",
        "correctAnswer": "Merancang algoritmanya: input, proses, dan output",
        "explanation": {
          "correct": "Rancangan membuat kamu tahu data apa yang diminta, apa yang dihitung, dan apa yang ditampilkan.",
          "wrong": "Tanpa rancangan, mudah ada langkah yang terlewat. Susun dulu input, proses, dan output-nya."
        },
        "options": [
          "Langsung mengetik kode secepatnya",
          "Merancang algoritmanya: input, proses, dan output",
          "Memilih warna tampilan program",
          "Menyalin kode program lain"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Potongan Bulat",
        "prompt": "Lengkapi kode agar potongan 10% berupa bilangan bulat tanpa desimal.",
        "correctAnswer": "//",
        "explanation": {
          "correct": "// membagi dan membuang desimalnya, jadi hasilnya 2500.",
          "wrong": "% mengambil sisa bagi, dan ** adalah pangkat. Untuk membagi tanpa desimal, pakai //."
        },
        "codeTemplate": "total = 25000\npotongan = total * 10 ___ 100\nprint(potongan)",
        "chips": [
          "//",
          "%",
          "**"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Total Bayar",
        "prompt": "Susun kode agar hasilnya seperti ini (pengguna mengetik 4000 dan 5):\n\nContoh hasil:\nHarga: 4000\nJumlah: 5\nTotal bayar: 20000",
        "correctAnswer": "harga = int(input(\"Harga: \"))\njumlah = int(input(\"Jumlah: \"))\ntotal = harga * jumlah\nprint(f\"Total bayar: {total}\")",
        "explanation": {
          "correct": "Input, proses, output, persis seperti rancangan struk.",
          "wrong": "Harga ditanya lebih dulu, lalu jumlah. Total baru bisa dihitung setelah keduanya ada."
        },
        "correctOrder": [
          "harga = int(input(\"Harga: \"))",
          "jumlah = int(input(\"Jumlah: \"))",
          "total = harga * jumlah",
          "print(f\"Total bayar: {total}\")"
        ],
        "stepItems": [
          "print(f\"Total bayar: {total}\")",
          "jumlah = int(input(\"Jumlah: \"))",
          "total = harga * jumlah",
          "harga = int(input(\"Harga: \"))"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Setelah Potongan",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "Bayar 22500",
        "explanation": {
          "correct": "Potongan = 250000 // 100 = 2500, lalu 25000 − 2500 = 22500. Karena memakai //, tidak ada desimal.",
          "wrong": "Hitung potongannya dulu (2500), lalu kurangi dari total di dalam kurung kurawal."
        },
        "options": [
          "Bayar 22500",
          "Bayar 2500",
          "Bayar 25000",
          "Bayar 22500.0"
        ],
        "codeSnippet": "total = 25000\npotongan = total * 10 // 100\nprint(f\"Bayar {total - potongan}\")"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Patungan",
        "prompt": "Buat program yang meminta total harga dan banyaknya teman (bilangan bulat), lalu menampilkan bagian per orang (bagi bulat) dan sisanya. Contoh jika diketik 50000 dan 3:\n\nContoh hasil:\nTotal: 50000\nTeman: 3\nPer orang: 16666\nSisa: 2",
        "correctAnswer": "total = int(input(\"Total: \"))\nteman = int(input(\"Teman: \"))\nprint(f\"Per orang: {total // teman}\")\nprint(f\"Sisa: {total % teman}\")",
        "explanation": {
          "correct": "Mantap! // membagi rata dan % menunjukkan sisa yang belum terbagi.",
          "wrong": "Pakai total // teman untuk bagian per orang dan total % teman untuk sisanya."
        },
        "acceptedAnswers": [
          "total = int(input(\"Total: \"))\nteman = int(input(\"Teman: \"))\nprint(f\"Per orang: {total // teman}\")\nprint(f\"Sisa: {total % teman}\")",
          "total = int(input(\"Total: \"))\nteman = int(input(\"Teman: \"))\nprint(\"Per orang:\", total // teman)\nprint(\"Sisa:\", total % teman)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 19,
    "unitNumber": 4,
    "unit": "Unit 4 · If Statement",
    "title": "Komputer Bisa Memilih",
    "subtitle": "if, operator perbandingan",
    "xp": 50,
    "description": "Siswa bisa membuat program yang mengambil keputusan dengan if dan memakai operator perbandingan.",
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
            "kind": "tip",
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
        "title": "Banyak Baris di Dalam if",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Semua baris yang menjorok di bawah if adalah satu blok. Blok hanya dijalankan jika kondisinya benar. Baris yang tidak menjorok selalu dijalankan."
          },
          {
            "kind": "code",
            "text": "nilai = 90\nif nilai >= 75:\n    print(\"Lulus!\")\n    print(\"Selamat ya!\")\nprint(\"Program selesai\")"
          },
          {
            "kind": "output",
            "text": "Lulus!\nSelamat ya!\nProgram selesai"
          },
          {
            "kind": "paragraph",
            "text": "Jika nilai diganti 60, yang tampil hanya Program selesai."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Membandingkan Teks",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Operator == juga bisa membandingkan teks. Teks dianggap sama hanya jika semua hurufnya persis sama, termasuk huruf besar dan kecil."
          },
          {
            "kind": "code",
            "text": "kota = input(\"Ibu kota Indonesia? \")\nif kota == \"Jakarta\":\n    print(\"Benar!\")"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik Jakarta, tampil Benar!. Jika diketik jakarta dengan huruf kecil, tidak ada yang tampil."
          },
          {
            "kind": "tip",
            "text": "Tips: Untuk teks, pastikan ejaan dan huruf kapitalnya sama dengan yang kamu tulis di dalam kode."
          }
        ],
        "mascotKey": "think"
      }
    ],
    "summaryPoints": [
      "Kondisi dan aksi dalam keputusan sehari-hari",
      "Menulis if dengan titik dua dan indentasi",
      "Operator perbandingan == != > < >= <=",
      "Blok if dan membandingkan teks"
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
        "title": "Susun Kode: Cek Umur KTP",
        "prompt": "Susun kode agar hasilnya seperti ini (pengguna mengetik 18):\n\nContoh hasil:\nUmur: 18\nBoleh membuat KTP\nTerima kasih",
        "correctAnswer": "umur = int(input(\"Umur: \"))\nif umur >= 17:\n    print(\"Boleh membuat KTP\")\nprint(\"Terima kasih\")",
        "explanation": {
          "correct": "Umur diminta dulu, lalu diperiksa. \"Terima kasih\" tidak menjorok, jadi selalu tampil di akhir.",
          "wrong": "Kondisi if butuh umur yang sudah diminta. Aksi yang menjorok ada tepat di bawah if."
        },
        "correctOrder": [
          "umur = int(input(\"Umur: \"))",
          "if umur >= 17:",
          "    print(\"Boleh membuat KTP\")",
          "print(\"Terima kasih\")"
        ],
        "stepItems": [
          "print(\"Terima kasih\")",
          "    print(\"Boleh membuat KTP\")",
          "if umur >= 17:",
          "umur = int(input(\"Umur: \"))"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Huruf Besar Kecil",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "Cek selesai",
        "explanation": {
          "correct": "\"Python\" dan \"python\" berbeda di huruf P, jadi kondisinya salah. Hanya baris di luar if yang tampil.",
          "wrong": "Python membedakan huruf besar dan kecil. Kondisinya salah, sehingga \"Sama\" tidak tampil."
        },
        "options": [
          "Sama",
          "Cek selesai",
          "Sama lalu Cek selesai",
          "Error"
        ],
        "codeSnippet": "kata = \"Python\"\nif kata == \"python\":\n    print(\"Sama\")\nprint(\"Cek selesai\")"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Angka Besar",
        "prompt": "Buat program yang meminta sebuah angka (bilangan bulat). Jika angkanya lebih dari 100, tampilkan Angka besar!",
        "correctAnswer": "angka = int(input(\"Angka: \"))\nif angka > 100:\n    print(\"Angka besar!\")",
        "explanation": {
          "correct": "Programmu bisa menilai angka sendiri!",
          "wrong": "Ubah input dengan int(), tulis if angka > 100: dengan titik dua, lalu print yang menjorok 4 spasi."
        },
        "acceptedAnswers": [
          "angka = int(input(\"Angka: \"))\nif angka > 100:\n    print(\"Angka besar!\")",
          "angka = int(input(\"Angka: \"))\nif 100 < angka:\n    print(\"Angka besar!\")"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 20,
    "unitNumber": 4,
    "unit": "Unit 4 · If Statement",
    "title": "Else dan Elif",
    "subtitle": "else, elif, urutan kondisi",
    "xp": 50,
    "description": "Siswa bisa membuat program dengan dua pilihan memakai else dan banyak pilihan memakai elif, serta memahami pentingnya urutan kondisi.",
    "slides": [
      {
        "id": 1,
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
        "id": 2,
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
      },
      {
        "id": 3,
        "title": "Urutan Kondisi Itu Penting",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Lihat program nilai huruf ini. Nilai 95 seharusnya mendapat A:"
          },
          {
            "kind": "code",
            "text": "nilai = 95\nif nilai >= 60:\n    print(\"C\")\nelif nilai >= 90:\n    print(\"A\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya justru C! Kondisi nilai >= 60 sudah benar lebih dulu, jadi elif di bawahnya tidak pernah diperiksa."
          },
          {
            "kind": "warning",
            "text": "Awas! Saat memakai elif untuk rentang nilai, tulis kondisi yang paling ketat di atas: >= 90 dulu, lalu >= 75, lalu >= 60."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 4,
        "title": "Genap atau Ganjil?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Ingat sisa bagi % dari Level 16? Sekarang pakai di dalam if:"
          },
          {
            "kind": "code",
            "text": "angka = int(input(\"Angka: \"))\nif angka % 2 == 0:\n    print(\"Genap\")\nelse:\n    print(\"Ganjil\")"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik 7, hasilnya Ganjil, karena 7 % 2 bernilai 1, bukan 0."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 5,
        "title": "Aturan Menyusun if, elif, else",
        "blocks": [
          {
            "kind": "tip",
            "text": "Ingat empat hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- Selalu dimulai dengan satu if\n- Boleh ada banyak elif di tengah, atau tidak sama sekali\n- Boleh ada satu else di paling akhir, atau tidak sama sekali\n- Dari semua cabang, hanya satu yang dijalankan"
          },
          {
            "kind": "tip",
            "text": "Tips: else cocok sebagai \"jawaban cadangan\" saat tidak ada kondisi yang benar."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Memakai else untuk \"kalau tidak\"",
      "Memakai elif untuk banyak pilihan",
      "Urutan kondisi yang benar",
      "Mengecek genap atau ganjil"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Kapan else Jalan?",
        "prompt": "Kapan bagian else dijalankan?",
        "correctAnswer": "Saat semua kondisi if dan elif di atasnya salah",
        "explanation": {
          "correct": "else adalah cadangan: dijalankan hanya jika tidak ada kondisi di atasnya yang benar.",
          "wrong": "Jika kondisi if atau elif ada yang benar, else dilewati. else hanya untuk saat semuanya salah."
        },
        "options": [
          "Selalu, setiap program berjalan",
          "Saat semua kondisi if dan elif di atasnya salah",
          "Saat kondisi if benar",
          "Hanya jika tidak ada elif"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Nilai B",
        "prompt": "Lengkapi kode agar nilai 82 menampilkan B.",
        "correctAnswer": "elif",
        "explanation": {
          "correct": "elif menambahkan pilihan baru yang punya kondisi sendiri.",
          "wrong": "else tidak boleh diikuti kondisi, dan when bukan perintah Python. Untuk pilihan berkondisi berikutnya, pakai elif."
        },
        "codeTemplate": "nilai = 82\nif nilai >= 90:\n    print(\"A\")\n____ nilai >= 80:\n    print(\"B\")\nelse:\n    print(\"C\")",
        "chips": [
          "elif",
          "else",
          "when"
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
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 21,
    "unitNumber": 4,
    "unit": "Unit 4 · If Statement",
    "title": "and, or, not",
    "subtitle": "Menggabungkan dan membalik syarat",
    "xp": 50,
    "description": "Siswa bisa menggabungkan beberapa syarat dengan and dan or, membalik syarat dengan not, dan memeriksa rentang nilai.",
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
        "title": "Rentang Nilai Cara Singkat",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Memeriksa \"antara 20 dan 30\" bisa ditulis dengan dua cara yang hasilnya sama:"
          },
          {
            "kind": "code",
            "text": "suhu = 25\nif suhu >= 20 and suhu <= 30:\n    print(\"Nyaman\")\nif 20 <= suhu <= 30:\n    print(\"Tetap nyaman\")"
          },
          {
            "kind": "output",
            "text": "Nyaman\nTetap nyaman"
          },
          {
            "kind": "paragraph",
            "text": "Cara kedua dibaca seperti di matematika: 20 ≤ suhu ≤ 30. Python mendukung keduanya."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Banyak Syarat dan Tanda Kurung",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Syarat bisa digabung lebih dari dua. Pakai tanda kurung agar maksudnya jelas:"
          },
          {
            "kind": "code",
            "text": "umur = 65\npelajar = False\nif (umur < 12 or umur >= 60) and not pelajar:\n    print(\"Dapat diskon lansia atau anak\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Dapat diskon lansia atau anak."
          },
          {
            "kind": "warning",
            "text": "Awas! Tanpa tanda kurung, and dikerjakan lebih dulu daripada or. Gunakan kurung supaya Python menghitung sesuai yang kamu maksud."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "and dan or untuk menggabungkan syarat",
      "not untuk membalik nilai",
      "Memeriksa rentang nilai dengan dua cara",
      "Tanda kurung pada syarat yang panjang"
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
        "title": "Isian Bagian Kosong: Hari Libur",
        "prompt": "Lengkapi kode agar \"Libur!\" tampil di hari Sabtu maupun Minggu.",
        "correctAnswer": "or",
        "explanation": {
          "correct": "Cukup salah satu syarat benar, jadi pakai or.",
          "wrong": "Hari tidak mungkin Sabtu dan Minggu sekaligus. Karena cukup salah satu, pakai or."
        },
        "codeTemplate": "hari = input(\"Hari apa? \")\nif hari == \"Sabtu\" ___ hari == \"Minggu\":\n    print(\"Libur!\")",
        "chips": [
          "or",
          "and",
          "not"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Nilai Valid",
        "prompt": "Susun kode agar program menampilkan Nilai valid untuk nilai 0 sampai 100, dan Nilai tidak valid selain itu.",
        "correctAnswer": "nilai = int(input(\"Nilai: \"))\nif nilai >= 0 and nilai <= 100:\n    print(\"Nilai valid\")\nelse:\n    print(\"Nilai tidak valid\")",
        "explanation": {
          "correct": "Dua syarat digabung dengan and, jadi nilai harus memenuhi batas bawah dan batas atas.",
          "wrong": "Minta nilai dulu, periksa dengan if ... and ..., lalu else untuk nilai di luar rentang."
        },
        "correctOrder": [
          "nilai = int(input(\"Nilai: \"))",
          "if nilai >= 0 and nilai <= 100:",
          "    print(\"Nilai valid\")",
          "else:",
          "    print(\"Nilai tidak valid\")"
        ],
        "stepItems": [
          "    print(\"Nilai tidak valid\")",
          "if nilai >= 0 and nilai <= 100:",
          "else:",
          "nilai = int(input(\"Nilai: \"))",
          "    print(\"Nilai valid\")"
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
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 22,
    "unitNumber": 4,
    "unit": "Unit 4 · If Statement",
    "title": "If Bersarang & match-case",
    "subtitle": "if di dalam if, match-case",
    "xp": 50,
    "description": "Siswa bisa menulis if di dalam if, memakai match-case (versi switch di Python), dan memilih antara if dan match. Catatan teknis: match-case butuh Python 3.10 ke atas.",
    "slides": [
      {
        "id": 1,
        "title": "if di Dalam if",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Kadang keputusan kedua baru diperiksa setelah keputusan pertama terpenuhi. Contohnya di perpustakaan:"
          },
          {
            "kind": "code",
            "text": "umur = 15\npunya_kartu = True\nif umur >= 13:\n    if punya_kartu:\n        print(\"Boleh pinjam buku\")\n    else:\n        print(\"Buat kartu dulu\")\nelse:\n    print(\"Ajak orang tua\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Boleh pinjam buku."
          },
          {
            "kind": "paragraph",
            "text": "if yang berada di dalam blok if lain disebut if bersarang."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Membaca Indentasi Bersarang",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pada if bersarang, indentasi bertingkat: 4 spasi untuk blok pertama, 8 spasi untuk blok di dalamnya."
          },
          {
            "kind": "tip",
            "text": "Ingat tiga hal ini!"
          },
          {
            "kind": "paragraph",
            "text": "- else selalu berpasangan dengan if yang sejajar dengannya\n- Blok dalam (8 spasi) hanya diperiksa jika kondisi luar (4 spasi) benar\n- Baca dari luar ke dalam, seperti membuka pintu satu per satu"
          },
          {
            "kind": "tip",
            "text": "Tips: Kalau bersarangnya terlalu dalam, coba ganti dengan and. Misalnya if umur >= 13 and punya_kartu:."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
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
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 4,
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
      },
      {
        "id": 5,
        "title": "Beberapa Pilihan dalam Satu case",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Satu case bisa berisi beberapa pilihan sekaligus dengan tanda | yang artinya \"atau\":"
          },
          {
            "kind": "code",
            "text": "hari = \"Minggu\"\nmatch hari:\n    case \"Sabtu\" | \"Minggu\":\n        print(\"Akhir pekan!\")\n    case _:\n        print(\"Hari sekolah\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Akhir pekan!."
          },
          {
            "kind": "tip",
            "text": "Tahukah kamu? Tanda | di dalam case bekerja seperti or di dalam if."
          }
        ],
        "mascotKey": "happy"
      }
    ],
    "summaryPoints": [
      "if di dalam if dan indentasi bertingkat",
      "match-case sebagai switch di Python",
      "Memilih antara if dan match",
      "Beberapa pilihan dalam satu case"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Arti case _",
        "prompt": "Apa arti case _ di dalam match?",
        "correctAnswer": "Semua nilai yang tidak cocok dengan case di atasnya",
        "explanation": {
          "correct": "case _ menangkap semua sisa nilai, mirip else di if.",
          "wrong": "Garis bawah di case _ artinya \"apa saja\". Karena itu case _ ditulis paling bawah sebagai cadangan."
        },
        "options": [
          "Pilihan yang berisi garis bawah",
          "Pilihan pertama yang selalu diperiksa",
          "Semua nilai yang tidak cocok dengan case di atasnya",
          "Tanda untuk menghentikan program"
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
        "title": "Tebak Output: Perpustakaan",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "Buat kartu dulu",
        "explanation": {
          "correct": "Umur 15 lolos pemeriksaan luar, lalu punya_kartu bernilai False, jadi else di dalam yang dijalankan.",
          "wrong": "Periksa dari luar: 15 >= 13 benar, masuk ke dalam. Di dalam, punya_kartu salah, jadi tampil \"Buat kartu dulu\"."
        },
        "options": [
          "Boleh pinjam buku",
          "Buat kartu dulu",
          "Ajak orang tua",
          "Tidak ada yang tampil"
        ],
        "codeSnippet": "umur = 15\npunya_kartu = False\nif umur >= 13:\n    if punya_kartu:\n        print(\"Boleh pinjam buku\")\n    else:\n        print(\"Buat kartu dulu\")\nelse:\n    print(\"Ajak orang tua\")"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Kode Warna",
        "prompt": "Buat program dengan match-case. Minta satu huruf: m tampilkan Merah, k tampilkan Kuning, h tampilkan Hijau, selain itu tampilkan Warna tidak dikenal.",
        "correctAnswer": "huruf = input(\"Kode warna: \")\nmatch huruf:\n    case \"m\":\n        print(\"Merah\")\n    case \"k\":\n        print(\"Kuning\")\n    case \"h\":\n        print(\"Hijau\")\n    case _:\n        print(\"Warna tidak dikenal\")",
        "explanation": {
          "correct": "Mantap! Pilihan tetap seperti kode warna paling rapi ditulis dengan match-case.",
          "wrong": "Tulis match huruf:, lalu satu case untuk setiap huruf, dan case _ di paling bawah untuk huruf lainnya."
        },
        "acceptedAnswers": [
          "huruf = input(\"Kode warna: \")\nmatch huruf:\n    case \"m\":\n        print(\"Merah\")\n    case \"k\":\n        print(\"Kuning\")\n    case \"h\":\n        print(\"Hijau\")\n    case _:\n        print(\"Warna tidak dikenal\")",
          "huruf = input(\"Kode warna: \")\nif huruf == \"m\":\n    print(\"Merah\")\nelif huruf == \"k\":\n    print(\"Kuning\")\nelif huruf == \"h\":\n    print(\"Hijau\")\nelse:\n    print(\"Warna tidak dikenal\")"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 23,
    "unitNumber": 4,
    "unit": "Unit 4 · If Statement",
    "title": "Memeriksa Input",
    "subtitle": "Validasi, isian kosong, operator in",
    "xp": 50,
    "description": "Siswa bisa membuat program yang memeriksa input sebelum dipakai: angka yang tidak masuk akal, rentang nilai, teks kosong, dan huruf dengan operator in.",
    "slides": [
      {
        "id": 1,
        "title": "Pengguna Bisa Salah Ketik",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Program tidak bisa memaksa pengguna mengetik dengan benar. Ada yang mengetik umur -5, nilai 150, atau tidak mengetik apa pun lalu menekan Enter."
          },
          {
            "kind": "paragraph",
            "text": "Program yang baik memeriksa input dulu sebelum memakainya. Pemeriksaan ini disebut validasi."
          },
          {
            "kind": "callout",
            "text": "Pernahkah kamu melihat pesan \"Nomor HP tidak valid\" saat mendaftar di aplikasi? Itu validasi!"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Menolak Angka yang Tidak Masuk Akal",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Umur tidak mungkin negatif. Periksa dengan if:"
          },
          {
            "kind": "code",
            "text": "umur = int(input(\"Umur: \"))\nif umur < 0:\n    print(\"Umur tidak boleh negatif\")\nelse:\n    print(\"Umur kamu\", umur)"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik -5, tampil Umur tidak boleh negatif. Jika diketik 13, tampil Umur kamu 13."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Isian Kosong",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Jika pengguna langsung menekan Enter, input() menghasilkan teks kosong \"\". Periksa seperti ini:"
          },
          {
            "kind": "code",
            "text": "nama = input(\"Nama: \")\nif nama == \"\":\n    print(\"Nama belum diisi\")\nelse:\n    print(\"Halo,\", nama)"
          },
          {
            "kind": "tip",
            "text": "Tips: Teks kosong ditulis dengan dua tanda kutip tanpa isi apa pun di antaranya."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Operator in",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Operator in memeriksa apakah sesuatu ada di dalam teks atau daftar. Hasilnya True atau False:"
          },
          {
            "kind": "code",
            "text": "huruf = input(\"Huruf: \")\nif huruf in \"aiueo\":\n    print(\"Huruf vokal\")\nelse:\n    print(\"Huruf konsonan\")"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik e, hasilnya Huruf vokal. in juga bisa dipakai pada daftar: \"apel\" in [\"apel\", \"jeruk\"] bernilai True."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Validasi Bertingkat",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Periksa input yang salah lebih dulu, baru proses input yang benar:"
          },
          {
            "kind": "code",
            "text": "nilai = int(input(\"Nilai: \"))\nif nilai < 0 or nilai > 100:\n    print(\"Nilai tidak valid\")\nelif nilai >= 75:\n    print(\"Lulus\")\nelse:\n    print(\"Remedial\")"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik 150, hasilnya Nilai tidak valid. Nilai 80 menghasilkan Lulus, dan nilai 60 menghasilkan Remedial."
          },
          {
            "kind": "warning",
            "text": "Awas! Kalau pemeriksaan nilai >= 75 ditulis paling atas, nilai 150 akan dianggap lulus. Validasi selalu ditulis lebih dulu."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Pengertian validasi input",
      "Menolak angka yang tidak masuk akal",
      "Memeriksa isian kosong",
      "Operator in dan validasi bertingkat"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Kenapa Validasi?",
        "prompt": "Kenapa program perlu memeriksa input dari pengguna?",
        "correctAnswer": "Karena pengguna bisa mengetik data yang salah atau tidak masuk akal",
        "explanation": {
          "correct": "Validasi menjaga program tetap benar walaupun pengguna salah ketik.",
          "wrong": "Program tidak bisa memaksa pengguna mengetik dengan benar, jadi programlah yang harus memeriksa."
        },
        "options": [
          "Agar program berjalan lebih lambat",
          "Karena pengguna bisa mengetik data yang salah atau tidak masuk akal",
          "Karena Python mewajibkannya di setiap program",
          "Agar kodenya terlihat lebih panjang"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Huruf Vokal",
        "prompt": "Lengkapi kode agar \"Vokal\" tampil jika huruf yang diketik ada di dalam \"aiueo\".",
        "correctAnswer": "in",
        "explanation": {
          "correct": "in memeriksa apakah huruf itu ada di dalam teks \"aiueo\".",
          "wrong": "== hanya benar jika hurufnya sama persis dengan seluruh teks \"aiueo\". Untuk \"ada di dalam\", pakai in."
        },
        "codeTemplate": "huruf = input(\"Huruf: \")\nif huruf ___ \"aiueo\":\n    print(\"Vokal\")",
        "chips": [
          "in",
          "==",
          "and"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Nama Wajib Diisi",
        "prompt": "Susun kode agar program menampilkan Nama belum diisi jika pengguna tidak mengetik apa pun, dan menyapa jika sudah diisi.",
        "correctAnswer": "nama = input(\"Nama: \")\nif nama == \"\":\n    print(\"Nama belum diisi\")\nelse:\n    print(\"Halo,\", nama)",
        "explanation": {
          "correct": "Isian kosong diperiksa dulu, dan sapaan hanya muncul jika nama sudah diisi.",
          "wrong": "Minta nama dulu, lalu if nama == \"\": untuk isian kosong, dan else untuk menyapa."
        },
        "correctOrder": [
          "nama = input(\"Nama: \")",
          "if nama == \"\":",
          "    print(\"Nama belum diisi\")",
          "else:",
          "    print(\"Halo,\", nama)"
        ],
        "stepItems": [
          "    print(\"Halo,\", nama)",
          "if nama == \"\":",
          "nama = input(\"Nama: \")",
          "else:",
          "    print(\"Nama belum diisi\")"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Nilai Kebesaran",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "Nilai tidak valid",
        "explanation": {
          "correct": "120 lebih dari 100, jadi validasi pertama sudah benar dan cabang lain tidak diperiksa.",
          "wrong": "Walau 120 juga ≥ 75, Python berhenti di kondisi pertama yang benar, yaitu validasi."
        },
        "options": [
          "Lulus",
          "Nilai tidak valid",
          "Remedial",
          "Nilai tidak valid lalu Lulus"
        ],
        "codeSnippet": "nilai = 120\nif nilai < 0 or nilai > 100:\n    print(\"Nilai tidak valid\")\nelif nilai >= 75:\n    print(\"Lulus\")\nelse:\n    print(\"Remedial\")"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Pesan Tiket",
        "prompt": "Buat program yang meminta jumlah tiket (bilangan bulat). Jika kurang dari 1 atau lebih dari 5, tampilkan Jumlah tiket harus 1 sampai 5. Selain itu, tampilkan Pesanan diterima.",
        "correctAnswer": "tiket = int(input(\"Jumlah tiket: \"))\nif tiket < 1 or tiket > 5:\n    print(\"Jumlah tiket harus 1 sampai 5\")\nelse:\n    print(\"Pesanan diterima\")",
        "explanation": {
          "correct": "Programmu menolak pesanan yang tidak masuk akal!",
          "wrong": "Gabungkan dua batas dengan or: tiket < 1 or tiket > 5 untuk pesan salah, lalu else untuk pesanan diterima."
        },
        "acceptedAnswers": [
          "tiket = int(input(\"Jumlah tiket: \"))\nif tiket < 1 or tiket > 5:\n    print(\"Jumlah tiket harus 1 sampai 5\")\nelse:\n    print(\"Pesanan diterima\")",
          "tiket = int(input(\"Jumlah tiket: \"))\nif tiket >= 1 and tiket <= 5:\n    print(\"Pesanan diterima\")\nelse:\n    print(\"Jumlah tiket harus 1 sampai 5\")",
          "tiket = int(input(\"Jumlah tiket: \"))\nif 1 <= tiket <= 5:\n    print(\"Pesanan diterima\")\nelse:\n    print(\"Jumlah tiket harus 1 sampai 5\")"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 24,
    "unitNumber": 4,
    "unit": "Unit 4 · If Statement",
    "title": "Proyek Mini: Kalkulator Pilihan",
    "subtitle": "match-case, pembagian nol, uji program",
    "xp": 50,
    "description": "Siswa menggabungkan input, match-case, dan if untuk membuat kalkulator sederhana yang aman dari pembagian dengan nol.",
    "slides": [
      {
        "id": 1,
        "title": "Merancang Kalkulator",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Kita akan membuat kalkulator yang bisa menambah, mengurangi, mengali, dan membagi. Rancang dulu algoritmanya:"
          },
          {
            "kind": "pseudocode",
            "text": "BACA angka1, operator, angka2\nJIKA operator = \"+\" MAKA TAMPILKAN angka1 + angka2\nJIKA operator = \"-\" MAKA TAMPILKAN angka1 - angka2\nJIKA operator = \"*\" MAKA TAMPILKAN angka1 x angka2\nJIKA operator = \"/\" MAKA TAMPILKAN angka1 / angka2\nSELAIN ITU TAMPILKAN \"Operator tidak dikenal\""
          },
          {
            "kind": "callout",
            "text": "Apa yang terjadi kalau kamu menekan 6 ÷ 0 di kalkulator HP?"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Membaca Tiga Input",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Angka dibungkus int(), tapi operator tetap berupa teks:"
          },
          {
            "kind": "code",
            "text": "a = int(input(\"Angka 1: \"))\nop = input(\"Operator: \")\nb = int(input(\"Angka 2: \"))"
          },
          {
            "kind": "tip",
            "text": "Tips: Jangan bungkus operator dengan int(). Tanda + atau * bukan angka, jadi akan error."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Memilih Operasi dengan match",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Operator adalah pilihan tetap, jadi cocok memakai match-case:"
          },
          {
            "kind": "code",
            "text": "match op:\n    case \"+\":\n        print(a + b)\n    case \"-\":\n        print(a - b)\n    case \"*\":\n        print(a * b)\n    case \"/\":\n        print(a / b)\n    case _:\n        print(\"Operator tidak dikenal\")"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik 6, *, dan 2, hasilnya 12."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Awas Pembagian dengan Nol",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Angka berapa pun tidak bisa dibagi dengan nol. Jika diketik 6, /, dan 0, program berhenti dengan error ZeroDivisionError. Cegah dengan if di dalam case:"
          },
          {
            "kind": "code",
            "text": "match op:\n    case \"/\":\n        if b == 0:\n            print(\"Tidak bisa dibagi nol\")\n        else:\n            print(a / b)"
          },
          {
            "kind": "warning",
            "text": "Awas! Validasi seperti ini membuat programmu tidak berhenti tiba-tiba di tengah jalan."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Uji dengan Banyak Input",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Programmer menguji programnya dengan berbagai input, termasuk input yang aneh:"
          },
          {
            "kind": "paragraph",
            "text": "Input — Hasil yang diharapkan\n6, +, 2 — 8\n6, /, 2 — 3.0\n6, /, 0 — Tidak bisa dibagi nol\n6, %, 2 — Operator tidak dikenal"
          },
          {
            "kind": "tip",
            "text": "Tips: Uji juga kasus yang \"tidak biasa\". Justru di situlah bug paling sering bersembunyi."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Merancang kalkulator dengan pseudocode",
      "Membaca angka dan operator",
      "Memilih operasi dengan match-case",
      "Mencegah pembagian dengan nol dan menguji program"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Dibagi Nol",
        "prompt": "Apa yang terjadi jika Python menjalankan print(6 / 0)?",
        "correctAnswer": "Program berhenti dengan error ZeroDivisionError",
        "explanation": {
          "correct": "Pembagian dengan nol tidak bisa dihitung, jadi Python menghentikan program dengan error.",
          "wrong": "Python tidak bisa membagi dengan nol. Karena itu kita perlu memeriksa b == 0 sebelum membagi."
        },
        "options": [
          "Tampil 0",
          "Tampil 6",
          "Program berhenti dengan error ZeroDivisionError",
          "Tampil tak terhingga"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Cegah Error",
        "prompt": "Lengkapi kode agar pesan muncul ketika pembaginya nol.",
        "correctAnswer": "==",
        "explanation": {
          "correct": "b == 0 memeriksa apakah pembaginya nol, sebelum pembagian dijalankan.",
          "wrong": "Satu = untuk menyimpan, dan != artinya tidak sama. Untuk memeriksa sama dengan nol, pakai ==."
        },
        "codeTemplate": "a = 6\nb = 0\nif b ___ 0:\n    print(\"Tidak bisa dibagi nol\")\nelse:\n    print(a / b)",
        "chips": [
          "==",
          "=",
          "!="
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Bagi dengan Aman",
        "prompt": "Susun kode agar hasilnya seperti ini (pengguna mengetik 8 dan 2):\n\nContoh hasil:\nAngka 1: 8\nAngka 2: 2\n4.0",
        "correctAnswer": "a = int(input(\"Angka 1: \"))\nb = int(input(\"Angka 2: \"))\nif b == 0:\n    print(\"Tidak bisa dibagi nol\")\nelse:\n    print(a / b)",
        "explanation": {
          "correct": "Pembagi diperiksa dulu. Jika bukan nol, pembagian aman dijalankan.",
          "wrong": "Kedua angka diminta dulu. Pemeriksaan b == 0 ada di if, dan pembagian ada di else."
        },
        "correctOrder": [
          "a = int(input(\"Angka 1: \"))",
          "b = int(input(\"Angka 2: \"))",
          "if b == 0:",
          "    print(\"Tidak bisa dibagi nol\")",
          "else:",
          "    print(a / b)"
        ],
        "stepItems": [
          "else:",
          "b = int(input(\"Angka 2: \"))",
          "    print(a / b)",
          "if b == 0:",
          "a = int(input(\"Angka 1: \"))",
          "    print(\"Tidak bisa dibagi nol\")"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Pilih Operasi",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "14",
        "explanation": {
          "correct": "op berisi \"*\", jadi case \"*\" yang cocok: 7 × 2 = 14.",
          "wrong": "match mencari case yang cocok dengan isi op, yaitu \"*\". Hasilnya perkalian 7 dan 2."
        },
        "options": [
          "9",
          "14",
          "?",
          "72"
        ],
        "codeSnippet": "a, b = 7, 2\nop = \"*\"\nmatch op:\n    case \"+\":\n        print(a + b)\n    case \"*\":\n        print(a * b)\n    case _:\n        print(\"?\")"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Kalkulator Tambah Kurang",
        "prompt": "Buat kalkulator yang meminta angka 1, operator, dan angka 2 (angka berupa bilangan bulat). Jika operator + tampilkan hasil tambah, jika - tampilkan hasil kurang, selain itu tampilkan Operator tidak dikenal. Contoh jika diketik 9, -, dan 4:\n\nContoh hasil:\nAngka 1: 9\nOperator: -\nAngka 2: 4\n5",
        "correctAnswer": "a = int(input(\"Angka 1: \"))\nop = input(\"Operator: \")\nb = int(input(\"Angka 2: \"))\nmatch op:\n    case \"+\":\n        print(a + b)\n    case \"-\":\n        print(a - b)\n    case _:\n        print(\"Operator tidak dikenal\")",
        "explanation": {
          "correct": "Kalkulator buatanmu berhasil! Kamu menggabungkan input, pilihan, dan operator.",
          "wrong": "Minta tiga input (operator tanpa int()), lalu pakai match op: dengan case \"+\", case \"-\", dan case _."
        },
        "acceptedAnswers": [
          "a = int(input(\"Angka 1: \"))\nop = input(\"Operator: \")\nb = int(input(\"Angka 2: \"))\nmatch op:\n    case \"+\":\n        print(a + b)\n    case \"-\":\n        print(a - b)\n    case _:\n        print(\"Operator tidak dikenal\")",
          "a = int(input(\"Angka 1: \"))\nop = input(\"Operator: \")\nb = int(input(\"Angka 2: \"))\nif op == \"+\":\n    print(a + b)\nelif op == \"-\":\n    print(a - b)\nelse:\n    print(\"Operator tidak dikenal\")"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 25,
    "unitNumber": 5,
    "unit": "Unit 5 · Perulangan",
    "title": "For dan range()",
    "subtitle": "for, range(), hitung mundur",
    "xp": 50,
    "description": "Siswa bisa mengulang perintah dengan for dan range(), membaca nilai penghitung, mengatur awal, akhir, dan lompatan, serta menghitung mundur.",
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
            "kind": "tip",
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
        "title": "Menghitung Mundur",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Lompatan juga bisa negatif untuk menghitung mundur:"
          },
          {
            "kind": "code",
            "text": "for detik in range(5, 0, -1):\n    print(detik)\nprint(\"Meluncur!\")"
          },
          {
            "kind": "output",
            "text": "5\n4\n3\n2\n1\nMeluncur!"
          },
          {
            "kind": "paragraph",
            "text": "range(5, 0, -1) mulai dari 5, turun 1 setiap putaran, dan berhenti sebelum 0."
          },
          {
            "kind": "tip",
            "text": "Tips: Saat menghitung mundur, angka awal harus lebih besar dari angka akhir."
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
      "Menghitung mundur dengan lompatan negatif"
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
        "title": "Tebak Output: Lompat Mundur",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "10, 7, 4, 1 (masing-masing di baris baru)",
        "explanation": {
          "correct": "Mulai 10, turun 3 setiap putaran: 10, 7, 4, 1. Angka berikutnya, -2, sudah melewati batas 0.",
          "wrong": "Lompatan -3 membuat angka turun: 10 → 7 → 4 → 1. Perulangan berhenti sebelum melewati 0."
        },
        "options": [
          "10, 7, 4, 1 (masing-masing di baris baru)",
          "10, 7, 4",
          "10, 7, 4, 1, -2",
          "1, 4, 7, 10"
        ],
        "codeSnippet": "for i in range(10, 0, -3):\n    print(i)"
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
          "for i in range(1, 11):\n    print(5 * i)",
          "for i in range(1, 11):\n    print(i * 5)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 26,
    "unitNumber": 5,
    "unit": "Unit 5 · Perulangan",
    "title": "For dengan Daftar & Total",
    "subtitle": "Daftar, total, penghitung, len(), sum()",
    "xp": 50,
    "description": "Siswa bisa mengulang isi daftar, menjumlahkan dan menghitung dengan perulangan, menggabungkan for dengan if, serta memakai len() dan sum().",
    "slides": [
      {
        "id": 1,
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
      },
      {
        "id": 2,
        "title": "Menjumlahkan dengan Perulangan",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Untuk menjumlahkan banyak angka, siapkan variabel total berisi 0 sebelum perulangan, lalu tambahkan setiap putaran:"
          },
          {
            "kind": "code",
            "text": "total = 0\nfor harga in [5000, 3000, 2000]:\n    total = total + harga\nprint(\"Total belanja:\", total)"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Total belanja: 10000."
          },
          {
            "kind": "warning",
            "text": "Awas! total = 0 harus ditulis di luar dan sebelum perulangan. Kalau ditulis di dalam, total akan kembali menjadi 0 setiap putaran."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Menghitung Banyaknya",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Polanya mirip total, tapi yang ditambah selalu 1. Variabel ini disebut penghitung:"
          },
          {
            "kind": "code",
            "text": "hitung = 0\nfor nama in [\"Rani\", \"Dika\", \"Sari\", \"Bima\"]:\n    hitung = hitung + 1\nprint(\"Jumlah siswa:\", hitung)"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Jumlah siswa: 4."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "for Bertemu if",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Dengan if di dalam for, setiap putaran bisa memilih aksinya sendiri. Contoh menampilkan angka genap saja:"
          },
          {
            "kind": "code",
            "text": "for angka in range(1, 7):\n    if angka % 2 == 0:\n        print(angka, \"genap\")"
          },
          {
            "kind": "output",
            "text": "2 genap\n4 genap\n6 genap"
          },
          {
            "kind": "tip",
            "text": "Tips: Perhatikan indentasinya: if menjorok 4 spasi di dalam for, dan print menjorok 8 spasi di dalam if."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 5,
        "title": "Jalan Pintas len() dan sum()",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Python punya perintah siap pakai untuk daftar:"
          },
          {
            "kind": "code",
            "text": "nilai = [80, 90, 70]\nprint(len(nilai))\nprint(sum(nilai))\nprint(sum(nilai) / len(nilai))"
          },
          {
            "kind": "output",
            "text": "3\n240\n80.0"
          },
          {
            "kind": "paragraph",
            "text": "- len() menghitung banyaknya isi daftar\n- sum() menjumlahkan semua isi daftar"
          },
          {
            "kind": "tip",
            "text": "Tahukah kamu? sum() dan len() bekerja persis seperti pola total dan penghitung yang kamu tulis sendiri tadi."
          }
        ],
        "mascotKey": "laptop"
      }
    ],
    "summaryPoints": [
      "Mengulang isi daftar dengan for",
      "Pola total dan pola penghitung",
      "Menggabungkan for dengan if",
      "Jalan pintas len() dan sum()"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Letak total = 0",
        "prompt": "Pada program penjumlahan dengan perulangan, di mana total = 0 sebaiknya ditulis?",
        "correctAnswer": "Sebelum perulangan dimulai",
        "explanation": {
          "correct": "Total disiapkan sekali sebelum perulangan, lalu terus ditambah di setiap putaran.",
          "wrong": "Kalau di dalam perulangan, total kembali ke 0 setiap putaran. Kalau tidak ditulis, Python tidak tahu nilai awalnya."
        },
        "options": [
          "Di dalam perulangan, sebagai baris pertama",
          "Sebelum perulangan dimulai",
          "Setelah perulangan selesai",
          "Tidak perlu ditulis"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Ulangi Daftar Nilai",
        "prompt": "Lengkapi kode agar setiap nilai di daftar tampil satu per satu.",
        "correctAnswer": "nilai",
        "explanation": {
          "correct": "for n in nilai: mengambil isi daftar nilai satu per satu ke dalam n.",
          "wrong": "Setelah in, tulis daftar yang mau diulang, yaitu nilai. n adalah penampung setiap isinya."
        },
        "codeTemplate": "nilai = [80, 90, 70]\nfor n in _____:\n    print(n)",
        "chips": [
          "nilai",
          "n",
          "range"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Hitung yang Lulus",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\nYang lulus: 2",
        "correctAnswer": "lulus = 0\nfor n in [80, 60, 90, 70]:\n    if n >= 75:\n        lulus = lulus + 1\nprint(\"Yang lulus:\", lulus)",
        "explanation": {
          "correct": "Penghitung disiapkan, setiap nilai diperiksa, dan hanya yang minimal 75 yang dihitung. Ada 2: 80 dan 90.",
          "wrong": "Siapkan lulus = 0 sebelum for, letakkan if di dalam for, dan print di luar perulangan agar tampil sekali."
        },
        "correctOrder": [
          "lulus = 0",
          "for n in [80, 60, 90, 70]:",
          "    if n >= 75:",
          "        lulus = lulus + 1",
          "print(\"Yang lulus:\", lulus)"
        ],
        "stepItems": [
          "        lulus = lulus + 1",
          "print(\"Yang lulus:\", lulus)",
          "lulus = 0",
          "    if n >= 75:",
          "for n in [80, 60, 90, 70]:"
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
        "title": "Tulis Kode: Jumlah Bilangan Genap",
        "prompt": "Buat program yang menjumlahkan bilangan genap dari 2 sampai 10 dengan perulangan, lalu menampilkan hasilnya.\n\nContoh hasil:\n30",
        "correctAnswer": "total = 0\nfor i in range(2, 11, 2):\n    total = total + i\nprint(total)",
        "explanation": {
          "correct": "2 + 4 + 6 + 8 + 10 = 30. Pola total kamu sudah tepat!",
          "wrong": "Siapkan total = 0, ulangi bilangan genap dengan range(2, 11, 2), tambahkan ke total, lalu tampilkan di luar perulangan."
        },
        "acceptedAnswers": [
          "total = 0\nfor i in range(2, 11, 2):\n    total = total + i\nprint(total)",
          "total = 0\nfor i in range(2, 11, 2):\n    total += i\nprint(total)",
          "total = 0\nfor i in range(1, 11):\n    if i % 2 == 0:\n        total = total + i\nprint(total)",
          "total = 0\nfor i in range(1, 11):\n    if i % 2 == 0:\n        total += i\nprint(total)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 27,
    "unitNumber": 5,
    "unit": "Unit 5 · Perulangan",
    "title": "While Loop",
    "subtitle": "while, perulangan tanpa akhir",
    "xp": 50,
    "description": "Siswa bisa memakai while, menghindari perulangan tanpa akhir, dan memilih antara for dan while.",
    "slides": [
      {
        "id": 1,
        "title": "Sampai Kapan Diulang?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Di Level 25, kamu memakai for saat jumlah ulangannya sudah pasti, misalnya 5 kali."
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
            "text": "Ingat ciri algoritma yang baik dari Level 2: memiliki akhir. Pastikan perulanganmu punya jalan keluar."
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
        "title": "Menabung Sampai Cukup",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "while cocok saat kita menunggu sampai target tercapai. Berapa minggu menabung 10000 per minggu untuk membeli sepatu seharga 45000?"
          },
          {
            "kind": "code",
            "text": "tabungan = 0\nminggu = 0\nwhile tabungan < 45000:\n    tabungan = tabungan + 10000\n    minggu = minggu + 1\nprint(\"Butuh\", minggu, \"minggu\")"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Butuh 5 minggu."
          },
          {
            "kind": "paragraph",
            "text": "Setelah 4 minggu, tabungan baru 40000 (belum cukup). Di minggu ke-5, tabungan menjadi 50000 dan perulangan berhenti."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 5,
        "title": "for atau while?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pakai for — Pakai while\nJumlah ulangan sudah pasti — Jumlah ulangan belum pasti\nMengulang isi daftar — Mengulang sampai syarat berubah\nContoh: tampilkan 1 sampai 10 — Contoh: menabung sampai cukup"
          },
          {
            "kind": "tip",
            "text": "Tips: Tanyakan pada dirimu: \"Apakah aku tahu berapa kali harus mengulang?\" Kalau tahu, pakai for. Kalau tidak, pakai while."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Menulis while dengan kondisi",
      "Menghindari perulangan tanpa akhir",
      "Mengulang sampai target tercapai",
      "Memilih antara for dan while"
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
        "title": "Isian Bagian Kosong: Isi Ember",
        "prompt": "Lengkapi kondisi agar yang tampil di akhir adalah 5.",
        "correctAnswer": "<",
        "explanation": {
          "correct": "Perulangan berjalan selama air kurang dari 5, jadi berhenti tepat saat air bernilai 5.",
          "wrong": "Dengan <=, perulangan masih jalan saat air 5 sehingga hasilnya 6. Dengan >, perulangan tidak pernah jalan dan hasilnya 0."
        },
        "codeTemplate": "air = 0\nwhile air ___ 5:\n    air = air + 1\nprint(air)",
        "chips": [
          "<",
          "<=",
          ">"
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
        "title": "Tulis Kode: Target Tabungan",
        "prompt": "Buat program dengan while. Tabungan mulai dari 0 dan bertambah 10000 setiap minggu sampai mencapai minimal 50000. Tampilkan jumlah minggunya.\n\nContoh hasil:\n5",
        "correctAnswer": "tabungan = 0\nminggu = 0\nwhile tabungan < 50000:\n    tabungan = tabungan + 10000\n    minggu = minggu + 1\nprint(minggu)",
        "explanation": {
          "correct": "Lima minggu menabung, target tercapai!",
          "wrong": "Siapkan tabungan = 0 dan minggu = 0, ulangi while tabungan < 50000:, tambah keduanya di dalam perulangan, lalu tampilkan minggu di luar."
        },
        "acceptedAnswers": [
          "tabungan = 0\nminggu = 0\nwhile tabungan < 50000:\n    tabungan = tabungan + 10000\n    minggu = minggu + 1\nprint(minggu)",
          "minggu = 0\ntabungan = 0\nwhile tabungan < 50000:\n    tabungan = tabungan + 10000\n    minggu = minggu + 1\nprint(minggu)",
          "tabungan = 0\nminggu = 0\nwhile tabungan < 50000:\n    tabungan += 10000\n    minggu += 1\nprint(minggu)",
          "tabungan = 0\nminggu = 0\nwhile tabungan < 50000:\n    minggu = minggu + 1\n    tabungan = tabungan + 10000\nprint(minggu)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 28,
    "unitNumber": 5,
    "unit": "Unit 5 · Perulangan",
    "title": "break, continue & do-while",
    "subtitle": "break, continue, while True",
    "xp": 50,
    "description": "Siswa bisa menghentikan atau melewati putaran dengan break dan continue, dan membuat pola do-while di Python.",
    "slides": [
      {
        "id": 1,
        "title": "break: Berhenti Sekarang Juga",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "break menghentikan perulangan saat itu juga, walaupun putarannya belum habis:"
          },
          {
            "kind": "code",
            "text": "for angka in range(1, 10):\n    if angka == 4:\n        break\n    print(angka)\nprint(\"Berhenti di 4\")"
          },
          {
            "kind": "output",
            "text": "1\n2\n3\nBerhenti di 4"
          },
          {
            "kind": "paragraph",
            "text": "Saat angka bernilai 4, break dijalankan sehingga perulangan langsung selesai. Program lanjut ke baris setelah perulangan."
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "continue: Lewati Putaran Ini",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "continue melewati sisa putaran ini lalu lanjut ke putaran berikutnya. Perulangannya tidak berhenti:"
          },
          {
            "kind": "code",
            "text": "for angka in range(1, 6):\n    if angka == 3:\n        continue\n    print(angka)"
          },
          {
            "kind": "output",
            "text": "1\n2\n4\n5"
          },
          {
            "kind": "paragraph",
            "text": "Angka 3 tidak tampil karena print dilewati, tapi 4 dan 5 tetap tampil."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 3,
        "title": "break dan continue Bersama",
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
        "id": 4,
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
      },
      {
        "id": 5,
        "title": "Menghitung Percobaan",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pola do-while bisa digabung dengan penghitung untuk mencatat berapa kali pengguna mencoba:"
          },
          {
            "kind": "code",
            "text": "coba = 0\nwhile True:\n    coba = coba + 1\n    tebakan = int(input(\"Tebak angka: \"))\n    if tebakan == 7:\n        break\nprint(\"Benar setelah\", coba, \"kali mencoba\")"
          },
          {
            "kind": "paragraph",
            "text": "Jika diketik 3, 9, lalu 7, hasil terakhirnya Benar setelah 3 kali mencoba."
          },
          {
            "kind": "tip",
            "text": "Tips: Pola ini dipakai di banyak aplikasi, misalnya membatasi percobaan login."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "break untuk berhenti",
      "continue untuk melewati putaran",
      "Membuat do-while dengan while True dan break",
      "Menghitung jumlah percobaan"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Arti continue",
        "prompt": "Apa yang terjadi saat continue dijalankan di dalam perulangan?",
        "correctAnswer": "Sisa putaran ini dilewati, lalu lanjut ke putaran berikutnya",
        "explanation": {
          "correct": "continue hanya melompati sisa putaran saat ini. Perulangannya tetap berjalan.",
          "wrong": "Yang menghentikan perulangan adalah break. continue hanya melewati satu putaran."
        },
        "options": [
          "Perulangan berhenti total",
          "Program keluar dan selesai",
          "Sisa putaran ini dilewati, lalu lanjut ke putaran berikutnya",
          "Putaran yang sama diulang sekali lagi"
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
        "title": "Susun Kode: Menu Berulang",
        "prompt": "Susun kode do-while agar program terus menampilkan \"Ayo lanjut!\" sampai pengguna mengetik t, lalu menampilkan \"Sampai jumpa!\".",
        "correctAnswer": "while True:\n    jawab = input(\"Lanjut? (y/t) \")\n    if jawab == \"t\":\n        break\n    print(\"Ayo lanjut!\")\nprint(\"Sampai jumpa!\")",
        "explanation": {
          "correct": "Jawaban diminta dulu, diperiksa, dan hanya jika bukan \"t\" program menampilkan \"Ayo lanjut!\".",
          "wrong": "Di dalam while True, minta jawaban dulu, lalu if dengan break. \"Ayo lanjut!\" ada setelah if, dan \"Sampai jumpa!\" di luar perulangan."
        },
        "correctOrder": [
          "while True:",
          "    jawab = input(\"Lanjut? (y/t) \")",
          "    if jawab == \"t\":",
          "        break",
          "    print(\"Ayo lanjut!\")",
          "print(\"Sampai jumpa!\")"
        ],
        "stepItems": [
          "print(\"Sampai jumpa!\")",
          "        break",
          "    print(\"Ayo lanjut!\")",
          "while True:",
          "    if jawab == \"t\":",
          "    jawab = input(\"Lanjut? (y/t) \")"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Jebakan continue",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "1, 2, 4, 5, 7",
        "explanation": {
          "correct": "3 dan 6 habis dibagi 3, jadi continue melewatinya lebih dulu. break untuk 6 tidak pernah sempat dijalankan, sehingga 7 tetap tampil.",
          "wrong": "Periksa urutannya: saat i = 6, if i % 3 == 0 benar duluan, jadi continue dijalankan dan break di bawahnya terlewat."
        },
        "options": [
          "1, 2, 4, 5",
          "1, 2, 4, 5, 7",
          "1, 2, 3, 4, 5",
          "1, 2"
        ],
        "codeSnippet": "for i in range(1, 8):\n    if i % 3 == 0:\n        continue\n    if i == 6:\n        break\n    print(i)"
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
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 29,
    "unitNumber": 5,
    "unit": "Unit 5 · Perulangan",
    "title": "Perulangan Bersarang",
    "subtitle": "for di dalam for, pola, tabel perkalian",
    "xp": 50,
    "description": "Siswa bisa menulis perulangan di dalam perulangan, menghitung jumlah putarannya, membuat pola bintang, dan tabel perkalian.",
    "slides": [
      {
        "id": 1,
        "title": "Jam Dinding Punya Dua Jarum",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Lihat jam dinding. Setiap kali jarum jam maju satu angka, jarum menit sudah berputar satu putaran penuh."
          },
          {
            "kind": "paragraph",
            "text": "Perulangan juga bisa seperti itu: ada perulangan luar dan perulangan dalam. Setiap satu putaran luar, perulangan dalam berjalan sampai selesai. Ini disebut perulangan bersarang."
          },
          {
            "kind": "callout",
            "text": "Dalam satu hari ada 24 jam, dan setiap jam ada 60 menit. Berapa kali jarum menit berputar dalam sehari?"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "for di Dalam for",
        "blocks": [
          {
            "kind": "code",
            "text": "for baris in range(1, 3):\n    for kolom in range(1, 4):\n        print(baris, kolom)"
          },
          {
            "kind": "output",
            "text": "1 1\n1 2\n1 3\n2 1\n2 2\n2 3"
          },
          {
            "kind": "paragraph",
            "text": "Saat baris bernilai 1, kolom berjalan 1, 2, 3. Setelah itu baru baris menjadi 2, dan kolom mulai lagi dari 1."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Menghitung Jumlah Putaran",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Jumlah putaran perulangan dalam = putaran luar dikali putaran dalam:"
          },
          {
            "kind": "code",
            "text": "hitung = 0\nfor i in range(3):\n    for j in range(4):\n        hitung = hitung + 1\nprint(hitung)"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: 12, karena 3 × 4 = 12."
          },
          {
            "kind": "tip",
            "text": "Tips: Bayangkan kisi kotak: perulangan luar adalah baris, perulangan dalam adalah kolom."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Membuat Pola Bintang",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Ingat mengulang teks dengan * dari Level 11? Gabungkan dengan perulangan untuk membuat pola:"
          },
          {
            "kind": "code",
            "text": "for i in range(1, 5):\n    print(\"*\" * i)"
          },
          {
            "kind": "output",
            "text": "*\n**\n***\n****"
          },
          {
            "kind": "paragraph",
            "text": "Pola yang sama bisa dibuat dengan perulangan bersarang:"
          },
          {
            "kind": "code",
            "text": "for i in range(1, 5):\n    for j in range(i):\n        print(\"*\", end=\"\")\n    print()"
          },
          {
            "kind": "paragraph",
            "text": "print() kosong di akhir setiap baris membuat baris baru."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Tabel Perkalian",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Perulangan bersarang paling sering dipakai untuk membuat tabel:"
          },
          {
            "kind": "code",
            "text": "for a in range(1, 4):\n    for b in range(1, 4):\n        print(a * b, end=\" \")\n    print()"
          },
          {
            "kind": "output",
            "text": "1 2 3\n2 4 6\n3 6 9"
          },
          {
            "kind": "warning",
            "text": "Awas! Perhatikan letak print() kosong. Ia menjorok 4 spasi (di dalam perulangan luar), bukan 8 spasi. Kalau salah tempat, semua angka bisa tampil di baris yang berbeda."
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Perulangan luar dan perulangan dalam",
      "Menghitung jumlah putaran",
      "Membuat pola bintang",
      "Membuat tabel perkalian"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Berapa Kali?",
        "prompt": "Berapa kali tulisan Hai tampil?",
        "correctAnswer": "15 kali",
        "explanation": {
          "correct": "Setiap 1 putaran luar, perulangan dalam berjalan 5 kali. Jadi 3 × 5 = 15.",
          "wrong": "Jumlah putaran bersarang dikali, bukan dijumlah: 3 × 5 = 15."
        },
        "options": [
          "3 kali",
          "5 kali",
          "8 kali",
          "15 kali"
        ],
        "codeSnippet": "for i in range(3):\n    for j in range(5):\n        print(\"Hai\")"
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Pola Pagar",
        "prompt": "Lengkapi kode agar tampil tiga baris: #, lalu ##, lalu ###.",
        "correctAnswer": "*",
        "explanation": {
          "correct": "\"#\" * i mengulang tanda pagar sebanyak i kali.",
          "wrong": "Teks tidak bisa ditambah dengan angka, dan ** tidak berlaku untuk teks. Untuk mengulang teks, pakai *."
        },
        "codeTemplate": "for i in range(1, 4):\n    print(\"#\" ___ i)",
        "chips": [
          "*",
          "+",
          "**"
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Pasangan Angka",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\n1 1\n1 2\n2 1\n2 2\nSelesai",
        "correctAnswer": "for i in range(1, 3):\n    for j in range(1, 3):\n        print(i, j)\nprint(\"Selesai\")",
        "explanation": {
          "correct": "for i di luar, for j di dalamnya, dan print(i, j) paling dalam. \"Selesai\" berada di luar semua perulangan.",
          "wrong": "Angka pertama (i) berganti lebih lambat, jadi for i adalah perulangan luar. \"Selesai\" tidak menjorok sama sekali."
        },
        "correctOrder": [
          "for i in range(1, 3):",
          "    for j in range(1, 3):",
          "        print(i, j)",
          "print(\"Selesai\")"
        ],
        "stepItems": [
          "print(\"Selesai\")",
          "        print(i, j)",
          "for i in range(1, 3):",
          "    for j in range(1, 3):"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Hitung Putaran",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "12",
        "explanation": {
          "correct": "Perulangan dalam berjalan 3 kali untuk setiap 4 putaran luar: 4 × 3 = 12.",
          "wrong": "Jumlahnya dikali, bukan dijumlah. 4 putaran luar × 3 putaran dalam = 12."
        },
        "options": [
          "7",
          "12",
          "3",
          "4"
        ],
        "codeSnippet": "hitung = 0\nfor i in range(4):\n    for j in range(3):\n        hitung = hitung + 1\nprint(hitung)"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Segitiga Bintang",
        "prompt": "Buat program yang menampilkan segitiga bintang 5 baris:\n\nContoh hasil:\n*\n**\n***\n****\n*****",
        "correctAnswer": "for i in range(1, 6):\n    print(\"*\" * i)",
        "explanation": {
          "correct": "Segitigamu jadi! Perulangan membuat pola apa pun mudah dibuat.",
          "wrong": "Ulangi i dari 1 sampai 5 dengan range(1, 6), lalu tampilkan \"*\" * i di setiap putaran."
        },
        "acceptedAnswers": [
          "for i in range(1, 6):\n    print(\"*\" * i)",
          "for i in range(1, 6):\n    print(i * \"*\")",
          "for i in range(1, 6):\n    for j in range(i):\n        print(\"*\", end=\"\")\n    print()"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 30,
    "unitNumber": 5,
    "unit": "Unit 5 · Perulangan",
    "title": "Proyek Mini: Mengolah Data Nilai",
    "subtitle": "Terbesar, terkecil, rata-rata, laporan",
    "xp": 50,
    "description": "Siswa memakai perulangan untuk mencari nilai terbesar dan terkecil, menghitung rata-rata, menghitung yang lulus, dan membuat laporan sederhana.",
    "slides": [
      {
        "id": 1,
        "title": "Data Nilai Satu Kelas",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Guru punya daftar nilai ulangan satu kelas. Ia ingin tahu: berapa nilai tertinggi? Terendah? Berapa rata-ratanya? Berapa siswa yang lulus?"
          },
          {
            "kind": "paragraph",
            "text": "Kalau siswanya ada 30, menghitung manual sangat melelahkan. Di proyek ini, kamu membuat program yang menjawab semua pertanyaan itu."
          },
          {
            "kind": "callout",
            "text": "Bagaimana caramu mencari nilai tertinggi dari 30 angka tanpa kalkulator?"
          }
        ],
        "mascotKey": "think"
      },
      {
        "id": 2,
        "title": "Mencari Nilai Terbesar",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Caranya seperti lomba: anggap nilai pertama sebagai juara, lalu bandingkan dengan nilai berikutnya satu per satu. Jika ada yang lebih besar, juaranya diganti:"
          },
          {
            "kind": "code",
            "text": "nilai = [70, 95, 80, 60]\nterbesar = nilai[0]\nfor n in nilai:\n    if n > terbesar:\n        terbesar = n\nprint(\"Terbesar:\", terbesar)"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Terbesar: 95."
          },
          {
            "kind": "tip",
            "text": "Tips: terbesar diisi nilai[0] (data pertama), bukan 0. Dengan begitu, program tetap benar walaupun semua datanya negatif."
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 3,
        "title": "Mencari Nilai Terkecil",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Untuk terkecil, cukup balik tanda perbandingannya:"
          },
          {
            "kind": "code",
            "text": "nilai = [70, 95, 80, 60]\nterkecil = nilai[0]\nfor n in nilai:\n    if n < terkecil:\n        terkecil = n\nprint(\"Terkecil:\", terkecil)"
          },
          {
            "kind": "paragraph",
            "text": "Hasilnya: Terkecil: 60."
          },
          {
            "kind": "tip",
            "text": "Tahukah kamu? Python juga punya jalan pintas max(nilai) dan min(nilai). Tapi memahami cara kerjanya membuatmu bisa membuat aturan sendiri, misalnya \"nilai terbesar yang masih di bawah 75\"."
          }
        ],
        "mascotKey": "happy"
      },
      {
        "id": 4,
        "title": "Rata-Rata dan Jumlah yang Lulus",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Gabungkan pola total (Level 26) dan pola penghitung dengan if:"
          },
          {
            "kind": "code",
            "text": "nilai = [70, 95, 80, 60]\ntotal = 0\nlulus = 0\nfor n in nilai:\n    total = total + n\n    if n >= 75:\n        lulus = lulus + 1\nprint(\"Rata-rata:\", total / len(nilai))\nprint(\"Lulus:\", lulus)"
          },
          {
            "kind": "output",
            "text": "Rata-rata: 76.25\nLulus: 2"
          }
        ],
        "mascotKey": "laptop"
      },
      {
        "id": 5,
        "title": "Laporan Lengkap",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Satu perulangan bisa mengerjakan semuanya sekaligus, lalu hasilnya ditampilkan rapi dengan f-string:"
          },
          {
            "kind": "code",
            "text": "nilai = [70, 95, 80, 60]\ntotal = 0\nterbesar = nilai[0]\nfor n in nilai:\n    total = total + n\n    if n > terbesar:\n        terbesar = n\nprint(\"=\" * 18)\nprint(f\"Rata-rata: {total / len(nilai)}\")\nprint(f\"Terbesar : {terbesar}\")\nprint(\"=\" * 18)"
          },
          {
            "kind": "output",
            "text": "==================\nRata-rata: 76.25\nTerbesar : 95\n=================="
          }
        ],
        "mascotKey": "wave"
      }
    ],
    "summaryPoints": [
      "Mencari nilai terbesar dan terkecil",
      "Menghitung rata-rata dengan perulangan",
      "Menghitung data yang memenuhi syarat",
      "Membuat laporan lengkap dalam satu perulangan"
    ],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Juara Pertama",
        "prompt": "Saat mencari nilai terbesar, kenapa terbesar diisi nilai[0] di awal?",
        "correctAnswer": "Agar ada nilai awal pembanding yang diambil dari datanya sendiri",
        "explanation": {
          "correct": "Data pertama dijadikan juara sementara, lalu dibandingkan dengan data lainnya satu per satu.",
          "wrong": "Nilai pertama belum tentu terbesar. Ia hanya menjadi pembanding awal yang bisa diganti saat ada yang lebih besar."
        },
        "options": [
          "Agar perulangan berjalan lebih cepat",
          "Agar ada nilai awal pembanding yang diambil dari datanya sendiri",
          "Karena nilai pertama pasti yang terbesar",
          "Karena Python melarang nilai 0"
        ]
      },
      {
        "id": 2,
        "type": "blank",
        "title": "Isian Bagian Kosong: Si Terkecil",
        "prompt": "Lengkapi kode agar terkecil berisi nilai paling kecil.",
        "correctAnswer": "<",
        "explanation": {
          "correct": "Juara diganti setiap kali ada angka yang lebih kecil, jadi hasil akhirnya 3.",
          "wrong": "Dengan >, yang didapat justru nilai terbesar. Untuk terkecil, pakai <."
        },
        "codeTemplate": "data = [8, 3, 5]\nterkecil = data[0]\nfor n in data:\n    if n ___ terkecil:\n        terkecil = n\nprint(terkecil)",
        "chips": [
          "<",
          ">",
          "=="
        ]
      },
      {
        "id": 3,
        "type": "order",
        "title": "Susun Kode: Cari yang Terbesar",
        "prompt": "Susun kode agar hasilnya:\n\nContoh hasil:\nTerbesar: 95",
        "correctAnswer": "nilai = [70, 95, 80]\nterbesar = nilai[0]\nfor n in nilai:\n    if n > terbesar:\n        terbesar = n\nprint(\"Terbesar:\", terbesar)",
        "explanation": {
          "correct": "Data dibuat, juara sementara dipilih, setiap nilai dibandingkan, lalu hasilnya ditampilkan sekali.",
          "wrong": "terbesar = nilai[0] butuh daftar nilai yang sudah ada. if berada di dalam for, dan print di luar perulangan."
        },
        "correctOrder": [
          "nilai = [70, 95, 80]",
          "terbesar = nilai[0]",
          "for n in nilai:",
          "    if n > terbesar:",
          "        terbesar = n",
          "print(\"Terbesar:\", terbesar)"
        ],
        "stepItems": [
          "        terbesar = n",
          "terbesar = nilai[0]",
          "print(\"Terbesar:\", terbesar)",
          "    if n > terbesar:",
          "nilai = [70, 95, 80]",
          "for n in nilai:"
        ]
      },
      {
        "id": 4,
        "type": "output",
        "title": "Tebak Output: Nilai Terendah",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "2",
        "explanation": {
          "correct": "Juara sementara berganti dari 4 menjadi 2, dan tidak ada yang lebih kecil dari 2.",
          "wrong": "Telusuri: mulai 4, lalu 9 tidak lebih kecil, 2 lebih kecil (ganti), 7 tidak lebih kecil. Hasilnya 2."
        },
        "options": [
          "4",
          "9",
          "2",
          "7"
        ],
        "codeSnippet": "data = [4, 9, 2, 7]\nterkecil = data[0]\nfor n in data:\n    if n < terkecil:\n        terkecil = n\nprint(terkecil)"
      },
      {
        "id": 5,
        "type": "write",
        "title": "Tulis Kode: Hitung Remedial",
        "prompt": "Buat program yang menghitung berapa nilai dalam daftar [90, 55, 75, 40, 88] yang kurang dari 60, lalu menampilkan jumlahnya.\n\nContoh hasil:\n2",
        "correctAnswer": "remedial = 0\nfor n in [90, 55, 75, 40, 88]:\n    if n < 60:\n        remedial = remedial + 1\nprint(remedial)",
        "explanation": {
          "correct": "Ada 2 nilai di bawah 60, yaitu 55 dan 40. Programmu bisa membantu guru!",
          "wrong": "Siapkan penghitung remedial = 0, periksa setiap nilai dengan if n < 60:, tambahkan 1, lalu tampilkan di luar perulangan."
        },
        "acceptedAnswers": [
          "remedial = 0\nfor n in [90, 55, 75, 40, 88]:\n    if n < 60:\n        remedial = remedial + 1\nprint(remedial)",
          "remedial = 0\nfor n in [90, 55, 75, 40, 88]:\n    if n < 60:\n        remedial += 1\nprint(remedial)",
          "nilai = [90, 55, 75, 40, 88]\nremedial = 0\nfor n in nilai:\n    if n < 60:\n        remedial = remedial + 1\nprint(remedial)",
          "nilai = [90, 55, 75, 40, 88]\nremedial = 0\nfor n in nilai:\n    if n < 60:\n        remedial += 1\nprint(remedial)"
        ]
      }
    ],
    "contentVersion": "68edb6f76abe"
  },
  {
    "id": 31,
    "unitNumber": 6,
    "unit": "Unit 6 · Ujian Akhir",
    "title": "Ujian 1: Algoritma sampai Input Output",
    "subtitle": "10 soal Unit 1–3",
    "xp": 100,
    "description": "Ujian berisi 10 soal dari Unit 1–3 (Level 1–18), tanpa halaman materi. Setiap jenis soal muncul 2 kali. Siswa lulus jika minimal 7 dari 10 soal benar, lalu mendapat +100 XP.",
    "slides": [],
    "summaryPoints": [],
    "questions": [
      {
        "id": 1,
        "type": "choice",
        "title": "Pilihan Ganda: Simbol Input Output",
        "prompt": "Simbol flowchart apa yang dipakai untuk membaca data atau menampilkan hasil?",
        "correctAnswer": "Jajar genjang",
        "explanation": {
          "correct": "Jajar genjang adalah simbol input/output, misalnya BACA nilai atau TAMPILKAN hasil.",
          "wrong": "Oval untuk mulai/selesai, persegi panjang untuk proses, belah ketupat untuk keputusan. Input/output memakai jajar genjang."
        },
        "options": [
          "Oval",
          "Persegi panjang",
          "Jajar genjang",
          "Belah ketupat"
        ],
        "reviewLevelIds": [
          3
        ]
      },
      {
        "id": 2,
        "type": "choice",
        "title": "Pilihan Ganda: Angka dalam Kutip",
        "prompt": "Variabel pi = \"3.14\" menyimpan tipe data apa?",
        "correctAnswer": "str (teks)",
        "explanation": {
          "correct": "Walaupun isinya angka, tanda kutip membuatnya menjadi teks.",
          "wrong": "Perhatikan tanda kutipnya. Apa pun yang diapit kutip adalah teks (str)."
        },
        "options": [
          "int (bilangan bulat)",
          "float (bilangan desimal)",
          "str (teks)",
          "bool (benar/salah)"
        ],
        "reviewLevelIds": [
          8
        ]
      },
      {
        "id": 3,
        "type": "blank",
        "title": "Isian Bagian Kosong: Sisa Kelereng",
        "prompt": "Lengkapi kode agar tampil Total: 1.",
        "correctAnswer": "%",
        "explanation": {
          "correct": "10 dibagi 3 hasilnya 3 dengan sisa 1. Operator % mengambil sisanya.",
          "wrong": "// menghasilkan 3 dan ** menghasilkan 1000. Yang menghasilkan 1 adalah sisa bagi %."
        },
        "codeTemplate": "print(\"Total:\", 10 ___ 3)",
        "chips": [
          "%",
          "//",
          "**"
        ],
        "reviewLevelIds": [
          16
        ]
      },
      {
        "id": 4,
        "type": "blank",
        "title": "Isian Bagian Kosong: Simpan Jawaban",
        "prompt": "Lengkapi kode agar jawaban pengguna tersimpan di variabel nama.",
        "correctAnswer": "=",
        "explanation": {
          "correct": "Tanda = menyimpan hasil input() ke dalam variabel nama.",
          "wrong": "Untuk menyimpan, pakai satu tanda =. Tanda == untuk membandingkan."
        },
        "codeTemplate": "nama ___ input(\"Nama: \")\nprint(\"Halo,\", nama)",
        "chips": [
          "=",
          "==",
          ":"
        ],
        "reviewLevelIds": [
          7,
          14
        ]
      },
      {
        "id": 5,
        "type": "order",
        "title": "Susun Kode: Kirim Pesan",
        "prompt": "Urutkan langkah mengirim pesan ke teman lewat HP.",
        "correctAnswer": "Buka aplikasi pesan\nPilih kontak teman\nKetik pesan\nTekan tombol kirim",
        "explanation": {
          "correct": "Langkahmu terurut dan punya akhir yang jelas: pesan terkirim!",
          "wrong": "Aplikasi harus dibuka dan kontak dipilih dulu sebelum mengetik. Menekan kirim adalah langkah terakhir."
        },
        "correctOrder": [
          "Buka aplikasi pesan",
          "Pilih kontak teman",
          "Ketik pesan",
          "Tekan tombol kirim"
        ],
        "stepItems": [
          "Ketik pesan",
          "Tekan tombol kirim",
          "Buka aplikasi pesan",
          "Pilih kontak teman"
        ],
        "reviewLevelIds": [
          1,
          2
        ]
      },
      {
        "id": 6,
        "type": "order",
        "title": "Susun Kode: Kilometer ke Meter",
        "prompt": "Susun kode agar hasilnya seperti ini (pengguna mengetik 2.5):\n\nContoh hasil:\nJarak (km): 2.5\n2.5 km = 2500.0 meter",
        "correctAnswer": "km = float(input(\"Jarak (km): \"))\nmeter = km * 1000\nprint(km, \"km =\", meter, \"meter\")",
        "explanation": {
          "correct": "Jarak desimal diminta dengan float(), dikalikan 1000, lalu ditampilkan.",
          "wrong": "Ikuti alur input, proses, output: minta jarak, hitung meter, baru tampilkan."
        },
        "correctOrder": [
          "km = float(input(\"Jarak (km): \"))",
          "meter = km * 1000",
          "print(km, \"km =\", meter, \"meter\")"
        ],
        "stepItems": [
          "print(km, \"km =\", meter, \"meter\")",
          "km = float(input(\"Jarak (km): \"))",
          "meter = km * 1000"
        ],
        "reviewLevelIds": [
          15,
          16
        ]
      },
      {
        "id": 7,
        "type": "output",
        "title": "Tebak Output: Lacak Dua Variabel",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "7 10",
        "explanation": {
          "correct": "b = 5 × 2 = 10, lalu a = 10 − 3 = 7. Yang tampil 7 dan 10.",
          "wrong": "Lacak baris demi baris. a diganti di baris ketiga memakai isi b yang sudah 10."
        },
        "options": [
          "5 10",
          "7 10",
          "7 7",
          "2 10"
        ],
        "codeSnippet": "a = 5\nb = a * 2\na = b - 3\nprint(a, b)",
        "reviewLevelIds": [
          9
        ]
      },
      {
        "id": 8,
        "type": "output",
        "title": "Tebak Output: Pemisah dan Akhiran",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "Halo-Algo!Go",
        "explanation": {
          "correct": "sep=\"-\" menyambung dua data dengan tanda minus, dan end=\"!\" membuat baris tidak berganti, jadi \"Go\" menempel.",
          "wrong": "end=\"!\" mengganti pindah baris dengan tanda seru. print kedua melanjutkan tepat setelahnya tanpa spasi."
        },
        "options": [
          "Halo-Algo!Go",
          "Halo-Algo! Go",
          "Halo Algo!Go",
          "Halo-Algo! lalu Go di baris baru"
        ],
        "codeSnippet": "print(\"Halo\", \"Algo\", sep=\"-\", end=\"!\")\nprint(\"Go\")",
        "reviewLevelIds": [
          13
        ]
      },
      {
        "id": 9,
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
          6,
          14
        ]
      },
      {
        "id": 10,
        "type": "write",
        "title": "Tulis Kode: Uang Kembalian",
        "prompt": "Buat program yang meminta uang yang dibayarkan dan harga barang (bilangan bulat), lalu menampilkan kembaliannya. Contoh jika diketik 20000 dan 13500:\n\nContoh hasil:\nUang: 20000\nHarga: 13500\nKembalian: 6500",
        "correctAnswer": "uang = int(input(\"Uang: \"))\nharga = int(input(\"Harga: \"))\nprint(\"Kembalian:\", uang - harga)",
        "explanation": {
          "correct": "Kasir mini buatanmu sudah bisa menghitung kembalian!",
          "wrong": "Minta dua angka dengan int(input()), lalu tampilkan selisihnya: uang dikurangi harga."
        },
        "acceptedAnswers": [
          "uang = int(input(\"Uang: \"))\nharga = int(input(\"Harga: \"))\nprint(\"Kembalian:\", uang - harga)",
          "uang = int(input(\"Uang: \"))\nharga = int(input(\"Harga: \"))\nkembalian = uang - harga\nprint(\"Kembalian:\", kembalian)"
        ],
        "reviewLevelIds": [
          15,
          16
        ]
      }
    ],
    "contentVersion": "68edb6f76abe",
    "examIntro": {
      "title": "Ujian Pertama!",
      "body": "Kamu sudah menyelesaikan Unit Pengenalan Algoritma, Variabel, dan Input Output. Saatnya menguji pemahamanmu!\n\n- 10 soal dari Level 1 sampai 18\n- Tidak ada halaman materi, jadi andalkan ingatanmu\n- Feedback tetap muncul setelah setiap soal\n- Jawab benar minimal 7 soal untuk lulus"
    },
    "passingCorrectCount": 7
  },
  {
    "id": 32,
    "unitNumber": 6,
    "unit": "Unit 6 · Ujian Akhir",
    "title": "Ujian 2: Percabangan & Perulangan",
    "subtitle": "10 soal Unit 4–5",
    "xp": 100,
    "description": "Ujian berisi 10 soal dari Unit 4–5 (Level 19–30), tanpa halaman materi. Setiap jenis soal muncul 2 kali. Siswa lulus jika minimal 7 dari 10 soal benar, lalu mendapat +100 XP.",
    "slides": [],
    "summaryPoints": [],
    "questions": [
      {
        "id": 1,
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
          27,
          28
        ]
      },
      {
        "id": 2,
        "type": "choice",
        "title": "Pilihan Ganda: Balik dan Gabung",
        "prompt": "Apa hasil dari not True or False?",
        "correctAnswer": "False",
        "explanation": {
          "correct": "not True menjadi False, lalu False or False hasilnya False.",
          "wrong": "Kerjakan not dulu: not True adalah False. Kemudian or butuh minimal satu True, padahal keduanya False."
        },
        "options": [
          "True",
          "False",
          "Error",
          "None"
        ],
        "reviewLevelIds": [
          21
        ]
      },
      {
        "id": 3,
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
          25
        ]
      },
      {
        "id": 4,
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
          22
        ]
      },
      {
        "id": 5,
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
          20,
          26
        ]
      },
      {
        "id": 6,
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
          28
        ]
      },
      {
        "id": 7,
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
          20
        ]
      },
      {
        "id": 8,
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
          21,
          28
        ]
      },
      {
        "id": 9,
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
          22
        ]
      },
      {
        "id": 10,
        "type": "write",
        "title": "Tulis Kode: Jumlah 1 sampai 10",
        "prompt": "Buat program yang menghitung 1 + 2 + 3 + … + 10, lalu menampilkan hasilnya (55).",
        "correctAnswer": "total = 0\nfor i in range(1, 11):\n    total = total + i\nprint(total)",
        "explanation": {
          "correct": "Selamat, kamu berhasil membuat komputer menjumlahkan sendiri!",
          "wrong": "Siapkan total = 0, ulangi i dari 1 sampai 10 dengan range(1, 11), tambahkan i ke total setiap putaran, lalu tampilkan total di luar perulangan."
        },
        "acceptedAnswers": [
          "total = 0\nfor i in range(1, 11):\n    total = total + i\nprint(total)",
          "total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)",
          "total = 0\ni = 1\nwhile i <= 10:\n    total = total + i\n    i = i + 1\nprint(total)",
          "total = 0\ni = 1\nwhile i <= 10:\n    total += i\n    i += 1\nprint(total)"
        ],
        "reviewLevelIds": [
          26,
          27
        ]
      }
    ],
    "contentVersion": "68edb6f76abe",
    "examIntro": {
      "title": "Ujian Kedua!",
      "body": "Kamu sudah menguasai If Statement dan Perulangan. Buktikan kemampuanmu!\n\n- 10 soal dari Level 19 sampai 30\n- Tidak ada halaman materi, jadi andalkan ingatanmu\n- Feedback tetap muncul setelah setiap soal\n- Jawab benar minimal 7 soal untuk lulus"
    },
    "passingCorrectCount": 7
  },
  {
    "id": 33,
    "unitNumber": 6,
    "unit": "Unit 6 · Ujian Akhir",
    "title": "Ujian Master Algogo",
    "subtitle": "15 soal gabungan, lencana Master Algogo",
    "xp": 150,
    "description": "Ujian berisi 15 soal gabungan dari semua unit (Level 1–30), tanpa halaman materi, dengan soal yang lebih kompleks. Setiap jenis soal muncul 3 kali. Siswa lulus jika minimal 11 dari 15 soal benar (sekitar 70%), lalu mendapat +150 XP dan lencana Master Algogo.",
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
          2
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
          8
        ]
      },
      {
        "id": 3,
        "type": "choice",
        "title": "Pilihan Ganda: Kode yang Error",
        "prompt": "Kode mana yang akan membuat error?",
        "correctAnswer": "print(\"Nilai: \" + 90)",
        "explanation": {
          "correct": "Teks tidak bisa disambung langsung dengan angka memakai +. Angkanya harus diubah dulu dengan str().",
          "wrong": "Koma boleh memisahkan teks dan angka, dan str(90) sudah berupa teks. Yang error adalah teks + angka."
        },
        "options": [
          "print(\"Nilai:\", 90)",
          "print(\"Nilai: \" + 90)",
          "print(\"Nilai: \" + str(90))",
          "print(\"Nilai:\", str(90))"
        ],
        "reviewLevelIds": [
          9,
          10
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
          15,
          21
        ]
      },
      {
        "id": 5,
        "type": "blank",
        "title": "Isian Bagian Kosong: Berhenti di Tiga",
        "prompt": "Lengkapi kode agar yang tampil hanya 1, 2, dan 3.",
        "correctAnswer": "break",
        "explanation": {
          "correct": "Saat i = 4, break menghentikan perulangan sebelum 4 sempat ditampilkan.",
          "wrong": "continue hanya melewati 4, jadi 5 tetap tampil. pass tidak melakukan apa-apa. Untuk berhenti, pakai break."
        },
        "codeTemplate": "for i in range(1, 6):\n    if i == 4:\n        _____\n    print(i)",
        "chips": [
          "break",
          "continue",
          "pass"
        ],
        "reviewLevelIds": [
          28
        ]
      },
      {
        "id": 6,
        "type": "blank",
        "title": "Isian Bagian Kosong: Total Belanja",
        "prompt": "Lengkapi kode agar tampil 10000.",
        "correctAnswer": "+=",
        "explanation": {
          "correct": "total += harga menambahkan setiap harga ke total: 5000 + 3000 + 2000 = 10000.",
          "wrong": "Dengan =, total hanya berisi harga terakhir (2000). Dengan -=, total malah menjadi negatif."
        },
        "codeTemplate": "total = 0\nfor harga in [5000, 3000, 2000]:\n    total ___ harga\nprint(total)",
        "chips": [
          "+=",
          "=",
          "-="
        ],
        "reviewLevelIds": [
          9,
          26
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
          14,
          15,
          16
        ]
      },
      {
        "id": 8,
        "type": "order",
        "title": "Susun Kode: Nilai Huruf A, B, C",
        "prompt": "Susun kode agar nilai minimal 90 mendapat A, minimal 75 mendapat B, dan sisanya C.",
        "correctAnswer": "nilai = int(input(\"Nilai: \"))\nif nilai >= 90:\n    print(\"A\")\nelif nilai >= 75:\n    print(\"B\")\nelse:\n    print(\"C\")",
        "explanation": {
          "correct": "Kondisi paling ketat (>= 90) diperiksa paling atas, jadi nilai 95 mendapat A, bukan B.",
          "wrong": "Jika nilai >= 75 di atas, nilai 95 berhenti di B. Tulis kondisi paling ketat lebih dulu, dan else paling akhir."
        },
        "correctOrder": [
          "nilai = int(input(\"Nilai: \"))",
          "if nilai >= 90:",
          "    print(\"A\")",
          "elif nilai >= 75:",
          "    print(\"B\")",
          "else:",
          "    print(\"C\")"
        ],
        "stepItems": [
          "else:",
          "    print(\"B\")",
          "if nilai >= 90:",
          "    print(\"C\")",
          "elif nilai >= 75:",
          "nilai = int(input(\"Nilai: \"))",
          "    print(\"A\")"
        ],
        "reviewLevelIds": [
          20
        ]
      },
      {
        "id": 9,
        "type": "order",
        "title": "Susun Kode: Tabel Perkalian",
        "prompt": "Susun kode agar hasilnya seperti ini (pengguna mengetik 7):\n\nContoh hasil:\nAngka: 7\n7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\nSelesai",
        "correctAnswer": "angka = int(input(\"Angka: \"))\nfor i in range(1, 4):\n    print(angka, \"x\", i, \"=\", angka * i)\nprint(\"Selesai\")",
        "explanation": {
          "correct": "Angka diminta sekali, lalu perulangan menampilkan tiga baris perkalian, dan \"Selesai\" tampil di akhir.",
          "wrong": "Minta angka sebelum perulangan. Baris perkalian menjorok di dalam for, sedangkan \"Selesai\" di luar."
        },
        "correctOrder": [
          "angka = int(input(\"Angka: \"))",
          "for i in range(1, 4):",
          "    print(angka, \"x\", i, \"=\", angka * i)",
          "print(\"Selesai\")"
        ],
        "stepItems": [
          "print(\"Selesai\")",
          "for i in range(1, 4):",
          "angka = int(input(\"Angka: \"))",
          "    print(angka, \"x\", i, \"=\", angka * i)"
        ],
        "reviewLevelIds": [
          15,
          25
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
          9
        ]
      },
      {
        "id": 11,
        "type": "output",
        "title": "Tebak Output: Total Bilangan Ganjil",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "4",
        "explanation": {
          "correct": "Hanya bilangan ganjil yang dijumlah: 1 + 3 = 4.",
          "wrong": "i % 2 == 1 hanya benar untuk bilangan ganjil. Dari 1 sampai 4, yang ganjil hanya 1 dan 3."
        },
        "options": [
          "4",
          "10",
          "6",
          "3"
        ],
        "codeSnippet": "total = 0\ni = 1\nwhile i <= 4:\n    if i % 2 == 1:\n        total = total + i\n    i = i + 1\nprint(total)",
        "reviewLevelIds": [
          26,
          27
        ]
      },
      {
        "id": 12,
        "type": "output",
        "title": "Tebak Output: Syarat Berlapis",
        "prompt": "Apa yang tampil di layar setelah kode berikut dijalankan?",
        "correctAnswer": "B",
        "explanation": {
          "correct": "7 lebih dari 5 tapi ganjil, jadi syarat and salah. Syarat or benar karena 7 > 5.",
          "wrong": "and butuh dua syarat benar, padahal 7 % 2 hasilnya 1, bukan 0. Lanjut ke elif: or cukup satu syarat benar."
        },
        "options": [
          "A",
          "B",
          "C",
          "A dan B"
        ],
        "codeSnippet": "x = 7\nif x > 5 and x % 2 == 0:\n    print(\"A\")\nelif x > 5 or x < 0:\n    print(\"B\")\nelse:\n    print(\"C\")",
        "reviewLevelIds": [
          16,
          21
        ]
      },
      {
        "id": 13,
        "type": "write",
        "title": "Tulis Kode: Algo atau Angka",
        "prompt": "Buat program yang menampilkan angka 1 sampai 15, satu per baris. Tetapi untuk angka kelipatan 3, tampilkan Algo sebagai pengganti angkanya.\n\nContoh hasil:\n1\n2\nAlgo\n4\n5\nAlgo\n...",
        "correctAnswer": "for i in range(1, 16):\n    if i % 3 == 0:\n        print(\"Algo\")\n    else:\n        print(i)",
        "explanation": {
          "correct": "Keren! Kamu sudah menggabungkan perulangan, sisa bagi, dan percabangan.",
          "wrong": "Ulangi 1 sampai 15 dengan range(1, 16). Di dalamnya, periksa i % 3 == 0 untuk menampilkan \"Algo\", dan else untuk menampilkan angkanya."
        },
        "acceptedAnswers": [
          "for i in range(1, 16):\n    if i % 3 == 0:\n        print(\"Algo\")\n    else:\n        print(i)",
          "for i in range(1, 16):\n    if i % 3 != 0:\n        print(i)\n    else:\n        print(\"Algo\")"
        ],
        "reviewLevelIds": [
          20,
          25
        ]
      },
      {
        "id": 14,
        "type": "write",
        "title": "Tulis Kode: Rata-Rata Rapor",
        "prompt": "Buat program yang meminta 3 nilai (bilangan bulat), menghitung rata-ratanya, lalu menampilkan Lulus jika rata-ratanya minimal 75, dan Belum lulus jika kurang. Contoh jika diketik 80, 70, dan 90:\n\nContoh hasil:\nNilai 1: 80\nNilai 2: 70\nNilai 3: 90\nLulus",
        "correctAnswer": "a = int(input(\"Nilai 1: \"))\nb = int(input(\"Nilai 2: \"))\nc = int(input(\"Nilai 3: \"))\nrata = (a + b + c) / 3\nif rata >= 75:\n    print(\"Lulus\")\nelse:\n    print(\"Belum lulus\")",
        "explanation": {
          "correct": "Programmu bisa menghitung dan menilai rapor sendiri!",
          "wrong": "Minta tiga nilai dengan int(input()), hitung (a + b + c) / 3 dengan tanda kurung, lalu periksa dengan if dan else."
        },
        "acceptedAnswers": [
          "a = int(input(\"Nilai 1: \"))\nb = int(input(\"Nilai 2: \"))\nc = int(input(\"Nilai 3: \"))\nrata = (a + b + c) / 3\nif rata >= 75:\n    print(\"Lulus\")\nelse:\n    print(\"Belum lulus\")",
          "a = int(input(\"Nilai 1: \"))\nb = int(input(\"Nilai 2: \"))\nc = int(input(\"Nilai 3: \"))\nif (a + b + c) / 3 >= 75:\n    print(\"Lulus\")\nelse:\n    print(\"Belum lulus\")"
        ],
        "reviewLevelIds": [
          15,
          16,
          20
        ]
      },
      {
        "id": 15,
        "type": "write",
        "title": "Tulis Kode: Hitung Mundur",
        "prompt": "Buat program yang meminta angka awal (bilangan bulat), lalu menghitung mundur sampai 1, dan terakhir menampilkan Mulai! Contoh jika diketik 3:\n\nContoh hasil:\nMulai dari: 3\n3\n2\n1\nMulai!",
        "correctAnswer": "n = int(input(\"Mulai dari: \"))\nwhile n > 0:\n    print(n)\n    n = n - 1\nprint(\"Mulai!\")",
        "explanation": {
          "correct": "Selamat, ini soal terakhir dan kamu berhasil!",
          "wrong": "Pakai while n > 0: lalu tampilkan dan kurangi n di dalamnya, atau for dengan range(n, 0, -1). \"Mulai!\" ditulis di luar perulangan."
        },
        "acceptedAnswers": [
          "n = int(input(\"Mulai dari: \"))\nwhile n > 0:\n    print(n)\n    n = n - 1\nprint(\"Mulai!\")",
          "n = int(input(\"Mulai dari: \"))\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Mulai!\")",
          "n = int(input(\"Mulai dari: \"))\nfor i in range(n, 0, -1):\n    print(i)\nprint(\"Mulai!\")"
        ],
        "reviewLevelIds": [
          25,
          27
        ]
      }
    ],
    "contentVersion": "68edb6f76abe",
    "examIntro": {
      "title": "Siap Jadi Master?",
      "body": "Kamu sudah menyelesaikan semua level dan dua ujian. Sekarang saatnya membuktikan kemampuanmu!\n\n- 15 soal dari semua unit\n- Tidak ada halaman materi, jadi andalkan ingatanmu\n- Feedback tetap muncul setelah setiap soal\n- Jawab benar minimal 11 soal untuk lulus"
    },
    "passingCorrectCount": 11
  }
];
