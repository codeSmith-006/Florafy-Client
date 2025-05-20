import React, { use, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { setUserToggle } = use(AuthContext);
  const [password, setPassword] = useState("");
  const [view, setView] = useState(false);
  const isPasswordValid =
    /[A-Z]/.test(password) && // at least one uppercase letter
    /[a-z]/.test(password) && // at least one lowercase letter
    /[^A-Za-z0-9]/.test(password) && // at least one special character
    password.length >= 8; // minimum 8 characters

  // creating handleSignUp for signup functionality
  const handleSignUp = (event) => {
    event.preventDefault();

    // get user data from form submit
    const form = event.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#212121] mb-6">
          Sign Up for an Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121]">
              Name
            </label>
            <input required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121]">
              Email
            </label>
            <input required
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121]">
              Photo URL
            </label>
            <input required
              name="photo"
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121]">
              Password
            </label>
            <div className="flex items-center">
              <input
                onChange={(event) => setPassword(event.target.value)}
                type={!view ? "password" : "text"}
                name="password"
                className="input w-full"
                placeholder="Password"
              />
              {view ? (
                <FaEye
                  onClick={() => setView(!view)}
                  className="relative cursor-pointer -left-8 text-xl"
                ></FaEye>
              ) : (
                <FaEyeSlash
                  onClick={() => setView(!view)}
                  className="relative cursor-pointer -left-8 text-xl"
                ></FaEyeSlash>
              )}
            </div>
            {!isPasswordValid && (
              <p className="text-sm text-red-600">
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
          <p className="text-sm text-center text-[#212121] mt-4">
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

        <div className="divider">OR</div>

        <button
          type="button"
          className="btn btn-outline w-full flex items-center justify-center gap-2"
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
