import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home/Home";
import TermsConditions from "../Pages/TermsConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import ContactUs from "../Pages/ContactUs";
import FaqSection from "../Pages/FaqSection";
import RoomPage from "../components/RoomPage/RoomPage";
import MyBookings from "../components/MyBookings/MyBookings";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import HotelsDetailsCard from "../components/HotelsDetailsCard/HotelsDetailsCard";
import RoomDetailsPage from "../components/RoomDetailsPage/RoomDetailsPage";
import PrivateRoute from "../components/routes/PrivateRoute";
// import HotelCardInfo from "../components/HotelCardInfo/HotelCardInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </p>
        ),
        loader: () => fetch("http://localhost:3000/hotels"),
      },
      {
        path: "/roomPage",
        element: <RoomPage></RoomPage>,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </p>
        ),
        loader: () => fetch("http://localhost:3000/hotels"),
      },
      {
        path: "/roomDetailsPage/:id",
        element: <RoomDetailsPage></RoomDetailsPage>,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </p>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/hotels/roomDetailsPage/${params.id}`),
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/hotelsDetailsCard",
        element: <HotelsDetailsCard></HotelsDetailsCard>,
      },
      {
        path: "/termsCondition",
        element: <TermsConditions></TermsConditions>,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/faqSection",
        element: <FaqSection></FaqSection>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
