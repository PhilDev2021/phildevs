import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

function GetCoordinates() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e: any) => {
      navigate(`form?&lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

const Map = () => {
  const position = [13.41, 122.56];

  return (
    <MapContainer
      center={position}
      zoom={20}
      scrollWheelZoom={true}
      className="mapContainer"
    >
      <TileLayer
        className="map"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>Ligoy ka hahaha</Popup>
      </Marker>
      <Circle
        center={position}
        pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
        radius={100}
        stroke={true}
      />

      <GetCoordinates />
    </MapContainer>
  );
};
export default Map;
