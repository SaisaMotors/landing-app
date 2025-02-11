"use client";
import { Car } from "@/payload-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CarPreviewCarousel = ({
  car,
  className,
}: {
  car: Car;
  className?: string;
}) => {
  console.log("cacarousel", car);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000 }),
  ]);

  const { gallery } = car;

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
    <div className={cn("relative h-[500px] ", className)}>
      {/* First Layer with Background Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        <div className=" overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full flex-1">
            {gallery?.map((item: any) => (
              <div key={item.id} className="flex-none relative  w-full min-w-0">
                <Image
                  alt=""
                  src={item?.url}
                  fill
                  priority
                  quality={100}
                  className="object-cover absolute"
                />
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
      </div>
    </div>
  );
};

export default CarPreviewCarousel;
