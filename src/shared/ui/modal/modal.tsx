import { type FC, memo, useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalUI } from "./modalUi.tsx";
import type { TModalUIProps } from "./type.ts";

const modalRoot = document.getElementById("modals");

export const Modal: FC<TModalUIProps> = memo(
  ({ image, imageAlt, title, description, onClose, children }) => {
    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleEsc);
      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    }, [onClose]);

    return ReactDOM.createPortal(
      <ModalUI
        title={title}
        description={description}
        image={image}
        imageAlt={imageAlt}
        onClose={onClose}
      >
        {children}
      </ModalUI>,
      modalRoot as HTMLDivElement,
    );
  },
);
