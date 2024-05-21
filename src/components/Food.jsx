import React from "react";
import PrimaryBtn from "./primaryBtn";

const Food = ({ name, category, price, image, desc, ratings }) => {
  return (
    <div className="w-[400px] h-[500px] p-[20px] bg-light_bg flex flex-col gap-3 rounded-lg">
      <img
        src={image}
        alt=""
        className="w-full h-[300px] object-cover object-center rounded-lg overflow-hidden"
      />
      <span className="text-sm text-crimson font-[500]">{category}</span>
      <div className="pr-row flex justify-between items-center">
        <p className="name text-2xl text-black font-flv">{name}</p>
        <p className="name text-2xl text-crimson font-flv">{price}</p>
      </div>
      <p className="name text-base text-black">{desc}</p>
      <PrimaryBtn
        title={"Add To Cart"}
        customStyling={"w-full bg-crimson text-white"}
      />
    </div>
  );
};

export default Food;
