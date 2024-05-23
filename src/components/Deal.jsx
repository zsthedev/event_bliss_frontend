import React from "react";

const Deal = ({ title, price, numberOfPeople, items }) => {
  return (
    <div className="w-[25%] h-[500px] bg-light_bg p-[20px]">
      <span className="text-sm mb-10 text-crimson">{title}</span>
      <p className="price text-xl text-black font-[600]">PKR {price}</p>
      <p className="people">For {numberOfPeople} Peoples</p>

      <ul>{items && items.length > 0 ? items.map((i) => <li>{i}</li>) : ""}</ul>
    </div>
  );
};

export default Deal;
