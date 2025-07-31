import React from "react";
import RoomSLider from "./RoomSLider";
import ClickButton from "./ClickButton";
import OfferSlider from "./OfferSlider";
import UpcomingEvents from "./UpcomingEvents";

export default function About({
  supportHeading,
  mainHeading,
  aboutData,
  roomSlide,
  ClickedButton,
  offerSlide,
  upcomingEvent,
  sectionId,
}) {
  return (
    <div>
      <div id={sectionId}>
        <div className="about-head">
          <span>{supportHeading}</span>
          <h1>{mainHeading}</h1>
        </div>

        <div className="about-Data">
          {aboutData ? <p> {aboutData} </p> : <></>}
          {roomSlide ? <RoomSLider /> : <></>}
          {ClickedButton ? (
            <ClickButton inside={true} val="Know more" />
          ) : (
            <></>
          )}
          {offerSlide ? <OfferSlider /> : <></>}
          {upcomingEvent ? <UpcomingEvents /> : <></>}
        </div>
      </div>
    </div>
  );
}
