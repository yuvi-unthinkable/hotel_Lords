import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Marquee from "./Marquee";

function LandingPage() {
  return (
    <div className="landing-page">
      <Marquee />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LandingPage;
