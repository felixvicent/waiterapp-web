import { FormEvent, forwardRef, useImperativeHandle, useState } from "react";

import closeIcon from "../../../../assets/images/icons/close-icon.svg";

import { User } from "../../../../types/Users";
import { ModalBody, Overlay } from "./styles";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { Radio } from "../../../../components/Radio";
import { api } from "../../../../service/api";

interface UserModalProps {
  title: String;
  visible: boolean;
  onClose: () => void;
  onAction: () => void;
}

export const UserModal = forwardRef(
  ({ title, visible, onClose, onAction }: UserModalProps, ref) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState<User["role"] | "">();
    const [id, setId] = useState("");
    const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      setFieldsValues: (user: User) => {
        setName(user.name ?? "");
        setEmail(user.email ?? "");
        setRole(user.role ?? "");
        setPassword("");
        setId(user._id);
      },
      resetFields: () => {
        setName("");
        setEmail("");
        setPassword("");
        setRole("");
        setId("");
      },
    }));

    if (!visible) {
      return null;
    }

    async function handleSubmit(event: FormEvent) {
      event.preventDefault();

      if (id) {
        console.log("opa");
      } else {
        await api.post("/users/register", {
          name,
          email,
          password,
          role,
        });
      }

      onAction();
      onClose();
    }

    function handleOpenDeleteUserModal() {
      setIsDeleteUserModalOpen(true);
    }

    return (
      <Overlay>
        <ModalBody>
          <header>
            <strong>{title}</strong>
            <button onClick={onClose} type="button">
              <img src={closeIcon} alt="Icone de fechar" />
            </button>
          </header>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="body">
              <div className="group">
                <Input
                  label="Nome"
                  placeholder="Fulano de Tal"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="group">
                <Input
                  label="E-mail"
                  placeholder="fulano@gmail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="group">
                <Input
                  label="Senha"
                  placeholder=""
                  value={password}
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="group">
                <div className="checkboxes">
                  <Radio
                    onClick={() => setRole("ADMIN")}
                    active={role === "ADMIN"}
                    label="Admin"
                  />
                  <Radio
                    onClick={() => setRole("WAITER")}
                    active={role === "WAITER"}
                    label="Graçom"
                  />
                </div>
              </div>
            </div>

            <div className="footer">
              <Button type="button" onClick={handleOpenDeleteUserModal} ghost>
                Excluir Produto
              </Button>

              <Button>Salvar Alterações</Button>
            </div>
          </form>
        </ModalBody>

        {/* <DeleteUserModal
          visible={isDeleteProductModalOpen}
          image={image}
          category={category}
          name={name}
          onAction={onAction}
          price={price}
          productId={id}
          onClose={() => setIsDeleteProductModalOpen(false)}
        /> */}
      </Overlay>
    );
  }
);
