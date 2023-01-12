/* eslint-disable indent */
import { FormEvent, forwardRef, useImperativeHandle, useState } from "react";

import closeIcon from "../../../../assets/images/icons/close-icon.svg";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { api } from "../../../../service/api";
import { Category } from "../../../../types/Category";
import { DeleteCategoryModal } from "../DeleteCategoryModal";

import { ModalBody, Overlay } from "./styles";

interface CategoryModalProps {
  title: String;
  visible: boolean;
  onClose: () => void;
  onAction: () => void;
}

export const CategoryModal = forwardRef(
  ({ title, visible, onClose, onAction }: CategoryModalProps, ref) => {
    const [name, setName] = useState("");
    const [emoji, setEmoji] = useState("");
    const [id, setId] = useState("");
    const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] =
      useState(false);

    useImperativeHandle(ref, () => ({
      setFieldsValues: (category: Category) => {
        setName(category.name ?? "");
        setEmoji(category.icon ?? "");
        setId(category._id);
      },
      resetFields: () => {
        setName("");
        setEmoji("");
        setId("");
      },
    }));

    if (!visible) {
      return null;
    }

    async function handleSubmit(event: FormEvent) {
      event.preventDefault();

      if (id) {
        await api.put(`/categories/${id}`, {
          name,
          icon: emoji,
        });
      } else {
        await api.post("/categories", {
          name,
          icon: emoji,
        });
      }

      onAction();
    }

    function handleDeleteCategory() {
      setIsDeleteCategoryModalOpen(true);
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
                  label="Emoji"
                  placeholder="Ex: 🧀"
                  value={emoji}
                  onChange={(event) => setEmoji(event.target.value)}
                />
              </div>

              <div className="group">
                <Input
                  label="Nome da Categoria"
                  placeholder="Ex: Lanches"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>

            <div className="footer">
              {id && (
                <Button type="button" onClick={handleDeleteCategory} ghost>
                  Excluir Categoria
                </Button>
              )}
              <Button disabled={!name || !emoji}>Salvar Alterações</Button>
            </div>
          </form>
        </ModalBody>
        <DeleteCategoryModal
          visible={isDeleteCategoryModalOpen}
          category={{ _id: id, icon: emoji, name }}
          onAction={onAction}
          onClose={() => setIsDeleteCategoryModalOpen(false)}
        />
      </Overlay>
    );
  }
);
