import React, { useState } from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function AutoPlay({ prop }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows:true
  };
  return (
    // <div className="carousel-parent">
    //   <Navbar />
      <div className="slider-container">
      <Slider {...settings}>
        {/* <div>
          <img src="/images/slider1.png" className="d-block " />
        </div> */}
        <div>
          <img src="/images/slider2.jpeg" className="d-block " />
        </div>
        <div>
          <img src="/images/slider3.jpeg" className="d-block " />
        </div>
        <div>
          <img src="/images/slider4.jpeg" className="d-block " />
        </div>
        <div>
          <img src="/images/slider5.jpeg" className="d-block " />
        </div>
        <div>
          <img src="/images/slider6.jpeg" className="d-block " />
        </div>
        <div>
          <img src="/images/slider7.jpeg" className="d-block " />
        </div>
        <div>
          <img src="/images/slider8.jpeg" className="d-block " />
        </div>
        <div>
          <img src="/images/slider9.jpeg" className="d-block " />
        </div>
        <div>
          <img src="/images/slider10.jpeg" className="d-block " />
        </div>
        <div>
          <img src="/images/slider11.jpeg" className="d-block " />
        </div>
      </Slider>
    </div>
    // </div>
  );
}

export default AutoPlay;
