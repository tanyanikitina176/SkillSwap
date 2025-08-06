import { CardUserBig } from "@widgets/CardUserBig/card-user-big.tsx";
import { Button } from "@shared/ui/button/button.tsx";
import styles from "./SkillInfo.module.css";
import LikeIcon from '@assets/icons/like.svg';
import ShareIcon from '@assets/icons/share.svg';
import MoreSquareIcon from '@assets/icons/more-square.svg';
import {UserCardSkillInfo} from "@widgets/SkillInfo/UserCardSkillInfo.tsx";
import type {FC} from "react";
import type { User } from '@entities/User/types'
import type {Skill} from "@entities/Skill/SkillType.ts";
import type {Category, Subcategory} from '@entities/Category/CategoryTypes.ts'


interface SkillInfoProps {
  user: User;
  skill: Skill;
  categories: Category[];
  subcategories: Subcategory[];
}
export const SkillInfo: FC<SkillInfoProps> = ({ user, skill, categories, subcategories}) => {
  const category = categories.find(cat => cat.id === skill.CategoryId);
  const subcategory = subcategories.find(sub => sub.id === skill.SubcategoryId);

  const categoryName = category?.name || "Без категории";
  const subcategoryName = subcategory?.name || "";

  return (
    <div className={styles.gridSkillInfo}>
      <UserCardSkillInfo user={user} />
      <CardUserBig
        header={
          <div className={styles.headerIcons}>
            <button className={styles.iconButton}>
              <img src={LikeIcon} alt="Нравится" />
            </button>
            <button className={styles.iconButton}>
              <img src={ShareIcon} alt="Поделиться" />
            </button>
            <button className={styles.iconButton}>
              <img src={MoreSquareIcon} alt="Узнать больше" />
            </button>
          </div>
        }
        title={skill.name}
        description={skill.description}
        category={categoryName}
        subcategory={subcategoryName}
        buttonsSlot={
          <Button style={{ width: "100%" }}>Предложить обмен</Button>
        }
      ></CardUserBig>
    </div>
  );
};
