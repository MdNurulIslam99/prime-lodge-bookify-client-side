import React from "react";
import { Link } from "react-router";

const HotelNewPart = () => {
  return (
    <div>
      <div className="bg-gray-200 rounded-2xl shadow-2xl py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Discover Your Perfect Stay
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto">
            Book luxurious and budget-friendly hotels effortlessly with our
            modern platform. Real-time availability, instant booking, secure
            payments, and verified guest reviews.
          </p>

          <div className="grid gap-8 md:grid-cols-3 text-left">
            {/* <!-- Feature 1 --> */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                Real-Time Availability
              </h3>
              <p className="text-gray-600">
                Instantly see which rooms are available and make bookings
                without delay.
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                Verified Reviews
              </h3>
              <p className="text-gray-600">
                Read authentic feedback from guests who actually stayed at the
                property.
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                Secure Payments
              </h3>
              <p className="text-gray-600">
                Book with confidence using our encrypted, fast, and secure
                checkout system.
              </p>
            </div>
          </div>

          {/* <!-- CTA Button --> */}
          <div className="mt-12">
            <Link
              to="/roomPage"
              className="inline-block bg-green-400 text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-indigo-700 transition"
            >
              Start Booking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelNewPart;
