import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const [isAuth, res] = useAuth();

  if (isAuth === null) {
    console.log("isAuth === null", isAuth);
    return <div>Loading...</div>;
  }
  console.log("isAuth", isAuth);
  return isAuth ? <Navigate to="/homepage" /> : children;
};

export default PublicRoute;
