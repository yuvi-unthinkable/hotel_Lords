import React from "react";
import RoomSLider from "./RoomSLider";
import ClickButton from "./ClickButton";

export default function HotelandResaurts({
  supportHeading,
  mainHeading,
  roomSlide,
  ClickedButton,
  sectionId,
}) {
  return (
    <div>
      <div id = {sectionId}>
      <div className="hotel-about">
        <div className="hotel-head">
          <span>{supportHeading}</span>
          <h1>{mainHeading}</h1>
        </div>

        <div className="hotel-Data">{roomSlide ? <RoomSLider /> : <></>}</div>
      </div>

      </div>
    </div>
  );
}
