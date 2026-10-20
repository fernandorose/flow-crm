import { useState } from "react";
import { Button, Input } from "../../components/form";
import { useAuth } from "../../hooks/auth";
import Layout from "../../layouts/default";
import { Main } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loading, error } = useAuth();

  const handleSubmit = async () => {
    const result = await signIn(email, password);

    if (result) {
      // Siguiente paso: guardar/establecer la sesión
      // y navegar al dashboard.
      alert(result.token);
    }
  };

  return (
    <Layout title="login">
      <Main>
        <div className="form">
          <div className="title">
            <img src="/logo.svg" alt="logo" width={200} />
            <span>Auth</span>
          </div>

          <div className="instr">
            <p>Enter your details to get sign in to your account</p>
          </div>

          <div className="inputs">
            <Input
              label="Email"
              placeholder="john@example.com"
              type="email"
              onChange={setEmail}
              value={email}
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              onChange={setPassword}
              value={password}
            />

            {error && <p role="alert">{error}</p>}

            <Button
              label={loading ? "Signing in..." : "Log in"}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </Main>
    </Layout>
  );
};

export default Login;
