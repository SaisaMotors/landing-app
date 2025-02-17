"use client";
import { getCarsByBrand } from "@/actions/car";
import React, { useEffect, useState } from "react";
import CarItem from "../../brand/CarItem";
import MyButton from "@/components/MyButton";

// TODO: TRnasition to server componenet
const RenderCars = ({ brand }: { brand: string }) => {
  const [cars, setCars] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoader] = useState<boolean>(true);

  const carsPerPage = 20;

  const [totalPages, setTotalPages] = useState(1);

  //   fetch cars initially
  useEffect(() => {
    const fetchCars = async () => {
      setLoader(true);
      const res = await getCarsByBrand(brand, carsPerPage, page);
      setCars(res.docs as any);
      setTotalPages(res.totalPages);
      setLoader(false);
    };
    fetchCars();
  }, [brand]);

  // Fetch cars from server action
  const loadMoreCars = async () => {
    const nextPage = page + 1;
    const res = await getCarsByBrand(brand, carsPerPage, nextPage);

    const newCars = res.docs as any;
    setCars((prevCars) => [...prevCars, ...newCars]);
    setPage(nextPage);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarItem car={car} key={car.id} className="w-full" />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex py-5 item-center justify-center w-full">
          <MyButton
            onClick={loadMoreCars}
            className="hover:bg-black w-[200px]"
            text="view more"
          />
        </div>
      )}
    </div>
  );
};

export default RenderCars;
