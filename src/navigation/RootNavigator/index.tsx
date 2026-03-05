import { Container } from './styles';
import { NewAppScreen } from '@react-native/new-app-screen';
import type { RootNavigatorProps } from './types';
import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const RootNavigator = (_props: RootNavigatorProps) => {
  const safeAreaInsets = useSafeAreaInsets();
  const templateFileName = useMemo(() => 'src/app/App.tsx', []);

  return (
    <Container>
      <NewAppScreen safeAreaInsets={safeAreaInsets} templateFileName={templateFileName} />
    </Container>
  );
};
