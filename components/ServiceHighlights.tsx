import Image from "next/image";
import React from "react";
import ButtonLink from "./ButtonLink";

const ServiceHighlights = () => {
  return (
    <div className="w-full">
      <div className="p-4 w-full lg:max-w-6xl mx-auto py-12 flex items-baseline  ">
        <div className="basis-full lg:basis-1/3   border-r border-gray-300">
          <div className="flex flex-1 items-center flex-col gap-6">
            <Image
              alt=""
              src={"/images/cash-payment-icon.png"}
              height={66}
              width={72}
              quality={99}
              priority
            />
            <h2 className="text-[25px] text-center uppercase font-semibold my-[25px]">
              Cash payments
            </h2>
            <ButtonLink
              className="hover:bg-black font-[700]"
              href="/cash-payments"
              text="more info"
            ></ButtonLink>
          </div>
        </div>

        <div className="basis-full lg:basis-1/3  border-r border-gray-300">
          <div className="flex flex-1 items-center flex-col gap-6">
            <Image
              alt=""
              src={"/images/bank-financing-icon.png"}
              height={72}
              width={72}
              quality={99}
              priority
            />
            <h2 className="text-[25px] text-center uppercase font-semibold my-[25px]">
              Bank Financing
            </h2>
            <ButtonLink
              className="hover:bg-black"
              href="/financing"
              text="more info"
            ></ButtonLink>
          </div>
        </div>

        <div className="basis-full lg:basis-1/3  border-gray-300">
          <div className="flex flex-1 items-center flex-col gap-6">
            <Image
              alt=""
              src={"/images/trade-In-car.png"}
              height={72}
              width={72}
              quality={99}
              priority
            />
            <h2 className="text-[25px] text-center uppercase font-semibold my-[25px]">
              trade ins
            </h2>
            <ButtonLink
              className="hover:bg-black"
              href="/tradein"
              text="more info"
            ></ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
