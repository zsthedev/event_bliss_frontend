import React, { useEffect } from "react";
import PrimaryBtn from "../../components/primaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { deleteFood, getAllMenu } from "../../redux/actions/menu";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import toast from "react-hot-toast";

const FoodItems = () => {
  const dispatch = useDispatch();
  const { loading, error, message, menu } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getAllMenu());
  }, [dispatch, error, message]);
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message]);

  return loading ? (
    <Loader />
  ) : (
    <section className="w-full flex justify-center">
      <div className="content">
        <div className="actions-row flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-white w-[400px]"
          />
          <Link
            to={"/admin/food/create"}
            className={
              "bg-crimson w-[120px] rounded-md h-[35px] text-white text-sm flex justify-center items-center"
            }
          >
            Add New
          </Link>
        </div>

        <table className="my-5">
          <thead>
            <tr>
              <th>Sr</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {menu && menu.length > 0
              ? menu.map((m, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{m.name}</td>
                    <td>{m.category}</td>
                    <td>{m.price}</td>
                    <td className="actions">
                      <Link className="" to={`/admin/food/update/${m._id}`}>
                        Update
                      </Link>
                      <button
                        className="ml-[20px] del"
                        onClick={() => {
                          dispatch(deleteFood(m._id));
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FoodItems;
