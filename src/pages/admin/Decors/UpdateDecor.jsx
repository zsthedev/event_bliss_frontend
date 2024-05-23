import React, { useEffect, useState } from "react";

import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getAllEvents, updateEvent } from "../../../redux/actions/events";
import PrimaryBtn from "../../../components/primaryBtn";
import { getAllDecors, updateDecor } from "../../../redux/actions/decor";

const UpdatDecor = () => {
  const { loading, isAuthenticated, error, message, decor } = useSelector(
    (state) => state.decor
  );
  const params = useParams();
  let selectedItem = decor.find((f) => f._id.toString() === params.id);

  const [title, setTitle] = useState(selectedItem.name);
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!decor.length) {
      dispatch(getAllDecors());
    } else {
      const selectedItem = decor.find((f) => f._id.toString() === params.id);
      if (selectedItem) {
        setTitle(selectedItem.title);
        setDescription(selectedItem.description);
        setAvatar(selectedItem.image.url);
      }
    }
  }, []);

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

  const submitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", avatar);

    dispatch(updateDecor(myForm, params.id));
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
          <h2>Update Decor</h2>
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
          <PrimaryBtn customStyling="bg-crimson text-white" title={"Update"} />
        </form>
      </div>
    </section>
  );
};

export default UpdatDecor;
