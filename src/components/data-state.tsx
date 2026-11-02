import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { Button } from '@/components/ngulik/button';
import { Text } from '@/components/ngulik/text';
import { Colors, Spacing } from '@/constants/theme';

export function DataState({ error, retry, onBack }: {
  error?: string | null;
  retry?: () => void;
  onBack?: () => void;
}) {
  return (
    <View style={styles.root}>
      {error ? <Text accessibilityRole="alert" style={styles.message}>{error}</Text>
        : <><ActivityIndicator size="large" color={Colors.primary} /><Text>Memuat data belajar...</Text></>}
      {error && retry && <Button label="Coba Lagi" onPress={retry} />}
      {onBack && <Button label="Kembali" onPress={onBack} />}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: Spacing[4], padding: Spacing[6], backgroundColor: Colors.surface },
  message: { textAlign: 'center' },
});
