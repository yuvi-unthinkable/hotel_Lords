import React, { useRef } from "react";
import useAuth from "../hooks/useAuth";
import "./UserProfile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router";

export default function UserProfile() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        {
          withCredentials: true,
        }
      );

      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log("🚀 ~ handleOnClick ~ error:", error);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = async (event) => {
    console.log("🚀 ~ handleAvatarChange ~ event:", event)
    const file = event.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await axios.patch(
        "http://localhost:8000/api/v1/users/avatar-update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log("this is the respomse for the update avatear ", res.data);
    } catch (error) {
      console.log("🚀 ~ handleAvatarClick ~ error:", error);
    }
  };

      console.log("🚀 ~ UserProfile ~ fileInputRef.current.value:", fileInputRef?.current?.value)

  const [isAuth, res] = useAuth();
  console.log("🚀 ~ UserProfile ~ res:", res?.user?.fullname);

  if (!res || !res.user) {
    return <div>Loading user data...</div>; // Prevents crash on first render
  }
  return (
    <div className="profile">
      <Navbar />
      <div className="profile section">
        <div className="profile-upper-section">
          <div className="profile-image">
            <img src={res?.user?.avatar} alt="pic" srcSet="" />
            <p onClick={handleAvatarClick}>
              <i class="fa-solid fa-pen"></i>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleAvatarChange}
              />
            </p>
          </div>
          <div className="user profile-details">
            <div className="profile-data">
              <label htmlFor="fullname">Full Name : </label>
              <span>{res?.user?.fullName || "Guest"}</span>
            </div>
            <div className="profile-data">
              <label htmlFor="username">Username : </label>
              <span>{res?.user?.username}</span>
            </div>
            <div className="profile-data">
              <label htmlFor="email">Email : </label>
              <span>{res?.user?.email}</span>
            </div>
            <div className="profile-data">
              <label htmlFor="password">Password : </label>
              <span>{res?.user?.password}</span>
            </div>
            <div className="profile-data book-now-ClickButton">
              <input type="button" value="Logout" onClick={handleOnClick} />
              <span>{res?.user?.password}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
