import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {
  const [userToggle, setUserToggle] = useState(true);
  const [loggedUser, setLoggedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState("https://i.ibb.co/DDHgmBRy/default-profile.png");
  // firebase create account
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // firebase logged account
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get logged user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(user);
        setPhoto(user.photoURL);
      } else {
        setLoggedUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // handle signout
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // sign in with google sweet alert
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Sign out successfully",
        });
      })
      .catch(() => {
        console.log("");
      });
  };
  const userInfo = {
    userToggle,
    setUserToggle,
    createAccount,
    userLogin,
    loggedUser,
    loading,
    handleSignOut,
    setPhoto,
    photo
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
