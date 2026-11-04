import { Platform, StyleSheet, View } from 'react-native';

import { CalloutQuestion } from '@/components/ngulik/callout';
import { Text } from '@/components/ngulik/text';
import { Colors, Radius, Spacing } from '@/constants/theme';
import type { LessonBlock } from '@/data/curriculum';

export function LessonContentBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return <View style={styles.blocks}>{blocks.map((block, index) => {
    if (block.kind === 'callout') return <CalloutQuestion key={index} question={block.text} />;
    if (block.kind === 'code' || block.kind === 'pseudocode' || block.kind === 'output') {
      const dark = block.kind !== 'output';
      return (
        <View key={index} style={[styles.code, block.kind === 'pseudocode' && styles.pseudocode, !dark && styles.output]}>
          <Text variant="caption" color={dark ? 'onPrimary' : 'inkSoft'}>
            {block.kind === 'code' ? '🐍 Python 3' : block.kind === 'pseudocode' ? 'Pseudocode' : 'Hasilnya:'}
          </Text>
          <Text selectable color={dark ? 'onPrimary' : 'ink'} style={styles.codeText}>{block.text}</Text>
        </View>
      );
    }
    return <View key={index} style={block.kind === 'warning' ? styles.warning : block.kind === 'tip' ? styles.tip : undefined}>
      <Text style={styles.paragraph}>{block.text}</Text>
    </View>;
  })}</View>;
}

const styles = StyleSheet.create({
  blocks: { gap: Spacing[4] },
  paragraph: { lineHeight: 23 },
  code: { padding: Spacing[4], gap: Spacing[2], backgroundColor: '#243148', borderRadius: Radius.md },
  pseudocode: { backgroundColor: Colors.primaryDepth },
  output: { backgroundColor: Colors.surfaceRaised, borderWidth: 1, borderColor: Colors.line },
  codeText: { fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace', fontSize: 13, lineHeight: 21 },
  warning: { padding: Spacing[3], backgroundColor: '#fff0eb', borderRadius: Radius.md },
  tip: { padding: Spacing[3], backgroundColor: '#edf5ff', borderRadius: Radius.md },
});
