import {
  BottomActions,
  Container,
  Content,
  Footer,
  Header,
  LogoContainer,
  LogoSquare,
  OutlineActionButton,
  OutlineActionText,
  Subtitle,
  Title,
} from './styles';
import { useCallback, useState } from 'react';
import { login } from '../../services/authService';
import { LoginForm } from '../../components/LoginForm';
import { useNavigation } from '@react-navigation/native';

type LoginScreenProps = import('./types').LoginScreenProps;
type RootStackParamList = import('../../../../navigation/RootNavigator/types').RootStackParamList;
type LoginScreenNavigation = import('@react-navigation/native-stack').NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export const LoginScreen = (_props: LoginScreenProps) => {
  const navigation = useNavigation<LoginScreenNavigation>();
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(async (email: string, password: string) => {
    setLoading(true);

    try {
      await login({ email, password });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleGoToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const handleForgotPassword = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const handleLoginSuccess = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <Container testID='login-screen'>
      <Content>
        <Header>
          <LogoContainer>
            <LogoSquare />
          </LogoContainer>
          <Title testID='login-screen-title'>Portal</Title>
          <Subtitle>Name app</Subtitle>
        </Header>

        <LoginForm
          authLoading={loading}
          onForgotPassword={handleForgotPassword}
          onLoginSuccess={handleLoginSuccess}
          signIn={signIn}
        />
      </Content>

      <Footer>
        <BottomActions>
          <OutlineActionButton onPress={handleGoToRegister} testID='ownership-change-button'>
            <OutlineActionText>Troca de Titularidade</OutlineActionText>
          </OutlineActionButton>
          <OutlineActionButton onPress={handleGoToRegister} testID='go-to-register-button'>
            <OutlineActionText>Primeiro Acesso</OutlineActionText>
          </OutlineActionButton>
        </BottomActions>
      </Footer>
    </Container>
  );
};
