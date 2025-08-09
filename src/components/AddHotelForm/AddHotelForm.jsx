import React, { useRef, use } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const AddHotelForm = () => {
  const { user } = use(AuthContext);
  const formRef = useRef(null); // useRef for the form

  // Submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      location: formData.get("location"),
      city: formData.get("city"),
      coordinates: formData.get("coordinates").split(",").map(Number),
      address: formData.get("address"),
      rating: parseFloat(formData.get("rating")) || 0,
      pricePerNight: parseInt(formData.get("pricePerNight")),
      currency: "BDT",
      checkIn: formData.get("checkIn"),
      checkOut: formData.get("checkOut"),
      description: formData.get("description"),
      amenities: formData
        .get("amenities")
        .split(",")
        .map((item) => item.trim()),
      imageUrl: formData.get("imageUrl"),
      hotelRoomImageUrl: formData.get("hotelRoomImageUrl"),
      roomStatus: "available",
      roomTypes: formData
        .get("roomTypes")
        .split(",")
        .map((item) => item.trim()),
      maxGuests: parseInt(formData.get("maxGuests")),
      bedType: formData.get("bedType"),
      addedBy: {
        name: user?.displayName || "",
        email: user?.email || "",
      },
      reviews: [],
    };

    axios
      .post("https://primelodge-bookify.vercel.app/hotels", payload)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Hotel added successfully.",
            confirmButtonColor: "#3085d6",
          });
          form.reset(); // Clear the form
        }
      })
      .catch((error) => {
        console.error("Submission Error:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to Add Hotel",
          text:
            error?.response?.data?.message ||
            "Something went wrong. Please try again.",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div className="max-w-5xl  mx-auto px-4 py-10">
      <Helmet>
        <title>Add Hotel</title>
      </Helmet>
      <div className=" mt-10 shadow-2xl bg-gray-200 p-5 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Add New Hotel
        </h2>

        {/* Ref-based form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Hotel Name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="location"
              placeholder="Location"
              className="input input-bordered w-full"
              required
            />
            <input
              name="city"
              placeholder="City"
              className="input input-bordered w-full"
              required
            />
            <input
              name="coordinates"
              placeholder="Coordinates (lat,lon)"
              className="input input-bordered w-full"
              required
            />
            <input
              name="address"
              placeholder="Address"
              className="input input-bordered w-full"
              required
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating (0-5)"
              max="5"
              min="0"
              step="0.1"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="pricePerNight"
              placeholder="Price Per Night (BDT)"
              className="input input-bordered w-full"
              required
            />
            <input
              type="number"
              name="maxGuests"
              placeholder="Max Guests"
              className="input input-bordered w-full"
            />
            <input
              name="checkIn"
              placeholder="Check-In Time"
              className="input input-bordered w-full"
            />
            <input
              name="checkOut"
              placeholder="Check-Out Time"
              className="input input-bordered w-full"
            />
            <input
              name="bedType"
              placeholder="Bed Type"
              className="input input-bordered w-full"
            />
            <input
              name="amenities"
              placeholder="Amenities (comma-separated)"
              className="input input-bordered w-full"
            />
          </div>

          <textarea
            name="description"
            placeholder="Hotel Description"
            className="textarea textarea-bordered w-full"
            rows="3"
          />
          {/* <input
            name="amenities"
            placeholder="Amenities (comma-separated)"
            className="input input-bordered w-full"
          /> */}
          <input
            name="roomTypes"
            placeholder="Room Types (comma-separated)"
            className="input input-bordered w-full"
          />
          <input
            type="url"
            name="imageUrl"
            placeholder="Hotel Image URL"
            className="input input-bordered w-full"
          />
          <input
            type="url"
            name="hotelRoomImageUrl"
            placeholder="Room Image URL"
            className="input input-bordered w-full"
          />

          {/* Read-only user info */}
          <div className="bg-gray-50 border border-gray-300 p-4 rounded">
            <h4 className="font-semibold mb-2 text-gray-700">
              Added By (Read Only)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                value={user?.displayName || ""}
                className="input input-bordered w-full bg-gray-100"
                readOnly
              />
              <input
                value={user?.email || ""}
                className="input input-bordered w-full bg-gray-100"
                readOnly
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="btn btn-primary w-full md:w-1/2">
              Add Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotelForm;
