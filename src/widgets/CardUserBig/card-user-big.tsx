import styles from "./card-user-big.module.css";
import React, { type FC } from "react";

interface CardUserBigProps {
  title: string ;
  category: string;
  subcategory: string;
  description: string;
  header?: React.ReactNode;
  buttonsSlot?: React.ReactNode;
  children?: React.ReactNode;
}

export const CardUserBig: FC<CardUserBigProps> = ({
  title,
  category,
  subcategory,
  description,
  header,
  buttonsSlot,
}) => {
  return (
    <div className={styles.bigcontainer}>
      <div className={styles.container}>
        {header}
        <div className={styles.contentContainer}>
          <div className={styles.ContainerWithButton}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.skills}>
                {category} / {subcategory}
              </p>
              <p className={styles.description}>{description}</p>
              <div className={styles.buttonWrapper}>
                {buttonsSlot}
              </div>
            </div>
          </div>
          <div className={styles.containerPhoto}>
            <div className={styles.photo}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
