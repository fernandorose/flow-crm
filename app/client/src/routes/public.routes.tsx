import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export function PublicRoute() {
  const { status } = useAuth();

  if (status === "loading") {
    return <p>Verificando sesión...</p>;
  }

  if (status === "authenticated") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export function PrivateRoute() {
  const { status } = useAuth();

  if (status === "loading") {
    return <p>Verificando sesión...</p>;
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
