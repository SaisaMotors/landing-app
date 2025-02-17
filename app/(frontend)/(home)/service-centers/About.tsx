import ButtonLink from "@/components/ButtonLink";
import LayoutHeader from "@/components/LayoutHeader";
import React from "react";

const About = ({ about }: { about: string }) => {
  return (
    <div className="my-7">
      <LayoutHeader slug="service center" />
      <p className="text-[20px] mb-[24px] text-center">{about}</p>

      <div className="my-14 flex justify-center items-center">
        <ButtonLink
          text="get in touch with us"
          className="text-lg  w-full lg:w-1/3 hover:bg-black"
          href="/contact-us"
        />
      </div>
    </div>
  );
};

export default About;
