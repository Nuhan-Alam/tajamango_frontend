import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { user,loading, errorMsg } = useAuthContext();
  if (loading) return <Loading/>;
  if (!user && errorMsg) {
    return <Navigate to="/login" />;
  }
  if(user){return children};
  // return user ? children : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;