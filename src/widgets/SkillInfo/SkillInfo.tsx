import { CardUserBig } from "@widgets/CardUserBig/card-user-big.tsx";
import { Button } from "@shared/ui/button/button.tsx";
import styles from "./SkillInfo.module.css";
import LikeIcon from '@assets/icons/like.svg';
import ShareIcon from '@assets/icons/share.svg';
import MoreSquareIcon from '@assets/icons/more-square.svg';
import {UserCardSkillInfo} from "@widgets/SkillInfo/UserCardSkillInfo.tsx";


const mockUser = {
  id: "1",
  name: "Анна",
  age: 28,
  gender: "male" as const,
  city: { id: "1", name: "Москва" },
  photo: "/db/users-photo/anna.jpg",
  description: "Описание Анны...",
  likes: ["2", "5", "8", "9"],
  teachingSkills: [
    {
      id: "111",
      name: "Английский язык",
      category: { color: "#FFD700" },
    },
    {
      id: "127",
      name: "Программирование",
      category: { color: "#87CEFA" },
    },
    {
      id: "999",
      name: "Скейтбординг",
      category: { color: "#fddde6" },
    },
  ],
  wantToLearnSkills: [
    {
      id: "106",
      name: "Рисование",
      category: { color: "#90EE90" },
    },
    {
      id: "124",
      name: "Кулинария",
      category: { color: "#FFC0CB" },
    },
  ],
};
export const SkillInfo = () => {
  return (
    <div className={styles.gridSkillInfo}>
      <UserCardSkillInfo user={mockUser} />
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
        title={"fыаыsdsfsfdfsfsfsfsfsfsgsgdgdgdgdааыаыаыаыаы"}
        description={"fsfыаdfsfsfsfsfsfsfsfsfsfsfsfsfыаыааыаыаыа"}
        category={"sfdsfsfsfsfsfsfsfsfsыаыаыf"}
        subcategory={"sfыаыsfsfsfsfsfsfsfsfsfsfsаыfs"}
        buttonsSlot={
          <Button style={{ width: "100%" }}>Предложить обмен</Button>
        }
      ></CardUserBig>
    </div>
  );
};
