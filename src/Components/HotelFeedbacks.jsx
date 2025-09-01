import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Star } from "lucide-react";
import { useToast } from "../hooks/toaster";

function HotelFeedbacks() {
  const { id } = useParams();
  const [res, setRes] = useState();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const totalStars = 5;
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    axios
      .get(
        `https://chai-and-backend.onrender.com/api/v1/users/bookingInfo/${id}`
      )
      .then((res) => {
        console.log("this is the response object ", res);
        setRes(res.data?.data);
      });
  }, [id]);

  const handleClick = (value) => {
    setRating(value);
  };
  

  const handleSubmit = async () => {
    try {
      const submit = await axios.post(
        `https://chai-and-backend.onrender.com/api/v1/users/feedbackSubmit`,
        {
          hotel: await res?.hotel,
          user: await res?.user,
          userName: await res.userName,
          ratingStar: rating,
          reviewText,
          booking: await res._id,
        }
      );
      if (submit) {
        console.log("feedback has been submitted successfully");
        showToast("Thank you for the feedback", "success");
        navigate("/homepage");
      }
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      if (error.response && error.response.status === 409) {
        showToast("Feedback already submitted", "warning");
      } else {
        showToast("Something went wrong, please try again later", "error");
      }
    }
  };

  const handleTextChange = (text) => {
    setReviewText(text);
  };

  return (
    <>

      <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md my-6 feedback-content">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Kindly Review your Stay at Our Hotel
        </h2>

        <div className="grid grid-cols-2 pt-1 md:grid-cols-2 gap-8">
          {/* Hotel & Booking Details */}
          <section className="bg-white p-4 rounded-lg shadow w-max">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {res?.hotelName}
            </h3>

            <div className="text-gray-700 text-sm space-y-1">
              <p>
                <span className="font-medium">Check-In:</span>{" "}
                {new Date(res?.checkInDate).toLocaleDateString()}
              </p>
              <p>
                <span className="font-medium">Check-Out:</span>{" "}
                {new Date(res?.checkOutDate).toLocaleDateString()}
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              Room Details
            </h3>
            <div className="mt-2 space-y-2">
              {res?.hotelRooms.map((room, i) => (
                <div
                  key={i}
                  className="flex justify-between bg-gray-100 p-2 rounded-md"
                >
                  <p className="text-gray-800">{room?.roomType}</p>
                  <p className="text-gray-600">Qty: {room?.quantity}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Rating & Feedback */}
          <section className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-700 mb-2 font-medium">
              Kindly rate your stay (1 to 5 stars)
            </p>
            <div className="flex space-x-2 mb-4">
              {Array.from({ length: totalStars }).map((_, i) => {
                const starValue = i + 1;
                return (
                  <Star
                    key={i}
                    onClick={() => handleClick(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(null)}
                    className={`w-7 h-7 cursor-pointer transition-colors ${
                      starValue <= (hover || rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    } `}
                  />
                );
              })}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="feedback-text"
                className="text-gray-700 font-medium mb-1"
              >
                Share your feedback
              </label>
              <textarea
                className="border rounded-md p-3 h-28 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
                name="feedback-text"
                id="feedback-text"
                placeholder="Write your feedback..."
                value={reviewText}
                onChange={(e) => handleTextChange(e.target.value)}
              />
            </div>

            <button
              className="bg-[#b72221] hover:bg-blue-700 text-white px-5 py-2 rounded-lg mt-4 transition"
              onClick={handleSubmit}
            >
              Submit Feedback
            </button>
          </section>
        </div>
      </div>

    </>
  );
}

export default HotelFeedbacks;
