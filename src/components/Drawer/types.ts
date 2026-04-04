import type { ReactNode } from 'react';

export type DrawerProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  testID?: string;
  /**
   * Quando `true`, o painel ocupa a tela (flex 1), sem fechar ao tocar fora;
   * só fecha pelo ícone X no canto superior direito.
   */
  maximized?: boolean;
};
