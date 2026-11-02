import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/components/ngulik/text';
import { Colors, Fonts, Radius, Shadows, Sizes, Spacing } from '@/constants/theme';
import { useProgress } from '@/hooks/use-progress';

const podiumMedalsImg = require('@/assets/ngulik/peringkat/podium-medals.png');

const medal1Img = require('@/assets/ngulik/peringkat/medal-1.png');
const medal2Img = require('@/assets/ngulik/peringkat/medal-2.png');
const medal3Img = require('@/assets/ngulik/peringkat/medal-3.png');

const catAvatars = [
  require('@/assets/ngulik/peringkat/cat-1.png'),
  require('@/assets/ngulik/peringkat/cat-2.png'),
  require('@/assets/ngulik/peringkat/cat-3.png'),
  require('@/assets/ngulik/peringkat/cat-4.png'),
  require('@/assets/ngulik/peringkat/cat-5.png'),
  require('@/assets/ngulik/peringkat/cat-6.png'),
  require('@/assets/ngulik/peringkat/cat-7.png'),
  require('@/assets/ngulik/peringkat/cat-8.png'),
  require('@/assets/ngulik/peringkat/cat-9.png'),
  require('@/assets/ngulik/peringkat/cat-10.png'),
];

export default function RankScreen() {
  const insets = useSafeAreaInsets();
  const { rank, leaderboard, leaderboardError, retry } = useProgress();

  return (
    <View style={styles.root}>
      <View style={styles.frame}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingTop: Math.max(insets.top, 16) + 8 },
          ]}
          showsVerticalScrollIndicator={false}>
          {/* 1. Tiga Medali Podium di Bagian Atas */}
          <View style={styles.podiumWrapper}>
            <Image
              source={podiumMedalsImg}
              style={styles.podiumImage}
              resizeMode="contain"
            />
          </View>

          {/* 2. Teks Info Peringkat Minggu Lalu */}
          <View style={styles.summaryTextWrapper}>
            <Text variant="headline" color="onPrimary" style={styles.summaryText}>
              {rank ? `Peringkat kamu saat ini #${rank}` : 'Peringkat Belajar'}
            </Text>
          </View>

          {/* 3. Kartu Putih Daftar 10 Besar */}
          <View style={styles.cardContainer}>
            <View style={styles.leaderboardCard}>
              {leaderboardError && <Text accessibilityRole="alert" color="danger" onPress={retry}>{leaderboardError} Ketuk untuk mencoba lagi.</Text>}
              {!leaderboardError && leaderboard.length === 0 && <Text>Belum ada peringkat. Ayo mulai belajar!</Text>}
              {leaderboard.map((user, index) => {
                const avatarSource = catAvatars[index] ?? catAvatars[0];

                return (
                  <View
                    key={user.uid}
                    style={[
                      styles.userRow,
                      user.isCurrentUser && styles.userRowHighlight,
                    ]}>
                    {/* Badge Peringkat (Medali untuk 1-3, Nomor untuk 4-10) */}
                    <View style={styles.rankBadgeCol}>
                      {user.rank === 1 ? (
                        <Image
                          source={medal1Img}
                          style={styles.medalImage}
                          resizeMode="contain"
                        />
                      ) : user.rank === 2 ? (
                        <Image
                          source={medal2Img}
                          style={styles.medalImage}
                          resizeMode="contain"
                        />
                      ) : user.rank === 3 ? (
                        <Image
                          source={medal3Img}
                          style={styles.medalImage}
                          resizeMode="contain"
                        />
                      ) : (
                        <Text variant="bodyStrong" style={styles.rankNumberText}>
                          {user.rank}
                        </Text>
                      )}
                    </View>

                    {/* Avatar Kucing Khas */}
                    <View style={styles.avatarCol}>
                      <Image
                        source={avatarSource}
                        style={styles.avatarImage}
                        resizeMode="contain"
                      />
                    </View>

                    {/* Nama Pengguna */}
                    <Text variant="bodyStrong" style={styles.userNameText}>
                      {user.name}
                    </Text>

                    {/* Total XP */}
                    <Text variant="body" color="ink" style={styles.xpText}>
                      {user.xp} XP
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  frame: {
    flex: 1,
    width: '100%',
    maxWidth: Sizes.frameWidth,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Spacing[8] + 24,
  },
  podiumWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing[1],
    marginBottom: Spacing[2],
  },
  podiumImage: {
    width: 330,
    height: 200,
  },
  summaryTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing[4],
    marginBottom: Spacing[4],
  },
  summaryText: {
    fontSize: 17,
    fontFamily: Fonts.semibold,
    textAlign: 'center',
  },
  cardContainer: {
    paddingHorizontal: Spacing[4],
  },
  leaderboardCard: {
    backgroundColor: '#fefbf6',
    borderRadius: 24,
    paddingVertical: Spacing[3],
    paddingHorizontal: Spacing[3],
    boxShadow: Shadows.raised,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: Spacing[2],
    borderRadius: Radius.md,
  },
  userRowHighlight: {
    backgroundColor: 'rgba(154, 103, 232, 0.08)',
  },
  rankBadgeCol: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  medalImage: {
    width: 28,
    height: 33,
  },
  rankNumberText: {
    fontSize: 16,
    fontFamily: Fonts.semibold,
    color: Colors.ink,
  },
  avatarCol: {
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    marginRight: 10,
  },
  avatarImage: {
    width: 38,
    height: 38,
  },
  userNameText: {
    flex: 1,
    fontSize: 15,
    fontFamily: Fonts.semibold,
    color: Colors.ink,
  },
  xpText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.ink,
  },
});
