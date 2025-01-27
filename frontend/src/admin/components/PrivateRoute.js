import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = jwtDecode(token);
    const isTokenExpired = decodedToken.exp * 1000 < Date.now();

    if (isTokenExpired) {
      localStorage.removeItem("token");
      alert("Session expired. Please log in again.");
      return <Navigate to="/admin/login" />;
    }

    return children;
  }

  return <Navigate to="/admin/login" />;
};

export default PrivateRoute;
