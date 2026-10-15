import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

import { Colors, Sizes, Spacing } from '@/constants/theme';

type ScreenProps = {
  children: ReactNode;
  /** Pinned above the scrolling content, e.g. ProgressHeader. */
  header?: ReactNode;
  /** Pinned below the content, e.g. the primary Button. */
  footer?: ReactNode;
  edges?: Edge[];
};

/**
 * Layar standar: latar `surface`, frame maksimal 360px, gutter `space-5`,
 * tombol utama `space-8` dari bawah.
 */
export function Screen({ children, header, footer, edges = ['top', 'bottom'] }: ScreenProps) {
  return (
    <SafeAreaView style={styles.root} edges={edges}>
      <View style={styles.frame}>
        {header ? <View style={styles.header}>{header}</View> : null}
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
        {footer ? <View style={styles.footer}>{footer}</View> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  frame: {
    flex: 1,
    width: '100%',
    maxWidth: Sizes.frameWidth,
    alignSelf: 'center',
  },
  header: {
    paddingHorizontal: Spacing[5],
    paddingTop: Spacing[4],
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: Spacing[5],
    paddingVertical: Spacing[6],
    gap: Spacing[4],
  },
  footer: {
    paddingHorizontal: Spacing[5],
    paddingTop: Spacing[4],
    paddingBottom: Spacing[8],
    gap: Spacing[4],
  },
});
