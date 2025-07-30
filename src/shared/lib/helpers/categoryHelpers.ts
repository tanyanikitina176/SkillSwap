import skillsData from '@public/db/skills.json'
import subcategoriesData from '@public/db/skills_subcategories.json'

import type {
	Category,
	Subcategory,
} from '@entities/Category/CategoryTypes'

// Динамический импорт иконок
const loadIcon = (name: string): string => {
	return new URL(`/src/assets/icons/${name}.svg`, import.meta.url).href
}

export const CATEGORIES: Array<Category & { subcategories: Subcategory[] }> =
	skillsData.categories.map(category => {
		const categoryObj: Category = {
			id: String(category.id),
			name: category.name,
			color: category.color,
			icon: loadIcon(category.icon),
		}

		return {
			...categoryObj,
			subcategories: subcategoriesData.subcategories
				.filter(sub => sub.categoryId === String(category.id))
				.map(sub => ({
					id: String(sub.id),
					name: sub.name,
					category: categoryObj,
				})),
		}
	})
