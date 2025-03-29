import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { clearToken, getTokenLS } from "../hooks/setToken";

// Prevent access private content/route before login
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { token, expiryTime } = getTokenLS();
  const now = new Date().getTime();
  const expired = now > expiryTime;

  if (!token || expired) {
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
