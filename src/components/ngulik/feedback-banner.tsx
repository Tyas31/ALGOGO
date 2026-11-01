import { StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { CheckIcon, CrossIcon } from '@/components/ngulik/icons';
import { Text } from '@/components/ngulik/text';
import { Mascots } from '@/constants/assets';
import { Colors, Fonts, Radius, Spacing } from '@/constants/theme';

type FeedbackBannerProps = {
  result: 'correct' | 'wrong';
  /** Satu kalimat yang menjelaskan *mengapa*. */
  explanation: string;
};

const CONTENT = {
  correct: {
    title: 'Hebat! Jawaban kamu benar!',
    mascot: Mascots.correct,
    background: Colors.success,
    color: 'ink',
  },
  wrong: {
    title: 'Belum tepat :( Yuk pahami lagi!',
    mascot: Mascots.wrong,
    background: Colors.danger,
    color: 'onPrimary',
  },
} as const;

/** Kartu umpan balik setelah *Cek Jawaban*, dengan maskot mengintip dari atas. */
export function FeedbackBanner({ result, explanation }: FeedbackBannerProps) {
  const content = CONTENT[result];
  const Icon = result === 'correct' ? CheckIcon : CrossIcon;

  return (
    <View style={styles.root} accessibilityLiveRegion="polite">
      <View style={styles.mascot}>
        <ArtImage art={content.mascot} height={60} />
      </View>
      <View style={[styles.card, { backgroundColor: content.background }]}>
        <View style={styles.title}>
          <Icon color={Colors[content.color]} />
          <Text variant="label" color={content.color} style={styles.titleText}>
            {content.title}
          </Text>
        </View>
        <Text variant="caption" color={content.color} style={styles.text}>
          {explanation}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 52,
  },
  mascot: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  card: {
    borderRadius: Radius.md,
    paddingVertical: Spacing[2],
    paddingHorizontal: Spacing[4],
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[2],
  },
  titleText: {
    fontFamily: Fonts.semibold,
  },
  text: {
    marginTop: 2,
  },
});
