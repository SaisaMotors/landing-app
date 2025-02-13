import ButtonLink from "@/components/ButtonLink";
import MyButton from "@/components/MyButton";
import { Separator } from "@/components/ui/separator";
import { cn, formatPrice } from "@/lib/utils";
import { Brand, Media, Specification } from "@/payload-types";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Prop {
  className?: string;
  car: {
    id: string;
    productid: string;
    carName: string;
    brand: string | Brand;
    coverImage: string | any;
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
const CarItem = ({ className, car }: Prop) => {
  const {
    coverImage,
    carName,
    productid,
    make,
    price,
    engine,
    availability,
    transmission,
    exterior,
    fuel,
    drive,
    id,
  } = car;

  const carPrice = formatPrice(price);
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden shadow-lg hover:shadow-xl w-full",
        className
      )}
    >
      {/* image section */}
      <div className="relative w-full h-48">
        {/* Background Layer */}
        <div
          className="absolute inset-0 "
          //   style={{ backgroundImage: "url('/your-image.jpg')" }} // Replace with your image URL
        >
          <Image
            className="object-cover"
            alt={carName}
            src={coverImage?.url}
            priority
            quality={99}
            fill
          />
        </div>

        {/* Overlay Layer */}
        <Link href={`/detail/${id}`} className="absolute inset-0 ">
          <div className="flex justify-between mt-6 pr-3">
            <div className=" ">
              <h5 className="bg-primary w-[100px] p-0.5 text-center text-[10px] px-2 text-white uppercase font-semibold">
                new arrival
              </h5>
              <h5 className="bg-white w-[110px] p-0.5 text-center font-semibold text-[12px]   text-black">
                {productid}
              </h5>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="red"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-heart shadow-lg"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            {/* <Heart className="shadow-lg text-primary h-5 w-5 cursor-pointer" /> */}
          </div>
        </Link>
      </div>

      {/* // bottom section */}
      <div className="mt-6 p-[16px] text-[#7D7D7D]">
        <div className="space-y-2">
          <p className="text-[14px] uppercase ">
            make <span className="font-semibold text-black">{make}</span>
          </p>

          <h5 className="font-semibold text-[20px] text-black">{carName}</h5>
          <p className="text-[14px] uppercase ">
            engine <span className="font-semibold text-black">{engine}</span>
          </p>
          <h6 className="text-primary text-[20px] font-semibold">{carPrice}</h6>
        </div>
        <Separator className="my-3 h-[0.5px]" />
        <div className="space-y-2">
          <p className="text-[14px] ">
            Availability{" "}
            <span className="font-semibold text-black">
              {availability ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p className="text-[14px] ">
            Transmission{" "}
            <span className="font-semibold text-black">{transmission}</span>
          </p>
          <p className="text-[14px] ">
            Exterior{" "}
            <span className="font-semibold text-black">{exterior}</span>
          </p>
          <p className="text-[14px] ">
            Fuel <span className="font-semibold text-black">{fuel}</span>
          </p>
          <p className="text-[14px] ">
            Drive <span className="font-semibold text-black">{drive}</span>
          </p>
        </div>

        <div className="space-y-2 my-3">
          <div className="grid grid-cols-2 gap-3">
            <ButtonLink
              text="more details"
              className="py-0 px-4 text-[10px] hover:bg-black"
              href={`/detail/${carName}`}
            ></ButtonLink>
            <MyButton className="hover:bg-black py-0" text="get a quote" />
          </div>
          <ButtonLink
            className="py-0 w-full bg-black hover:bg-primary"
            href={`/reserve/${carName}`}
            text="reserve this car"
          />
        </div>
      </div>
    </div>
  );
};

export default CarItem;
