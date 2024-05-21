import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "./primaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth";

const Sidebar = ({ navList, component: Component, user, isAuthenticated }) => {
  const [visible, setVisible] = useState(false);
  const isActive = (path) => {
    if (path === location.pathname) {
      return true;
    }
    return false;
  };
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout())
  };
  return (
    <div className="sidebar flex justify-between items-center">
      <div className="w-[15%] h-screen p-[30px] sticky top-0 left-0">
        <p className="logo text-3xl font-flv text-black font-[500] pt-[50px] mb-8">
          Event<span className="font-flv text-crimson">Bliss</span>
        </p>

        <div className="nav-items flex flex-col">
          {navList &&
            navList.length > 0 &&
            navList.map((n) => (
              <Link
                className={`text-gray ${
                  isActive(n.value)
                    ? "bg-crimson text-white w-[full] p-2 rounded-md"
                    : "bg-white"
                }`}
              >
                {n.label}
              </Link>
            ))}
        </div>
      </div>

      <div className="component-area relative bg-light_bg w-[85%] min-h-screen pt-[30px] flex flex-col gap-5 items-center">
        <div className="header h-[80px] w-[95%] bg-white rounded-lg p-5 flex justify-between items-center">
          <p className="text-xl font-[500]">
            Greetings!{" "}
            <span className="text-crimson">{isAuthenticated && user.name}</span>
          </p>

          <div className="actions relative">
            <img
              onClick={() => {
                setVisible(!visible);
              }}
              src={isAuthenticated && user.avatar.url}
              alt=""
              className="w-[56px] h-[56px] rounded-full object-cover object-top cursor-pointer"
            />
            <ul
              className={`dropdown absolute top-[80px] right-0 w-[200px] h-[100px] bg-white p-4 shadow-sm rounded-md ${
                visible ? "visible" : "hidden"
              }`}
            >
              <PrimaryBtn
                title={"Logout"}
                customStyling={
                  "border border-black text-black w-full h-[45px] hover:bg-crimson hover:text-white hover:border-none"
                }
                handleClick={clickHandler}
              />
            </ul>
          </div>
        </div>
        <Component user={user} isAuthenticated={isAuthenticated} />
      </div>
    </div>
  );
};

export default Sidebar;
