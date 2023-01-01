import { Header } from "../../components/Header";
import { Orders } from "../../components/Orders";

import homeIcon from "../../assets/images/icons/home.svg";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header
        icon={homeIcon}
        title="Home"
        description="Acompanhe os pedidos dos clientes"
        reset
      />
      <Orders />
    </Container>
  );
}
