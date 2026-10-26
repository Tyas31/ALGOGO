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
<<<<<<< HEAD
=======
import { Platform, StyleSheet, View } from 'react-native';
>>>>>>> backup-algogo

import { LoadingScreen } from '@/components/loading-screen';
import { Colors } from '@/constants/theme';
import { AuthProvider, useAuth } from '@/hooks/use-auth';
<<<<<<< HEAD
=======
import { ProgressProvider } from '@/hooks/use-progress';
>>>>>>> backup-algogo

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

<<<<<<< HEAD
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
=======
  const navigator = (
    <ProgressProvider userName={user?.name}>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.surface } }}>
        <Stack.Protected guard={!user}>
          <Stack.Screen name="login" />
        </Stack.Protected>
        <Stack.Protected guard={!!user}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="lesson/[id]" />
          <Stack.Screen name="quiz/[id]" />
        </Stack.Protected>
      </Stack>
    </ProgressProvider>
  );

  if (Platform.OS === 'web') {
    return (
      <View style={webStyles.outer}>
        <View style={webStyles.phone}>
          {navigator}
        </View>
      </View>
    );
  }

  return navigator;
}

const webStyles = StyleSheet.create({
  outer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ede7de',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: '100%',
    maxWidth: 420,
    height: '100%',
    backgroundColor: Colors.surface,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.14)',
    overflow: 'hidden',
  },
});

>>>>>>> backup-algogo
