import React, { ReactNode } from "react";
import classes from "./Heading.module.scss";

export interface HeadingProps {
  className?: string;
  children: ReactNode;
  family?: "sans" | "serif";
  align?: "left" | "center" | "right";
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  shade?: "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
}

export default function Heading({
  align = "left",
  children,
  family,
  className,
  variant,
  shade,
}: HeadingProps) {
  const fixedClasses = `${classes.heading} text-${align} text-gray-${shade} font-${family} ${className}`;

  return (
    <>
      {variant === "h1" && <h1 className={`${classes.h1} ${fixedClasses}`}>{children}</h1>}

      {variant === "h2" && <h2 className={`${classes.h2} ${fixedClasses}`}>{children}</h2>}

      {variant === "h3" && <h3 className={`${classes.h3} ${fixedClasses}`}>{children}</h3>}

      {variant === "h4" && <h4 className={`${classes.h4} ${fixedClasses}`}>{children}</h4>}

      {variant === "h5" && <h5 className={`${classes.h5} ${fixedClasses}`}>{children}</h5>}

      {variant === "h6" && <h6 className={`${classes.h6} ${fixedClasses}`}>{children}</h6>}
    </>
  );
}
