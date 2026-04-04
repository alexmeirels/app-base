import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 16,
    paddingBottom: 24,
  },
})`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 8px;
`;

export const ItemContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  border-width: 1px;
  margin-bottom: 10px;
  padding: 14px;
`;

export const ItemText = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
`;

export const ProfilerMetricsText = styled.Text`
  color: transparent;
  font-size: 1px;
  height: 1px;
  opacity: 0;
`;
