import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { UserCard } from "@widgets/UserCard/user-card";
import { demoUser as user } from "@entities/User/userHelper";
import NewSkillList from "@widgets/SkillList/NewSkillList";

function App() {
  /*const onLikeClick = (userId: string) => {
    console.log(`Like clicked for user with ID: ${userId}`);
  };
  const onButtonClick = (userId: string) => {
    console.log(`Button clicked for user with ID: ${userId}`);
  };*/
  return (
    <>
      <BrowserRouter>
        <p>Начинаем работу</p>
        <NewSkillList />
      </BrowserRouter>
    </>
  );
}

export default App;
