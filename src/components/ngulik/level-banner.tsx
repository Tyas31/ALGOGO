import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Text } from '@/components/ngulik/text';
import { Mascots, type Art } from '@/constants/assets';
import { Colors, Radius, Shadows, Spacing } from '@/constants/theme';

type LevelBannerProps = {
  level?: number | string;
  title: string;
  eyebrow?: string;
  art?: Art;
};

/** Kartu judul level di atas peta belajar. */
export function LevelBanner({
  level = 1,
  title,
  eyebrow,
  art = Mascots.wave,
}: LevelBannerProps) {
  return (
    <View style={styles.root}>
      <View style={styles.text}>
        <Text variant="caption" color="onPrimary" style={styles.eyebrow}>
          {eyebrow ?? `LEVEL ${level}`}
        </Text>
        <Text variant="headline" color="onPrimary" style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.art}>
        <ArtImage art={art} height={52} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.md,
    backgroundColor: Colors.primary,
    overflow: 'hidden',
    paddingVertical: Spacing[2],
    paddingLeft: Spacing[4],
    paddingRight: Spacing[3],
    boxShadow: Shadows.raised,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    gap: 2,
  },
  eyebrow: {
    letterSpacing: 0.8,
    opacity: 0.9,
    fontSize: 11,
  },
  title: {
    fontSize: 17,
  },
  art: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

