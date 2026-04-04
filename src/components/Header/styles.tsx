import styled from 'styled-components/native';

export const Bar = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  min-height: 56px;
  padding: 0 16px;
  position: relative;
  width: 100%;
`;

export const TitleLayer = styled.View`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const CenterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 17px;
  font-weight: 700;
  padding-horizontal: 56px;
  text-align: center;
`;

export const SideSlot = styled.View`
  align-items: center;
  height: 44px;
  justify-content: center;
  width: 44px;
  z-index: 1;
`;
