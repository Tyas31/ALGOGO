import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { Button } from '@/components/ngulik/button';
import { ProfileHeader } from '@/components/ngulik/profile-header';
import { StatSummary } from '@/components/ngulik/stat-summary';
import { Text } from '@/components/ngulik/text';
import { Mascots } from '@/constants/assets';
import { Colors, Radius, Shadows, Spacing } from '@/constants/theme';
import { useAuth } from '@/hooks/use-auth';
import { useProgress } from '@/hooks/use-progress';

export default function ProfileScreen() {
  const { user, signOut } = useAuth();
  const { streakDays, xp, rank, completedLevelTitles, completedLevels, resetProgress } =
    useProgress();
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const handleLogout = () => {
    signOut();
  };

  const handleResetData = () => {
    resetProgress();
    setShowSettingsModal(false);
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {/* Header Profil Ungu */}
      <ProfileHeader
        name={user?.name ?? 'Sobat Algo'}
        handle={(user?.name ?? 'algo_learner').toLowerCase().replace(/\s+/g, '_')}
        joinedYear={2026}
        following={14}
        followers={28}
        avatar={Mascots.head}
        onSettings={() => setShowSettingsModal(true)}
      />

      {/* Konten Badan Profil */}
      <View style={styles.body}>
        {/* Ringkasan Statistik */}
        <View style={styles.card}>
          <StatSummary
            streakDays={streakDays}
            xp={xp}
            rank={rank}
            completedLevels={completedLevelTitles}
          />
        </View>

        {/* Lencana Pencapaian */}
        <View style={styles.card}>
          <Text variant="labelRegular" color="inkSoft" style={styles.sectionTitle}>
            Lencana Pencapaian
          </Text>

          <View style={styles.badgeGrid}>
            <BadgeItem
              emoji="🌱"
              title="Pelangkah Pertama"
              desc="Masuk ke aplikasi"
              unlocked={true}
            />
            <BadgeItem
              emoji="⭐"
              title="Langkah Awal"
              desc="Tuntaskan Level 1"
              unlocked={completedLevels.includes(1)}
            />
            <BadgeItem
              emoji="🔥"
              title="Streak Terus"
              desc="Capai 2 hari streak"
              unlocked={streakDays >= 2}
            />
            <BadgeItem
              emoji="👑"
              title="Master Algogo"
              desc="Tuntaskan Ujian Akhir"
              unlocked={completedLevels.includes(8)}
            />
          </View>
        </View>

        {/* Tombol Aksi */}
        <View style={styles.actionSection}>
          <Button
            label="Keluar dari Akun"
            onPress={handleLogout}
            style={styles.logoutButton}
          />
        </View>
      </View>

      {/* Modal Pengaturan Sederhana */}
      <Modal
        visible={showSettingsModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSettingsModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text variant="headline">Pengaturan Aplikasi</Text>
            <Text color="inkSoft">
              Kamu login sebagai <Text variant="bodyStrong">{user?.name}</Text>.
            </Text>

            <View style={styles.modalButtons}>
              <Pressable
                onPress={handleResetData}
                style={({ pressed }) => [styles.resetBtn, pressed && styles.pressed]}>
                <Text variant="label" color="danger">
                  Reset Semua Kemajuan Belajar
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setShowSettingsModal(false)}
                style={({ pressed }) => [styles.closeBtn, pressed && styles.pressed]}>
                <Text variant="buttonSm" color="ink">
                  TUTUP
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

function BadgeItem({
  emoji,
  title,
  desc,
  unlocked,
}: {
  emoji: string;
  title: string;
  desc: string;
  unlocked: boolean;
}) {
  return (
    <View style={[styles.badgeCard, !unlocked && styles.badgeLocked]}>
      <View style={[styles.badgeIcon, !unlocked && styles.badgeIconLocked]}>
        <Text style={styles.badgeEmoji}>{emoji}</Text>
      </View>
      <Text variant="label" style={styles.badgeTitle}>
        {title}
      </Text>
      <Text variant="caption" color="inkSoft" style={styles.badgeDesc}>
        {desc}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  body: {
    paddingHorizontal: Spacing[5],
    paddingBottom: Spacing[8],
    gap: Spacing[4],
  },
  card: {
    padding: Spacing[4],
    backgroundColor: Colors.surfaceRaised,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.line,
    boxShadow: Shadows.raised,
  },
  sectionTitle: {
    marginBottom: Spacing[3],
  },
  badgeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing[3],
  },
  badgeCard: {
    width: '47%',
    padding: Spacing[3],
    borderRadius: Radius.md,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.line,
    alignItems: 'center',
    gap: 4,
  },
  badgeLocked: {
    opacity: 0.45,
  },
  badgeIcon: {
    width: 44,
    height: 44,
    borderRadius: Radius.full,
    backgroundColor: 'rgba(154, 103, 232, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeIconLocked: {
    backgroundColor: Colors.line,
  },
  badgeEmoji: {
    fontSize: 22,
  },
  badgeTitle: {
    textAlign: 'center',
  },
  badgeDesc: {
    textAlign: 'center',
  },
  actionSection: {
    marginTop: Spacing[2],
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: Colors.danger,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing[5],
  },
  modalCard: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: Colors.surfaceRaised,
    borderRadius: Radius.md,
    padding: Spacing[5],
    gap: Spacing[4],
    boxShadow: Shadows.raised,
  },
  modalButtons: {
    gap: Spacing[3],
    marginTop: Spacing[2],
  },
  resetBtn: {
    paddingVertical: Spacing[2],
    alignItems: 'center',
  },
  closeBtn: {
    height: 38,
    borderRadius: Radius.full,
    backgroundColor: Colors.line,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
