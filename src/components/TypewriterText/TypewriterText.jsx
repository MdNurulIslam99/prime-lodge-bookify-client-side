import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterText = () => {
  return (
    <div className="shadow-2xl rounded-lg mt-10 mb-5 p-10 bg-base-300">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Find Your Perfect Hotel's For{" "}
        <span className="text-green-600">
          <Typewriter
            words={[
              "Daily or weekly or Monthly Rent",
              "Superior Double Room",
              "Standard Twin Room",
              "Deluxe King Room",
              "Vip Deluxe King Room",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypewriterText;
