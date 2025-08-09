import React, { useState, useEffect } from "react";
import MyBookingsRow from "../MyBookingsRow/MyBookingsRow";
import { Helmet } from "react-helmet";

const MyBookingDetails = ({ initialData }) => {
  // Initialize with empty array or initialData
  const [myBookings, setMyBookings] = useState(initialData || []);

  // Update state when initialData changes
  useEffect(() => {
    setMyBookings(initialData || []);
  }, [initialData]);

  // Debug logs (optional)
  // console.log("initialData in MyBookingDetails:", initialData);
  // console.log("myBookings state:", myBookings);

  const handleCancelSuccess = (deletedId) => {
    setMyBookings((prev) =>
      prev.filter((booking) => booking._id !== deletedId)
    );
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
            {myBookings.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="text-center text-lg font-semibold p-5"
                >
                  No bookings found.
                </td>
              </tr>
            ) : (
              myBookings.map((myBooking, index) => (
                <MyBookingsRow
                  index={index}
                  key={myBooking._id}
                  myBooking={myBooking}
                  onCancelSuccess={handleCancelSuccess}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingDetails;
