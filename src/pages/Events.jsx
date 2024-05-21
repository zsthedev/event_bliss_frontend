import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../redux/actions/events";
import Loader from "./Loader";
import Event from "../components/Event";

const Events = () => {
  const { loading, error, message, events } = useSelector(
    (state) => state.event
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch, error, message]);

  return loading ? (
    <Loader />
  ) : (
    <section className="w-full flex justify-center">
      <div className="content my-[50px] flex flex-col items-center">
        <div className="heading text-center">
          <h2>Featured Events</h2>
          <p>Discover the latest and most exciting events</p>
        </div>

        <div className="events-row w-full flex gap-2 items-center flex-wrap">
          {events && events.length > 0 ? events.map((e) => <Event title={e.title} description={e.description} link={""}/>) : ""}
        </div>
      </div>
    </section>
  );
};

export default Events;
