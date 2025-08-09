import React from "react";
import PigeonMaps from "../PigeonMaps/PigeonMaps";

const PigeonMapsDetails = () => {
  return (
    <div>
      <div className="App">
        <div className="text-center bg-gray-200 shadow-2xl rounded-2xl p-4">
          <h1 className="text-3xl font-bold">Hotels Map Use Pigeons</h1>
        </div>
        <div className="mt-5 ">
          <PigeonMaps></PigeonMaps>
        </div>
      </div>
    </div>
  );
};

export default PigeonMapsDetails;
