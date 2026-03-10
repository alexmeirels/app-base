import styled from 'styled-components/native';

export const ButtonContainer = styled.Pressable`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 12px 16px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: 600;
`;
