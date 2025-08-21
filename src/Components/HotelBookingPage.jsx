import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./Form";
import "./hotelBooking.css";

export default function HotelBookingPage() {
  const { id } = useParams();
  const [res, setRes] = useState();
  const [room, setRoom] = useState([]);
  const [count, setCount] = useState(null);
  const [dateData, setDateData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 0,
    children: 0,
  });
  console.log("🚀 ~ HotelBookingPage ~ id:", id);
  console.log("🚀 ~ HotelBookingPage ~ count:8768", count);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        await axios
          .get(`http://localhost:8000/api/v1/users/hotel-details/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            setRes(res?.data?.data?.hotel);

            // setRoom(res.data?.data?.rooms);
          });

        console.log("rooms ", room);
      } catch (error) {
        console.log("🚀 ~ HotelBookingPage ~ error:", error);
      }
    };
    fetchHotel();
  }, []);

  // console.log(dateData);

  const fetchAvailableRooms = async (dateData) => {
    console.log("here is date",dateData);
    try {
      await axios
        .post(`http://localhost:8000/api/v1/users/rooms-available/${id}`, {
          dateData,
        })
        .then((res) => {
          console.log("🚀 ~ fetchAvailableRooms ~ res:", res.data);
          setRoom(()=>res.data.data)
          console.log(room)
        });
    } catch (error) {}
  };

  const handleDateChange = (value, name) => {
    setDateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const incrementor = (roomId, availableRooms) => {
    setCount((prev) => {
      const current = prev?.[roomId] || 0;
      if (current >= availableRooms) {
        console.log("cannot book more than available rooms ");
        return prev;
      }
      return {
        ...prev,
        [roomId]: current + 1,
      };
    });
  };
  const decrementor = (roomId) => {
    setCount((prev) => ({
      ...prev,
      [roomId]: Math.max((prev?.[roomId] || 0) - 1, 0),
    }));
  };

  const total = room.reduce((acc, r) => {
    const qty = count?.[r._id] || 0;
    const price = Number(r.price) || 0;
    return acc + qty * price;
  }, 0);

  const handleCart = async () => {
    try {
      const cartItems = Object.entries(count || {})
        .filter(([_, qty]) => qty > 0)
        .map(([roomId, qty]) => {
          const r = room.find((rm) => rm._id === roomId);
          return {
            roomId,
            quantity: qty,
            roomType: r?.roomType,
            price: r?.price,
            totalPrice: qty * r?.price,
            noOfPersons: r?.noOfPersons,
          };
        });

      const response = await axios.post(
        "http://localhost:8000/api/v1/users/cart",
        {
          hotelId: res?._id,
          cartItems,
          checkIn: dateData.checkIn,
          checkOut: dateData.checkOut,
          adults: dateData.adults,
          children: dateData.children,
          totalAmount: total,
        },
        { withCredentials: true }
      );

      console.log("🚀 ~ handleCart response:", response);
    } catch (error) {
      console.error(
        "🚀 ~ handleCart error:",
        error.response?.data || error.message
      );
    }
  };

  const dateOnClick = useCallback((dateData) => {
      console.log("🚀 ~ HotelBookingPage ~ dateData:", dateData);
      // const { checkIn, checkOut } = dateData || {};
      // console.log("🚀 ~ HotelBookingPage ~ checkIn:", checkIn);
      // document.querySelector(".rooms-here").style.display = "block";
      fetchAvailableRooms(dateData);

    },[]
  );

  if (!res) {
    return <div>Loading user data...</div>;
  }

  return (
    <>
      <Navbar />
      <div
        className="background"
        style={{
          backgroundImage: `url(${res.photos[0].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="booking-page-container ">
          <div className="hotel-heading">
            <h2>{res.hotelName}</h2>
          </div>

          <div className="body-section">
            <div className="booking-left-section">
              <div className="image-grid">
                <div className="main-image">
                  <img src={res.photos[0].url} alt="" srcSet="" />
                </div>
                <div className="other-images">
                  <img src={res?.photos[1]?.url} alt="" srcSet="" />
                  <img src={res?.photos[2]?.url} alt="" srcSet="" />
                </div>
              </div>
              <div className="booking-hotel-about">
                <h3>Amenities</h3>
                <p>
                  <li>Jacuzzi</li>
                  <li>Spa</li>
                  <li>Swimming Pool</li>
                  <li>Gym</li>
                  <li>Restaurant</li>
                  <li>Indoor Games</li>
                  <li>Butler Services</li>
                  <li>24-hour Room Service</li>
                  <li>Kids Play Area</li>
                  <li>Bar</li>
                </p>
              </div>
            </div>
            <div className="booking-right-section">
              <div className="price-detailing">
                <h2>Cart</h2>

                {/* : <p>"Add the rooms to be displayed here..."</p> */}

                {Object.values(count || {}).some((c) => c > 0) ? (
                  <>
                    {room.map((room) =>
                      count?.[room._id] > 0 ? (
                        <p key={room._id}>
                          {count[room._id]} x {room.roomType} ={" "}
                          {Number(count[room._id] || 0) *
                            Number(room.price || 0)}
                          {/* {console.log("🚀 ~ total:", total)}
                        {`Total = ${total}`} */}
                        </p>
                      ) : null
                    )}
                    <p>
                      <hr />
                      {`Total = ${total}`}
                    </p>
                    <div className="book-now-ClickButton">
                      <input
                        type="button"
                        value="Proceed to pay"
                        onClick={handleCart}
                      />
                    </div>
                  </>
                ) : (
                  <p>Add the rooms to be displayed here...</p>
                )}
              </div>
            </div>
          </div>

          {/* here i will be mentioning the date section */}

          <div className="date-section">
            <div className="room-section">
              <h2> Kindly select the date of your stay...</h2>
              <div className="from">
                <Form
                  insideHotelPage={true}
                  dateData={dateData}
                  setDateData={setDateData}
                  handleDateChange={handleDateChange}
                  dateOnClick={ () => dateOnClick(dateData)}
                />
              </div>
            </div>
          </div>

          {/* from here on this room-section */}

          {room.map((room) => (
            <div className="room-section, rooms-here">
              <h2 className="room-heading">{room.roomType}</h2>
              <div className="room-section-data">
                <div className="room-image">
                  <img src={room.roomPhoto} alt="" srcSet="" />
                </div>
                <div className="room-about-data">
                  <p> Number of persons {room.noOfPersons}</p>
                  <p> Price of the room {room.price}/night</p>
                  <p>Available Rooms {room?.availableRooms}</p>
                  <p> {room.description}</p>
                  <div className="book-now-ClickButton" key={room._id}>
                    <div className="room-btn">
                      <button
                        onClick={() =>
                          incrementor(room._id, room?.availableRooms)
                        }
                      >
                        +
                      </button>
                      <button>{count?.[room._id] || "Book Now"}</button>
                      <button onClick={() => decrementor(room._id)}>-</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
