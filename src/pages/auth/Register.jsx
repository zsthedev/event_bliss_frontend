import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../components/primaryBtn";
import Select from "react-select";
import { userRoles } from "../../utils/selectOptions";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/auth";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar(file);
    };
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.error("Passwords Not Matched");
    }

    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("role", role.value);
    myForm.append("password", password);
    myForm.append("file", avatar);

    dispatch(register(myForm));
    console.log(avatar);
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
            action=""
            className="w-full flex flex-col gap-2 justify-center"
            onSubmit={submitHandler}
          >
            <h2>Register</h2>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Select
              options={userRoles}
              value={role}
              defaultValue={role}
              onChange={setRole}
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
              placeholder="Choose Role"
            />
            <input type="text" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder="Confirm Password" value={cPassword} onChange={(e) => setcPassword(e.target.value)}/>
            <input type="file" onChange={changeImageHandler} />
            <PrimaryBtn
              title={"Register"}
              customStyling={"bg-crimson rounded-md text-white"}
            />
            <p className="text-base text-dark_gray">
              Already Have Account?{" "}
              <Link to={"/login"} className="text-crimson font-[500]">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
