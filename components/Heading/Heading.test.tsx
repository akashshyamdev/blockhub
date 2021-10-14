import Heading from "@components/Heading/Heading";
import { render, screen } from "@testing-library/react";

test("renders h1", () => {
  render(<Heading variant={"h1"}>H1</Heading>);

  expect(screen.getByText(/h1/i)).toBeInTheDocument();
});

test("renders h2", () => {
  render(<Heading variant={"h2"}>H2</Heading>);

  expect(screen.getByText(/h2/i)).toBeInTheDocument();
});

test("renders h3", () => {
  render(<Heading variant={"h3"}>H3</Heading>);

  expect(screen.getByText(/h3/i)).toBeInTheDocument();
});

test("renders h4", () => {
  render(<Heading variant={"h4"}>H4</Heading>);

  expect(screen.getByText(/h4/i)).toBeInTheDocument();
});

test("renders h5", () => {
  render(<Heading variant={"h5"}>H5</Heading>);

  expect(screen.getByText(/h5/i)).toBeInTheDocument();
});

test("renders h6", () => {
  render(<Heading variant={"h6"}>H6</Heading>);

  expect(screen.getByText(/h6/i)).toBeInTheDocument();
});
