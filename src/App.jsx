import "./App.css";
import SignUp from "./Components/Login&Signup/SignUp";
import Login from "./Components/Login&Signup/Login";
import PublicRoute from "./Components/routes/PublicRoute";
import ProtectedRoute from "./Components/routes/ProtectedRoute";
import { Navigate } from "react-router";

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
import HotelBookingPage from "./Components/HotelBookingPage";

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
          <Route
            path="hotelBooking/:id"
            element={
              <ProtectedRoute>
                <HotelBookingPage />
              </ProtectedRoute>
            }
          />verifyEmail

          <Route path="*" element={<Navigate to="/homepage" replace />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
