import { BrowserRouter } from "react-router-dom";
import { Filtres } from "../widgets/Filtres/Filtres";
import { Footer } from "../widgets/Footer/Footer";
import "./App.css";
import { CategoryDisplay } from "../widgets/SkillsPanel/SkillsPanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Filtres />
        <Footer />
        <CategoryDisplay />
      </BrowserRouter>
      <p>Начинаем работу</p>
    </>
  );
}

export default App;
