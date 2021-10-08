import Link from "next/link";
import React, { MouseEventHandler } from "react";
import classes from "./Button.module.scss";

export interface ButtonProps {
  href?: string;
  children: string;
  customClass?: string;
  type?: HTMLButtonElement["type"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ href, children, onClick, customClass }: ButtonProps) {
  const className = `${customClass} ${classes.button}`;

  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={className}>{children}</a>
        </Link>
      ) : (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
}
