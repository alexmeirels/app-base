import styled from 'styled-components/native';

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.inputPlaceholder,
}))`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  border-width: 1px;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 10px 12px;
`;
