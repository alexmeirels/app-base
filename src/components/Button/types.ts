export type ButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
  title: string;
  onPress: () => void;
  testID?: string;
};
