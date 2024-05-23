import React from "react";

const Deal = ({ title, price, numberOfPeople, items }) => {
  return (
    <div className="w-[20%] h-[500px] bg-light_bg p-[30px] flex flex-col rounded-lg">
      <span className="text-sm mb-10 text-crimson">{title}</span>
      <p className="price text-5xl text-black font-[600]">PKR {price}</p>
      <p className="people text-md text-dark_gray mb-10">For {numberOfPeople} Peoples</p>

      <ul className="flex flex-col gap-4">{items && items.length > 0 ? items.map((i) => <li>{i.name}</li>) : ""}</ul>
    </div>
  );
};

export default Deal;
