import { getThemeByMode, type ThemeMode } from '../theme';
import { type PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { AuthProvider } from '../context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeProvider } from 'styled-components/native';

export const AppProviders = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<ThemeMode>('light');

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
      <AuthProvider>
        <ThemeContext.Provider value={contextValue}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
      </AuthProvider>
    </SafeAreaProvider>
  );
};
