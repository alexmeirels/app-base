import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const ProviderShell = styled.View`
  flex: 1;
`;

export const ToastLayer = styled.View`
  bottom: 0;
  left: 0;
  pointer-events: box-none;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ToastAnchor = styled.View`
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  padding-horizontal: 16px;
  width: 100%;
`;

export const ToastSurface = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.card};
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  border-width: 1px;
  elevation: 6;
  max-width: 100%;
  padding: 14px 16px;
  shadow-color: #000000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.15;
  shadow-radius: 8px;
  width: 100%;
`;

export const ToastBody = styled.View`
  align-items: flex-start;
  flex-direction: row;
  gap: 12px;
`;

export const ToastTextCol = styled.View`
  flex: 1;
  min-width: 0;
`;

export const ToastMessage = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 15px;
  line-height: 22px;
`;
