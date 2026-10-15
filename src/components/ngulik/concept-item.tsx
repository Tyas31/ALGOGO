import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Text } from '@/components/ngulik/text';
import type { Art } from '@/constants/assets';
import { Spacing } from '@/constants/theme';

type ConceptItemProps = {
  art: Art;
  title: string;
  description: string;
  /** `lg` (64px) untuk ciri-ciri algoritma, `sm` (32px) untuk Tujuan/Langkah/Hasil. */
  size?: 'lg' | 'sm';
};

export function ConceptItem({ art, title, description, size = 'lg' }: ConceptItemProps) {
  return (
    <View style={styles.root}>
      <ArtImage art={art} width={size === 'lg' ? 64 : 32} />
      <View style={styles.text}>
        <Text variant="bodyStrong">{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing[4],
  },
  text: {
    flex: 1,
  },
});
