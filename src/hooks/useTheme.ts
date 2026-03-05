import { useColorScheme } from 'react-native';
import { useMemo } from 'react';

export const useTheme = () => {
  const colorScheme = useColorScheme();

  return useMemo(() => (colorScheme === 'dark' ? 'dark' : 'light'), [colorScheme]);
};
