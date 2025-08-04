export type Skill = {
  id: string;
  name: string;
  CategoryId: string;
  SubcategoryId?: string;
  description: string;
  authorId: string;
  likesCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
  location?: string;
  status?: "active" | "pending" | "completed";
  images?: string[];
};
