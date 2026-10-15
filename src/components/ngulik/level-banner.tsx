import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Text } from '@/components/ngulik/text';
import { Mascots, type Art } from '@/constants/assets';
import { Colors, Radius, Spacing } from '@/constants/theme';

type LevelBannerProps = {
  level: number;
  title: string;
  art?: Art;
};

/** Kartu judul level di atas peta belajar. */
export function LevelBanner({ level, title, art = Mascots.wave }: LevelBannerProps) {
  return (
    <View style={styles.root}>
      <View style={styles.text}>
        <Text variant="caption" color="onPrimary" style={styles.eyebrow}>
          Level {level}
        </Text>
        <Text variant="headline" color="onPrimary">
          {title}
        </Text>
      </View>
      <View style={styles.art}>
        <ArtImage art={art} height={48} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: Radius.md,
    backgroundColor: Colors.primary,
    overflow: 'hidden',
  },
  text: {
    flex: 1,
    paddingVertical: Spacing[3],
    paddingHorizontal: Spacing[4],
  },
  eyebrow: {
    opacity: 0.9,
  },
  art: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: Colors.primaryFace,
  },
});
