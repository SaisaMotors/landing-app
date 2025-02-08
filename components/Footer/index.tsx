import { carItems } from "@/constants";
import { Clock, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import TopBrand from "./TopBrand";
import CopyRight from "./CopyRight";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <div className="w-full   ">
      <div className="w-full bg-[#333333]">
        {/* layer 1 */}
        <div className="lg:max-w-6xl text-[14px] text-white py-16 mx-auto">
          <div className="flex flex-col  lg:flex-row">
            <div className="basis-full flex  flex-row mb-4 lg:mb-0  lg:basis-2/5">
              <div className=" flex justify-center lg:justify-start  basis-1/2">
                <div className="uppercase space-y-4">
                  <Link href="#" className="font-semibold">
                    cars
                  </Link>
                  <ul className="space-y-4">
                    {carItems.map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-primary transform transition-transform duration-300 ease-in-out hover:translate-x-2"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="basis-1/2 flex  justify-center lg:justify-start">
                <div className="uppercase space-y-4">
                  <Link href="/trade-in" className="font-semibold">
                    trade in
                  </Link>
                  <ul className="space-y-4">
                    <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
                      <Link href={"/finacing"}>financing</Link>
                    </li>
                    <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
                      <Link href={"/blog"}>blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="basis-full  lg:basis-1/2">
              <div className="uppercase  border-red-600 space-y-4">
                <div className="flex justify-center lg:justify-start">
                  <Link href="/trade-in" className="font-semibold text-center ">
                    top brands
                  </Link>
                </div>

                <TopBrand />
              </div>
            </div>
            <div className="basis-full  lg:pl-8  lg:basis-1/3">
              <div className="uppercase ">
                <div className="flex flex-col mt-4 lg:mt-0 justify-center items-center lg:items-start gap-4">
                  <Link href="/about-us" className="font-semibold">
                    about us
                  </Link>
                  <Link href="/about-us" className="font-semibold">
                    contact us
                  </Link>
                </div>

                <ul className="space-y-4 mt-5 flex flex-col justify-center items-center lg:items-start normal-case">
                  <li className="flex gap-3 items-center">
                    <Clock className="text-primary h-4 w-4" /> Office Hours : 8
                    am - 5 pm Daily
                  </li>
                  <li className="flex gap-3 items-center">
                    <Phone className="text-primary h-4 w-4" /> 0746962447,
                    07XXXXXXX
                  </li>
                  <li className="flex gap-3 items-center">
                    <Mail className="text-primary h-4 w-4" />{" "}
                    info@saisamotors.co.ke
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* layer 2 */}
        <CopyRight />
        {/* layer 3 */}
        <BottomFooter />
      </div>
    </div>
  );
};

export default Footer;
