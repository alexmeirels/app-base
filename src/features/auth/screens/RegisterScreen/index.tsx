import { Container, Title } from './styles';
import type { RegisterScreenProps } from './types';

export const RegisterScreen = (_props: RegisterScreenProps) => (
  <Container testID='register-screen'>
    <Title testID='register-screen-title'>Cadastro</Title>
  </Container>
);
