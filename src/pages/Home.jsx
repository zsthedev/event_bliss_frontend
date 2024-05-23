import React, { useEffect } from "react";
import PrimaryBtn from "../components/primaryBtn";
import video from "../assets/video.mp4";
import video1 from "../assets/video_2.mp4";
import Events from "./Events";
import Decors from "./Decors";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { updateReqStatus } from "../redux/actions/request";
import Loader from "./Loader";
import { makeCartEmpty } from "../redux/actions/auth";
import Packages from "./admin/Packages";
import AllPackages from "./AllPackages";
const Home = () => {
  const { loading, error, message } = useSelector((state) => state.payment);
  const {
    loading: rLoading,
    error: rError,
    message: rMessage,
  } = useSelector((state) => state.payment);
  const id = useSelector((state) => state.payment?.requestId);
  const dispatch = useDispatch();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    let reqId = window.location.search.split("=")[2];
    if (query.get("success")) {
      toast.success("Order placed! You will receive an email confirmation.");
      dispatch(updateReqStatus(reqId));
    }

    if (query.get("canceled")) {
      toast.error(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [id]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("csuccess")) {
      toast.success("Order placed!");
      // dispatch(makeCartEmpty());
    }

    if (query.get("ccanceled")) {
      toast.error(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message]);

  return loading || rLoading ? (
    <Loader />
  ) : (
    <>
      <section className="w-full min-h-screen flex justify-center items-center">
        <div className="content flex justify-center items-center mt-[150px] mb-[80px]">
          <div className="text-container text-center w-full">
            <h1 className="text-7xl font-flv text-black ">
              Leave Your Burden of <br />{" "}
              <span className="font-flv text-crimson">Event</span> Management on
              Us
            </h1>

            <div className="btn-row m-[40px] flex gap-4 items-center justify-center">
              <PrimaryBtn
                title={"Get Started"}
                customStyling={"w-[200px] h-[50px] bg-crimson text-white"}
              />
              <PrimaryBtn
                title={"View Menu"}
                customStyling={
                  "w-[200px] h-[50px] border border-black text-black"
                }
              />
            </div>

            <div className="videos-container w-[80%] h-[600px] m-auto flex justify-between items-center">
              <video
                src={video}
                autoPlay
                muted
                loop
                className="w-[30%] object-cover object-center overflow-hidden h-full bg-black rounded-lg"
              ></video>
              <video
                src={video1}
                autoPlay
                muted
                loop
                className="w-[69%] h-full object-cover object-center overflow-hidden bg-black rounded-lg"
              ></video>
            </div>
          </div>
        </div>
      </section>

      <Events />
      <Decors />
      <AllPackages />
    </>
  );
};

export default Home;
