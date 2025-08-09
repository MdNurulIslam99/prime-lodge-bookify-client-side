import React, { useEffect } from "react";
import {
  FaRegLightbulb,
  FaPalette,
  FaBullhorn,
  FaCameraRetro,
} from "react-icons/fa";
import { Link } from "react-router";

const Branding = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-5 py-5 mt-16 mb-10 shadow-2xl rounded-lg">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">
        Branding Services
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        At{" "}
        <span className="text-emerald-500 font-semibold">
          PrimeLodgeBookify
        </span>
        , our branding services help hotels and resorts stand out in the
        competitive travel market. We create a strong identity that connects
        with your guests and leaves a lasting impression.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaRegLightbulb className="text-yellow-400" /> Why Branding Matters
          </h2>
          <p className="text-gray-600">
            A powerful brand builds trust, increases recognition, and drives
            bookings. From visual design to messaging, we ensure your hotel is
            instantly recognizable and memorable for guests.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaPalette className="text-pink-400" /> Our Approach
          </h2>
          <ul className="list-none space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <FaPalette className="text-pink-400" /> Custom logo & visual
              identity
            </li>
            <li className="flex items-center gap-2">
              <FaBullhorn className="text-blue-400" /> Website & platform
              branding
            </li>
            <li className="flex items-center gap-2">
              <FaRegLightbulb className="text-yellow-400" /> Messaging & tone
              guidelines
            </li>
            <li className="flex items-center gap-2">
              <FaCameraRetro className="text-green-400" /> Photography & media
              styling
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 bg-gray-100 p-6 rounded-lg text-center shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Let’s Elevate Your Brand</h3>
        <p className="text-gray-600 mb-4">
          Partner with us to create a unique, unforgettable brand experience for
          your guests.
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Contact Our Branding Team
        </Link>
      </div>
    </div>
  );
};

export default Branding;
