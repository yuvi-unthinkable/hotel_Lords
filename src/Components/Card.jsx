import React from "react";
import ClickButton from "./ClickButton";
import { useNavigate } from "react-router";

export default function Card({ source, data, res }) {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate(`/hotelBooking/${res}`);
    console.log("🚀 ~ Card ~ res:", res);
  };
  return (
    <div id="room-card">
      <div className="img-container">
        <img src={source} alt="" />
      </div>
      <div className="card-data">
        <h3 id="card-about-data">{data}</h3>

        <div className="book-now-ClickButton">
          <input type="button" value="Book Now" onClick={handleOnclick} />
        </div>
      </div>
    </div>
  );
}
