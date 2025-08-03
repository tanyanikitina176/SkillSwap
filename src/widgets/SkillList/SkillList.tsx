import type { User } from "@entities/User/types";
import { UserCard } from "@widgets/UserCard/user-card";
import { Button } from "@shared/ui/button/button";
import styles from "./skill-list.module.css";
import { useCallback, useEffect, useState } from "react";
import chevronRightIcon from "@assets/icons/chevron-right.svg";
import chevronDownIcon from "@assets/icons/chevron-down.svg";

interface ISkillListProps {
  users: User[];
  onLikeClick: (id: string) => void;
  onButtonClick: (id: string) => void;
  title: string;
  isShortList: boolean; //отображаем короткий список или выводим все карточки
}

const SkillList = ({
  users,
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
      <div className={styles.list__header}>
        <h3 className={styles.header__title}>{title}</h3>
        {isShortList &&
          (isExpanded ? (
            <Button
              type="tertiary"
              htmlType="button"
              onClick={onButtonLessClick}
              endIcon={<img src={chevronDownIcon} alt="button less" />}
            >
              Свернуть
            </Button>
          ) : (
            <Button
              type="tertiary"
              htmlType="button"
              onClick={onButtonMoreClick}
              endIcon={<img src={chevronRightIcon} alt="button more" />}
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
