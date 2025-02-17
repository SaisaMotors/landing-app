import { getServiceCenter } from "@/actions/service";
import React from "react";
import BannerImage from "../about-us/BannerImage";
import About from "./About";
import WhyChoose from "./WhyChoose";

export const metadata = {
  title: "saisamotors.co.ke/service-center",
};
const page = async () => {
  const res: any = await getServiceCenter();

  const { ["why-choose-us"]: values } = res;
  console.log("service center", res);
  return (
    <div className="min-h-screen m">
      <BannerImage path={res?.coverImage.url} />

      <div className="max-w-6xl px-4 lg:px-0 mx-auto">
        <About about={res.about} />

        {/* Services section */}

        <WhyChoose values={values} footer={res.footer} />
      </div>
    </div>
  );
};

export default page;
