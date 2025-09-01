import "./App.css";
import SignUp from "./Components/Login&Signup/SignUp.jsx";
import Login from "./Components/Login&Signup/Login.jsx";
import PublicRoute from "./Components/routes/PublicRoute";
import ProtectedRoute from "./Components/routes/ProtectedRoute";
import Homepage from "./Components/Homepage.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import HotelBookingPage from "./Components/HotelBookingPage.jsx";
import VerifyEmail from "./Components/Login&Signup/VerifyEmail.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HotelFeedbacks from "./Components/HotelFeedbacks.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import MyBookings from "./Components/MyBookings.jsx";
import { ThemeProvider } from "./contexts/theme.js";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(()=> {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);

  },[themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Router>
        <Routes>
          {/* Public routes */}
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
            path="verifyEmail"
            element={
              <PublicRoute>
                <VerifyEmail />
              </PublicRoute>
            }
          />

          {/* Protected routes with LandingPage layout */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LandingPage />
              </ProtectedRoute>
            }
          >
            <Route path="homepage" element={<Homepage />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="hotelBooking/:id" element={<HotelBookingPage />} />
            <Route path="bookingInfo/:id" element={<HotelFeedbacks />} />
            <Route path="/mybookings" element={<MyBookings />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
