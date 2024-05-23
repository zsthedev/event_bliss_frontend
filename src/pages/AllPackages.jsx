import React, { useEffect } from "react";
import Deal from "../components/Deal";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { getAllPackages } from "../redux/actions/package";

const AllPackages = () => {
  const { deals, loading, error, message } = useSelector(
    (state) => state.package
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPackages());
  }, [dispatch]);

  return (
    <section className="w-full flex justify-center items-center">
      <div className="content mt-40 mb-80 flex flex-col">
        <div className="heading mb-8"> {/* Added margin bottom here */}
          <h2>Our Packages</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, sequi.
          </p>
        </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : deals && deals.length > 0 ? (
          <div className="packages-row mt-4"> {/* Adjusted margin top here */}
            {deals.map((d, index) => (
              <Deal
                key={index}
                title={d.title}
                price={d.price}
                items={d.items}
                numberOfPeople={d.numberOfPeople}
              />
            ))}
          </div>
        ) : (
          <p>No packages available</p>
        )}
      </div>
    </section>
  );
};

export default AllPackages;
