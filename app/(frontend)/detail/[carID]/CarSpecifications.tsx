import { Car } from "@/payload-types";
import React from "react";
interface Prop extends Car{}


const CarSpecifications = ({ car }: Prop) => {
  return <div>CarSpecifications</div>;
};

export default CarSpecifications;
