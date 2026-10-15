import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/ngulik/text';
import { Colors, Radius, Shadows, Spacing } from '@/constants/theme';

/** Kartu ringkasan poin yang sudah dipelajari (2–4 poin), di layar penutup materi. */
export function SummaryCard({ points }: { points: string[] }) {
  return (
    <View style={styles.root}>
      <Text color="onPrimary">Kamu sudah belajar :</Text>
      <View style={styles.list}>
        {points.map((point) => (
          <View key={point} style={styles.item}>
            <Text color="onPrimary">•</Text>
            <Text color="onPrimary" style={styles.itemText}>
              {point}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: Spacing[4],
    paddingHorizontal: Spacing[5],
    borderRadius: Radius.md,
    backgroundColor: Colors.primary,
    boxShadow: Shadows.raised,
  },
  list: {
    marginTop: Spacing[1],
    paddingLeft: Spacing[2],
  },
  item: {
    flexDirection: 'row',
    gap: Spacing[2],
  },
  itemText: {
    flex: 1,
  },
});
