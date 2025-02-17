import Link from "next/link";
import React from "react";

const SectionHeader = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center items-center flex-col  gap-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-primary">
            Home
          </Link>
          <span className="text-[#6c757d]">/</span>
          <Link href="#" className="text-[#6c757d]">
            Login
          </Link>
          <span className="text-[#6c757d]">/</span>
          <Link href="#" className="text-[#6c757d]">
            Register
          </Link>
        </div>
        <h2 className="uppercase font-semibold text-[35.2px]">
          Login/Register
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
