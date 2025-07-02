import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import L from "leaflet"; //  Added Leaflet for custom icon

const HotelLocationMap = () => {
  const hotelsLocation = useLoaderData();

  const centerPosition = [23.685, 90.3563]; // Central point of Bangladesh

  //  Define a custom divIcon with emoji
  const hotelDivIcon = L.divIcon({
    className: "custom-marker",
    html: `<div style="font-size: 24px;">🏨</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  return (
    //  Added relative and z-[0] to prevent overlapping navbar
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border relative z-0">
      <MapContainer
        center={centerPosition}
        zoom={6}
        scrollWheelZoom={true}
        className="h-full w-full z-0" //  Explicitly set lower z-index
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/*  Use custom marker icon */}
        {hotelsLocation.map((hotel, index) => (
          <Marker
            key={index}
            position={[hotel.coordinates[1], hotel.coordinates[0]]}
            icon={hotelDivIcon}
          >
            <Popup>
              <div>
                <strong>📍 {hotel.name}</strong> <br />
                {hotel.location}, {hotel.city} <br />
                <small>{hotel.address}</small>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HotelLocationMap;
