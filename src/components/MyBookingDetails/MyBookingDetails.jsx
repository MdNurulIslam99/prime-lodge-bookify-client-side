import React, { use } from "react";
import MyBookingsRow from "../MyBookingsRow/MyBookingsRow";

const MyBookingDetails = ({ myBookingPromise }) => {
  const myBookings = use(myBookingPromise);
  return (
    <div>
      {/* <h1>MyBookingDetails: {myBookings.length} </h1> */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
              ></MyBookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingDetails;
