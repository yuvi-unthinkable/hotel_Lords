import React, { useState } from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay({ prop }) {
  const images = [
    "/images/slider2.jpeg",
    "/images/slider3.jpeg",
    "/images/slider4.jpeg",
    "/images/slider5.jpeg",
    "/images/slider6.jpeg",
    "/images/slider7.jpeg",
    "/images/slider8.jpeg",
    "/images/slider9.jpeg",
    "/images/slider10.jpeg",
    "/images/slider11.jpeg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows: true,
  };
  return (
    // <div className="carousel-parent">
    //   <Navbar />
    <div className="slider-container">
      <Slider {...settings}>
        {/* <div>
          <img src="/images/slider1.png" className="d-block " />
        </div> */}
        {
          images.map((img) => 
            <img src={img} className="d-block " />
          )
        }
      </Slider>
    </div>
    // </div>
  );
}

export default AutoPlay;
