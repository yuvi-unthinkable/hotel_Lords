import React, { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const srcArray = [
  // {
  //   source: "/images/card-image-1.avif",
  //   data: "Rang Lords Inn Bharuch",
  // },
  {
    source: "/images/card-image-2.webp",
    data: "Angel Lords Eco Inn Amreli",
  },
  {
    source: "/images/card-image-3.jpeg",
    data: "Lords Eco Inn Dahej",
  },
  {
    source: "/images/card-image-4.jpeg",
    data: "Lords Eco Inn Jayanagar Bangalore",
  },
  {
    source: "/images/card-image-5.jpeg",
    data: "Lords Hrim Akshara Resort Basar",
  },
  {
    source: "/images/card-image-6.jpeg",
    data: "Lords Inn Rajkot",
  },
];

export default function RoomSLider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
  };

  useEffect(() => {
    console.log("Current Slide Index:", currentIndex);
  }, [currentIndex]);

  return (
    <div className="room-slider">
      <Slider {...settings}>
        {srcArray.map((card, index) => (
          <Card key={index} source={card.source} data={card.data} />
        ))}
      </Slider>
    </div>
  );
}
