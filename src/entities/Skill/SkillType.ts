export type Skill = {
  id: string;
  title: string;
  CategoryId: string;
  SubcategoryId?: string;
  description: string;
  author: {
    // Пока оставляем, но потом заменим на authorId: string
    id: string;
    name: string;
    age?: number;
    city: string;
    bio?: string;
    gender?: "male" | "female" | "other";
    avatar?: string;
  };
  likesCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
  location?: string;
  status?: "active" | "pending" | "completed";
};
