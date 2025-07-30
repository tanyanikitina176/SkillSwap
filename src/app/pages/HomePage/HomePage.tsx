import { useState, useEffect } from "react";
import { AppHeaderUI } from "../../../widgets/Header/Header";
import { Filtres } from "../../../widgets/Filtres/Filtres";
import { Footer } from "../../../widgets/Footer/Footer";
import { UserCard } from "../../../widgets/UserCard/user-card";
import styles from "./HomePage.module.css";
import type { User} from "../../../entities/User/types";
import { fetchUsersData } from "../../../api/User/User-api";

export const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const usersData = await fetchUsersData();
        setUsers(usersData);
      } catch (error) {
        console.error("Error in HomePage:", error);
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