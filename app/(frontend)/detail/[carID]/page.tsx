import { getCarByID } from "@/actions/car";
import Link from "next/link";
import React from "react";
import CarDetails from "./CarDetails";
import SimilarCars from "../SimilarCars";

type Props = {
  params: { carID: string };
  searchParams: { page?: number; limit?: number };
  children: React.ReactNode;
};

export async function generateMetadata({ params, searchParams }: Props) {
  const { carID } = params;
  const car = await getCarByID(carID);
  return {
    title: `${car.carName} for sale in Eldoret | ${car.fuel} | ${car.productid}`,
    // description:'',
  };
}
const page = async ({ params, searchParams }: Props) => {
  const { carID } = params;
  const car = await getCarByID(carID);
  return (
    <div className="min-h-screen py-10">
      <div className="flex justify-center items-center flex-col  gap-3">
        <div className="flex items-center gap-3">
          <Link className="text-primary" href={"/"}>
            Home
          </Link>
          <span className="text-[#6c757d]">/</span>
          <Link href="#" className="text-primary">
            All Stock
          </Link>
          <span className="text-[#6c757d]">/</span>
          <Link href="#" className="text-[#6c757d]">
            {car?.carName}
          </Link>
        </div>
        <h2 className="uppercase font-semibold text-[35.2px]">
          {car?.carName}
        </h2>
      </div>
      <CarDetails car={car} />
      <SimilarCars />
    </div>
  );
};

export default page;
