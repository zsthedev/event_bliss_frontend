import React, { useEffect } from "react";
import PrimaryBtn from "./primaryBtn";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/auth";

const Food = ({ name, category, price, image, desc, ratings, id }) => {
  const dispatch = useDispatch();
  
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart(e.target.id))
  };

  return (
    <div className={`w-[31%] h-[500px] p-[20px]  flex flex-col gap-3 rounded-lg  ${location.pathname === "/menu" ? "bg-light_bg" : "bg-white"}`}>
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
        id={id}
        handleClick={clickHandler}
      />
    </div>
  );
};

export default Food;
