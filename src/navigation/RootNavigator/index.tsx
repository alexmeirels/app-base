import type { RootNavigatorProps, RootStackParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../../features/auth/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { RegisterScreen } from '../../features/auth/screens/RegisterScreen';
import { useMemo } from 'react';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = (_props: RootNavigatorProps) => {
  const screenOptions = useMemo(() => ({ headerShown: false }), []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
        <Stack.Screen component={LoginScreen} name='Login' />
        <Stack.Screen component={RegisterScreen} name='Register' />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
