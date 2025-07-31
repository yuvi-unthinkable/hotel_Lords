import { useCallback, useInsertionEffect, useState } from "react";
import React from "react";
import ClickButton from "./ClickButton";

export default function Navbar() {
  const [displayHotel, setDisplayHotel] = useState(false);
  const [displaySidebar, setDisplaySidebar] = useState(false);

  // const handleDisplayHotel = () => {
  //   setDisplayHotel((prevDisplayHotel) => !prevDisplayHotel);
  // };
  // const handleDisplaySidebar = () => {
  //   setDisplaySidebar((prevdisplaySidebar) => !prevdisplaySidebar);
  // };

  return (
    <div className="navbar">
      <ul className="navbar-contents">
        <div className="non-resposive-menu-contents">
          <li className="logo-img">
            <img
              src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1315,h_990,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_200,f_auto,c_fit/lords-hotels-resorts-(be-only)/lords_logo_wa"
              alt="Logo"
            />
          </li>
        </div>
        <div className="non-resposive-menu-contents menu-names">
          <li
            className="dropdown"
            onClick={() =>
              setDisplayHotel((prevDisplayHotel) => !prevDisplayHotel)
            }
          >
            <span>
              Hotels <i className="fas fa-angle-down"></i>
            </span>
            {displayHotel ? (
              <div className="dropdown-content hotels-dropdown">
                <div className="search">
                  <input type="text" placeholder="Search for Destination" />
                  <span className="searchIconHolder">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
                <div className="grid">
                  <div>
                    <span>Ahmedabad</span>
                  </div>
                  <div>
                    <span>Ambaji</span>
                  </div>
                  <div>
                    <span>Amreli</span>
                  </div>
                  <div>
                    <span>Ankleshwar</span>
                  </div>
                  <div>
                    <span>Bangalore</span>
                  </div>
                  <div>
                    <span>Basar</span>
                  </div>
                  null
                  <div>
                    <span>Belagavi</span>
                  </div>
                  <div>
                    <span>Bharuch</span>
                  </div>
                  <div>
                    <span>Bhavnagar</span>
                  </div>
                  <div>
                    <span>Dahej</span>
                  </div>
                  <div>
                    <span>Dehradun</span>
                  </div>
                  <div>
                    <span>Dera Bassi</span>
                  </div>
                  <div>
                    <span>Dirang</span>
                  </div>
                  <div>
                    <span>Dwarka</span>
                  </div>
                  <div>
                    <span>Gandhidham</span>
                  </div>
                  <div>
                    <span>Goa</span>
                  </div>
                  <div>
                    <span>Guwahati</span>
                  </div>
                  <div>
                    <span>Jaipur</span>
                  </div>
                  <div>
                    <span>Jammu</span>
                  </div>
                  <div>
                    <span>Jamnagar</span>
                  </div>
                  <div>
                    <span>Jodhpur</span>
                  </div>
                  <div>
                    <span>Kankidham</span>
                  </div>
                  <div>
                    <span>Kathmandu</span>
                  </div>
                  <div>
                    <span>Morbi</span>
                  </div>
                  <div>
                    <span>Nathdwara</span>
                  </div>
                  <div>
                    <span>Navi Mumbai</span>
                  </div>
                  <div>
                    <span>Navsari</span>
                  </div>
                  <div>
                    <span>Nepalgunj</span>
                  </div>
                  <div>
                    <span>Porbandar</span>
                  </div>
                  <div>
                    <span>Rajkot</span>
                  </div>
                  <div>
                    <span>Rajula</span>
                  </div>
                  <div>
                    <span>Saputara</span>
                  </div>
                  <div>
                    <span>Sasan Gir</span>
                  </div>
                  <div>
                    <span>Shrivardhan</span>
                  </div>
                  <div>
                    <span>Somnath</span>
                  </div>
                  <div>
                    <span>Sumerpur</span>
                  </div>
                  <div>
                    <span>Surat</span>
                  </div>
                  <div>
                    <span>Udaipur</span>
                  </div>
                  <div>
                    <span>Vadodara</span>
                  </div>
                  <div>
                    <span>Vadodara</span>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </li>
          <li>
            <span>About Us</span>
          </li>
          <li>
            <span>Partner with Us</span>
          </li>
          <li className="dropdown">
            <span>
              {" "}
              Experience <i className="fas fa-angle-down"></i>
            </span>
            <div className="dropdown-content other">
              <div>
                <span>Leisure Hotels % Resorts</span>
              </div>
              <div>
                <span>Buisness Hotels</span>
              </div>
              <div>
                <span>Pure Vegetarian Hotels & Resorts</span>
              </div>
              <div>
                <span>Pilgrimage Hotels & Resorts</span>
              </div>
              <div>
                <span>Wedding Destinations</span>
              </div>
            </div>
          </li>
          <li>
            <span>Offers</span>
          </li>
          <li>
            <span>Upcoming Hotels</span>
          </li>
          <li>
            <span>Gallery</span>
          </li>
          <li>
            <span>CSR</span>
          </li>
          <li>
            <span>Join Our Team</span>
          </li>
        </div>
        <li
          className="dropdown visible-at-small-screen option-menu"
          id="sm-menu"
          onClick={() =>
            setDisplaySidebar((prevdisplaySidebar) => !prevdisplaySidebar)
          }
        >
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
          {displaySidebar ? (
            <div className="dropdown-content other responsive-activate dropdown-sm">
              <div className="home">
                <span>Home</span>
              </div>
              <div className="aboutus">
                <span>About Us</span>
              </div>
              <div className="partnerwithus">
                <span>Partner with Us</span>
              </div>
              <div className="experience">
                <span>Experience</span>
              </div>
              <div className="offer">
                <span>Offers</span>
              </div>
              <div className="upcominghotel">
                <span>Upcoming Hotel</span>
              </div>
              <div className="gallery">
                <span>Gallery</span>
              </div>
              <div className="csr">
                <span>CSR</span>
              </div>
              <div className="joinourteam">
                <span>Join Our Team</span>
              </div>
            </div>
          ) : (
            <></>
          )}
        </li>

        <div className="visible-at-small-screen">
          <li className="logo-img">
            <img
              src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1315,h_990,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_200,f_auto,c_fit/lords-hotels-resorts-(be-only)/lords_logo_wa"
              alt="Logo"
            />
          </li>
        </div>
        <li>
          <div className="call non-resposive-menu-contents">
            <p>
              Call Us: <span>+91 73777 34777</span>
            </p>
          </div>
          <ClickButton val="Book Now"></ClickButton>
        </li>
      </ul>
    </div>
  );
}
