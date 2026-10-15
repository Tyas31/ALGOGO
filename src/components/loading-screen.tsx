import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { ArtImage } from '@/components/ngulik/art-image';
import { Text } from '@/components/ngulik/text';
import { Mascots } from '@/constants/assets';
import { Colors, Radius, Sizes, Spacing } from '@/constants/theme';

/** Layar pembuka saat app dibuka. Durasi diatur oleh pemanggil. */
export function LoadingScreen({ duration }: { duration: number }) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, { duration, easing: Easing.out(Easing.cubic) });
  }, [duration, progress]);

  const fillStyle = useAnimatedStyle(() => ({ width: `${progress.value * 100}%` }));

  return (
    <View style={styles.root} accessibilityLabel="Memuat Ngulik!" accessibilityRole="progressbar">
      <ArtImage art={Mascots.wave} height={180} />
      <Text variant="display" style={styles.brand}>
        Ngulik!
      </Text>
      <View style={styles.track}>
        <Animated.View style={[styles.fill, fillStyle]} />
      </View>
      <Text variant="labelRegular" color="inkSoft">
        Menyiapkan materi buat kamu...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing[4],
    paddingHorizontal: Spacing[8],
    backgroundColor: Colors.surface,
  },
  brand: {
    fontSize: 28,
    lineHeight: 34,
    color: Colors.primaryDepth,
  },
  track: {
    width: 200,
    height: Sizes.progressHeight,
    borderRadius: Radius.full,
    backgroundColor: Colors.line,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: Radius.full,
    backgroundColor: Colors.success,
  },
});
