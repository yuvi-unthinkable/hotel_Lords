import React, { useState } from "react";
import Slider from "react-slick";
import offerCard from "./OfferCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpcomingEventCard from "./UpcomingEventCard"

export const srcArray = [
  {
    source: "https://assets.simplotel.com/simplotel/image/upload/x_63,y_0,w_504,h_630,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/katra_b656c2d6",
    data: "Radhanpur",
    data2: "Gujrat",
  },
  {
    source: "https://assets.simplotel.com/simplotel/image/upload/x_63,y_0,w_504,h_630,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Gir_975fd0ad",
    data: "Una",
    data2: "Gujrat",  },
  {
    source: "https://assets.simplotel.com/simplotel/image/upload/x_127,y_0,w_864,h_1080,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/Tulshishyam_,_Una_,_Gujarat",
    data: "Bhopal",
    data2: "Madhya Pradesh",  },
  {
    source: "https://assets.simplotel.com/simplotel/image/upload/x_108,y_0,w_864,h_1080,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/muduba-shimoga1_8b20d5d8",
    data: "Kota",
    data2: "Rajasthan",  },
  {
    source: "https://assets.simplotel.com/simplotel/image/upload/x_63,y_0,w_504,h_630,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/6607cb7c90874kota_img",
    data: "Siliguri",
    data2: "West Bengal",  },
];

export default function UppcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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
        arrows:false,
      },
    },
  ],
  };
  

  return (
      <Slider {...settings}>
        {srcArray.map((imgSrc, index) => (
          <UpcomingEventCard key={index} source={imgSrc.source} data={imgSrc.data} data2 = {imgSrc.data2} />
        ))}
      </Slider>
  );
}
