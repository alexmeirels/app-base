import { Animated, Pressable } from 'react-native';
import styled from 'styled-components/native';

export const Root = styled.View`
  flex: 1;
`;

export const BackdropTint = styled(Animated.View)`
  background-color: #000000;
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
`;

export const BackdropPressable = styled(Pressable)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const SheetWrap = styled.View.attrs(() => ({
  pointerEvents: 'box-none' as const,
}))<{ $maximized?: boolean }>`
  flex: 1;
  justify-content: ${({ $maximized }) => ($maximized ? 'flex-start' : 'flex-end')};
`;

export const AnimatedSheetOuter = styled(Animated.View)<{ $maximized?: boolean }>`
  background-color: ${({ theme }) => theme.colors.card};
  border-top-left-radius: ${({ $maximized }) => ($maximized ? 0 : 16)}px;
  border-top-right-radius: ${({ $maximized }) => ($maximized ? 0 : 16)}px;
  max-height: ${({ $maximized }) => ($maximized ? '100%' : '85%')};
  overflow: hidden;
  width: 100%;
  ${({ $maximized }) => $maximized && 'flex: 1;'}
`;

export const CloseRow = styled.View`
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-end;
  padding-bottom: 8px;
  padding-horizontal: 8px;
  width: 100%;
`;

export const CloseIconPressable = styled.Pressable`
  align-items: center;
  height: 44px;
  justify-content: center;
  width: 44px;
`;

export const Sheet = styled.View<{ $maximized?: boolean }>`
  padding: 20px 20px 8px;
  width: 100%;
  ${({ $maximized }) =>
    $maximized &&
    `
    flex: 1;
    min-height: 0;
  `}
`;
