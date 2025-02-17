import React from "react";
import Link from "next/link";
import RenderCars from "./RenderCars";
import { formatText } from "@/lib/utils";
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
    title: `${txt} for sale in Kenya `,
  };
}

const page = async ({ params }: any) => {
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
