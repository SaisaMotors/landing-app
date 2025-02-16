import React from "react";
import { Input } from "@/components/ui/input"; // If using ShadCN, otherwise use a regular input
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
}

const TextInput = ({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder = "Enter here",
  isMust = false,
  className = "",
  ...rest
}: FormInputProps) => {
  return (
    <div className={cn("", className)}>
      <label className="block pl-2 text-[13px]  font-semibold">
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
      <Input
        type={type}
        {...register(name)}
        className="w-full rounded-none  focus-visible:ring-0 border-0  border-b  underline-offset-4  shadow-none text-black p-2 "
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default TextInput;
