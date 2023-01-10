import { Category } from "./Category";

export interface Product {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
  category: Category;
  description: string;
}
