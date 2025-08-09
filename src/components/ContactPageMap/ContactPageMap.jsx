import React from "react";
import HotelLocationMap from "../HotelLocationMap/HotelLocationMap";

const ContactPageMap = () => {
  return (
    <div className="space-y-4">
      <div className="text-center bg-gray-200 shadow-2xl rounded-2xl py-3">
        <h2 className="text-4xl  font-bold mb-2 mt-2">Our Location</h2>
        <p className="mb-4 font-semibold text-base text-center opacity-70 max-w-5xl mx-auto">
          Visit our centrally located hotel, perfectly positioned for easy
          access to top attractions, transportation hubs, and vibrant city
          spots, making your stay convenient and memorable.
        </p>
      </div>
      <HotelLocationMap></HotelLocationMap>
    </div>
  );
};

export default ContactPageMap;
