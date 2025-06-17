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
import ErrorMassage from "../components/ErrorMassage/ErrorMassage";
// import HotelCardInfo from "../components/HotelCardInfo/HotelCardInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorMassage></ErrorMassage>,
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
        loader: () => fetch("https://primelodge-bookify.vercel.app/hotels"),
        errorElement: <ErrorMassage></ErrorMassage>,
      },
      {
        path: "/roomPage",
        element: <RoomPage></RoomPage>,
        errorElement: <ErrorMassage></ErrorMassage>,
        // hydrateFallbackElement: (
        //   <p>
        //     <span className="loading loading-bars loading-md"></span>
        //     <span className="loading loading-bars loading-lg"></span>
        //     <span className="loading loading-bars loading-xl"></span>
        //   </p>
        // ),
        // loader: () => fetch("https://primelodge-bookify.vercel.app/hotels"),
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
          fetch(`https://primelodge-bookify.vercel.app/hotels/${params.id}`),
        errorElement: <ErrorMassage></ErrorMassage>,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
        errorElement: <ErrorMassage></ErrorMassage>,
      },
      {
        path: "/hotelsDetailsCard",
        element: <HotelsDetailsCard></HotelsDetailsCard>,
        errorElement: <ErrorMassage></ErrorMassage>,
      },
      {
        path: "/termsCondition",
        element: <TermsConditions></TermsConditions>,
        errorElement: <ErrorMassage></ErrorMassage>,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
        errorElement: <ErrorMassage></ErrorMassage>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
        errorElement: <ErrorMassage></ErrorMassage>,
      },
      {
        path: "/faqSection",
        element: <FaqSection></FaqSection>,
        errorElement: <ErrorMassage></ErrorMassage>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
        errorElement: <ErrorMassage></ErrorMassage>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
        errorElement: <ErrorMassage></ErrorMassage>,
      },
    ],
  },
]);

export default router;
