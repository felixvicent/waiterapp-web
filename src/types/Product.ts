import { Category } from "./Category";
import { Ingredient } from "./Ingredient";

export interface Product {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
  category: Category;
  description: string;
  ingredients: Ingredient[];
}
