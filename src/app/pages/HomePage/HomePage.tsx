import { useState, useEffect } from "react";
import { AppHeaderUI } from "../../../widgets/Header/Header";
import { Filtres } from "../../../widgets/Filtres/Filtres";
import { Footer } from "../../../widgets/Footer/Footer";
import { UserCard } from "../../../widgets/UserCard/user-card";
import styles from "./HomePage.module.css";
import type { User, City } from "../../../entities/User/types";
import type { Subcategory, Category } from "../../../entities/Category/CategoryTypes";

interface FetchedUser extends Omit<User, 'city'> {
  cityId: string;
}

export const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "wantToLearn" | "canTeach"
  >("all");
  const [users, setUsers] = useState<User[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [citiesRes, subcategoriesRes, categoriesRes, usersRes] = 
          await Promise.all([
            fetch('/db/cities.json').then(res => res.json()),
            fetch('/db/skills_subcategories.json').then(res => res.json()),
            fetch('/db/skills.json').then(res => res.json()),
            fetch('/db/users.json').then(res => res.json())
          ]);

        const usersWithFormattedData = (usersRes.users || []).map((user: FetchedUser) => {
          const cityData = citiesRes.cities.find((c: City) => c.id === user.cityId);
          const city = cityData || { id: "unknown", name: "Неизвестный город" };

          const formattedTeachingSkills = user.teachingSkills
            .map((skill: string | Subcategory) => {
              const skillId = typeof skill === 'string' ? skill : skill.id;
              const subcategory = subcategoriesRes.subcategories.find((s: Subcategory) => s.id === skillId);
              if (!subcategory) return null;
              
              const category = categoriesRes.categories.find((c: Category) => c.id === subcategory.categoryId);
              return {
                ...subcategory,
                category: category || { id: "unknown", name: "Неизвестная категория", color: "#E8ECF7", icon: "" }
              };
            })
            .filter(Boolean) as Subcategory[];

          const formattedWantToLearnSkills = user.wantToLearnSkills
            .map((skill: string | Subcategory) => {
              const skillId = typeof skill === 'string' ? skill : skill.id;
              const subcategory = subcategoriesRes.subcategories.find((s: Subcategory) => s.id === skillId);
              if (!subcategory) return null;
              
              const category = categoriesRes.categories.find((c: Category) => c.id === subcategory.categoryId);
              return {
                ...subcategory,
                category: category || { id: "unknown", name: "Неизвестная категория", color: "#E8ECF7", icon: "" }
              };
            })
            .filter(Boolean) as Subcategory[];

          return {
            ...user,
            id: String(user.id),
            city,
            teachingSkills: formattedTeachingSkills,
            wantToLearnSkills: formattedWantToLearnSkills,
            exchangesCount: Math.floor(Math.random() * 10) + 1
          } as User;
        });

        setCities(citiesRes.cities || []);
        setSubcategories(subcategoriesRes.subcategories || []);
        setCategories(categoriesRes.categories || []);
        setUsers(usersWithFormattedData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleDetailsClick = (userId: string) => {
    console.log("Подробнее о пользователе:", userId);
  };

  if (loading) {
    return <div className={styles.loading}>Загрузка данных...</div>;
  }

  return (
    <div className={styles.homePage}>
      <AppHeaderUI />

      <main className={styles.main}>
        <div className={styles.layout}>
          <Filtres 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
        
          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Популярное</h2>
              <div className={styles.usersGrid}>
                {users.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onButtonClick={() => handleDetailsClick(user.id)}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;