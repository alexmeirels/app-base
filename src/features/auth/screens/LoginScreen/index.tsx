import { Container, Content, Title } from './styles';
import { LoginForm } from '../../components/LoginForm';
import type { LoginScreenProps } from './types';

export const LoginScreen = (_props: LoginScreenProps) => (
  <Container>
    <Content>
      <Title>Login</Title>
      <LoginForm />
    </Content>
  </Container>
);
