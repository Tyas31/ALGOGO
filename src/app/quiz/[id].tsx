import { router, useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';

import { AnswerOption, AnswerOptionGroup } from '@/components/ngulik/answer-option';
import { ArtImage } from '@/components/ngulik/art-image';
import { DataState } from '@/components/data-state';
import { Button } from '@/components/ngulik/button';
import { FeedbackBanner } from '@/components/ngulik/feedback-banner';
import { ProgressHeader } from '@/components/ngulik/progress-header';
import { Screen } from '@/components/ngulik/screen';
import { StepOption } from '@/components/ngulik/step-option';
import { Text } from '@/components/ngulik/text';
import { TextField } from '@/components/ngulik/text-field';
import { Icons, Mascots } from '@/constants/assets';
import { Colors, Fonts, Radius, Shadows, Spacing } from '@/constants/theme';
import type { LevelData, QuestionData } from '@/data/curriculum';
import { useLevel } from '@/hooks/use-level';
import { useProgress } from '@/hooks/use-progress';
import { errorMessage } from '@/lib/errors';
import { isCorrectAnswer } from '@/lib/quiz-answers';
import { LEVEL_CATALOG } from '@/data/level-catalog';

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const levelId = Number(id);
  const { level, error, retry } = useLevel(levelId);
  const { unlockedLevels } = useProgress();
  const [attemptNumber, setAttemptNumber] = useState(0);
  if (!unlockedLevels.includes(levelId)) return <DataState error="Selesaikan level sebelumnya terlebih dahulu." onBack={() => router.back()} />;
  if (!level) return <DataState error={error} retry={retry} onBack={() => router.back()} />;
  return <QuizContent key={`${level.id}:${attemptNumber}`} level={level} onRetry={() => setAttemptNumber((value) => value + 1)} />;
}

function QuizContent({ level, onRetry }: { level: LevelData; onRetry: () => void }) {
  const { completeLevel, createAttemptId, streakDays } = useProgress();
  const [attemptId] = useState(createAttemptId);
  const [saving, setSaving] = useState(false);
  const savingRef = useRef(false);
  const checkedRef = useRef(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [xpAwarded, setXpAwarded] = useState(0);
  const [passed, setPassed] = useState(true);
  const [wrongQuestionIds, setWrongQuestionIds] = useState<number[]>([]);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [selectedChips, setSelectedChips] = useState<string>('');
  const [orderedStepIndices, setOrderedStepIndices] = useState<number[]>([]);
  const [typedCode, setTypedCode] = useState<string>('');

  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const totalQuestions = level.questions.length;
  const currentQuestion: QuestionData | undefined = level.questions[questionIndex];

  // Cek apakah user sudah memberikan input
  const hasInput = () => {
    if (!currentQuestion) return false;
    switch (currentQuestion.type) {
      case 'choice':
      case 'output':
        return selectedAnswer.length > 0;
      case 'blank':
        return selectedChips.length > 0;
      case 'order':
        return (
          orderedStepIndices.length === (currentQuestion.correctOrder?.length ?? currentQuestion.stepItems?.length ?? 0)
        );
      case 'write':
        return typedCode.trim().length > 0;
      default:
        return false;
    }
  };

  const handleCheckAnswer = () => {
    if (!currentQuestion || checkedRef.current || !hasInput()) return;
    checkedRef.current = true;
    const answer = currentQuestion.type === 'order'
      ? orderedStepIndices.map((index) => currentQuestion.stepItems![index])
      : currentQuestion.type === 'write' ? typedCode
        : currentQuestion.type === 'blank' ? selectedChips : selectedAnswer;
    const correct = isCorrectAnswer(currentQuestion, answer);

    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 1);
    } else setWrongQuestionIds((prev) => [...prev, currentQuestion.id]);
    setChecked(true);
  };

  const handleNextQuestion = async () => {
    if (savingRef.current || !checkedRef.current) return;
    if (questionIndex + 1 < totalQuestions) {
      checkedRef.current = false;
      setChecked(false);
      setSelectedAnswer('');
      setSelectedChips('');
      setOrderedStepIndices([]);
      setTypedCode('');
      setQuestionIndex((prev) => prev + 1);
    } else {
      savingRef.current = true;
      setSaving(true);
      setSaveError(null);
      try {
        const result = await completeLevel(level.id, { correctCount: score, totalQuestions, attemptId });
        setXpAwarded(result.xpAwarded);
        setPassed(result.passed);
        setIsQuizCompleted(true);
      } catch (failure) {
        setSaveError(errorMessage(failure));
      } finally {
        savingRef.current = false;
        setSaving(false);
      }
    }
  };

  const handleStepTap = (stepIndex: number) => {
    if (checked) return;
    if (orderedStepIndices.includes(stepIndex)) {
      setOrderedStepIndices((prev) => prev.filter((index) => index !== stepIndex));
    } else {
      setOrderedStepIndices((prev) => [...prev, stepIndex]);
    }
  };

  const handleFinish = () => {
    router.replace('/(tabs)');
  };

  const handleClose = () => {
    router.back();
  };
  const reviewIds = [...new Set(level.questions
    .filter((question) => wrongQuestionIds.includes(question.id))
    .flatMap((question) => question.reviewLevelIds ?? []))].sort((a, b) => a - b);

  return (
    <Screen
      header={
        !isQuizCompleted ? (
          <ProgressHeader
            current={questionIndex + 1}
            total={totalQuestions}
            label={`${level.examIntro ? 'Ujian' : 'Latihan'}: ${level.title}`}
            onClose={() => { if (!savingRef.current) handleClose(); }}
          />
        ) : undefined
      }
      footer={
        !isQuizCompleted ? (
          <View style={styles.footerContainer}>
            {saveError && <Text accessibilityRole="alert" color="danger">{saveError}</Text>}
            {checked && currentQuestion && (
              <FeedbackBanner
                result={isCorrect ? 'correct' : 'wrong'}
                explanation={
                  isCorrect
                    ? currentQuestion.explanation.correct
                    : currentQuestion.explanation.wrong
                }
              />
            )}
            <Button
              label={saving ? 'Menyimpan...' : saveError ? 'Coba Simpan Lagi' : !checked ? 'Cek Jawaban' : 'Lanjut'}
              disabled={saving || (!checked && !hasInput())}
              onPress={!checked ? handleCheckAnswer : handleNextQuestion}
            />
          </View>
        ) : (
          <Button label={passed ? 'Kembali ke Beranda' : 'Ulangi Ujian'} onPress={passed ? handleFinish : onRetry} />
        )
      }>
      {!isQuizCompleted && currentQuestion ? (
        <View style={styles.quizBody}>
          {/* Maskot Pemantik di atas soal */}
          <View style={styles.mascotTop}>
            <ArtImage art={Mascots.think} height={70} />
          </View>

          {/* Judul & Pertanyaan */}
          <Text variant="display">{currentQuestion.title}</Text>
          <Text color="inkSoft" style={styles.promptText}>
            {currentQuestion.prompt}
          </Text>

          {/* Kotak Kode jika ada */}
          {currentQuestion.codeSnippet && (
            <View style={styles.codeBox}>
              <Text color="onPrimary" style={styles.codeText}>
                {currentQuestion.codeSnippet}
              </Text>
            </View>
          )}

          {/* 1. Tipe Pilihan Ganda & Tebak Output */}
          {(currentQuestion.type === 'choice' || currentQuestion.type === 'output') &&
            currentQuestion.options && (
              <AnswerOptionGroup>
                {currentQuestion.options.map((opt) => (
                  <AnswerOption
                    key={opt}
                    label={opt}
                    selected={selectedAnswer === opt}
                    disabled={checked}
                    onSelect={() => setSelectedAnswer(opt)}
                  />
                ))}
              </AnswerOptionGroup>
            )}

          {/* 2. Tipe Isian Bagian Kosong (Blank) */}
          {currentQuestion.type === 'blank' && (
            <View style={styles.blankContainer}>
              <View style={styles.codeBox}>
                <Text color="onPrimary" style={styles.codeText}>
                  {currentQuestion.codeTemplate?.replace(
                    /_{3,}/g,
                    selectedChips ? `[ ${selectedChips} ]` : '_____'
                  )}
                </Text>
              </View>

              <Text variant="labelRegular" color="inkSoft">
                Pilih chip yang tepat:
              </Text>
              <View style={styles.chipGroup}>
                {currentQuestion.chips?.map((chip) => {
                  const isSelected = selectedChips === chip;
                  return (
                    <Pressable
                      key={chip}
                      accessibilityRole="button"
                      accessibilityLabel={chip}
                      accessibilityState={{ selected: isSelected, disabled: checked }}
                      disabled={checked}
                      onPress={() => setSelectedChips(chip)}
                      style={({ pressed }) => [
                        styles.chipBtn,
                        isSelected && styles.chipBtnSelected,
                        pressed && styles.pressed,
                      ]}>
                      <Text
                        variant="bodyStrong"
                        color={isSelected ? 'onPrimary' : 'ink'}>
                        {chip}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          )}

          {/* 3. Tipe Susun Kode (Order) */}
          {currentQuestion.type === 'order' && currentQuestion.stepItems && (
            <View style={styles.orderContainer}>
              <Text variant="caption" color="inkSoft">
                Ketuk pilihan untuk mengurutkan langkah secara berurutan:
              </Text>
              <View style={styles.stepList}>
                {currentQuestion.stepItems.map((step, index) => {
                  const orderIndex = orderedStepIndices.indexOf(index);
                  const orderNum = orderIndex !== -1 ? orderIndex + 1 : undefined;

                  return (
                    <StepOption
                      key={index}
                      label={step}
                      order={orderNum}
                      disabled={checked}
                      onPress={() => handleStepTap(index)}
                    />
                  );
                })}
              </View>
            </View>
          )}

          {/* 4. Tipe Tulis Kode (Write) */}
          {currentQuestion.type === 'write' && (
            <View style={styles.writeContainer}>
              <TextField
                label="Ketik kodemu di sini"
                placeholder="mis. print(...)"
                value={typedCode}
                onChangeText={setTypedCode}
                autoCapitalize="none"
                autoCorrect={false}
                multiline
                textAlignVertical="top"
                style={styles.codeInput}
                editable={!checked}
              />
              <Text variant="caption" color="inkSoft">
                Gunakan baris baru dan indentasi untuk blok kode. Perhatikan tanda kurung dan kutip.
              </Text>
            </View>
          )}
        </View>
      ) : (
        /* Halaman Hasil Kuis Selesai */
        <View style={styles.resultBody}>
          <ArtImage art={passed ? Mascots.celebrate : Mascots.happy} height={170} />

          <View style={styles.resultHeading}>
            <Text variant="display" style={styles.centerText}>
              {level.examIntro ? passed ? 'Selamat! Kamu Master Algogo! 🎉' : 'Hampir sampai! Yuk, ulangi sedikit lagi.' : 'Latihan Selesai! 🎉'}
            </Text>
            <Text color="inkSoft" style={styles.centerText}>
              Kamu menjawab {score} dari {totalQuestions} soal dengan tepat!
            </Text>
          </View>

          {/* Kartu Hadiah XP & Streak */}
          <View style={styles.rewardCard}>
            <View style={styles.rewardItem}>
              <ArtImage art={Icons.xp} height={32} />
              <Text variant="headline" color="primaryDepth">
                +{xpAwarded} XP
              </Text>
              <Text variant="caption" color="inkSoft">
                {xpAwarded ? 'XP Bertambah' : passed ? 'Level sudah pernah selesai' : 'Jawab benar minimal 11 dari 15 soal'}
              </Text>
            </View>

            <View style={styles.rewardDivider} />

            <View style={styles.rewardItem}>
              <ArtImage art={Icons.streak} height={32} />
              <Text variant="headline" color="ink">
                {streakDays} Hari
              </Text>
              <Text variant="caption" color="inkSoft">
                Streak Belajar
              </Text>
            </View>
          </View>

          {!passed && <View style={styles.reviewList}>
            <Text variant="headline">Coba ulas lagi:</Text>
            {reviewIds.map((id) => <Pressable key={id} accessibilityRole="button" onPress={() => router.replace({ pathname: '/lesson/[id]', params: { id } })}>
              <Text color="primaryDepth">Level {id}: {LEVEL_CATALOG.find((item) => item.id === id)?.title}</Text>
            </Pressable>)}
            <Button label="Kembali ke Beranda" onPress={handleFinish} />
          </View>}
          <Text variant="body" style={styles.centerText}>
            {passed ? level.id === 8 ? 'Lencana Master Algogo berhasil kamu raih!' : 'Latihan selesai. Kamu bisa melanjutkan ke satu level berikutnya di jalur belajar.'
              : 'XP ujian dan lencana Master Algogo diberikan setelah kamu lulus.'}
          </Text>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  codeInput: { minHeight: 160, height: 180, fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace', fontSize: 13, lineHeight: 21, paddingVertical: Spacing[3] },
  reviewList: { gap: Spacing[3] },
  quizBody: {
    gap: Spacing[3],
  },
  mascotTop: {
    alignItems: 'center',
    marginBottom: -Spacing[2],
  },
  promptText: {
    fontSize: 15,
    lineHeight: 22,
  },
  codeBox: {
    backgroundColor: '#0f172a',
    padding: Spacing[3],
    borderRadius: Radius.md,
    boxShadow: Shadows.raised,
  },
  codeText: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    lineHeight: 20,
  },
  blankContainer: {
    gap: Spacing[3],
  },
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing[2],
  },
  chipBtn: {
    paddingHorizontal: Spacing[4],
    paddingVertical: Spacing[2],
    backgroundColor: Colors.surfaceRaised,
    borderRadius: Radius.full,
    borderWidth: 1.5,
    borderColor: Colors.line,
    boxShadow: Shadows.raised,
  },
  chipBtnSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primaryDepth,
  },
  orderContainer: {
    gap: Spacing[2],
  },
  stepList: {
    gap: Spacing[3],
  },
  writeContainer: {
    gap: Spacing[2],
  },
  footerContainer: {
    gap: Spacing[3],
  },
  resultBody: {
    alignItems: 'center',
    gap: Spacing[4],
    paddingTop: Spacing[4],
  },
  resultHeading: {
    gap: Spacing[1],
  },
  centerText: {
    textAlign: 'center',
  },
  rewardCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    padding: Spacing[4],
    backgroundColor: Colors.surfaceRaised,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.line,
    boxShadow: Shadows.raised,
  },
  rewardItem: {
    alignItems: 'center',
    gap: 4,
  },
  rewardDivider: {
    width: 1,
    height: 48,
    backgroundColor: Colors.line,
  },
  pressed: {
    transform: [{ translateY: 2 }],
  },
});
