import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function AutoPlay({ dinner }) {
  const [res, setRes] = useState();

  useEffect(() => {
    const getHotelImage = async () => {
      await axios
        .get("https://chai-and-backend.onrender.com/api/v1/users/get-hotels", {
          withCredentials: true,
        })
        .then((temp) => {
          setRes(temp.data);
          console.log("Hi this it the response data from autoplay   ", res);
        });
    };
    getHotelImage();
  }, []);

  const images = !dinner
    ? [
        "https://assets.simplotel.com/simplotel/image/upload/x_59,y_0,w_1231,h_600,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/image_2025-03-24-13-23-37_67e15cd916f00",
        "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_449,w_5000,h_2435,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-inn-udaipur/Lords_Udaipur,79,2022_937c657a",
        "https://assets.simplotel.com/simplotel/image/upload/w_4378,h_5000/x_0,y_297,w_4378,h_2133,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Facade_26451b28",
        "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_449,w_5000,h_2435,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Mandala_Norling_Lords_Prime_Kathmandu_921f7a4b",
        "https://assets.simplotel.com/simplotel/image/upload/x_0,y_547,w_4160,h_2026,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Ankleshwar_7851ed9a",
        "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_449,w_5000,h_2435,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-inn-udaipur/Lords_Udaipur,79,2022_937c657a",
        "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_449,w_5000,h_2435,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Lords_Ambaji_2024,1_9e81b4ec",
      ]
    : res?.data
        ?.find((hotel) => hotel.hotelName === "hotel-display")
        ?.photos?.map((photo) => photo.url) || [];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows: false,
  };
  return (
    // <div className="carousel-parent">
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
