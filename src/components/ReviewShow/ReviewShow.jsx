// ReviewShow.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const ReviewShow = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://primelodge-bookify.vercel.app/hotels")
      .then((response) => {
        const hotels = response.data || [];
        const reviews = hotels.flatMap((hotel) => hotel.reviews || []);
        setAllReviews(reviews);
      })
      .catch((error) => {
        console.error("Error fetching hotel reviews:", error);
      });
  }, []);

  if (allReviews.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        <p>Loading testimonials or no reviews available...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl bg-gray-200 rounded-2xl mx-auto px-4 py-10 text-center shadow-2xla">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">
        What Our Guests Say
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {allReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-gray-200 p-10 rounded-xl shadow-2xl">
              <p className="text-gray-800 italic text-xl mb-4">
                "{review.comment}"
              </p>
              <div className="text-gray-700 font-medium ">
                <p className="text-base">
                  <span className="font-bold text-lg">Username :</span>{" "}
                  {review.username || review.user || "Anonymous"}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-base">
                    <span className="font-bold text-lg">Rating : </span>
                    {review.rating || "N/A"}/5
                  </p>
                  <p className="text-yellow-400">
                    <FaStar />
                  </p>
                </div>
              </div>
              <p className="text-base text-gray-500 mt-2">
                <span className="font-bold text-lg">Review Date : </span>
                {review.timestamp
                  ? new Date(review.timestamp).toLocaleDateString()
                  : "Unknown date"}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewShow;
