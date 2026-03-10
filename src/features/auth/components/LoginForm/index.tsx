import { ErrorText, FormContainer } from './styles';
import { useCallback, useMemo, useState } from 'react';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import type { LoginFormProps } from './types';
import { useBiometricLogin } from '../../hooks/useBiometricLogin';
import { useLogin } from '../../hooks/useLogin';

export const LoginForm = (_props: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, submit } = useLogin();
  const {
    biometricAvailable,
    biometricError,
    biometricLoading,
    isBiometricActionDisabled,
    authenticate,
  } = useBiometricLogin();

  const loginButtonTitle = useMemo(() => (loading ? 'Entrando...' : 'Entrar'), [loading]);
  const biometricButtonTitle = useMemo(
    () => (biometricLoading ? 'Validando Face ID...' : 'Entrar com Face ID'),
    [biometricLoading],
  );

  const handleSubmit = useCallback(() => {
    submit(email, password);
  }, [email, password, submit]);

  const handleBiometricSubmit = useCallback(() => {
    authenticate();
  }, [authenticate]);

  const shouldShowBiometricError = useMemo(
    () => biometricError.length > 0,
    [biometricError.length],
  );

  return (
    <FormContainer>
      <Input onChangeText={setEmail} placeholder='E-mail' value={email} />
      <Input onChangeText={setPassword} placeholder='Senha' secureTextEntry value={password} />
      <Button onPress={handleSubmit} title={loginButtonTitle} />
      {biometricAvailable ? (
        <Button
          disabled={isBiometricActionDisabled}
          onPress={handleBiometricSubmit}
          testID='face-id-login-button'
          title={biometricButtonTitle}
        />
      ) : null}
      {shouldShowBiometricError ? <ErrorText>{biometricError}</ErrorText> : null}
    </FormContainer>
  );
};
