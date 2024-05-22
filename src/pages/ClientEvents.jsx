import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyRequests } from "../redux/actions/request";
import toast from "react-hot-toast";
import Loader from "./Loader";
import axios from "axios";
import { server } from "../redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { createCheckout } from "../redux/actions/auth";

const ClientEvents = ({user}) => {
  const dispatch = useDispatch();
  const { loading, error, message, requests } = useSelector(
    (state) => state.requests
  );
  useEffect(() => {
    dispatch(getMyRequests());
  }, []);

  const sessionId = useSelector((state) => state.payment?.sessionId);

  const {loading : pLoading} = useSelector(state => state.payment)

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
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      toast.success("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      toast.error(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const clickHandler = (e) => {
    dispatch(createCheckout(e.target.id));
  };
  return loading || pLoading ? (
    <Loader />
  ) : (
    <section className="w-full flex justify-center box-border">
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
                    <td className="actions">
                      {r.status === "fee_pending" && user.role !== "admin" ? (
                        <button id={r._id} onClick={clickHandler}>
                          Pay Fees
                        </button>
                      ) : (
                        ""
                      )}

                      <Link to={`/request/${r._id}`}>View</Link>
                    </td>
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
