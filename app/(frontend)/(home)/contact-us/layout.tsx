import Link from "next/link";
import React from "react";
import BannerImage from "../about-us/BannerImage";
import { Metadata } from "next";

interface Prop {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Contact Us ",
  //   description: "Dealers in New and Clean second hand motor vehicles",
};
const layout = ({ children }: Prop) => {
  return (
    <div>
      <BannerImage path="/images/contact-us.jpg" />
      <div className="px-4 py-12 max-w-6xl mx-auto lg:px-0">
        <div>
          <div className="flex justify-center items-center flex-col  gap-3">
            <div className="flex items-center gap-3">
              <Link className="text-primary" href={"/"}>
                Home
              </Link>
              <span className="text-[#6c757d]">/</span>
              <Link href="#" className="text-[#6c757d]">
                Contact Us
              </Link>
            </div>
            <h2 className="uppercase mt-3 font-semibold text-[35.2px]">
              contact us
            </h2>
          </div>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
