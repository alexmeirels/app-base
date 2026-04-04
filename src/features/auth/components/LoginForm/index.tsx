import {
  ErrorText,
  FieldGroup,
  FieldLabel,
  ForgotPasswordButton,
  ForgotPasswordText,
  FormContainer,
} from './styles';
import { useCallback, useState } from 'react';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import type { LoginFormProps } from './types';
import { useBiometricLogin } from '../../hooks/useBiometricLogin';

export const LoginForm = ({ authLoading, signIn, onForgotPassword, onLoginSuccess }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    biometricAvailable,
    biometricError,
    biometricLoading,
    isBiometricActionDisabled,
    authenticate,
  } = useBiometricLogin();
  const loginButtonTitle = 'Entrar';
  const biometricButtonTitle = biometricLoading ? 'Validando Face ID...' : 'Entrar com Face ID';

  const handleSubmit = useCallback(async () => {
    await signIn(email, password);
    onLoginSuccess();
  }, [email, onLoginSuccess, password, signIn]);

  const handleBiometricSubmit = useCallback(() => {
    authenticate();
  }, [authenticate]);

  const shouldShowBiometricError = biometricError.length > 0;

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text.toLowerCase());
  }, []);

  return (
    <FormContainer>
      <FieldGroup>
        <FieldLabel>E-mail</FieldLabel>
        <Input
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText={handleEmailChange}
          placeholder='seu@email.com'
          value={email}
        />
      </FieldGroup>
      <FieldGroup>
        <FieldLabel>Senha</FieldLabel>
        <Input onChangeText={setPassword} placeholder='Digite sua senha' secureTextEntry value={password} />
      </FieldGroup>
      <ForgotPasswordButton onPress={onForgotPassword} testID='forgot-password-button'>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPasswordButton>
      <Button
        loading={authLoading}
        onPress={handleSubmit}
        size='large'
        testID='login-submit-button'
        title={loginButtonTitle}
      />
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
