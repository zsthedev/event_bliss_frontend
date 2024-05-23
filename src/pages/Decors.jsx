import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { getAllDecors } from "../redux/actions/decor";
import Loader from "./Loader";
import Decor from "../components/Decor";

const Decors = () => {
  const { loading, error, message, decor: decors } = useSelector(
    (state) => state.decor
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDecors());
  }, [dispatch, error, message]);

  return loading ? (
    <Loader />
  ) : (
    <section className="w-full flex flex-col items-center px-4 lg:px-0">
      <div className="content my-[50px] flex flex-col items-center w-full max-w-6xl">
        <div className="heading text-center mb-[40px]">
          <h2 className="text-3xl lg:text-5xl font-bold">Explore Our Decor</h2>
          <p className="text-lg lg:text-xl mt-2 text-gray-600">Discover the latest and most exciting decors</p>
        </div>

        <div className="decors-row w-full flex flex-wrap gap-4 justify-center">
          {decors && decors.length > 0 ? (
            decors.map((e, index) => (
              <Decor key={index} title={e.title} description={e.description} image={e.image.url} />
            ))
          ) : (
            <p className="text-center text-gray-500">No decors available</p>
          )}
=======
import { getAllEvents } from "../redux/actions/events";
import Loader from "./Loader";
import Event from "../components/Event";
import { getAllDecors } from "../redux/actions/decor";
import Decor from "../components/Decor";

const Decors = () => {
  const { loading, error, message, decor: decors} = useSelector(
    (state) => state.decor
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDecors());
  }, [dispatch, error, message]);
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center">
      <div className="content my-[50px] flex flex-col">
        <div className="heading">
          <h2>Explore Our Decor</h2>
          <p className="desc">Discover the latest and most exciting events</p>
        </div>

        <div className="decors-row my-5 w-full flex gap-2 items-center flex-wrap">
          {decors && decors.length > 0
            ? decors.map((e) => (
                <Decor title={e.title} description={e.description} image={e.image.url} />
              ))
            : ""}
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
        </div>
      </div>
    </section>
  );
};

export default Decors;
