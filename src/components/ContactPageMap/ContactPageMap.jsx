import React from "react";
import HotelLocationMap from "../HotelLocationMap/HotelLocationMap";

const ContactPageMap = () => {
  return (
    <div className="space-y-4">
      <div className="text-center bg-gray-200 shadow-2xl rounded-2xl py-3">
        <h2 className="text-3xl font-bold mb-2">Our Location</h2>
        <p className="mb-4 font-semibold">
          Visit us at our central hotel location.
        </p>
      </div>
      <HotelLocationMap></HotelLocationMap>
    </div>
  );
};

export default ContactPageMap;
