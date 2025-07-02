import React from "react";
import { NavLink } from "react-router";

const HotelCardInfo = ({ hotelData }) => {
  const {
    _id,
    name,
    // pricePerNight,
    imageUrl,
    location,
    city,
    // currency,
    description,
    roomTypes,
  } = hotelData || {};

  return (
    <div>
      <div
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between min-h-[470px]" //  CHANGED: force equal height
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover rounded-t-xl"
        />

        <div className="p-4 flex flex-col flex-grow">
          {" "}
          {/*  CHANGED: allow content to grow and push button to bottom */}
          <h3 className="text-xl font-bold mb-2">{name}</h3>{" "}
          {/*  Title clearly styled */}
          <div className="flex-grow">
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-bold">Location:</span> {location}, {city}
            </p>

            <p className="text-sm text-gray-600 mb-1">
              <span className="font-bold">Room Types:</span>{" "}
              {roomTypes?.slice(0, 2).join(", ")}
            </p>

            {/* <p className="text-sm text-gray-600 mb-1">
              <span className="font-bold">Rent:</span>{" "}
              <span className="text-indigo-600 font-bold">
                {pricePerNight} {currency}
              </span>
            </p> */}

            <p className="text-sm text-gray-700 mt-2">
              <span className="font-bold">Description:</span>{" "}
              {description?.slice(0, 90)}...
            </p>
          </div>
          {/*  Button section: pushed to bottom */}
          <div className="mt-4 space-y-2">
            {/* <NavLink to={`/roomDetailsPage/${_id}`}>
              <button className="w-full bg-[#068aa1] font-semibold text-white py-2 rounded-lg hover:bg-blue-300 transition">
                Book Now
              </button>
            </NavLink> */}
            <NavLink to={`/roomDetailsPage/${_id}`}>
              <button className="w-full border border-[#068aa1] text-[#068aa1] font-semibold py-2 rounded-lg hover:bg-[#068aa1] hover:text-white transition">
                See More
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCardInfo;
