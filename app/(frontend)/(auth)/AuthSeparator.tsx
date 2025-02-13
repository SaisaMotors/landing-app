import { Separator } from "@/components/ui/separator";
import { ChevronsRight } from "lucide-react";
import React from "react";

const AuthSeparator = () => {
  return (
    <div className="lg:min-h-screen ">
      <div className="h-full relative  flex justify-center mx-auto px-1  ">
        <Separator className=" w-[0.6px] bg-stone-300  h-[300px] lg:h-full" />

        <div className="bg-primary  absolute bottom-2 lg:bottom-2/3 lg:-left-5 left-[43%] rounded-full p-3.5">
          <ChevronsRight className="text-white" />
        </div>

        {/* <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white w-40 h-40">
          Centered
        </div> */}
      </div>
    </div>
  );
};

export default AuthSeparator;
