import React, { useEffect, useState } from "react";
import { filterFoodRow } from "../../utils/selectOptions";
import PrimaryBtn from "../../components/primaryBtn";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { createFood, updateFood } from "../../redux/actions/menu";
import Loader from "../Loader";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateFood = () => {
  const { loading, isAuthenticated, error, message, menu } = useSelector(
    (state) => state.menu
  );
  const params = useParams();
  let selectedItem = menu.find((f) => f._id.toString() === params.id);

  const [name, setName] = useState(selectedItem.name);
  const [description, setDescription] = useState("");
  const [cateogry, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!menu.length) {
      dispatch(getAllMenu());
    } else {
      const selectedItem = menu.find((f) => f._id.toString() === params.id);
      if (selectedItem) {
        setName(selectedItem.name);
        setDescription(selectedItem.description);
        setCategory(filterFoodRow.find((f) => f.value === selectedItem.category));
        setPrice(selectedItem.price);
        setAvatar(selectedItem.image.url);
      }
    }
  }, []);

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

  const submitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("description", description);
    myForm.append("category", cateogry.value);
    myForm.append("price", price);
    myForm.append("file", avatar);

    dispatch(updateFood(myForm, params.id));
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
          <h2>Update Food Item</h2>
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
          <PrimaryBtn customStyling="bg-crimson text-white" title={"Update"} />
        </form>
      </div>
    </section>
  );
};

export default UpdateFood;
