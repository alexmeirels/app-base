import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { loginWithFaceId } from '../services/authService';

export const useBiometricLogin = () => {
  const [biometricAvailable, setBiometricAvailable] = useState(false);
  const [biometricLoading, setBiometricLoading] = useState(false);
  const [biometricError, setBiometricError] = useState('');

  const biometrics = useMemo(() => new ReactNativeBiometrics(), []);

  const isFaceIdAvailable = useCallback(async (): Promise<boolean> => {
    try {
      const { available, biometryType } = await biometrics.isSensorAvailable();

      return available && biometryType === BiometryTypes.FaceID;
    } catch {
      return false;
    }
  }, [biometrics]);

  const authenticateWithFaceId = useCallback(async (): Promise<boolean> => {
    try {
      const { success } = await biometrics.simplePrompt({
        promptMessage: 'Entre com Face ID',
        cancelButtonText: 'Cancelar',
      });

      return success;
    } catch {
      return false;
    }
  }, [biometrics]);

  const checkFaceIdAvailability = useCallback(async () => {
    const available = await isFaceIdAvailable();

    setBiometricAvailable(available);
  }, [isFaceIdAvailable]);

  useEffect(() => {
    checkFaceIdAvailability();
  }, [checkFaceIdAvailability]);

  const authenticate = useCallback(async () => {
    if (!biometricAvailable) {
      setBiometricError('Face ID indisponivel neste dispositivo.');
      return false;
    }

    setBiometricLoading(true);
    setBiometricError('');

    try {
      const promptSuccess = await authenticateWithFaceId();

      if (!promptSuccess) {
        setBiometricError('Falha ao autenticar com Face ID.');
        return false;
      }

      await loginWithFaceId();
      return true;
    } catch {
      setBiometricError('Erro ao processar login com Face ID.');
      return false;
    } finally {
      setBiometricLoading(false);
    }
  }, [biometricAvailable, authenticateWithFaceId]);

  const isBiometricActionDisabled = useMemo(
    () => biometricLoading || !biometricAvailable,
    [biometricAvailable, biometricLoading],
  );

  return {
    biometricAvailable,
    biometricError,
    biometricLoading,
    isBiometricActionDisabled,
    authenticate,
  };
};
