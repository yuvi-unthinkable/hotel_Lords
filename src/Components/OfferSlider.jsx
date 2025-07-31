import React, { useState } from "react";
import Slider from "react-slick";
import OfferCard from "./OfferCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClickButton from "./ClickButton";

export const srcArray = [
  {
    source: "/images/offer-1.jpeg",
    data: "Season’s Treat @5999",
  },
  {
    source: "/images/offer-2.jpeg",
    data: "Jawai Wildlife Leopard Safari Offer",
  },
  {
    source: "/images/offer-3.jpeg",
    data: "Monsoon Special Offer",
  },
  {
    source: "/images/offer-4.jpeg",
    data: "Season’s Treat @5999",
  },
];

export default function OfferSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    beforeChange: (_, newIndex) => setCurrentIndex(newIndex),
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
