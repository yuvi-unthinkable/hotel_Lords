import React, { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

// export const srcArray = [
//   {
//     source:
//       "https://assets.simplotel.com/simplotel/image/upload/x_0,y_113,w_1280,h_960,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-inn-zirakpur/Exterior_92c349a2",
//     data: "Rang Lords Inn Bharuch",
//   },
//   {
//     source:
//       "https://assets.simplotel.com/simplotel/image/upload/w_4378,h_5000/x_0,y_392,w_4378,h_3285,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-eco-inn-dehradun/Facade_25c29c01",
//     data: "Angel Lords Eco Inn Amreli",
//   },
//   {
//     source:
//       "https://assets.simplotel.com/simplotel/image/upload/x_0,y_369,w_2640,h_1982,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/sk-lords-inn-ahmedabad/Exterior_cc2abc66",
//     data: "Lords Eco Inn Dahej",
//   },
//   {
//     source:
//       "https://assets.simplotel.com/simplotel/image/upload/x_0,y_33,w_916,h_688,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/the_perfect_resort_escape__celebrate_the_new_year_away_from_the_city_rush_image_3da219f1",
//     data: "Lords Eco Inn Jayanagar Bangalore",
//   },
//   {
//     source:
//       "https://assets.simplotel.com/simplotel/image/upload/x_0,y_280,w_959,h_720,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-hotels-resorts/WhatsApp_Image_2025-04-30_at_11.38.00_AM_a77da884",
//     data: "Lords Hrim Akshara Resort Basar",
//   },
//   {
//     source:
//       "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3337/x_276,y_0,w_4448,h_3337,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lords-eco-inn-morbi/Facade_(5)_bf8c1af4",
//     data: "Lords Inn Rajkot",
//   },
// ];

export default function RoomSLider() {
  const [res, setRes] = useState();

  useEffect( () => {
    const fetchHotel = (async() => {
    try {
      axios
        .get("http://localhost:8000/api/v1/users/get-hotels", {
          withCredentials: true,
        })
        .then((temp)=> {

          setRes(temp.data)
          // console.log("🚀 ~ RoomSLider ~ res.data:", res)
        })
        
        
    } catch (error) {
      console.log("🚀 ~ error in getting hotel details:", error);
    }
  })
  fetchHotel()
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
  };

  // useEffect(() => {
  //   console.log("Current Slide Index:", currentIndex);
  // }, [currentIndex]);

  return (
    <div className="room-slider">
      <Slider {...settings}>
        {res?.data?.map((hotel, index) => (
          <Card
            key={index}
            source={hotel.photos?.[0]?.url }
            data={hotel?.hotelName}
          />
        ))}
      </Slider>
    </div>
  );
}
