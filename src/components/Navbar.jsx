import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "./primaryBtn";

const Navbar = ({ isAuthenticated }) => {
<<<<<<< HEAD
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return path === location.pathname;
  };

  const navigate = useNavigate();

  return (
    <nav
      className={`w-full flex justify-center items-center fixed top-0 left-0 bg-white z-50 ${
        isAuthenticated &&
        location.pathname !== "/" &&
        location.pathname !== "/menu"
          ? "hidden"
          : "visible"
      }`}
    >
      <div className="content flex w-full max-w-6xl m-auto py-4 px-4 lg:px-0 items-center justify-between border-b-2 border-light_bg">
=======
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
        isAuthenticated && location.pathname !== "/" && location.pathname !== "/menu" ? "hidden" : "visible"
      }`}
    >
      <div className="content flex  m-auto py-4 items-center justify-between border-b-2 border-light_bg">
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
        <Link to={"/"} className="logo text-3xl font-flv text-black font-[500]">
          Event<span className="font-flv text-crimson">Bliss</span>
        </Link>

<<<<<<< HEAD
        <div className="hidden lg:flex nav-items gap-5">
=======
        <div className="nav-items flex gap-5">
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
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

<<<<<<< HEAD
        <div className="hidden lg:flex nav-part-3 gap-2 items-center">
=======
        <div className="nav-part-3 flex gap-2 items-center">
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
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
<<<<<<< HEAD

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-t border-light_bg">
          <div className="flex flex-col items-center py-4">
            {[
              { label: "Home", value: "/" },
              { label: "About", value: "/about" },
              { label: "Menu", value: "/menu" },
              { label: "Contact", value: "/contact" },
            ].map((l, index) => (
              <Link
                to={l.value}
                className={`ease-in duration-200 py-2 hover:text-crimson ${
                  isActive(l.value) ? "text-crimson font-[500]" : "text-gray"
                }`}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <PrimaryBtn
                handleClick={() => {
                  navigate("/register");
                  setIsMobileMenuOpen(false);
                }}
                title={"Register"}
                customStyling={"w-[120px] bg-crimson text-white h-[45px] text-center"}
              />
              <PrimaryBtn
                title={"Login"}
                handleClick={() => {
                  navigate("/login");
                  setIsMobileMenuOpen(false);
                }}
                customStyling={"w-[120px] border border-black text-black h-[45px] text-center"}
              />
            </div>
          </div>
        </div>
      )}
=======
      </div>
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
    </nav>
  );
};

export default Navbar;
