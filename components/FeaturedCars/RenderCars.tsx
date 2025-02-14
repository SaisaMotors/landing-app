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
  console.log("brand cars: ", cars);

  return (
    <div className={cn("pb-9", className)}>
      <h4 className="uppercase text-center pt-[48px] pb-[24px]">{brand}</h4>

      {cars.length > 0 && (
        <div>
          <div className="flex flex-wrap justify-center gap-6 ">
            {cars.map((car) => (
              <CarItem key={car.id} car={car} />
            ))}
          </div>
          {/* // render buttons */}

          {cars.length > 4 && (
            <div className="flex items-center justify-center py-5">
              <ButtonLink
                text="view more"
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
