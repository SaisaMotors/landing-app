import { getAllBrands, getFeaturedModels } from "@/actions/car";
import React from "react";
import RenderCars from "./RenderCars";

const FeaturedCars = async () => {
  const brands = await getAllBrands();

  console.log("featured models", brands);
  return (
    <div className="w-full ">
      <div className="w-full  px-4 py-10 min-h-screen lg:max-w-6xl mx-auto ">
        <div className="space-y-4 px-4 flex flex-col items-center">
          <h1 className="text-[35.2px] text-center uppercase leading-tight font-semibold">
            featured cars
          </h1>
          <h3 className=" text-[23px]  text-center font-normal">
            We have cars in stock and others are imports from Japan, UK and
            Thailand
          </h3>
        </div>

        {/* // loop brands */}
        <div className="flex flex-col mt-8 justify-center items-center ">
          {brands.map((item, index) => (
            <RenderCars key={item.id} brand={item.brand} />
          ))}
        </div>

        {/* <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 justify-center items-center "></div> */}
      </div>
    </div>
  );
};

export default FeaturedCars;
