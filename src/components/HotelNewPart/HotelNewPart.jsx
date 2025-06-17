import React from "react";
import { Link } from "react-router";

const HotelNewPart = () => {
  return (
    <div>
      <div class="bg-gray-200 rounded-2xl shadow-2xl py-16 px-4 md:px-20">
        <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Discover Your Perfect Stay
          </h2>
          <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Book luxurious and budget-friendly hotels effortlessly with our
            modern platform. Real-time availability, instant booking, secure
            payments, and verified guest reviews.
          </p>

          <div class="grid gap-8 md:grid-cols-3 text-left">
            {/* <!-- Feature 1 --> */}
            <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 class="text-xl font-semibold mb-2 text-indigo-600">
                Real-Time Availability
              </h3>
              <p class="text-gray-600">
                Instantly see which rooms are available and make bookings
                without delay.
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 class="text-xl font-semibold mb-2 text-indigo-600">
                Verified Reviews
              </h3>
              <p class="text-gray-600">
                Read authentic feedback from guests who actually stayed at the
                property.
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 class="text-xl font-semibold mb-2 text-indigo-600">
                Secure Payments
              </h3>
              <p class="text-gray-600">
                Book with confidence using our encrypted, fast, and secure
                checkout system.
              </p>
            </div>
          </div>

          {/* <!-- CTA Button --> */}
          <div class="mt-12">
            <Link
              to="/roomPage"
              class="inline-block bg-green-400 text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-indigo-700 transition"
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
