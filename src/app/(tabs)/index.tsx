import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { LessonPopover } from '@/components/ngulik/lesson-popover';
import { LevelBanner } from '@/components/ngulik/level-banner';
import { LevelNode } from '@/components/ngulik/level-node';
import { Screen } from '@/components/ngulik/screen';
import { SectionDivider } from '@/components/ngulik/section-divider';
import { StreakBadge } from '@/components/ngulik/streak-badge';
import { Text } from '@/components/ngulik/text';
import { Mascots } from '@/constants/assets';
import { Colors, Radius, Shadows, Spacing } from '@/constants/theme';
import { LEVEL_CATALOG } from '@/data/level-catalog';
import { buildLearningPath, type TrailNode } from '@/data/learning-path';
import { useProgress } from '@/hooks/use-progress';
import { playSound } from '@/lib/sounds';

const TRAIL_SECTIONS = buildLearningPath(LEVEL_CATALOG);

export default function HomeScreen() {
  const { streakDays, currentLevelId, currentStepNodeId, completedStepNodes, completedLevels } = useProgress();
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
  const [lockedNotice, setLockedNotice] = useState<string | null>(null);

  // Ambil level pertama untuk banner header (atau level aktif pengguna)
  const currentLevel = LEVEL_CATALOG.find((level) => level.id === currentLevelId) ?? LEVEL_CATALOG[0];

  const handleStartLesson = (node: TrailNode) => {
    setSelectedNodeId(null);
    router.push({ pathname: '/lesson/[id]', params: { id: node.levelId } });
  };

  const getNodeStatus = (node: TrailNode): 'active' | 'locked' | 'completed' => {
    // 1. Jika node ini sudah diselesaikan sebelumnya -> UNGU (bisa diulas)
    if (completedStepNodes.includes(node.id)) {
      return 'completed';
    }

    // 2. Hanya node tahap yang sedang aktif yang berwarna UNGU
    if (node.id === currentStepNodeId) {
      return 'active';
    }

    // 3. Semua node yang belum sampai tahapnya adalah ABU-ABU (LOCKED)
    return 'locked';
  };

  return (
    <Screen
      frameStyle={styles.screenFrame}
      headerStyle={styles.fixedHeader}
      header={
        <>
          {/* 1. Bar Atas: Streak Badge */}
          <View style={styles.topBar}>
            <StreakBadge days={streakDays} />
          </View>

          {/* 2. Banner Level 1 di atas jalur */}
          <View>
            <LevelBanner
              level={currentLevel?.id ?? 1}
              eyebrow={`LEVEL ${currentLevel?.id ?? 1}`}
              title={currentLevel.title}
              art={Mascots.wave}
            />
          </View>
        </>
      }
      contentContainerStyle={styles.scrollContent}>
      {/* Pesan saat mengetuk node terkunci */}
      {lockedNotice ? (
        <View style={styles.noticeToast}>
          <Text variant="caption" color="onPrimary">
            {lockedNotice}
          </Text>
        </View>
      ) : null}

      {/* 3. Jalur Belajar Berkelok ala Duolingo */}
      <View style={styles.pathTrail}>
        {TRAIL_SECTIONS.map((section) => {
          const sectionHasSelected = section.nodes.some((n) => n.id === selectedNodeId);

          return (
            <View
              key={section.id}
              style={[
                styles.sectionBlock,
                sectionHasSelected && styles.sectionBlockActive,
              ]}>
              {/* Pembatas Bab (Section Divider) */}
              {section.dividerTitle ? (
                <View style={styles.dividerWrapper}>
                  <SectionDivider label={section.dividerTitle} />
                </View>
              ) : null}

              {/* Deretan Node Berkelok */}
              <View
                style={[
                  styles.nodesWrapper,
                  sectionHasSelected && styles.nodesWrapperActive,
                ]}>
                {section.nodes.map((node) => {
                  const status = getNodeStatus(node);
                  const isSelected = selectedNodeId === node.id;
                  const isFinal = node.id === LEVEL_CATALOG.length;

                  return (
                    <View
                      key={node.id}
                      style={[
                        styles.nodeRow,
                        isSelected && styles.nodeRowActive,
                      ]}>
                      {/* Maskot di sisi KIRI jika ada */}
                      {node.mascotLeftKey ? (
                        <View style={styles.mascotLeft}>
                          <ArtImage art={Mascots[node.mascotLeftKey]} height={68} />
                        </View>
                      ) : null}

                      {/* Node Lingkaran 3D dengan horizontal offset */}
                      <View
                        style={[
                          styles.nodeAnchor,
                          { transform: [{ translateX: node.offsetX }] },
                        ]}>
                        <LevelNode
                          status={status}
                          size={isFinal ? 68 : 58}
                          label={`${node.title} (${status})`}
                          onPress={() => {
                            if (status === 'locked') {
                              playSound('wrong');
                              setLockedNotice('Selesaikan level sebelumnya untuk membuka materi ini! 🔒');
                              setTimeout(() => setLockedNotice(null), 2500);
                              setSelectedNodeId(null);
                            } else {
                              setLockedNotice(null);
                              setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
                            }
                          }}
                        />
                      </View>

                      {/* Maskot di sisi KANAN jika ada */}
                      {node.mascotRightKey ? (
                        <View style={styles.mascotRight}>
                          <ArtImage art={Mascots[node.mascotRightKey]} height={68} />
                        </View>
                      ) : null}

                      {/* Popover saat Node Terpilih (selalu tampil di depan node lainnya) */}
                      {isSelected && (
                        <View
                          style={[
                            styles.popoverContainer,
                            {
                              transform: [
                                {
                                  translateX: Math.max(
                                    -60,
                                    Math.min(60, node.offsetX)
                                  ),
                                },
                              ],
                            },
                          ]}>
                          <LessonPopover
                            title={node.title}
                            xp={completedLevels.includes(node.levelId) ? 0 : LEVEL_CATALOG.find((level) => level.id === node.levelId)?.xp ?? node.xp}
                            description={node.subtitle}
                            actionLabel={status === 'completed' ? 'Ulas' : 'Mulai'}
                            onAction={() => handleStartLesson(node)}
                            onClose={() => setSelectedNodeId(null)}
                          />
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}

        {/* Maskot Akhir Jalur Belajar */}
        <View style={styles.trailEnd}>
          <ArtImage art={Mascots.celebrate} height={110} />
          <Text variant="headline" style={styles.trailEndTitle}>
            Puncak Jalur Algogo! 🎓
          </Text>
          <Text variant="caption" color="inkSoft" style={styles.trailEndDesc}>
            Kamu siap menguasai dasar algoritma & pemrograman Python secara tuntas.
          </Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenFrame: {
    paddingHorizontal: 0,
  },
  fixedHeader: {
    paddingHorizontal: Spacing[4],
    paddingTop: Spacing[2],
    paddingBottom: Spacing[4],
    gap: Spacing[4],
  },
  scrollContent: {
    paddingHorizontal: Spacing[4],
    paddingBottom: Spacing[8] + 40,
    gap: Spacing[4],
  },
  topBar: {
    paddingHorizontal: Spacing[1],
    paddingBottom: Spacing[1],
  },
  noticeToast: {
    backgroundColor: Colors.inkSoft,
    paddingVertical: Spacing[2],
    paddingHorizontal: Spacing[4],
    borderRadius: Radius.full,
    alignSelf: 'center',
    boxShadow: Shadows.raised,
  },
  pathTrail: {
    width: '100%',
    alignItems: 'center',
    gap: Spacing[5],
  },
  sectionBlock: {
    width: '100%',
    alignItems: 'center',
    gap: Spacing[4],
    zIndex: 1,
  },
  sectionBlockActive: {
    zIndex: 9999,
  },
  dividerWrapper: {
    width: '100%',
    paddingVertical: Spacing[2],
  },
  nodesWrapper: {
    width: '100%',
    alignItems: 'center',
    gap: 28,
    zIndex: 1,
  },
  nodesWrapperActive: {
    zIndex: 9999,
  },
  nodeRow: {
    width: '100%',
    minHeight: 64,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },
  nodeRowActive: {
    zIndex: 10000,
  },
  nodeAnchor: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  mascotLeft: {
    position: 'absolute',
    left: 14,
    top: -8,
    zIndex: 1,
  },
  mascotRight: {
    position: 'absolute',
    right: 14,
    top: -8,
    zIndex: 1,
  },
  popoverContainer: {
    position: 'absolute',
    top: 68,
    zIndex: 100000,
    alignItems: 'center',
  },
  trailEnd: {
    alignItems: 'center',
    paddingVertical: Spacing[6],
    gap: Spacing[2],
    marginTop: Spacing[4],
  },
  trailEndTitle: {
    marginTop: Spacing[2],
  },
  trailEndDesc: {
    textAlign: 'center',
    maxWidth: 260,
  },
});
