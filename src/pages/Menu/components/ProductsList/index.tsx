import { useEffect, useRef, useState } from "react";

import editIcon from "../../../../assets/images/icons/edit.svg";
import trashIcon from "../../../../assets/images/icons/trash.svg";

import { Button } from "../../../../components/Button";
import { Table } from "../../../../components/Table";
import { api } from "../../../../service/api";
import { Product } from "../../../../types/Product";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { ProductModal } from "../ProductModal";
import { Container } from "./styles";

interface ProductFormRefProps {
  setFieldsValues: (prodcut: Product) => void;
}

export function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(1);

  const productFormRef = useRef<ProductFormRefProps | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await api.get("/products");

      setProducts(data);
    }

    fetchProducts();
  }, [refresh]);

  function handleEditProduct(product: Product) {
    if (productFormRef.current) {
      productFormRef.current.setFieldsValues(product);
    }
    setSelectedProduct(product);
    setIsEditProductModalOpen(true);
  }

  function handleCloseEditProductModal() {
    setIsEditProductModalOpen(false);
    setSelectedProduct(null);
  }

  function handleRefresh() {
    setRefresh((prevState) => prevState + 1);
    setIsEditProductModalOpen(false);
  }

  return (
    <Container>
      <div className="title">
        <h2>
          Produtos <span>{products.length}</span>
        </h2>
        <Button ghost>Novo Produto</Button>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th style={{ width: "120px" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={`http://localhost:3333/uploads/${product.imagePath}`}
                  alt={product.name}
                />
              </td>
              <td>{product.name}</td>
              <td>
                {product.category.icon} {product.category.name}
              </td>
              <td>{formatCurrency(product.price)}</td>
              <td>
                <div className="actions">
                  <button onClick={() => handleEditProduct(product)}>
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

      <ProductModal
        onAction={handleRefresh}
        ref={productFormRef}
        visible={isEditProductModalOpen}
        title={selectedProduct ? "Editar Produto" : "Novo Produto"}
        onClose={handleCloseEditProductModal}
      />
    </Container>
  );
}
