import React from "react";
import Grid from "@material-ui/core/Grid";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapPage = () => {
  const position = [45.7748510291451, 19.11884246550803];

  return (
    <div className="map-page" id="map">
      <Grid item xs={12} sm={12} className="title">
        <h1>Location</h1>
      </Grid>

      <MapContainer center={position} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Apartments Sombor 19</strong>
            <br /> <em>Venac Živojina Mišića 19</em>
            <br /> <strong>+381 63 540 433</strong>
          </Popup>
        </Marker>
      </MapContainer>
      <br />
    </div>
  );
};

export default MapPage;
