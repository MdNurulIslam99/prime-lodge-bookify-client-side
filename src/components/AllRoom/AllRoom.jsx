import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router";

const AllRoom = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://primelodge-bookify.vercel.app/hotels")
      .then((response) => {
        setHotels(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch hotel data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 md:p-8 mt-10">
      <Helmet>
        <title>All Rooms</title>
      </Helmet>

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-700">
        All Room Details
      </h2>

      {loading && (
        <p className="text-center text-gray-600 text-lg">
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
          <span className="loading loading-bars loading-xl"></span>
        </p>
      )}

      {error && <p className="text-center text-red-500 text-lg">{error}</p>}

      {!loading && !error && hotels.length === 0 && (
        <p className="text-center text-gray-600 text-lg">
          No room data available.
        </p>
      )}

      {!loading && !error && hotels.length > 0 && (
        <div className="overflow-x-auto shadow-2xl rounded-lg">
          <table className="table w-full table-zebra text-sm md:text-base">
            <thead className="bg-blue-100 text-gray-800">
              <tr>
                <th>Index No</th>
                <th>Image</th>
                <th>Hotel Name</th>
                <th>Room Types</th>
                <th>Price/Night</th>
                <th>Location</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel, index) => (
                <tr key={hotel._id}>
                  <td>{index + 1}</td>
                  <td>
                    {hotel.imageUrl ? (
                      <img
                        src={hotel.imageUrl}
                        alt={hotel.name}
                        className="w-20 h-16 object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </td>
                  <td>{hotel.name}</td>
                  <td>{hotel.roomTypes?.join(", ")}</td>
                  <td>${hotel.pricePerNight}</td>
                  <td>{hotel.location}</td>
                  <td>{hotel.rating || "N/A"}</td>
                  <td>
                    <NavLink to={`/roomDetailsPage/${hotel._id}`}>
                      <button className="w-full border border-[#068aa1] text-[#068aa1] font-semibold py-2 rounded-lg hover:bg-[#068aa1] hover:text-white transition">
                        See More
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllRoom;
