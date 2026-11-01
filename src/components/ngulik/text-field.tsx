import { useState } from 'react';
import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';

import { Text } from '@/components/ngulik/text';
import { Colors, Fonts, Radius, Sizes, Spacing } from '@/constants/theme';

type TextFieldProps = TextInputProps & { label: string };

/** Kolom isian: label `label` di atas, kotak `surface-raised`, fokus bergaris `primary-depth`. */
export function TextField({ label, style, ...rest }: TextFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.root}>
      <Text variant="label" color="inkSoft">
        {label}
      </Text>
      <TextInput
        accessibilityLabel={label}
        placeholderTextColor={Colors.inkSoft}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[styles.input, focused && styles.focused, style]}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: Spacing[2],
  },
  input: {
    height: Sizes.buttonHeight,
    paddingHorizontal: Spacing[4],
    borderWidth: 1,
    borderColor: Colors.line,
    borderRadius: Radius.md,
    backgroundColor: Colors.surfaceRaised,
    color: Colors.ink,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  focused: {
    borderWidth: 2,
    borderColor: Colors.primaryDepth,
  },
});
