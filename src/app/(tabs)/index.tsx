import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { LessonPopover } from '@/components/ngulik/lesson-popover';
import { LevelBanner } from '@/components/ngulik/level-banner';
import { LevelNode } from '@/components/ngulik/level-node';
import { Screen } from '@/components/ngulik/screen';
import { SectionDivider } from '@/components/ngulik/section-divider';
import { StreakBadge } from '@/components/ngulik/streak-badge';
import { Text } from '@/components/ngulik/text';
import { Mascots, type Art } from '@/constants/assets';
import { Colors, Radius, Shadows, Spacing } from '@/constants/theme';
import { CURRICULUM } from '@/data/curriculum';
import { useProgress } from '@/hooks/use-progress';

type TrailNode = {
  id: number;
  levelId: number;
  title: string;
  subtitle: string;
  xp: number;
  offsetX: number;
  mascotLeft?: Art;
  mascotRight?: Art;
};

type TrailSection = {
  id: string;
  dividerTitle?: string;
  levelId: number;
  nodes: TrailNode[];
};

/**
 * Daftar seksi dan node jalur belajar bertema Duolingo,
 * sesuai dengan desain UI/UX Algogo.
 */
const TRAIL_SECTIONS: TrailSection[] = [
  {
    id: 'sec-1',
    levelId: 1,
    nodes: [
      {
        id: 1,
        levelId: 1,
        title: 'Petunjuk & Langkah Awal',
        subtitle: 'Memahami urutan langkah sebelum memberi instruksi ke komputer.',
        xp: 10,
        offsetX: 0,
      },
      {
        id: 2,
        levelId: 1,
        title: 'Apa Itu Algoritma?',
        subtitle: 'Tiga hal utama: Tujuan, Langkah, dan Hasil.',
        xp: 10,
        offsetX: -42,
      },
      {
        id: 3,
        levelId: 1,
        title: 'Algoritma Seperti Resep',
        subtitle: 'Mengolah langkah demi langkah menjadi hasil nyata.',
        xp: 10,
        offsetX: -65,
        mascotRight: Mascots.wave,
      },
      {
        id: 4,
        levelId: 1,
        title: 'Ciri Algoritma yang Baik',
        subtitle: 'Teratur, jelas, punya tujuan, dan memiliki akhir.',
        xp: 10,
        offsetX: -35,
      },
      {
        id: 5,
        levelId: 1,
        title: 'Perintah print() Pertama',
        subtitle: 'Menampilkan teks pertama kamu di Python.',
        xp: 10,
        offsetX: 0,
      },
    ],
  },
  {
    id: 'sec-2',
    dividerTitle: 'Analogi Pemrograman',
    levelId: 1,
    nodes: [
      {
        id: 6,
        levelId: 1,
        title: 'Resep vs Program',
        subtitle: 'Bagaimana komputer mengeksekusi instruksi dari atas ke bawah.',
        xp: 15,
        offsetX: 42,
      },
      {
        id: 7,
        levelId: 1,
        title: 'Bahasa Komputer',
        subtitle: 'Komputer butuh instruksi yang spesifik dan tidak ambigu.',
        xp: 15,
        offsetX: 65,
        mascotRight: Mascots.laptop,
      },
      {
        id: 8,
        levelId: 1,
        title: 'Latihan Logika Algoritma',
        subtitle: 'Menguji kepekaan urutan langkah dan instruksi.',
        xp: 20,
        offsetX: 0,
      },
    ],
  },
  {
    id: 'sec-3',
    dividerTitle: 'Pengenalan Python',
    levelId: 1,
    nodes: [
      {
        id: 9,
        levelId: 1,
        title: 'Sintaks Bersih Python',
        subtitle: 'Kenapa Python menjadi bahasa paling ramah pemula.',
        xp: 10,
        offsetX: -42,
      },
      {
        id: 10,
        levelId: 1,
        title: 'Mencetak Angka & Teks',
        subtitle: 'Perbedaan teks di dalam tanda kutip dan angka langsung.',
        xp: 10,
        offsetX: -65,
      },
      {
        id: 11,
        levelId: 1,
        title: 'Sensitif Huruf (Case Sensitive)',
        subtitle: 'Hati-hati! print() dan Print() berbeda di Python.',
        xp: 10,
        offsetX: -30,
        mascotLeft: Mascots.think,
      },
      {
        id: 12,
        levelId: 1,
        title: 'Komentar Kode (#)',
        subtitle: 'Menulis catatan penjelasan tanpa dieksekusi komputer.',
        xp: 10,
        offsetX: 35,
      },
      {
        id: 13,
        levelId: 1,
        title: 'Mengatasi Syntax Error',
        subtitle: 'Membaca pesan kesalahan dengan tenang dan tepat.',
        xp: 15,
        offsetX: 65,
      },
    ],
  },
  {
    id: 'sec-4',
    dividerTitle: 'Variabel dan Tipe Data',
    levelId: 2,
    nodes: [
      {
        id: 14,
        levelId: 2,
        title: 'Kotak Penyimpan Data',
        subtitle: 'Memberi nama wadah dan menyimpan nilai ke dalamnya.',
        xp: 10,
        offsetX: 40,
      },
      {
        id: 15,
        levelId: 2,
        title: 'Integer & Float',
        subtitle: 'Membedakan bilangan bulat dan bilangan desimal berkoma.',
        xp: 10,
        offsetX: 0,
      },
      {
        id: 16,
        levelId: 2,
        title: 'String & Boolean',
        subtitle: 'Teks dalam tanda kutip dan nilai kebenaran True / False.',
        xp: 10,
        offsetX: -45,
        mascotLeft: Mascots.happy,
      },
      {
        id: 17,
        levelId: 2,
        title: 'Aturan Penamaan Variabel',
        subtitle: 'Gunakan snake_case, jangan gunakan spasi atau angka di awal.',
        xp: 10,
        offsetX: -65,
      },
      {
        id: 18,
        levelId: 2,
        title: 'Latihan Variabel & Data',
        subtitle: 'Menguji manipulasi nilai variabel dalam Python.',
        xp: 20,
        offsetX: -30,
      },
    ],
  },
  {
    id: 'sec-5',
    dividerTitle: 'Operasi Dasar',
    levelId: 3,
    nodes: [
      {
        id: 19,
        levelId: 3,
        title: 'Operator Aritmatika',
        subtitle: 'Menghitung dengan operator +, -, *, /, //, dan %.',
        xp: 10,
        offsetX: 35,
      },
      {
        id: 20,
        levelId: 3,
        title: 'Menerima Input: input()',
        subtitle: 'Meminta masukan dari pengguna agar program interaktif.',
        xp: 10,
        offsetX: 65,
        mascotRight: Mascots.happy,
      },
      {
        id: 21,
        levelId: 3,
        title: 'Konversi Tipe int() & float()',
        subtitle: 'Mengubah masukan teks menjadi angka agar bisa dihitung.',
        xp: 10,
        offsetX: 40,
      },
      {
        id: 22,
        levelId: 3,
        title: 'Format Teks f-string',
        subtitle: 'Menggabungkan teks dan variabel dengan rapi dan modern.',
        xp: 10,
        offsetX: 0,
      },
      {
        id: 23,
        levelId: 3,
        title: 'Kuis Input & Kalkulasi',
        subtitle: 'Uji kemampuan membuat kalkulator sederhana.',
        xp: 20,
        offsetX: -45,
      },
    ],
  },
  {
    id: 'sec-6',
    dividerTitle: 'Percabangan (If-Else)',
    levelId: 4,
    nodes: [
      {
        id: 24,
        levelId: 4,
        title: 'Komputer Bisa Memilih: if',
        subtitle: 'Menjalankan blok kode hanya ketika syarat terpenuhi.',
        xp: 10,
        offsetX: -65,
        mascotLeft: Mascots.think,
      },
      {
        id: 25,
        levelId: 4,
        title: 'Operator Perbandingan',
        subtitle: 'Memeriksa relasi nilai dengan ==, !=, >, <, >=, <=.',
        xp: 10,
        offsetX: -35,
      },
      {
        id: 26,
        levelId: 4,
        title: 'Kondisi Alternatif: else',
        subtitle: 'Jalan keluar cadangan saat kondisi if tidak benar.',
        xp: 10,
        offsetX: 0,
      },
      {
        id: 27,
        levelId: 4,
        title: 'Banyak Pilihan: elif',
        subtitle: 'Mengecek beberapa alternatif kondisi secara beruntun.',
        xp: 10,
        offsetX: 42,
      },
      {
        id: 28,
        levelId: 4,
        title: 'Logika and, or, not',
        subtitle: 'Menggabungkan beberapa syarat dalam satu pernyataan.',
        xp: 20,
        offsetX: 65,
      },
    ],
  },
  {
    id: 'sec-7',
    dividerTitle: 'Perulangan (Loops)',
    levelId: 5,
    nodes: [
      {
        id: 29,
        levelId: 5,
        title: 'Mengulang Otomatis: for',
        subtitle: 'Mengulangi instruksi berkali-kali tanpa menulis ulang.',
        xp: 10,
        offsetX: 40,
      },
      {
        id: 30,
        levelId: 5,
        title: 'Fungsi range()',
        subtitle: 'Menghasilkan deret bilangan untuk langkah perulangan.',
        xp: 10,
        offsetX: 0,
        mascotRight: Mascots.wave,
      },
      {
        id: 31,
        levelId: 5,
        title: 'Perulangan Kondisi: while',
        subtitle: 'Terus mengulang selama kondisi masih bernilai True.',
        xp: 10,
        offsetX: -45,
      },
      {
        id: 32,
        levelId: 5,
        title: 'Hentikan Loop: break',
        subtitle: 'Keluar langsung dari putaran saat kondisi terpenuhi.',
        xp: 10,
        offsetX: -65,
      },
      {
        id: 33,
        levelId: 5,
        title: 'Lewati Langkah: continue',
        subtitle: 'Melompati sisa instruksi dan lanjut ke putaran berikutnya.',
        xp: 20,
        offsetX: -30,
      },
    ],
  },
  {
    id: 'sec-8',
    dividerTitle: 'Memilih Struktur Data',
    levelId: 6,
    nodes: [
      {
        id: 34,
        levelId: 6,
        title: 'Koleksi Berurutan: List',
        subtitle: 'Menampung banyak data dalam satu wadah tanda kurung siku [].',
        xp: 10,
        offsetX: 35,
      },
      {
        id: 35,
        levelId: 6,
        title: 'Indeks & Akses Data',
        subtitle: 'Mengambil data berdasarkan nomor posisi mulai dari 0.',
        xp: 10,
        offsetX: 65,
        mascotRight: Mascots.think,
      },
      {
        id: 36,
        levelId: 6,
        title: 'Menambah Data: append()',
        subtitle: 'Menyisipkan data baru ke dalam list secara dinamis.',
        xp: 10,
        offsetX: 35,
      },
      {
        id: 37,
        levelId: 6,
        title: 'Perulangan Elemen List',
        subtitle: 'Membaca dan memproses isi list satu per satu dengan for.',
        xp: 10,
        offsetX: 0,
      },
      {
        id: 38,
        levelId: 6,
        title: 'Latihan Struktur Data',
        subtitle: 'Menguji kemahiran manipulasi array dan koleksi data.',
        xp: 20,
        offsetX: -45,
      },
    ],
  },
  {
    id: 'sec-9',
    dividerTitle: 'Algoritma Sederhana & Ujian Akhir',
    levelId: 8,
    nodes: [
      {
        id: 39,
        levelId: 7,
        title: 'Pencarian Linear (Linear Search)',
        subtitle: 'Menemukan data dengan memeriksa tiap item secara berurutan.',
        xp: 15,
        offsetX: -65,
        mascotLeft: Mascots.celebrate,
      },
      {
        id: 40,
        levelId: 7,
        title: 'Nilai Maksimum & Minimum',
        subtitle: 'Algoritma mencari angka tertinggi atau terendah dalam list.',
        xp: 15,
        offsetX: -30,
      },
      {
        id: 41,
        levelId: 7,
        title: 'Akumulator & Penghitung',
        subtitle: 'Pola menjumlahkan nilai total atau menghitung kemunculan.',
        xp: 15,
        offsetX: 30,
      },
      {
        id: 42,
        levelId: 8,
        title: 'Review Komprehensif',
        subtitle: 'Persiapan menghadapi tantangan evaluasi pamungkas.',
        xp: 20,
        offsetX: 65,
      },
      {
        id: 43,
        levelId: 8,
        title: '🏆 Ujian Akhir Master Algogo',
        subtitle: 'Selesaikan 15 soal gabungan dan raih lencana Master!',
        xp: 150,
        offsetX: 0,
      },
    ],
  },
];

export default function HomeScreen() {
  const { streakDays, currentStepNodeId, completedStepNodes } = useProgress();
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
  const [lockedNotice, setLockedNotice] = useState<string | null>(null);

  // Ambil level pertama untuk banner header (atau level aktif pengguna)
  const currentLevel = CURRICULUM[0];

  const handleStartLesson = (node: TrailNode) => {
    setSelectedNodeId(null);
    router.push(`/lesson/${node.levelId}` as any);
  };

  const getNodeStatus = (node: TrailNode): 'active' | 'locked' | 'completed' => {
    // 1. Jika node ini sudah diselesaikan sebelumnya -> UNGU (bisa diulas)
    if (completedStepNodes.includes(node.id)) {
      return 'completed';
    }

    // 2. Hanya node tahap yang sedang aktif yang berwarna UNGU
    if (node.id === currentStepNodeId) {
      return 'active';
    }

    // 3. Semua node yang belum sampai tahapnya adalah ABU-ABU (LOCKED)
    return 'locked';
  };

  return (
    <Screen
      frameStyle={styles.screenFrame}
      contentContainerStyle={styles.scrollContent}>
      {/* 1. Bar Atas: Streak Badge */}
      <View style={styles.topBar}>
        <StreakBadge days={streakDays} />
      </View>

      {/* 2. Banner Level 1 di atas jalur */}
      <View style={styles.bannerContainer}>
        <LevelBanner
          level={currentLevel?.id ?? 1}
          eyebrow={`LEVEL ${currentLevel?.id ?? 1}`}
          title="Mengenal Algoritma"
          art={Mascots.wave}
        />
      </View>

      {/* Pesan saat mengetuk node terkunci */}
      {lockedNotice ? (
        <View style={styles.noticeToast}>
          <Text variant="caption" color="onPrimary">
            {lockedNotice}
          </Text>
        </View>
      ) : null}

      {/* 3. Jalur Belajar Berkelok ala Duolingo */}
      <View style={styles.pathTrail}>
        {TRAIL_SECTIONS.map((section) => {
          const sectionHasSelected = section.nodes.some((n) => n.id === selectedNodeId);

          return (
            <View
              key={section.id}
              style={[
                styles.sectionBlock,
                sectionHasSelected && styles.sectionBlockActive,
              ]}>
              {/* Pembatas Bab (Section Divider) */}
              {section.dividerTitle ? (
                <View style={styles.dividerWrapper}>
                  <SectionDivider label={section.dividerTitle} />
                </View>
              ) : null}

              {/* Deretan Node Berkelok */}
              <View
                style={[
                  styles.nodesWrapper,
                  sectionHasSelected && styles.nodesWrapperActive,
                ]}>
                {section.nodes.map((node) => {
                  const status = getNodeStatus(node);
                  const isSelected = selectedNodeId === node.id;
                  const isFinal = node.id === 43;

                  return (
                    <View
                      key={node.id}
                      style={[
                        styles.nodeRow,
                        isSelected && styles.nodeRowActive,
                      ]}>
                      {/* Maskot di sisi KIRI jika ada */}
                      {node.mascotLeft ? (
                        <View style={styles.mascotLeft}>
                          <ArtImage art={node.mascotLeft} height={68} />
                        </View>
                      ) : null}

                      {/* Node Lingkaran 3D dengan horizontal offset */}
                      <View
                        style={[
                          styles.nodeAnchor,
                          { transform: [{ translateX: node.offsetX }] },
                        ]}>
                        <LevelNode
                          status={status}
                          size={isFinal ? 68 : 58}
                          label={`${node.title} (${status})`}
                          onPress={() => {
                            if (status === 'locked') {
                              setLockedNotice('Selesaikan level sebelumnya untuk membuka materi ini! 🔒');
                              setTimeout(() => setLockedNotice(null), 2500);
                              setSelectedNodeId(null);
                            } else {
                              setLockedNotice(null);
                              setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
                            }
                          }}
                        />
                      </View>

                      {/* Maskot di sisi KANAN jika ada */}
                      {node.mascotRight ? (
                        <View style={styles.mascotRight}>
                          <ArtImage art={node.mascotRight} height={68} />
                        </View>
                      ) : null}

                      {/* Popover saat Node Terpilih (selalu tampil di depan node lainnya) */}
                      {isSelected && (
                        <View
                          style={[
                            styles.popoverContainer,
                            {
                              transform: [
                                {
                                  translateX: Math.max(
                                    -60,
                                    Math.min(60, node.offsetX)
                                  ),
                                },
                              ],
                            },
                          ]}>
                          <LessonPopover
                            title={node.title}
                            xp={node.xp}
                            description={node.subtitle}
                            actionLabel={status === 'completed' ? 'Ulas' : 'Mulai'}
                            onAction={() => handleStartLesson(node)}
                          />
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}

        {/* Maskot Akhir Jalur Belajar */}
        <View style={styles.trailEnd}>
          <ArtImage art={Mascots.celebrate} height={110} />
          <Text variant="headline" style={styles.trailEndTitle}>
            Puncak Jalur Algogo! 🎓
          </Text>
          <Text variant="caption" color="inkSoft" style={styles.trailEndDesc}>
            Kamu siap menguasai dasar algoritma & pemrograman Python secara tuntas.
          </Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenFrame: {
    paddingHorizontal: 0,
  },
  scrollContent: {
    paddingHorizontal: Spacing[4],
    paddingTop: Spacing[2],
    paddingBottom: Spacing[8] + 40,
    gap: Spacing[4],
  },
  topBar: {
    paddingHorizontal: Spacing[1],
    paddingBottom: Spacing[1],
  },
  bannerContainer: {
    marginBottom: Spacing[2],
  },
  noticeToast: {
    backgroundColor: Colors.inkSoft,
    paddingVertical: Spacing[2],
    paddingHorizontal: Spacing[4],
    borderRadius: Radius.full,
    alignSelf: 'center',
    boxShadow: Shadows.raised,
  },
  pathTrail: {
    width: '100%',
    alignItems: 'center',
    gap: Spacing[5],
  },
  sectionBlock: {
    width: '100%',
    alignItems: 'center',
    gap: Spacing[4],
    zIndex: 1,
  },
  sectionBlockActive: {
    zIndex: 9999,
  },
  dividerWrapper: {
    width: '100%',
    paddingVertical: Spacing[2],
  },
  nodesWrapper: {
    width: '100%',
    alignItems: 'center',
    gap: 28,
    zIndex: 1,
  },
  nodesWrapperActive: {
    zIndex: 9999,
  },
  nodeRow: {
    width: '100%',
    minHeight: 64,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },
  nodeRowActive: {
    zIndex: 10000,
  },
  nodeAnchor: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  mascotLeft: {
    position: 'absolute',
    left: 14,
    top: -8,
    zIndex: 1,
  },
  mascotRight: {
    position: 'absolute',
    right: 14,
    top: -8,
    zIndex: 1,
  },
  popoverContainer: {
    position: 'absolute',
    top: 68,
    zIndex: 100000,
    alignItems: 'center',
  },
  trailEnd: {
    alignItems: 'center',
    paddingVertical: Spacing[6],
    gap: Spacing[2],
    marginTop: Spacing[4],
  },
  trailEndTitle: {
    marginTop: Spacing[2],
  },
  trailEndDesc: {
    textAlign: 'center',
    maxWidth: 260,
  },
});
