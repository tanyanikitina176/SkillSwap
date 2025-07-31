import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SkillList from "@widgets/SkillList/SkillList";
import { useEffect, useState } from "react";
import { fetchUsersData } from "../api/User/User-api";
import type { User } from "@entities/User/types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetchUsersData()
      .then((users) => {
        console.log(users);
        setUsers(users);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных пользователей:", error);
      });
  }, []);
  return (
    <>
      <BrowserRouter>
        <p>Начинаем работу</p>
        <SkillList
          users={users}
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
      </BrowserRouter>
    </>
  );
}

export default App;
