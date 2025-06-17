import React, { Suspense, use } from "react";
import MyBookingDetails from "../MyBookingDetails/MyBookingDetails";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
// import { myBookingPromise } from "../../Api/myBookingApi";
import { Helmet } from "react-helmet";
import MyBookingPageTitle from "../MyBookingPageTitle/MyBookingPageTitle";
import useBookingApi from "../../Api/useBookingApi";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const { myBookingPromise } = useBookingApi();
  // console.log("token in the context ", user.accessToken);
  return (
    <div>
      <Helmet>
        <title>MyBookings</title>
      </Helmet>

      <div className="mt-5 mb-10">
        <MyBookingPageTitle></MyBookingPageTitle>
      </div>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <MyBookingDetails
          myBookingPromise={myBookingPromise(user.email)}
        ></MyBookingDetails>
      </Suspense>
    </div>
  );
};

export default MyBookings;
