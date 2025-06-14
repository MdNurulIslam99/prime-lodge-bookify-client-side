import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const HotelLocationMap = () => {
  const hotelsLocation = useLoaderData();
  //   console.log(hotelsLocation);

  const centerPosition = [23.685, 90.3563]; // Central point of Bangladesh

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

        {hotelsLocation.map((hotel, index) => (
          <Marker
            key={index}
            position={[hotel.coordinates[1], hotel.coordinates[0]]}
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
