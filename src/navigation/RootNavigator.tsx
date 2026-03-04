import { NewAppScreen } from '@react-native/new-app-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container } from './styles';

export const RootNavigator = () => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <Container>
      <NewAppScreen templateFileName='src/app/App.tsx' safeAreaInsets={safeAreaInsets} />
    </Container>
  );
}
