import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        </div>
      </div>
    </section>
  );
};

export default Decors;
