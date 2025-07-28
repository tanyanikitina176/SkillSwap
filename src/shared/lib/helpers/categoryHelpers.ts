import { CATEGORIES } from "../constants/constants.ts";

// Ищем категорию по id
export const getCategoryById = (id: string) =>
  CATEGORIES.find((category) => category.id === id);

// Ищем субкатегорию по id
export const getSubcategoryById = (
  categoryId: string,
  subcategoryId: string,
) => {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find((sub) => sub.id === subcategoryId);
};
