import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
  eventOptions,
  foodOptions,
  selectStyles,
} from "../utils/selectOptions";
import PrimaryBtn from "../components/primaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenu } from "../redux/actions/menu";
import { getAllDecors } from "../redux/actions/decor";
import { getAllEvents } from "../redux/actions/events";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { createRequest } from "../redux/actions/request";
import { useNavigate } from "react-router-dom";

const BookEvent = () => {
  const [foodSelections, setFoodSelections] = useState([
    { id: 1, value: null },
  ]);
  const [date, setDate] = useState("");
  const [event, setEvent] = useState("");
  const [deecor, setDeecor] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const {
    loading: rloading,
    error,
    message,
  } = useSelector((state) => state.requests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMenu());
    dispatch(getAllDecors());
    dispatch(getAllEvents());
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      navigate("/client_events");
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message]);

  const { menu, loading } = useSelector((state) => state.menu);
  const { decor, loading: decorLoading } = useSelector((state) => state.decor);
  const { events, loading: eventLoading } = useSelector((state) => state.event);

  const addFoodSelection = () => {
    setFoodSelections([...foodSelections, { _id: "" }]);
  };

  const removeFoodSelection = (id) => {
    setFoodSelections(foodSelections.filter((food) => food._id !== id));
  };

  const handleFoodChange = (selectedOption, id) => {
    const updatedFoodSelections = foodSelections.map((food) =>
      food._id === id ? { _id: selectedOption.value } : food
    );
    setFoodSelections(updatedFoodSelections);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createRequest(
        date,
        event.value,
        deecor.value,
        numOfPeople,
        foodSelections
      )
    );
    console.log(date, event.value, deecor.value, numOfPeople, foodSelections);
  };

  return loading ||
    eventLoading ||
    rloading ||
    decorLoading ||
    !menu ||
    !decor ||
    !events ? (
    <Loader />
  ) : (
    <section className="w-full flex justify-center items-center">
      <div className="content">
        <form
          action=""
          className="w-full bg-white p-[20px] rounded-lg flex flex-col gap-3"
          onSubmit={submitHandler}
        >
          <h3 className="text-xl font-[500] text-black">General Information</h3>
          <input
            type="date"
            placeholder="Enter Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of People"
            value={numOfPeople}
            onChange={(e) => setNumOfPeople(e.target.value)}
          />

          <Select
            styles={selectStyles}
            placeholder="Choose Event"
            options={eventOptions(events)}
            value={event}
            onChange={setEvent}
            defaultValue={event}
          />
          <Select
            styles={selectStyles}
            placeholder="Choose Decor"
            options={eventOptions(decor)}
            value={deecor}
            onChange={setDeecor}
            defaultValue={deecor}
          />

          <div className="actions-row flex w-full justify-between items-center">
            <h3 className="text-xl font-[500] text-black">Food</h3>
            <button
              type="button"
              className="bg-black text-white px-2 py-1 rounded mt-1 text-sm"
              onClick={addFoodSelection}
            >
              Add Food
            </button>
          </div>
          {foodSelections.map((food) => (
            <div key={food.id} className="w-full flex items-center gap-3">
              <Select
                options={foodOptions(menu)}
                styles={selectStyles}
                placeholder="Choose Food"
                value={food.value}
                onChange={(selectedOption) =>
                  handleFoodChange(selectedOption, food._id)
                }
              />
              <button
                type="button"
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => removeFoodSelection(food.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <PrimaryBtn
            title={"Request"}
            customStyling={"bg-crimson my-5 text-white"}
          />
        </form>
      </div>
    </section>
  );
};

export default BookEvent;
