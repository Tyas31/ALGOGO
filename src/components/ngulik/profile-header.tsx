import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ArtImage } from '@/components/ngulik/art-image';
import { GearIcon } from '@/components/ngulik/icons';
import { Text } from '@/components/ngulik/text';
import { Mascots, type Art } from '@/constants/assets';
import { Colors, Spacing } from '@/constants/theme';

type ProfileHeaderProps = {
  name: string;
  handle: string;
  joinedYear: number;
  following: number;
  followers: number;
  avatar?: Art;
  onSettings?: () => void;
};

const HEAD_HEIGHT = 200;

/** Kepala halaman profil: blok ungu penuh dengan avatar, lalu handle dan jumlah teman. */
export function ProfileHeader({
  name,
  handle,
  joinedYear,
  following,
  followers,
  avatar = Mascots.head,
  onSettings,
}: ProfileHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View>
      <View style={[styles.head, { height: HEAD_HEIGHT + insets.top, paddingTop: insets.top + Spacing[4] }]}>
        <Text variant="headline" color="onPrimary">
          {name}
        </Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Pengaturan"
          hitSlop={12}
          onPress={onSettings}
          style={[styles.gear, { top: insets.top + Spacing[4] }]}>
          <GearIcon />
        </Pressable>
        <View style={styles.avatar}>
          <ArtImage art={avatar} width={122} label="Avatar" />
        </View>
      </View>

      <Text variant="labelRegular" color="inkSoft" style={styles.meta}>
        @{handle} | Bergabung sejak {joinedYear}
      </Text>

      <View style={styles.follow}>
        <FollowCount value={following} label="Mengikuti" />
        <FollowCount value={followers} label="Pengikut" />
      </View>
    </View>
  );
}

function FollowCount({ value, label }: { value: number; label: string }) {
  return (
    <View style={styles.count}>
      <Text variant="headline">{value}</Text>
      <Text variant="labelRegular" color="inkSoft">
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing[5],
  },
  gear: {
    position: 'absolute',
    right: Spacing[5],
  },
  avatar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  meta: {
    paddingVertical: Spacing[3],
    paddingHorizontal: Spacing[5],
  },
  follow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing[8],
    paddingHorizontal: Spacing[5],
    paddingBottom: Spacing[4],
  },
  count: {
    alignItems: 'center',
  },
});
