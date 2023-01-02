import { Container } from "./styles";

import refreshIcon from "../../assets/images/icons/refresh.svg";
import { ArchiveModal } from "../ArchiveModal";
import { useState } from "react";

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
  const [isArchiveModalVisible, setIsArchiveModalVisible] = useState(false);

  async function handleArchiveOrders() {
    setIsArchiveModalVisible(true);
  }

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
        <button onClick={handleArchiveOrders}>
          <img src={refreshIcon} alt="Reiniciar o dia" />
          Reiniciar o dia
        </button>
      )}
      <ArchiveModal
        visible={isArchiveModalVisible}
        onClose={() => setIsArchiveModalVisible(false)}
      />
    </Container>
  );
}
