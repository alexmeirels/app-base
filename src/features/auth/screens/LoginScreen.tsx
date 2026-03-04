import { LoginForm } from '../components/LoginForm';
import { Container, Title } from './styles';

export const LoginScreen = () => (
    <Container $withGap>
      <Title>Login</Title>
      <LoginForm />
    </Container>
  )
