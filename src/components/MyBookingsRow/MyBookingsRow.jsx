import React, { use, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import moment from "moment"; //  Added for cancellation deadline check

const MyBookingsRow = ({ myBooking, index, onCancelSuccess }) => {
  const {
    _id,
    roomName,
    hotelRoomImageUrl,
    address,
    date,
    pricePerNight,
    currency,
    roomStatus,
    roomId,
  } = myBooking || {};

  const { user } = use(AuthContext);

  const [reviewData, setReviewData] = useState({ rating: "", comment: "" });

  //  Restrict cancellation to 2 days before booking date
  const handleCancel = (id, bookingDate) => {
    const today = moment().startOf("day");
    const cancelDeadline = moment(bookingDate)
      .subtract(2, "days")
      .startOf("day"); //  2-day restriction

    if (today.isAfter(cancelDeadline)) {
      Swal.fire(
        "Too Late!",
        "You can only cancel up to 2 days before the booking date.", //  Message updated
        "warning"
      );
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/hotelsBooking/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              axios
                .patch(`http://localhost:3000/hotels/${roomId}`, {
                  roomStatus: "available", //  Make room available again
                })
                .then((patchRes) => {
                  if (patchRes.data.modifiedCount > 0) {
                    Swal.fire(
                      "Cancelled!",
                      "Your booking has been cancelled and room is now available.",
                      "success"
                    );
                    onCancelSuccess(id);
                  } else {
                    Swal.fire(
                      "Warning",
                      "Booking cancelled but failed to update room status.",
                      "warning"
                    );
                    onCancelSuccess(id);
                  }
                })
                .catch(() => {
                  Swal.fire(
                    "Error",
                    "Booking cancelled but error updating room status.",
                    "error"
                  );
                  onCancelSuccess(id);
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

  const handleUpdateDate = async () => {
    const { value: newDate } = await Swal.fire({
      title: "Select new booking date",
      input: "date",
      inputLabel: "New Booking Date",
      inputValue: date,
      showCancelButton: true,
      confirmButtonText: "Update Date",
      inputValidator: (value) => {
        if (!value) return "Please select a date!";
      },
    });

    if (newDate) {
      axios
        .patch(`http://localhost:3000/hotelsBooking/${_id}`, {
          date: newDate,
        })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire("Updated!", "Booking date updated.", "success");
            window.location.reload();
          } else {
            Swal.fire("Warning", "Date not updated.", "warning");
          }
        })
        .catch(() => {
          Swal.fire("Error", "Failed to update date.", "error");
        });
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const review = {
      username: user.displayName,
      email: user.email,
      rating: parseInt(reviewData.rating),
      comment: reviewData.comment,
    };

    axios.post(`http://localhost:3000/hotels/${roomId}`, review).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire("Thank you!", "Your review has been submitted.", "success");
      } else {
        Swal.fire("Oops!", "Failed to submit review.", "error");
      }
    });

    setReviewData({ rating: "", comment: "" });
    document.getElementById(`review_modal_${_id}`).close();
  };

  return (
    <>
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
          <button onClick={handleUpdateDate} className="btn btn-ghost btn-md">
            Update Date
          </button>
        </th>
        <th>
          <button
            onClick={() =>
              document.getElementById(`review_modal_${_id}`).showModal()
            }
            className="btn btn-ghost btn-md"
          >
            Reviews
          </button>
        </th>
        <th>
          <button
            onClick={() => handleCancel(_id, date)} //  Pass date to cancellation check
            className="btn btn-ghost btn-md"
          >
            Cancel Booking
          </button>
        </th>
      </tr>

      {/* ✅ Review Modal */}
      <dialog id={`review_modal_${_id}`} className="modal">
        <div className="modal-box">
          <h2 className="text-xl font-bold mb-4">Submit a Review</h2>
          <form onSubmit={handleReviewSubmit}>
            <div className="mb-4">
              <label>Username</label>
              <input
                type="text"
                readOnly
                value={user.displayName}
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label>Rating (1–5)</label>
              <input
                type="number"
                min="1"
                max="5"
                required
                value={reviewData.rating}
                onChange={(e) =>
                  setReviewData({ ...reviewData, rating: e.target.value })
                }
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label>Comment</label>
              <textarea
                required
                value={reviewData.comment}
                onChange={(e) =>
                  setReviewData({ ...reviewData, comment: e.target.value })
                }
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default MyBookingsRow;
