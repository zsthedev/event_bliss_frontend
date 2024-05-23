import React from "react";

const Deal = ({ title, price, numberOfPeople, items }) => {
  return (
<<<<<<< HEAD
    <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-auto bg-light_bg p-6 sm:p-8 lg:p-10 flex flex-col rounded-lg mb-8 sm:mb-0">
      <span className="text-xs sm:text-sm lg:text-base mb-4 text-crimson">{title}</span>
      <p className="price text-3xl sm:text-4xl lg:text-5xl text-black font-semibold mb-4">PKR {price}</p>
      <p className="people text-sm sm:text-base lg:text-lg text-dark_gray mb-4">For {numberOfPeople} People</p>
      <ul className="flex flex-col gap-2">
        {items && items.length > 0 ? items.map((item, index) => <li key={index} className="text-xs sm:text-sm lg:text-base">{item.name}</li>) : ""}
      </ul>
=======
    <div className="w-[20%] h-[500px] bg-light_bg p-[30px] flex flex-col rounded-lg">
      <span className="text-sm mb-10 text-crimson">{title}</span>
      <p className="price text-5xl text-black font-[600]">PKR {price}</p>
      <p className="people text-md text-dark_gray mb-10">For {numberOfPeople} Peoples</p>

      <ul className="flex flex-col gap-4">{items && items.length > 0 ? items.map((i) => <li>{i.name}</li>) : ""}</ul>
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
    </div>
  );
};

export default Deal;
