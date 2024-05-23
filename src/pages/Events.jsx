import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../redux/actions/events";
import Loader from "./Loader";
import Event from "../components/Event";

const Events = () => {
<<<<<<< HEAD
  const { loading, error, message, events } = useSelector((state) => state.event);
  const dispatch = useDispatch();
  
=======
  const { loading, error, message, events } = useSelector(
    (state) => state.event
  );
  const dispatch = useDispatch();
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch, error, message]);

  return loading ? (
    <Loader />
  ) : (
<<<<<<< HEAD
    <section className="w-full flex justify-center px-4 lg:px-0">
      <div className="content my-[50px] flex flex-col items-center w-full max-w-6xl">
        <div className="heading text-center mb-[40px]">
          <h2 className="text-3xl lg:text-5xl font-bold">Featured Events</h2>
          <p className="text-lg lg:text-xl mt-2">Discover the latest and most exciting events</p>
        </div>

        <div className="events-row w-full flex flex-wrap gap-4 justify-center">
          {events && events.length > 0 ? (
            events.map((e, index) => (
              <Event key={index} title={e.title} description={e.description} link={e.link} />
            ))
          ) : (
            <p className="text-center text-gray-500">No events available</p>
          )}
=======
    <section className="w-full flex justify-center">
      <div className="content my-[50px] flex flex-col items-center">
        <div className="heading text-center mb-[40px]">
          <h2>Featured Events</h2>
          <p>Discover the latest and most exciting events</p>
        </div>

        <div className="events-row w-full flex gap-2 items-center flex-wrap">
          {events && events.length > 0 ? events.map((e) => <Event title={e.title} description={e.description} link={""}/>) : ""}
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
        </div>
      </div>
    </section>
  );
};

export default Events;
