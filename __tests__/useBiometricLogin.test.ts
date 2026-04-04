import { act, renderHook, waitFor } from '@testing-library/react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { loginWithFaceId } from '../src/features/auth/services/authService';
import { useBiometricLogin } from '../src/features/auth/hooks/useBiometricLogin';

jest.mock('react-native-biometrics', () => ({
  BiometryTypes: {
    FaceID: 'FaceID',
  },
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../src/features/auth/services/authService', () => ({
  loginWithFaceId: jest.fn(),
}));

describe('useBiometricLogin', () => {
  const isSensorAvailable = jest.fn();
  const simplePrompt = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.mocked(ReactNativeBiometrics).mockImplementation(
      () =>
        ({
          isSensorAvailable,
          simplePrompt,
        }) as unknown as ReactNativeBiometrics,
    );
  });

  it('enables biometric login when Face ID is available', async () => {
    isSensorAvailable.mockResolvedValue({
      available: true,
      biometryType: BiometryTypes.FaceID,
    });

    const { result } = renderHook(() => useBiometricLogin());

    await waitFor(() => {
      expect(result.current.biometricAvailable).toBe(true);
    });

    expect(result.current.isBiometricActionDisabled).toBe(false);
  });

  it('returns an error when authentication is requested without Face ID', async () => {
    isSensorAvailable.mockResolvedValue({
      available: false,
      biometryType: null,
    });

    const { result } = renderHook(() => useBiometricLogin());

    await waitFor(() => {
      expect(result.current.biometricAvailable).toBe(false);
    });

    let authenticateResult = false;

    await act(async () => {
      authenticateResult = await result.current.authenticate();
    });

    expect(authenticateResult).toBe(false);
    expect(result.current.biometricError).toBe('Face ID indisponivel neste dispositivo.');
  });

  it('logs in after a successful Face ID prompt', async () => {
    isSensorAvailable.mockResolvedValue({
      available: true,
      biometryType: BiometryTypes.FaceID,
    });
    simplePrompt.mockResolvedValue({ success: true });
    jest.mocked(loginWithFaceId).mockResolvedValue(undefined);

    const { result } = renderHook(() => useBiometricLogin());

    await waitFor(() => {
      expect(result.current.biometricAvailable).toBe(true);
    });

    let authenticateResult = false;

    await act(async () => {
      authenticateResult = await result.current.authenticate();
    });

    expect(authenticateResult).toBe(true);
    expect(simplePrompt).toHaveBeenCalledWith({
      promptMessage: 'Entre com Face ID',
      cancelButtonText: 'Cancelar',
    });
    expect(loginWithFaceId).toHaveBeenCalledTimes(1);
    expect(result.current.biometricError).toBe('');
  });
});
