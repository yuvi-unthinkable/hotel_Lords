import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="col-xs-12">
      {/* 1st section containing logo and address */}
      <div className="foot-1">
        <div className="foot1-image flex justify-center">
          <img
            src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1315,h_990,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_130,f_auto,c_fit/lords-hotels-resorts-(be-only)/lords_logo_wa"
            alt="logo"
          />
        </div>
        <div className="address-head">
          <div className="foot-head">Address</div>
          <p>Lords Hotels & Resorts</p>
          <p>202, 2nd Floor, Morya Blue Moon, Opposite Citi Mall</p>
          <p> New Link Road, Andheri West, Mumbai - 400053</p>
        </div>
      </div>

      {/* {section 2 containing social link} */}
      <div className="foot-2">
        <div className="foot-head">CONTACT US</div>
        <p className="foot-mail">
          <i className="fa-solid fa-envelope"></i>crs@lordshotels1.com
        </p>
        <p className="foot-mail">
          <i className="fa-solid fa-envelope"></i>crs@lordshotels2.com
        </p>
        <p className="foot-mail">
          <i className="fa-solid fa-envelope"></i>crs@lordshotels3.com
        </p>

        <p>
          <i className="fa-solid fa-phone"></i>+91 73777 34777 | Central
          Reservation
        </p>
        <p>
          <i className="fa-solid fa-phone"></i>+91 73777 34777 | Sales Enquiry
        </p>
        <p>
          <i className="fa-solid fa-phone"></i>+91 73777 34777 | Central
          Reservation
        </p>

        <div className="social-icons">
          <div className="foot-head">Follow Us</div>
          <div className="icon-here">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-square-youtube"></i>
            <i className="fa-brands fa-square-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>

      <div className="foot-3 hidden md:block">
        <div className="foot-head">Quick Links</div>
        <div className="foot-3-data">
          <div className="quick-link1">
            <p> Home</p>
            <p>About Us</p>
            <p>Partner With Us</p>
            <p>Experiences</p>
            <p>Offers</p>
            <p>Upcoming Hotels</p>
            <p>Gallery</p>
            <p>CSR</p>
            <p>Join Our Team</p>
          </div>
          <div className="quick-link2">
            <p>Contact Us</p>
            <p>Blogs</p>
            <p>Learn With Us</p>
            <p>Media</p>
            <p>Feedback</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Manage Booking</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
