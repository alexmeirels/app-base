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
import LogoWhite from '../../../../assets/logos/logo-white.svg';
import { LoginForm } from '../../components/LoginForm';
import type { LoginScreenProps } from './types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../../navigation/RootNavigator/types';
import { useAuthContext } from '../../../../context/AuthContext';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

type LoginScreenNavigation = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen = (_props: LoginScreenProps) => {
  const navigation = useNavigation<LoginScreenNavigation>();
  const { loading, signIn } = useAuthContext();

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
            <LogoSquare>
              <LogoWhite height={22} width={54} />
            </LogoSquare>
          </LogoContainer>
          <Title testID='login-screen-title'>Portal do Morador</Title>
          <Subtitle>LLZ Garantidora</Subtitle>
        </Header>

        <LoginForm
          authLoading={loading.main}
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
