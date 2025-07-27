import "./App.css";
import {ModalUI} from "../shared/ui/modal/modalUi.tsx";
import modalImage from '../assets/icons//user-circle.svg'
import {Button} from "../shared/ui/button/button.tsx";



function App() {
  return (
    <>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <ModalUI title={"Важе предложение создано"} description={'Теперь вы можете предложить обмен'} image={modalImage} onClose={console.log}>
        <Button
          type="primary"
          htmlType="button"
          onClick={() => console.log("Клик по кнопке")}
        >
          Нажми меня
        </Button>

      </ModalUI>
    </>
  );
}

export default App;



