import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReqDetails } from "../redux/actions/request";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const RequestDetail = ({ user }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, error, message, details } = useSelector(
    (state) => state.requests
  );
  useEffect(() => {
    dispatch(getReqDetails(params.id));
  }, []);
  return loading || !details ? (
    <Loader />
  ) : (
    <section className="w-full flex justify-center items-center">
      <div className="content bg-white p-[20px] rounded-lg">
        <h3 className="text-xl text-black font-[600]">
          {user.role === "user" ? "Vendor" : "Client"}
        </h3>
        <div className="row flex items-center gap-4 mt-5">
          <img
            className="w-[100px] h-[100px] rounded-full object-cover object-top"
            src={details.vendor.image}
            alt=""
          />
          <div className="row-details">
            <p className="text-lg font-[600] text-dark">
              {details.vendor.name}
            </p>
            <p className="text-base text-gray">
              {" "}
              <span className="text-dark">Cost Per Person:</span>{" "}
              {details.vendor.costPerPerson}PKR
            </p>
          </div>
        </div>

        <h3 className="text-xl text-black font-[600] mt-6">Event</h3>
        <div className="row flex items-center gap-4 mt-5">
          <img
            className="w-[300px] h-[200px] rounded-lg object-cover object-center"
            src={details.event.image}
            alt=""
          />
          <div className="row-details">
            <p className="text-lg font-[500] text-dark">{details.event.name}</p>
            <p className="text-base text-gray">{details.event.desc}</p>
          </div>
        </div>

        <h3 className="text-xl text-black font-[600] mt-6">Decor</h3>
        <div className="row flex items-center gap-4 mt-5">
          <img
            className="w-[300px] h-[200px] rounded-lg object-cover object-center"
            src={details.decor.image}
            alt=""
          />
          <div className="row-details">
            <p className="text-lg font-[500] text-dark">{details.decor.name}</p>
            <p className="text-base text-gray">{details.event.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDetail;
