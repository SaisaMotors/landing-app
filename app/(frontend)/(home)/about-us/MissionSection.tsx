import Image from "next/image";
import React from "react";

interface Prop {
  mission: string;
  vision: string;
}
const MissionSection = ({ mission, vision }: Prop) => {
  return (
    <div className="grid gap-6 mt-4 grid-cols-1 md:grid-cols-2">
      <div className="relative w-full h-[375px]  ">
        <Image
          alt="our mission/vision"
          src={"/images/who-we-are.jpg"}
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="space-y-9 px-4">
        <div>
          <h2 className="uppercase font-semibold text-[35px]">our mission</h2>
          <p className="text-[20px]">{mission}</p>
        </div>

        <div>
          <h2 className="uppercase font-semibold text-[35px]">our vision</h2>
          <p className="text-[20px]">{vision}</p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
