import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import ClientPortal from "./ClientPortal";

function TestChild() {
  return <div>child</div>;
}

test("should render to screen", () => {
  const main = document.createElement("main");

  const portalContainer = document.createElement("div");

  portalContainer.id = "portal-container";

  document.body.appendChild(portalContainer);

  const { container } = render(
    <ClientPortal selector={"#portal-container"}>
      <TestChild />
    </ClientPortal>,
    { container: document.body.appendChild(main) }
  );

  expect(screen.getByText(/child/)).toBeInTheDocument();
  expect(portalContainer.innerHTML).toEqual("<div>child</div>");
  expect(container).toMatchInlineSnapshot(`<main />`);
});
