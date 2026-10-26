import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Polyline } from 'react-native-svg';

import { Text } from '@/components/ngulik/text';
import { Colors, Fonts, Radius, Shadows, Sizes, Spacing } from '@/constants/theme';
import { useProgress } from '@/hooks/use-progress';

const misiHeaderCatImg = require('@/assets/ngulik/ilustrasi/misi-header-cat.png');
const misiStudyImg = require('@/assets/ngulik/ilustrasi/misi-study.png');
const misiFlameImg = require('@/assets/ngulik/ilustrasi/misi-flame.png');
const misiBooksImg = require('@/assets/ngulik/ilustrasi/misi-books.png');

function ClockIcon({ size = 15, color = 'rgba(255,255,255,0.9)' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10" />
      <Polyline points="12 6 12 12 16 14" />
    </Svg>
  );
}

export default function MissionsScreen() {
  const insets = useSafeAreaInsets();
  const { streakDays, completedLevels } = useProgress();

  // Hitung progres dinamis
  const completedCount = completedLevels.length;
  const streakProgress = Math.min(streakDays, 2);
  const dailyMaterialProgress = Math.min(completedCount, 2);
  const totalMissionPoints = 4; // Mock poin misi bulanan sesuai desain

  return (
    <View style={styles.root}>
      <View style={styles.frame}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {/* 1. Header Ungu Penuh di Bagian Atas */}
          <View style={[styles.purpleHeader, { paddingTop: Math.max(insets.top, 16) + 12 }]}>
            <View style={styles.headerTopRow}>
              <View style={styles.headerTextCol}>
                <Text variant="display" color="onPrimary" style={styles.headerTitle}>
                  Misi Oktober
                </Text>
                <View style={styles.timerRow}>
                  <ClockIcon size={14} color="rgba(255,255,255,0.85)" />
                  <Text variant="caption" color="onPrimary" style={styles.timerText}>
                    21 hari
                  </Text>
                </View>
              </View>

              {/* Maskot Kucing Bertoga dengan Laptop */}
              <View style={styles.headerMascot}>
                <Image
                  source={misiHeaderCatImg}
                  style={styles.headerCatImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Kartu Putih Target Poin Misi Bulanan */}
            <View style={styles.targetCard}>
              <View style={styles.targetCardTop}>
                <Text variant="bodyStrong" style={styles.targetTitle}>
                  Dapatkan 20 Poin Misi
                </Text>
                <Text variant="bodyStrong" style={styles.targetXp}>
                  + 500 XP
                </Text>
              </View>

              <View style={styles.progressRow}>
                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${(totalMissionPoints / 20) * 100}%` },
                    ]}
                  />
                </View>
                <Text variant="caption" color="inkSoft" style={styles.progressText}>
                  {totalMissionPoints}/20
                </Text>
              </View>
            </View>
          </View>

          {/* 2. Badan Konten Krem dengan Daftar Misi */}
          <View style={styles.missionsBody}>
            {/* Misi Minggu Ini */}
            <View style={styles.missionSection}>
              <View style={styles.sectionHeaderRow}>
                <Text variant="headline" style={styles.sectionTitle}>
                  Misi Minggu Ini
                </Text>
                <View style={styles.timerRowDark}>
                  <ClockIcon size={14} color={Colors.inkSoft} />
                  <Text variant="caption" color="inkSoft" style={styles.timerTextDark}>
                    1 hari
                  </Text>
                </View>
              </View>

              {/* Ilustrasi Kucing Belajar di Meja */}
              <View style={styles.studyIllustrationWrapper}>
                <Image
                  source={misiStudyImg}
                  style={styles.studyImage}
                  resizeMode="contain"
                />
              </View>

              <Text variant="bodyStrong" style={styles.missionItemTitle}>
                Belajar 2 hari berturut-turut
              </Text>

              <View style={styles.progressRow}>
                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${(streakProgress / 2) * 100}%` },
                    ]}
                  />
                </View>
                <Text variant="caption" color="inkSoft" style={styles.progressText}>
                  {streakProgress}/2
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Misi Harian 1: Mulai runtunan */}
            <View style={styles.dailyMissionRow}>
              <View style={styles.dailyMissionTextCol}>
                <Text variant="caption" color="inkSoft" style={styles.dailyLabel}>
                  Misi Harian
                </Text>
                <Text variant="headline" style={styles.dailyTitle}>
                  Mulai runtunan
                </Text>

                <View style={styles.progressRowDaily}>
                  <View style={styles.progressTrack}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: streakDays >= 1 ? '100%' : '0%' },
                      ]}
                    />
                  </View>
                  <Text variant="caption" color="inkSoft" style={styles.progressText}>
                    {streakDays >= 1 ? '1/1' : '0/1'}
                  </Text>
                </View>
              </View>

              {/* Ikon Api Runtunan */}
              <View style={styles.dailyMissionIconWrapper}>
                <Image
                  source={misiFlameImg}
                  style={styles.flameImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            <View style={styles.divider} />

            {/* Misi Harian 2: Selesaikan 2 materi */}
            <View style={styles.dailyMissionRow}>
              <View style={styles.dailyMissionTextCol}>
                <Text variant="caption" color="inkSoft" style={styles.dailyLabel}>
                  Misi Harian
                </Text>
                <Text variant="headline" style={styles.dailyTitle}>
                  Selesaikan 2 materi
                </Text>

                <View style={styles.progressRowDaily}>
                  <View style={styles.progressTrack}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: `${(dailyMaterialProgress / 2) * 100}%` },
                      ]}
                    />
                  </View>
                  <Text variant="caption" color="inkSoft" style={styles.progressText}>
                    {dailyMaterialProgress}/2
                  </Text>
                </View>
              </View>

              {/* Ikon Kucing di Atas Buku */}
              <View style={styles.dailyMissionIconWrapper}>
                <Image
                  source={misiBooksImg}
                  style={styles.booksImage}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  frame: {
    flex: 1,
    width: '100%',
    maxWidth: Sizes.frameWidth,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Spacing[8] + 20,
  },
  purpleHeader: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing[5],
    paddingBottom: Spacing[5],
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: Spacing[3],
  },
  headerTextCol: {
    flex: 1,
    paddingBottom: Spacing[2],
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: Fonts.semibold,
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  timerText: {
    opacity: 0.9,
    fontSize: 13,
  },
  headerMascot: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: -16,
  },
  headerCatImage: {
    width: 135,
    height: 108,
  },
  targetCard: {
    backgroundColor: Colors.surfaceRaised,
    borderRadius: Radius.md,
    padding: Spacing[4],
    boxShadow: Shadows.raised,
    gap: Spacing[3],
  },
  targetCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  targetTitle: {
    fontSize: 15,
  },
  targetXp: {
    fontSize: 15,
    color: '#58cc02',
    fontFamily: Fonts.semibold,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
  },
  progressTrack: {
    flex: 1,
    height: 12,
    backgroundColor: Colors.line,
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#58cc02',
    borderRadius: Radius.full,
  },
  progressText: {
    fontSize: 12,
    minWidth: 32,
    textAlign: 'right',
  },
  missionsBody: {
    paddingHorizontal: Spacing[5],
    paddingTop: Spacing[5],
    gap: Spacing[1],
  },
  missionSection: {
    gap: Spacing[2],
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 17,
  },
  timerRowDark: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timerTextDark: {
    fontSize: 13,
  },
  studyIllustrationWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Spacing[2],
  },
  studyImage: {
    width: 300,
    height: 175,
  },
  missionItemTitle: {
    fontSize: 16,
    marginTop: Spacing[1],
  },
  divider: {
    height: 1,
    backgroundColor: '#ebe7de',
    marginVertical: Spacing[4],
  },
  dailyMissionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing[4],
  },
  dailyMissionTextCol: {
    flex: 1,
    gap: 2,
  },
  dailyLabel: {
    fontSize: 13,
    color: Colors.inkSoft,
  },
  dailyTitle: {
    fontSize: 16,
    marginBottom: Spacing[1],
  },
  progressRowDaily: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
    marginTop: 4,
  },
  dailyMissionIconWrapper: {
    width: 80,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flameImage: {
    width: 68,
    height: 80,
  },
  booksImage: {
    width: 72,
    height: 85,
  },
});
