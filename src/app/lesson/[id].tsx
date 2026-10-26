import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Button } from '@/components/ngulik/button';
import { CalloutQuestion } from '@/components/ngulik/callout';
import { ConceptItem } from '@/components/ngulik/concept-item';
import { ProgressHeader } from '@/components/ngulik/progress-header';
import { Screen } from '@/components/ngulik/screen';
import { SummaryCard } from '@/components/ngulik/summary-card';
import { Text } from '@/components/ngulik/text';
import { Icons, Illustrations, Mascots } from '@/constants/assets';
import { Colors, Fonts, Radius, Shadows, Spacing } from '@/constants/theme';
import { CURRICULUM } from '@/data/curriculum';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const levelId = parseInt(id ?? '1', 10);
  const level = CURRICULUM.find((lvl) => lvl.id === levelId) ?? CURRICULUM[0];

  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = level.slides.length;
  const isConclusion = slideIndex >= totalSlides;

  const currentSlide = !isConclusion ? level.slides[slideIndex] : null;

  const handleNext = () => {
    if (slideIndex < totalSlides) {
      setSlideIndex((prev) => prev + 1);
    } else {
      // Pindah ke kuis latihan
      router.replace(`/quiz/${level.id}` as any);
    }
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <Screen
      header={
        <ProgressHeader
          current={Math.min(slideIndex + 1, totalSlides)}
          total={totalSlides}
          label={isConclusion ? 'Materi Selesai' : `Materi: ${level.title}`}
          onClose={handleClose}
          showProgress={!isConclusion}
        />
      }
      footer={
        <Button
          label={isConclusion ? 'Mulai Latihan' : 'Selanjutnya'}
          onPress={handleNext}
        />
      }>
      {!isConclusion && currentSlide ? (
        /* Halaman Slide Materi */
        <View style={styles.slideBody}>
          {/* Ilustrasi Utama jika ada */}
          {currentSlide.illustrationKey && Illustrations[currentSlide.illustrationKey] && (
            <View style={styles.illustrationWrapper}>
              <ArtImage
                art={Illustrations[currentSlide.illustrationKey]}
                height={130}
              />
            </View>
          )}

          {/* Judul Halaman */}
          <Text variant="display">{currentSlide.title}</Text>

          {/* Teks Cerita / Penjelasan */}
          {currentSlide.story && (
            <Text style={styles.storyText}>{currentSlide.story}</Text>
          )}

          {/* Concept Items (jika ada poin berikon) */}
          {currentSlide.conceptItems && currentSlide.conceptItems.length > 0 && (
            <View style={styles.conceptList}>
              {currentSlide.conceptItems.map((item, idx) => (
                <ConceptItem
                  key={idx}
                  art={Icons[item.iconKey]}
                  title={item.title}
                  description={item.description}
                  size={item.size ?? 'lg'}
                />
              ))}
            </View>
          )}

          {/* Steps List (Daftar Langkah Terurut) */}
          {currentSlide.stepsList && currentSlide.stepsList.length > 0 && (
            <View style={styles.stepsCard}>
              {currentSlide.stepsList.map((step, idx) => (
                <View key={idx} style={styles.stepRow}>
                  <View style={styles.stepNum}>
                    <Text variant="caption" color="onPrimary">
                      {idx + 1}
                    </Text>
                  </View>
                  <Text style={styles.stepText}>{step}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Kotak Kode Python & Output */}
          {currentSlide.codeSnippet && (
            <View style={styles.codeContainer}>
              <View style={styles.codeHeader}>
                <Text variant="caption" color="onPrimary">
                  🐍 Python 3
                </Text>
              </View>
              <View style={styles.codeBox}>
                <Text color="onPrimary" style={styles.codeText}>
                  {currentSlide.codeSnippet}
                </Text>
              </View>

              {currentSlide.codeOutput && (
                <View style={styles.outputBox}>
                  <Text variant="caption" color="inkSoft" style={styles.outputLabel}>
                    Hasilnya:
                  </Text>
                  <Text style={styles.outputText}>{currentSlide.codeOutput}</Text>
                </View>
              )}
            </View>
          )}

          {/* Callout Peringatan / Tips */}
          {currentSlide.warningCallout && (
            <View style={styles.warningCard}>
              <Text variant="bodyStrong" color="danger">
                ⚠️ Perhatian!
              </Text>
              <Text variant="caption" color="inkSoft">
                {currentSlide.warningCallout}
              </Text>
            </View>
          )}

          {currentSlide.tipCallout && (
            <View style={styles.tipCard}>
              <Text variant="bodyStrong" color="primaryDepth">
                💡 {currentSlide.tipCallout}
              </Text>
            </View>
          )}

          {/* Pertanyaan Pemantik / Refleksi */}
          {currentSlide.questionPrompt && (
            <CalloutQuestion question={currentSlide.questionPrompt} />
          )}

          {/* Maskot Karakter */}
          <View style={styles.mascot}>
            <ArtImage
              art={Mascots[currentSlide.mascotKey] ?? Mascots.laptop}
              height={140}
            />
          </View>
        </View>
      ) : (
        /* Halaman Penutup Materi */
        <View style={styles.conclusionBody}>
          <View style={styles.conclusionMascot}>
            <ArtImage art={Mascots.celebrate} height={180} />
          </View>

          <View style={styles.conclusionHeading}>
            <Text variant="display" style={styles.centerText}>
              Yeay! Materi Selesai! 🎉
            </Text>
            <Text color="inkSoft" style={styles.centerText}>
              Kamu telah menyelesaikan bacaan materi untuk level ini.
            </Text>
          </View>

          <SummaryCard points={level.summaryPoints} />

          <Text variant="bodyStrong" style={[styles.centerText, styles.quizPrompt]}>
            Saatnya Uji Kemampuanmu! ^_^
          </Text>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  slideBody: {
    gap: Spacing[4],
  },
  illustrationWrapper: {
    alignItems: 'center',
    marginVertical: Spacing[1],
  },
  storyText: {
    lineHeight: 22,
  },
  conceptList: {
    gap: Spacing[3],
    marginVertical: Spacing[2],
  },
  stepsCard: {
    padding: Spacing[3],
    backgroundColor: Colors.surfaceRaised,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.line,
    gap: Spacing[3],
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[3],
  },
  stepNum: {
    width: 22,
    height: 22,
    borderRadius: Radius.full,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepText: {
    flex: 1,
  },
  codeContainer: {
    borderRadius: Radius.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#334155',
    boxShadow: Shadows.raised,
  },
  codeHeader: {
    backgroundColor: '#1e293b',
    paddingHorizontal: Spacing[3],
    paddingVertical: 6,
  },
  codeBox: {
    backgroundColor: '#0f172a',
    padding: Spacing[4],
  },
  codeText: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  outputBox: {
    backgroundColor: Colors.surfaceRaised,
    padding: Spacing[3],
    borderTopWidth: 1,
    borderTopColor: Colors.line,
    gap: 2,
  },
  outputLabel: {
    fontFamily: Fonts.semibold,
  },
  outputText: {
    fontFamily: Fonts.medium,
    color: Colors.ink,
  },
  warningCard: {
    padding: Spacing[3],
    borderRadius: Radius.md,
    backgroundColor: '#fff1f2',
    borderLeftWidth: 4,
    borderLeftColor: Colors.danger,
    gap: 4,
  },
  tipCard: {
    padding: Spacing[3],
    borderRadius: Radius.md,
    backgroundColor: 'rgba(154, 103, 232, 0.1)',
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  mascot: {
    alignItems: 'center',
    marginTop: Spacing[2],
  },
  conclusionBody: {
    gap: Spacing[4],
    alignItems: 'center',
  },
  conclusionMascot: {
    alignItems: 'center',
    marginTop: Spacing[2],
  },
  conclusionHeading: {
    gap: Spacing[1],
  },
  centerText: {
    textAlign: 'center',
  },
  quizPrompt: {
    marginTop: Spacing[2],
    color: Colors.primaryDepth,
  },
});
