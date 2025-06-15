import React from "react";

const MyBookingsRow = ({ myBooking, index }) => {
  const {
    _id,
    roomName,
    hotelRoomImageUrl,
    // location,
    address,
    date,
    pricePerNight,
    currency,
    roomStatus,
  } = myBooking;

  const handleCancel = () => {
    console.log("dataeas deletaed");
  };
  return (
    <>
      <tr>
        <th>
          <label>{index + 1}</label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={hotelRoomImageUrl} alt="hotelRoomImageUrl" />
              </div>
            </div>
            <div>
              <div className="font-bold">{roomName}</div>
              {/* <div className="text-sm opacity-50">{location}</div> */}
              <div className="text-sm opacity-50">{address}</div>
            </div>
          </div>
        </td>
        <td>
          {pricePerNight}
          {/* <br /> */}
          <span className="badge badge-ghost badge-sm">{currency}</span>
        </td>
        <td>{roomStatus}</td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-md">Update Date</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-md">Reviews</button>
        </th>
        <th>
          <button onClick={handleCancel} className="btn btn-ghost btn-md">
            Cancel Booking
          </button>
        </th>
      </tr>
    </>
  );
};

export default MyBookingsRow;
