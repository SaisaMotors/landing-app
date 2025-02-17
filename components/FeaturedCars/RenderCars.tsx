import { getCarsByBrand } from "@/actions/car";
import { cn } from "@/lib/utils";
import React from "react";
import ButtonLink from "../ButtonLink";
import CarItem from "@/app/(frontend)/(home)/brand/CarItem";

interface Prop {
  className?: string;
  brand: string;
}
const RenderCars = async ({ className, brand }: Prop) => {
  const cars = await getCarsByBrand(brand);

  console.log(`car by brand ${brand}, `, cars.docs);

  return (
    <div className={cn("pb-9 w-full", className)}>
      <h4 className="uppercase text-center text-[27px] font-bold pt-[48px] pb-[24px]">
        {brand}
      </h4>
      {cars.docs.length > 0 && (
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 place-items-center ">
            {cars.docs.map((car: any) => (
              <CarItem className="w-full" key={car.id} car={car} />
            ))}
          </div>

          {cars.length > 4 && (
            <div className="flex justify-center py-5">
              <ButtonLink
                className="w-[200px] hover:bg-black"
                text="View More"
                href={`/cars-for-sale-in-kenya/${brand}`}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RenderCars;
