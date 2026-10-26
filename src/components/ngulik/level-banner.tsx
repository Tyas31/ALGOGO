import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Text } from '@/components/ngulik/text';
import { Mascots, type Art } from '@/constants/assets';
<<<<<<< HEAD
import { Colors, Radius, Spacing } from '@/constants/theme';

type LevelBannerProps = {
  level: number;
  title: string;
=======
import { Colors, Radius, Shadows, Spacing } from '@/constants/theme';

type LevelBannerProps = {
  level?: number | string;
  title: string;
  eyebrow?: string;
>>>>>>> backup-algogo
  art?: Art;
};

/** Kartu judul level di atas peta belajar. */
<<<<<<< HEAD
export function LevelBanner({ level, title, art = Mascots.wave }: LevelBannerProps) {
=======
export function LevelBanner({
  level = 1,
  title,
  eyebrow,
  art = Mascots.wave,
}: LevelBannerProps) {
>>>>>>> backup-algogo
  return (
    <View style={styles.root}>
      <View style={styles.text}>
        <Text variant="caption" color="onPrimary" style={styles.eyebrow}>
<<<<<<< HEAD
          Level {level}
        </Text>
        <Text variant="headline" color="onPrimary">
=======
          {eyebrow ?? `LEVEL ${level}`}
        </Text>
        <Text variant="headline" color="onPrimary" style={styles.title}>
>>>>>>> backup-algogo
          {title}
        </Text>
      </View>
      <View style={styles.art}>
<<<<<<< HEAD
        <ArtImage art={art} height={48} />
=======
        <ArtImage art={art} height={52} />
>>>>>>> backup-algogo
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
<<<<<<< HEAD
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
=======
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

>>>>>>> backup-algogo
