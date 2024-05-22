import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "./primaryBtn";

const Navbar = ({ isAuthenticated }) => {
  const isActive = (path) => {
    if (path === location.pathname) {
      return true;
    }
    return false;
  };

  const navigate = useNavigate();
  return (
    <nav
      className={`w-full flex justify-center items-center fixed top-0 left-0 bg-white ${
        isAuthenticated && location.pathname !== "/" ? "hidden" : "visible"
      }`}
    >
      <div className="content flex  m-auto py-4 items-center justify-between border-b-2 border-light_bg">
        <Link to={"/"} className="logo text-3xl font-flv text-black font-[500]">
          Event<span className="font-flv text-crimson">Bliss</span>
        </Link>

        <div className="nav-items flex gap-5">
          {[
            { label: "Home", value: "/" },
            { label: "About", value: "/about" },
            { label: "Menu", value: "/menu" },
            { label: "Contact", value: "/contact" },
          ].map((l, index) => (
            <Link
              to={l.value}
              className={`ease-in duration-200 hover:text-crimson ${
                isActive(l.value) ? "text-crimson font-[500]" : "text-gray"
              }`}
              key={index}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav-part-3 flex gap-2 items-center">
          <PrimaryBtn
            handleClick={() => {
              navigate("/register");
            }}
            title={"Register"}
            customStyling={
              "w-[120px] bg-crimson text-white h-[45px] text-center"
            }
          />
          <PrimaryBtn
            title={"Login"}
            handleClick={() => {
              navigate("/login");
            }}
            customStyling={
              "w-[120px] border border-black text-black h-[45px] text-center"
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
