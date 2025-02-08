import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="fixed hidden lg:block right-0 top-1/2 transform -translate-y-1/2 ">
      <ul className="flex flex-col  p-2 bg-primary rounded-l-md">
        <li className="border-b border-slate-300 py-3">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <Image
              alt={"facebook"}
              src={"/images/facebook.png"}
              height={18}
              width={13}
              quality={96}
              priority
            />
          </Link>
        </li>
        <li className="border-b border-slate-300 py-3">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <Image
              alt={"twitter"}
              src={"/images/twitter.png"}
              height={27}
              width={20}
              quality={96}
              priority
            />
          </Link>
        </li>
        <li className="border-b border-slate-300 py-3">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <Image
              alt={"instagram"}
              src={"/images/instagram.png"}
              height={15}
              width={15}
              quality={96}
              priority
            />
          </Link>
        </li>

        <li className="border-b border-slate-300 py-3">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <Image
              alt={"youtube"}
              src={"/images/youtube.png"}
              height={20}
              width={20}
              quality={96}
              priority
            />
          </Link>
        </li>
        {/* {socialLinks.map((social) => (
          <li key={social.name} className="border-b border-slate-300 py-3">
            <Link href={social.href} target="_blank" rel="noopener noreferrer">
              <Image
                alt={social.name}
                src={social.imgPath}
                height={25}
                width={25}
              />
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default SocialLinks;
