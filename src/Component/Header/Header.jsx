import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import logo from "../../assets/web-logo.png";
import { NavLink } from "react-router-dom";
import "./active.css";
import { Tooltip } from "@mui/material";
import ModeToggle from "../DarkMode/DarkModeToggle";
import Florafy from "../Florafy";

const Header = () => {
  // sing in sign up toggle
  const {
    userToggle,
    setUserToggle,
    loggedUser,
    loading,
    handleSignOut,
    photo,
  } = use(AuthContext);
  // if (loading) {
  //   return (
  //     <div className="flex justify-center">
  //       <span className="loading dark:text-white loading-bars loading-lg"></span>
  //     </div>
  //   ); // or a spinner
  // }
  return (
    <div className="navbar bg-base-100 dark:bg-gray-900 shadow-sm">
      <div className="flex-1">
        {/* logo */}
        <div className="flex text-4xl dark:text-gray-100 font-medium items-center">
          <img className="w-18" src={logo} alt="" />
          <a href="/"><Florafy></Florafy></a>
          <div className="ml-3 hidden md:flex">
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </div>

      {/* navigating links */}
      {loading ? (
        <div className="flex justify-center">
          <span className="loading dark:text-white loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="flex dark:text-gray-100 gap-5 text-lg font-medium ml-5 text-[#212121] hidden md:flex">
          <NavLink to="/" onClick={() => setUserToggle(true)}>
            Home
          </NavLink>
          <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
          <NavLink to="/browse-tips">Browse Tips</NavLink>
          {loggedUser && (
            <div className="flex gap-5 items-center">
              <NavLink to="/share-tips">Share a Garden Tip</NavLink>
              <NavLink to="/my-tips">My Tips</NavLink>
            </div>
          )}
        </div>
      )}
      {/* users profile and login sign up section */}
      {/* login/signup */}
      {loading ? (
        <span className="loading dark:text-white loading-bars loading-lg"></span>
      ) : (
        <div>
          {!loggedUser ? (
            <div>
              {userToggle ? (
                <NavLink
                  to="/sign-in"
                  onClick={() => setUserToggle(!userToggle)}
                >
                  {" "}
                  <button className="px-6 py-3 rounded-md text-white font-semibold ml-8 bg-[#38A57E] btn hover:bg-[#2c8c46] transition-colors duration-300 shadow-md">
                    Login
                  </button>
                </NavLink>
              ) : (
                <NavLink
                  to="/sign-up"
                  onClick={() => setUserToggle(!userToggle)}
                >
                  {" "}
                  <button className="px-6 py-3 rounded-md text-white font-semibold ml-8 bg-[#38A57E] btn hover:bg-[#2c8c46] transition-colors duration-300 shadow-md">
                    Sign Up
                  </button>
                </NavLink>
              )}
            </div>
          ) : (
            <div>
              {" "}
              <div className="flex  items-center gap-2 ml-8">
                <div className="ml-3 md:hidden flex ">
                  <ModeToggle></ModeToggle>
                </div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <Tooltip title={loggedUser.displayName}>
                      <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={photo} />
                      </div>
                    </Tooltip>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content dark:text-white bg-base-100 dark:bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <NavLink to="/" className="flex md:hidden">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/explore-gardeners"
                        className="flex md:hidden"
                      >
                        Explore Gardeners
                      </NavLink>
                    </li>
                    <li className="flex md:hidden">
                      {" "}
                      <NavLink to="/browse-tips">Browse Tips</NavLink>
                    </li>
                    <li>
                      <NavLink to="/share-tips" className="flex md:hidden">
                        Share a Garden Tip
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-tips" className="flex md:hidden">
                        My Tips
                      </NavLink>
                    </li>
                    <li onClick={handleSignOut}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
