import React from "react";
import HotelCardInfo from "../HotelCardInfo/HotelCardInfo";
import HotelsContainer from "../HotelsContainer/HotelsContainer";

const HotelsCollection = ({ hotelsInfo }) => {
  //   console.log(hotelsInfo);
  const hotelsData = hotelsInfo
    .sort((a, b) => b.pricePerNight - a.pricePerNight)
    .slice(0, 8);
  return (
    <div className="py-12 -mt-10 ">
      <div>
        <HotelsContainer></HotelsContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {hotelsData.map((hotelData) => (
          <HotelCardInfo
            key={hotelData._id}
            hotelData={hotelData}
          ></HotelCardInfo>
        ))}
      </div>
    </div>
  );
};

export default HotelsCollection;
