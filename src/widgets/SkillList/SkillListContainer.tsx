import type { User } from "@entities/User/types";
import SkillList from "./SkillList";
import sortBy from "lodash/sortBy";
import styles from "./skill-list-container.module.css";

interface ISkillListContainer {
  users: User[];
}

export const SkillListContainer = ({ users }: ISkillListContainer) => {
  const popularUsers = sortBy(users, ["likes.length"]).reverse();
  return (
    <div className={styles.skill_list__container}>
      <SkillList
        users={popularUsers}
        onButtonClick={() => {}}
        onLikeClick={() => {}}
        title="Популярное"
        isShortList={true}
      />
      <SkillList
        users={users}
        onButtonClick={() => {}}
        onLikeClick={() => {}}
        title="Новое"
        isShortList={true}
      />
    </div>
  );
};
