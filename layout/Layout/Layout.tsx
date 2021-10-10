import Nav from "@layout/Nav/Nav";
import React, { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />

      {children}
    </>
  );
}
