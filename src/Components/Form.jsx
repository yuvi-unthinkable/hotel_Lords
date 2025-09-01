import React, { useEffect } from "react";
import ClickButton from "./ClickButton";
import { getTime } from "date-fns";
import { useToast } from "../hooks/toaster";

export default function Form({
  insideHotelPage,
  dateData,
  handleDateChange,
  dateOnClick,
  handleProceed,
}) {
  const { showToast } = useToast();
  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    console.log("🚀 ~ Form ~ today:", today);

    const currentTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    console.log("🚀 ~ Form ~ currentTime:", currentTime);

    if (dateData?.checkIn === today && dateData?.checkInTime < currentTime) {
      showToast("checkin time should be later than now", "warning");
      handleDateChange(currentTime, "checkInTime");
    }
  }, [dateData?.checkInTime, dateData?.checkIn]);

  return (
    <>
      <div className="form">
        <form action="" className="detail-form">
          <div
            className={
              insideHotelPage ? "inside-hotel-page" : "location-select"
            }
          >
            <label htmlFor="location">Location</label>
            <select name="location" id="location">
              <option value="">Select a City:</option>

              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Ambaji">Ambaji</option>
              <option value="Amreli">Amreli</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Basar">Basar</option>
              <option value="Dehradun">Dehradun</option>
              <option value="Goa">Goa</option>
            </select>
          </div>

          <div
            className={
              insideHotelPage ? "inside-hotel-page" : "location-select"
            }
          >
            <label htmlFor="hotel-select">Hotel</label>
            <select name="hotel-select" id="hotel-select">
              <option value="">Select a Hotel:</option>
            </select>
          </div>
          <div className="checkin">
            <label htmlFor="checkIn">Check-In</label>

            <input
              type="date"
              name="checkIn"
              value={dateData?.checkIn || "dd/mm/yyyy"}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => handleDateChange(e.target.value, "checkIn")}
              required
            />
          </div>

          <div className="flex flex-col gap-1 checkInTime">
            <label
              htmlFor="checkInTime"
              className="text-sm font-medium "
            >
              Check-In Time
            </label>
            <input
              type="time"
              name="checkInTime"
              id="checkInTime"
              value={dateData?.checkInTime}
              onChange={(e) => handleDateChange(e.target.value, "checkInTime")}
              className="border border-gray-300 rounded-lg px-3 py-2
               text-gray-700 focus:outline-none focus:ring-2 
               focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>
          <div className="adults">
            <label htmlFor="peoples">Adults</label>
            <select
              name="people"
              id="people"
              value={dateData?.adults}
              onChange={(e) => handleDateChange(e.target.value, "adults")}
              required
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div className="child">
            <label htmlFor="child">Children</label>
            <select
              name="child"
              id="child"
              value={dateData?.children}
              // max = {dateData?.adults*2}
              onChange={(e) => handleDateChange(e.target.value, "children")}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div className="checkout">
            <label htmlFor="checkout">Check-Out</label>
            <input
              type="date"
              name="checkout"
              min={dateData?.checkIn}
              value={dateData?.checkOut || "dd/mm/yyyy"}
              onChange={(e) => handleDateChange(e.target.value, "checkOut")}
              required
            />
          </div>
          <div className="flex flex-col gap-1 checkOutTime">
            <label
              htmlFor="checkOutTime"
              className="text-sm font-medium"
            >
              Check-out Time
            </label>
            <input
              type="time"
              name="checkOutTime"
              id="checkOutTime"
              min={
                dateData?.checkIn === dateData?.checkOut
                  ? dateData?.checkInTime + 4
                  : ""
              }
              value={dateData?.checkOutTime}
              onChange={(e) => handleDateChange(e.target.value, "checkOutTime")}
              className="border border-gray-300 rounded-lg px-3 py-2
               text-gray-700 focus:outline-none focus:ring-2 
               focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>

          <div className={insideHotelPage ? "inside-hotel-page" : "promoc"}>
            <label htmlFor="promocode">PromoCode</label>
            <input
              name="promocode"
              type="text"
              placeholder="enter Promocode here"
            />
          </div>
          <div className="book-now inside-hotel-page">
            <p className={insideHotelPage ? "inside-hotel-page" : ""}>
              From <span>2,580</span> INR/Night
            </p>
            <ClickButton
              className={insideHotelPage ? "inside-hotel-page" : ""}
              val={insideHotelPage ? "Proceed" : "Book Now"}
              dateOnClick={dateOnClick}
              datePass={true}
            />
            <p className={insideHotelPage ? "inside-hotel-page" : "red"}>
              Multi Room Bookings
            </p>
          </div>
        </form>
        <p className={insideHotelPage ? "inside-hotel-page" : ""}>
          Why book Direct?
        </p>
      </div>
    </>
  );
}
