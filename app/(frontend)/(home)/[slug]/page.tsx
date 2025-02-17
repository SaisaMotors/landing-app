import { formatText } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import RenderCars from "./RenderCars";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  //   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const txt = (await params).slug;
  const heading = formatText(txt);
  return {
    title: heading,
  };
}

const page = ({ params }: any) => {
  const slug = params.slug;

  return (
    <div className=" min-h-[50vh] lg:min-h-screen">
      <div className="mx-auto p-t max-w-6xl  py-10">
        <div className="flex justify-center items-center flex-col mb-9 gap-3">
          <div className="flex items-center gap-3">
            <Link className="text-primary" href={"/"}>
              Home
            </Link>
            <span className="text-[#6c757d]">/</span>
            <Link href="#" className="text-[#6c757d]">
              {slug === "in-stock" && " In Stock"}

              {slug === "all-stock" && " All Stock"}

              {slug === "new-arrivals" && "New Arrivals"}
              {slug === "shipping" && "Shipping"}
            </Link>
          </div>
          <h2 className="uppercase font-semibold text-[35.2px]">
            {slug === "in-stock" && " In Stock"}

            {slug === "all-stock" && " All Stock"}

            {slug === "new-arrivals" && "New Arrivals"}
            {slug === "shipping" && "Shipping"}
          </h2>
        </div>

        <RenderCars slug={slug} />
      </div>
    </div>
  );
};

export default page;
