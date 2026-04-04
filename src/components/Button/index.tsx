import { ActivityIndicator } from 'react-native';
import { useCallback } from 'react';

import { ButtonContainer, ButtonText } from './styles';
import type { ButtonProps } from './types';

export const Button = ({ disabled, loading, size = 'medium', title, onPress, testID }: ButtonProps) => {
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <ButtonContainer
      $size={size}
      disabled={disabled || loading}
      onPress={handlePress}
      testID={testID}
    >
      {loading ? <ActivityIndicator color='#ffffff' /> : <ButtonText>{title}</ButtonText>}
    </ButtonContainer>
  );
};
