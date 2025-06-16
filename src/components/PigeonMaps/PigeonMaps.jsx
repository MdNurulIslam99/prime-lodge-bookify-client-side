import { Map, Marker } from "pigeon-maps";
import React, { useState } from "react";
import { useLoaderData } from "react-router";

const PigeonMaps = () => {
  const PigeonMapsLocation = useLoaderData();
  const [markerPosition, setMarkerPosition] = useState([23.685, 90.3563]);

  const handleMapClick = ({ latLng }) => {
    setMarkerPosition(latLng);
  };

  return (
    <div className="w-full rounded-2xl h-[400px]">
      <Map
        height={400}
        defaultCenter={[23.685, 90.3563]}
        defaultZoom={11}
        onClick={handleMapClick}
      >
        {PigeonMapsLocation.map((PigeonMap, index) => (
          <Marker
            key={index}
            width={50}
            anchor={PigeonMap.coordinates}
            // color="red"
            onClick={() => alert(PigeonMap.name)}
          />
        ))}
        {/* <Marker width={50}> anchor={markerPosition}</Marker> */}
      </Map>
    </div>
  );
};

export default PigeonMaps;
