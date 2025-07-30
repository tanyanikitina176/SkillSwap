import type { User } from "@entities/User/types";
import { UserCard } from "@widgets/UserCard/user-card";
import { demoUser as user } from "@entities/User/userHelper";
import { Button } from "@shared/ui/button/button";
import styles from "./new-skill-list.module.css";

interface INewSkillListProps {
  users: User[];
  onLikeClick: (id: string) => void;
  onButtonClick: (id: string) => void;
  onButtonMoreClick: () => void;
}

const NewSkillList = ({
  users,
  onLikeClick,
  onButtonClick,
  onButtonMoreClick,
}: INewSkillListProps) => {
  return (
    <div className={styles.new_list}>
      <div className={styles.new_list__header}>
        <h3 className={styles.header__title}>Новое</h3>
        <Button
          type="tertiary"
          htmlType="button"
          onClick={onButtonMoreClick}
        >
          Смотреть все
        </Button>
      </div>
      <div>
        
      </div>
      
      <UserCard
        user={user}
        onLikeClick={onLikeClick}
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default NewSkillList;
