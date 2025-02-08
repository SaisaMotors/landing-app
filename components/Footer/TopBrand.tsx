import Link from "next/link";
import React from "react";

const TopBrand = () => {
  return (
    <div>
      {/* mobile layout */}
      <div className="flex lg:hidden justify-around">
        <ul className="space-y-4">
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/toyota"}>toyota</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link
              href={"/brand/nissan"}
              className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2"
            >
              nissan
            </Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/volkswagen"}>volkswagen</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/mercedes-benz"}>mercedes</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/peugeot"}>peugeot</Link>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/audi"}>audi</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/isuzu"}>isuzu</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/land-rover"}>land rover</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/honda"}>honda</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/mistubishi"}>mistubishi</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/mazda"}>mazda</Link>
          </li>
        </ul>
      </div>

      {/* large devices layout */}
      <div className="lg:flex hidden flex-col lg:flex-row justify-between">
        <ul className="space-y-4">
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/toyota"}>toyota</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/nissan"}>nissan</Link>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/volkswagen"}>volkswagen</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/mercedez-benx"}>mercedes</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/peugeot"}>peugeot</Link>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/audi"}>audi</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/isuzu"}>isuzu</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/land-rover"}>land rover</Link>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/honda"}>honda</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/mistubishi"}>mistubishi</Link>
          </li>
          <li className="transform hover:text-primary transition-transform duration-300 ease-in-out hover:translate-x-2">
            <Link href={"/brand/mazda"}>mazda</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBrand;
