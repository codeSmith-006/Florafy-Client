import React from "react";

const SignUp = () => {
return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#212121] mb-6">
        Sign Up for an Account
      </h2>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-semibold text-[#212121]">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full text-sm"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-[#212121]">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full text-sm"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-[#212121]">Photo URL</label>
          <input
            type="text"
            placeholder="Enter photo URL"
            className="input input-bordered w-full text-sm"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-[#212121]">Password</label>
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
          Sign Up
        </button>
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
