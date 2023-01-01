import { Container } from "./styles";

import refreshIcon from "../../assets/images/icons/refresh.svg";

interface HeaderProps {
  icon: string;
  description: string;
  title: string;
  reset: boolean;
}

export function Header({
  icon,
  description,
  title,
  reset = false,
}: HeaderProps) {
  return (
    <Container>
      <div className="left">
        <div className="title">
          <img src={icon} alt="Home" />
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
      {reset && (
        <button>
          <img src={refreshIcon} alt="Reiniciar o dia" />
          Reiniciar o dia
        </button>
      )}
    </Container>
  );
}
