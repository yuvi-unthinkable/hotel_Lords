import React from "react";
import ClickButton from "./ClickButton";

export default function Form(props) {
  return (
    <>
      <div className="form">
        <form action="" className="detail-form">
          <div className="location-select">
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

          <div className="location-select">
            <label htmlFor="hotel-select">Hotel</label>
            <select name="hotel-select" id="hotel-select">
              <option value="">Select a Hotel:</option>
            </select>
          </div>
          <div className="checkin">
            <label htmlFor="checkin">Check-In</label>
            <input type="date" name="checkin" />
          </div>
          <div className="adults">
            <label htmlFor="peoples">Adults</label>
            <select name="peoples" id="people">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="child">
            <label htmlFor="child">Children</label>
            <select name="child" id="childs">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="checkout">
            <label htmlFor="checkout">Check-Out</label>
            <input type="date" name="checkout" />
          </div>

          <div className="promoc">
            <label htmlFor="promocode">PromoCode</label>
            <input
              name="promocode"
              type="text"
              placeholder="enter Promocode here"
            />
          </div>
          <div className="book-now">
            <p>
              From <span>2,580</span> INR/Night
            </p>
            <ClickButton val="Book Now" />
            <p className="red">Multi Room Bookings</p>
          </div>
        </form>
        <p>Why book Direct?</p>
      </div>
      {/* <div className="indicators" id="indicators">
        <div className="dot" data-index="0"></div>
        <div className="dot" data-index="1"></div>
        <div className="dot" data-index="2"></div>
        <div className="dot" data-index="3"></div>
        <div className="dot" data-index="4"></div>
        <div className="dot" data-index="5"></div>
        <div className="dot" data-index="6"></div>
        <div className="dot" data-index="7"></div>
        <div className="dot" data-index="8"></div>
        <div className="dot" data-index="9"></div>
        <div className="dot" data-index="10"></div>
      </div> */}
    </>
  );
}
