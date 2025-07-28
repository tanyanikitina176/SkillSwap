export type User = {
  id: number;
  name: string;
  age: number;
  gender: "male" | "female";
  cityId?: number;
  wantToLearnSkills?: number[];
  teachingSkills?: number[];
  photo?: string;
  description?: string;
};

export type UserGender = "male" | "female";
