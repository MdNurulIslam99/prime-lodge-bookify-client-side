import React, { use, useState } from "react";
import MyBookingsRow from "../MyBookingsRow/MyBookingsRow";
import { Helmet } from "react-helmet";

const MyBookingDetails = ({ initialData }) => {
  // const initialData = use(myBookingPromise); // initial data from suspense
  const [myBookings, setMyBookings] = useState(initialData); //  NEW state

  const handleCancelSuccess = (deletedId) => {
    setMyBookings((prev) =>
      prev.filter((booking) => booking._id !== deletedId)
    ); //  Remove from list
  };

  return (
    <div>
      <Helmet>
        <title>MyBookingDetails</title>
      </Helmet>
      <div className="overflow-x-auto bg-base-300 shadow-2xl rounded-2xl p-5 mb-5 mt-5">
        <table className="table">
          <thead>
            <tr className="text-lg font-semibold">
              <th>No</th>
              <th>Name & Address</th>
              <th>Price</th>
              <th>Room Status</th>
              <th>Booking Date</th>
              <th className="relative left-4">Update Date</th>
              <th className="relative left-4">Reviews</th>
              <th className="relative left-4">Cancel Booking</th>
            </tr>
          </thead>
          <tbody>
            {initialData.map((myBooking, index) => (
              <MyBookingsRow
                index={index}
                key={myBooking._id}
                myBooking={myBooking}
                onCancelSuccess={handleCancelSuccess} //  Pass down cancel handler
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingDetails;
