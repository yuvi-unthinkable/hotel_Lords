import React, { useState } from "react";
import Slider from "react-slick";
import OfferCard from "./OfferCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClickButton from "./ClickButton";

export const srcArray = [
  {
    source:
      "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1025,h_769,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/1024x768_5c4c120a",
    data: "Season’s Treat @5999",
  },
  {
    source:
      "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1024,h_768,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/WhatsApp_Image_2025-07-21_at_11.51.12",
    data: "Jawai Wildlife Leopard Safari Offer",
  },
  {
    source:
      "https://assets.simplotel.com/simplotel/image/upload/x_33,y_0,w_1365,h_1024,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/ChatGPT_Image_May_20,_2025,_12_12_38_PM",
    data: "Monsoon Special Offer",
  },
  // {
  //   source: "https://assets.simplotel.com/simplotel/image/upload/x_128,y_0,w_769,h_769,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/1024x768_5c4c120a",
  //   data: "Season’s Treat @5999",
  // },
];

export default function OfferSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    beforeChange: (_, newIndex) => setCurrentIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024, // screens < 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // screens < 768px (tablet)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // screens < 480px (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : false
        },
      },
    ],
  };

  ClickButton;

  return (
    <div className="slider-card">
      <Slider {...settings}>
        {srcArray.map((imgSrc, index) => (
          <OfferCard key={index} source={imgSrc.source} data={imgSrc.data} />
        ))}
      </Slider>
      <ClickButton className="offer-btn" val="View All" />
    </div>
  );
}
