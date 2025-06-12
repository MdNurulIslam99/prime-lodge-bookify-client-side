import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/Shared/NavBar/NavBar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className=" min-h-[calc(100vh-385px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayouts;
