import React, { useEffect } from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaHandshake,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const Event = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-5 mt-16 mb-10 shadow-2xl rounded-lg bg-base-200">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Event Management Services
      </h1>
      <p className="text-center text-gray-700 text-lg max-w-5xl mx-auto mb-10">
        At{" "}
        <span className="text-emerald-500 font-semibold">
          PrimeLodgeBookify
        </span>
        , we specialize in organizing memorable events — from weddings to
        conferences — offering full-service planning, vendor coordination, and
        venue management to make every occasion perfect.
      </p>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaCalendarAlt className="text-indigo-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Comprehensive Planning</h2>
          <p className="text-gray-600">
            Detailed event scheduling and management to cover every aspect from
            start to finish.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaUsers className="text-green-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Guest Coordination</h2>
          <p className="text-gray-600">
            Efficient management of guest lists, invitations, seating, and
            accommodations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaHandshake className="text-yellow-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Vendor Management</h2>
          <p className="text-gray-600">
            Liaising with caterers, decorators, entertainers, and other vendors
            for smooth execution.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-pink-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Venue Coordination</h2>
          <p className="text-gray-600">
            Assistance in selecting, preparing, and managing the perfect venue
            for your event.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gray-200 p-8 rounded-lg shadow text-center">
        <h3 className="text-2xl font-semibold mb-3">
          Plan Your Perfect Event With Us
        </h3>
        <p className="text-gray-700 mb-6">
          Our experienced team is ready to help you create unforgettable
          moments. Let’s get started today!
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Contact Event Experts
        </Link>
      </div>
    </div>
  );
};

export default Event;
