import React, { useEffect } from "react";
import {
  FaDraftingCompass,
  FaLaptopCode,
  FaMobileAlt,
  FaRegImages,
} from "react-icons/fa";
import { Link } from "react-router";

const Design = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-5 mt-16 mb-10 shadow-2xl rounded-lg bg-base-200">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">
        Design Services
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-5xl mx-auto">
        At{" "}
        <span className="text-emerald-500 font-semibold">
          PrimeLodgeBookify
        </span>
        , we create stunning, user-friendly designs that make hotel booking
        smooth and enjoyable. Our goal is to combine style and functionality for
        the perfect guest experience.
      </p>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaDraftingCompass className="text-yellow-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Creative UI/UX</h2>
          <p className="text-gray-600">
            Intuitive designs that enhance guest interaction, from browsing
            hotels to final booking.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaLaptopCode className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Responsive Layouts</h2>
          <p className="text-gray-600">
            Mobile-first designs that adapt beautifully to all devices for a
            seamless booking journey.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaMobileAlt className="text-green-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Mobile Optimization</h2>
          <p className="text-gray-600">
            Fast-loading, touch-friendly designs for guests booking on the go.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaRegImages className="text-pink-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Visual Storytelling</h2>
          <p className="text-gray-600">
            High-quality images and layouts that bring hotel experiences to
            life.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gray-200 p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold mb-3">
          Let’s Design Your Perfect Hotel Experience
        </h3>
        <p className="text-gray-600 mb-6">
          Our design experts are ready to transform your hotel booking platform
          into a visual masterpiece.
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Contact Our Design Team
        </Link>
      </div>
    </div>
  );
};

export default Design;
