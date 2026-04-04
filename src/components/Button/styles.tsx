import styled from 'styled-components/native';

type ButtonContainerProps = {
  $size: 'small' | 'medium' | 'large';
};

export const ButtonContainer = styled.Pressable<ButtonContainerProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  padding: ${({ $size }) => {
    if ($size === 'small') {
      return '8px 12px';
    }

    if ($size === 'large') {
      return '16px 16px';
    }

    return '12px 16px';
  }};
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: 600;
`;
