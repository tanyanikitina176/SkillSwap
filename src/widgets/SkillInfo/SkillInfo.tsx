import { CardUserBig } from "@widgets/CardUserBig/card-user-big.tsx";
import { Button } from "@shared/ui/button/button.tsx";
import styles from "./SkillInfo.module.css";
import LikeIcon from "@assets/icons/like.svg";
import ShareIcon from "@assets/icons/share.svg";
import clockIcon from "@assets/icons/clock.svg";
import MoreSquareIcon from "@assets/icons/more-square.svg";
import { UserCardSkillInfo } from "@widgets/SkillInfo/UserCardSkillInfo.tsx";
import { type FC, useState } from "react";
import type { User } from "@entities/User/types";
import type { UserSkill } from "@entities/Skill/SkillType.ts";

interface SkillInfoProps {
  user: User;
  skill: UserSkill | null;
}

export const SkillInfo: FC<SkillInfoProps> = ({
  user,
  skill,
}) => {
  const [exchangeOffered, setExchangeOffered] = useState(false);

  const handleOfferClick = () => {
    setExchangeOffered(true);
  };
  // Проверяем наличие skill
  if (!skill) {
    return <div>Информация о навыке не найдена</div>;
  }

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
        category={skill.category?.name || "Без категории"}
        subcategory={skill.subcategory?.name || ""}
        buttonsSlot={
          <Button
            style={{ width: "100%" }}
            onClick={handleOfferClick}
            type={exchangeOffered ? "tertiary" : "primary"}
            startIcon={exchangeOffered ? <img src={clockIcon} alt="Ожидание" /> : undefined}
          >
            {exchangeOffered ? "Обмен предложен" : "Предложить обмен"}
          </Button>
        }
      ></CardUserBig>
    </div>
  );
};
