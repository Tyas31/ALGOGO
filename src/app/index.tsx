import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Button } from '@/components/ngulik/button';
import { LevelBanner } from '@/components/ngulik/level-banner';
import { Screen } from '@/components/ngulik/screen';
import { StreakBadge } from '@/components/ngulik/streak-badge';
import { Text } from '@/components/ngulik/text';
import { Mascots } from '@/constants/assets';
import { Spacing } from '@/constants/theme';
import { useAuth } from '@/hooks/use-auth';

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    // Tombol masih dummy: belum ada layar materi.
    <Screen footer={<Button label="Lanjut Belajar" />}>
      <StreakBadge days={2} />
      <View style={styles.greeting}>
        <Text variant="display">Halo, {user?.name ?? 'teman'}!</Text>
        <Text>Yuk lanjutkan belajarmu hari ini. Satu materi pendek saja sudah bikin streak kamu bertambah.</Text>
      </View>
      <LevelBanner level={1} title="Mengenal Algoritma" />
      <View style={styles.mascot}>
        <ArtImage art={Mascots.happy} height={160} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  greeting: {
    gap: Spacing[2],
    marginTop: Spacing[2],
  },
  mascot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
