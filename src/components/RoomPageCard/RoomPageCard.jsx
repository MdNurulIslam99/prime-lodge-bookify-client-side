import React from "react";
import { useNavigate } from "react-router";

const RoomPageCard = ({ allHotelData }) => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    location,
    city,
    roomTypes,
    pricePerNight,
    currency,
    description,
    roomStatus,
    hotelRoomImageUrl,
  } = allHotelData || {};

  return (
    <div
      onClick={() => navigate(`/roomDetailsPage/${_id}`)}
      //   onClick={() => navigate("/roomDetailsPage")}
      className="bg-white rounded-2xl p-5 shadow-2xl overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
    >
      <img
        src={hotelRoomImageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-xl shadow-2xl"
      />
      <div className="p-4">
        <h3 className="md:text-xl text-xl font-bold">Name : {name}</h3>

        <div className="mt-2 text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-semibold">Location : </span> {location},{" "}
            {city}
          </p>
          <p>
            <span className="font-semibold">Room Types : </span>
            {roomTypes.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Price : </span>
            <span className="text-indigo-500 font-bold">
              {pricePerNight} {currency} / night
            </span>
          </p>
          <p>
            <span className="font-semibold">Room Status : </span>
            {roomStatus}
          </p>
          <p>
            <span className="font-semibold">Description : </span>
            {description.slice(0, 100)}....
          </p>
        </div>

        {/* <button
          className="mt-4 w-full bg-[#06a160] text-white py-2 rounded-lg font-semibold hover:bg-blue-500 transition"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/room-details/${_id}`);
          }}
        >
          Book Now
        </button> */}
      </div>
    </div>
  );
};

export default RoomPageCard;
