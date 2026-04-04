import styled, { css } from 'styled-components/native';

export const FieldGroup = styled.View`
  gap: 8px;
`;

export const FieldLabel = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 500;
`;

export const RequiredMark = styled.Text`
  color: #dc2626;
  font-size: 14px;
  font-weight: 600;
`;

const textInputCore = css`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const InputWithIconRow = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  border-width: 1px;
  min-width: 0;
`;

export const StyledInputFlex = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.inputPlaceholder,
}))`
  ${textInputCore}
  background-color: transparent;
  border-width: 0;
  flex: 1;
  min-width: 0;
  padding: 10px 4px 10px 12px;
`;

const rightIconSlot = css`
  align-items: center;
  justify-content: center;
  padding: 8px 12px 8px 4px;
`;

export const RightIconPressable = styled.Pressable`
  ${rightIconSlot}
`;

export const RightIconStatic = styled.View<{ $dimmed: boolean }>`
  ${rightIconSlot}
  opacity: ${({ $dimmed }) => ($dimmed ? 0.35 : 1)};
`;

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.inputPlaceholder,
}))`
  ${textInputCore}
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  border-width: 1px;
  padding: 10px 12px;
`;
