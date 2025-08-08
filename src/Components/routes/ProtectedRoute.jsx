import { Children } from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const [isAuth,res] = useAuth();

  if (isAuth === null) {
    return <div>loading</div>
  }

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
