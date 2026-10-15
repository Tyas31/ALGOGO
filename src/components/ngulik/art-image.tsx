import { Image, type ImageStyle } from 'expo-image';
import type { StyleProp } from 'react-native';

import type { Art } from '@/constants/assets';

type ArtImageProps = {
  art: Art;
  /** Give either a width or a height; the other follows the asset's ratio. */
  width?: number;
  height?: number;
  label?: string;
  style?: StyleProp<ImageStyle>;
};

export function ArtImage({ art, width, height, label, style }: ArtImageProps) {
  const size =
    width !== undefined
      ? { width, height: height ?? width / art.ratio }
      : { height: height ?? 0, width: (height ?? 0) * art.ratio };

  return (
    <Image
      source={art.source}
      style={[size, style]}
      contentFit="contain"
      accessible={label !== undefined}
      accessibilityLabel={label}
    />
  );
}
