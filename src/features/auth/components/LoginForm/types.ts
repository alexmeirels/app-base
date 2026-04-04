export type LoginFormProps = {
  authLoading: boolean;
  signIn: (email: string, password: string) => Promise<unknown>;
  onForgotPassword: () => void;
  onLoginSuccess: () => void;
};
