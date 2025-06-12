import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home/Home";
import TermsConditions from "../Pages/TermsConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import ContactUs from "../Pages/ContactUs";
import FaqSection from "../Pages/FaqSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      { index: true, element: <Home></Home> },
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
    ],
  },
]);

export default router;
