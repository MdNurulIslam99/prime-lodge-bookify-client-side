import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

import userIcon from "/user.png";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-800" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-800" : "")}
          to="/roomPage"
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-800" : "")}
          to="/myBookings"
        >
          MyBookings
        </NavLink>
      </li>
    </>
  );
  // const darkMode = true;
  const { user, signOutUser } = use(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // alert("Sign-out successful");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Sign-out successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // An error happened.
        // console.log(error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "Sign-out Cannot SignOut!",
        //   // footer: '<a href="#">Why do I have this issue?</a>',
        // });
        toast.error("User can't Sign Up. Something went wrong!");
        // alert("Sign-out Unsuccessful");
      });
  };

  // Toggle Theme
  // const handleToggle = () => {
  //   console.log("button was clicked");
  // };
  return (
    <div className="navbar p-0 bg-base-100 shadow-sm mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer mr-3 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <NavLink className="btn btn-ghost text-xl">
          <img
            className="h-10 w-10 md:block hidden rounded-full"
            src="https://i.ibb.co/fzZSrP6Q/images.jpg"
            alt="logo"
          />
          <h1 className="fontPlusJakarta text-base md:text-xl font-extrabold">
            <span className="text-blue-300">PrimeLodge</span>
            <span className="text-emerald-300">Bookify</span>
          </h1>
        </NavLink>

        {/* <div className="px-2">{user && user.email}</div> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 fontMulish text-xl font-bold">
          {links}
        </ul>
      </div>
      <div className="navbar-end  space-x-5">
        {/* <NavLink to="/signIn" className="btn ">
          Login
        </NavLink>
        <NavLink to="/signup" className="btn ">
          Register
        </NavLink> */}

        {user ? (
          <div className="flex gap-3">
            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full cursor-pointer hidden md:block"
                src={user.photoURL || userIcon}
                alt="user"
              />
              <div className="absolute bottom-[-90px] left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-lg w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className="font-semibold text-gray-800">
                  {user.displayName}
                </p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>

            <div>
              <button
                onClick={handleLogOut}
                className="btn bg-[#0EA106] rounded-4xl text-white px-3 md:px-5 fontMulish text-base md:text-xl"
              >
                LogOut
              </button>
            </div>
          </div>
        ) : (
          <div className=" flex md:flex-row flex-col py-3 md:py-0 gap-1">
            <NavLink
              to="/signin"
              className="btn bg-[#0682a1] rounded-4xl text-white px-5  fontMulish font-bold text-base md:text-xl"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="btn bg-[#0682a1] rounded-4xl text-white px-5 fontMulish font-bold text-base md:text-xl"
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
      {/* Toast container */}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default NavBar;
