import React from "react";
import { useLoaderData } from "react-router";
import RoomPageCard from "../RoomPageCard/RoomPageCard";
import RoomPageTitle from "../RoomPageTitle/RoomPageTitle";

const RoomPage = () => {
  const allHotelsData = useLoaderData();
  // console.log(allHotelsData);
  return (
    <div className="py-12 ">
      <div>
        <RoomPageTitle></RoomPageTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {allHotelsData.map((allHotelData) => (
          <RoomPageCard
            key={allHotelData._id}
            allHotelData={allHotelData}
          ></RoomPageCard>
        ))}
      </div>
    </div>
  );
};

export default RoomPage;
