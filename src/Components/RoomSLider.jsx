import React, { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export default function RoomSLider() {
  const [res, setRes] = useState();

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        axios
          .get(
            "https://chai-and-backend.onrender.com/api/v1/users/get-hotels",
            {
              withCredentials: true,
            }
          )
          .then((temp) => {
            setRes(temp.data);
            console.log("🚀 ~ RoomSLider ~ res.data:", res)
          });
      } catch (error) {
        console.log("🚀 ~ error in getting hotel details:", error);
      }
    };
    fetchHotel();
  }, []);

  // console.log("here is the fetched response data ", res?.data);

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
          arrows: false,
        },
      },
    ],
  };

  console.log("this is hotel response ", res);

  // useEffect(() => {
  //   console.log("Current Slide Index:", currentIndex);
  // }, [currentIndex]);

  return (
    <div className="room-slider">
      <Slider {...settings}>
        {res?.data?.map((hotel, index) => (
          <Card
            key={index}
            source={hotel.photos?.[0]?.url}
            data={hotel?.hotelName}
            res={hotel?._id}
            aboutData = {hotel?.hotelAboutData}
          />
        ))}
      </Slider>
    </div>
  );
}
