import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { CloseIcon } from '@/components/ngulik/icons';
import { Screen } from '@/components/ngulik/screen';
import { Text } from '@/components/ngulik/text';
import { TextField } from '@/components/ngulik/text-field';
import { Mascots } from '@/constants/assets';
import { Colors, Radius, Shadows, Spacing } from '@/constants/theme';
import { useFollows } from '@/hooks/use-follows';
import { useProgress } from '@/hooks/use-progress';
import { withTap } from '@/lib/sounds';
import type { LeaderboardEntry } from '@/services/firestore';

const FILTERS = [
  { key: 'all', label: 'Semua' },
  { key: 'following', label: 'Diikuti' },
  { key: 'followers', label: 'Pengikut' },
] as const;

type Filter = (typeof FILTERS)[number]['key'];

export default function FriendsScreen() {
  const { leaderboard, leaderboardError, retry } = useProgress();
  const { following, followers, error, pending, toggleFollow } = useFollows();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const keyword = search.trim().toLowerCase();
  const people = leaderboard.filter((person) => {
    if (person.isCurrentUser) return false;
    if (filter === 'following' && !following.includes(person.uid)) return false;
    if (filter === 'followers' && !followers.includes(person.uid)) return false;
    return !keyword || person.name.toLowerCase().includes(keyword) || person.handle.includes(keyword);
  });

  return (
    <Screen
      header={
        <View style={styles.header}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Tutup"
            hitSlop={12}
            onPress={withTap(() => router.back())}>
            <CloseIcon />
          </Pressable>
          <Text variant="headline">Cari Teman</Text>
        </View>
      }>
      <TextField
        label="Cari nama teman"
        placeholder="mis. Rani"
        value={search}
        onChangeText={setSearch}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View style={styles.filters}>
        {FILTERS.map((item) => {
          const active = filter === item.key;
          const count = item.key === 'following' ? following.length : item.key === 'followers' ? followers.length : null;
          return (
            <Pressable
              key={item.key}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              onPress={withTap(() => setFilter(item.key))}
              style={[styles.filterChip, active && styles.filterChipActive]}>
              <Text variant="label" color={active ? 'onPrimary' : 'ink'}>
                {count === null ? item.label : `${item.label} (${count})`}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {(error || leaderboardError) && (
        <Text accessibilityRole="alert" color="danger" onPress={leaderboardError ? retry : undefined}>
          {error ?? `${leaderboardError} Ketuk untuk mencoba lagi.`}
        </Text>
      )}

      <View style={styles.list}>
        {people.map((person) => (
          <PersonRow
            key={person.uid}
            person={person}
            isFollowing={following.includes(person.uid)}
            followsYou={followers.includes(person.uid)}
            busy={pending === person.uid}
            onToggle={() => toggleFollow(person.uid)}
          />
        ))}
        {people.length === 0 && !leaderboardError && (
          <View style={styles.empty}>
            <ArtImage art={Mascots.think} height={110} />
            <Text color="inkSoft" style={styles.center}>
              {keyword
                ? `Tidak ada teman bernama "${search.trim()}".`
                : filter === 'following'
                  ? 'Kamu belum mengikuti siapa pun. Yuk cari teman di tab Semua!'
                  : filter === 'followers'
                    ? 'Belum ada yang mengikutimu. Terus belajar, ya!'
                    : 'Belum ada pelajar lain yang terdaftar.'}
            </Text>
          </View>
        )}
      </View>
    </Screen>
  );
}

function PersonRow({
  person,
  isFollowing,
  followsYou,
  busy,
  onToggle,
}: {
  person: LeaderboardEntry;
  isFollowing: boolean;
  followsYou: boolean;
  busy: boolean;
  onToggle: () => void;
}) {
  return (
    <View style={styles.row}>
      <ArtImage art={Mascots.head} width={40} />
      <View style={styles.rowText}>
        <Text variant="bodyStrong" numberOfLines={1}>{person.name}</Text>
        <Text variant="caption" color="inkSoft" numberOfLines={1}>
          @{person.handle} · {person.xp} XP{followsYou ? ' · Mengikutimu' : ''}
        </Text>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={isFollowing ? `Berhenti mengikuti ${person.name}` : `Ikuti ${person.name}`}
        disabled={busy}
        onPress={withTap(onToggle)}
        style={({ pressed }) => [
          styles.followBtn,
          isFollowing ? styles.followingBtn : styles.followBtnRaised,
          pressed && styles.pressed,
          busy && styles.busy,
        ]}>
        <Text variant="label" color={isFollowing ? 'primaryDepth' : 'onPrimary'}>
          {isFollowing ? 'Mengikuti' : 'Ikuti'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
    paddingVertical: Spacing[2],
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing[2],
  },
  filterChip: {
    paddingHorizontal: Spacing[3],
    paddingVertical: Spacing[1] + 2,
    borderRadius: Radius.full,
    borderWidth: 1,
    borderColor: Colors.line,
    backgroundColor: Colors.surfaceRaised,
  },
  filterChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primaryDepth,
  },
  list: {
    gap: Spacing[2],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
    padding: Spacing[3],
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.line,
    backgroundColor: Colors.surfaceRaised,
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  followBtn: {
    minWidth: 92,
    height: 34,
    paddingHorizontal: Spacing[3],
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followBtnRaised: {
    backgroundColor: Colors.primary,
    boxShadow: Shadows.raised,
  },
  followingBtn: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
    backgroundColor: Colors.surfaceRaised,
  },
  pressed: {
    transform: [{ translateY: 2 }],
  },
  busy: {
    opacity: 0.6,
  },
  empty: {
    alignItems: 'center',
    gap: Spacing[3],
    paddingVertical: Spacing[6],
  },
  center: {
    textAlign: 'center',
  },
});
