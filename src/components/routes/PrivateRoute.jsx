import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  //   location
  const userLocation = useLocation();
  // console.log(userLocation);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={userLocation.pathname} to="/signin"></Navigate>;
};

export default PrivateRoute;
