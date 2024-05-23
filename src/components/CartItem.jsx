import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/auth";

const CartItem = ({ image, title, price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full p-[20px] bg-light_bg flex justify-between rounded-lg items-center">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt=""
          className="w-[72px] h-[72px] rounded-lg object-cover object-center"
        />
        <div className="cart-text-container">
          <p className="title text-lg text-black font-[500]">{title}</p>
          <p className="text-lg text-crimson font-[600]">PKR {price}</p>
        </div>
      </div>

      <button
        className="bg-crimson px-2 py-1 w-[100px] h-[35px] text-white rounded-md"
        onClick={() => {dispatch(removeFromCart(id))}}
      >
        Delete
      </button>
    </div>
  );
};

export default CartItem;
