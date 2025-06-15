import React, { Suspense, use } from "react";
import MyBookingDetails from "../MyBookingDetails/MyBookingDetails";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { myBookingPromise } from "../../Api/myBookingApi";

const MyBookings = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      {/* <h1>this is MyBookings</h1> */}
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
