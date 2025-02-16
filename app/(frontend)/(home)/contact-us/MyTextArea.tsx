import React from "react";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  register: any;
  error?: FieldError;
  placeholder?: string;
  isMust?: boolean;
  className?: string;
  inputClass?: string;
  labelClass?: string;
}
const MyTextArea = ({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder = "Enter here",
  isMust = false,
  className = "",
  inputClass = "",
  labelClass = "",
  ...rest
}: FormInputProps) => {
  return (
    <div className={cn("block pl-2 text-[13px]  font-semibold", className)}>
      <label className={cn("block  text-[13px]  font-semibold", labelClass)}>
        {label}
        <span
          className={cn(
            "text-lg font-bold",
            isMust ? "text-primary" : "text-transparent"
          )}
        >
          *
        </span>
      </label>
      <textarea
        className={cn(
          "w-full rounded-none bg-transparent focus:outline-none  focus-visible:ring-0 border-0  border-b  underline-offset-4  shadow-none text-black py-2",
          inputClass
        )}
        type={type}
        {...register(name)}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default MyTextArea;
