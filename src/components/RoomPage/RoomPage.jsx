import React, { useEffect, useState } from "react";
import RoomPageCard from "../RoomPageCard/RoomPageCard";
import RoomPageTitle from "../RoomPageTitle/RoomPageTitle";
import axios from "axios";

const RoomPage = () => {
  const [allHotelsData, setAllHotelsData] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
      alert("Min price cannot be greater than max price");
      return;
    }
    fetchHotels(minPrice, maxPrice);
  };

  return (
    <div className="py-12">
      <form
        onSubmit={handleFilterSubmit}
        className="mb-8 flex gap-4 justify-center"
      >
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="input text-lg font-semibold input-bordered"
          min="0"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="input text-lg font-semibold input-bordered"
          min="0"
        />
        <button type="submit" className="btn btn-primary">
          Filter
        </button>
      </form>

      <RoomPageTitle />

      {loading && <p className="text-center">Loading hotels...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allHotelsData.map((hotel) => (
          <RoomPageCard key={hotel._id} allHotelData={hotel} />
        ))}
      </div>
    </div>
  );
};

export default RoomPage;
