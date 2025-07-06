import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import userIcon from "/user.png";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Sign-out successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        toast.error("User can't Sign Out. Something went wrong!");
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-indigo-900 font-semibold" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/roomPage"
          className={({ isActive }) =>
            isActive ? "text-indigo-900 font-semibold" : "text-white"
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allRoom"
          className={({ isActive }) =>
            isActive ? "text-indigo-900 font-semibold" : "text-white"
          }
        >
          All Room
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addHotelForm"
          className={({ isActive }) =>
            isActive ? "text-indigo-900 font-semibold" : "text-white"
          }
        >
          Add Hotel
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myBookings"
          className={({ isActive }) =>
            isActive ? "text-indigo-900 font-semibold" : "text-white"
          }
        >
          MyBookings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0682a1] shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 xl:px-8 flex items-center justify-between h-16">
        {/* ✅ CHANGED: Wrap the logo/menu group with reversed flex on mobile */}
        <div className="flex  lg:flex-row items-center gap-4">
          {" "}
          {/* ✅ CHANGED */}
          {/* ✅ CHANGED: Mobile menu toggle comes first (left side on small screens) */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-2 shadow bg-[#0682a1] rounded-box w-52 text-white space-y-1"
            >
              {links}
            </ul>
          </div>
          {/* ✅ CHANGED: Logo and project name come after menu icon on mobile */}
          <NavLink className="flex items-center gap-2" to="/">
            <img
              className="h-10 w-10 rounded-full"
              src="https://i.ibb.co/fzZSrP6Q/images.jpg"
              alt="logo"
            />
            <h1 className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">
              PrimeLodge<span className="text-emerald-200">Bookify</span>
            </h1>
          </NavLink>
        </div>

        {/* Nav links for desktop only */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-5 font-semibold text-white">
            {links}
          </ul>
        </div>

        {/* Right side - theme + user or auth buttons */}
        <div className="flex items-center gap-3">
          <ThemeSwitch />

          {user ? (
            <div className="flex items-center gap-3">
              <div className="relative group">
                <img
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src={user.photoURL || userIcon}
                  alt="user"
                />
                <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 bg-white text-black shadow-md p-2 rounded-lg w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <p className="font-semibold">{user.displayName}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <NavLink
                to="/signin"
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default NavBar;
