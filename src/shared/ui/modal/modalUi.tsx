import { ModalOverlayUI } from "./modal-overlay/modal-overlay.tsx";
import React, { type FC, memo } from "react";
import styles from "./modalUi.module.css";

export const ModalUI: FC<{
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  onClose: () => void;
  children?: React.ReactNode;
}> = memo(({ image, imageAlt, title, description, onClose, children }) => (
  <>
    <div className={styles.modal}>
      {image && <img src={image} alt={imageAlt} className={styles.image} />}
      {(title || description) && (
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
    <ModalOverlayUI onClick={onClose} />
  </>
));
