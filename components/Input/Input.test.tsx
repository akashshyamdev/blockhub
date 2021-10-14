import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

test("renders to the screen", () => {
  render(<Input value={""} onChange={() => {}} placeholder={"test input"} />);

  const element = screen.getByPlaceholderText("test input");

  expect(element).toBeInTheDocument();
});

test("has the correct type", () => {
  render(<Input value={""} onChange={() => {}} type={"email"} />);

  const element = screen.getByTestId("input");

  expect(element).toHaveAttribute("type", "email");
});

test("user can enter text", () => {
  render(<Input value={""} onChange={() => {}} type={"email"} />);

  userEvent.type(screen.getByTestId("input"), "");

  expect(screen.getByTestId("input")).toHaveValue("");
});
