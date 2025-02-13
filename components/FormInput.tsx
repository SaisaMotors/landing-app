import { Input } from "@/components/ui/input"; // If using ShadCN, otherwise use a regular input
import { FieldError } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  register: any;
  error?: FieldError;
  placeholder?: string;
}

export default function FormInput({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder = "Enter here",
  ...rest
}: FormInputProps) {
  return (
    <div className="">
      <label className="block pl-2 text-[13px]  font-semibold">{label}</label>
      <Input
        type={type}
        {...register(name)}
        className="w-full rounded-none  focus-visible:ring-0 border-0  border-b  underline-offset-4  shadow-none text-black p-2 "
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
