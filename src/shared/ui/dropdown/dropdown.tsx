import type { DropDownUIProps } from "./type";
import type { FC } from "react";
import styles from "./dropdown.module.css";
import clsx from "clsx";

const getVariantStyle = (variant: string) => {
  switch (variant) {
    case "default":
      return styles.flat;
    case "outlined":
      return styles.outlined;
    default:
      return styles.outlined;
  }
};

export const DropDownUI: FC<DropDownUIProps> = ({
  variant,
  children,
  className,
  isOpened,
}) => {
  return (
    <div
      className={clsx(
        styles.dropdown,
        isOpened && styles.opened && getVariantStyle(variant),
        className
      )}
    >
      {children}
    </div>
  );
};
