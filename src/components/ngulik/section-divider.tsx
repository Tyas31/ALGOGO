import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/ngulik/text';
import { Colors, Spacing } from '@/constants/theme';

/** Garis pembatas berlabel yang menandai unit materi baru di peta belajar. */
export function SectionDivider({ label }: { label: string }) {
  return (
    <View style={styles.root}>
      <View style={styles.line} />
      <Text variant="labelRegular" color="inkSoft">
        {label}
      </Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.line,
  },
});
