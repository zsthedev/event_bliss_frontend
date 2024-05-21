import React, { useState } from "react";
import PrimaryBtn from "../components/primaryBtn";

const Profile = ({ user, isAuthenticated }) => {
  const [name, setName] = useState(isAuthenticated && user.name);
  const [email, setEmail] = useState(isAuthenticated && user.email);
  const [role, setRole] = useState(isAuthenticated && user.role);

  return (
    <section className="w-full flex justify-center items-center">
      <div className="content">
        <div className="profile-container h-[600px] bg-white rounded-lg flex overflow-hidden">
          <div className="col w-[30%] h-full p-[20px] flex flex-col gap-3">
            <img
              className="w-full rounded-lg h-[75%] object-cover object-top"
              src={isAuthenticated && user.avatar.url}
              alt=""
            />
            <input type="file" className="inline" />
            <PrimaryBtn
              title={"Update Photo"}
              customStyling={"bg-crimson text-white"}
            />
          </div>
          <div className="col w-[70%] h-full p-[20px] flex items-center">
            <form action="" className="flex flex-col gap-3 w-full">
              <h2>Profile</h2>
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
              <input type="text" placeholder="Role" readOnly value={role}/>
              <PrimaryBtn
                customStyling={"bg-crimson text-white"}
                title={"Update Profile"}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
