import React, { use, useState } from "react";
import MyBookingsRow from "../MyBookingsRow/MyBookingsRow";

const MyBookingDetails = ({ myBookingPromise }) => {
  const initialData = use(myBookingPromise); // initial data from suspense
  const [myBookings, setMyBookings] = useState(initialData); // ✅ NEW state

  const handleCancelSuccess = (deletedId) => {
    setMyBookings((prev) =>
      prev.filter((booking) => booking._id !== deletedId)
    ); // ✅ Remove from list
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
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
            {myBookings.map((myBooking, index) => (
              <MyBookingsRow
                index={index}
                key={myBooking._id}
                myBooking={myBooking}
                onCancelSuccess={handleCancelSuccess} // ✅ Pass down cancel handler
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingDetails;
