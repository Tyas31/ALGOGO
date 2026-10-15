import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Text } from '@/components/ngulik/text';
import { Icons } from '@/constants/assets';
import { Spacing } from '@/constants/theme';

/** Penanda api + angka hari beruntun di pojok kiri atas peta belajar. */
export function StreakBadge({ days }: { days: number }) {
  return (
    <View style={styles.root} accessible accessibilityLabel={`Streak ${days} hari`}>
      <ArtImage art={Icons.streak} height={18} />
      <Text variant="bodyStrong">{days}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: Spacing[1],
  },
});
