import React, { use, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

const SignIn = () => {
  const { setUserToggle, userLogin } = use(AuthContext);
  const [view, setView] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // handle login button
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = event.target.email.value;
    const password = event.target.password.value;

    userLogin(email, password)
      .then((userCredential) => {
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
        form.reset();
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

  // handle google login
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userCredential) => {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#101828] px-4 py-10 dark">
      <div className="w-full max-w-md bg-white dark:bg-[#0E1A2B] rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#212121] dark:text-white mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121] dark:text-white">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full text-sm dark:bg-[#1A2230] dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121] dark:text-white">
              Password
            </label>
            <div className="flex items-center">
              <input
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
          </div>

          <button
            type="submit"
            className="w-full bg-[#34A853] hover:bg-[#2c8d47] text-white font-medium py-2 rounded-lg transition duration-200"
          >
            Login
          </button>

          <p className="text-sm text-center text-[#212121] dark:text-white mt-4">
            Don&apos;t have an account?{" "}
            <NavLink
              onClick={() => setUserToggle(true)}
              to="/sign-up"
              className="text-[#34A853] font-semibold hover:underline hover:text-[#2c8d47] transition"
            >
              Sign up now
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
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
