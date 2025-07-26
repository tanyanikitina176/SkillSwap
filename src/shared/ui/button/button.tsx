import React from "react";
import type { SyntheticEvent } from "react";

import clsx from "clsx";
import styles from "./button.module.css";


interface Props
  extends React.PropsWithChildren<
    Omit<React.HTMLProps<HTMLButtonElement>, "type" >
  > {
  type?: "primary" | "secondary" | "tertiary";
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
  extraClass?: string;
  htmlType?: "button" | "submit" | "reset";
}

export const Button: React.FC<Props> = ({

  children,
  type = 'primary',
  onClick,
  htmlType,
  extraClass = "",
  ...rest
}) => {

  const className = clsx(
    styles.button,
    styles[`button_type_${type}`],
    extraClass
  );

  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
};
