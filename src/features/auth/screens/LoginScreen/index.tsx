import { Container, Content, Title } from './styles';
import { useCallback, useMemo } from 'react';
import { Button } from '../../../../components/Button';
import { LoginForm } from '../../components/LoginForm';
import type { LoginScreenProps } from './types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../../navigation/RootNavigator/types';
import { useNavigation } from '@react-navigation/native';

type LoginScreenNavigation = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen = (_props: LoginScreenProps) => {
  const navigation = useNavigation<LoginScreenNavigation>();
  const registerButtonTitle = useMemo(() => 'Criar conta', []);

  const handleGoToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  return (
    <Container testID='login-screen'>
      <Content>
        <Title testID='login-screen-title'>Login</Title>
        <LoginForm />
        <Button onPress={handleGoToRegister} testID='go-to-register-button' title={registerButtonTitle} />
      </Content>
    </Container>
  );
};
