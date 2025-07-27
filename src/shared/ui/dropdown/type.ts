import type { ReactNode } from "react"

export type DropDownUIProps = {
  variant: string;
  children: ReactNode;
  className: string;
  isOpened: boolean;
}