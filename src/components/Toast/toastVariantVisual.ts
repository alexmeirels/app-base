import type { AppTheme } from '../../theme';

import type { ToastVariant } from './types';

const ICON_SIZE = 22;

export const getToastVariantIconName = (variant: ToastVariant): string => {
  if (variant === 'success') {
    return 'CheckCircle';
  }
  if (variant === 'error') {
    return 'AlertCircle';
  }
  if (variant === 'info') {
    return 'Info';
  }
  return 'Bell';
};

export const getToastVariantIconColor = (variant: ToastVariant, theme: AppTheme): string => {
  if (variant === 'success') {
    return theme.colors.success;
  }
  if (variant === 'error') {
    return theme.colors.error;
  }
  if (variant === 'info') {
    return theme.colors.info;
  }
  return theme.colors.primary;
};

export const TOAST_ICON_SIZE = ICON_SIZE;
