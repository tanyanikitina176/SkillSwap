import { useLocation, useParams } from "react-router-dom";
import type { User } from "@entities/User/types";
import { SameOffers } from "@widgets/Offers/SameOffers";
import { useState, useEffect } from "react";
import { fetchUsersData } from "../../api/User/User-api";
import { fetchSkillByAuthorId, fetchSkillsData } from "../../api/Skill/Skill-api";
import { AppHeaderUI } from "@widgets/Header";
import styles from "./SkillPage.module.css";
import { Footer } from "@widgets/Footer/Footer";
import { Tag } from "@shared/ui/tag/tag";
import type { Skill } from "../../entities/Skill/SkillType";

export const SkillPage = () => {
  const { userId } = useParams(); // Получаем ID из URL
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const usersData = await fetchUsersData();
        setUsers(usersData);
        
        // Находим пользователя по ID из URL
        const user = usersData.find(u => u.id === userId) || null;
        setCurrentUser(user);
        
        if (user) {
          const skill = await fetchSkillByAuthorId(user.id);
          setCurrentSkill(skill);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [userId]); // Зависимость от userId вместо currentUser

  if (loading) return <div>Загрузка...</div>;
  if (!currentUser) return <div>Пользователь не найден</div>;

  return (
    <div className={styles.skillPage}>
      <AppHeaderUI />

      <main className={styles.main}>
        {/* 
        все что до SameOffers нужно будет убрать или переделать
        есть какая-то проблема с currentUser.name - он меняется только после обновления страницы, 
        но описание и карточки меняются как и нужно
        */}
        <h1 key={currentUser.id}>Профиль пользователя: {currentUser.name}</h1>
        <p>{currentUser.description}</p>
        <h1 key={currentSkill?.id}>Мой навык: {currentSkill?.name}</h1>
        <p>{currentSkill?.description}</p>
        <div className={styles.card__skills}>
          <span className={styles.card__skills_title}>Может научить:</span>
          <div className={styles.card__skills_list}>
            {currentUser.teachingSkills.length <= 2
              ? currentUser.teachingSkills.map((skill) => (
                  <Tag
                    key={skill.id}
                    label={skill.name}
                    backgroundColor={skill.category.color}
                  />
                ))
              : currentUser.teachingSkills
                  // .slice(0, 2)
                  .map((skill) => (
                    <Tag
                      key={skill.id}
                      label={skill.name}
                      backgroundColor={"#E0F7FA"}
                    />
                  ))}
            {/* {currentUser.teachingSkills.length > 2 && (
							<Tag
								label={`+${currentUser.teachingSkills.length - 2}`}
								backgroundColor={'#E8ECF7'}
							/>
						)} */}
          </div>
        </div>

        <SameOffers users={users} currentUser={currentUser} />
      </main>
      <Footer />
    </div>
  );
};
