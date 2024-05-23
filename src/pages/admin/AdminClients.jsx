import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  assignReq,
  getAllRequests,
  getAllUsers,
} from "../../redux/actions/request";
import Select from "react-select";
import { vendorOptions } from "../../utils/selectOptions";
import Loader from "../Loader";
import toast from "react-hot-toast";

const AdminClients = () => {
  const dispatch = useDispatch();
  const [vendor, setVendor] = useState();
  const { loading, error, message, requests, users } = useSelector(
    (state) => state.requests
  );
  useEffect(() => {
    dispatch(getAllRequests());
    dispatch(getAllUsers());
  }, [error, message]);

  console.log(users);

  const [visibleRowId, setVisibleRowId] = useState(null);

  const clickHandler = (e) => {
    dispatch(assignReq(e.target.id, vendor.value));
  };
  const toggleVisibility = (id) => {
    setVisibleRowId(visibleRowId === id ? null : id);
  };
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
  
  const vendors =
    users && users.length > 0
      ? users
          .filter((u) => u.role === "vendor")
          .map((u) => ({
            value: u._id,
            label: u.name,
          }))
      : "";


  return loading ? (
    <Loader />
  ) : (
    <section className="w-full flex justify-center items-center">
      <div className="content">
        <div className="actions-row"></div>
        <table>
          <thead>
            <tr>
              <th>Sr</th>
              <th>Date</th>
              <th>Event</th>
              <th>Decor</th>
              <th>Number of Peoples</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests && requests.length > 0
              ? requests.map((r, index) => (
                  <tr key={r._id}>
                    <td>{index + 1}</td>
                    <td>{r.date.split("T")[0]}</td>
                    <td>{r.event}</td>
                    <td>{r.decor}</td>
                    <td>{r.numberOfPeople}</td>
                    <td>{r.cost}</td>
                    <td>{r.status}</td>
                    <td className="actions">
                      {r.status === "fee_pending" ? (
                        ""
                      ) : (
                        <>
                          <button
                            className="mb-2"
                            onClick={() => toggleVisibility(r._id)}
                          >
                            Assign
                          </button>
                          <div
                            className={
                              visibleRowId === r._id ? "visible" : "hidden"
                            }
                          >
                            <Select
                              placeholder="Choose Vendor"
                              options={vendors}
                              value={vendor}
                              onChange={setVendor}
                              defaultValue={vendor}
                            ></Select>
                            <button
                              className="bg-crimson mt-3"
                              onClick={clickHandler}
                              id={r._id}
                            >
                              Apply
                            </button>
                          </div>
                        </>
                      )}
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

export default AdminClients;
