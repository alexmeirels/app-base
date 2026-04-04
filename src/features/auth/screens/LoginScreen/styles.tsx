import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: space-between;
  padding: 20px 16px 12px;
`;

export const Content = styled.View`
  flex: 1;
  gap: 28px;
`;

export const Header = styled.View`
  align-items: center;
  margin-top: 44px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const LogoSquare = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  height: 80px;
  justify-content: center;
  width: 80px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 40px;
  font-weight: 700;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 30px;
  margin-top: 8px;
`;

export const Footer = styled.View`
  gap: 12px;
  margin-bottom: 8px;
`;

export const BottomActions = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const OutlineActionButton = styled.Pressable`
  align-items: center;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  border-width: 1px;
  flex: 1;
  padding: 12px;
`;

export const OutlineActionText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: 600;
`;
