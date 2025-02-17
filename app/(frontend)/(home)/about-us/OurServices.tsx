import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Prop {
  services: any;
}
const OurServices = ({ services }: Prop) => {
  return (
    <div className="grid gap-6 mt-4 grid-cols-1 md:grid-cols-2">
      <div className="space-y-9 px-4 lg:px-0">
        <div>
          <h2 className="uppercase font-semibold text-[35px]">our services</h2>
          <ul className="text-[20px] mt-4">
            {services.map((item: any) => (
              <li key={item.id} className="flex gap-4 items-baseline">
                <ChevronRight className="shrink-0 h-4 w-4" />
                {item.service}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative w-full h-[375px]  ">
        <Image
          alt="our mission/vision"
          src={"/images/our-services.jpg"}
          fill
          className="object-cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default OurServices;
