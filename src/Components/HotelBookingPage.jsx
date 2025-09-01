import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router";

import Form from "./Form";
import "./hotelBooking.css";
import { useToast } from "../hooks/toaster";
import Feedback from "./Feedbacks";

export default function HotelBookingPage() {
  const navigate = useNavigate();

  const { showToast } = useToast();

  const { id } = useParams();
  const [res, setRes] = useState();
  const [room, setRoom] = useState([]);
  const [count, setCount] = useState({});
  const [dateData, setDateData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 0,
    children: 0,
    checkInTime: 0,
    checkOutTime: 0,
  });

  const [personSum, setPersonSum] = useState(0);
  console.log("🚀 ~ HotelBookingPage ~ id:", id);
  console.log("🚀 ~ HotelBookingPage ~ count:8768", count);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        await axios
          .get(
            `https://chai-and-backend.onrender.com/api/v1/users/hotel-details/${id}`,
            {
              withCredentials: true,
            }
          )
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
  // let roomFetched = false

  useEffect(() => {
    const fetchRooms = async () => {
      if (
        dateData.checkIn &&
        dateData.checkOut &&
        dateData.adults &&
        dateData.children &&
        dateData.checkInTime &&
        dateData.checkOutTime
      ) {
        if (dateData.checkIn > dateData.checkOut)
          dateData.checkOut = dateData.checkIn;
        console.log("Here is date", dateData);
        try {
          const res = await axios.post(
            `https://chai-and-backend.onrender.com/api/v1/users/rooms-available/${id}`,
            { dateData }
          );
          showToast("Room details fetched", "success");
          console.log("🚀 ~ fetchAvailableRooms ~ res:", res.data);
          const initialCount = {};

          res.data.data.forEach((room) => {
            initialCount[room?._id] = 0;
          });

          setCount((prev) => ({
            ...prev,
            ...initialCount,
          }));
          setRoom(res.data.data);
        } catch (error) {
          showToast("Room details not fetched", "error");
          console.error(error);
        }
      }
    };
    setCount(0);
    fetchRooms();
    setPersonSum(0);
    // setPersonSum(dateData.adults)
  }, [dateData, id]);

  // if(roomFetched) {useEffect(fetchAvailableRooms(),dateData)};

  const handleDateChange = (value, name) => {
    if (
      dateData.checkInTime != 0 &&
      dateData.checkOutTime != 0 &&
      dateData.checkIn === dateData.checkOut &&
      dateData.checkInTime < dateData.checkOutTime + 4
    ) {
      showToast("Stay time should be atleast 4 hours", "warning");
      return;
    }

    setDateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const incrementor = (roomId, availableRooms) => {
    if (personSum < dateData.adults) {
      if (count[roomId] < availableRooms) {
        setPersonSum((prev) => prev + 1);
        setCount((prev) => {
          const current = prev?.[roomId] || 0;

          return {
            ...prev,
            [roomId]: current + 1,
          };
        });
      } else {
        showToast("Cannot book more than available rooms", "warning");
      }
    } else {
      showToast("Add more persons to book more rooms", "warning");
    }

    // setCount((prev) => {
    //   // if(dateData.children <= personSum*2) showToast("parents can have atmost 2 childrens in each room")
    //   console.log("🚀 ~ incrementor ~ personSum:", personSum);
    //   if (personSum >= dateData.adults) {
    //     showToast("select more persons to take more rooms", "warning");
    //     return prev;
    //   }
    //   if (current >= availableRooms) {
    //     showToast("cannot book more than available rooms", "warning");
    //     return prev;
    //   }
    //   setPersonSum((prev) => prev + 1);
    // });
  };
  const decrementor = (roomId) => {
    if (personSum > 0) {
      if (count[roomId] > 0) {
        setPersonSum((prev) => prev - 1);
        setCount((prev) => {
          const current = prev?.[roomId] || 0;

          return {
            ...prev,
            [roomId]: current - 1,
          };
        });
      } else {
        showToast("first add more rooms", "warning");
      }
    } else {
      showToast("cannot remove rooms", "warning");
    }

    // setCount((prev) => {
    //   personSum > 0 && count > 0 ? setPersonSum((prev) => prev - 1) : personSum;
    //   // console.log("🚀 ~ decrementor ~ prev?.qty:", prev?.qty)
    //   console.log("🚀 ~ decrementor ~ personSum:", personSum);

    //   return {
    //     ...prev,
    //     [roomId]: Math.max((prev?.[roomId] || 0) - 1, 0),
    //   };
    // });
  };

  const total = room.reduce((acc, r) => {
    const qty = count?.[r._id] || 0;
    const price = Number(r.price) || 0;
    return acc + qty * price;
  }, 0);

  let p = 0;
  const handleCart = async () => {
    try {
      const cartItems = Object.entries(count || {})
        .filter(([_, qty]) => qty > 0)
        .map(([roomId, qty]) => {
          const r = room.find((rm) => rm._id === roomId);
          p = p + qty * r?.noOfPersons;

          return {
            roomId,
            quantity: qty,
            roomType: r?.roomType,
            price: r?.price,
            totalPrice: qty * r?.price,
            noOfPersons: r?.noOfPersons,
          };
        });

      if (dateData.children > personSum * 3) {
        showToast("add more rooms to accomdate childrens", "warning");
        return;
      }

      if (dateData.adults > p) {
        showToast("add more rooms", "warning");
        return;
      }
      setCount(0);

      const response = await axios.post(
        "https://chai-and-backend.onrender.com/api/v1/users/cart",
        {
          hotelId: res?._id,
          cartItems,
          checkIn: dateData.checkIn,
          checkOut: dateData.checkOut,
          adults: dateData.adults,
          children: dateData.children,
          totalAmount: total,
          checkInTime: dateData.checkInTime,
          checkOutTime: dateData.checkOutTime,
        },
        { withCredentials: true }
      );
      if (response) showToast(" Rooms are booked", "sucess");
      navigate("/profile");

      console.log("🚀 ~ handleCart response:", response);
    } catch (error) {
      showToast(" Rooms  cannot be booked", "error");
      console.error(
        "🚀 ~ handleCart error:",
        error.response?.data || error.message
      );
    }
  };

  const dateOnClick = useCallback((dateData) => {
    console.log("🚀 ~ HotelBookingPage ~ dateData:", dateData);

    fetchAvailableRooms(dateData);
  }, []);

  if (!res) {
    return <div>Loading user data...</div>;
  }

  return (
    <>
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
          <div className="hotel-heading mb-6">
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">
              {res.hotelName}
            </h2>
          </div>

          <div className="body-section">
            <div className="booking-left-section">
              <div className="image-grid">
                <div className="main-image">
                  <img src={res.photos[0].url} alt="" />
                </div>
                <div className="other-images">
                  <img src={res?.photos[1]?.url} alt="" />
                  <img src={res?.photos[2]?.url} alt="" />
                </div>
              </div>
              <div className="booking-hotel-about">
                <h3>Highlights</h3>
                <div className="highlights-features flex">
                  <div className="hotel-highlights flex flex-col items-center">
                    <img
                      src="https://cdn6.agoda.net/images/property/highlights/location.svg"
                      alt=""
                    />
                    <p>In heart of Bangalore</p>
                  </div>
                  <div className="hotel-highlights">
                    <img
                      src="https://cdn6.agoda.net/images/property/highlights/like.svg"
                      alt=""
                    />
                    <p>great for activities</p>
                  </div>
                  <div className="hotel-highlights">
                    <img
                      src="https://cdn6.agoda.net/images/property/highlights/SafetyFeatures.svg"
                      alt=""
                    />
                    <p>Hygiene Plus</p>
                  </div>
                  <div className="hotel-highlights">
                    <img
                      src="https://cdn6.agoda.net/images/property/highlights/transfer.svg"
                      alt=""
                    />
                    <p>Airport Transfer</p>
                  </div>
                  <div className="hotel-highlights">
                    <img
                      src="https://cdn6.agoda.net/images/property/highlights/door.svg"
                      alt=""
                    />
                    <p>Check-in [24-hour]</p>
                  </div>
                </div>
              </div>

              <div className="booking-hotel-about ">
                <h3>Facilities</h3>
                <div className="facilities flex flex-wrap ">
                  <span>
                    <i class="fa-solid fa-check"></i>Free Wifi
                  </span>
                  <span>
                    <i class="fa-solid fa-check"></i>Pool with view
                  </span>
                  <span>
                    <i class="fa-solid fa-check"></i>Free Parking
                  </span>
                  <span>
                    <i class="fa-solid fa-check"></i>Spa
                  </span>
                  <span>
                    <i class="fa-solid fa-check"></i>Front-dest [24-hour]
                  </span>
                  <span>
                    <i class="fa-solid fa-check"></i>Fitness Center
                  </span>
                </div>
              </div>
            </div>
            <div className="booking-right-section">
              <div className="sub-booking-right-section mb-3">
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
              <div className="sub-booking-right-section">
                <h3>About the hotel...</h3>
                <p className="text-gray-500 p-1.5 mt-1 text-base">
                  Welcome to {res.hotelName}, where comfort and luxury meet.
                  Enjoy stylish rooms with modern amenities, delicious dining
                  options, and exceptional service. Whether you're here for
                  business or leisure, we provide a relaxing stay with easy
                  access to local attractions. Book now and experience
                  unparalleled hospitality!
                </p>
              </div>
            </div>
          </div>

          {/* here i will be mentioning the date section */}

          <div className="date-section">
            <div className="room-section">
              <h2> Kindly select the details of your stay...</h2>
              <div className="from">
                <Form
                  insideHotelPage={true}
                  dateData={dateData}
                  setDateData={setDateData}
                  handleDateChange={handleDateChange}
                  dateOnClick={() => dateOnClick(dateData)}
                />
              </div>
            </div>
          </div>

          {/* from here on this room-section */}

          {room.map((room) =>
            room?.availableRooms > 0 ? (
              <div
                key={room._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition 
                 overflow-hidden flex flex-col md:flex-row gap-4 p-4 mb-2"
              >
                {/* Room Image */}
                <div className="flex-shrink-0 md:w-1/3">
                  <img
                    src={room.roomPhoto}
                    alt={room.roomType}
                    className="w-full h-48 md:h-full object-cover rounded-xl"
                  />
                </div>

                {/* Room Info */}
                <div className="flex flex-col justify-between md:w-2/3">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {room.roomType}
                      </h2>
                      <p className="text-gray-600">
                        👥 {room.noOfPersons} persons
                      </p>
                      <p className="text-gray-600">💰 ₹{room.price} / night</p>
                      <p className="text-green-600 font-medium">
                        {room.availableRooms} rooms available
                      </p>
                      <p className="text-gray-500 mt-2">{room.description}</p>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Amenities
                      </h2>
                      <p>Wi-Fi</p>
                      <p>Air Conditioning</p>
                      <p>Flat-Screen TV</p>
                      <p>Mini Fridge</p>
                      <p>Coffee Maker</p>
                      <p>Complimentary Bottled Water</p>
                    </div>
                  </div>

                  {/* Book Now Section */}
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      onClick={() =>
                        incrementor(room._id, room?.availableRooms)
                      }
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      +
                    </button>

                    <button className="flex-1 bg-[#b72221] text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                      {count?.[room._id] || "Book Now"}
                    </button>

                    <button
                      onClick={() => decrementor(room._id)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}

          <div className="feedbacks mt-3.5 bg-[#ecececd9] rounded-2xl shadow-md hover:shadow-lg transition p-4 ">
            <h2 className="text-lg text">What Our Customer's Say</h2>
            {/* {console.log("the response", res)} */}
            <Feedback hotelId={res._id} />
          </div>
        </div>
      </div>

    </>
  );
}
