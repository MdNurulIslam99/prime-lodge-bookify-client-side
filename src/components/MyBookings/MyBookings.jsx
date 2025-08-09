import React, { Suspense, use, useEffect, useState } from "react";
import MyBookingDetails from "../MyBookingDetails/MyBookingDetails";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
// import { myBookingPromise } from "../../Api/myBookingApi";
import { Helmet } from "react-helmet";
import MyBookingPageTitle from "../MyBookingPageTitle/MyBookingPageTitle";
// import useBookingApi from "../../Api/useBookingApi";
import useAxios from "../../Hooks/useAxios";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [data, setData] = useState([]);
  // const { myBookingPromise } = useBookingApi();
  // console.log("token in the context ", user.accessToken);

  const axiosSecure = useAxios();
  useEffect(() => {
    axiosSecure.get(`/hotelsBooking?email=${user.email}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>MyBookings</title>
      </Helmet>

      <div className="mt-28 mb-10">
        <MyBookingPageTitle></MyBookingPageTitle>
      </div>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <MyBookingDetails initialData={data}></MyBookingDetails>
      </Suspense>
    </div>
  );
};

export default MyBookings;
