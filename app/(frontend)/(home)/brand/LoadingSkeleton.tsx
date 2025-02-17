import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6  ">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="p-2">
          <Skeleton className="h-[200px] w-[100px] bg-red-600" />
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
