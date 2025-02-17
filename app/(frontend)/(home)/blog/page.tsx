import LayoutHeader from "@/components/LayoutHeader";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog ",
  //   description: "Dealers in New and Clean second hand motor vehicles",
};
const page = () => {
  return (
    <div className="text-3xl min-h-screen text-center p-8">
      <div className="max-w-6xl mx-auto p-4 lg:px-0">
        <LayoutHeader slug="blog" />
      </div>
    </div>
  );
};

export default page;
