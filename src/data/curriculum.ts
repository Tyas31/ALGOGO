import { Mascots, Icons, Illustrations } from '@/constants/assets';

export type QuestionType = 'choice' | 'blank' | 'order' | 'output' | 'write';

export type ConceptItemData = {
  iconKey: keyof typeof Icons;
  title: string;
  description: string;
  size?: 'sm' | 'lg';
};

export type LessonSlide = {
  id: number;
  title: string;
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
  slides: LessonSlide[];
  summaryPoints: string[];
  questions: QuestionData[];
};

export const CURRICULUM: LevelData[] = [
  {
    id: 1,
    unitNumber: 1,
    unit: 'Unit 1 · Dasar Algoritma & Python',
    title: 'Mengenal Algoritma & Python',
    subtitle: 'Algoritma, print()',
    xp: 50,
    description: 'Pahami apa itu algoritma dan tulis perintah Python pertamamu dengan print().',
    slides: [
      {
        id: 1,
        title: 'Pernah Mengikuti Petunjuk?',
        story:
          'Bayangkan kamu ingin membuat mi instan. Kamu perlu menyiapkan alat dan bahan, memasak mi, menyiapkan bumbu, lalu menyajikannya.\n\nKalau langkahnya tertukar, hasilnya bisa berbeda dari yang kamu harapkan. Kamu juga memakai cara berpikir seperti ini saat memberi perintah ke komputer!',
        questionPrompt: 'Menurutmu, mengapa kita perlu mengikuti langkah-langkah secara berurutan?',
        illustrationKey: 'miInstan',
        mascotKey: 'think',
      },
      {
        id: 2,
        title: 'Apa Itu Algoritma?',
        story:
          'Algoritma adalah serangkaian langkah yang disusun secara logis dan sistematis untuk menyelesaikan masalah atau mencapai tujuan.\n\nJadi, algoritma berisi petunjuk tentang apa yang harus kamu lakukan dan cara melakukannya. Dalam pemrograman, algoritma membantu kita merencanakan instruksi sebelum menuliskannya menjadi kode.',
        tipCallout: 'Ingat tiga hal ini!',
        conceptItems: [
          { iconKey: 'target', title: 'Tujuan', description: 'Apa yang ingin dicapai?', size: 'sm' },
          { iconKey: 'steps', title: 'Langkah', description: 'Apa yang harus dilakukan?', size: 'sm' },
          { iconKey: 'result', title: 'Hasil', description: 'Apakah tujuan sudah tercapai?', size: 'sm' },
        ],
        mascotKey: 'laptop',
      },
      {
        id: 3,
        title: 'Algoritma Itu Seperti Resep',
        story:
          'Resep memberi langkah-langkah agar bahan bisa diolah menjadi makanan atau minuman lezat. Contohnya, membuat minuman cokelat:\n\nHubungannya dengan pemrograman: program juga berisi instruksi berurutan. Bedanya, kamu harus menulis instruksi program dalam bahasa yang dimengerti komputer.',
        stepsList: [
          'Siapkan gelas, susu, dan bubuk cokelat.',
          'Masukkan bubuk cokelat ke dalam gelas.',
          'Tuangkan susu secukupnya.',
          'Aduk hingga larut dan tercampur.',
          'Sajikan minuman.',
        ],
        illustrationKey: 'cokelat',
        mascotKey: 'happy',
      },
      {
        id: 4,
        title: 'Bagaimana Algoritma yang Baik?',
        story: 'Algoritma yang handal memiliki 4 karakteristik utama:',
        conceptItems: [
          { iconKey: 'ordered', title: 'Terurut', description: 'Langkah disusun dalam urutan yang masuk akal dan runtut.' },
          { iconKey: 'clear', title: 'Jelas', description: 'Setiap instruksi mudah dipahami dan tidak membingungkan.' },
          { iconKey: 'goal', title: 'Sesuai tujuan', description: 'Langkah-langkahnya efektif menyelesaikan masalah.' },
          { iconKey: 'finite', title: 'Memiliki akhir', description: 'Algoritma punya batas langkah dan tidak berjalan selamanya.' },
        ],
        mascotKey: 'wave',
      },
      {
        id: 5,
        title: 'Kenalan dengan Python!',
        story:
          'Komputer tidak mengerti bahasa manusia sehari-hari. Kita perlu bahasa pemrograman, dan salah satu yang paling populer dan ramah pemula adalah Python!\n\nPerintah pertamamu adalah print(), artinya "tampilkan".',
        codeSnippet: 'print("Halo, dunia!")',
        codeOutput: 'Halo, dunia!',
        warningCallout:
          'Awas! Teks harus diapit tanda kutip (" "), dan print ditulis huruf kecil semua. Print atau PRINT akan error.',
        mascotKey: 'laptop',
      },
    ],
    summaryPoints: [
      'Pengertian algoritma sebagai langkah logis terstruktur',
      'Algoritma dalam kehidupan sehari-hari (resep & petunjuk)',
      '4 ciri algoritma yang baik (Terurut, Jelas, Tepat, Berakhir)',
      'Menampilkan teks ke layar dengan fungsi print()',
    ],
    questions: [
      {
        id: 1,
        type: 'choice',
        title: 'Pilihan Ganda: Apa Itu Algoritma?',
        prompt: 'Manakah pengertian algoritma yang paling tepat?',
        options: [
          'Bahasa khusus untuk membuat komputer menyala',
          'Urutan langkah logis untuk menyelesaikan masalah',
          'Kumpulan perangkat keras fisik komputer',
          'Hasil akhir dari sebuah program kalkulator',
        ],
        correctAnswer: 'Urutan langkah logis untuk menyelesaikan masalah',
        explanation: {
          correct: 'Hebat! Algoritma adalah urutan langkah yang logis dan sistematis untuk menyelesaikan masalah atau mencapai tujuan.',
          wrong: 'Algoritma itu urutan langkah sistematis untuk mencapai tujuan, seperti resep atau petunjuk langkah.',
        },
      },
      {
        id: 2,
        type: 'order',
        title: 'Susun Langkah: Menyikat Gigi',
        prompt: 'Urutkan langkah-langkah menyikat gigi dari awal sampai akhir.',
        stepItems: [
          'Berkumur dengan air bersih',
          'Ambil sikat gigi',
          'Sikat gigi secara merata',
          'Beri pasta gigi pada sikat gigi',
        ],
        correctAnswer: 'Ambil sikat gigi',
        correctOrder: [
          'Ambil sikat gigi',
          'Beri pasta gigi pada sikat gigi',
          'Sikat gigi secara merata',
          'Berkumur dengan air bersih',
        ],
        explanation: {
          correct: 'Langkahmu terurut dengan sempurna, tujuan tercapai: gigi bersih berkilau!',
          wrong: 'Pasta gigi harus ada di sikat sebelum menyikat, dan berkumur dilakukan paling akhir.',
        },
      },
      {
        id: 3,
        type: 'blank',
        title: 'Isian: Lengkapi Perintahnya!',
        prompt: 'Lengkapi kode agar komputer menampilkan pesan Halo, dunia!',
        codeTemplate: '_____("Halo, dunia!")',
        chips: ['print', 'Print', 'tampil'],
        correctAnswer: 'print',
        explanation: {
          correct: 'Benar sekali! print() adalah fungsi bawaan Python untuk mencetak teks ke layar.',
          wrong: 'Python membedakan huruf besar-kecil (case sensitive), perintah resminya huruf kecil: print.',
        },
      },
      {
        id: 4,
        type: 'output',
        title: 'Tebak Output: Apa yang Muncul?',
        prompt: 'Perhatikan kode Python berikut. Apa yang akan tampil di layar?',
        codeSnippet: 'print("Aku suka Python")',
        options: [
          'Aku suka Python',
          '"Aku suka Python"',
          'print("Aku suka Python")',
          'Pesan kesalahan (Error)',
        ],
        correctAnswer: 'Aku suka Python',
        explanation: {
          correct: 'Tepat! Tanda kutip adalah pembungkus teks (string) dan tidak ikut dicetak ke layar.',
          wrong: 'Yang dicetak hanyalah isi teks di dalam tanda kutip tanpa tanda petik dan tanpa tulisan print.',
        },
      },
      {
        id: 5,
        type: 'write',
        title: 'Tulis Kode: Giliranmu!',
        prompt: 'Ketik perintah Python untuk menampilkan teks: Selamat pagi!',
        codeTemplate: '# Ketik kode print di bawah ini:',
        correctAnswer: 'print("Selamat pagi!")',
        acceptedAnswers: [
          'print("Selamat pagi!")',
          "print('Selamat pagi!')",
          'print( "Selamat pagi!" )',
          "print( 'Selamat pagi!' )",
        ],
        explanation: {
          correct: 'Luar biasa! Kamu baru saja berhasil menulis dan menjalankan program Python pertamamu!',
          wrong: 'Ingat formatnya: print("Selamat pagi!") dengan tanda kutip dan tanda kurung.',
        },
      },
    ],
  },
  {
    id: 2,
    unitNumber: 1,
    unit: 'Unit 1 · Dasar Algoritma & Python',
    title: 'Variabel: Kotak Penyimpan Data',
    subtitle: 'Membuat variabel, tipe data, aturan nama',
    xp: 50,
    description: 'Pelajari cara menyimpan data dalam variabel, mengenal tipe data str, int, float, dan bool.',
    slides: [
      {
        id: 1,
        title: 'Kotak Berlabel',
        story:
          'Di meja belajarmu mungkin ada kotak pensil, tempat penghapus, dan celengan koin. Setiap wadah punya label agar kamu tahu isinya tanpa membuka satu per satu.\n\nKomputer juga butuh wadah penyimpanan untuk mengingat data, misalnya nama pemain atau skor permainan. Wadah itu disebut variabel.',
        questionPrompt: 'Kalau semua kotak tidak diberi label, apa yang terjadi saat kamu mencari penghapus?',
        mascotKey: 'think',
      },
      {
        id: 2,
        title: 'Membuat Variabel',
        story:
          'Membuat variabel di Python sangat mudah, cukup satu baris saja:\n\nIngat 3 hal ini:\n• Nama variabel di sebelah kiri (labelnya)\n• Tanda = artinya "simpan ke dalam"\n• Nilai di sebelah kanan (isinya)',
        codeSnippet: 'nama = "Rani"\numur = 13',
        codeOutput: 'Variabel nama dan umur berhasil dibuat!',
        warningCallout:
          'Awas! Di Python, tanda = bukan sama dengan matematika. Baca umur = 13 sebagai "simpan nilai 13 ke dalam kotak umur".',
        mascotKey: 'laptop',
      },
      {
        id: 3,
        title: 'Isi Kotak Bisa Berbeda Jenis',
        story:
          'Data yang disimpan memiliki jenis atau tipe data:\n\n• str (teks): diapit tanda kutip, misal "7A"\n• int (bilangan bulat): angka tanpa koma, misal 90\n• float (desimal): angka berkoma dengan titik, misal 1.55\n• bool (boolean): hanya bernilai True atau False',
        tipCallout: '"13" dengan kutip adalah teks, sedangkan 13 tanpa kutip adalah angka matematika!',
        mascotKey: 'happy',
      },
      {
        id: 4,
        title: 'Memakai & Mengganti Isi Variabel',
        story:
          'Isi variabel bisa dipanggil kapan saja dengan print(nama_variabel) dan bisa ditimpa nilainya dengan nilai baru. Kotak variabel hanya menyimpan satu nilai terakhir!',
        codeSnippet: 'skor = 10\nprint(skor)\nskor = 25\nprint(skor)',
        codeOutput: '10\n25',
        warningCallout: 'print(skor) mencetak isi kotak (10). Kalau print("skor") mencetak tulisan skor.',
        mascotKey: 'laptop',
      },
      {
        id: 5,
        title: 'Aturan Memberi Nama Variabel',
        story:
          'Aturan penting penamaan variabel:\n• Boleh huruf, angka, dan garis bawah (_)\n• Tidak boleh diawali angka (contoh salah: 7kelas)\n• Tidak boleh ada spasi atau tanda minus (contoh salah: nilai ujian)\n• Huruf besar dan kecil dianggap beda (Nama != nama)',
        tipCallout: 'Gunakan nama jelas seperti uang_jajan daripada huruf acak x!',
        mascotKey: 'wave',
      },
    ],
    summaryPoints: [
      'Variabel sebagai tempat penyimpanan data berlabel',
      'Penggunaan tanda = untuk memasukkan nilai (assignment)',
      '4 Tipe data dasar: str, int, float, bool',
      'Aturan baku penamaan variabel di Python',
    ],
    questions: [
      {
        id: 1,
        type: 'choice',
        title: 'Pilihan Ganda: Nama Variabel yang Valid',
        prompt: 'Manakah nama variabel yang sah dan boleh digunakan di Python?',
        options: ['2nilai', 'nilai siswa', 'nilai_siswa', 'nilai-siswa'],
        correctAnswer: 'nilai_siswa',
        explanation: {
          correct: 'Tepat! Karakter garis bawah (_) sah digunakan untuk menghubungkan kata pada variabel.',
          wrong: 'Nama variabel dilarang memakai spasi, strip minus, atau diawali angka.',
        },
      },
      {
        id: 2,
        type: 'blank',
        title: 'Isian: Simpan Buahnya!',
        prompt: 'Lengkapi kode agar kata apel tersimpan di dalam variabel buah.',
        codeTemplate: 'buah ___ "apel"',
        chips: ['=', '==', ':'],
        correctAnswer: '=',
        explanation: {
          correct: 'Benar! Satu tanda = berfungsi memasukkan (assign) nilai ke dalam variabel.',
          wrong: 'Gunakan satu tanda = untuk menyimpan nilai. Dua tanda == untuk membandingkan.',
        },
      },
      {
        id: 3,
        type: 'output',
        title: 'Tebak Output: Perubahan Nilai',
        prompt: 'Berapa nilai terakhir yang dicetak oleh program ini?',
        codeSnippet: 'skor = 10\nskor = 25\nprint(skor)',
        options: ['10', '25', '35', 'Error'],
        correctAnswer: '25',
        explanation: {
          correct: 'Tepat! Nilai 10 telah digantikan oleh nilai baru yaitu 25.',
          wrong: 'Variabel menyimpan nilai paling mutakhir yang diberikan.',
        },
      },
      {
        id: 4,
        type: 'choice',
        title: 'Pilihan Ganda: Mengenal Tipe Data',
        prompt: 'Tipe data dari nilai 15.5 di Python adalah...',
        options: ['int', 'float', 'str', 'bool'],
        correctAnswer: 'float',
        explanation: {
          correct: 'Benar! Angka desimal (berkoma) di Python bertipe float.',
          wrong: 'Bilangan desimal adalah float. int untuk bilangan bulat tanpa koma.',
        },
      },
      {
        id: 5,
        type: 'write',
        title: 'Tulis Kode: Buat Variabel Umur',
        prompt: 'Buatlah variabel bernama umur dengan nilai 15.',
        correctAnswer: 'umur = 15',
        acceptedAnswers: ['umur = 15', 'umur=15', 'umur =  15'],
        explanation: {
          correct: 'Keren! Variabel umur berisi bilangan bulat 15 berhasil dibuat.',
          wrong: 'Tulis nama variabel umur, diikuti spasi =, spasi, lalu angka 15.',
        },
      },
    ],
  },
  {
    id: 3,
    unitNumber: 1,
    unit: 'Unit 1 · Dasar Algoritma & Python',
    title: 'Input & Output: Ngobrol dengan Komputer',
    subtitle: 'input(), int(), operator hitung',
    xp: 50,
    description: 'Buat program interaktif yang bisa menerima ketikan pengguna dengan input() dan berhitung.',
    slides: [
      {
        id: 1,
        title: 'Program yang Bisa Mendengar',
        story:
          'Sejauh ini program kita hanya bicara satu arah melalui print(). Agar lebih seru, program perlu bisa mendengar dan merespons apa yang diketik pengguna.\n\nDi Python, kita menggunakan fungsi input().',
        codeSnippet: 'nama = input("Siapa namamu? ")\nprint("Senang bertemu denganmu,", nama)',
        codeOutput: 'Siapa namamu? Naell\nSenang bertemu denganmu, Naell',
        mascotKey: 'happy',
      },
      {
        id: 2,
        title: 'Hasil input() Selalu Teks!',
        story:
          'Hati-hati! Apapun yang diketik pengguna di input(), Python selalu menganggapnya sebagai teks (str). Jika mengetik 10, yang didapat adalah "10", bukan angka.\n\nJika ingin dihitung, ubah dulu menjadi angka dengan int()!',
        codeSnippet: 'angka = int(input("Masukkan angka: "))\nprint(angka * 2)',
        warningCallout: '"10" + "10" menghasilkan "1010", sedangkan 10 + 10 menghasilkan 20!',
        mascotKey: 'laptop',
      },
      {
        id: 3,
        title: 'Operator Matematika Dasar',
        story:
          'Komputer adalah kalkulator yang sangat cepat:\n• Penjumlahan: +\n• Pengurangan: -\n• Perkalian: *\n• Pembagian: /\n• Sisa bagi (Modulus): %',
        codeSnippet: 'print(10 + 5)\nprint(4 * 3)\nprint(10 % 3)',
        codeOutput: '15\n12\n1',
        mascotKey: 'think',
      },
      {
        id: 4,
        title: 'Menggabungkan Teks & Variabel',
        story:
          'Kamu bisa mencetak beberapa hal sekaligus di print() dengan memisahkannya memakai koma (,). Python otomatis memberi satu spasi di antara kata.',
        codeSnippet: 'poin = 50\nprint("Poin kamu saat ini:", poin, "XP")',
        codeOutput: 'Poin kamu saat ini: 50 XP',
        mascotKey: 'wave',
      },
      {
        id: 5,
        title: 'Mini Proyek: Kalkulator Umur',
        story:
          'Sekarang kamu bisa menggabungkan input(), konversi int(), operasi hitung, dan print() untuk membuat program kalkulator umur sederhana!',
        codeSnippet: 'lahir = int(input("Tahun lahir: "))\numur = 2026 - lahir\nprint("Umurmu tahun ini:", umur)',
        mascotKey: 'celebrate',
      },
    ],
    summaryPoints: [
      'Menerima input dari pengguna dengan fungsi input()',
      'Mengubah teks ke bilangan bulat dengan int()',
      'Operator aritmatika: +, -, *, /, %',
      'Mencetak gabungan variabel dan string dengan koma',
    ],
    questions: [
      {
        id: 1,
        type: 'choice',
        title: 'Pilihan Ganda: Tipe Kembalian input()',
        prompt: 'Fungsi input() di Python selalu menghasilkan nilai dengan tipe data...',
        options: ['int', 'str (string teks)', 'float', 'bool'],
        correctAnswer: 'str (string teks)',
        explanation: {
          correct: 'Tepat sekali! input() selalu membaca data sebagai teks.',
          wrong: 'input() selalu menghasilkan teks (str). Gunakan int() jika ingin angka.',
        },
      },
      {
        id: 2,
        type: 'output',
        title: 'Tebak Output: Perkalian Python',
        prompt: 'Berapakah output dari kode berikut?',
        codeSnippet: 'print(5 * 4 + 2)',
        options: ['22', '30', '5 * 4 + 2', '20'],
        correctAnswer: '22',
        explanation: {
          correct: 'Benar! Perkalian dihitung terlebih dahulu (5 * 4 = 20), lalu ditambah 2 = 22.',
          wrong: 'Python mengikuti aturan urutan operasi matematika: kali dulu, baru tambah.',
        },
      },
      {
        id: 3,
        type: 'blank',
        title: 'Isian: Ubah Jadi Angka!',
        prompt: 'Lengkapi kode agar input teks diubah menjadi bilangan bulat.',
        codeTemplate: 'skor = _____(input("Masukkan skor: "))',
        chips: ['int', 'str', 'print'],
        correctAnswer: 'int',
        explanation: {
          correct: 'Sempurna! int() mengubah teks menjadi angka integer.',
          wrong: 'Fungsi int() digunakan untuk mengubah teks angka menjadi bilangan bulat.',
        },
      },
      {
        id: 4,
        type: 'order',
        title: 'Susun Langkah: Program Penjumlahan',
        prompt: 'Urutkan langkah membuat program penjumlahan dua angka interaktif.',
        stepItems: [
          'Cetak hasil penjumlahan dengan print',
          'Minta angka pertama dengan input',
          'Hitung total = angka1 + angka2',
          'Minta angka kedua dengan input',
        ],
        correctAnswer: 'Minta angka pertama dengan input',
        correctOrder: [
          'Minta angka pertama dengan input',
          'Minta angka kedua dengan input',
          'Hitung total = angka1 + angka2',
          'Cetak hasil penjumlahan dengan print',
        ],
        explanation: {
          correct: 'Alur logikanya tepat: ambil masukan data, proses kalkulasi, lalu tampilkan hasil!',
          wrong: 'Input kedua angka terlebih dahulu, baru jumlahkan, lalu cetak hasilnya.',
        },
      },
      {
        id: 5,
        type: 'write',
        title: 'Tulis Kode: Operasi Sisa Bagi',
        prompt: 'Tulis kode untuk mencetak sisa bagi dari 17 dibagi 5.',
        correctAnswer: 'print(17 % 5)',
        acceptedAnswers: ['print(17 % 5)', 'print(17%5)', 'print( 17 % 5 )'],
        explanation: {
          correct: 'Hebat! Operator % (modulus) menghasilkan 2 (karena 17 = 5x3 sisa 2).',
          wrong: 'Gunakan operator modulus %: print(17 % 5).',
        },
      },
    ],
  },
  {
    id: 4,
    unitNumber: 2,
    unit: 'Unit 2 · Logika & Percabangan',
    title: 'If: Komputer Bisa Memilih',
    subtitle: 'if, else, elif, perbandingan',
    xp: 50,
    description: 'Ajarkan komputer mengambil keputusan berdasarkan kondisi benar atau salah.',
    slides: [
      {
        id: 1,
        title: 'Percabangan di Kehidupan',
        story:
          'Setiap hari kita membuat keputusan: "Jika hujan, bawa payung. Jika tidak, pakai topi."\n\nKomputer juga bisa memilih jalur keputusan menggunakan perintah if!',
        questionPrompt: 'Keputusan apa yang baru saja kamu ambil pagi ini?',
        mascotKey: 'think',
      },
      {
        id: 2,
        title: 'Struktur Dasar if dan else',
        story:
          'Di Python, struktur percabangan ditulis dengan tanda titik dua (:) di akhir baris dan baris aksi di bawahnya menjorok ke dalam (indentasi 4 spasi).',
        codeSnippet: 'nilai = 80\nif nilai >= 75:\n    print("Lulus! Hebat!")\nelse:\n    print("Tetap semangat!")',
        codeOutput: 'Lulus! Hebat!',
        warningCallout: 'Indentasi wajib ada! Baris di dalam if harus digeser masuk ke kanan.',
        mascotKey: 'laptop',
      },
      {
        id: 3,
        title: 'Operator Pembanding',
        story:
          'Untuk menguji kondisi, kita pakai operator relasional:\n• == (sama dengan)\n• != (tidak sama dengan)\n• > (lebih dari)\n• < (kurang dari)\n• >= (lebih dari atau sama dengan)\n• <= (kurang dari atau sama dengan)',
        codeSnippet: 'print(10 > 5)\nprint(3 == 4)',
        codeOutput: 'True\nFalse',
        mascotKey: 'happy',
      },
      {
        id: 4,
        title: 'Banyak Pilihan dengan elif',
        story:
          'Jika pilihannya lebih dari dua, gunakan elif (singkatan dari else if). Python akan memeriksa kondisi dari atas ke bawah secara berurutan.',
        codeSnippet: 'skor = 85\nif skor >= 90:\n    print("Nilai A")\nelif skor >= 80:\n    print("Nilai B")\nelse:\n    print("Nilai C")',
        codeOutput: 'Nilai B',
        mascotKey: 'laptop',
      },
      {
        id: 5,
        title: 'Logika Cerdas Komputer',
        story:
          'Dengan menggabungkan if-elif-else, aplikasimu sekarang bisa menentukan level permainan, memvalidasi password, atau memeriksa umur pengguna.',
        codeSnippet: 'umur = 17\nif umur >= 17:\n    print("Boleh buat KTP")\nelse:\n    print("Tunggu sampai 17 tahun ya")',
        mascotKey: 'wave',
      },
    ],
    summaryPoints: [
      'Membuat percabangan keputusan dengan if dan else',
      'Pentingnya indentasi 4 spasi pada blok Python',
      'Operator pembanding: ==, !=, >, <, >=, <=',
      'Menangani multi kondisi dengan elif',
    ],
    questions: [
      {
        id: 1,
        type: 'choice',
        title: 'Pilihan Ganda: Simbol Sama Dengan',
        prompt: 'Simbol pembanding untuk memeriksa "apakah sama dengan" di Python adalah...',
        options: ['=', '==', ':=', 'equal'],
        correctAnswer: '==',
        explanation: {
          correct: 'Tepat! Dua tanda sama dengan (==) digunakan untuk membandingkan nilai.',
          wrong: 'Satu tanda = untuk menyimpan nilai. Dua tanda == untuk membandingkan.',
        },
      },
      {
        id: 2,
        type: 'output',
        title: 'Tebak Output: Kondisi If',
        prompt: 'Apa yang akan dicetak oleh kode di bawah?',
        codeSnippet: 'x = 10\nif x < 5:\n    print("Kecil")\nelse:\n    print("Besar")',
        options: ['Kecil', 'Besar', '10', 'Tidak ada yang tampil'],
        correctAnswer: 'Besar',
        explanation: {
          correct: 'Benar! Karena 10 < 5 bernilai False, maka blok else yang dijalankan.',
          wrong: '10 tidak kurang dari 5, sehingga kode masuk ke blok else ("Besar").',
        },
      },
      {
        id: 3,
        type: 'blank',
        title: 'Isian: Blok Alternatif',
        prompt: 'Lengkapi kata kunci untuk mengecek kondisi kedua di percabangan.',
        codeTemplate: 'if nilai > 80:\n    print("Bagus")\n____ nilai > 60:\n    print("Cukup")',
        chips: ['elif', 'else', 'elseif'],
        correctAnswer: 'elif',
        explanation: {
          correct: 'Tepat sekali! Python menggunakan singkatan elif untuk opsi kondisi berikutnya.',
          wrong: 'Python menggunakan kata kunci elif, bukan elseif.',
        },
      },
      {
        id: 4,
        type: 'order',
        title: 'Susun Kode: Cek Nilai Lulus',
        prompt: 'Susun kode agar menampilkan "Lulus" jika nilai 70 atau lebih.',
        stepItems: [
          '    print("Lulus")',
          'nilai = 75',
          'if nilai >= 70:',
        ],
        correctAnswer: 'nilai = 75',
        correctOrder: [
          'nilai = 75',
          'if nilai >= 70:',
          '    print("Lulus")',
        ],
        explanation: {
          correct: 'Struktur kode sempurna: inisialisasi variabel, cek kondisi, jalankan aksi terindentasi!',
          wrong: 'Variabel harus dibuat terlebih dahulu sebelum dicek kondisinya.',
        },
      },
      {
        id: 5,
        type: 'write',
        title: 'Tulis Kode: Cek Password',
        prompt: 'Tulis baris if untuk mengecek apakah variabel pass_input bernilai "1234":',
        correctAnswer: 'if pass_input == "1234":',
        acceptedAnswers: ['if pass_input == "1234":', "if pass_input == '1234':"],
        explanation: {
          correct: 'Hebat! Kamu menguasai penulisan kondisi dengan operator perbandingan string.',
          wrong: 'Formatnya: if pass_input == "1234": (ingat dua tanda = dan titik dua di akhir).',
        },
      },
    ],
  },
  {
    id: 5,
    unitNumber: 3,
    unit: 'Unit 3 · Perulangan',
    title: 'For Loop: Mengulang Tanpa Capek',
    subtitle: 'for, range(), perulangan daftar',
    xp: 50,
    description: 'Otomatisasi pengulangan tugas ratusan kali tanpa lelah menggunakan for loop.',
    slides: [
      {
        id: 1,
        title: 'Capek Mengetik Berulang-ulang?',
        story:
          'Kalau disuruh menulis "Saya berjanji belajar rajin" 100 kali di papan tulis, tangan pasti pegal.\n\nKomputer diciptakan untuk tugas seperti ini: ia bisa mengulang tugas jutaan kali dalam sekejap tanpa pernah mengeluh!',
        mascotKey: 'happy',
      },
      {
        id: 2,
        title: 'Perulangan dengan range()',
        story:
          'Fungsi range(5) menghasilkan urutan angka 0, 1, 2, 3, 4 (dimulai dari 0, sebanyak 5 kali).',
        codeSnippet: 'for i in range(3):\n    print("Halo ke-", i)',
        codeOutput: 'Halo ke- 0\nHalo ke- 1\nHalo ke- 2',
        warningCallout: 'Ingat! Komputer memulai hitungan dari angka 0, bukan 1.',
        mascotKey: 'laptop',
      },
      {
        id: 3,
        title: 'range() dengan Awal dan Akhir',
        story:
          'Kamu bisa mengatur angka mulai dan berhenti: range(1, 6) artinya dari 1 sampai sebelum 6 (yaitu 1, 2, 3, 4, 5).',
        codeSnippet: 'for angka in range(1, 4):\n    print("Hitungan:", angka)',
        codeOutput: 'Hitungan: 1\nHitungan: 2\nHitungan: 3',
        mascotKey: 'think',
      },
      {
        id: 4,
        title: 'Perulangan pada List (Daftar)',
        story:
          'For loop juga sangat berguna untuk memeriksa setiap barang dalam daftar makanan, daftar teman, atau daftar skor.',
        codeSnippet: 'buah = ["Apel", "Jeruk", "Mangga"]\nfor b in buah:\n    print("Saya suka", b)',
        codeOutput: 'Saya suka Apel\nSaya suka Jeruk\nSaya suka Mangga',
        mascotKey: 'wave',
      },
      {
        id: 5,
        title: 'Kekuatan Otomatisasi',
        story:
          'Dengan menggabungkan perulangan dan perhitungan, kamu bisa menjumlahkan seluruh angka dari 1 sampai 100 hanya dalam 3 baris kode!',
        codeSnippet: 'total = 0\nfor i in range(1, 101):\n    total = total + i\nprint("Total:", total)',
        codeOutput: 'Total: 5050',
        mascotKey: 'celebrate',
      },
    ],
    summaryPoints: [
      'Konsep perulangan untuk mengotomatisasi tugas',
      'Membuat urutan angka dengan fungsi range()',
      'Mengulang setiap elemen dalam list/daftar',
      'Akumulasi nilai perhitungan di dalam perulangan',
    ],
    questions: [
      {
        id: 1,
        type: 'output',
        title: 'Tebak Output: range(3)',
        prompt: 'Berapa kali kata "Hai" dicetak oleh kode berikut?',
        codeSnippet: 'for i in range(3):\n    print("Hai")',
        options: ['2 kali', '3 kali', '4 kali', '0 kali'],
        correctAnswer: '3 kali',
        explanation: {
          correct: 'Benar! range(3) menghasilkan 0, 1, 2 sehingga loop berjalan 3 kali.',
          wrong: 'range(3) menghasilkan 3 angka (0, 1, 2) jadi perintah dijalankan 3 kali.',
        },
      },
      {
        id: 2,
        type: 'choice',
        title: 'Pilihan Ganda: Nilai Akhir range()',
        prompt: 'Angka apa saja yang dihasilkan oleh range(2, 5)?',
        options: ['2, 3, 4, 5', '2, 3, 4', '3, 4, 5', '2, 5'],
        correctAnswer: '2, 3, 4',
        explanation: {
          correct: 'Tepat! range(start, stop) berhenti tepat sebelum angka stop.',
          wrong: 'Angka batas akhir (5) tidak diikutsertakan, jadi hanya 2, 3, dan 4.',
        },
      },
      {
        id: 3,
        type: 'blank',
        title: 'Isian: Kata Kunci Perulangan',
        prompt: 'Lengkapi baris awal perulangan for di Python.',
        codeTemplate: '_____ item in daftar:\n    print(item)',
        chips: ['for', 'loop', 'repeat'],
        correctAnswer: 'for',
        explanation: {
          correct: 'Benar! Python menggunakan kata kunci for.',
          wrong: 'Di Python, perulangan jenis ini menggunakan kata kunci for.',
        },
      },
      {
        id: 4,
        type: 'order',
        title: 'Susun Kode: Cetak 1 sampai 3',
        prompt: 'Susun urutan baris kode untuk mencetak angka 1 sampai 3.',
        stepItems: [
          '    print(n)',
          'for n in range(1, 4):',
        ],
        correctAnswer: 'for n in range(1, 4):',
        correctOrder: [
          'for n in range(1, 4):',
          '    print(n)',
        ],
        explanation: {
          correct: 'Sempurna! Baris for di atas, diikuti aksi cetak yang menjorok (indentasi).',
          wrong: 'Header perulangan for harus ditulis sebelum blok yang dijalankan.',
        },
      },
      {
        id: 5,
        type: 'write',
        title: 'Tulis Kode: range 5 kali',
        prompt: 'Tulis sintaks for x yang berulang sebanyak 5 kali menggunakan range(5):',
        correctAnswer: 'for x in range(5):',
        acceptedAnswers: ['for x in range(5):', 'for x in range( 5 ):'],
        explanation: {
          correct: 'Luar biasa! Kamu menguasai sintaks perulangan for loop Python.',
          wrong: 'Tulis: for x in range(5): dengan titik dua di akhir.',
        },
      },
    ],
  },
  {
    id: 6,
    unitNumber: 2,
    unit: 'Unit 2 · Logika & Percabangan',
    title: 'Percabangan Lanjut',
    subtitle: 'and, or, not, match-case',
    xp: 50,
    description: 'Gabungkan multi kondisi dengan operator logika and, or, not serta pola match-case modern.',
    slides: [
      {
        id: 1,
        title: 'Kondisi Lebih Kompleks',
        story:
          'Seringkali satu syarat saja belum cukup. Misalnya untuk naik wahana: "Tinggi badan harus di atas 140 cm DAN sudah membeli tiket."\n\nPython menyediakan operator logika: and, or, dan not.',
        mascotKey: 'think',
      },
      {
        id: 2,
        title: 'Operator and dan or',
        story:
          '• and: SEMUA syarat harus True agar bernilai True.\n• or: CUKUP SALAH SATU syarat bernilai True.',
        codeSnippet: 'umur = 15\npunya_tiket = True\nif umur >= 12 and punya_tiket:\n    print("Boleh masuk bioskop!")',
        codeOutput: 'Boleh masuk bioskop!',
        mascotKey: 'laptop',
      },
      {
        id: 3,
        title: 'Operator not (Pembalik Logika)',
        story: 'Operator not membalikkan nilai boolean: True jadi False, dan False jadi True.',
        codeSnippet: 'hujan = False\nif not hujan:\n    print("Ayo main di luar!")',
        codeOutput: 'Ayo main di luar!',
        mascotKey: 'happy',
      },
      {
        id: 4,
        title: 'Mengenal match-case di Python',
        story:
          'Pada Python 3.10 ke atas, terdapat fitur match-case (seperti switch pada bahasa lain) yang sangat rapi untuk mencocokkan banyak pilihan perintah.',
        codeSnippet: 'pilihan = 1\nmatch pilihan:\n    case 1:\n        print("Mulai Game")\n    case 2:\n        print("Pengaturan")\n    case _:\n        print("Pilihan salah")',
        codeOutput: 'Mulai Game',
        tipCallout: 'Tanda _ (case _) adalah pilihan default jika tidak ada opsi yang cocok!',
        mascotKey: 'wave',
      },
      {
        id: 5,
        title: 'Kombinasi Logika Handal',
        story:
          'Dengan logika percabangan tingkat lanjut ini, aplikasi buatanmu bisa menangani alur sistem autentikasi, status keanggotaan, hingga navigasi menu game!',
        codeSnippet: 'is_admin = True\nlevel = 5\nif is_admin or level > 10:\n    print("Akses Fitur Khusus Diberikan")',
        mascotKey: 'celebrate',
      },
    ],
    summaryPoints: [
      'Operator logika and (keduanya benar) & or (salah satu benar)',
      'Membalikkan logika dengan operator not',
      'Pola match-case modern untuk pencocokan multi kondisi',
      'Penggunaan case _ sebagai fallback default',
    ],
    questions: [
      {
        id: 1,
        type: 'choice',
        title: 'Pilihan Ganda: Operator and',
        prompt: 'Ekspresi (True and False) akan menghasilkan nilai...',
        options: ['True', 'False', 'None', 'Error'],
        correctAnswer: 'False',
        explanation: {
          correct: 'Benar! Operator and mengharuskan kedua sisi bernilai True.',
          wrong: 'Pada operator and, jika salah satu saja False maka hasilnya False.',
        },
      },
      {
        id: 2,
        type: 'output',
        title: 'Tebak Output: Operator or',
        prompt: 'Apa hasil output dari kode berikut?',
        codeSnippet: 'print(5 > 10 or 3 < 7)',
        options: ['True', 'False', '5', '7'],
        correctAnswer: 'True',
        explanation: {
          correct: 'Tepat! Karena 3 < 7 bernilai True, maka operator or menghasilkan True.',
          wrong: 'Operator or bernilai True jika minimal salah satu kondisi bernilai True.',
        },
      },
      {
        id: 3,
        type: 'blank',
        title: 'Isian: Fallback match-case',
        prompt: 'Simbol apa yang digunakan untuk case default pada match-case?',
        codeTemplate: 'match menu:\n    case 1: print("A")\n    case _: print("Lainnya")',
        chips: ['_', 'default', '*'],
        correctAnswer: '_',
        explanation: {
          correct: 'Sempurna! Garis bawah (_) adalah wildcard default di match-case Python.',
          wrong: 'Python memakai tanda garis bawah _ untuk opsi default pada match-case.',
        },
      },
      {
        id: 4,
        type: 'order',
        title: 'Susun Kode: Struktur match-case',
        prompt: 'Urutkan kode match case untuk nilai opsi.',
        stepItems: [
          '        print("Simpan")',
          '    case "save":',
          'match aksi:',
        ],
        correctAnswer: 'match aksi:',
        correctOrder: [
          'match aksi:',
          '    case "save":',
          '        print("Simpan")',
        ],
        explanation: {
          correct: 'Urutan hierarki indentasi match-case tersusun rapi!',
          wrong: 'Blok dimulai dari match aksi, lalu cabang case, baru perintah aksi.',
        },
      },
      {
        id: 5,
        type: 'write',
        title: 'Tulis Kode: Operator not',
        prompt: 'Cetak kebalikan dari variabel login_status menggunakan operator not:',
        correctAnswer: 'print(not login_status)',
        acceptedAnswers: ['print(not login_status)', 'print( not login_status )'],
        explanation: {
          correct: 'Keren! not membalikkan nilai boolean dari variabel tersebut.',
          wrong: 'Gunakan operator not di dalam print: print(not login_status).',
        },
      },
    ],
  },
  {
    id: 7,
    unitNumber: 3,
    unit: 'Unit 3 · Perulangan',
    title: 'While Loop',
    subtitle: 'while, break, continue, do-while',
    xp: 50,
    description: 'Kuasai perulangan berbasis kondisi, cara keluar dari loop dengan break, dan skip dengan continue.',
    slides: [
      {
        id: 1,
        title: 'Mengulang Selama Kondisi Benar',
        story:
          'Berbeda dengan for loop yang jumlah putarannya sudah pasti, while loop terus berputar SELAMA (while) suatu kondisi masih bernilai True.\n\nContoh: "Selama baterai belum 100%, lanjutkan mengisi daya."',
        mascotKey: 'think',
      },
      {
        id: 2,
        title: 'Contoh while loop',
        story:
          'Pastikan ada sesuatu di dalam loop yang mengubah kondisi, agar perulangan bisa selesai dan tidak macet selamanya (infinite loop)!',
        codeSnippet: 'energi = 3\nwhile energi > 0:\n    print("Berlari! Sisa energi:", energi)\n    energi = energi - 1\nprint("Istirahat!")',
        codeOutput: 'Berlari! Sisa energi: 3\nBerlari! Sisa energi: 2\nBerlari! Sisa energi: 1\nIstirahat!',
        warningCallout: 'Awas! Jika lupa mengurangi energi, program akan berputar tanpa henti!',
        mascotKey: 'laptop',
      },
      {
        id: 3,
        title: 'Menghentikan Loop dengan break',
        story:
          'Kata kunci break berfungsi sebagai "rem darurat". Begitu terbaca, loop langsung berhenti seketika saat itu juga.',
        codeSnippet: 'while True:\n    kata = input("Ketik stop untuk selesai: ")\n    if kata == "stop":\n        break\nprint("Selesai!")',
        mascotKey: 'happy',
      },
      {
        id: 4,
        title: 'Melompati Putaran dengan continue',
        story:
          'Kata kunci continue tidak menghentikan loop, melainkan langsung melompati sisa kode di bawahnya dan lanjut ke putaran berikutnya.',
        codeSnippet: 'for i in range(1, 5):\n    if i == 3:\n        continue\n    print("Angka:", i)',
        codeOutput: 'Angka: 1\nAngka: 2\nAngka: 4',
        mascotKey: 'wave',
      },
      {
        id: 5,
        title: 'Pola Do-While di Python',
        story:
          'Python tidak punya perintah do-while bawaan, tetapi programmer Python memakai pola while True yang diakhiri if kondisi: break di bagian bawah.',
        codeSnippet: 'while True:\n    password = input("Sandi: ")\n    if password == "rahasia":\n        break',
        mascotKey: 'celebrate',
      },
    ],
    summaryPoints: [
      'Perulangan berbasis kondisi dengan while',
      'Mencegah perulangan tak terbatas (infinite loop)',
      'Menghentikan loop secara paksa dengan break',
      'Melewati satu putaran menggunakan continue',
    ],
    questions: [
      {
        id: 1,
        type: 'choice',
        title: 'Pilihan Ganda: Rem Darurat Loop',
        prompt: 'Perintah Python yang berfungsi menghentikan perulangan seketika adalah...',
        options: ['stop', 'break', 'exit', 'pause'],
        correctAnswer: 'break',
        explanation: {
          correct: 'Tepat! Kata kunci break langsung mengeluarkan program dari loop.',
          wrong: 'Di Python, perintah untuk menghentikan perulangan adalah break.',
        },
      },
      {
        id: 2,
        type: 'output',
        title: 'Tebak Output: Efek continue',
        prompt: 'Angka berapa yang terlewat tidak dicetak pada kode berikut?',
        codeSnippet: 'for x in [1, 2, 3]:\n    if x == 2:\n        continue\n    print(x)',
        options: ['1', '2', '3', 'Tidak ada yang terlewat'],
        correctAnswer: '2',
        explanation: {
          correct: 'Benar! Ketika x bernilai 2, continue langsung melompat ke putaran berikutnya.',
          wrong: 'Saat x bernilai 2, perintah print dilewati oleh perintah continue.',
        },
      },
      {
        id: 3,
        type: 'blank',
        title: 'Isian: Perulangan Tak Terbatas',
        prompt: 'Lengkapi kode perulangan yang terus berjalan tanpa henti hingga di-break.',
        codeTemplate: 'while _____:\n    print("Jalan")\n    break',
        chips: ['True', 'False', 'None'],
        correctAnswer: 'True',
        explanation: {
          correct: 'Sempurna! while True akan terus berulang sampai menemui break.',
          wrong: 'Kondisi bernilai True membuat while terus berjalan.',
        },
      },
      {
        id: 4,
        type: 'order',
        title: 'Susun Kode: Hitung Mundur',
        prompt: 'Susun kode hitung mundur dari 3 ke 1 dengan while loop.',
        stepItems: [
          '    print(n)',
          '    n = n - 1',
          'while n > 0:',
          'n = 3',
        ],
        correctAnswer: 'n = 3',
        correctOrder: [
          'n = 3',
          'while n > 0:',
          '    print(n)',
          '    n = n - 1',
        ],
        explanation: {
          correct: 'Urutan sempurna: inisialisasi n, periksa syarat, cetak nilai, lalu kurangi nilai n.',
          wrong: 'Variabel n diatur dulu, lalu while, baru aksi di dalam loop.',
        },
      },
      {
        id: 5,
        type: 'write',
        title: 'Tulis Kode: Keluar dari Loop',
        prompt: 'Tulis satu baris perintah untuk keluar seketika dari perulangan:',
        correctAnswer: 'break',
        acceptedAnswers: ['break', 'break;'],
        explanation: {
          correct: 'Hebat! Perintah break adalah senjata ampuh mengontrol alur loop.',
          wrong: 'Ketik: break',
        },
      },
    ],
  },
  {
    id: 8,
    unitNumber: 4,
    unit: 'Unit 4 · Evaluasi Akhir',
    title: 'Ujian Akhir: Master Algogo',
    subtitle: '15 soal gabungan, lencana Master Algogo',
    xp: 150,
    description: 'Buktikan kemampuanmu dari Level 1 sampai 7 dalam ujian komprehensif untuk meraih gelar Master Algogo!',
    slides: [
      {
        id: 1,
        title: 'Selamat di Puncak Tantangan!',
        story:
          'Kamu telah melalui perjalanan panjang: mulai dari mengenal apa itu algoritma, variabel, input-output, percabangan if-elif-else, for loop, logika lanjut, hingga while loop!\n\nDi level penutup ini, kamu akan menghadapi tantangan komprehensif tanpa rangkuman materi.',
        questionPrompt: 'Apakah kamu sudah siap membuktikan kemampuanmu?',
        mascotKey: 'celebrate',
      },
      {
        id: 2,
        title: 'Tips Menghadapi Ujian',
        story:
          '• Baca setiap soal dengan cermat dan tenang.\n• Perhatikan tanda kutip pada teks dan tanda pembanding.\n• Ingat aturan urutan operasi matematika dan indentasi kode Python.\n• Selesaikan semua soal untuk membuka lencana bergengsi Master Algogo!',
        tipCallout: 'Tersedia +150 XP bonus jika kamu berhasil menyelesaikan evaluasi ini!',
        mascotKey: 'laptop',
      },
    ],
    summaryPoints: [
      'Penguasaan logika algoritma terstruktur',
      'Pemahaman tipe data dan manipulasi variabel',
      'Pengambilan keputusan dengan percabangan komprehensif',
      'Efisiensi otomasi perulangan for dan while',
    ],
    questions: [
      {
        id: 1,
        type: 'choice',
        title: 'Soal 1: Definisi Algoritma',
        prompt: 'Salah satu ciri utama algoritma yang baik adalah "memiliki akhir" (finite), yang artinya...',
        options: [
          'Algoritma harus berjalan selamanya tanpa henti',
          'Algoritma memiliki langkah terakhir dan pasti berhenti',
          'Algoritma hanya boleh terdiri dari 3 baris kode',
          'Algoritma tidak boleh menampilkan hasil',
        ],
        correctAnswer: 'Algoritma memiliki langkah terakhir dan pasti berhenti',
        explanation: {
          correct: 'Hebat! Algoritma yang baik tidak boleh terjebak loop tak berhingga dan harus punya titik selesai.',
          wrong: 'Memiliki akhir berarti algoritma harus berhenti setelah menyelesaikan langkah-langkahnya.',
        },
      },
      {
        id: 2,
        type: 'output',
        title: 'Soal 2: Evaluasi Ekspresi Python',
        prompt: 'Berapakah output dari kode berikut?',
        codeSnippet: 'a = 5\nb = 2\nprint(a ** b)',
        options: ['10', '7', '25', '2.5'],
        correctAnswer: '25',
        explanation: {
          correct: 'Tepat! Operator ** adalah operasi pangkat di Python (5 pangkat 2 = 25).',
          wrong: 'Operator ** adalah pemangkatan: 5 pangkat 2 = 25.',
        },
      },
      {
        id: 3,
        type: 'blank',
        title: 'Soal 3: Logika Bertingkat',
        prompt: 'Lengkapi agar pesan tampil hanya jika nilai di antara 80 dan 100:',
        codeTemplate: 'if nilai >= 80 _____ nilai <= 100:\n    print("Istimewa")',
        chips: ['and', 'or', 'not'],
        correctAnswer: 'and',
        explanation: {
          correct: 'Sempurna! Kedua syarat harus terpenuhi sekaligus, jadi gunakan and.',
          wrong: 'Gunakan operator and agar kedua rentang batas nilai dicek secara bersamaan.',
        },
      },
      {
        id: 4,
        type: 'order',
        title: 'Soal 4: Susun Fungsi Cetak List',
        prompt: 'Urutkan kode untuk mencetak setiap elemen dalam list warna.',
        stepItems: [
          '    print(w)',
          'warna = ["Merah", "Biru"]',
          'for w in warna:',
        ],
        correctAnswer: 'warna = ["Merah", "Biru"]',
        correctOrder: [
          'warna = ["Merah", "Biru"]',
          'for w in warna:',
          '    print(w)',
        ],
        explanation: {
          correct: 'Urutan deklarasi list dan iterasi for loop kamu sangat akurat!',
          wrong: 'Buat list terlebih dahulu, buat header for, lalu cetak variabel w.',
        },
      },
      {
        id: 5,
        type: 'write',
        title: 'Soal 5: Tulis Program Master',
        prompt: 'Tulis kode untuk mencetak kata "Algogo" sebanyak satu kali:',
        correctAnswer: 'print("Algogo")',
        acceptedAnswers: ['print("Algogo")', "print('Algogo')", 'print( "Algogo" )'],
        explanation: {
          correct: 'Luar biasa! Selamat, kamu telah menuntaskan seluruh kurikulum Algogo dengan gemilang!',
          wrong: 'Ketik: print("Algogo")',
        },
      },
    ],
  },
];
