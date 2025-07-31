import React from "react";
import ClickButton from "./ClickButton";

export default function Card({ source, data }) {
  return (
    <div id="room-card">
      <div className="img-container">
        <img src={source} alt="" />
      </div>
      <div className="card-data">
        <h3 id="card-about-data">{data}</h3>
        <ClickButton val="Know More" />
      </div>
    </div>
  );
}
