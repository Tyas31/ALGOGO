import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AnswerOption, AnswerOptionGroup } from '@/components/ngulik/answer-option';
import { ArtImage } from '@/components/ngulik/art-image';
import { Button } from '@/components/ngulik/button';
import { FeedbackBanner } from '@/components/ngulik/feedback-banner';
import { ProgressHeader } from '@/components/ngulik/progress-header';
import { Screen } from '@/components/ngulik/screen';
import { StepOption } from '@/components/ngulik/step-option';
import { Text } from '@/components/ngulik/text';
import { TextField } from '@/components/ngulik/text-field';
import { Icons, Mascots } from '@/constants/assets';
import { Colors, Fonts, Radius, Shadows, Spacing } from '@/constants/theme';
import { CURRICULUM, type QuestionData } from '@/data/curriculum';
import { useProgress } from '@/hooks/use-progress';

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const levelId = parseInt(id ?? '1', 10);
  const level = CURRICULUM.find((lvl) => lvl.id === levelId) ?? CURRICULUM[0];
  const { completeLevel } = useProgress();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [selectedChips, setSelectedChips] = useState<string>('');
  const [orderedSteps, setOrderedSteps] = useState<string[]>([]);
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
          orderedSteps.length === (currentQuestion.correctOrder?.length ?? currentQuestion.stepItems?.length ?? 0)
        );
      case 'write':
        return typedCode.trim().length > 0;
      default:
        return false;
    }
  };

  const handleCheckAnswer = () => {
    if (!currentQuestion) return;
    let correct = false;

    switch (currentQuestion.type) {
      case 'choice':
      case 'output':
        correct = selectedAnswer === currentQuestion.correctAnswer;
        break;
      case 'blank':
        correct = selectedChips === currentQuestion.correctAnswer;
        break;
      case 'order':
        correct =
          JSON.stringify(orderedSteps) === JSON.stringify(currentQuestion.correctOrder);
        break;
      case 'write': {
        const clean = typedCode.trim();
        const accepted = currentQuestion.acceptedAnswers ?? [currentQuestion.correctAnswer];
        correct = accepted.some(
          (ans) => ans.replace(/\s+/g, '') === clean.replace(/\s+/g, '')
        );
        break;
      }
    }

    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 1);
    }
    setChecked(true);
  };

  const handleNextQuestion = () => {
    setChecked(false);
    setSelectedAnswer('');
    setSelectedChips('');
    setOrderedSteps([]);
    setTypedCode('');

    if (questionIndex + 1 < totalQuestions) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      // Selesaikan kuis dan tambahkan XP
      completeLevel(level.id, level.xp);
      setIsQuizCompleted(true);
    }
  };

  const handleStepTap = (stepText: string) => {
    if (checked) return;
    if (orderedSteps.includes(stepText)) {
      setOrderedSteps((prev) => prev.filter((s) => s !== stepText));
    } else {
      setOrderedSteps((prev) => [...prev, stepText]);
    }
  };

  const handleFinish = () => {
    router.replace('/(tabs)' as any);
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <Screen
      header={
        !isQuizCompleted ? (
          <ProgressHeader
            current={questionIndex + 1}
            total={totalQuestions}
            label={`Latihan: ${level.title}`}
            onClose={handleClose}
          />
        ) : undefined
      }
      footer={
        !isQuizCompleted ? (
          <View style={styles.footerContainer}>
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
              label={!checked ? 'Cek Jawaban' : 'Lanjut'}
              disabled={!checked && !hasInput()}
              onPress={!checked ? handleCheckAnswer : handleNextQuestion}
            />
          </View>
        ) : (
          <Button label="Kembali ke Beranda" onPress={handleFinish} />
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
                    '_____',
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
                {currentQuestion.stepItems.map((step) => {
                  const orderIndex = orderedSteps.indexOf(step);
                  const orderNum = orderIndex !== -1 ? orderIndex + 1 : undefined;

                  return (
                    <StepOption
                      key={step}
                      label={step}
                      order={orderNum}
                      disabled={checked}
                      onPress={() => handleStepTap(step)}
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
                editable={!checked}
              />
              <Text variant="caption" color="inkSoft">
                Tips: Perhatikan tanda kurung dan kutip (&quot; &quot;).
              </Text>
            </View>
          )}
        </View>
      ) : (
        /* Halaman Hasil Kuis Selesai */
        <View style={styles.resultBody}>
          <ArtImage art={Mascots.celebrate} height={170} />

          <View style={styles.resultHeading}>
            <Text variant="display" style={styles.centerText}>
              Latihan Selesai! 🎉
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
                +{level.xp} XP
              </Text>
              <Text variant="caption" color="inkSoft">
                XP Bertambah
              </Text>
            </View>

            <View style={styles.rewardDivider} />

            <View style={styles.rewardItem}>
              <ArtImage art={Icons.streak} height={32} />
              <Text variant="headline" color="ink">
                +1 Hari
              </Text>
              <Text variant="caption" color="inkSoft">
                Streak Bertambah
              </Text>
            </View>
          </View>

          <Text variant="body" style={styles.centerText}>
            Kemampuan logikamu semakin terasah. Level berikutnya telah terbuka di Peta
            Belajar!
          </Text>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
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
