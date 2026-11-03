
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/components/ngulik/text';
import { Colors, Fonts, Radius, Shadows, Sizes, Spacing } from '@/constants/theme';
import { useProgress } from '@/hooks/use-progress';

const medalGoldImg = require('@/assets/ngulik/peringkat/medal-gold.png');
const medalSilverImg = require('@/assets/ngulik/peringkat/medal-silver.png');
const medalBronzeImg = require('@/assets/ngulik/peringkat/medal-bronze.png');

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

  // Data medali podium
  const podiumMedals = [
    {
      rank: 2,
      image: medalSilverImg,
      glow: '#C7C7D1',
      textColor: '#666666',
    },
    {
      rank: 1,
      image: medalGoldImg,
      glow: '#FFD700',
      textColor: '#986B00',
    },
    {
      rank: 3,
      image: medalBronzeImg,
      glow: '#CD7F32',
      textColor: '#713B18',
    },
  ];

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

          {/* 1. Tiga Medali Podium */}
          <View style={styles.podiumWrapper}>
            {podiumMedals.map((medal) => {
              const isActive = rank === medal.rank;

              return (
                <View
                  key={medal.rank}
                  style={[
                    styles.podiumMedalSlot,
                    medal.rank === 1 && styles.firstMedalSlot,
                  ]}>

                  {/* Efek cahaya di belakang medali */}
                  {isActive && (
                    <View
                      style={[
                        styles.medalGlow,
                        {
                          backgroundColor: medal.glow,
                          boxShadow: `0 0 22px 8px ${medal.glow}`,
                          shadowColor: medal.glow,
                        },
                        medal.rank === 1 && styles.firstMedalGlow,
                      ]}
                    />
                  )}

                  {/* Gambar medali */}
                  <Image
                    source={medal.image}
                    style={[
                      styles.podiumMedalImage,
                      medal.rank === 1
                        ? styles.firstMedalImage
                        : styles.otherMedalImage,
                    ]}
                    resizeMode="contain"
                  />

                  {/* Angka medali */}
                  <Text
                    style={[
                      styles.podiumMedalNumber,
                      {
                        color: medal.textColor,
                      },
                      medal.rank === 1
                        ? styles.firstMedalNumber
                        : styles.otherMedalNumber,
                    ]}>
                    {medal.rank}
                  </Text>
                </View>
              );
            })}
          </View>

          {/* 2. Informasi Peringkat */}
          <View style={styles.summaryTextWrapper}>
            <Text
              variant="headline"
              color="onPrimary"
              style={styles.summaryText}>
              {rank
                ? `Peringkat kamu saat ini #${rank}`
                : 'Peringkat Belajar'}
            </Text>
          </View>

          {/* 3. Kartu Leaderboard */}
          <View style={styles.cardContainer}>
            <View style={styles.leaderboardCard}>

              {leaderboardError && (
                <Text
                  accessibilityRole="alert"
                  color="danger"
                  onPress={retry}>
                  {leaderboardError} Ketuk untuk mencoba lagi.
                </Text>
              )}

              {!leaderboardError && leaderboard.length === 0 && (
                <Text>
                  Belum ada peringkat. Ayo mulai belajar!
                </Text>
              )}

              {leaderboard.map((user, index) => {
                const avatarSource = catAvatars[index] ?? catAvatars[0];

                return (
                  <View
                    key={user.uid}
                    style={[
                      styles.userRow,
                      user.isCurrentUser && styles.userRowHighlight,
                    ]}>

                    {/* Badge Peringkat */}
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
                        <Text
                          variant="bodyStrong"
                          style={styles.rankNumberText}>
                          {user.rank}
                        </Text>
                      )}
                    </View>

                    {/* Avatar Kucing */}
                    <View style={styles.avatarCol}>
                      <Image
                        source={avatarSource}
                        style={styles.avatarImage}
                        resizeMode="contain"
                      />
                    </View>

                    {/* Nama Pengguna */}
                    <Text
                      variant="bodyStrong"
                      style={styles.userNameText}>
                      {user.name}
                    </Text>

                    {/* Total XP */}
                    <Text
                      variant="body"
                      color="ink"
                      style={styles.xpText}>
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

  // Podium Medali
  podiumWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 12,
    height: 180,
    marginTop: Spacing[2],
    marginBottom: Spacing[3],
    overflow: 'visible',
  },

  podiumMedalSlot: {
    width: 105,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'visible',
  },

  firstMedalSlot: {
    width: 130,
    height: 150,
  },

  // Glow berbentuk lingkaran, bukan kotak
  medalGlow: {
    width: 120,
    height: 120,
    borderRadius: 80,
    opacity: 0.4,
    shadowOpacity: 0.9,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 18,
  },

  firstMedalGlow: {
    width: 155,
    height: 155,
    borderRadius: 70,
  },

  // Gambar Medali
  podiumMedalImage: {
    position: 'absolute',
    width: 100,
    height: 100,
  },

  firstMedalImage: {
    width: 125,
    height: 125,
  },

  otherMedalImage: {
    width: 100,
    height: 100,
  },

  // Angka di Tengah Medali
  podiumMedalNumber: {
    position: 'absolute',
    top: '27%',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: Fonts.semibold,
    includeFontPadding: false,
  },

  firstMedalNumber: {
    fontSize: 40,
    lineHeight: 48,
  },

  otherMedalNumber: {
    fontSize: 32,
    lineHeight: 38,
  },

  // Informasi Peringkat
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

  // Kartu Leaderboard
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

  // Badge Peringkat pada Daftar
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

  // Avatar
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

  // Nama Pengguna
  userNameText: {
    flex: 1,
    fontSize: 15,
    fontFamily: Fonts.semibold,
    color: Colors.ink,
  },

  // XP
  xpText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.ink,
  },
});
