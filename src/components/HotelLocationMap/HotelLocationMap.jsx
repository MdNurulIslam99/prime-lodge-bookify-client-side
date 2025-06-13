import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Example hotel data with different locations in Bangladesh
const hotelLocations = [
  {
    name: "The Westin Dhaka",
    position: [23.7964, 90.4066],
    address: "Gulshan-2, Dhaka",
  },
  {
    name: "Pan Pacific Sonargaon",
    position: [23.751, 90.3912],
    address: "Kawran Bazar, Dhaka",
  },
  {
    name: "Radisson Blu Chattogram",
    position: [22.3569, 91.7832],
    address: "Chattogram",
  },
  {
    name: "Royal Tulip Sea Pearl Beach Resort",
    position: [21.4267, 92.0067],
    address: "Cox’s Bazar",
  },
  {
    name: "Hotel Noorjahan Grand",
    position: [24.8917, 91.8789],
    address: "Sylhet",
  },
];
const HotelLocationMap = () => {
  const centerPosition = [23.685, 90.3563];

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border">
      <MapContainer
        center={centerPosition}
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {hotelLocations.map((hotel, index) => (
          <Marker key={index} position={hotel.position}>
            <Popup>
              📍 <strong>{hotel.name}</strong> <br />
              {hotel.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HotelLocationMap;
