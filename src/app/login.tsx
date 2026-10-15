import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Button } from '@/components/ngulik/button';
import { Screen } from '@/components/ngulik/screen';
import { Text } from '@/components/ngulik/text';
import { TextField } from '@/components/ngulik/text-field';
import { Mascots } from '@/constants/assets';
import { Spacing } from '@/constants/theme';
import { useAuth } from '@/hooks/use-auth';

export default function LoginScreen() {
  const { signIn } = useAuth();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const canSubmit = name.trim().length > 0 && password.length > 0 && !loading;

  const onSubmit = async () => {
    setLoading(true);
    // Setelah berhasil, guard di root layout memindahkan pengguna ke Beranda.
    await signIn(name, password);
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Screen
        footer={
          <Button label={loading ? 'Memuat...' : 'Masuk'} disabled={!canSubmit} onPress={onSubmit} />
        }>
        <View style={styles.mascot}>
          <ArtImage art={Mascots.wave} height={140} />
        </View>
        <View style={styles.heading}>
          <Text variant="display" style={styles.center}>
            Selamat Datang di Ngulik!
          </Text>
          <Text color="inkSoft" style={styles.center}>
            Masuk dulu yuk, biar streak dan XP kamu tersimpan.
          </Text>
        </View>
        <View style={styles.form}>
          <TextField
            label="Nama pengguna"
            placeholder="mis. naell"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="username"
            returnKeyType="next"
            editable={!loading}
          />
          <TextField
            label="Kata sandi"
            placeholder="Kata sandi kamu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textContentType="password"
            returnKeyType="done"
            onSubmitEditing={canSubmit ? onSubmit : undefined}
            editable={!loading}
          />
        </View>
        <Text variant="caption" color="inkSoft" style={styles.center}>
          Mode demo: isi nama dan kata sandi apa saja untuk masuk.
        </Text>
      </Screen>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  mascot: {
    alignItems: 'center',
    marginTop: Spacing[6],
  },
  heading: {
    gap: Spacing[2],
  },
  center: {
    textAlign: 'center',
  },
  form: {
    gap: Spacing[4],
    marginTop: Spacing[2],
  },
});
