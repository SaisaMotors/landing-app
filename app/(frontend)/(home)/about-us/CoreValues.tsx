import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import React from "react";

interface Prop {
  values: {
    id: string;
    name: string;
    icon: any;
  }[];
}
const CoreValues = ({ values }: Prop) => {
  return (
    <div className="py-8">
      <h2 className="text-[35.2px] font-semibold uppercase text-center">
        core values
      </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {values.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-4">
            <div className="h-[100px] w-[90px] relative">
              <Image
                alt={item.name}
                src={item.icon.url}
                fill
                priority
                quality={80}
                className="absolute object-center"
              />
            </div>

            <strong className="text-[20px]">{item.name}</strong>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5 items-center py-4">
        <ButtonLink
          text="get in touch with us"
          href="/contact-us"
          className="w-[200px] hover:bg-black"
        />
      </div>
    </div>
  );
};

export default CoreValues;
