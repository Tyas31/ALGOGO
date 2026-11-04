import { router } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Button } from '@/components/ngulik/button';
import { AddFriendIcon } from '@/components/ngulik/icons';
import { ProfileHeader } from '@/components/ngulik/profile-header';
import { StatSummary } from '@/components/ngulik/stat-summary';
import { Text } from '@/components/ngulik/text';
import { Icons, Mascots, type Art } from '@/constants/assets';
import { Colors, Radius, Shadows, Spacing } from '@/constants/theme';
import { LEVEL_CATALOG } from '@/data/level-catalog';
import { useAuth } from '@/hooks/use-auth';
import { useFollows } from '@/hooks/use-follows';
import { useProgress } from '@/hooks/use-progress';
import { errorMessage } from '@/lib/errors';
import { withTap } from '@/lib/sounds';

export default function ProfileScreen() {
  const { user, signOut } = useAuth();
  const { streakDays, xp, rank, completedLevelTitles, completedLevels, resetProgress } =
    useProgress();
  const { following, followers } = useFollows();
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [busy, setBusy] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const handleLogout = async () => {
    setBusy(true);
    setActionError(null);
    try { await signOut(); }
    catch (failure) { setActionError(errorMessage(failure)); }
    finally { setBusy(false); }
  };

  const handleResetData = async () => {
    if (!confirmReset) { setConfirmReset(true); return; }
    setBusy(true);
    setActionError(null);
    try {
      await resetProgress();
      setConfirmReset(false);
      setShowSettingsModal(false);
    } catch (failure) { setActionError(errorMessage(failure)); }
    finally { setBusy(false); }
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {/* Header Profil Ungu */}
      <ProfileHeader
        name={user?.name ?? 'Sobat Algo'}
        handle={(user?.name ?? 'algo_learner').toLowerCase().replace(/\s+/g, '_')}
        joinedYear={user?.joinedYear ?? new Date().getFullYear()}
        following={following.length}
        followers={followers.length}
        avatar={Mascots.head}
        onSettings={() => { setConfirmReset(false); setActionError(null); setShowSettingsModal(true); }}
      />

      {/* Konten Badan Profil */}
      <View style={styles.body}>
        <Button label="Cari Teman" icon={<AddFriendIcon />} onPress={() => router.push('/friends')} />

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
              icon={Icons.steps}
              title="Pelangkah Pertama"
              desc="Masuk ke aplikasi"
              unlocked={true}
            />
            <BadgeItem
              icon={Icons.star}
              title="Langkah Awal"
              desc="Tuntaskan Level 1"
              unlocked={completedLevels.includes(1)}
            />
            <BadgeItem
              icon={Icons.streak}
              title="Streak Terus"
              desc="Capai 2 hari streak"
              unlocked={streakDays >= 2}
            />
            <BadgeItem
              icon={Icons.rank}
              title="Master Algogo"
              desc="Tuntaskan Ujian Master"
              unlocked={completedLevels.includes(LEVEL_CATALOG.length)}
            />
          </View>
        </View>

        {/* Tombol Aksi */}
        <View style={styles.actionSection}>
          <Button
            label="Keluar dari Akun"
            onPress={handleLogout}
            disabled={busy}
            style={styles.logoutButton}
          />
          {actionError && !showSettingsModal && <Text accessibilityRole="alert" color="danger">{actionError}</Text>}
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

            {actionError && <Text accessibilityRole="alert" color="danger">{actionError}</Text>}
            {confirmReset && <Text>XP, streak, dan level selesai akan direset di akun ini. Riwayat latihan tetap tersimpan.</Text>}
            <View style={styles.modalButtons}>
              <Pressable
                onPress={withTap(handleResetData)}
                disabled={busy}
                style={({ pressed }) => [styles.resetBtn, pressed && styles.pressed]}>
                <Text variant="label" color="danger">
                  {busy ? 'Menyimpan...' : confirmReset ? 'Ya, Reset Progres' : 'Reset Kemajuan Belajar'}
                </Text>
              </Pressable>

              <Pressable
                onPress={withTap(() => setShowSettingsModal(false))}
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
  icon,
  title,
  desc,
  unlocked,
}: {
  icon: Art;
  title: string;
  desc: string;
  unlocked: boolean;
}) {
  return (
    <View style={[styles.badgeCard, !unlocked && styles.badgeLocked]}>
      <View style={[styles.badgeIcon, !unlocked && styles.badgeIconLocked]}>
        <ArtImage art={icon} width={26} />
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
