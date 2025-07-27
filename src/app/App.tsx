import "./App.css";
import {ModalUI} from "../shared/ui/modal/modalUi.tsx";
import modalImage from '../assets/icons//user-circle.svg'



function App() {
  return (
    <>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <ModalUI title={"Заголовок"} description={'Описание'} image={modalImage} onClose={console.log}><p>Текст внутри модалки</p></ModalUI>
    </>
  );
}

export default App;



