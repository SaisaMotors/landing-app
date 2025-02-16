import Link from "next/link";
import React from "react";

const About = ({ about }: { about: string }) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col  gap-3">
        <div className="flex items-center gap-3">
          <Link className="text-primary" href={"/"}>
            Home
          </Link>
          <span className="text-[#6c757d]">/</span>
          <Link href="#" className="text-[#6c757d]">
            About Us
          </Link>
        </div>
        <h2 className="uppercase mt-3 font-semibold text-[35.2px]">about us</h2>
      </div>
      <p className="text-[20px] text-center mb-6 ">{about}</p>
    </div>
  );
};

export default About;
