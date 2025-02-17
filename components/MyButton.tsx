"use client";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Prop {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}
const MyButton = ({
  text,
  className = "",
  onClick = () => {},
  type = "button",
  ...rest
}: Prop) => {
  return (
    <Button
      className={cn(
        "py-6 px-4 text-white text-[13px]  uppercase font-[700] rounded-md bg-primary hover:bg-primary",
        className
      )}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default MyButton;
