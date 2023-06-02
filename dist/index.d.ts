import React from 'react';

type ButtonVariant = "filled" | "outlined";
type ButtonColor = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
}

export { ButtonProps };
