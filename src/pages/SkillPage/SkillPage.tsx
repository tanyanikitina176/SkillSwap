import { useLocation } from 'react-router-dom';
import type { User } from '@entities/User/types';
import { SameOffers } from '@widgets/Offers/SameOffers';
import { useState, useEffect } from 'react';
import { fetchUsersData } from "../../api/User/User-api";
import { AppHeaderUI } from '@widgets/Header';
import styles from "./SkillPage.module.css";
import { Footer } from '@widgets/Footer/Footer';

export const SkillPage = () => {
  const location = useLocation();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const usersData = await fetchUsersData();
        setUsers(usersData);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };
      loadData();
    }, []);

  const currentUser = location.state?.user as User;
  if (!currentUser) {
    return <div>Данные пользователя не загружены</div>;
  }
  // console.log(currentUser); оставлю вдруг пригодится
  return (
    <div className={styles.skillPage}>
      <AppHeaderUI />

      <main className={styles.main}>
        {/* 
        две строчки ниже после убрать или переделать
        есть какая-то проблема с currentUser.name - он меняется только после обновления страницы, 
        но описание и карточки меняются как и нужно
        */}
        <h1>Профиль пользователя: {currentUser.name}</h1>
        <p>{currentUser.description}</p>
        
        <SameOffers 
          users={users}
          currentUser={currentUser}
        />
      </main>
      <Footer />
    </div>
  );
};