import closeIcon from "../../../../assets/images/icons/close-icon.svg";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { api } from "../../../../service/api";

import { ModalBody, Overlay } from "./styles";

interface DeleteUserModalProps {
  visible: boolean;
  name: string;
  email: string;
  userId: string;
  onClose: () => void;
  onAction: () => void;
}

export function DeleteUserModal({
  visible,
  name,
  email,
  userId,
  onClose,
  onAction,
}: DeleteUserModalProps) {
  if (!visible) {
    return null;
  }

  async function handleDeleteUser() {
    await api.delete(`/users/${userId}`);
    onAction();
    onClose();
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Excluir Usuário</strong>
          <button onClick={onClose} type="button">
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </header>

        <p>Tem certeza que deseja excluir o usuário?</p>

        <div className="user">
          <div className="group">
            <Input
              label="Nome"
              disabled
              placeholder="Fulano de Tal"
              value={name}
            />
          </div>

          <div className="group">
            <Input
              label="E-mail"
              disabled
              placeholder="fulano@gmail.com"
              value={email}
            />
          </div>
        </div>

        <div className="footer">
          <Button type="button" onClick={onClose} ghost>
            Manter Usuário
          </Button>

          <Button onClick={handleDeleteUser} type="button">
            Excluir Usuário
          </Button>
        </div>
      </ModalBody>
    </Overlay>
  );
}
