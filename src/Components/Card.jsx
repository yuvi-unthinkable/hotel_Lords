import React from "react";
import ClickButton from "./ClickButton";
import { useNavigate } from "react-router";

export default function Card({ source, data, res, aboutData }) {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate(`/hotelBooking/${res}`);
    console.log("🚀 ~ Card ~ res:", res);
  };
  return (
    // <div id="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
    //   <div className="img-container">
    //     <img src={source} alt="" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" />
    //   </div>
    //   <div className="card-data p-4">
    //     <h3 id="card-about-data text-lg font-semibold text-gray-800">{data}</h3>

    //     <div className="book-now-ClickButton  mt-3 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
    //       <input type="button" value="Book Now" onClick={handleOnclick} />
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 m-3 hotel-cards">
  <img
    src={source}
    alt="hotel"
    className="w-full object-cover hover:scale-105 transition-transform duration-300"
  />
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800">{data}</h3>
    <p className="text-gray-600 text-sm mt-1">
      {aboutData}
    </p>
    <button className="mt-3 w-full bg-[#b72221] rounded  text-white py-2 hover:bg-red-700 transition-colors" onClick={handleOnclick}>
      Book Now
    </button>
  </div>
</div>

  );
}
