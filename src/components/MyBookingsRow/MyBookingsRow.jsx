import React, { use, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

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
    roomId,
  } = myBooking || {};

  // ✅ Auth context
  const { user } = use(AuthContext);

  // ✅ States for review modal
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewData, setReviewData] = useState({ rating: "", comment: "" });

  const handleCancel = (id) => {
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
                  roomStatus: "available",
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

  // ✅ UPDATED: Review submit logic
  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const review = {
      username: user.displayName,
      email: user.email,
      rating: parseInt(reviewData.rating),
      comment: reviewData.comment,
    };

    // ✅ CHANGED: Submit review to backend (which pushes to hotel doc)
    axios.post(`http://localhost:3000/hotels/${roomId}`, review).then((res) => {
      // ✅ CHANGED: Removed insertedId check; backend uses updateOne now
      if (res.data.modifiedCount > 0) {
        Swal.fire("Thank you!", "Your review has been submitted.", "success"); // ✅ Marked
      } else {
        Swal.fire("Oops!", "Failed to submit review.", "error"); // ✅ Marked
      }
    });

    setReviewData({ rating: "", comment: "" });
    setShowReviewModal(false);
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
          {/* ✅ Review Button */}
          <button
            onClick={() => setShowReviewModal(true)}
            className="btn btn-ghost btn-md"
          >
            Reviews
          </button>
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

      {/* ✅ Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
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
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyBookingsRow;
