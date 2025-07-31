import React, { useState } from "react";
import Slider from "react-slick";
import OfferCard from "./OfferCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpcomingEventCard from "./UpcomingEventCard"

export const srcArray = [
  {
    source: "/images/upcoming.jpeg",
    data: "Radhanpur",
    data2: "Gujrat",
  },
  {
    source: "/images/upcoming2.jpeg",
    data: "Una",
    data2: "Gujrat",  },
  {
    source: "/images/upcoming3.jpeg",
    data: "Bhopal",
    data2: "Madhya Pradesh",  },
  {
    source: "/images/upcoming4.jpeg",
    data: "Kota",
    data2: "Rajasthan",  },
  {
    source: "/images/upcoming5.jpeg",
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
  };

  return (
      <Slider {...settings}>
        {srcArray.map((imgSrc, index) => (
          <UpcomingEventCard key={index} source={imgSrc.source} data={imgSrc.data} data2 = {imgSrc.data2} />
        ))}
      </Slider>
  );
}
