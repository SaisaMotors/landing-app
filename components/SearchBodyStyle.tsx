import { getAllBodyStyles } from "@/actions/car";
import React from "react";
import BodyStyleItem from "./BodyStyleItem";
import MyButton from "./MyButton";

const SearchBodyStyle = async () => {
  const styles = await getAllBodyStyles();
  return (
    <div className="w-full bg-[#4B4B4B]">
      <div className="w-full text-white  px-4 py-10 min-h-screen lg:max-w-6xl mx-auto ">
        <div className="space-y-4 px-4 flex flex-col items-center">
          <h1 className="text-[35.2px] text-center uppercase leading-tight font-semibold">
            shop cars by body style
          </h1>
          <h2 className="uppercase text-[32px] text-center font-normal">
            Get your dream car from Saisa Motors in Eldoret
          </h2>
          <h3 className="text-[20px] text-center">
            Shop Cars for Sale in Kenya by Brands
          </h3>
        </div>

        {/* // loop brands */}
        <div className="flex flex-wrap mt-8 justify-center items-center ">
          {styles.map((item, index) => (
            <BodyStyleItem
              item={item}
              key={item.id}
              className=" w-1/2 lg:w-1/5 p-4  text-center"
            />
          ))}
        </div>
        <div className="flex  justify-center">
          <MyButton
            className="hover:bg-black text-lg px-8 py-6 font-bold "
            text="search cars"
          />
        </div>

        {/* <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 justify-center items-center "></div> */}
      </div>
    </div>
  );
};

export default SearchBodyStyle;
