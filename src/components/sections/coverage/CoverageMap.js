"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default markers in Next.js/Leaflet
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const cities = [
  { name: "Bogotá", coords: [4.7110, -74.0721] },
  { name: "Medellín", coords: [6.2442, -75.5812] },
  { name: "Cali", coords: [3.4516, -76.5320] },
  { name: "Manizales", coords: [5.0689, -75.5174] },
  { name: "Pereira", coords: [4.8133, -75.6961] },
  { name: "Armenia", coords: [4.5339, -75.6811] },
  { name: "Santa Marta", coords: [11.2408, -74.1990] },
  { name: "Cartagena", coords: [10.3910, -75.4794] },
  { name: "Barranquilla", coords: [10.9685, -74.7813] },
  { name: "Santander (Bucaramanga)", coords: [7.1193, -73.1227] },
  { name: "Villavicencio", coords: [4.1420, -73.6266] },
  { name: "Ibague", coords: [4.4389, -75.2322] },
];

const CoverageMap = () => {
    // Center map roughly on Colombia
  const center = [4.5709, -74.2973];
  
  return (
    <div style={{ height: "500px", width: "100%", borderRadius: "15px", overflow: "hidden", border: "2px solid var(--nvoBlue)" }}>
      <MapContainer 
        center={center} 
        zoom={5} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city, idx) => (
          <Marker key={idx} position={city.coords} icon={icon}>
            <Popup>
              <div style={{ textAlign: "center" }}>
                  <h6 style={{ color: "var(--nvoBlue)", marginBottom: "5px", fontWeight: "700" }}>{city.name}</h6>
                  <span style={{ color: "var(--nvoPink)", fontSize: "12px", fontWeight: "600" }}>Cobertura NVO</span>
              </div>
            </Popup>
          </Marker>
        ))} 
      </MapContainer>
    </div>
  );
};

export default CoverageMap;
