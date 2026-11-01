import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View, type AccessibilityRole } from 'react-native';

import { Text } from '@/components/ngulik/text';
import { Colors, Radius, Shadows, Sizes, Spacing } from '@/constants/theme';

type OptionShellProps = {
  label: string;
  leading: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  accessibilityRole: AccessibilityRole;
  checked?: boolean;
};

/** Blok ungu bersama untuk AnswerOption dan StepOption. */
export function OptionShell({
  label,
  leading,
  onPress,
  disabled = false,
  accessibilityRole,
  checked,
}: OptionShellProps) {
  return (
    <Pressable
      accessibilityRole={accessibilityRole}
      accessibilityState={{ checked, disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [styles.option, pressed ? styles.pressed : styles.raised]}>
      {leading}
      <Text variant="label" color="onPrimary" style={styles.label}>
        {label}
      </Text>
    </Pressable>
  );
}

type AnswerOptionProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
};

/**
 * Pilihan jawaban pilihan ganda. Warna opsi tidak berubah saat terpilih — hanya radio.
 * Bungkus grup dengan `AnswerOptionGroup`.
 */
export function AnswerOption({ label, selected, onSelect, disabled }: AnswerOptionProps) {
  return (
    <OptionShell
      label={label}
      onPress={onSelect}
      disabled={disabled}
      accessibilityRole="radio"
      checked={selected}
      leading={<View style={styles.radio}>{selected ? <View style={styles.dot} /> : null}</View>}
    />
  );
}

export function AnswerOptionGroup({ children }: { children: ReactNode }) {
  return (
    <View accessibilityRole="radiogroup" style={styles.group}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    gap: Spacing[3],
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
    width: '100%',
    minHeight: Sizes.optionHeight,
    paddingVertical: Spacing[3],
    paddingHorizontal: Spacing[4],
    borderRadius: Radius.md,
    backgroundColor: Colors.primary,
  },
  raised: {
    boxShadow: Shadows.raised,
  },
  pressed: {
    transform: [{ translateY: 2 }],
  },
  label: {
    flex: 1,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: Radius.full,
    backgroundColor: Colors.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: Radius.full,
    backgroundColor: Colors.inkSoft,
  },
});
