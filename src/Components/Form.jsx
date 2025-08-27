import React from "react";
import ClickButton from "./ClickButton";

export default function Form({
  insideHotelPage,
  dateData,
  handleDateChange,
  dateOnClick,
  handleProceed,
}) {
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
          <div className="checkInTime">
            <label htmlFor="checkInTime">CheckIn Time</label>
            <select
              name="checkInTime"
              id="checkInTime"
              value={dateData?.checkInTime}
              // max = {dateData?.adults*2}
              onChange={(e) => handleDateChange(e.target.value, "checkInTime")}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
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
          <div className="checkOutTime">
            <label htmlFor="checkOutTime">CheckOut Time</label>
            <select
              name="checkOutTime"
              id="checkOutTime"
              value={dateData?.checkOutTime}
              // max = {dateData?.adults*2}
              onChange={(e) => handleDateChange(e.target.value, "checkOutTime")}
            >
              {Array.from({ length: 24 }, (_, i) => (
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
