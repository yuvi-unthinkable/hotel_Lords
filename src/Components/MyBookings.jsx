import React, { useEffect, useState } from 'react';
import { useToast } from '../hooks/toaster';
import axios from 'axios';


function MyBookings() {
      const { showToast } = useToast();
      const [userBooking, setUserBookings] = useState();
    useEffect(() => {
        const bookingInfo = async () => {
          try {
            const res = await axios.get(
              "https://chai-and-backend.onrender.com/api/v1/users/user-bookings",
              {
                withCredentials: true,
              }
            );
            setUserBookings(res.data?.data);
          } catch (error) {
            console.log("🚀 ~ bookingInfo ~ error:", error);
          }
        };
    
        bookingInfo();
      }, []);
  return (
          <div className="bookings container">
        <h2>My Bookings</h2>
        <div className="booked-hotels">
          <div className="book-detail">
            {userBooking?.map((booking, index) => (
              <div className="booking-rooms" key={index}>
                <div className="booking-room-header">
                  <span>
                    <img src={booking.hotel?.photos[0].url} alt="" />
                  </span>
                  <span>
                    <strong>Hotel:</strong> {booking.hotel?.hotelName || "N/A"}
                  </span>
                  bookingInfo
                  <span>
                    <div className="book-now-ClickButton">
                      <input
                        type="button"
                        typeof="submit"
                        value="Cancel Booking"
                        onClick={() => deleteBooking(booking._id)}
                      />
                    </div>
                  </span>
                </div>

                {booking.hotelRooms?.length > 0 ? (
                  booking.hotelRooms.map((room, i) => (
                    <div key={i} className="room-detail">
                      <span className="col-4">
                        <strong>Room Type:</strong> {room.roomType}
                      </span>
                      <span className="col-4">
                        <strong>Rooms:</strong> {room.quantity}
                      </span>
                      <span className="col-4">
                        <strong>Price:</strong> {room.totalPrice}
                      </span>
                      {/* <span className="col-4">
                        <strong>Price:</strong> {room.checkIn}
                      </span>
                      <span className="col-4">
                        <strong>Price:</strong> {room.checkOut}
                      </span> */}
                    </div>
                  ))
                ) : (
                  <span>No rooms booked.</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default MyBookings;
