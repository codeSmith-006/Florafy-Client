import React, { use } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const SignIn = () => {
  const {setUserToggle} = use(AuthContext)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#212121] mb-6">
          Login to Your Account
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#212121]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#34A853] hover:bg-[#2c8d47] text-white font-medium py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
          <p className="text-sm text-center text-[#212121] mt-4">
            Don&apos;t have an account?{" "}
            <NavLink onClick={() => setUserToggle(true)}
              to="/sign-up"
              className="text-[#34A853] font-semibold hover:underline hover:text-[#2c8d47] transition"
            >
              Sign up now
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
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
