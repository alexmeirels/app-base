import { NavigationContainer, type Theme as NavigationTheme } from '@react-navigation/native';
import type { RootNavigatorProps, RootStackParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../features/home/screens/HomeScreen';
import { LoginScreen } from '../../features/auth/screens/LoginScreen';
import { RegisterScreen } from '../../features/auth/screens/RegisterScreen';
import { useMemo } from 'react';
import { useTheme } from 'styled-components/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = (_props: RootNavigatorProps) => {
  const theme = useTheme();
  const screenOptions = useMemo(
    () => ({
      gestureEnabled: false,
      headerShown: false,
    }),
    [],
  );
  const navigationTheme = useMemo<NavigationTheme>(
    () => ({
      dark: theme.mode === 'dark',
      colors: {
        primary: theme.colors.primary,
        background: theme.colors.background,
        card: theme.colors.card,
        text: theme.colors.textPrimary,
        border: theme.colors.border,
        notification: theme.colors.primary,
      },
      fonts: {
        regular: {
          fontFamily: 'System',
          fontWeight: '400',
        },
        medium: {
          fontFamily: 'System',
          fontWeight: '500',
        },
        bold: {
          fontFamily: 'System',
          fontWeight: '700',
        },
        heavy: {
          fontFamily: 'System',
          fontWeight: '800',
        },
      },
    }),
    [theme],
  );

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
        <Stack.Screen component={HomeScreen} name='Home' />
        <Stack.Screen component={LoginScreen} name='Login' />
        <Stack.Screen component={RegisterScreen} name='Register' />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
