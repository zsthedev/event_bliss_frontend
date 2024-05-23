import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ author, ratings, message }) => {
  return (
    <div className="w-[20%] h-[220px] bg-white p-4 rounded-lg">
      <div className="pr-row flex gap-3 items-center mb-5">
        <img
          src={author.avatar.url}
          alt=""
          className="w-[56px] h-[56px] rounded-full bg-bg"
        />
        <div className="pr-text">
          <p className="name text-dark_blue text-base font-[600]">{author.name}</p>
          {/* <p className="date text-text text-sm">{date.split("T")[0]}</p> */}
        </div>
      </div>

      <p className="review mb-5 text-text">{message}</p>

      <div className="stars-row flex gap-2">
        {Array.from({ length: ratings }, (_, index) => (
          <FaStar key={index} className="fill-yellow-500" />
        ))}
      </div>
    </div>
  );
};

export default Review;
