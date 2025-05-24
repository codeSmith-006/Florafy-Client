import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loggedUser, loading } = use(AuthContext);
  if (loading) {
    return <span className="loading dark:text-white loading-bars loading-lg"></span>;
  }
  if (!loggedUser) {
    return <Navigate to="/sign-in"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
