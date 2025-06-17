import React from "react";

const HotelService = () => {
  return (
    <div className="mt-10 mb-10 bg-teal-100 shadow-2xl rounded-2xl p-10">
      <div className="bg-base-200 shadow-2xl p-5 rounded-lg space-y-5">
        <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold  ">
          Your Comfort, Our Priority — 24/7 Room & Hospitality Services!
        </h1>

        <p className="text-center px-5 font-semibold">
          At our hotel's, your comfort is more than just a promise — it's our
          top priority. We offer round-the-clock room cleaning, on-demand food
          service, and access to our luxurious lounge areas, all designed to
          make your stay seamless and relaxing. Whether you're arriving late,
          need a midnight snack, or prefer fresh linens at any hour, our
          dedicated staff is always available to ensure you enjoy a spotless,
          restful, and satisfying experience — 24 hours a day, 7 days a week
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 gap-5  mt-10 ">
        <div className="bg-base-200 p-5 rounded-lg ">
          <img
            className="rounded-lg h-[250px] w-[400px] shadow-2xl "
            src="https://i.ibb.co/QFTWXCpr/luggage.jpg"
            alt="category1"
          />
        </div>
        <div className="bg-base-200 p-5 rounded-lg ">
          <img
            className="rounded-lg h-[250px] w-[400px] shadow-2xl"
            src="https://i.ibb.co/PzNsfk8s/room-Cleaner2.jpg"
            alt="category2"
          />
        </div>
        <div className="bg-base-200 p-5 rounded-lg">
          <img
            className="rounded-lg h-[250px] w-[400px] shadow-2xl"
            src="https://i.ibb.co/ccSpy4w9/room-Cleaner1.jpg"
            alt="category3"
          />
        </div>
        <div className="bg-base-200 p-5 rounded-lg">
          <img
            className="rounded-lg h-[250px] w-[400px] shadow-2xl"
            src="https://i.ibb.co/Kx9zpFbP/room-Cleaner4.jpg"
            alt="category4"
          />
        </div>
        <div className="bg-base-200 p-5 rounded-lg">
          <img
            className="rounded-lg h-[250px] w-[400px] shadow-2xl"
            src="https://i.ibb.co/zhXGP6gc/foodde1.jpg"
            alt="category5"
          />
        </div>
      </div>
    </div>
  );
};

export default HotelService;
