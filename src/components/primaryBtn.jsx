import React from "react";

const PrimaryBtn = ({ title, handleClick, customStyling, id }) => {
  return (
    <button
      id={id}
      onClick={handleClick}
      className={`${customStyling} p-3 rounded-full flex justify-center items-center text-center`}
    >
      {title}
    </button>
  );
};

export default PrimaryBtn;
