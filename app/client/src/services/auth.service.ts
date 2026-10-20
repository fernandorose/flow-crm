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
