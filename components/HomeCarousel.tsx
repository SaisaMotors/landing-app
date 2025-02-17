"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Prop {
  id: string;
  image: any;
  title: string;
  updatedAt: string;
  createdAt: string;
}

const HomeCarousel = ({ carousels }: { carousels: Prop[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000 }),
  ]);

  const handleNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const handlePrevious = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };
  return (
    <div className="relative h-[50vh]  lg:h-[75vh]  mb-8">
      {/* First Layer with Background Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        {/* The first layer is just a background image */}

        <div className=" overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full flex-1">
            {carousels?.map((item: any) => (
              <div key={item.id} className="flex-none relative  w-full min-w-0">
                <Image
                  alt=""
                  src={item.image?.url}
                  fill
                  priority
                  quality={100}
                  className="object-cover absolute"
                />
                <div className=" absolute top-10 px-4 border-white w-full ">
                  <p className="lg:text-[50px] leading-tight text-[35px] max-w-5xl mx-auto text-[#c81a24] font-paytone   text-center  font-semibold">
                    {item?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Layer on top with child elements */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent">
        <div className="border-white px-4 hidden w-full lg:flex justify-between">
          <ChevronLeft
            onClick={handlePrevious}
            className="text-white cursor-pointer size-24"
          />

          <ChevronRight
            onClick={handleNext}
            className="text-white cursor-pointer size-24"
          />
        </div>

        {/* // other component */}
        {/* <div className="text-lg  text-transparent">Search</div> */}
      </div>
    </div>
  );
};

export default HomeCarousel;
