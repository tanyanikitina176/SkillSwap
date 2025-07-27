import "./App.css";

import modalImage from '../assets/icons//user-circle.svg'
import {Button} from "../shared/ui/button/button.tsx";
import {Modal} from "../shared/ui/modal/modal.tsx";



function App() {
  return (
    <>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <p>Начинаем работу</p>
      <Modal title={"Важе предложение создано"} description={'Теперь вы можете предложить обмен'} image={modalImage} onClose={console.log}>
        <Button
          type="primary"
          htmlType="button"
          onClick={() => console.log("Клик по кнопке")}
        >
          Нажми меня
        </Button>

      </Modal>
    </>
  );
}

export default App;



