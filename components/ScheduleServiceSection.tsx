import Image from "next/image";
import React from "react";
import ButtonLink from "./ButtonLink";
import MyButton from "./MyButton";

const ScheduleServiceSection = () => {
  // handle modal of form
  return (
    <div className="bg-[#3FB6E6] py-14">
      <div className="lg:max-w-6xl w-full p-4 mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* layout one */}
          <div className="basis-full lg:basis-1/2">
            <div className="text-white">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <p className="text-[21px]">Show some love to your car</p>
                <Image
                  alt=""
                  src={"/images/heart-shape.png"}
                  height={45}
                  width={62}
                />
              </div>
              <h2 className="mt-2 text-[56px] text-center lg:text-start font-semibold uppercase">
                schedule service online !!!
              </h2>
              <p className="text-[21px] text-center lg:text-start">
                Save your time...
              </p>
              <div className="flex w-full justify-center lg:justify-start">
                <MyButton
                  className="hover:bg-black mt-6 "
                  text="schedule service online"
                ></MyButton>
              </div>
            </div>
          </div>

          {/* layout two */}
          <div className="relative  basis-full lg:basis-1/2 ">
            <div className="relative full h-[250px] lg:h-[317px]  ">
              <Image
                alt="scedule service online"
                src={"/images/schedule-img.jpg"}
                fill
                quality={100}
                priority
                className=" object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleServiceSection;
