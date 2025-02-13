import { splitArray } from "@/lib/utils";
import { Car } from "@/payload-types";
import React from "react";
import CarPreviewCarousel from "./CarPreviewCarousel";
import MyButton from "@/components/MyButton";
import ButtonLink from "@/components/ButtonLink";

interface Prop extends Car {
  coverImage: any;
}

const CarSpecifications = ({ car }: { car: Prop }) => {
  const { specifications } = car;

  const { firstHalf, secondHalf } = splitArray(specifications);
  return (
    <div className="w-full mt-16 lg:max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="basis-full lg:flex-1  rounded-t-xl overflow-hidden  ">
          <CarPreviewCarousel car={car} className="" />
        </div>
        <div className="basis-full lg:basis-1/3">
          <div>
            <h2 className="text-[35.2px] mb-3 ">Specifications</h2>
            <div className="grid grid-cols-2 gap-5 px-4 w-full">
              {firstHalf.length > 0 && (
                <ul className="list-disc space-y-3">
                  {firstHalf.map((i: any, j: any) => (
                    <li key={j} className="">
                      {i.specification}
                    </li>
                  ))}
                </ul>
              )}

              {secondHalf.length > 0 && (
                <ul className="list-disc space-y-3">
                  {secondHalf.map((i: any, j: any) => (
                    <li key={j} className="">
                      {i.specification}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="w-full mt-7">
              <div className="flex gap-2">
                <MyButton text="get a quote" className="hover:bg-black" />
                <ButtonLink
                  href={`/detail/${car.id}`}
                  className="bg-black hover:bg-black "
                  text="reserve this car"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSpecifications;
