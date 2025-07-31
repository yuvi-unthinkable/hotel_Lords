import React from "react";
import ClickButton from "./ClickButton";

export default function Card({ source, data }) {
  return (
    <div id="offer-room-card" className="offer-room-card">
      <img src={source} className="offer-card-image" alt="" />
      <div className="card-data">
        <h3 id="offer-card-about-data">{data}</h3>
      </div>
    </div>
  );
}
