export type ToastVariant = 'default' | 'success' | 'error' | 'info';

export type ShowToastOptions = {
  message: string;
  type?: ToastVariant;
  /** Duração visível em ms antes de sumir. Padrão: 3200. */
  duration?: number;
};

export type ToastContextValue = {
  hideToast: () => void;
  showToast: (options: ShowToastOptions) => void;
};
