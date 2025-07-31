import type { User } from "@entities/User/types";
import { UserCard } from "@widgets/UserCard/user-card";
import { Button } from "@shared/ui/button/button";
import styles from "./skill-list.module.css";
import { useCallback, useEffect, useState } from "react";

interface ISkillListProps {
  users: User[];
  onLikeClick: (id: string) => void;
  onButtonClick: (id: string) => void;
  title: string;
  isShortList: boolean; //отображаем короткий список или выводим все карточки
}

const SkillList = ({
  users,
  onLikeClick,
  onButtonClick,
  title,
  isShortList,
}: ISkillListProps) => {
  const [usersToShow, setUsersToShow] = useState<User[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    const listUsers = isShortList ? users.slice(0, 3) : users;
    setUsersToShow(listUsers);
  }, [isShortList, users]);

  const onButtonMoreClick = useCallback(() => {
    setUsersToShow(users);
    setIsExpanded(true);
  }, [users]);

  const onButtonLessClick = useCallback(() => {
    setIsExpanded(false);
    setUsersToShow(users.slice(0, 3));
  }, [users]);

  return (
    <div className={styles.skill_list}>
      <div className={styles.new_list__header}>
        <h3 className={styles.header__title}>{title}</h3>
        {isShortList &&
          (isExpanded ? (
            <Button
              type="tertiary"
              htmlType="button"
              onClick={onButtonLessClick}
            >
              Свернуть
            </Button>
          ) : (
            <Button
              type="tertiary"
              htmlType="button"
              onClick={onButtonMoreClick}
            >
              Смотреть все
            </Button>
          ))}
      </div>
      <div className={styles.cards_container}>
        {usersToShow.map((user) => (
          <UserCard
            user={user}
            onLikeClick={() => {}}
            onButtonClick={() => {}}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
