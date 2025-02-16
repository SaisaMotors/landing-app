import { getAboutUs } from "@/actions/about";
import { AboutUs } from "@/payload-types";
import { Metadata } from "next";
import React from "react";
import BannerImage from "./BannerImage";
import About from "./About";
import CoreValues from "./CoreValues";
import MissionSection from "./MissionSection";
import OurServices from "./OurServices";
import TailoredServices from "./TailoredServices";

export const metadata: Metadata = {
  title: "About Us ",
};
const page = async () => {
  const res: any = await getAboutUs();

  const {
    ["about-us"]: aboutUs,
    ["core-values"]: coreValues,
    ["our-mission"]: mission,
    ["our-services"]: services,
    ["tailored-services"]: tailoredServices,
    vision,
  } = res;

  console.log("about us respponse: " + { ...res });
  return (
    <div className="min-h-screen ">
      <BannerImage />

      <div className="max-w-6xl w-full lg:mx-auto py-10">
        <About about={aboutUs} />
        <CoreValues values={coreValues} />
        <MissionSection mission={mission} vision={vision} />
        <OurServices services={services} />
        <TailoredServices services={tailoredServices} />
      </div>
    </div>
  );
};

export default page;
