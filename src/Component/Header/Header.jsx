import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import logo from "../../assets/web-logo.png";
import { NavLink } from "react-router-dom";
import "./active.css";

const Header = () => {
  // sing in sign up toggle
  const { userToggle, setUserToggle } = use(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        {/* logo */}
        <div className="flex text-4xl font-medium items-center">
          <img className="w-18" src={logo} alt="" />
          <a href="/">Florafy</a>
        </div>
      </div>

      {/* navigating links */}
      <div className="flex gap-5 text-lg font-medium ml-5 text-[#212121] hidden md:flex">
        <NavLink to="/" onClick={() => setUserToggle(true)}>
          Home
        </NavLink>
        <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
        <NavLink to="/share-tip">Share a Garden Tip</NavLink>
        <NavLink to="/my-tip">My Tips</NavLink>
      </div>

      {/* users profile and login sign up section */}
      {/* login/signup */}
      <div>
        {userToggle ? (
          <NavLink to="/sign-in" onClick={() => setUserToggle(!userToggle)}>
            {" "}
            <button className="px-6 py-3 rounded-md text-white font-semibold ml-8 bg-[#38A57E] btn hover:bg-[#2c8c46] transition-colors duration-300 shadow-md">
              Login
            </button>
          </NavLink>
        ) : (
          <NavLink to="/sign-up" onClick={() => setUserToggle(!userToggle)}>
            {" "}
            <button className="px-6 py-3 rounded-md text-white font-semibold ml-8 bg-[#38A57E] btn hover:bg-[#2c8c46] transition-colors duration-300 shadow-md">
              Sign Up
            </button>
          </NavLink>
        )}
      </div>
      <div className="flex-none hidden ml-8">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className="flex md:hidden">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore-gardeners" className="flex md:hidden">
                Explore Gardeners
              </NavLink>
            </li>
            <li>
              <NavLink to="/share-tip" className="flex md:hidden">
                Share a Garden Tip
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-tip" className="flex md:hidden">
                My Tips
              </NavLink>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
