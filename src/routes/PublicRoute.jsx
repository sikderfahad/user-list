import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { token } = useAuth();

  if (token) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default PublicRoute;
