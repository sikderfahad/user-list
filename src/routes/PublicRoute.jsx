import React from "react";
import { Navigate } from "react-router-dom";
import { getTokenLS } from "../hooks/setToken";

// Hidden public element/route while logged in
const PublicRoute = ({ children }) => {
  const { token } = getTokenLS();

  if (token) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default PublicRoute;
