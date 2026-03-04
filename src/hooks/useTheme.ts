import { useColorScheme } from 'react-native';

export function useTheme() {
  return useColorScheme() === 'dark' ? 'dark' : 'light';
}
