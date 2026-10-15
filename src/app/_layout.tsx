import {
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  useFonts,
} from '@expo-google-fonts/outfit';
import { DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { LoadingScreen } from '@/components/loading-screen';
import { Colors } from '@/constants/theme';
import { AuthProvider, useAuth } from '@/hooks/use-auth';

SplashScreen.preventAutoHideAsync();

/** Lama layar loading dummy saat app dibuka. */
const BOOT_DURATION = 1800;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.surface,
    card: Colors.surface,
    text: Colors.ink,
    border: Colors.line,
  },
};

export default function RootLayout() {
  const [loaded, error] = useFonts({ Outfit_400Regular, Outfit_500Medium, Outfit_600SemiBold });
  const fontsReady = loaded || !!error;
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    if (!fontsReady) return;
    SplashScreen.hideAsync();
    const timer = setTimeout(() => setBooting(false), BOOT_DURATION);
    return () => clearTimeout(timer);
  }, [fontsReady]);

  if (!fontsReady) return null;

  return (
    <ThemeProvider value={theme}>
      <StatusBar style="dark" />
      {booting ? (
        <LoadingScreen duration={BOOT_DURATION} />
      ) : (
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      )}
    </ThemeProvider>
  );
}

function RootNavigator() {
  const { user } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.surface } }}>
      <Stack.Protected guard={!user}>
        <Stack.Screen name="login" />
      </Stack.Protected>
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="index" />
      </Stack.Protected>
    </Stack>
  );
}
