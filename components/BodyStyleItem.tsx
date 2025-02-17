import { cn } from "@/lib/utils";
import React from "react";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";

interface Prop {
  className?: string;
  item: {
    id: string;
    style: string;
    logo: any; // This is the ID of the uploaded media file
    createdAt: string;
    updatedAt: string;
  };
}
const BodyStyleItem = ({ className = "", item }: Prop) => {
  const { id, style, createdAt, logo } = item;

  return (
    <div
      className={cn(
        "flex flex-col w-full gap-4 py-6 md:pb-12 items-center",
        className
      )}
    >
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center  space-x-2">
        <Checkbox
          className="bg-white h-5 w-5 data-[state=checked]:bg-primary "
          id={style}
        />
        <label
          htmlFor={style}
          className="uppercase overflow-clip text-nowrap  tracking-wide text-[12px] font-semibold"
        >
          {style}
        </label>
      </div>

      <Image
        alt={style}
        priority
        quality={99}
        src={logo.url}
        height={62}
        width={160}
      />
    </div>
  );
};

export default BodyStyleItem;
