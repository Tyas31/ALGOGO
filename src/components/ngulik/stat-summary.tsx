import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Text } from '@/components/ngulik/text';
import { Icons, type Art } from '@/constants/assets';
import { Spacing } from '@/constants/theme';

type StatSummaryProps = {
  streakDays: number;
  xp: number;
  rank: number;
  completedLevels: string[];
};

/** Ringkasan pencapaian di profil: streak, XP, peringkat, dan level selesai. */
export function StatSummary({ streakDays, xp, rank, completedLevels }: StatSummaryProps) {
  return (
    <View>
      <Text variant="labelRegular" color="inkSoft" style={styles.sectionTitle}>
        Ringkasan
      </Text>
      <View style={styles.stats}>
        <Stat art={Icons.streak} label={`${streakDays} hari`} />
        <Stat art={Icons.xp} label={`${xp} XP`} />
        <Stat art={Icons.rank} label={`Peringkat ${rank}`} />
      </View>

      <Text variant="labelRegular" color="inkSoft" style={[styles.sectionTitle, styles.gapTop]}>
        Level terselesaikan
      </Text>
      {completedLevels.length > 0 ? (
        completedLevels.map((level) => (
          <Text key={level} variant="label">
            {level}
          </Text>
        ))
      ) : (
        <Text variant="labelRegular" color="inkFaint">
          Belum ada
        </Text>
      )}
    </View>
  );
}

function Stat({ art, label }: { art: Art; label: string }) {
  return (
    <View style={styles.stat}>
      <ArtImage art={art} height={18} />
      <Text variant="label">{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: Spacing[3],
  },
  gapTop: {
    marginTop: Spacing[6],
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing[3],
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[1],
  },
});
