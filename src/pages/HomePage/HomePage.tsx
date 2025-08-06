import { useState, useEffect, useMemo, memo, useCallback } from "react";
import { AppHeaderUI } from "../../widgets/Header/Header";
import { Filtres } from "../../widgets/Filtres/Filtres";
import { Footer } from "../../widgets/Footer/Footer";
import { UserCard } from "../../widgets/UserCard/user-card";
import { SkillListContainer } from "../../widgets/SkillList/SkillListContainer";
import styles from "./HomePage.module.css";
import skillListStyles from "../../widgets/SkillList/skill-list.module.css";
import type { User } from "../../entities/User/types";
import { fetchUsersData } from "../../api/User/User-api";
import { Button } from "@shared/ui/button/button";
import SortIcon from "@assets/icons/sort.svg?react";
import skills from "@public/db/skills.json";
import { sortUsersByCreatedAt } from "@shared/lib/utils/sortedUsersByDate";

type RoleType = "Всё" | "Хочу научиться" | "Могу научить";
type GenderType = "Не имеет значения" | "Мужской" | "Женский";

interface HomeFilters {
  role: RoleType;
  gender: GenderType;
  cities: string[];
  skills: string[];
}

const MemoizedUserCard = memo(UserCard);

export const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClickButtonShowNew, setisClickButtonShowNew] = useState(false);
  const [filters, setFilters] = useState<HomeFilters>({
    role: "Всё",
    gender: "Не имеет значения",
    cities: [],
    skills: [],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const usersData = await fetchUsersData();
        setUsers(usersData);
      } catch (error) {
        console.error("Error loading users:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleRoleChange = useCallback((role: string) => {
    if (["Всё", "Хочу научиться", "Могу научить"].includes(role)) {
      setFilters((prev) => ({ ...prev, role: role as RoleType }));
    }
  }, []);

  const handleGenderChange = useCallback((gender: string) => {
    if (["Не имеет значения", "Мужской", "Женский"].includes(gender)) {
      setFilters((prev) => ({ ...prev, gender: gender as GenderType }));
    }
  }, []);

  const handleCitiesChange = useCallback((cities: string[]) => {
    setFilters((prev) => ({ ...prev, cities }));
  }, []);

  const handleSkillsChange = useCallback((skills: string[]) => {
    setFilters((prev) => ({ ...prev, skills }));
  }, []);

  const handleDetailsClick = useCallback((userId: string) => {
    console.log("Подробнее о пользователе:", userId);
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (filters.gender !== "Не имеет значения") {
        const genderMap = {
          Мужской: "male",
          Женский: "female",
        };
        if (user.gender !== genderMap[filters.gender]) return false;
      }

      if (
        filters.cities.length > 0 &&
        !filters.cities.includes(user.city.name)
      ) {
        return false;
      }

      if (filters.skills.length > 0) {
        const skillsToCheck =
          filters.role === "Всё"
            ? [...user.teachingSkills, ...user.wantToLearnSkills]
            : filters.role === "Могу научить"
              ? user.teachingSkills
              : user.wantToLearnSkills;

        const hasMatch = skillsToCheck.some(
          (skill) =>
            filters.skills.includes(skill.id) ||
            filters.skills.includes(skill.category.id)
        );

        if (!hasMatch) return false;
      }

      return true;
    });
  }, [users, filters]);

  const onClickButtonShowNew = () => {
    setisClickButtonShowNew(!isClickButtonShowNew);
  };

  const skillsUsers = skills.skills;
  const sortedUsersByDate = sortUsersByCreatedAt(filteredUsers, skillsUsers);

  // Проверяем, установлены ли дефолтные фильтры
  const isDefaultFilters = useMemo(() => {
    return (
      filters.role === "Всё" &&
      filters.gender === "Не имеет значения" &&
      filters.cities.length === 0 &&
      filters.skills.length === 0
    );
  }, [filters]);

  if (loading) {
    return <div className={styles.loading}>Загрузка данных...</div>;
  }

  return (
    <div className={styles.homePage}>
      <AppHeaderUI />

      <main className={styles.main}>
        <div className={styles.layout}>
          <Filtres
            onRoleChange={handleRoleChange}
            onGenderChange={handleGenderChange}
            onCitiesChange={handleCitiesChange}
            onSkillsChange={handleSkillsChange}
          />

          <div className={styles.content}>
            {isDefaultFilters ? (
              <SkillListContainer users={filteredUsers} />
            ) : (
              <section className={styles.section}>
                <div className={styles.section__header}>
                  <h2
                    className={skillListStyles.header__title}
                    style={{ marginBottom: "36px" }}
                  >
                    Подходящие предложения: {filteredUsers.length}
                  </h2>
                  <Button
                    type="tertiary"
                    startIcon={<SortIcon />}
                    onClick={onClickButtonShowNew}
                    htmlType="button"
                  >
                    {!isClickButtonShowNew ? "Сначала новые" : "Показать все"}
                  </Button>
                </div>
                <div className={styles.usersGrid}>
                  {isClickButtonShowNew
                    ? sortedUsersByDate.map((user) => (
                        <MemoizedUserCard
                          key={user.id}
                          user={user}
                          onButtonClick={handleDetailsClick}
                        />
                      ))
                    : filteredUsers.map((user) => (
                        <MemoizedUserCard
                          key={user.id}
                          user={user}
                          onButtonClick={handleDetailsClick}
                        />
                      ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
