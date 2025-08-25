import React, { useCallback, useEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import "./UserProfile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ClickButton from "./ClickButton";
import axios from "axios";
import { useNavigate } from "react-router";
import { useToast } from "../hooks/toaster";

export default function UserProfile() {
  const { showToast } = useToast();
  const [userBooking, setUserBookings] = useState();
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
      if (res) showToast("User Logged out Sucessfully", "success");

      console.log(res);
      navigate("/login");
    } catch (error) {
      showToast("Something went wrong", "error");
      console.log("🚀 ~ handleOnClick ~ error:", error);
    }
  };

  useEffect(() => {
    const bookingInfo = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/users/user-bookings",
          {
            withCredentials: true,
          }
        );
        setUserBookings(res.data?.data);
      } catch (error) {
        console.log("🚀 ~ bookingInfo ~ error:", error);
      }
    };

    bookingInfo();
  }, []);

  console.log("hey this is userBooking", userBooking);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = async (event) => {
    console.log("🚀 ~ handleAvatarChange ~ event:", event);
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
      if (res) showToast("Profile Picture updated", "success");

      console.log("this is the respomse for the update avatear ", res.data);
    } catch (error) {
      showToast("Profile Picture cannot be updated", "error");
      console.log("🚀 ~ handleAvatarClick ~ error:", error);
    }
  };

  console.log(
    "🚀 ~ UserProfile ~ fileInputRef.current.value:",
    fileInputRef?.current?.value
  );

  const [isAuth, res] = useAuth();
  console.log("🚀 ~ UserProfile ~ res:", res?.user?.fullname);

  console.log("🚀 ~ UserProfile ~ res:", res);
  if (!res || !res.user) {
    return <div>Loading user data...</div>; // Prevents crash on first render
  }

  const deleteBooking = (book_id) => {
    try {
      axios
        .post(
          "http://localhost:8000/api/v1/users/deleteBooking",
          {
            book_id,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          // console.log("Booking sucessfully deleted");
          showToast("Booking sucessfully deleted", "success")
          bookingInfo()
        });
    } catch (error) {
      console.log("🚀 ~ booking not deleted UserProfile ~ error:", error);
    }
  };

  // console.log(res.user);
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

      <div className="bookings container">
        <h2>My Bookings</h2>
        <div className="booked-hotels">
          <div className="book-detail">
            {userBooking?.map((booking, index) => (
              <div className="booking-rooms" key={index}>
                <div className="booking-room-header">
                  <span>
                    <img src={booking.hotel?.photos[0].url} alt="" />
                  </span>
                  <span>
                    <strong>Hotel:</strong> {booking.hotel?.hotelName || "N/A"}
                  </span>
                  <span>
                    <div className="book-now-ClickButton">
                      <input
                        type="button"
                        typeof="submit"
                        value="Cancel Booking"
                        onClick={() => deleteBooking(booking._id)}
                      />
                    </div>
                  </span>
                </div>

                {booking.hotelRooms?.length > 0 ? (
                  booking.hotelRooms.map((room, i) => (
                    <div key={i} className="room-detail">
                      <span className="col-4">
                        <strong>Room Type:</strong> {room.roomType}
                      </span>
                      <span className="col-4">
                        <strong>Rooms:</strong> {room.quantity}
                      </span>
                      <span className="col-4">
                        <strong>Price:</strong> {room.totalPrice}
                      </span>
                    </div>
                  ))
                ) : (
                  <span>No rooms booked.</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
