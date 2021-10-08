import React, { ChangeEventHandler } from "react";

export interface InputProps {
  value: string;
  name?: string;
  label?: string;
  placeholder?: InputProps["value"];
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

function Input({ name, value, type = "text", label, placeholder, onChange }: InputProps) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        type={type}
        className={"input"}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        data-testid={"input"}
      />
    </>
  );
}

export default Input;
