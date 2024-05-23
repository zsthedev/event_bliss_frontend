import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import PrimaryBtn from "../components/primaryBtn";
import { createCartCheckout, getCartItems } from "../redux/actions/auth";
import { loadStripe } from "@stripe/stripe-js";
import Loader from "./Loader";
import toast from "react-hot-toast";

const Cart = ({ user }) => {
  const { cart } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.payment);
  
  const {
    loading: aLoading,
    error: aError,
    message: aMessage,
  } = useSelector((state) => state.menu);

  const calculateTotalPrice = () => {
    return cart && cart.reduce((total, item) => total + item.price, 0) || 0;
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const totalPrice = calculateTotalPrice();

  const clickHandler = (e) => {
    dispatch(createCartCheckout());
  };
  const sessionId = useSelector((state) => state.payment?.csessionId);
  useEffect(() => {
    if (sessionId) {
      console.log(sessionId);
      const openStripe = async () => {
        if (sessionId) {
          const stripePromise = await loadStripe(
            "pk_test_51PInCg2NYJ075ttbhoT6jSjW6A4K2cmdVexyRiERJJ5a4J53rGD357CW5M884Ztui6JwLTqAouMJrSSiIf6bvRtY00awbgniAU"
          );

          stripePromise.redirectToCheckout({
            sessionId: sessionId,
          });
        }
      };

      openStripe();
    }
  }, [dispatch, sessionId]);

  useEffect(() => {
    if (aMessage) {
      toast.success(aMessage);
      dispatch({ type: "clearMessage" });
    }

    if (aError) {
      toast.error(aError);
      dispatch({ type: "clearError" });
    }
  }, [aError, aMessage]);

  return loading || aLoading ? (
    <Loader />
  ) : (
    <section className="w-full flex justify-center">
      <div className="content flex justify-between">
        <div className="cart-container w-[60%] bg-white p-[20px] rounded-lg">
          <h2>Cart</h2>

          <div className="row flex flex-col my-5 gap-4">
            {cart && cart.length > 0
              ? cart.map((c, index) => (
                  <CartItem
                    key={index}
                    title={c.name}
                    price={c.price}
                    image={c.image}
                    id={c.id}
                  />
                ))
              : "Your cart is empty."}
          </div>
        </div>
        <div
          className={`checkout-container w-[38%] h-[300px] bg-white p-[20px] rounded-lg flex flex-col justify-between ${
            user && user.cart.length === 0 ? "hidden" : "visible"
          }`}
        >
          <h2>Checkout</h2>
          <div className="price-row w-full flex justify-between items-center">
            <span className="text-xl text-black font-[600]">Total</span>
            <p className="text-xl text-center font-[600] text-crimson">
              PKR {totalPrice.toFixed(2)}
            </p>
          </div>

          <div className="price-row w-full flex justify-between items-center">
            <span className="text-xl text-black font-[600]">Tax</span>
            <p className="text-xl text-center font-[600] text-crimson">PKR 0</p>
          </div>

          <PrimaryBtn
            title={"Checkout"}
            customStyling={"bg-crimson w-full text-white"}
            handleClick={clickHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default Cart;
