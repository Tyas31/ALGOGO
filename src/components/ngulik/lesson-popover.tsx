
import { Pressable, StyleSheet, View } from 'react-native';

import { Text } from '@/components/ngulik/text';
import { Colors, Radius, Spacing } from '@/constants/theme';
import { withTap } from '@/lib/sounds';

type LessonPopoverProps = {
  title: string;
  xp: number;
  description: string;
  /** *MULAI* untuk pelajaran baru, *ULAS* untuk yang sudah selesai. */
  actionLabel: string;
  onAction: () => void;
  onClose?: () => void;
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
  onClose,
  arrowLeft,
}: LessonPopoverProps) {
  return (
    <View style={styles.root}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Tutup popup"
        onPress={onClose}
        style={({ pressed }) => [
          styles.closeBtn,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.closeText}>×</Text>
      </Pressable>

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
        onPress={withTap(onAction)}
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
    width: 290,
    maxWidth: '92%',
    paddingVertical: Spacing[3] + 2,
    paddingHorizontal: Spacing[4],
    borderRadius: Radius.md,
    backgroundColor: Colors.primary,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
    zIndex: 10000,
    position: 'relative',
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
    alignItems: 'center',
    gap: Spacing[2],
    paddingRight: 30,
  },
  title: {
    flex: 1,
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
    borderRadius: Radius.full,
    backgroundColor: Colors.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.18)',
  },
  closeBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#E9DDFB',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  closeText: {
    color: '#68418F',
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
