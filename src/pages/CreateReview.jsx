import React, { useState } from "react";
import Select from "react-select";
import { selectStyles } from "../utils/selectOptions";
import PrimaryBtn from "../components/primaryBtn";
import { useDispatch } from "react-redux";
import { createReview } from "../redux/actions/auth";
const CreateReview = ({ user }) => {
  const [ratings, setRatings] = useState(0);
  const [message, setMessage] = useState("");

  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createReview(user._id, ratings.value, message));
  };
  return (
    <section className="w-full flex justify-center items-center">
      <div className="content">
        <form
          action=""
          className="w-full p-[20px] flex gap-4 flex-col rounded-lg bg-white"
          onSubmit={submitHandler}
        >
          <h2>Create Review</h2>
          <Select
            placeholder="Choose Rating"
            styles={selectStyles}
            onChange={setRatings}
            value={ratings}
            defaultValue={ratings}
            options={options}
          ></Select>

          <textarea
            className="w-full bg-light_bg p-[10px] rounded-md outline-none"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="bg-crimson text-white rounded-lg">Create</button>
        </form>
      </div>
    </section>
  );
};

export default CreateReview;
