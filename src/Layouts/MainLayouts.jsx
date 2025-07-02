import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/Shared/NavBar/NavBar";
import Footer from "../components/Shared/Footer/Footer";
import { ThemeProvider } from "../contexts/ThemeContext";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";

const MainLayouts = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitch></ThemeSwitch>
      </div>
      <div className=" dark:bg-gray-900 dark:text-blue-600">
        <div>
          <NavBar></NavBar>
        </div>
        <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-28 py-1">
          <div className=" min-h-[calc(100vh-385px)]">
            <Outlet></Outlet>
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayouts;
