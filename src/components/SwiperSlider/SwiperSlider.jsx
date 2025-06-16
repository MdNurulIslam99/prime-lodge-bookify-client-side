import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

const SwiperSlider = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh]">
      {/* Custom Navigation Arrows */}
      <div className="swiper-Link-prev-custom absolute top-1/2 left-4 z-10 transform -translate-y-1/2 text-white bg-black/50 p-3 rounded-full cursor-pointer">
        <FaChevronLeft className="text-xl" />
      </div>
      <div className="swiper-Link-next-custom absolute top-1/2 right-4 z-10 transform -translate-y-1/2 text-white bg-black/50 p-3 rounded-full cursor-pointer">
        <FaChevronRight className="text-xl" />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-Link-next-custom",
          prevEl: ".swiper-Link-prev-custom",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center rounded-2xl text-white"
            style={{
              backgroundImage: "url(https://i.ibb.co/B2hf2X4v/slider-re-6.jpg)",
            }}
          >
            <div className="flex h-full items-center justify-start p-8 md:p-16">
              <div className="bg-black bg-opacity-50 p-3 md:p-10 rounded-lg max-w-xl">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                  Book Luxury Hotels, Effortlessly
                </h1>
                <p className="mt-4 text-sm md:text-base lg:text-lg">
                  Discover top-rated hotels and exclusive deals across the globe
                  — all in one sleek, easy-to-use platform.
                </p>
                <Link
                  to="/roomPage"
                  className="btn mt-6 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center rounded-2xl text-white"
            style={{
              backgroundImage: "url(https://i.ibb.co/rKV49d7L/slider-re-4.jpg)",
            }}
          >
            <div className="flex h-full items-center justify-start p-8 md:p-16">
              <div className="bg-black bg-opacity-50 p-5 md:p-10 rounded-lg max-w-xl">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                  Your Stay, Your Way
                </h1>
                <p className="mt-4 text-sm md:text-base lg:text-lg">
                  Customize your trip with flexible bookings, real guest
                  reviews, and instant confirmations.
                </p>
                <Link
                  to="/roomPage"
                  className=" btn mt-6 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
                >
                  Start Booking
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center rounded-2xl text-white"
            style={{
              backgroundImage: "url(https://i.ibb.co/39YwCVCn/slider-re-5.jpg)",
            }}
          >
            <div className="flex h-full items-center justify-start p-8 md:p-16">
              <div className="bg-black bg-opacity-50 p-5 md:p-10 rounded-lg max-w-xl">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                  Trusted Hotels. Instant Booking.
                </h1>
                <p className="mt-4 text-sm md:text-base lg:text-lg">
                  Whether for business or leisure, book with confidence using
                  our secure and verified platform.
                </p>
                <Link
                  to="/roomPage"
                  className="btn mt-6 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
                >
                  View Deals
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
