import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../../components/primaryBtn";
import { createEvent } from "../../../redux/actions/events";
import { createDecor } from "../../../redux/actions/decor";
PrimaryBtn;
const CreateDecor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");

  const { loading, isAuthenticated, error, message, decor } = useSelector(
    (state) => state.decor
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/admin/decors");
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

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", avatar);

    dispatch(createDecor(myForm));
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
          <h2>Create New Decor</h2>
          <input
            type="text"
            placeholder="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter Description"
            className="w-full bg-light_bg p-3 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

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

export default CreateDecor;
