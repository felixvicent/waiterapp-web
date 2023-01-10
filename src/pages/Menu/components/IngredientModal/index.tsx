import { ModalBody, Overlay } from "./styles";

import closeIcon from "../../../../assets/images/icons/close-icon.svg";
import { Input } from "../../../../components/Input";
import { FormEvent, useState } from "react";
import { Button } from "../../../../components/Button";
import { api } from "../../../../service/api";

interface IngredientsModalProps {
  visible: boolean;
  onClose: () => void;
}

export function IngredientsModal({ onClose, visible }: IngredientsModalProps) {
  const [emoji, setEmoji] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!emoji && !name) {
      alert("Preencha todos os campo");
      return;
    }

    await api.post("/ingredients", {
      name,
      icon: emoji,
    });

    onClose();
  }

  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Novo Ingrediente</strong>
          <button onClick={onClose} type="button">
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="group">
            <Input
              label="Emoji"
              value={emoji}
              placeholder="Ex: 🍕"
              onChange={(event) => setEmoji(event.target.value)}
            />
          </div>

          <div className="group">
            <Input
              label="Nome do ingrediente"
              value={name}
              placeholder="Ex: Quatro Queijos"
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <Button disabled={!emoji && !name}>Salvar Alterações</Button>
        </form>
      </ModalBody>
    </Overlay>
  );
}
