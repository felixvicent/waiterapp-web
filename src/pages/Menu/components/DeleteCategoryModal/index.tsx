import closeIcon from "../../../../assets/images/icons/close-icon.svg";
import { Button } from "../../../../components/Button";
import { api } from "../../../../service/api";

import { Category } from "../../../../types/Category";
import { ModalBody, Overlay } from "./styles";

interface DeleteCategoryModalProps {
  visible: boolean;
  category: Category | null;
  onClose: () => void;
  onAction: () => void;
}

export function DeleteCategoryModal({
  visible,
  category,
  onClose,
  onAction,
}: DeleteCategoryModalProps) {
  if (!visible) {
    return null;
  }

  async function handleDeleteCategory() {
    await api.delete(`/categories/${category?._id}`);

    onClose();
    onAction();
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Excluir Categoria</strong>
          <button onClick={onClose} type="button">
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </header>

        <p>Tem certeza que deseja excluir a categoria?</p>

        <div className="category">
          <span>{category?.icon}</span>
          <h3>{category?.name}</h3>
        </div>

        <div className="footer">
          <Button type="button" onClick={onClose} ghost>
            Manter Categoria
          </Button>

          <Button onClick={handleDeleteCategory} type="button">
            Excluir Categoria
          </Button>
        </div>
      </ModalBody>
    </Overlay>
  );
}
