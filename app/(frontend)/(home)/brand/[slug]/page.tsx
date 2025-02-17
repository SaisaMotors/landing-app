import React, { Suspense } from "react";
import BrandCars from "../BrandCars";
import { getCars } from "@/actions/car";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: number | number[] | undefined }>;
};

// type Props = {
//   params: { slug: string };
//   searchParams: { page?: number; limit?: number };
// };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const brandName = (await params).slug;
  return {
    title: `${brandName}  Dealers in Eldoret`, // Dynamic Title
    description: `Browse the best ${brandName} cars available today.`,
  };
}
const page = async ({ params, searchParams }: any) => {
  const brand = params?.slug;
  const LIMIT = Number(searchParams.limit) || 20;
  const cars = await getCars(brand, LIMIT);
  return (
    <div className="min-h-[60vh]">
      <BrandCars cars={cars} />
    </div>
  );
};

export default page;
