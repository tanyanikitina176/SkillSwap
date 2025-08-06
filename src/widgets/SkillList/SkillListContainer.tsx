import type { Skill, User } from "@entities/User/types";
import SkillList from "./SkillList";
import sortBy from "lodash/sortBy";
import styles from "./skill-list-container.module.css";
import skills from "@public/db/skills.json";
import { sortUsersByCreatedAt } from "@shared/lib/utils/sortedUsersByDate";

interface ISkillListContainer {
  users: User[];
}

export const SkillListContainer = ({ users }: ISkillListContainer) => {
  const popularUsers = sortBy(users, ["likes.length"]).reverse();
  const skillsUsers: Skill[] = skills.skills;
  const sortedUsersByDate = sortUsersByCreatedAt(users, skillsUsers);

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
        users={sortedUsersByDate}
        onButtonClick={() => {}}
        onLikeClick={() => {}}
        title="Новое"
        isShortList={true}
      />
      <SkillList
        users={users}
        onButtonClick={() => {}}
        onLikeClick={() => {}}
        title="Рекомендуем"
        isShortList={false}
      />
    </div>
  );
};
