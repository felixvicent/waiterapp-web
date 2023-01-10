import closeIcon from "../../../../assets/images/icons/close-icon.svg";
import { Button } from "../../../../components/Button";
import { api } from "../../../../service/api";

import { Category } from "../../../../types/Category";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { ModalBody, Overlay } from "./styles";

interface DeleteProductModalProps {
  image: string;
  visible: boolean;
  category: Category | null;
  name: string;
  price: number | string;
  productId: string;
  onClose: () => void;
  onAction: () => void;
}

export function DeleteProductModal({
  image,
  visible,
  category,
  name,
  price,
  productId,
  onClose,
  onAction,
}: DeleteProductModalProps) {
  if (!visible) {
    return null;
  }

  async function handleDeleteProduct() {
    await api.delete(`/products/${productId}`);

    onAction();
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Excluir Produto</strong>
          <button onClick={onClose} type="button">
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </header>

        <p>Tem certeza que deseja excluir o produto?</p>

        <div className="product">
          <div className="image">
            <img src={`http://localhost:3333/uploads/${image}`} alt={name} />
          </div>
          <div className="infos">
            <h4>
              <span>{category?.icon}</span> {category?.name}
            </h4>

            <strong>{name}</strong>
            <h5>{formatCurrency(Number(price))}</h5>
          </div>
        </div>

        <div className="footer">
          <Button type="button" onClick={onClose} ghost>
            Manter Produto
          </Button>

          <Button onClick={handleDeleteProduct} type="button">
            Excluir Produto
          </Button>
        </div>
      </ModalBody>
    </Overlay>
  );
}
