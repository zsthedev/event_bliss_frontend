import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import {
  eventOptions,
  foodOptions,
  selectStyles,
} from "../../utils/selectOptions";
import { getAllMenu } from "../../redux/actions/menu";
import { getAllDecors } from "../../redux/actions/decor";
import { getAllEvents } from "../../redux/actions/events";
import PrimaryBtn from "../../components/primaryBtn";
import { createPackage } from "../../redux/actions/package";

const CreatePackage = () => {
  const [foodSelections, setFoodSelections] = useState([
    { id: 1, value: null },
  ]);
  const [title, setTitle] = useState("");
  const [event, setEvent] = useState("");
  const [deecor, setDeecor] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [price, setPrice] = useState("");
  
  const {
    loading: rloading,
    error,
    message,
  } = useSelector((state) => state.package);
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
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/admin/packages")
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
      createPackage(
        title,
        event.value,
        deecor.value,
        numOfPeople,
        price,
        foodSelections
      )
    );
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
          <h3 className="text-xl font-[500] text-black">Create New Package</h3>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of People"
            value={numOfPeople}
            onChange={(e) => setNumOfPeople(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            title={"Create Package"}
            customStyling={"bg-crimson my-5 text-white"}
          />
        </form>
      </div>
    </section>
  );
};

export default CreatePackage;
