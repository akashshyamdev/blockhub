import Button from "@components/Button/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders to screen", () => {
  render(<Button>Button</Button>);

  const element = screen.getByText(/button/i);

  expect(element).toBeInTheDocument();
});

test("can be clicked", () => {
  const mockFn = jest.fn();

  render(<Button onClick={mockFn}>Button</Button>);

  userEvent.click(screen.getByText(/button/i));

  expect(mockFn.mock.calls.length).toEqual(1);
});
