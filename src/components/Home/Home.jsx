import React, { useEffect } from "react";
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
import { Helmet } from "react-helmet";
import { ThemeProvider } from "../../contexts/ThemeContext";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import HotelNewPart from "../HotelNewPart/HotelNewPart";

const Home = () => {
  const hotelsInfo = useLoaderData();
  // console.log(hotelsInfo);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <ThemeProvider>
      {/* <div>
        <ThemeSwitch></ThemeSwitch>
      </div> */}

      <div className="dark:bg-gray-900 dark:text-blue-600">
        <Helmet>
          <title>HomePage</title>
        </Helmet>
        <div className="mt-16 mb-10">
          <SwiperSlider></SwiperSlider>
        </div>
        <div className="mt-10 mb-10">
          <TypewriterText></TypewriterText>
        </div>
        <div className="mt-10 mb-10">
          <ContactPageMap></ContactPageMap>
        </div>
        <div className="mt-10 ">
          <PigeonMapsDetails></PigeonMapsDetails>
        </div>
        <div className="mt-10 mb-10">
          <HomePageModal></HomePageModal>
        </div>

        <div className="mt-10 ">
          <HotelsCollection
            key={hotelsInfo._id}
            hotelsInfo={hotelsInfo}
          ></HotelsCollection>
        </div>
        <div className=" mb-10">
          <ReviewShow></ReviewShow>
        </div>
        <div className="mt-10 mb-10">
          <HotelNewPart></HotelNewPart>
        </div>
        <div className="mt-10 mb-10">
          <LottieCard></LottieCard>
        </div>

        <div className="mt-10 mb-10">
          <HotelService></HotelService>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
