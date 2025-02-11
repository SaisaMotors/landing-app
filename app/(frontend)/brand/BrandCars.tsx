import React from "react";
import CarItem from "./CarItem";
import MyButton from "@/components/MyButton";

const loadMore = true;
const BrandCars = ({ cars }: any) => {
  return (
    <div className="w-full p-4 lg:max-w-6xl mx-auto">
      {cars.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-7 ">
            {cars.map((car: any) => (
              <CarItem key={car.id} car={car} />
            ))}
          </div>

          {/* // load more button */}
          {loadMore && (
            <div className="flex justify-center mt-3">
              <MyButton text="Load More" className="py-1 px-6 hover:bg-black" />
            </div>
          )}
        </div>
      ) : (
        <div className="py-6">
          <span className="text-lg text-center">Sorry No Car Found!</span>
        </div>
      )}
    </div>
  );
};

export default BrandCars;
