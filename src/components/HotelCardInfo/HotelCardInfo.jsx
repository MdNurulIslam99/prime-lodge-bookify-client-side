import React from "react";
import { NavLink } from "react-router";

const HotelCardInfo = ({ hotelData }) => {
  //   console.log(hotelData);
  const {
    _id,
    name,
    pricePerNight,
    imageUrl,

    location,
    city,
    currency,
    description,
    roomTypes,
  } = hotelData || {};
  return (
    <div>
      <div
        className="bg-white rounded-xl shadow-md overflow-hidden
         hover:shadow-lg transition duration-300"
      >
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="md:text-xl text-xl font-bold">
            <span className="md:text-xl text-lg font-extrabold">{name}</span>
          </h3>

          <div className="mt-2">
            <p className="text-base text-gray-600">
              <span className="font-bold">Hotel Location :</span> {location} ,{" "}
              {city}.
            </p>
            <p className="text-base text-gray-600">
              <span className="font-bold">Room Type :</span> {roomTypes[1]} ,{" "}
              {roomTypes[2]}.
            </p>
            <p className=" font-semibold text-base text-gray-600">
              <span className="font-bold"> Hotel Room Rent :</span>{" "}
              <span className="font-bold text-indigo-400">
                {pricePerNight} {currency}
              </span>
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <span className="font-bold"> Description :</span>
              <span> {description.slice(0, 120)}....</span>
            </p>
          </div>
          <NavLink to={`/roomDetailsPage/${_id}`}>
            <button className="  w-full bg-[#06a160] font-semibold text-white py-2 rounded-lg hover:bg-blue-300 transition">
              Book Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HotelCardInfo;
