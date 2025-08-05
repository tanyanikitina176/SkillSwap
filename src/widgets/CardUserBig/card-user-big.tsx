import styles from "./card-user-big.module.css";
import {Button} from "@shared/ui/button/button.tsx";
import bigPhoto from '../../../public/db/skills-photo/skill-5-4.jpg'

export const CardUserBig = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Игра на барабанах</h2>
          <p className={styles.skills}>Творчество и искусство / Музыка и звук</p>
          <p>
            Привет! Я играю на барабанах уже больше 10 лет — от репетиций в
            гараже до выступлений на сцене с живыми группами. Научу основам
            техники (и как не отбить себе пальцы), играть любимые ритмы и
            разбирать песни, импровизировать и звучать уверенно даже без
            паритуры
          </p>
          <Button>Предложить обмен</Button>
        </div>
        <div className={styles.containerPhoto}>

        </div>
      </div>
    </div>
  );
};
