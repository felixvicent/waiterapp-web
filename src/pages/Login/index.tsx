import { LoginForm } from "./components/LoginForm";
import { LoginHeader } from "./components/LoginHeader";
import { Container } from "./styles";

export function Login() {
  return (
    <Container>
      <LoginHeader />
      <LoginForm />
    </Container>
  );
}
