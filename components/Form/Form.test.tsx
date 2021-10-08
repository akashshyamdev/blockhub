import Form from "@components/Form/Form";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import "jest-axe/extend-expect";

test("renders with a heading", () => {
  render(
    <Form
      heading={"Form Heading"}
      formData={[]}
      setFormData={() => {}}
      onSubmit={() => {}}
      submitText={"Submit"}
      inputs={[]}
    />
  );

  const element = screen.getByText(/form heading/i);

  expect(element).toBeInTheDocument();
});

test("renders with a custom submit text", () => {
  render(
    <Form
      heading={"Form Heading"}
      formData={[]}
      setFormData={() => {}}
      onSubmit={() => {}}
      submitText={"Submit"}
      inputs={[]}
    />
  );

  const element = screen.getByText(/submit/i);

  expect(element).toBeInTheDocument();
});

test("renders single input", () => {
  render(
    <Form
      heading={""}
      submitText={"Submit"}
      inputs={[{ name: "name", label: "Name", placeholder: "My Name" }]}
      formData={[]}
      onSubmit={() => {}}
      setFormData={() => {}}
    />
  );

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
});

test("renders multiple inputs", () => {
  render(
    <Form
      heading={""}
      submitText={""}
      inputs={[
        { name: "name", label: "Name Label", placeholder: "My Name" },
        { name: "email", placeholder: "My Email", label: "Email Label" },
      ]}
      formData={[]}
      onSubmit={() => {}}
      setFormData={() => {}}
    />
  );

  expect(screen.getByLabelText(/name label/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email label/i)).toBeInTheDocument();
});

test("is accessible", async () => {
  const { container } = render(
    <Form
      heading={"Heading"}
      submitText={"Submit"}
      inputs={[{ name: "name", label: "Name", placeholder: "My Name" }]}
      formData={[]}
      onSubmit={() => {}}
      setFormData={() => {}}
    />
  );

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
