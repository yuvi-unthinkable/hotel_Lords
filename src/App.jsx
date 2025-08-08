import { useEffect, useState } from "react";
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
import axios from "axios";
import PublicRoute from "./Components/routes/PublicRoute";
import ProtectedRoute from "./Components/routes/ProtectedRoute";

// import UpcomingEvent from "./Components/UpcomingEvents"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  createBrowserRouter,
} from "react-router";
import Homepage from "./Components/Homepage";
import UserProfile from "./Components/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
]);

// axios
//   .get("https://your-api.com/api/profile", {
//     withCredentials: true, // Sends cookies along with request
//   })
//   .then((res) => {
//     console.log(" Verified user:", res.data.user);
//   })
//   .catch((err) => {
//     console.error(" Not authorized");
//   });

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            index
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="homepage"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
