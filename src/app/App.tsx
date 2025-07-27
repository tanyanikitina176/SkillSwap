import "./App.css";
import {Footer} from "../widgets/Footer/Footer.tsx";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <>
      <p>Начинаем работу</p>
      <Footer></Footer>
    </>
    </BrowserRouter>
  );
}

export default App;



