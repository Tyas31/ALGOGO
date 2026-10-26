<<<<<<< HEAD
import { Pressable, StyleSheet } from 'react-native';

import { StarIcon } from '@/components/ngulik/icons';
import { Colors, Radius, Shadows, Sizes } from '@/constants/theme';

type LevelNodeProps = {
  status: 'active' | 'locked';
  /** Membuka LessonPopover. Node terkunci tidak bisa diketuk. */
  onPress?: () => void;
  label?: string;
};

/** Tombol bulat 3D berbintang di peta belajar, satu per pelajaran. */
export function LevelNode({ status, onPress, label }: LevelNodeProps) {
=======
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
>>>>>>> backup-algogo
  const locked = status === 'locked';

  return (
    <Pressable
      accessibilityRole="button"
<<<<<<< HEAD
      accessibilityLabel={label ?? (locked ? 'Pelajaran terkunci' : 'Pelajaran terbuka')}
      accessibilityState={{ disabled: locked }}
      disabled={locked}
      onPress={onPress}
      style={({ pressed }) => [
        styles.node,
        locked ? styles.locked : styles.active,
        pressed && styles.pressed,
      ]}>
      <StarIcon />
=======
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
>>>>>>> backup-algogo
    </Pressable>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  node: {
    width: Sizes.levelNode,
    height: Sizes.levelNode,
    borderRadius: Radius.full,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryFace,
    boxShadow: Shadows.nodeActive,
  },
  locked: {
    borderColor: Colors.locked,
    backgroundColor: Colors.lockedFace,
    boxShadow: Shadows.nodeLocked,
  },
  pressed: {
    transform: [{ translateY: 4 }],
    boxShadow: 'none',
=======
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    transform: [{ translateY: 4 }],
>>>>>>> backup-algogo
  },
});
