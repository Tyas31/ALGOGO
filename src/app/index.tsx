import { Redirect } from 'expo-router';

import { useAuth } from '@/hooks/use-auth';

export default function IndexRoute() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/(tabs)" />;
}

