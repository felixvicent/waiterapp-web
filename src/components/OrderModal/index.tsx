import { useEffect } from "react";
import closeIcon from "../../assets/images/icons/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";

import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder?: () => Promise<void>;
  onDeleteOrder?: () => Promise<void>;
  isLoading: boolean;
  onChangeOrderStatus?: () => void;
}

export function OrderModal({
  visible,
  order,
  onClose,
  onCancelOrder,
  onDeleteOrder,
  isLoading,
  onChangeOrderStatus,
}: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button onClick={onClose} type="button">
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "🕒"}
              {order.status === "IN_PRODUCTION" && "🧑‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em produção"}
              {order.status === "DONE" && "Pronto"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  width={56}
                  height={28}
                  src={`http://localhost:3333/uploads/${product.imagePath}`}
                  alt={product.name}
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== "DONE" && onChangeOrderStatus && (
            <button
              onClick={onChangeOrderStatus}
              type="button"
              className="primary"
              disabled={isLoading}
            >
              <span>
                {order.status === "WAITING" && "🧑‍🍳"}
                {order.status === "IN_PRODUCTION" && "✅"}
              </span>
              <strong>
                {order.status === "WAITING" && "Inicar Produção"}
                {order.status === "IN_PRODUCTION" && "Concluir Pedido"}
              </strong>
            </button>
          )}
          {onCancelOrder && (
            <button
              type="button"
              className="secondary"
              onClick={onCancelOrder}
              disabled={isLoading}
            >
              Cancelar pedido
            </button>
          )}
          {onDeleteOrder && (
            <button
              type="button"
              className="secondary delete"
              onClick={onDeleteOrder}
              disabled={isLoading}
            >
              Excluir registo
            </button>
          )}
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
