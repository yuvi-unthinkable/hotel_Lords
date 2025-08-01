import { useState } from "react";
import "./App.css";
import Marquee from "./Components/Marquee";
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Icons from "./Components/Icons";
import RoomSlider from "./Components/RoomSLider";
import Dining from "./Components/Dining";
import Hospitality from "./Components/Hospitality";
import Footer from "./Components/Footer";
import HotelandResaurts from "./Components/HotelandResaurts";
import SignUp from "./Components/Login&Signup/SignUp";
import Login from "./Components/Login&Signup/Login";
// import UpcomingEvent from "./Components/UpcomingEvents"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  createBrowserRouter,
} from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
]);

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="homepage" element={<><Marquee />
      <Carousel />
      <div className="parent-container">
        <About
          sectionId="about-us"
          supportHeading="About"
          mainHeading="Welcome to Lords Hotels & Resorts"
          aboutData={
            <>
              Jaipur, the Pink City, is a fascinating blend of history, vibrant
              culture, and breathtaking architecture. Lords Plaza Jaipur is
              ideally located about 3 km from the iconic Hawa Mahal, making it a
              perfect base for exploring the city's rich heritage. Our hotel
              offers well-appointed <span>rooms</span>, three event spaces ideal
              for business meetings or celebrations, and two dining options
              catering to diverse tastes. Whether you're visiting for work,
              leisure, or a special occasion, our hotel in Jaipur provides the
              perfect combination of comfort, convenience, and personalised
              service, ensuring a memorable stay in the heart of Jaipur.
            </>
          }
          ClickedButton={true}
        />
        <Icons />
        <HotelandResaurts
          sectionId="hotelId"
          supportHeading="Hotels and Resorts"
          mainHeading="Discover Our Locations"
          roomSlide={true}
        />
        <About
          sectionId="offerId"
          supportHeading="Offers"
          mainHeading="Your Favourite Getaway, Now with Even Better Savings"
          offerSlide={true}
        />
        <Dining />
      </div>

      <Hospitality />

      <div className="parent-container">
        <About
          supportHeading="Stay Tuned"
          mainHeading="Upcoming Projects"
          upcomingEvent={true}
        />
      </div>

      <Footer /></>} />
        </Routes>
      </Router>

      {/* <Login />
      <SignUp />
       */}
    </>
  );
}

export default App;
