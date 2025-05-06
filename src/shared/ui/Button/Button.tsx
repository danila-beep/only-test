import React from "react";
import classes from "./button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "common" | "rounded";
  styleVariant?: "common" | "bordered" | "shadowed";
  accentColor?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = "common",
  styleVariant = "common",
  accentColor,
  disabled,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${classes.button} ${classes[variant]} ${classes[styleVariant]} ${className}`}
      style={{ color: accentColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
  