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
  const locked = status === 'locked';

  return (
    <Pressable
      accessibilityRole="button"
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  },
});
