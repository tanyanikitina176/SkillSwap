import { BrowserRouter } from "react-router-dom";
import { Filtres } from "@widgets/Filtres/Filtres";
import { Footer } from "@widgets/Footer/Footer";
import "./App.css";
import { CategoryDisplay } from "@widgets/SkillsPanel/SkillsPanel";
import { UserCard } from "@widgets/UserCard/user-card";
import { demoUser as user } from "@entities/User/userHelper";
import { PopularSkillList } from "@widgets/SkillList/PopularSkillList.tsx";
import type {UserGender} from "@entities/User/types.ts";

const demoUsers = [
  {
    id: "18",
    name: "Елена",
    age: 40,
    gender: "female" as UserGender,
    city: { id: "7", name: "Челябинск" },
    wantToLearnSkills: [
      {
        id: "7",
        category: {
          id: "2",
          name: "Творчество и искусство",
          color: "var(--tag-creative)",
          icon: "palette",
        },
        name: "Музыка и звук",
      },
      {
        id: "8",
        category: {
          id: "2",
          name: "Творчество и искусство",
          color: "var(--tag-creative)",
          icon: "palette",
        },
        name: "Фотография и видео",
      },
    ],
    teachingSkills: [
      {
        id: "15",
        category: {
          id: "3",
          name: "Иностранные языки",
          color: "var(--tag-languages)",
          icon: "global",
        },
        name: "Китайский язык",
      },
      {
        id: "16",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Личностное развитие",
      },
      {
        id: "17",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Психология и коммуникации",
      },
      {
        id: "18",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Обучение и преподавание",
      },
      {
        id: "27",
        category: {
          id: "6",
          name: "Здоровье и лайфстайл",
          color: "var(--tag-health)",
          icon: "lifestyle",
        },
        name: "Организация пространства",
      },
    ],
    photo: "../db/users-photo/elena.jpg",
    description:
      "Нутрициолог и инструктор по йоге. Помогаю людям находить баланс между телом и разумом через правильное питание и практики йоги. Интересуюсь вопросами сна и альтернативной медициной. Научу составлять здоровое меню и освоить базовые асаны йоги.",
    likes: [],
  },
  {
    id: "19",
    name: "Елена",
    age: 40,
    gender: "female" as UserGender,
    city: { id: "7", name: "Челябинск" },
    wantToLearnSkills: [
      {
        id: "7",
        category: {
          id: "2",
          name: "Творчество и искусство",
          color: "var(--tag-creative)",
          icon: "palette",
        },
        name: "Музыка и звук",
      },
      {
        id: "8",
        category: {
          id: "2",
          name: "Творчество и искусство",
          color: "var(--tag-creative)",
          icon: "palette",
        },
        name: "Фотография и видео",
      },
    ],
    teachingSkills: [
      {
        id: "15",
        category: {
          id: "3",
          name: "Иностранные языки",
          color: "var(--tag-languages)",
          icon: "global",
        },
        name: "Китайский язык",
      },
      {
        id: "16",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Личностное развитие",
      },
      {
        id: "17",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Психология и коммуникации",
      },
      {
        id: "18",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Обучение и преподавание",
      },
      {
        id: "27",
        category: {
          id: "6",
          name: "Здоровье и лайфстайл",
          color: "var(--tag-health)",
          icon: "lifestyle",
        },
        name: "Организация пространства",
      },
    ],
    photo: "../db/users-photo/elena.jpg",
    description:
      "Нутрициолог и инструктор по йоге. Помогаю людям находить баланс между телом и разумом через правильное питание и практики йоги. Интересуюсь вопросами сна и альтернативной медициной. Научу составлять здоровое меню и освоить базовые асаны йоги.",
    likes: [],
  },
  {
    id: "10",
    name: "Елена",
    age: 40,
    gender: "female" as UserGender,
    city: { id: "7", name: "Челябинск" },
    wantToLearnSkills: [
      {
        id: "7",
        category: {
          id: "2",
          name: "Творчество и искусство",
          color: "var(--tag-creative)",
          icon: "palette",
        },
        name: "Музыка и звук",
      },
      {
        id: "8",
        category: {
          id: "2",
          name: "Творчество и искусство",
          color: "var(--tag-creative)",
          icon: "palette",
        },
        name: "Фотография и видео",
      },
    ],
    teachingSkills: [
      {
        id: "15",
        category: {
          id: "3",
          name: "Иностранные языки",
          color: "var(--tag-languages)",
          icon: "global",
        },
        name: "Китайский язык",
      },
      {
        id: "16",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Личностное развитие",
      },
      {
        id: "17",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Психология и коммуникации",
      },
      {
        id: "18",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Обучение и преподавание",
      },
      {
        id: "27",
        category: {
          id: "6",
          name: "Здоровье и лайфстайл",
          color: "var(--tag-health)",
          icon: "lifestyle",
        },
        name: "Организация пространства",
      },
    ],
    photo: "../db/users-photo/elena.jpg",
    description:
      "Нутрициолог и инструктор по йоге. Помогаю людям находить баланс между телом и разумом через правильное питание и практики йоги. Интересуюсь вопросами сна и альтернативной медициной. Научу составлять здоровое меню и освоить базовые асаны йоги.",
    likes: [],
  },
  {
    id: "15",
    name: "Елена",
    age: 40,
    gender: "female" as UserGender,
    city: { id: "7", name: "Челябинск" },
    wantToLearnSkills: [
      {
        id: "7",
        category: {
          id: "2",
          name: "Творчество и искусство",
          color: "var(--tag-creative)",
          icon: "palette",
        },
        name: "Музыка и звук",
      },
      {
        id: "8",
        category: {
          id: "2",
          name: "Творчество и искусство",
          color: "var(--tag-creative)",
          icon: "palette",
        },
        name: "Фотография и видео",
      },
    ],
    teachingSkills: [
      {
        id: "15",
        category: {
          id: "3",
          name: "Иностранные языки",
          color: "var(--tag-languages)",
          icon: "global",
        },
        name: "Китайский язык",
      },
      {
        id: "16",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Личностное развитие",
      },
      {
        id: "17",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Психология и коммуникации",
      },
      {
        id: "18",
        category: {
          id: "4",
          name: "Образование и развитие",
          color: "var(--tag-education)",
          icon: "book",
        },
        name: "Обучение и преподавание",
      },
      {
        id: "27",
        category: {
          id: "6",
          name: "Здоровье и лайфстайл",
          color: "var(--tag-health)",
          icon: "lifestyle",
        },
        name: "Организация пространства",
      },
    ],
    photo: "../db/users-photo/elena.jpg",
    description:
      "Нутрициолог и инструктор по йоге. Помогаю людям находить баланс между телом и разумом через правильное питание и практики йоги. Интересуюсь вопросами сна и альтернативной медициной. Научу составлять здоровое меню и освоить базовые асаны йоги.",
    likes: [],
  },
];

function App() {
  const onLikeClick = (userId: string) => {
    console.log(`Like clicked for user with ID: ${userId}`);
  };
  const onButtonClick = (userId: string) => {
    console.log(`Button clicked for user with ID: ${userId}`);
  };
  return (
    <>
      <BrowserRouter>
        {/*<Filtres />*/}
        {/*<Footer />*/}
        {/*<CategoryDisplay />*/}
        <PopularSkillList
          users={demoUsers}
          onLikeClick={console.log}
          onCardClick={console.log}
        ></PopularSkillList>
      </BrowserRouter>
      {/*<p>Начинаем работу</p>*/}
      {/*<UserCard*/}
      {/*  user={user}*/}
      {/*  onLikeClick={onLikeClick}*/}
      {/*  onButtonClick={onButtonClick}*/}
      {/*/>*/}
    </>
  );
}

export default App;
