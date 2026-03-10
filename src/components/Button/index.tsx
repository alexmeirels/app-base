import { ButtonContainer, ButtonText } from './styles';
import type { ButtonProps } from './types';
import { useCallback } from 'react';

export const Button = ({ disabled, title, onPress, testID }: ButtonProps) => {
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <ButtonContainer disabled={disabled} onPress={handlePress} testID={testID}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};
