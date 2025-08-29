import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { FeedbackCard } from "./FeedbackCard.jsx";

export default function Feedback({ hotelId }) {
  const [res, setRes] = useState();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        axios
          .get(
            `https://chai-and-backend.onrender.com/api/v1/users/getHotelFeedbacks/${hotelId}`,
            {
              withCredentials: true,
            }
          )
          .then((temp) => {
            console.log("🚀 ~ fetchFeedback ~ temp:", temp);
            setRes(temp);
            // console.log("🚀 ~ RoomSLider ~ res.data:", res)
          });
      } catch (error) {
        console.log("🚀 ~ error in getting feedback details:", error);
      }
    };
    fetchFeedback();
  }, []);

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

  //   useEffect(() => {
  //     console.log("Current Slide Index:", currentIndex);
  //   }, [currentIndex]);

  return (
    <div className="room-slider">
      <Slider {...settings}>
        {Array.isArray(res?.data?.data)
          ? res.data.data.map((feedback, index) => (
              <div className=" p-4 mr-3 w-full feedback-card">
                <FeedbackCard
                  key={index}
                  name={feedback.userName}
                  rating={feedback.ratingStar}
                  review={feedback.reviewText}
                />
              </div>
            ))
          : res?.data?.data && (
              <div className="bg-white rounded-xl shadow-md p-4 w-full feedback-card">
                <FeedbackCard
                  key={res.data.data._id}
                  name={res.data.data.userName}
                  rating={res.data.data.ratingStar}
                  review={res.data.data.reviewText}
                />
              </div>
            )}
      </Slider>
    </div>
  );
}
