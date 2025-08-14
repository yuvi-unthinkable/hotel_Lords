import React, { useEffect, useState } from "react";
import AutoPlay from "./AutoPlay";
import axios from "axios";
import { useParams } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import About from "./About";
import "./hotelBooking.css";
export default function HotelBookingPage() {
  const { id } = useParams();
  console.log("🚀 ~ HotelBookingPage ~ id:", id);
  const [res, setRes] = useState();


  const rooms = [
    {
        "room-type" : "",
        "No-of-People" : "",
        "price" : "",
        "description" :"",
        "photo" :  

    }
  ]

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        await axios
          .get(`http://localhost:8000/api/v1/users/hotel-details/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("🚀 ~ kabra ka abra fetchHotel ~ res:", res);
            // const temp =
            //   console.log("🚀 ~ fetchHotel abra ka dabra~ temp:", temp)
            setRes(res?.data?.data);
            //   console.log("🚀 ~ fetchHotel ~ temp:", temp)
          });
        console.log("res is here ", res);
      } catch (error) {
        console.log("🚀 ~ HotelBookingPage ~ error:", error);
      }
    };
    fetchHotel();
  }, []);
  if (!res) {
    return <div>Loading user data...</div>; // Prevents crash on first render
  }
  return (
    <>
      <Navbar />

      <div className="booking-page-container">
        <div className="hotel-heading">
          <h2>{res.hotelName}</h2>
        </div>

        <div className="body-section">
          <div className="booking-left-section">
            <div className="image-grid">
              <div className="main-image">
                <img src={res.photos[0].url} alt="" srcset="" />
              </div>
              <div className="other-images">
                <img src={res.photos[1].url} alt="" srcset="" />
                <img src={res.photos[2].url} alt="" srcset="" />
              </div>
            </div>
            <div className="booking-hotel-about">
              <h3>Amenities</h3>
              <p>
                <li>Jacuzzi</li>
                <li>Spa</li>
                <li>Swimming Pool</li>
                <li>Gym</li>
                <li>Restaurant</li>
                <li>Indoor Games</li>
                <li>Butler Services</li>
                <li>24-hour Room Service</li>
                <li>Kids Play Area</li>
                <li>Bar</li>
              </p>
            </div>
          </div>
          <div className="booking-right-section">
            <div className="price-detailing">
                <h2>Price</h2>
                <p>here is the information for
                    for the pricess for your room
                </p>
            </div>
          </div>
        </div>
        <div className="room-section">

            <h2>{res.room-type}</h2>

            <div>
                
            </div>
        </div>
      </div>

      {/* <h1>{res.hotelName}</h1>
      <h3>{res.hotelAboutData}</h3>
      {/* {res.photos.map((photo) => (
        <img src={photo.url} alt="" srcSet="" />
      ))}  */}
      <Footer />
    </>
  );
}
