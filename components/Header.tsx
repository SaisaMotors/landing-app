"use client";
import {
  ChevronDown,
  Clock,
  Heart,
  Mail,
  Menu,
  Phone,
  Search,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

export const carItems = [
  {
    name: "all stock",
    href: "all-stock",
  },
  {
    name: "in stock",
    href: "in-stock",
  },
  {
    name: "shipping",
    href: "shipping",
  },
  {
    name: "new arrivals",
    href: "new-arrivals",
  },
];

const MobiveNav = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <div className="flex lg:hidden items-center w-full p-4 px-0 justify-between">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-primary " />
        </SheetTrigger>
        <SheetContent
          title="navigation"
          className=" w-[300px]  px-0 bg-stone-500 uppercase text-white"
        >
          <ScrollArea className="h-full">
            <ul className="w-full ">
              <li className=" border-slate-100 border-b-[0.3px] p-4">
                <Link href="/" className=" ">
                  Home
                </Link>
              </li>

              <li className=" border-slate-100 border-b-[0.3px] p-4">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <span className="flex uppercase items-center">
                      Cars <ChevronDown />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent title="navigation" className="uppercase">
                    <DropdownMenuLabel className="uppercase">
                      Navigation
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {carItems.map((i, k) => (
                      <DropdownMenuItem key={k}>
                        <Link href={i.href}>{i.name}</Link>
                        {i.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li className=" border-slate-100 border-b-[0.3px] p-4">
                <Link href="/about-us" className=" ">
                  About Us
                </Link>
              </li>
              <li className=" border-slate-100 border-b-[0.3px] p-4">
                <Link href="/contact-us" className=" ">
                  contact Us
                </Link>
              </li>
              <li className=" border-slate-100 border-b-[0.3px] p-4">
                <Link href="/blog" className=" ">
                  blog
                </Link>
              </li>
              <li className=" border-slate-100 border-b-[0.3px] p-4">
                <Link href="/service-center" className=" ">
                  service center
                </Link>
              </li>
              <li className=" border-slate-100 border-b-[0.3px] p-4">
                <Link href="/trade-in" className=" ">
                  trade in
                </Link>
              </li>
              <li className=" border-slate-100 border-b-[0.3px] p-4">
                <Link href="/financing" className=" ">
                  financing
                </Link>
              </li>
              <li className=" border-slate-100 border-b-[0.3px] p-4">
                <Link href="/wishlist" className=" ">
                  wishlist
                </Link>
              </li>
            </ul>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <Image
        alt="logo"
        priority
        quality={99}
        height={200}
        width={150}
        // fill
        src={"/images/logo.png"}
        className="object-center"
      />

      <div className="flex gap-1  border-green-600 items-center">
        {/* // search */}

        {showSearch ? (
          <div className="border-slate-300  items-center overflow-hidden flex flex-1 rounded-md  border">
            <input
              placeholder="SEARCH "
              className="flex-1 text-neutral-800 border-0 border-transparent outline-none focus:border-transparent focus:ring-0 border-none  text-sm p-2"
              onBlur={() => setShowSearch(false)}
            />

            <Search className="text-primary" />
          </div>
        ) : (
          <div className=" flex flex-1 ">
            <div
              onClick={() => setShowSearch(true)}
              className="flex-1 flex items-center cursor-pointer "
            >
              <span className="uppercase flex-1 text-neutral-500 text-sm font-light">
                search
              </span>
              <Search className="text-primary" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const Header = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  return (
    <div className="shadow-lg ">
      <div className="pt-5 pb-3 px-4 md:px-0 w-full lg:max-w-6xl mx-auto ">
        {/* layer 1 */}
        <div className="flex justify-between  w-full ">
          <div className="flex gap-7">
            <div className="flex items-center gap-2">
              <Clock className="text-primary h-4 w-4" />
              <p className="text-[10px]">Office Hours : 8 am - 5 pm Daily</p>
            </div>

            <div className="md:flex items-center gap-2 hidden ">
              <Phone className="text-primary h-4 w-4" />
              <Link href="" className="text-[13px]">
                0746962447
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="md:flex hidden gap-4">
              <div className="flex items-center gap-2">
                <Mail className="text-primary h-4 w-4" />
                <Link href="" className="text-[12px]">
                  info@saisamotors.co.ke
                </Link>
              </div>
            </div>

            <div className="md:flex hidden items-center gap-2">
              {/* <Link href="" className="text-[13px] ">
              Login/Register
            </Link> */}
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-primary h-4 w-4" />
              <Link href="" className="text-[13px]">
                Wishlist
              </Link>
            </div>
          </div>
        </div>
        {/* layer 2 */}

        <div className="hidden lg:flex  border-red-500 border-red  justify-between    ">
          {/* menu */}
          <div className="flex    justify-end items-end border-blue-500 text-[#323232]  text-[14px] ">
            <Link
              href=""
              className="uppercase relative py-[19px] px-[15px] group "
            >
              <span>home</span>
              <span className="absolute right-0 left-0 top-12  h-[3px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer" asChild>
                <span className="uppercase flex items-center py-[19px] px-[15px] group ">
                  Cars <ChevronDown />
                </span>

                {/* <span className="absolute right-0 left-0 top-12  h-[3px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span> */}
              </HoverCardTrigger>
              <HoverCardContent className="w-auto -mt-5">
                <ul className="space-y-3">
                  {carItems.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="uppercase ">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>
            <Link
              href="/about-us"
              className="uppercase relative py-[19px] px-[15px] group "
            >
              <span className="text-nowrap">about us</span>
              <span className="absolute right-0 left-0 top-12  h-[3px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/contact-us"
              className="uppercase relative py-[19px] px-[15px] group "
            >
              <span className="text-nowrap">contact us</span>
              <span className="absolute right-0 left-0 top-12  h-[3px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/blog"
              className="uppercase relative py-[19px] px-[15px] group "
            >
              <span>blog</span>
              <span className="absolute right-0 left-0 top-12  h-[3px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
          {/* logo */}
          <div className="w-[200px] h-[100px]  relative">
            <Image
              alt="logo"
              priority
              quality={98}
              fill
              src={"/images/logo.png"}
              className="object-center"
            />
          </div>
          {/* <div>
          <Image
            alt="logo"
            src={"/images/logo.jpg"}
            priority
            quality={99}
            width={227}
            height={86}
          />
        </div> */}
          {/* actions */}
          <div className="flex  justify-end  items-end flex-1 ">
            <div className="flex gap-1  border-green-600 items-center">
              {/* // search */}

              {showSearch ? (
                <div className="border-slate-300  items-center overflow-hidden flex flex-1 rounded-md  border">
                  <input
                    placeholder="SEARCH "
                    className="flex-1 text-neutral-800 border-0 border-transparent outline-none focus:border-transparent focus:ring-0 border-none  text-sm p-2"
                    onBlur={() => setShowSearch(false)}
                  />

                  <Search className="text-primary" />
                </div>
              ) : (
                <div className=" flex flex-1 ">
                  <div
                    onClick={() => setShowSearch(true)}
                    className="flex-1 flex items-center cursor-pointer "
                  >
                    <span className="uppercase flex-1 text-neutral-500 text-sm font-light">
                      search
                    </span>
                    <Search className="text-primary" />
                  </div>
                </div>
              )}

              <div className="flex gap-1 ">
                <ButtonLink text="trade in" href="tradein" className="" />
                <ButtonLink
                  text="financing"
                  href="financing"
                  className="bg-black hover:bg-black "
                />
                <ButtonLink
                  text="service center"
                  href="service-centers"
                  className="max-w-24 text-wrap text-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <MobiveNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
