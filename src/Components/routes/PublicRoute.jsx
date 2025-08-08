import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth"

const PublicRoute = ({ children }) => {
  const [isAuth,res] = useAuth();

  if (isAuth === null) {
    return <div>Loading...</div>;
  }
  return isAuth ? <Navigate to="/homepage" /> : children;
};

export default PublicRoute;
