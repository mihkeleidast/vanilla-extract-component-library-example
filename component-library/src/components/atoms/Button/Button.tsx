import React, { ReactNode } from "react";

import { rootStyle } from "./Button.css";

interface ButtonProps {
  children: ReactNode;
  elementType?: "button" | "a";
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const Button = ({
  children,
  elementType: ButtonElement = "button",
  onClick,
}: ButtonProps) => (
  <ButtonElement
    className={rootStyle}
    onClick={onClick}
    {...(ButtonElement === "button" ? { type: "button" } : {})}
  >
    {children}
  </ButtonElement>
);
