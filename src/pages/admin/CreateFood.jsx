import React, { useEffect, useState } from "react";
import { filterFoodRow } from "../../utils/selectOptions";
import PrimaryBtn from "../../components/primaryBtn";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { createFood } from "../../redux/actions/menu";
import Loader from "../Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const CreateFood = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cateogry, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [avatar, setAvatar] = useState("");

  const { loading, isAuthenticated, error, message, user } = useSelector(
    (state) => state.menu
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/admin/food");
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message]);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar(file);
    };
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("description", description);
    myForm.append("category", cateogry.value);
    myForm.append("price", price);
    myForm.append("file", avatar);

    dispatch(createFood(myForm));
    console.log(avatar);
  };

  return loading ? (
    <Loader />
  ) : (
    <section className="w-full h-screen flex justify-center">
      <div className="content">
        <form
          onSubmit={submitHandler}
          action=""
          className="bg-white p-[20px] rounded-lg flex flex-col gap-3"
        >
          <h2>Create New Food Item</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Enter Description"
            className="w-full bg-light_bg p-3 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <Select
            value={cateogry}
            defaultValue={cateogry}
            onChange={setCategory}
            options={filterFoodRow}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "transparent",
                backgroundColor: "#F1F1F1",
                textAlign: "left",
                padding: "4px",
                fontWeight: "400",
              }),
            }}
            placeholder="Choose Category"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="file"
            placeholder="Price"
            onChange={changeImageHandler}
          />
          <PrimaryBtn customStyling="bg-crimson text-white" title={"Create"} />
        </form>
      </div>
    </section>
  );
};

export default CreateFood;
