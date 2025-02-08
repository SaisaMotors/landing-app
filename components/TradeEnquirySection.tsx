"use client";
import Image from "next/image";
import React from "react";
import MyButton from "./MyButton";

const TradeEnquirySection = () => {
  return (
    <div className="w-full bg-[#F67A7C] text-white py-4 pb-7 flex flex-col lg:flex-row ">
      <div className="flex-1 flex px-4">
        <div className="flex-1 h-[200px]  lg:h-[300px] flex relative  ">
          <Image
            alt=""
            src={"/images/trade-carr.jpg"}
            fill
            priority
            quality={98}
            className="absolute object-contain"
          />
        </div>
      </div>

      <div className="basis-full   border-white lg:basis-2/5">
        <div className="flex-1 pr-8 p-4 lg:p-0 lg:pr-8 space-y-3 ">
          <p className="text-[21px] text-center lg:text-start">
            Trade in your car and top up to get a new one
          </p>

          <h2 className="lg:text-[52px] text-[40px] text-center lg:text-start  uppercase font-semibold">
            Trade in Your Car Today !!!
          </h2>

          <p className="text-[21px] text-center lg:text-start">
            Find out the worth of your car.
          </p>

          <div className="flex justify-center lg:justify-start">
            <MyButton
              text="make an enquiry"
              className="hover:bg-black px-9 mt-4 text-lg "
              onClick={() => alert("trade enquiry")}
            ></MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeEnquirySection;
