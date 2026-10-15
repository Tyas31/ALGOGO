import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { Colors, Typography, type ColorName, type TypographyVariant } from '@/constants/theme';

export type TextProps = RNTextProps & {
  variant?: TypographyVariant;
  color?: ColorName;
};

export function Text({ variant = 'body', color = 'ink', style, ...rest }: TextProps) {
  return <RNText style={[Typography[variant], { color: Colors[color] }, style]} {...rest} />;
}
