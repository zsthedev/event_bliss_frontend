import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import PrimaryBtn from "../../../components/primaryBtn";
import Loader from "../../Loader";
import { deleteEvent, getAllEvents } from "../../../redux/actions/events";
import { deleteDecor, getAllDecors } from "../../../redux/actions/decor";
const AdminDecors = () => {

  const dispatch = useDispatch();
  const { loading, error, message, decor } = useSelector(
    (state) => state.decor
  );

  useEffect(() => {
    dispatch(getAllDecors());
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
            to={"/admin/decors/create"}
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
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {decor && decor.length > 0
              ? decor.map((m, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{m.title}</td>
                    <td>{m.description}</td>

                    <td className="actions">
                      <Link className="" to={`/admin/decors/update/${m._id}`}>
                        Update
                      </Link>
                      <button
                        className="ml-[20px] del"
                        onClick={() => {
                          dispatch(deleteDecor(m._id));
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

export default AdminDecors;
