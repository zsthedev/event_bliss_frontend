import React, { useState } from "react";
import PrimaryBtn from "../../components/primaryBtn";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <section className="w-fll h-screen flex items-center justify-center">
      <div className="content flex justify-between items-center mt-[50px]">
        <div className="col w-[50%] h-full pt-[80px] pb-[55px] flex justify-center items-center">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="col w-[46%] h-full flex justify-center items-center">
          <form
            onSubmit={submitHandler}
            action=""
            className="w-full flex flex-col gap-2 text-center"
          >
            <h2>Login</h2>
            <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <PrimaryBtn
              title={"Login"}
              customStyling={"bg-crimson rounded-md text-white"}
            />
            <p className="text-base text-dark_gray">
              New Here?{" "}
              <Link to={"/register"} className="text-crimson font-[500]">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
