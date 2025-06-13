import React from "react";
import Lottie from "lottie-react";
import animation1 from "../../assets/animation-1.json";
import animation2 from "../../assets/animation-2.json";
import animation3 from "../../assets/animation-3.json";
import animation4 from "../../assets/animation-4.json";
import animation5 from "../../assets/animation-5.json";
import animation6 from "../../assets/animation-6.json";

const LottieCard = () => {
  return (
    <div className="p-5 shadow-2xl  rounded-2xl  bg-gray-200 mt-10 mb-10 ">
      <div>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mt-5 mb-10">
          Hotels Animated Component
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div className="w-full mx-auto  shadow-2xl  rounded-2xl  ">
          <Lottie animationData={animation1} loop={true} />
        </div>
        <div className="w-full mx-auto shadow-2xl rounded-2xl p-5 ">
          <Lottie animationData={animation2} loop={true} />
        </div>
        <div className="w-full mx-auto shadow-2xl rounded-2xl p-5">
          <Lottie
            className="bg-base-100 rounded-2xl"
            animationData={animation3}
            loop={true}
          />
        </div>
        <div className="w-full mx-auto shadow-2xl rounded-2xl p-5">
          <Lottie animationData={animation4} loop={true} />
        </div>
        <div className="w-full mx-auto shadow-2xl rounded-2xl p-5">
          <Lottie animationData={animation5} loop={true} />
        </div>
        <div className="w-full mx-auto shadow-2xl rounded-2xl p-5">
          <Lottie animationData={animation6} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default LottieCard;
