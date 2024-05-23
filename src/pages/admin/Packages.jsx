import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPackages } from "../../redux/actions/package";
import Loader from "../Loader";

const Packages = () => {
  const { loading, error, message, deals } = useSelector(
    (state) => state.package
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPackages());
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <section className="w-full flex items-center justify-center">
      <div className="content">
        <div className="actions-row flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-white w-[400px]"
          />
          <Link
            to={"/admin/package/create"}
            className={
              "bg-crimson w-[120px] rounded-md h-[35px] text-white text-sm flex justify-center items-center"
            }
          >
            Add New
          </Link>
        </div>

        <table className="mt-5">
          <thead>
            <tr>
              <th>Sr</th>
              <th>Title</th>
              <th>Number Of People</th>
              <th>Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deals && deals.length > 0
              ? deals.map((d, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{d.title}</td>
                    <td>{d.numberOfPeople}</td>
                    <td>PKR {d.price}</td>
                    <td className="actions flex gap-3">
                      <Link>Update</Link>
                      <button className="del">Delete</button>
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

export default Packages;
