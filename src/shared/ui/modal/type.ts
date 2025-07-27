import React from "react";

export type TModalUIProps = {
  image: string;
  title: string;
  description: string;
  onClose: () => void;
  children?: React.ReactNode;
};