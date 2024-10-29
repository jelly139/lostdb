import React from 'react'
import LocationsDropdown from '../assets/components/LocationsDropdown'
import './locations.css'


function LocationsPage() {
  return (
    <div>
      <h1>Select a Location</h1>
      <LocationsDropdown />
    </div>
  );
}

export default LocationsPage;