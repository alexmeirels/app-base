import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: center;
  padding: 16px;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 12px;
  gap: 12px;
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 24px;
  font-weight: 600;
`;
