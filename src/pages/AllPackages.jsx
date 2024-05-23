import React, { useEffect } from "react";
import Deal from "../components/Deal";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { getAllPackages } from "../redux/actions/package";

const AllPackages = () => {
  const { deals, loading, error, message } = useSelector(
    (state) => state.package
  );

  console.log(deals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPackages());
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <section className="w-full flex justify-center items-center">
      <div className="content mt-[40px] mb-[80px]">
        <div className="heading">
          <h2>Our Packages</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, sequi.
          </p>
        </div>
        <div className="packages-row mt-[50px]">
          {deals && deals.length > 0
            ? deals.map((d) => (
                <Deal
                  title={d.title}
                  price={d.price}
                  items={d.items}
                  numberOfPeople={d.numberOfPeople}
                />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default AllPackages;
