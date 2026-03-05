import { useCallback, useMemo, useState } from 'react';
import { Button } from '../../../../components/Button';
import { FormContainer } from './styles';
import { Input } from '../../../../components/Input';
import type { LoginFormProps } from './types';
import { useLogin } from '../../hooks/useLogin';

export const LoginForm = (_props: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, submit } = useLogin();

  const buttonTitle = useMemo(() => (loading ? 'Entrando...' : 'Entrar'), [loading]);

  const handleSubmit = useCallback(() => {
    submit(email, password);
  }, [email, password, submit]);

  return (
    <FormContainer>
      <Input onChangeText={setEmail} placeholder='E-mail' value={email} />
      <Input onChangeText={setPassword} placeholder='Senha' secureTextEntry value={password} />
      <Button onPress={handleSubmit} title={buttonTitle} />
    </FormContainer>
  );
};
