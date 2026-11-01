import { StyleSheet, View } from 'react-native';

import { OptionShell } from '@/components/ngulik/answer-option';
import { Text } from '@/components/ngulik/text';
import { Colors, Fonts, Radius } from '@/constants/theme';

type StepOptionProps = {
  label: string;
  /** Nomor urut yang sudah dipasang pengguna; kosong kalau belum. */
  order?: number;
  onPress: () => void;
  disabled?: boolean;
};

/** Kartu langkah untuk soal *Susun Langkahnya!*: radio diganti lingkaran nomor. */
export function StepOption({ label, order, onPress, disabled }: StepOptionProps) {
  return (
    <OptionShell
      label={label}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      leading={
        <View style={styles.num}>
          <Text style={styles.numText}>{order ?? ''}</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  num: {
    width: 24,
    height: 24,
    borderRadius: Radius.full,
    backgroundColor: Colors.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: {
    fontFamily: Fonts.semibold,
    fontSize: 11,
    lineHeight: 14,
  },
});
