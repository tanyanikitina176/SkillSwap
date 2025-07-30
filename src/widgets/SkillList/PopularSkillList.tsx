import { type FC, useState } from "react";
import type { User } from "@entities/User/types.ts";
import { Button } from "@shared/ui/button/button.tsx";
import { UserCard } from "@widgets/UserCard/user-card.tsx";
import styles from "./PopularSkilList.module.css";

interface IPropsPopularSkillList {
  users: User[];
  onCardClick: (id: string) => void;
  onLikeClick: (id: string) => void;
}

export const PopularSkillList: FC<IPropsPopularSkillList> = ({
  users,
  onCardClick,
  onLikeClick,
}) => {
  const [showAll, setShowAll] = useState(false);

  //заглушка если пользователей популярных - нет
  if (!users || users.length === 0) {
    return <p>Скоро здесь будут появятся популярные пользователи</p>;
  }

  const visiblePopularUsers = showAll ? users : users.slice(0, 3);
  return (
    <div>
      <section className={styles.mainSection}>
        <div className={styles.mainSection__grid}>
          <div className={styles.gridHeader}>
            <h1 className={styles.mainSection__title}>Популярное</h1>
            {users.length > 3 && (
              <Button
                type={"tertiary"}
                htmlType={"button"}
                extraClass={styles.showAllButton}
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "Свернуть" : "Смотреть все"}
              </Button>
            )}
          </div>
          {visiblePopularUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onLikeClick={onLikeClick}
              onButtonClick={onCardClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
};