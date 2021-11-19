import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapContainer = () => {
  const mapStyles = {        
    height: "100vh",
    width: "100%" 
  };
  const defaultCenter = {
    lat: 58.5975, lng: 24.07494
  }
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBS2qokL9LGG8_eOXZOlbL3yc-rEx-WmPc'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default MapContainer