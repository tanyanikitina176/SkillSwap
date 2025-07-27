import "./App.css";
import {BrowserRouter} from "react-router-dom";
import { CategoryDisplay } from "../widgets/SkillsPanel/SkillsPanel";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <CategoryDisplay />
    </div>
    </BrowserRouter>
  );
}

export default App;



