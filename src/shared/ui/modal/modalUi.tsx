import { ModalOverlayUI } from "./modal-overlay/modal-overlay.tsx";
import { type FC, memo } from "react";
import styles from "./modalUi.module.css";
import type { TModalUIProps } from "./type.ts";

export const ModalUI: FC<TModalUIProps> = memo(
  ({ image, imageAlt, title, description, onClose, children }) => (
    <>
      <div className={styles.modal}>
        <img src={image} alt={imageAlt} className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
      <ModalOverlayUI onClick={onClose} />
    </>
  ),
);
