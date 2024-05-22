import React from "react";

const CartItem = ({ image, title, category, id }) => {
  return (
    <div className="w-full p-[20px] bg-light_bg flex justify-between rounded-lg items-center">
      <div className="flex items-center gap-4">
        <img src={image} alt="" className="w-[72px] h-[72px] rounded-lg" />
        <div className="cart-text-container">
          <p className="title text-lg text-black font-[500]">{title}</p>
          <p className="text-sm text-crimson">{category}</p>
        </div>
      </div>

      <button className="bg-crimson px-2 py-1 w-[100px] h-[35px] text-white rounded-md">Delete</button>
    </div>
  );
};

export default CartItem;
