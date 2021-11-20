import React, { FC, CSSProperties } from 'react'
import "./button.scss"

interface ButtonProps {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
    const { children, className,  disabled, ...rest } = props;

    return (
        <span className={`button ${className} ${disabled && "button-disabled"}`} {...rest}>
            {children}
        </span>
    )
}

export default Button;