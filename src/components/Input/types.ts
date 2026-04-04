import type { TextInputProps } from 'react-native';

export type InputProps = TextInputProps & {
  label?: string;
  /** Quando `true`, exibe `*` antes do texto da label. */
  required?: boolean;
  /**
   * Campo de senha com ícone Eye/EyeOff e alternância de `secureTextEntry`.
   * Quando `true`, ignora `rightIconName` e `onRightIconPress` para esse comportamento.
   */
  password?: boolean;
  /** Nome do ícone Lucide registrado em `src/components/Icon` (ex.: `Eye`, `eye-off`). */
  rightIconName?: string;
  /** Padrão: `#181D27`. */
  rightIconColor?: string;
  onRightIconPress?: () => void;
  /** Quando `true`, o ícone não recebe toque e aparece esmaecido. Padrão: habilitado. */
  rightIconDisabled?: boolean;
};
