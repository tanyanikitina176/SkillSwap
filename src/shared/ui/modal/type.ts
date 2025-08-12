import React, {type ReactNode} from "react";

export type TModalUIProps = {
  image?: string | ReactNode;
  imageAlt?: string;
  title?: string;
  description?: string;
  onClose: () => void;
  children?: React.ReactNode;
};

export type TModalProps = TModalUIProps & {
  open: boolean;
}
