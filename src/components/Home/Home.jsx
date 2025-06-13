import React from "react";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import ContactPageMap from "../ContactPageMap/ContactPageMap";
import TypewriterText from "../TypewriterText/TypewriterText";
import LottieCard from "../LottieCard/LottieCard";
import HotelService from "../HotelService/HotelService";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-16 py-1">
      <div className="mt-10 mb-10">
        <SwiperSlider></SwiperSlider>
      </div>
      <div className="mt-10 mb-10">
        <TypewriterText></TypewriterText>
      </div>
      <div className="mt-10 mb-10">
        <ContactPageMap></ContactPageMap>
      </div>
      <div className="mt-10 mb-10">
        <LottieCard></LottieCard>
      </div>
      <div className="mt-10 mb-10">
        <HotelService></HotelService>
      </div>
    </div>
  );
};

export default Home;
