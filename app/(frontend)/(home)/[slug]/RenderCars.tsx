"use client";
import React, { useEffect, useState } from "react";
import CarItem from "../brand/CarItem";
import MyButton from "@/components/MyButton";
import { getAllCars, getCars, getInStockCars } from "@/actions/car";

interface Prop {
  slug: string;
}
const RenderCars = ({ slug }: Prop) => {
  const [cars, setCars] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoader] = useState(true);

  const carsPerPage = 20;

  const [totalPages, setTotalPages] = useState(1);

  //   fetch cars initially
  useEffect(() => {
    setLoader(true);
    const getAllStock = async () => {
      const res = await getAllCars(page, carsPerPage);

      console.log("res", res);
      setCars(res.docs);
      setTotalPages(res.totalPages);
      setLoader(false);
    };

    const getInStock = async () => {
      const res = await getInStockCars(page, carsPerPage);

      console.log("in-stock", res);
      setCars(res.docs);
      setTotalPages(res.totalPages);
      setLoader(false);
    };

    const getByShipping = async () => {
      const res = await getInStockCars(page, carsPerPage);

      setCars(res.docs);
      setTotalPages(res.totalPages);
      setLoader(false);
    };
    if (slug === "all-stock") {
      getAllStock();
    }

    if (slug === "in-stock") {
      getInStock();
    }

    if (slug === "shipping") {
      getByShipping();
    }

    if (slug === "new-arrivals") {
      getAllStock();
    }
  }, [slug]);

  // Fetch cars from server action
  const loadMoreCars = async () => {
    const nextPage = page + 1;

    if (slug === "all-stock") {
      const res = await getAllCars(nextPage);

      const newCars = res.docs as any;
      setCars((prevCars) => [...prevCars, ...newCars]);
      setPage(nextPage);
    }
  };

  if (loading)
    return (
      <div className="flex h-full flex-1 justify-center items-center">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/474682/loading.svg"
          alt="Loading icon"
        />
      </div>
    );

  if (cars.length === 0 && !loading) {
    return (
      <div className=" flex-1 justify-center items-center">
        <div className="font-semibold text-lg text-center mt-14">
          Sorry No Car Found!
        </div>
      </div>
    );
  }
  return (
    <div className="px-4 lg:p-0">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarItem car={car} key={car.id} className="w-full" />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex py-5 item-center justify-center w-full">
          <MyButton
            onClick={loadMoreCars}
            className="hover:bg-black text-lg w-[200px]"
            text="view more"
          />
        </div>
      )}
    </div>
  );
};

export default RenderCars;
