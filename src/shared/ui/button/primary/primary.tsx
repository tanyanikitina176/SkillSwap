import React from "react";
import type { SyntheticEvent } from "react";
import styles from "./primary.module.css";


interface Props
  extends React.PropsWithChildren<
    Omit<React.HTMLProps<HTMLButtonElement>, "type" >
  > {
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  extraClass?: string;
  htmlType?: "button" | "submit" | "reset";
}

export const PrimaryButton: React.FC<Props> = ({
  children,
  onClick,
  disabled = false,
  htmlType = "button",
  extraClass = "",
}) => {
  const classNames = [
    styles.button,
    styles[`button_type_primary`],
    extraClass,
  ].join(" ");

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
    >
      {children}
    </button>
  );
};
