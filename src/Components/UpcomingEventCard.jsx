import React from "react";
import ClickButton from "./ClickButton";

export default function offerCard({ source, data, data2 }) {
  return (
    <div id="offer-room-card" className="offer-room-card upcoming-event-card">
      <img
        src={source}
        className="offer-card-image upcoming-event-card-image "
        alt=""
      />
      <div className="card-data upcoming-event-card-data">
        <p id="offer-card-about-data">{data}</p>
        <p id="offer-card-about-data">{data2}</p>
      </div>
    </div>
  );
}
