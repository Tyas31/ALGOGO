import { Image, Pressable, StyleSheet } from 'react-native';

import { Sizes } from '@/constants/theme';

const starActiveImg = require('@/assets/ngulik/ikon/star-active.png');
const starLockedImg = require('@/assets/ngulik/ikon/star-locked.png');

type LevelNodeProps = {
  status: 'active' | 'locked' | 'completed';
  /** Membuka LessonPopover. Node terkunci bisa memicu callback atau disabled. */
  onPress?: () => void;
  label?: string;
  size?: number;
};

/** Tombol bulat 3D berbintang di peta belajar, satu per pelajaran. */
export function LevelNode({ status, onPress, label, size = Sizes.levelNode }: LevelNodeProps) {
  const locked = status === 'locked';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={
        label ?? (locked ? 'Pelajaran terkunci' : 'Pelajaran terbuka')
      }
      onPress={onPress}
      style={({ pressed }) => [
        styles.pressable,
        { width: size, height: size },
        pressed && !locked && styles.pressed,
      ]}>
      <Image
        source={locked ? starLockedImg : starActiveImg}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    transform: [{ translateY: 4 }],
  },
});

