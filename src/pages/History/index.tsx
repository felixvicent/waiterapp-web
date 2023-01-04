import { useEffect, useMemo, useState } from "react";

import historyIcon from "../../assets/images/icons/order.svg";
import eyeIcon from "../../assets/images/icons/eye.svg";
import trashIcon from "../../assets/images/icons/trash.svg";
import filterIcon from "../../assets/images/icons/filter.svg";

import { Header } from "../../components/Header";
import { api } from "../../service/api";
import { Order } from "../../types/Order";
import { Container } from "./style";
import { Table } from "../../components/Table";
import { OrderModal } from "../../components/OrderModal";
import { formatDate } from "../../utils/formatDate";
import { formatCurrency } from "../../utils/formatCurrency";

export function History() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderDirection, setOrderDirection] = useState<"DESC" | "ASC">("DESC");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const orderedOrder = useMemo(
    () => orders.sort(orderByDate),
    [orders, orderDirection]
  );

  useEffect(() => {
    async function getOrdersHistory() {
      const { data } = await api.get("/orders?archived=1");

      setOrders(data);
    }

    getOrdersHistory();
  }, []);

  function orderByDate(a: Order, b: Order) {
    const aDate = new Date(a.createdAt).getTime();
    const bDate = new Date(b.createdAt).getTime();

    if (orderDirection === "DESC") {
      if (aDate > bDate) {
        return 1;
      }

      if (aDate < bDate) {
        return -1;
      }
    }
    if (orderDirection === "ASC") {
      if (aDate < bDate) {
        return 1;
      }

      if (aDate > bDate) {
        return -1;
      }
    }
    return 0;
  }

  function handleChangeOrder() {
    setOrderDirection((prevState) => (prevState === "DESC" ? "ASC" : "DESC"));
  }

  function handleShowOrder(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  async function deleteOrder(id: string) {
    setIsLoading(true);
    await api.delete(`/orders/${id}`);
    setIsLoading(false);

    setOrders((prevState) => prevState.filter((order) => order._id !== id));
  }

  async function handleDeleteOrder() {
    deleteOrder(selectedOrder?._id ?? "");
    handleCloseModal();
  }

  return (
    <Container>
      <Header
        icon={historyIcon}
        title="Histórico"
        description="Visualize pedidos anteriores"
      />

      <div className="content">
        <div className="title">
          <h2>Pedidos</h2>
          <span>{orders.length}</span>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Mesa</th>
              <th>
                <button className="filter" onClick={handleChangeOrder}>
                  Data
                  <img src={filterIcon} alt="Filter" />
                </button>
              </th>
              <th>Nome</th>
              <th>Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {orderedOrder.map((order) => (
              <tr key={order._id}>
                <td>{order.table}</td>
                <td>{formatDate(order.createdAt)}</td>
                <td>
                  {order.products
                    .reduce((acc, curr) => acc + curr.product.name + ", ", "")
                    .slice(0, -2)}
                </td>
                <td>
                  {formatCurrency(
                    order.products.reduce(
                      (acc, curr) => acc + curr.quantity * curr.product.price,
                      0
                    )
                  )}
                </td>
                <td>
                  <div className="actions">
                    <button onClick={() => handleShowOrder(order)}>
                      <img src={eyeIcon} alt="Eye" />
                    </button>
                    <button onClick={() => deleteOrder(order._id)}>
                      <img src={trashIcon} alt="Trash" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <OrderModal
        onDeleteOrder={handleDeleteOrder}
        onClose={handleCloseModal}
        order={selectedOrder}
        visible={isModalVisible}
        isLoading={isLoading}
      />
    </Container>
  );
}
