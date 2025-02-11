import ButtonLink from "@/components/ButtonLink";
import MyButton from "@/components/MyButton";
import { formatPrice } from "@/lib/utils";
import { Brand, Car, Media, Specification } from "@/payload-types";
import Image from "next/image";
import React from "react";
import CarSpecifications from "./CarSpecifications";

interface Prop {
  car: {
    id: string;
    productid: string;
    carName: string;
    brand: string | Brand;
    coverImage: any;
    availability?: boolean | null;
    make: string;
    arrivalDate?: string | null;
    engine?: string | null;
    transmission?: string | null;
    interior?: string | null;
    exterior?: string | null;
    fuel?: string | null;
    drive?: string | null;
    bodyStyle: string;
    price: string;
    /**
     * Choose the relevant specifications for this product.
     */
    specifications: (string | Specification)[];
    gallery?: (string | Media)[] | null;
    updatedAt: string;
    createdAt: string;
  };
}

const CarDetails = ({ car }: Prop) => {
  const { coverImage } = car;

  return (
    <div className="lg:max-w-6xl p-4 mx-auto w-full">
      {/* // section 1 */}
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="basis-full lg:basis-1/4">
          <div className="">
            <div className="flex text-[19px]   mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Product Id</p>
              <strong className="">{car.productid}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Availability</p>
              <strong className="">
                {car.availability ? "In Stock" : "Out of Stock"}
              </strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Make</p>
              <strong className="">{car.make}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Engine</p>
              <strong className="">{car.engine}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between ">
              <p className=" text-[#7d7d7d]">Transmission</p>
              <strong className="">{car.transmission}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Interior</p>
              <strong className="">{car.interior}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Exterior</p>
              <strong className="">{car.exterior}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Fuel</p>
              <strong className="">{car.fuel}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px] g items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Drive</p>
              <strong className="">{car.drive}</strong>
            </div>
            <div className="flex text-[19px] mb-[16px]  items-center justify-between  ">
              <p className=" text-[#7d7d7d]">Body Style</p>
              <strong className="">{car.bodyStyle}</strong>
            </div>
          </div>
        </div>
        <div className="basis-full lg:flex-1  ">
          <div className="lg:h-full h-[300px]  relative w-full">
            {/* Background Layer */}
            <div className="absolute inset-0">
              <Image
                className="object-cover"
                alt={car.carName}
                src={car.coverImage?.url}
                priority
                quality={99}
                fill
              />
            </div>
            {/* Overlay Layer */}
          </div>
        </div>
      </div>

      {/* // price section */}
      <div className="w-full">
        <h2 className="text-primary mb-[15px] text-[35px]">
          {formatPrice(car.price)}
        </h2>
        <div className="flex gap-2">
          <MyButton text="get a quote" className="hover:bg-black" />
          <ButtonLink
            href={`/detail/${car.id}`}
            className="bg-black hover:bg-black "
            text="reserve this car"
          />
        </div>
      </div>

      <CarSpecifications/>
    </div>
  );
};

export default CarDetails;
