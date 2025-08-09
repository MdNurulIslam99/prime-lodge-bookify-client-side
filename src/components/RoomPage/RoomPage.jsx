import React, { useEffect, useState } from "react";
import RoomPageCard from "../RoomPageCard/RoomPageCard";
import RoomPageTitle from "../RoomPageTitle/RoomPageTitle";
import axios from "axios";
import { Helmet } from "react-helmet";

const RoomPage = () => {
  const [allHotelsData, setAllHotelsData] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]); //  NEW: filtered & sorted data
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [priceSortOrder, setPriceSortOrder] = useState(""); //  NEW: Price sort
  const [roomTypeSort, setRoomTypeSort] = useState(""); //  NEW: Room type sort
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //  Fetch data
  const fetchHotels = (min, max) => {
    setLoading(true);
    setError(null);

    const params = {};
    if (min && max) {
      params.minPrice = min;
      params.maxPrice = max;
    }

    axios
      .get("http://localhost:3000/hotels", { params })
      .then((response) => {
        setAllHotelsData(response.data);
        setFilteredHotels(response.data); //  SET initial sorted list
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch hotels");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  //  Sorting logic
  useEffect(() => {
    let data = [...allHotelsData];

    //  Sort by price
    if (priceSortOrder === "asc") {
      data.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (priceSortOrder === "desc") {
      data.sort((a, b) => b.pricePerNight - a.pricePerNight);
    }

    //  Filter by room type
    if (roomTypeSort !== "") {
      data = data.filter((hotel) => hotel.roomTypes.includes(roomTypeSort));
    }

    setFilteredHotels(data);
  }, [priceSortOrder, roomTypeSort, allHotelsData]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
      alert("Min price cannot be greater than max price");
      return;
    }
    fetchHotels(minPrice, maxPrice);
  };

  return (
    <div className="py-12 mt-10">
      <Helmet>
        <title>RoomPage</title>
      </Helmet>

      {/*  Filter Section */}
      <form
        onSubmit={handleFilterSubmit}
        className="mb-6 flex flex-wrap gap-4 justify-center items-center"
      >
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="input text-lg font-semibold input-bordered"
          min="0"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="input text-lg font-semibold input-bordered"
          min="0"
        />
        <button type="submit" className="btn btn-primary">
          Filter
        </button>
      </form>

      {/*  Sorting UI */}
      <div className="mb-10 text-center space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600">
          Sort Hotels
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Price Sort Dropdown */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Sort by Price
            </label>
            <select
              value={priceSortOrder}
              onChange={(e) => setPriceSortOrder(e.target.value)}
              className="select select-bordered w-52"
            >
              <option value="">Default</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>

          {/* Room Type Filter Dropdown */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Filter by Room Type
            </label>
            <select
              value={roomTypeSort}
              onChange={(e) => setRoomTypeSort(e.target.value)}
              className="select select-bordered w-52"
            >
              <option value="">All Types</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </div>
      </div>

      <RoomPageTitle />

      {loading && (
        <p className="text-center">
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
          <span className="loading loading-bars loading-xl"></span>
        </p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* *** CHANGE HERE *** */}
      {filteredHotels.length === 0 && !loading && !error && (
        <p className="text-center bg-gray-200 p-6 rounded-2xl text-2xl font-semibold text-black mt-10">
          No hotels found
          {roomTypeSort ? ` for room type "${roomTypeSort}"` : ""}. Please try
          another filter or room type.
        </p>
      )}

      {/*  Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHotels.map((hotel) => (
          <RoomPageCard key={hotel._id} allHotelData={hotel} />
        ))}
      </div>
    </div>
  );
};

export default RoomPage;
