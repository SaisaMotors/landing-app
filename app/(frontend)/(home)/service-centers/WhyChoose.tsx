import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import React from "react";

interface Props {
  footer: string;
  values: {
    title: string;
    icon: any;
    description: string;
    id: string;
  }[];
}
const WhyChoose = ({ values, footer }: Props) => {
  return (
    <div className="space-y-7 pb-10">
      <h2 className="text-[35.2px] uppercase font-semibold text-center">
        why choose us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {values.map((item: any, index) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center  w-full p-6"
          >
            <div className="relative w-[100px]  h-[90px] ">
              <Image
                alt=""
                src={item.icon.url}
                fill
                className="object-center absolute"
                priority
                quality={98}
              />
            </div>

            <div className="flex flex-col mt-3 items-center justify-center">
              <h3 className="text-[20px] font-semibold text-center">
                {item.title}
              </h3>
              <p className="text-[18px] mt-6 text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center my-9">
        <ButtonLink
          text="get in touch with us"
          href="/contact-us"
          className="lg:w-1/3 w-full text-lg hover:bg-black"
        />
      </div>

      <div className="py-14">
        <p className="text-center  text-[20px]">{footer}</p>
      </div>
    </div>
  );
};

export default WhyChoose;
