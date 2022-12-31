import { Container } from "./styles";

import logoImg from "../../assets/images/logo-simple.svg";

export function SplashScreen() {
  return (
    <Container>
      <img src={logoImg} alt="WaiterAPP" />
      <h1>
        WAITER<span>APP</span>
      </h1>
      <p>O App do Garçom</p>
    </Container>
  );
}
