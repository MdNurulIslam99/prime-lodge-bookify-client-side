import React, { useState, useEffect } from "react";
import RoomPageCard from "./RoomPageCard";
import axios from "axios";

const RoomPriceFilter = () => {
  // Filter state for min and max price
  const [filters, setFilters] = useState({ minPrice: "", maxPrice: "" });
  const [rooms, setRooms] = useState([]);

  // Fetch rooms with filters applied (no try-catch)
  const fetchRooms = async () => {
    axios
      .get("http://localhost:3000/hotels", {
        params: {
          minPrice: filters.minPrice,
          maxPrice: filters.maxPrice,
        },
      })
      .then((res) => setRooms(res.data))
      .catch((err) => console.error(err)); // optional error handling
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleChange = (e) => {
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
        <button type="submit" className="btn btn-primary">
          Filter
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
