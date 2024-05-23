import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        </div>
      </div>
    </section>
  );
};

export default Decors;
