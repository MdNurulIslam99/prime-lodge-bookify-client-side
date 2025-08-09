import React from "react";
import PigeonMaps from "../PigeonMaps/PigeonMaps";

const PigeonMapsDetails = () => {
  return (
    <div>
      <div className="App">
        <div className="text-center bg-gray-200 shadow-2xl rounded-2xl p-4 space-y-3">
          <h1 className="text-3xl font-bold mt-2">Hotels Map Use Pigeons</h1>
          <p className="font-semibold text-base text-center opacity-70 max-w-5xl mx-auto">
            A location-based feature that displays hotels on an interactive map
            using the Pigeons library, allowing users to explore and find
            accommodations with real-time markers and smooth navigation.
          </p>
        </div>
        <div className="mt-5 ">
          <PigeonMaps></PigeonMaps>
        </div>
      </div>
    </div>
  );
};

export default PigeonMapsDetails;
