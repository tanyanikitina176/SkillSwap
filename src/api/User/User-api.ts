import type { User, City } from "../../entities/User/types";
import type { Subcategory, Category } from "../../entities/Category/CategoryTypes";
import type { Skill } from "@entities/Skill/SkillType";

interface FetchedUser extends Omit<User, 'city' | 'teachingSkills' | 'wantToLearnSkills'> {
  cityId: string;
  teachingSkills: string[];   
  wantToLearnSkills: string[];   
}

export type EnrichedSkill = Skill & {
  subcategory: Subcategory;
  category: Category;
};

export const fetchUsersData = async (): Promise<User[]> => {
  try {
    const [citiesRes, subcategoriesRes, categoriesRes, usersRes, skillsRes] = 
      await Promise.all([
        fetch('/db/cities.json').then(res => res.json()),
        fetch('/db/skills_subcategories.json').then(res => res.json()),
        fetch('/db/skills_categories.json').then(res => res.json()),
        fetch('/db/users.json').then(res => res.json()),
        fetch('/db/skills.json').then(res => res.json())
      ]);

    return (usersRes.users || []).map((user: FetchedUser) => {
      const cityData = citiesRes.cities.find((c: City) => c.id === user.cityId);
      const city = cityData || { id: "unknown", name: "Неизвестный город" };

      const formatSkills = (skills: (string | Skill)[]):EnrichedSkill[] => {
        return skills
          .map((element) => {
            const skillId = typeof element === 'string' ? element : element.id;

            const skill = skillsRes.skills.find((s: Skill) => s.id === skillId);
            if (!skill) return null;

             const subcategory = subcategoriesRes.subcategories.find((s: Subcategory) => s.id === skill.SubcategoryId);
            if (!subcategory) return null;
            
            const category = categoriesRes.categories.find((c: Category) => c.id === skill.CategoryId);
            return {
              ...skill,
              subcategory: subcategory || { id: "unknown", name: "Неизвестная подкатегория", color: "#E8ECF7", icon: "" },
              category: category || { id: "unknown", name: "Неизвестная категория", color: "#E8ECF7", icon: "" }
            };
          })
          .filter(Boolean) as EnrichedSkill[];
      };

      return {
        ...user,
        id: String(user.id),
        city,
        teachingSkills: formatSkills(user.teachingSkills),
        wantToLearnSkills: formatSkills(user.wantToLearnSkills),
        exchangesCount: Math.floor(Math.random() * 10) + 1
      } as User;
    });
  } catch (error) {
    console.error("Error loading users data:", error);
    throw error;
  }
};