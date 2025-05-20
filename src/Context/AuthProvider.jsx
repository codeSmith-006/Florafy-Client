import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";


const AuthProvider = ({ children }) => {
  const [userToggle, setUserToggle] = useState(true);


  // firebase create account
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // firebase logged account
  const userLogin = (email, password) => {
    return  signInWithEmailAndPassword(auth, email, password)
  }
  const userInfo = {
    userToggle,
    setUserToggle,
    createAccount,
    userLogin
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
