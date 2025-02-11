import React, { Suspense } from "react";
import BrandCars from "../BrandCars";
import { getCars } from "@/actions/car";
import LoadingSkeleton from "../LoadingSkeleton";

type Props = {
  params: { slug: string };
  searchParams: { page?: number; limit?: number };
};

export async function generateMetadata({ params }: Props) {
  const brandName = (await params).slug;
  return {
    title: `${brandName}  Dealers in Eldoret`, // Dynamic Title
    description: `Browse the best ${brandName} cars available today.`,
  };
}
const page = async ({ params, searchParams }: Props) => {
  const brand = params.slug;
  console.log("brand", brand);
  const LIMIT = Number(searchParams.limit) || 20;
  const cars = await getCars(brand, LIMIT);
  console.log("cars: ", cars);
  return (
    <div className="min-h-[60vh]">
      <BrandCars cars={cars} />
    </div>
  );
};

export default page;
