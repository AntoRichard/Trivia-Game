import React, { FC, CSSProperties } from 'react'
import "./button.scss"

interface ButtonProps {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
    const { children, className, ...rest } = props;

    return (
        <span className={`button ${className}`} {...rest}>
            {children}
        </span>
    )
}

export default Button;