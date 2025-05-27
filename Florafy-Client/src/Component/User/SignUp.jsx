import React, { use, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

const SignUp = () => {
  const { setUserToggle, createAccount, setPhoto } = use(AuthContext);
  const [password, setPassword] = useState("");
  const [view, setView] = useState(false);
  const [error, setError] = useState("");
  const isPasswordValid =
    /[A-Z]/.test(password) && // at least one uppercase letter
    /[a-z]/.test(password) && // at least one lowercase letter
    /[^A-Za-z0-9]/.test(password) && // at least one special character
    password.length >= 8; // minimum 8 characters

  const navigate = useNavigate();

  // creating handleSignUp for signup functionality
  const handleSignUp = async (event) => {
    event.preventDefault();

    // get user data from form submit
    const form = event.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());

    try {
      const userCredential = await createAccount(email, password);
      const user = userCredential.User;

      await updateProfile(auth.currentUser, rest);
      setPhoto(auth.currentUser.photoURL);
      navigate("/");
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
        title: "Signed up successfully",
      });
      form.reset();
    } catch (error) {
      console.log(error);
      setError(error);
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
        icon: "error",
        title: `${error}`,
      });
    }
  };
  // handle google login
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userCredential) => {
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
          title: "User signed in successfully",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
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
          icon: "error",
          title: `${error}`,
        });
      });
  };

  return (
    <div className="min-h-screen flex dark:hover:shadow-2xl items-center justify-center bg-gray-100 dark:bg-[#101828] px-4 py-10">
      <div className="w-full max-w-md bg-white dark:bg-[#0E1A2B] rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#212121] dark:text-white mb-6">
          Sign Up for an Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121] dark:text-white">
              Name
            </label>
            <input
              required
              type="text"
              name="displayName"
              placeholder="Enter your name"
              className="input input-bordered w-full text-sm dark:bg-[#1A2230] dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121] dark:text-white">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full text-sm dark:bg-[#1A2230] dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121] dark:text-white">
              Photo URL
            </label>
            <input
              required
              name="photoURL"
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full text-sm dark:bg-[#1A2230] dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121] dark:text-white">
              Password
            </label>
            <div className="flex items-center">
              <input
                onChange={(event) => setPassword(event.target.value)}
                type={!view ? "password" : "text"}
                name="password"
                className="input w-full dark:bg-[#1A2230] dark:text-white"
                placeholder="Password"
              />
              {view ? (
                <FaEye
                  onClick={() => setView(!view)}
                  className="relative cursor-pointer -left-8 text-xl text-[#212121] dark:text-white"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setView(!view)}
                  className="relative cursor-pointer -left-8 text-xl text-[#212121] dark:text-white"
                />
              )}
            </div>
            {!isPasswordValid && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Password must contain at least:
                <br />– one uppercase letter (A–Z)
                <br />– one lowercase letter (a–z)
                <br />– minimum 8 characters
              </p>
            )}
          </div>

          <button
            disabled={!isPasswordValid}
            type="submit"
            className="w-full bg-[#34A853] hover:bg-[#2c8d47] text-white font-medium py-2 rounded-lg transition duration-200"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-[#212121] dark:text-white mt-4">
            Already have an account?{" "}
            <NavLink
              onClick={() => setUserToggle(false)}
              to="/sign-in"
              className="text-[#34A853] font-semibold hover:underline hover:text-[#2c8d47] transition"
            >
              Sign In now
            </NavLink>
          </p>
        </form>

        <div className="divider dark:divider-white dark:text-white">OR</div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="btn btn-outline w-full flex items-center justify-center gap-2 dark:text-white"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
