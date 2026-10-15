import { Pressable, StyleSheet, View } from 'react-native';

import { CloseIcon } from '@/components/ngulik/icons';
import { Text } from '@/components/ngulik/text';
import { Colors, Radius, Sizes, Spacing } from '@/constants/theme';

type ProgressHeaderProps = {
  current: number;
  total: number;
  /** Label konteks, mis. *Materi : Apa itu Algoritma?* */
  label: string;
  onClose: () => void;
  /** Disembunyikan di layar penutup materi; label konteks tetap. */
  showProgress?: boolean;
};

export function ProgressHeader({
  current,
  total,
  label,
  onClose,
  showProgress = true,
}: ProgressHeaderProps) {
  const percent = total > 0 ? Math.min(100, (current / total) * 100) : 0;

  return (
    <View style={styles.root}>
      <View style={styles.top}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Tutup"
          hitSlop={12}
          onPress={onClose}>
          <CloseIcon />
        </Pressable>
        {showProgress ? (
          <>
            <View
              style={styles.track}
              accessibilityRole="progressbar"
              accessibilityValue={{ min: 0, max: total, now: current }}>
              <View style={[styles.fill, { width: `${percent}%` }]} />
            </View>
            {/* Wajib tampil: hijau dan abu track hanya beda warna. */}
            <Text variant="labelRegular" color="inkSoft">
              {current}/{total}
            </Text>
          </>
        ) : null}
      </View>
      <Text variant="labelRegular" style={styles.label}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingBottom: Spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: Colors.line,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[4],
  },
  track: {
    flex: 1,
    height: Sizes.progressHeight,
    borderRadius: Radius.full,
    backgroundColor: Colors.line,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: Radius.full,
    backgroundColor: Colors.success,
  },
  label: {
    marginTop: Spacing[2],
    textAlign: 'center',
  },
});
