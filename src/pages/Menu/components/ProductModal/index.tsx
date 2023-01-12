/* eslint-disable indent */
import {
  FormEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import closeIcon from "../../../../assets/images/icons/close-icon.svg";
import imageIcon from "../../../../assets/images/icons/image.svg";
import noImg from "../../../../assets/images/no-image.png";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { api } from "../../../../service/api";
import { Category } from "../../../../types/Category";
import { Ingredient } from "../../../../types/Ingredient";
import { Product } from "../../../../types/Product";
import { DeleteProductModal } from "../DeleteProductModal";
import { IngredientsModal } from "../IngredientModal";

import { CategoryButton, IngredientItem, ModalBody, Overlay } from "./styles";

interface ProductModalProps {
  title: String;
  visible: boolean;
  onClose: () => void;
  onAction: () => void;
}

export const ProductModal = forwardRef(
  ({ title, visible, onClose, onAction }: ProductModalProps, ref) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState("");
    const [price, setPrice] = useState<string | number>(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState<Category | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
      null
    );
    const [categories, setCategories] = useState<Category[]>([]);
    const [isIngredientsModalOpen, setIsIngredientsModalOpen] = useState(false);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>(
      []
    );
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [newImage, setNewImage] = useState<File | null>(null);
    const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] =
      useState(false);

    useImperativeHandle(ref, () => ({
      setFieldsValues: (product: Product) => {
        setName(product.name ?? "");
        setImage(product.imagePath ?? "");
        setDescription(product.description ?? "");
        setCategory(product.category);
        setSelectedCategory(product.category);
        setPrice(product.price);
        setImagePreview(null);
        setId(product._id);
        setSelectedIngredients(
          product.ingredients.map((ingredient) => ingredient._id)
        );
      },
      resetFields: () => {
        setName("");
        setImage("");
        setDescription("");
        setCategory(null);
        setSelectedCategory(null);
        setPrice(0);
        setImagePreview(null);
        setId("");
        setSelectedIngredients([]);
      },
    }));

    useEffect(() => {
      async function fetchCategories() {
        const { data } = await api.get("/categories");

        setCategories(data);
      }

      fetchCategories();
    }, []);

    useEffect(() => {
      async function fetchIngredients() {
        const { data } = await api.get("/ingredients");

        setIngredients(data);
      }
      fetchIngredients();
    }, [isIngredientsModalOpen]);

    if (!visible) {
      return null;
    }

    function handleIngredients(id: string) {
      if (selectedIngredients.includes(id)) {
        setSelectedIngredients((prevState) =>
          prevState.filter((ingredient) => ingredient !== id)
        );
      } else {
        setSelectedIngredients((prevState) => [...prevState, id]);
      }
    }

    function handleChangeCategory(category: Category | null) {
      if (category) {
        setSelectedCategory(category);
        setCategory(category);
      }
    }

    async function handleSubmit(event: FormEvent) {
      event.preventDefault();

      const formData = new FormData();

      formData.append("name", name);
      formData.append("price", price.toString());
      formData.append("category", category?._id ?? "");
      formData.append("description", description);
      formData.append("image", newImage as File);
      formData.append("ingredients", JSON.stringify(selectedIngredients));

      if (id) {
        await api.put(`/products/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await api.post("/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      onAction();
    }

    function handleImageChange(event: FormEvent<HTMLInputElement>) {
      const target = event.target as HTMLInputElement;
      const files = target.files;

      if (!!files && files.length > 0) {
        // @ts-ignore
        setImagePreview(URL.createObjectURL(files[0]));
        setNewImage(files[0]);
      }
    }

    function handleOpenDeleteProductModal() {
      setIsDeleteProductModalOpen(true);
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
              <div className="left">
                <span>Imagem</span>
                <div className="group image-input">
                  <label htmlFor="image-input">
                    <img
                      src={
                        imagePreview
                          ? imagePreview
                          : image
                          ? `http://localhost:3333/uploads/${image}`
                          : noImg
                      }
                      alt={name}
                    />
                    <input
                      type="file"
                      id="image-input"
                      onChange={handleImageChange}
                    />

                    <div className="image-button">
                      <img src={imageIcon} alt="Imagem" /> Alterar imagem
                    </div>
                  </label>
                </div>

                <div className="group">
                  <Input
                    label="Nome do Produto"
                    placeholder="Quatro Queijos"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                <div className="group">
                  <Input
                    label="Descrição"
                    placeholder="Quatro QueijosPizza de Quatro Queijos com borda tradicional"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    addon="Máximo 110 caracteres"
                  />
                </div>

                <div className="group">
                  <Input
                    label="Preço"
                    placeholder="Ex: 40,00"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>

                <div className="categories">
                  {category ? (
                    <>
                      <label>Categoria</label>
                      <button type="button" onClick={() => setCategory(null)}>
                        <span>{category.icon}</span> {category.name}
                        <strong>Alterar</strong>
                      </button>
                    </>
                  ) : (
                    <div>
                      <label>Categoria</label>
                      <div className="select-categories">
                        {categories.map((category) => (
                          <CategoryButton
                            onClick={() => handleChangeCategory(category)}
                            selected={category._id === selectedCategory?._id}
                            key={category._id}
                          >
                            <span>{category.icon}</span>
                            {category.name}
                          </CategoryButton>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="right">
                <div className="top-right">
                  <span>Ingredientes</span>
                  <Button
                    type="button"
                    onClick={() => setIsIngredientsModalOpen(true)}
                    ghost
                  >
                    Novo ingrediente
                  </Button>
                </div>

                <div className="ingredients">
                  <Input
                    type="search"
                    label="Busque o ingrediente"
                    placeholder="Ex: Quatro Queijos"
                  />

                  <div className="ingredient-list">
                    {ingredients.map((ingredient) => (
                      <IngredientItem
                        key={ingredient._id}
                        onClick={() => handleIngredients(ingredient._id)}
                        isChecked={selectedIngredients.includes(ingredient._id)}
                      >
                        <div className="left">
                          <span>{ingredient.icon}</span>
                          {ingredient.name}
                        </div>
                        <div className="checkbox"></div>
                      </IngredientItem>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="footer">
              <Button
                type="button"
                onClick={handleOpenDeleteProductModal}
                ghost
              >
                Excluir Produto
              </Button>

              <Button>Salvar Alterações</Button>
            </div>
          </form>
        </ModalBody>

        <IngredientsModal
          visible={isIngredientsModalOpen}
          onClose={() => setIsIngredientsModalOpen(false)}
        />

        <DeleteProductModal
          visible={isDeleteProductModalOpen}
          image={image}
          category={category}
          name={name}
          onAction={onAction}
          price={price}
          productId={id}
          onClose={() => setIsDeleteProductModalOpen(false)}
        />
      </Overlay>
    );
  }
);
