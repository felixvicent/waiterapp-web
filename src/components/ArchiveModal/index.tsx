import { toast } from "react-toastify";
import closeIcon from "../../assets/images/icons/close-icon.svg";
import { api } from "../../service/api";
import { Button } from "../Button";

import { ModalBody, Overlay } from "./styles";

interface ArchiveModalProps {
  onClose: () => void;
  visible: boolean;
}

export function ArchiveModal({ onClose, visible }: ArchiveModalProps) {
  if (!visible) {
    return null;
  }

  async function handleArchiveOrders() {
    await api.patch("/orders/archive");

    toast.success(
      "Todos os pedidos foram arquivados e estão na página Histórico"
    );

    onClose();
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Reiniciar o dia</strong>
          <button onClick={onClose} type="button">
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </header>

        <div className="content">
          <p>
            Ao reiniciar o dia, todos os pedidos serão arquivados no status
            atual.
          </p>

          <p>Deseja reiniciar o dia?</p>
        </div>

        <div className="buttons">
          <Button onClick={onClose} ghost>
            Não, continuar pedidos
          </Button>
          <Button onClick={handleArchiveOrders}>Sim, reiniciar o dia</Button>
        </div>
      </ModalBody>
    </Overlay>
  );
}
