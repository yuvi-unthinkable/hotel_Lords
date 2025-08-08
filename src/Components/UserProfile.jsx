import React from "react";
import useAuth from "../hooks/useAuth";
import "./UserProfile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function UserProfile() {
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
