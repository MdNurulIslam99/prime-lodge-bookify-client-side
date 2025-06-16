import React from "react";
import HomeModalShow from "../HomeModalShow/HomeModalShow";

const HomePageModal = () => {
  const offers = [
    {
      title: "Summer Deal - 30% OFF",
      description: "Save big this summer when you book for 3 nights or more.",
      imageUrl: "https://i.ibb.co/zHCLd4NN/summer-offer.jpg",
    },
    {
      title: "Weekend Escape",
      description: "Book weekends and get late checkout for free!",
      imageUrl: "https://i.ibb.co/1fv3B0Wf/weeknd.jpg",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">
        Welcome to Our Hotel
      </h1>
      <HomeModalShow offers={offers} />
    </div>
  );
};

export default HomePageModal;
