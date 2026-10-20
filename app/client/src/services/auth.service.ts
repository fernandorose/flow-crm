export async function login(email: string, password: string) {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error("No se pudo iniciar sesión");
  }

  return data as { token: string };
}

export async function getSession() {
  const response = await fetch("http://localhost:3000/api/auth/me", {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("No active session");
  }

  return response.json() as Promise<{
    authenticated: true;
    user: {
      userId: string;
      companyId: string | null;
      role: string;
    };
  }>;
}

export async function logout() {
  const response = await fetch("http://localhost:3000/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Could not log out");
  }
}
