import React from "react";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import ContactPageMap from "../ContactPageMap/ContactPageMap";
import TypewriterText from "../TypewriterText/TypewriterText";
import LottieCard from "../LottieCard/LottieCard";
import HotelService from "../HotelService/HotelService";
import { useLoaderData } from "react-router";
import HotelsCollection from "../HotelsCollection/HotelsCollection";
import PigeonMapsDetails from "../PigeonMapsDetails/PigeonMapsDetails";
import ReviewShow from "../ReviewShow/ReviewShow";
import HomePageModal from "../HomePageModal/HomePageModal";

const Home = () => {
  const hotelsInfo = useLoaderData();
  // console.log(hotelsInfo);
  return (
    <div className="max-w-screen-2xl mx-auto md:px-16 py-1">
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
        <PigeonMapsDetails></PigeonMapsDetails>
      </div>
      <div className="mt-10 mb-10">
        <HomePageModal></HomePageModal>
      </div>

      <div>
        <HotelsCollection
          key={hotelsInfo._id}
          hotelsInfo={hotelsInfo}
        ></HotelsCollection>
      </div>
      <div className="mt-10 mb-10">
        <ReviewShow></ReviewShow>
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
