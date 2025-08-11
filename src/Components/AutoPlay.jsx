import React, { useState } from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay({ dinner }) {

  const images = !dinner ? [
    "https://assets.simplotel.com/simplotel/image/upload/x_59,y_0,w_1231,h_600,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/image_2025-03-24-13-23-37_67e15cd916f00",
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_449,w_5000,h_2435,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-inn-udaipur/Lords_Udaipur,79,2022_937c657a",
    "https://assets.simplotel.com/simplotel/image/upload/w_4378,h_5000/x_0,y_297,w_4378,h_2133,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Facade_26451b28",
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_449,w_5000,h_2435,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Mandala_Norling_Lords_Prime_Kathmandu_921f7a4b",
    "https://assets.simplotel.com/simplotel/image/upload/x_0,y_547,w_4160,h_2026,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Ankleshwar_7851ed9a",
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_449,w_5000,h_2435,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-inn-udaipur/Lords_Udaipur,79,2022_937c657a",
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_449,w_5000,h_2435,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Lords_Ambaji_2024,1_9e81b4ec",
  ] : [
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3123/x_419,y_0,w_4162,h_3123,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Restaurant_&_Bar_5591c234",
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_279,y_0,w_4442,h_3333,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Lords_Ambaji_2024,22_8f9d25af",
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3337/x_276,y_0,w_4448,h_3337,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/BCR_2_09cde0ff",
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_279,y_0,w_4442,h_3333,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Lords_Ambaji_2024,22_8f9d25af",
  ]

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
        {images.map((img) => (
          <img src={img} className="d-block " />
        ))}
      </Slider>
    </div>
    // </div>
  );
}

export default AutoPlay;
