import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";

const RoomDetailsPage = () => {
  const detailsData = useLoaderData();
  //   console.log(detailsData);
  const {
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
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={hotelRoomImageUrl}
            alt={name}
            className="w-full h-96 object-cover rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              <span>Hotel Name : </span>
              {name}
            </h2>
            <p className="text-gray-600 text-lg mb-1">
              <strong>Location:</strong> {location}, {city}.
            </p>
            <p className="text-gray-600 text-lg  mb-1">
              <strong>Address:</strong> {address}.
            </p>
            <div className="">
              <p className="text-gray-600 text-lg mb-1 flex gap-1 items-center">
                <span>
                  <strong>Rating:</strong> {rating}
                </span>
                <span className="text-yellow-400">
                  <FaStar />
                </span>
              </p>
              <p className="text-gray-600 text-lg mb-1">
                <strong>Price:</strong> {pricePerNight} {currency} /{" "}
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
              <strong>Check-In:</strong> {checkIn}. <strong> & </strong>
              <strong> Check-Out:</strong> {checkOut}.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              {" "}
              <strong> Description : </strong>
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
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-lg">
          <h3 className="text-2xl font-bold mb-4">Reviews</h3>
          {Array.isArray(reviews) && reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                  <p className="font-semibold text-gray-800">{review.user}</p>
                  <p className="flex gap-1 items-center">
                    <strong>Rating :</strong> {review.rating}
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
    </div>
  );
};

export default RoomDetailsPage;
