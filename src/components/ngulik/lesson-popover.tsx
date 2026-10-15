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
    width: 300,
    maxWidth: '100%',
    paddingVertical: Spacing[3],
    paddingHorizontal: Spacing[4],
    borderRadius: Radius.sm,
    backgroundColor: Colors.primary,
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
    gap: Spacing[2],
  },
  title: {
    flex: 1,
  },
  desc: {
    marginTop: 2,
  },
  btn: {
    height: 24,
    marginTop: Spacing[2],
    borderRadius: Radius.full,
    backgroundColor: Colors.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
});
