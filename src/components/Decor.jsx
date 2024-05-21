import React from "react";

const Decor = ({ title, description, image }) => {
  return (
    <div className="w-[49%] h-[500px] rounded-lg relative overflow-hidden cursor-pointer">
      <img src={image} alt="" className="w-full h-full object-cover object-center" />
      <div className="overlay w-full h-full absolute top-0 left-0 bg-crimson p-5 flex flex-col justify-end items-start opacity-0 ease-in duration-300 hover:opacity-100">
        <p className="title text-3xl text-white font-flv">{title}</p>
        <p className="desc text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Decor;
