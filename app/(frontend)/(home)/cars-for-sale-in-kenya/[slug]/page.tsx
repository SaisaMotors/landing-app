import React from "react";
import Link from "next/link";
import RenderCars from "./RenderCars";

interface Prop {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Prop) {
  // const { carID } = params;
  // const car = await getCarBy(carID);
  return {
    title: `${params.slug} for sale in Kenya `,
    // description:'',
  };
}

const page = async ({ params }: Prop) => {
  return (
    <div className="min-h-screen py-8">
      <div className="flex justify-center items-center flex-col mb-6 gap-3">
        <div className="flex items-center gap-3">
          <Link className="text-primary" href={"/"}>
            Home
          </Link>
          <span className="text-[#6c757d]">/</span>
          <Link href="#" className="text-[#6c757d]">
            {params.slug} For Sale in Kenya
          </Link>
        </div>
        <h2 className="uppercase font-semibold text-[35.2px]">
          {params.slug} For Sale in Kenya
        </h2>
      </div>
      {/* // render cars */}
      <RenderCars brand={params.slug} />
    </div>
  );
};

export default page;
