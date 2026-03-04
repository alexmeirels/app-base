import { useCallback, useState } from 'react';
import { login } from '../services/authService';

export function useLogin() {
  const [loading, setLoading] = useState(false);

  const submit = useCallback(async (email: string, password: string) => {
    setLoading(true);

    try {
      await login({ email, password });
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, submit };
}
