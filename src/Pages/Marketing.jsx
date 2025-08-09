import React, { useEffect } from "react";
import { FaBullhorn, FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";
import { Link } from "react-router";

const Marketing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-5 mt-16 mb-10 shadow-2xl rounded-lg bg-base-200 ">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">
        Marketing Services
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-5xl mx-auto">
        At{" "}
        <span className="text-emerald-500 font-semibold">
          PrimeLodgeBookify
        </span>
        , we help hotels and resorts reach their ideal guests with data-driven
        marketing strategies that boost bookings and brand visibility worldwide.
      </p>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaBullhorn className="text-yellow-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Campaign Management</h2>
          <p className="text-gray-600">
            Launch targeted ad campaigns to promote your property and attract
            high-value guests.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaChartLine className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">SEO & Analytics</h2>
          <p className="text-gray-600">
            Optimize your hotel listings and track performance to maximize
            online visibility.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaUsers className="text-green-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Customer Engagement</h2>
          <p className="text-gray-600">
            Build guest loyalty with personalized offers, email marketing, and
            social media presence.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaGlobe className="text-pink-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Global Reach</h2>
          <p className="text-gray-600">
            Connect with travelers from all around the world using multilingual
            and cross-platform marketing.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gray-200 p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold mb-3">
          Boost Your Hotel Bookings
        </h3>
        <p className="text-gray-600 mb-6">
          Let our expert marketing team create a strategy that drives more
          guests to your property.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Start Marketing Now
        </Link>
      </div>
    </div>
  );
};

export default Marketing;
