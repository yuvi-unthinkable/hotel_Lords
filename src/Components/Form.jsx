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
          <div className="adults">
            <label htmlFor="peoples">Adults</label>
            <select
              name="people"
              id="people"
              value={dateData?.adults}
              onChange={(e) => handleDateChange(e.target.value, "adults")}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
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
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
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
