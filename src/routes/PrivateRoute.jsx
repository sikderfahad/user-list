import React from "react";
import { useAuth } from "../provider/AuthProvider";
import SpinnerCircle from "../components/spinnerCircle/SpinnerCircle";
import { Navigate, useLocation } from "react-router-dom";
import { clearToken } from "../hooks/setToken";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const now = new Date().getTime();
  const expiryTime = Number(localStorage.getItem("tokenExpiry"));
  const token = localStorage.getItem("authToken");

  if (loading) {
    return <SpinnerCircle />;
  }
  console.log(user, token, expiryTime);
  if (!user || !token || (expiryTime && now > expiryTime)) {
    clearToken();
    return (
      <Navigate
        to={"/login"}
        state={{ from: location?.pathname }}
        replace={true}
      />
    );
  }

  return children;
};

export default PrivateRoute;
