import { Container, Content, Title } from './styles';
import { useCallback, useMemo } from 'react';
import { Button } from '../../../../components/Button';
import { LoginForm } from '../../components/LoginForm';
import type { LoginScreenProps } from './types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../../navigation/RootNavigator/types';
import { useAppTheme } from '../../../../app/theme-context';
import { useNavigation } from '@react-navigation/native';

type LoginScreenNavigation = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen = (_props: LoginScreenProps) => {
  const navigation = useNavigation<LoginScreenNavigation>();
  const { isDark, toggleTheme } = useAppTheme();
  const registerButtonTitle = useMemo(() => 'Criar conta', []);
  const themeButtonTitle = useMemo(() => (isDark ? 'Ativar modo claro' : 'Ativar modo escuro'), [isDark]);

  const handleGoToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const handleToggleTheme = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <Container testID='login-screen'>
      <Content>
        <Title testID='login-screen-title'>Login</Title>
        <LoginForm />
        <Button onPress={handleGoToRegister} testID='go-to-register-button' title={registerButtonTitle} />
        <Button onPress={handleToggleTheme} testID='toggle-theme-button' title={themeButtonTitle} />
      </Content>
    </Container>
  );
};
