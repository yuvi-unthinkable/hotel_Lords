import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import AutoPlay from "./AutoPlay";

export default function Carousel() {
  return (
    <div className="carousel-container">
      <AutoPlay  dotsIn = {true} className="carousel-width" dinner = {false}/>
      <Form />
    </div>
  );
}
