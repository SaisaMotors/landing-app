import { cn, formatText } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Prop {
  slug: string;
  className?: string;
}
const LayoutHeader = ({ slug, className }: Prop) => {
  const title = formatText(slug);
  return (
    <div className={cn(className)}>
      <div className="flex justify-center items-center flex-col  gap-3">
        <div className="flex items-center gap-3">
          <Link className="text-primary" href={"/"}>
            Home
          </Link>
          <span className="text-[#6c757d]">/</span>
          <Link href="#" className="text-[#6c757d]">
            {title}
          </Link>
        </div>
        <h2 className="uppercase mt-3 font-semibold text-[35.2px]">{title}</h2>
      </div>
    </div>
  );
};

export default LayoutHeader;
