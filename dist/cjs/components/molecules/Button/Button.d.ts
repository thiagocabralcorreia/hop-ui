import React from "react";
type ButtonVariant = "filled" | "outlined";
type ButtonColor = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
