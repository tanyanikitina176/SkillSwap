import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NewSkillList from "@widgets/SkillList/NewSkillList";

function App() {
  return (
    <>
      <BrowserRouter>
        <p>Начинаем работу</p>
        <NewSkillList
          users={[]}
          onButtonClick={() => {}}
          onButtonMoreClick={() => {}}
          onLikeClick={() => {}}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
