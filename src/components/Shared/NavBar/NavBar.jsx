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
          className={({ isActive }) =>
            isActive ? "text-indigo-900" : "text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-900" : "text-white"
          }
          to="/roomPage"
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-900" : "text-white"
          }
          to="/allRoom"
        >
          All Room
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-900" : "text-white"
          }
          to="/addHotelForm"
        >
          Add Hotel
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-900" : "text-white"
          }
          to="/myBookings"
        >
          MyBookings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0682a1] shadow-md">
      {" "}
      {/* ✅ UPDATED: fixed navbar that stays on top */}
      {/* <div className="navbar mx-auto px-6 md:px-12 lg:px-24 xl:px-32"> */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-28 navbar">
        {/* {" "} */} {/* ✅ CHANGED */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer mr-3 lg:hidden text-white" // ✅ CHANGED
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0682a1] rounded-box mt-3 w-52 p-2 shadow text-white" // ✅ CHANGED
            >
              {links}
            </ul>
          </div>

          <NavLink className="btn btn-ghost text-xl text-white items-center gap-2">
            {" "}
            {/* ✅ CHANGED */}
            <img
              className="h-10 w-10 hidden md:block rounded-full"
              src="https://i.ibb.co/fzZSrP6Q/images.jpg"
              alt="logo"
            />
            <h1 className="fontPlusJakarta text-base md:text-xl font-extrabold">
              <span className="text-white">PrimeLodge</span> {/* ✅ CHANGED */}
              <span className="text-emerald-200">Bookify</span>{" "}
              {/* ✅ CHANGED */}
            </h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 fontMulish text-lg font-semibold space-x-3">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-1 md:space-x-4">
          <div>
            <button className="flex items-center">
              <ThemeSwitch></ThemeSwitch>
            </button>
          </div>
          {user ? (
            <div className="flex items-center gap-3">
              <div className="relative group">
                <img
                  className="w-10 h-10 rounded-full cursor-pointer hidden md:block"
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
                className="btn bg-emerald-600 border-none hover:bg-emerald-700 text-white px-4 fontMulish text-sm md:text-base" // ✅ CHANGED
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-2">
              <NavLink
                to="/signin"
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white px-4 fontMulish text-sm md:text-base" // ✅ CHANGED
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white px-4 fontMulish text-sm md:text-base" // ✅ CHANGED
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
