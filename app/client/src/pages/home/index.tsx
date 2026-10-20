import { useNavigate } from "react-router-dom";
import { Button } from "../../components/form";
import { useAuth } from "../../hooks/auth";
import Layout from "../../layouts/default";
import { Main } from "./styles";

const Home = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/login", { replace: true });
  };

  return (
    <Layout title="Home">
      <Main>
        <img src="/logo.svg" alt="logo" width={200} />
        <Button onClick={handleLogout} label="Logout" />
      </Main>
    </Layout>
  );
};

export default Home;
