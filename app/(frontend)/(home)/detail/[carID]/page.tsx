import { getCarByID, getSimilarCars } from "@/actions/car";
import Link from "next/link";
import React from "react";
import CarDetails from "./CarDetails";
import CarItem from "../../brand/CarItem";
import { Metadata, ResolvingMetadata } from "next";
import { formatText } from "@/lib/utils";

// type Props = {
//   params: { carID: string };
//   searchParams: { page?: number; limit?: number };
//   children: React.ReactNode;
// };

// export async function generateMetadata({ params, searchParams }: Props) {
//   const { carID } = params;
//   const car = await getCarByID(carID);
//   return {
//     title: `${car.carName} for sale in Eldoret | ${car.fuel} | ${car.productid}`,
//     // description:'',
//   };
// }

type Props = {
  params: Promise<{ carID: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const carID = (await params).carID;

  const car = await getCarByID(carID);
  return {
    title: `${car.carName} for sale in Eldoret | ${car.fuel} | ${car.productid}`,
    // description:'',
  };
}
const page = async ({ params, searchParams }: Props) => {
  const { carID } = await params;
  const car = await getCarByID(carID);

  const { brand, price, engine } = car;
  const similarCars = await getSimilarCars({ brand: brand, engine });
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
      {similarCars.length > 0 && (
        <div className="px-4 lg:px-0 w-full lg:max-w-6xl mx-auto">
          <h2 className="uppercase font-semibold mb-6 text-[35.2px]">
            Similar Cars
          </h2>
          <div className=" grid grid-cols-1 gap-7 lg:grid-cols-3">
            {similarCars.map((car) => (
              <CarItem key={car.productid} car={car} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
