import styles from "./card-user-big.module.css";
import { Button } from "@shared/ui/button/button.tsx";
import React, { type FC, type ReactNode } from "react";



interface CardUserBigProps {
  header?: React.ReactNode;
  buttonSlot?: React.ReactNode;
  children?: React.ReactNode;
}

export const CardUserBig: FC<CardUserBigProps> = ({
  header,
  buttonSlot
}) => {
  return (
    <div className={styles.bigcontainer}>
      {header}
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Игра на барабанах</h2>
          <p className={styles.skills}>
            Творчество и искусство / Музыка и звук
          </p>
          <p className={styles.description}>
            Привет! Я играю на барабанах уже больше 10 лет — от репетиций в
            гараже до выступлений на сцене с живыми группами. Научу основам
            техники (и как не отбить себе пальцы), играть любимые ритмы и
            разбирать песни, импровизировать и звучать уверенно даже без
            паритуры
          </p>
          {buttonSlot}
        </div>
        <div className={styles.containerPhoto}>
          <div className={styles.photo}></div>
        </div>
      </div>
    </div>
  );
};
