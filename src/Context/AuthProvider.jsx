import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [userToggle, setUserToggle] = useState(true);

  const userInfo = {
    userToggle,
    setUserToggle
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
