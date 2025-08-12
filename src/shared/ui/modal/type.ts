import React from "react";

export type TModalUIProps = {
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  onClose: () => void;
  children?: React.ReactNode;
};

export type TModalProps = TModalUIProps & {
  open: boolean;
}
