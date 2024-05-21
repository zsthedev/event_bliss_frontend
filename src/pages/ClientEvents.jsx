import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyRequests } from "../redux/actions/request";
import toast from "react-hot-toast";
import Loader from "./Loader";

const ClientEvents = () => {
  const dispatch = useDispatch();
  const { loading, error, message, requests } = useSelector(
    (state) => state.requests
  );
  useEffect(() => {
    dispatch(getMyRequests());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <section className="w-full flex justify-center">
      <div className="content">
        <div className="actions-row flex justify-between items-center mb-5">
          <input
            type="text"
            placeholder="Search"
            className="bg-white w-[400px]"
          />
          <Link
            to={"/book_event"}
            className={
              "bg-crimson w-[120px] rounded-md h-[35px] text-white text-sm flex justify-center items-center"
            }
          >
            Add New
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sr</th>
              <th>Date</th>
              <th>No Of Peoples</th>
              <th>Event</th>
              <th>Decor</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests && requests.length > 0
              ? requests.map((r, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{r.date.split("T")[0]}</td>
                    <td>{r.numberOfPeople}</td>
                    <td>{r.event}</td>
                    <td>{r.decor}</td>
                    <td>{r.cost}</td>
                    <td>{r.status}</td>
                    <td className="actions"></td>
                  </tr>
                ))
              : ""}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClientEvents;
