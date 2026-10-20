// hooks/useAuth.ts

import { useState } from "react";
import { login } from "../services/auth.service";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await login(email, password);
      return data;
    } catch {
      setError("Email or password incorrect");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading, error };
}
