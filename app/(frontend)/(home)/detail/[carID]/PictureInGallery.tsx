import { cn } from "@/lib/utils";
import { Car } from "@/payload-types";
import Image from "next/image";
import React from "react";

const PictureInGallery = ({
  car,
  className,
}: {
  car: Car;
  className?: string;
}) => {
  const { gallery, carName } = car;

  return (
    <div className={cn("w-full p-4 lg:p-0 lg:max-w-6xl mx-auto", className)}>
      <h2 className="font-semibold text-[35.2px] mb-6 uppercase">
        picture in gallery
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-3  gap-7 ">
        {gallery?.map((car: any) => (
          <div key={car.id} className="relative w-full h-[223px]">
            <Image
              alt={carName}
              src={car?.url}
              fill
              className="object-cover"
              quality={99}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureInGallery;
