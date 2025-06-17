import React from "react";
import useAxios from "../Hooks/useAxios";

const useBookingApi = () => {
  const axiosSecure = useAxios();
  const myBookingPromise = (email) => {
    return axiosSecure
      .get(`/hotelsBooking?email=${email}`)
      .then((res) => res.data);
  };
  return {
    myBookingPromise,
  };
};

export default useBookingApi;
