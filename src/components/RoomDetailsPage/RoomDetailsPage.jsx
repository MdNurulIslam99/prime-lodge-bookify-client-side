import React, { use, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router";
import RoomPageDetailsTitle from "../RoomPageDetailsTitle/RoomPageDetailsTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";

const RoomDetailsPage = () => {
  const detailsData = useLoaderData();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const {
    _id,
    name,
    location,
    city,
    address,
    rating,
    pricePerNight,
    currency,
    checkIn,
    checkOut,
    description,
    amenities,
    hotelRoomImageUrl,
    roomTypes,
    maxGuests,
    bedType,
    reviews,
  } = detailsData || {};

  const [bookingDate, setBookingDate] = useState(null);
  const [roomStatusState, setRoomStatusState] = useState(
    detailsData?.roomStatus
  ); // State for live roomStatus

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleConfirmBooking = async () => {
    const bookingHotelData = {
      roomId: _id,
      bookingUser: user.email,
      address: address,
      roomName: name,
      pricePerNight: pricePerNight,
      currency: currency,
      date: bookingDate,
      description,
      roomTypes: roomTypes,
      roomStatus: "booked",
    };

    // Save booking date info to database
    axios
      .post("http://localhost:3000/hotelsBooking", bookingHotelData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking confirmed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        // console.log(error);
        toast.error("unable to updated data in database. Try again.");
      });

    // Update room status
    const roomStatus = {
      roomStatus: "unavailable",
    };
    // Update booking roomStatus info to database
    axios
      .patch(`http://localhost:3000/hotels/roomDetailsPage/${_id}`, roomStatus)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setRoomStatusState("unavailable"); // Update ui after db update
          document.activeElement?.blur(); // Remove focus before closing modal
          document.getElementById("my_modal_5").close(); // Close modal
        }
      })
      .catch((error) => {
        // console.log(error);
        toast.error("unable to updated data in database. Try again.");
      });
  };

  return (
    <div>
      <Helmet>
        <title>RoomDetails</title>
      </Helmet>
      <div className="max-w-6xl mx-auto   mb-10">
        <RoomPageDetailsTitle />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 bg-base-200 mt-5 shadow-2xl rounded-2xl">
          <img
            src={hotelRoomImageUrl}
            alt={name}
            className="w-full h-96 object-cover rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              <span>Hotel Name: </span>
              {name}
            </h2>
            <p className="text-gray-600 text-lg mb-1">
              <strong>Location:</strong> {location}, {city}.
            </p>
            <p className="text-gray-600 text-lg mb-1">
              <strong>Address:</strong> {address}.
            </p>
            <div>
              <p className="text-gray-600 text-lg mb-1 flex gap-1 items-center">
                <span>
                  <strong>Rating:</strong> {rating}
                </span>
                <span className="text-yellow-400">
                  <FaStar />
                </span>
              </p>
              <p className="text-gray-600 text-lg mb-1">
                <strong>Price:</strong> {pricePerNight} {currency} /
                <strong>night</strong>
              </p>
            </div>
            <p className="text-gray-600 text-lg mb-1">
              <strong>Max Guests:</strong> {maxGuests}
            </p>
            <p className="text-gray-600 text-lg mb-1">
              <strong>Bed Type:</strong> {bedType}
            </p>
            <p className="text-gray-600 text-lg mb-1">
              <strong>Room Types:</strong> {roomTypes}
            </p>
            <p className="text-gray-600 text-lg mb-1">
              <strong>Room Status:</strong> {roomStatusState}
            </p>
            <p className="text-gray-600 text-lg mb-1">
              <strong>Check-In:</strong> {checkIn}. <strong>&</strong>
              <strong>Check-Out:</strong> {checkOut}.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              <strong>Description: </strong>
              {description}
            </p>
            <div className="mt-4 text-lg">
              <h4 className="mb-1">
                <strong>Amenities:</strong>
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                {amenities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <NavLink to="">
                  <button
                    className="btn bg-[#0682a1] font-semibold text-lg text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={() => {
                      if (!user || !user?.email) {
                        //  Redirect unauthenticated users to login
                        navigate("/signin");
                      } else {
                        // Show modal if user is logged in
                        document.getElementById("my_modal_5").showModal();
                      }
                    }}
                  >
                    Book Now
                  </button>
                </NavLink>
                <NavLink to={"/roomPage"}>
                  <button className="btn rounded-lg bg-[#06a172] font-semibold text-lg text-white px-5 py-2  hover:bg-blue-500 transition">
                    Back To Rooms
                  </button>
                </NavLink>
              </div>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-xl mb-4">Booking Summary</h3>
                  <div className="mb-3">
                    <label className="block font-semibold mb-1">
                      Select Date:
                    </label>
                    <DatePicker
                      selected={bookingDate}
                      onChange={(date) => setBookingDate(date)}
                      minDate={new Date()}
                      placeholderText="Select a date"
                      className="border px-2 py-1 rounded w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <p>
                      <strong>Room:</strong> {name}
                    </p>
                    <p>
                      <strong>Price:</strong> {pricePerNight} {currency}
                    </p>
                    <p>
                      <strong>Bed Type:</strong> {bedType}
                    </p>
                    <p>
                      <strong>Room Status:</strong> {roomStatusState}
                    </p>
                    <p>
                      <strong>Max Guests:</strong> {maxGuests}
                    </p>
                    <p>
                      <strong>Description:</strong>
                      {description.slice(0, 150)}...
                    </p>
                  </div>
                  <div className="modal-action flex justify-between">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                    <Link
                      to="/myBookings"
                      className="btn btn-success"
                      // Prevent double booking
                      disabled={
                        !bookingDate || roomStatusState === "unavailable"
                      }
                      onClick={handleConfirmBooking}
                    >
                      Confirm Booking
                    </Link>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        <div className="mt-10 text-lg bg-gray-200 p-5 shadow-2xl rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Reviews</h3>
          {Array.isArray(reviews) && reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                  <p className="font-semibold text-gray-800">{review.user}</p>
                  <p className="flex gap-1 items-center">
                    <strong>Rating:</strong> {review.rating}
                    <span className="text-yellow-400">
                      <FaStar />
                    </span>
                  </p>
                  <p className="text-gray-700 mt-1">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">
              No reviews available for this room yet.
            </p>
          )}
        </div>
      </div>

      {/* Toast Container for displaying toast messages */}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default RoomDetailsPage;
