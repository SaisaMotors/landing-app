import Image from "next/image";
import React from "react";

const BannerImage = ({
  path = "/images/about-cover.jpg",
}: {
  path?: string;
}) => {
  return (
    <div className="relative w-full h-[30vh] lg:h-[70vh]">
      <Image
        alt=""
        src={path}
        priority
        quality={100}
        fill
        className="absolute object-cover"
      />
    </div>
  );
};

export default BannerImage;
