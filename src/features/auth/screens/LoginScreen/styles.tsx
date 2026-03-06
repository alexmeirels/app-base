import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  padding: 16px;
`;

export const Content = styled.View`
  gap: 12px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;
