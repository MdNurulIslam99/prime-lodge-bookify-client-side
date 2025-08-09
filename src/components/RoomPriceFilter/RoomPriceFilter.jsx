import React, { useState, useEffect } from "react";
import RoomPageCard from "./RoomPageCard";
import axios from "axios";

const RoomPriceFilter = () => {
  const [filters, setFilters] = useState({ minPrice: "", maxPrice: "" });
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    axios
      .get("http://localhost:3000/hotels", {
        params: {
          minPrice: filters.minPrice,
          maxPrice: filters.maxPrice,
        },
      })
      .then((res) => setRooms(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRooms();
  };

  return (
    <div>
      {/* Filter UI */}
      <form onSubmit={handleSubmit} className="mb-6 flex gap-4">
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleChange}
          className="input input-bordered"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleChange}
          className="input input-bordered"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Apply Filter Price
        </button>
      </form>

      {/* Render filtered rooms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomPageCard key={room._id} allHotelData={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomPriceFilter;
