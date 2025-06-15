import React from "react";
import Swal from "sweetalert2";
import axios from "axios"; // ✅ NEW import axios

const MyBookingsRow = ({ myBooking, index, onCancelSuccess }) => {
  const {
    _id, // booking id
    roomName,
    hotelRoomImageUrl,
    address,
    date,
    pricePerNight,
    currency,
    roomStatus,
    roomId, // ✅ You need to have the related hotel room's _id here
  } = myBooking || {};

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // 1. DELETE booking first
        axios
          .delete(`http://localhost:3000/hotelsBooking/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              // 2. Update room status to 'available' after deletion
              axios
                .patch(`http://localhost:3000/hotels/${roomId}`, {
                  roomStatus: "available",
                })
                .then((patchRes) => {
                  if (patchRes.data.modifiedCount > 0) {
                    Swal.fire(
                      "Cancelled!",
                      "Your booking has been cancelled and room is now available.",
                      "success"
                    );
                    onCancelSuccess(id); // update UI to remove deleted booking
                  } else {
                    Swal.fire(
                      "Warning",
                      "Booking cancelled but failed to update room status.",
                      "warning"
                    );
                    onCancelSuccess(id); // still remove booking from UI
                  }
                })
                .catch(() => {
                  Swal.fire(
                    "Error",
                    "Booking cancelled but error updating room status.",
                    "error"
                  );
                  onCancelSuccess(id); // still remove booking from UI
                });
            } else {
              Swal.fire("Oops!", "Failed to cancel booking.", "error");
            }
          })
          .catch(() => {
            Swal.fire("Error", "Something went wrong!", "error");
          });
      }
    });
  };

  return (
    <tr>
      <th>
        <label>{index + 1}</label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={hotelRoomImageUrl} alt="hotelRoomImageUrl" />
            </div>
          </div>
          <div>
            <div className="font-bold">{roomName}</div>
            <div className="text-sm opacity-50">{address}</div>
          </div>
        </div>
      </td>
      <td>
        {pricePerNight}
        <span className="badge badge-ghost badge-sm">{currency}</span>
      </td>
      <td>{roomStatus}</td>
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost btn-md">Update Date</button>
      </th>
      <th>
        <button className="btn btn-ghost btn-md">Reviews</button>
      </th>
      <th>
        <button
          onClick={() => handleCancel(_id)}
          className="btn btn-ghost btn-md"
        >
          Cancel Booking
        </button>
      </th>
    </tr>
  );
};

export default MyBookingsRow;
