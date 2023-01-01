import { useContext } from "react";
import { Sidebar } from "../components/Sidebar";

import AuthContext from "../context/auth";
import { AppRoutes } from "./AppRoutes";
import { SignRoutes } from "./SignRoutes";
import { Container } from "./styles";

export default function Routes() {
  const { user } = useContext(AuthContext);

  return user ? (
    <Container>
      <Sidebar />
      <AppRoutes />
    </Container>
  ) : (
    <SignRoutes />
  );
}
