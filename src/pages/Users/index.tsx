import { useEffect, useState } from "react";

import usersIcon from "../../assets/images/icons/users.svg";
import editIcon from "../../assets/images/icons/edit.svg";
import trashIcon from "../../assets/images/icons/trash.svg";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { User } from "../../types/Users";
import { Container } from "./styles";
import { api } from "../../service/api";
import { UserModal } from "./components/UserModal";

export function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isOpenUserModal, setIsOpenUserModal] = useState(false);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await api.get("/users");

      setUsers(data);
    }

    fetchUsers();
  }, [refresh]);

  function handleEditUser(user: User) {
    setSelectedUser(user);
    setIsOpenUserModal(true);
  }

  function handleRefresh() {
    setRefresh((prevState) => prevState + 1);
    setIsOpenUserModal(false);
  }

  function handleNewUser() {
    setIsOpenUserModal(true);
    setSelectedUser(null);
  }

  return (
    <Container>
      <Header
        icon={usersIcon}
        title="Cardápio"
        description="Cadastre e gerencie seus usuários"
      />

      <div className="content">
        <div className="title">
          <h2>
            Produtos <span>{users.length}</span>
          </h2>
          <Button onClick={handleNewUser} ghost>
            Novo Usuário
          </Button>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Cargo</th>
              <th style={{ width: "120px" }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === "ADMIN" ? "Admin" : "Graçom"}</td>
                <td>
                  <div className="actions">
                    <button onClick={() => handleEditUser(user)}>
                      <img src={editIcon} alt="Edit" />
                    </button>
                    <button>
                      <img src={trashIcon} alt="Trash" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <UserModal
        onAction={handleRefresh}
        title={selectedUser ? "Editar Usuário" : "Novo Usúario"}
        visible={isOpenUserModal}
        onClose={() => setIsOpenUserModal(false)}
      />
    </Container>
  );
}
