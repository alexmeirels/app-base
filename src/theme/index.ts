export type ThemeMode = 'light' | 'dark';

export type AppTheme = {
  mode: ThemeMode;
  colors: {
    background: string;
    border: string;
    card: string;
    error: string;
    info: string;
    inputBackground: string;
    inputPlaceholder: string;
    primary: string;
    success: string;
    textPrimary: string;
    textSecondary: string;
  };
};

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    background: '#FFFFFF',
    border: '#D1D5DB',
    card: '#FFFFFF',
    error: '#DC2626',
    info: '#2563EB',
    inputBackground: '#FFFFFF',
    inputPlaceholder: '#6B7280',
    primary: '#111827',
    success: '#16A34A',
    textPrimary: '#111827',
    textSecondary: '#374151',
  },
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: {
    background: '#0B1220',
    border: '#334155',
    card: '#111827',
    error: '#F87171',
    info: '#60A5FA',
    inputBackground: '#111827',
    inputPlaceholder: '#94A3B8',
    primary: '#2563EB',
    success: '#4ADE80',
    textPrimary: '#F3F4F6',
    textSecondary: '#D1D5DB',
  },
};

export const getThemeByMode = (mode: ThemeMode) => (mode === 'dark' ? darkTheme : lightTheme);
