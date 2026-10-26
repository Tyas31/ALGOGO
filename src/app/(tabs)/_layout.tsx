import { Tabs } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ArtImage } from '@/components/ngulik/art-image';
import { NavIcons } from '@/constants/assets';
import { Colors, Radius, Sizes, Spacing } from '@/constants/theme';

const TAB_CONFIG = {
  index: {
    label: 'Beranda',
    icon: NavIcons.home,
  },
  map: {
    label: 'Misi',
    icon: NavIcons.map,
  },
  rank: {
    label: 'Peringkat',
    icon: NavIcons.rank,
  },
  profile: {
    label: 'Profil',
    icon: NavIcons.profile,
  },
} as const;

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ state, descriptors, navigation }) => {
        return (
          <View style={styles.barWrapper}>
            <View style={[styles.tabBar, { paddingBottom: Math.max(insets.bottom, Spacing[2]) }]}>
              {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const config = TAB_CONFIG[route.name as keyof typeof TAB_CONFIG];
                if (!config) return null;

                const onPress = () => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                };

                return (
                  <Pressable
                    key={route.key}
                    accessibilityRole="tab"
                    accessibilityState={{ selected: isFocused }}
                    accessibilityLabel={config.label}
                    onPress={onPress}
                    style={({ pressed }) => [
                      styles.tabItem,
                      isFocused && styles.tabItemActive,
                      pressed && styles.tabItemPressed,
                    ]}>
                    <View style={[styles.iconContainer, isFocused && styles.iconActiveContainer]}>
                      <ArtImage
                        art={config.icon}
                        width={32}
                        style={isFocused ? styles.iconActive : styles.iconInactive}
                      />
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        );
      }}>
      <Tabs.Screen name="index" options={{ title: 'Beranda' }} />
      <Tabs.Screen name="map" options={{ title: 'Misi' }} />
      <Tabs.Screen name="rank" options={{ title: 'Peringkat' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  barWrapper: {
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.line,
    width: '100%',
  },
  tabBar: {
    flexDirection: 'row',
    maxWidth: Sizes.frameWidth,
    width: '100%',
    alignSelf: 'center',
    paddingTop: Spacing[2],
    paddingBottom: Spacing[2],
    paddingHorizontal: Spacing[3],
    backgroundColor: Colors.surface,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing[1],
    paddingHorizontal: Spacing[2],
    borderRadius: Radius.md,
  },
  tabItemActive: {
    backgroundColor: 'rgba(154, 103, 232, 0.12)',
    borderRadius: Radius.md,
  },
  tabItemPressed: {
    opacity: 0.7,
  },
  iconContainer: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconActiveContainer: {
    transform: [{ scale: 1.08 }],
  },
  iconActive: {
    opacity: 1,
  },
  iconInactive: {
    opacity: 0.5,
  },
});

