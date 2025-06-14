import React from "react";
import HotelCardInfo from "../HotelCardInfo/HotelCardInfo";
import HotelsContainer from "../HotelsContainer/HotelsContainer";

const HotelsCollection = ({ hotelsInfo }) => {
  //   console.log(hotelsInfo);
  const hotelsData = hotelsInfo
    .sort((a, b) => b.pricePerNight - a.pricePerNight)
    .slice(0, 6);
  return (
    <div className="py-12 ">
      <div>
        <HotelsContainer></HotelsContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {hotelsData.map((hotelData) => (
          <HotelCardInfo
            key={hotelData._id}
            hotelData={hotelData}
          ></HotelCardInfo>
        ))}
      </div>
    </div>
  );

  //   const topSixRooms = hotelsInfo
  //     .sort((a, b) => b.pricePerNight - a.pricePerNight)
  //     .slice(0, 6);

  //   return (
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  //       {topSixRooms.map((hotel) => (
  //         <div
  //           key={hotel.id}
  //           className="rounded-lg shadow-lg border overflow-hidden"
  //         >
  //           <img
  //             src={hotel.imageUrl}
  //             alt={hotel.name}
  //             className="w-full h-48 object-cover"
  //           />
  //           <div className="p-4">
  //             <h2 className="text-xl font-semibold">{hotel.name}</h2>
  //             <p className="text-sm text-gray-600 mb-2">
  //               {hotel.city}, {hotel.location}
  //             </p>
  //             <p className="text-sm text-gray-700 mb-4">
  //               {hotel.description.slice(0, 120)}...
  //             </p>
  //             <p className="font-bold mb-2">
  //               Price: {hotel.pricePerNight.toLocaleString()} {hotel.currency} /
  //               night
  //             </p>
  //             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
  //               Book Now
  //             </button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
};

export default HotelsCollection;
