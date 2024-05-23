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
<<<<<<< HEAD
import AllPackages from "./AllPackages";

=======
import Packages from "./admin/Packages";
import AllPackages from "./AllPackages";
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
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
<<<<<<< HEAD
      <section className="w-full min-h-screen flex justify-center items-center px-4 lg:px-0">
        <div className="content flex flex-col justify-center items-center mt-[100px] lg:mt-[150px] mb-[60px] lg:mb-[80px] w-full">
          <div className="text-container text-center w-full flex flex-col justify-center items-center">
            <h1 className="text-4xl lg:text-7xl font-flv text-black leading-snug lg:leading-tight">
=======
      <section className="w-full min-h-screen flex justify-center items-center">
        <div className="content flex justify-center items-center mt-[150px] mb-[80px]">
          <div className="text-container text-center w-full">
            <h1 className="text-7xl font-flv text-black ">
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
              Leave Your Burden of <br />{" "}
              <span className="font-flv text-crimson">Event</span> Management on
              Us
            </h1>

<<<<<<< HEAD
            <div className="btn-row mt-[20px] lg:mt-[40px] flex flex-col lg:flex-row gap-4 items-center justify-center">
=======
            <div className="btn-row m-[40px] flex gap-4 items-center justify-center">
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
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

<<<<<<< HEAD
            <div className="videos-container w-full lg:w-[80%] h-[200px] lg:h-[600px] mt-[20px] lg:mt-[40px] flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-center">
=======
            <div className="videos-container w-[80%] h-[600px] m-auto flex justify-between items-center">
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
              <video
                src={video}
                autoPlay
                muted
                loop
<<<<<<< HEAD
                className="w-full lg:w-[30%] h-full object-cover object-center overflow-hidden bg-black rounded-lg"
=======
                className="w-[30%] object-cover object-center overflow-hidden h-full bg-black rounded-lg"
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
              ></video>
              <video
                src={video1}
                autoPlay
                muted
                loop
<<<<<<< HEAD
                className="w-full lg:w-[69%] h-full object-cover object-center overflow-hidden bg-black rounded-lg"
=======
                className="w-[69%] h-full object-cover object-center overflow-hidden bg-black rounded-lg"
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
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
