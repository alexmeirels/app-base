export type ThemeMode = 'light' | 'dark';

export type AppTheme = {
  mode: ThemeMode;
  colors: {
    background: string;
    textPrimary: string;
    textSecondary: string;
    primary: string;
    border: string;
    inputBackground: string;
    inputPlaceholder: string;
    card: string;
  };
};

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    background: '#F9FAFB',
    textPrimary: '#111827',
    textSecondary: '#374151',
    primary: '#111827',
    border: '#D1D5DB',
    inputBackground: '#FFFFFF',
    inputPlaceholder: '#6B7280',
    card: '#FFFFFF',
  },
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: {
    background: '#0B1220',
    textPrimary: '#F3F4F6',
    textSecondary: '#D1D5DB',
    primary: '#2563EB',
    border: '#334155',
    inputBackground: '#111827',
    inputPlaceholder: '#94A3B8',
    card: '#111827',
  },
};

export const getThemeByMode = (mode: ThemeMode) => (mode === 'dark' ? darkTheme : lightTheme);
