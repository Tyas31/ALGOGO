import type { ReactNode } from 'react';
import { Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

import { Text } from '@/components/ngulik/text';
import { Colors, Radius, Shadows, Sizes, Spacing } from '@/constants/theme';

type ButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  /** Optional icon shown left of the label. */
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

/** Tombol utama: satu per layar, di tengah, untuk satu aksi berikutnya. */
export function Button({ label, onPress, disabled = false, icon, style }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        disabled ? styles.disabled : pressed ? styles.pressed : styles.raised,
        style,
      ]}>
      {icon}
      <Text variant="button" color="onPrimary">
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing[2],
    width: Sizes.buttonWidth,
    maxWidth: '100%',
    height: Sizes.buttonHeight,
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
  disabled: {
    backgroundColor: Colors.disabled,
  },
});
