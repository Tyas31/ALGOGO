import { Pressable, StyleSheet, View } from 'react-native';

import { Text } from '@/components/ngulik/text';
import { Colors, Radius, Spacing } from '@/constants/theme';

type LessonPopoverProps = {
  title: string;
  xp: number;
  description: string;
  /** *MULAI* untuk pelajaran baru, *ULAS* untuk yang sudah selesai. */
  actionLabel: string;
  onAction: () => void;
  /** Posisi horizontal ujung panah dari kiri popover; default di tengah. */
  arrowLeft?: number;
};

const ARROW = 8;

/** Gelembung info di bawah LevelNode. */
export function LessonPopover({
  title,
  xp,
  description,
  actionLabel,
  onAction,
  arrowLeft,
}: LessonPopoverProps) {
  return (
    <View style={styles.root}>
      <View
        style={[
          styles.arrow,
          arrowLeft === undefined
            ? { left: '50%', marginLeft: -ARROW }
            : { left: arrowLeft - ARROW },
        ]}
      />
      <View style={styles.head}>
        <Text variant="bodyStrong" color="onPrimary" style={styles.title}>
          {title}
        </Text>
        <Text variant="bodyStrong" color="onPrimary">
          + {xp} XP
        </Text>
      </View>
      <Text variant="caption" color="onPrimary" style={styles.desc}>
        {description}
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={onAction}
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}>
        <Text variant="buttonSm" color="primaryDepth">
          {actionLabel.toUpperCase()}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
<<<<<<< HEAD
    width: 300,
    maxWidth: '100%',
    paddingVertical: Spacing[3],
    paddingHorizontal: Spacing[4],
    borderRadius: Radius.sm,
    backgroundColor: Colors.primary,
=======
    width: 290,
    maxWidth: '92%',
    paddingVertical: Spacing[3] + 2,
    paddingHorizontal: Spacing[4],
    borderRadius: Radius.md,
    backgroundColor: Colors.primary,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
    zIndex: 10000,
>>>>>>> backup-algogo
  },
  arrow: {
    position: 'absolute',
    top: -ARROW,
    width: 0,
    height: 0,
    borderLeftWidth: ARROW,
    borderRightWidth: ARROW,
    borderBottomWidth: ARROW,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.primary,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
<<<<<<< HEAD
=======
    alignItems: 'center',
>>>>>>> backup-algogo
    gap: Spacing[2],
  },
  title: {
    flex: 1,
<<<<<<< HEAD
  },
  desc: {
    marginTop: 2,
  },
  btn: {
    height: 24,
    marginTop: Spacing[2],
=======
    fontSize: 14,
  },
  desc: {
    marginTop: 4,
    opacity: 0.92,
    lineHeight: 16,
  },
  btn: {
    height: 34,
    marginTop: Spacing[3],
>>>>>>> backup-algogo
    borderRadius: Radius.full,
    backgroundColor: Colors.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
<<<<<<< HEAD
  },
  pressed: {
    opacity: 0.85,
=======
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.18)',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
>>>>>>> backup-algogo
  },
});
