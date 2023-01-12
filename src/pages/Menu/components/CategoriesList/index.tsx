import { useEffect, useRef, useState } from "react";

import editIcon from "../../../../assets/images/icons/edit.svg";
import trashIcon from "../../../../assets/images/icons/trash.svg";

import { Button } from "../../../../components/Button";
import { Table } from "../../../../components/Table";
import { api } from "../../../../service/api";
import { Category } from "../../../../types/Category";
import { CategoryModal } from "../CategoryModal";
import { DeleteCategoryModal } from "../DeleteCategoryModal";
import { Container } from "./styles";

interface CategoryFormRefProps {
  setFieldsValues: (prodcut: Category) => void;
  resetFields: () => void;
}

export function CategoriesList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [refresh, setRefresh] = useState(1);
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] =
    useState(false);

  const categoryFormRef = useRef<CategoryFormRefProps | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await api.get("/categories");

      setCategories(data);
    }

    fetchCategories();
  }, [refresh]);

  function handleRefresh() {
    setRefresh((prevState) => prevState + 1);
    setIsEditCategoryModalOpen(false);
  }

  function handleCloseEditCategoryModal() {
    setIsEditCategoryModalOpen(false);
    setSelectedCategory(null);
  }

  function handleAddCategory() {
    if (categoryFormRef.current) {
      categoryFormRef.current.resetFields();
    }
    setIsEditCategoryModalOpen(true);
  }

  function handleDeleteCategory(category: Category) {
    setSelectedCategory(category);
    setIsDeleteCategoryModalOpen(true);
  }

  function handleEditCategory(category: Category) {
    if (categoryFormRef.current) {
      categoryFormRef.current.setFieldsValues(category);
    }
    setSelectedCategory(category);
    setIsEditCategoryModalOpen(true);
  }

  return (
    <Container>
      <div className="title">
        <h2>
          Categorias <span>{categories.length}</span>
        </h2>
        <Button onClick={handleAddCategory} ghost>
          Nova Categoria
        </Button>
      </div>

      <Table>
        <thead>
          <tr>
            <th style={{ width: "50px" }}>Emoji</th>
            <th>Nome</th>
            <th style={{ width: "140px" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.icon}</td>
              <td>{category.name}</td>
              <td>
                <div className="actions">
                  <button onClick={() => handleEditCategory(category)}>
                    <img src={editIcon} alt="Edit" />
                  </button>
                  <button onClick={() => handleDeleteCategory(category)}>
                    <img src={trashIcon} alt="Trash" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <CategoryModal
        onAction={handleRefresh}
        ref={categoryFormRef}
        visible={isEditCategoryModalOpen}
        title={selectedCategory ? "Editar Categoria" : "Nova Categoria"}
        onClose={handleCloseEditCategoryModal}
      />

      <DeleteCategoryModal
        visible={isDeleteCategoryModalOpen}
        category={selectedCategory}
        onAction={handleRefresh}
        onClose={() => setIsDeleteCategoryModalOpen(false)}
      />
    </Container>
  );
}
