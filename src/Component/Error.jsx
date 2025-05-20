import React from "react";
import { NavLink } from "react-router";

const Error = () => {
  return (
    <div class="relative h-screen bg-[url('https://i.ibb.co.com/fV3m05sg/error-page.png')] bg-cover bg-center bg-no-repeat flex justify-center">
      <NavLink to="/">
        <button className="btn bg-[#02D2B2] border-none text-lg md:text-xl lg:text-3xl mt-16 text-white">
          ⬅️ Back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
