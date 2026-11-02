import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, View } from 'react-native';

import { ArtImage } from '@/components/ngulik/art-image';
import { Button } from '@/components/ngulik/button';
import { Screen } from '@/components/ngulik/screen';
import { Text } from '@/components/ngulik/text';
import { TextField } from '@/components/ngulik/text-field';
import { Mascots } from '@/constants/assets';
import { Spacing } from '@/constants/theme';
import { useAuth } from '@/hooks/use-auth';
import { errorMessage } from '@/lib/errors';

export default function LoginScreen() {
  const { signIn, signUp, configured } = useAuth();
  const [registering, setRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = configured && email.trim().length > 0 && password.length > 0 &&
    (!registering || (name.trim().length >= 2 && password.length >= 6)) && !loading;

  const onSubmit = async () => {
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    try {
      if (registering) await signUp(name, email, password);
      else await signIn(email, password);
    } catch (failure) {
      setError(errorMessage(failure));
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Screen
        footer={
          <Button label={loading ? 'Memuat...' : registering ? 'Buat Akun' : 'Masuk'} disabled={!canSubmit} onPress={onSubmit} />
        }>
        <View style={styles.mascot}>
          <ArtImage art={Mascots.wave} height={140} />
        </View>
        <View style={styles.heading}>
          <Text variant="display" style={styles.center}>
            Selamat Datang di AlgoGo!
          </Text>
          <Text color="inkSoft" style={styles.center}>
            Masuk dulu yuk, biar streak dan XP kamu tersimpan.
          </Text>
        </View>
        <View style={styles.form}>
          {registering && <TextField
            label="Nama tampilan"
            placeholder="mis. naell"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={50}
            textContentType="name"
            returnKeyType="next"
            editable={!loading}
          />}
          <TextField
            label="Email"
            placeholder="nama@contoh.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            returnKeyType="next"
            editable={!loading}
          />
          <TextField
            label="Kata sandi"
            placeholder={registering ? 'Sedikitnya 6 karakter' : 'Kata sandi kamu'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textContentType={registering ? 'newPassword' : 'password'}
            returnKeyType="done"
            onSubmitEditing={canSubmit ? onSubmit : undefined}
            editable={!loading}
          />
        </View>
        {(!configured || error) && <Text accessibilityRole="alert" color="danger" style={styles.center}>
          {configured ? error : 'Layanan akun belum tersedia. Hubungi pengelola aplikasi.'}
        </Text>}
        <Pressable accessibilityRole="button" disabled={loading} onPress={() => {
          setRegistering((value) => !value);
          setError(null);
          setPassword('');
        }}>
          <Text color="primaryDepth" style={styles.center}>
            {registering ? 'Sudah punya akun? Masuk' : 'Belum punya akun? Daftar'}
          </Text>
        </Pressable>
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
