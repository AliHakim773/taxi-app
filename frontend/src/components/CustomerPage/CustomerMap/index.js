import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css";

function CustomerMap({ currentBtn }) {
  const [userLocation, setUserLocation] = useState(null);

  function flyToUserLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }

  function FlyToUserLocation({ setUserLocation }) {
    const map = useMapEvents({
      click: () => {
        if (setUserLocation) {
          flyToUserLocation();
          console.log(userLocation);
          map.flyTo(userLocation, 15);
        }
      },
    });

    return null;
  }

  useEffect(() => {
    if (currentBtn) {
      // If currentBtn is true, fly to the user's location
      flyToUserLocation();
    }
  }, [currentBtn]); // Run this effect whenever currentBtn changes

  return (
    <div className="map-container">
      <MapContainer
        className="markercluster-map"
        center={userLocation || [51.0, 19.0]}
        zoom={15}
        maxZoom={18}
        style={{ height: 536 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {userLocation && (
          <Marker position={userLocation}>
            <Popup>
              Your location. <br /> Latitude: {userLocation[0]}, Longitude:{" "}
              {userLocation[1]}
            </Popup>
          </Marker>
        )}

        {userLocation && (
          <FlyToUserLocation setUserLocation={setUserLocation} />
        )}
      </MapContainer>
    </div>
  );
}

export default CustomerMap;
