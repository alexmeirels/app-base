import { getThemeByMode, type ThemeMode } from '../theme';
import { type PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContext } from './theme-context';
import { ThemeProvider } from 'styled-components/native';
import { useTheme } from '../hooks/useTheme';

export const AppProviders = ({ children }: PropsWithChildren) => {
  const systemMode = useTheme();
  const [mode, setMode] = useState<ThemeMode>(systemMode);

  const toggleTheme = useCallback(() => {
    setMode(currentMode => (currentMode === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme = useMemo(() => getThemeByMode(mode), [mode]);
  const contextValue = useMemo(
    () => ({ mode, isDark: mode === 'dark', toggleTheme }),
    [mode, toggleTheme],
  );

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={contextValue}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
};
