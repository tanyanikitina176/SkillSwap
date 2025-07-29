import skillsData from '../../../../public/db/skills.json'
import subcategoriesData from '../../../../public/db/skills_subcategories.json'

import type {
	Category,
	Subcategory,
} from '../../../entities/Category/CategoryTypes'

// Динамический импорт иконок
const loadIcon = (name: string): string => {
	return new URL(`/src/assets/icons/${name}.svg`, import.meta.url).href
}

export const CATEGORIES: Array<Category & { subcategories: Subcategory[] }> =
	skillsData.categories.map(category => ({
		...category,
		id: String(category.id),
		icon: loadIcon(category.icon),
		subcategories: subcategoriesData.subcategories
			.filter(sub => sub.categoryId === category.id)
			.map(sub => ({
				...sub,
				id: String(sub.id),
				categoryId: String(sub.categoryId),
			})),
	}))
