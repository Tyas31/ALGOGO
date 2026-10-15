import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/ngulik/text';
import { Colors, Fonts, Radius, Shadows, Spacing } from '@/constants/theme';

/** Chip pil pembuka daftar poin (maks. 4 kata). */
export function CalloutChip({ label }: { label: string }) {
  return (
    <View style={styles.chip}>
      <Text color="onPrimary" style={styles.text}>
        {label}
      </Text>
    </View>
  );
}

/** Gelembung pertanyaan refleksi di akhir materi; tidak dijawab. */
export function CalloutQuestion({ question }: { question: string }) {
  return (
    <View style={styles.ask}>
      <Text color="onPrimary" style={[styles.text, styles.center]}>
        {question}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
    paddingVertical: Spacing[2],
    paddingHorizontal: Spacing[6],
    borderRadius: Radius.full,
    backgroundColor: Colors.primary,
  },
  ask: {
    paddingVertical: Spacing[2],
    paddingHorizontal: Spacing[4],
    borderRadius: Radius.md,
    backgroundColor: Colors.primary,
    boxShadow: Shadows.raised,
  },
  text: {
    fontFamily: Fonts.medium,
  },
  center: {
    textAlign: 'center',
  },
});
