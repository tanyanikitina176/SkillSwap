import type { Category, Subcategory } from '../Category/CategoryTypes'

export type Skill = {
  id: string; 
  title: string; 
  category: Category; 
  subcategory?: Subcategory; 
  description: string; 
  author: {         // TODO: заменить на User или userId когда тип будет создан
    id: string;
    name: string;
    age?: number;
    city: string;
    bio?: string;
    gender?: 'male' | 'female' | 'other';
    avatar?: string;
  };
  likesCount?: number; 
  createdAt?: Date; // Дата создания (возможно понадобится для сортировки например в раздел "новое")
  updatedAt?: Date; // Дата последнего обновления (возможно понадобится для сортировки )
  location?: string; // Уточнение места (адрес например)
  status?: 'active' | 'pending' | 'completed';
};