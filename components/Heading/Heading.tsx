import React, { ReactNode } from "react";
import classes from "./Heading.module.scss";

export interface HeadingProps {
  className?: string;
  children: ReactNode;
  family?: "sans" | "serif";
  align?: "left" | "center" | "right";
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  shade: "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
}

export default function Heading({
  align = "left",
  children,
  family,
  className,
  variant,
  shade,
}: HeadingProps) {
  return (
    <>
      {variant === "h1" && (
        <h1
          className={`text-${align} ${classes.h1} ${classes.heading} text-gray-${shade} font-${family} ${className}`}
        >
          {children}
        </h1>
      )}

      {variant === "h2" && (
        <h2
          className={`text-${align} ${classes.h2} ${classes.heading} text-gray-${shade} font-${family} ${className}`}
        >
          {children}
        </h2>
      )}

      {variant === "h3" && (
        <h3
          className={`text-${align} ${classes.h3} ${classes.heading} text-gray-${shade} font-${family} ${className}`}
        >
          {children}
        </h3>
      )}

      {variant === "h4" && (
        <h4
          className={`text-${align} ${classes.h4} ${classes.heading} text-gray-${shade} font-${family} ${className}`}
        >
          {children}
        </h4>
      )}

      {variant === "h5" && (
        <h5
          className={`text-${align} ${classes.h5} ${classes.heading} text-gray-${shade} font-${family} ${className}`}
        >
          {children}
        </h5>
      )}

      {variant === "h6" && (
        <h6
          className={`text-${align} ${classes.h6} ${classes.heading} text-gray-${shade} font-${family} ${className}`}
        >
          {children}
        </h6>
      )}
    </>
  );
}
