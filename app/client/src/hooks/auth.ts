import { useEffect, useState } from "react";
import { getSession, login, logout } from "../services/auth.service";

interface AuthUser {
  userId: string;
  companyId: string | null;
  role: string;
}

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const data = await getSession();
        setUser(data.user);
        setStatus("authenticated");
      } catch {
        setUser(null);
        setStatus("unauthenticated");
      }
    };

    checkSession();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      await login(email, password);

      const data = await getSession();
      setUser(data.user);
      setStatus("authenticated");

      return data;
    } catch {
      setError("Email or password incorrect");
      setUser(null);
      setStatus("unauthenticated");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await logout();
    } finally {
      setUser(null);
      setStatus("unauthenticated");
    }
  };

  return { signIn, signOut, loading, error, status, user };
}
