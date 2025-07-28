import skillsData from '../../../public/db/skills.json';
import subcategoriesData from '../../../public/db/skills_subcategories.json';
import type { Category, Subcategory } from '../../entities/Category/CategoryTypes';

export const getCategories = (): Array<Category & { subcategories: Subcategory[] }> => {
  return skillsData.categories.map(category => ({
    ...category,
    id: String(category.id),
    subcategories: subcategoriesData.subcategories
      .filter(sub => sub.categoryId === category.id)
      .map(sub => ({
        ...sub,
        id: String(sub.id),
        categoryId: String(sub.categoryId)
      }))
  }));
};

export const CATEGORIES = getCategories();