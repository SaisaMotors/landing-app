import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Prop {
  text: string;
  href: string;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  children?: React.ReactNode;
  textClass?: string;
}
const ButtonLink = ({
  text,
  href = "",
  className = "",
  textClass = "",
}: Prop) => {
  return (
    <Button
      asChild
      className={cn(
        "py-6 px-4 text-white font-[700] rounded-md bg-primary hover:bg-primary",
        className
      )}
    >
      <Link
        className={cn("text-[13px] uppercase font-[700]", textClass)}
        href={href}
      >
        {text}
      </Link>
    </Button>
  );
};

export default ButtonLink;
