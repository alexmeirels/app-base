import { ButtonContainer, ButtonText } from './styles';
import type { ButtonProps } from './types';
import { useCallback } from 'react';

export const Button = ({ title, onPress, testID }: ButtonProps) => {
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <ButtonContainer onPress={handlePress} testID={testID}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};
