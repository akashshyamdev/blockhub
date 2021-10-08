import { ChangeEvent, Dispatch, FormEventHandler, SetStateAction } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./form.scss";

export interface FormInputType {
  name: string;
  type?: string;
  label?: string;
  placeholder: string;
}

export interface FormProps {
  heading: string;
  submitText: string;
  inputs: FormInputType[];
  formData: { [key: string]: any };
  onSubmit: FormEventHandler<HTMLFormElement>;
  setFormData: Dispatch<SetStateAction<any>>;
}

function Form({ heading, inputs, submitText, onSubmit, formData, setFormData }: FormProps) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit} className="form flex flex-col items-center py-20 px-20">
      <h1 className={"text-center mb-8 text-gray-700 text-white text-5xl"}>{heading}</h1>

      {inputs.map((input, index) => (
        <div className={"mt-8 w-full flex flex-col items-center"} key={index}>
          <Input
            value={formData[input.name]}
            type={input.type}
            name={input.name}
            label={input.label}
            placeholder={input.placeholder}
            onChange={onChange}
          />
        </div>
      ))}

      <Button type={"submit"} customClass={"mt-20"}>
        {submitText}
      </Button>
    </form>
  );
}

export default Form;
