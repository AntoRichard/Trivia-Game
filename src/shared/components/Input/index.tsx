import React, { FC } from "react";
import "./input.scss";

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string | number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
  rows?: number;
}

const Input: FC<InputProps> = (props) => {
  const { textarea, ...rest } = props;
  return (
    <div className="input__wrapper">
      {textarea ? (
        <textarea className="input" {...rest} />
      ) : (
        <input className="input" {...rest} />
      )}
    </div>
  );
};

export default Input;
