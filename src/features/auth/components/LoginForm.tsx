import { useState } from 'react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { useLogin } from '../hooks/useLogin';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, submit } = useLogin();

  return (
    <>
      <Input value={email} onChangeText={setEmail} placeholder='E-mail' />
      <Input value={password} onChangeText={setPassword} placeholder='Senha' secureTextEntry />
      <Button title={loading ? 'Entrando...' : 'Entrar'} onPress={() => submit(email, password)} />
    </>
  );
}
