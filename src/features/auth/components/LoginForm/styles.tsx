import styled from 'styled-components/native';

export const FormContainer = styled.View`
  gap: 14px;
`;

export const FieldGroup = styled.View`
  gap: 8px;
`;

export const FieldLabel = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 18px;
  font-weight: 500;
`;

export const ForgotPasswordButton = styled.Pressable`
  align-items: center;
  margin-top: 6px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
`;

export const ErrorText = styled.Text`
  color: #dc2626;
  font-size: 12px;
`;
