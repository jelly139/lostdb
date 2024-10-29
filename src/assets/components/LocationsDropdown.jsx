import React, { useState } from "react";

function LocationsDropdown() {
    const [selectedLocation, setSelectedLocation] = useState(null);
  
    const handleSelect = (location) => {
          setSelectedLocation(location);
    };
    return (
      <div className="dropdown">
        <button className="dropdown-button">
          {selectedLocation ? selectedLocation.name : "Select Location"}
        </button>
        <div className="dropdown-content">
          {locations.map((location) => (
            <div
            key={location.id}
            className="dropdown-item"
            onClick={() => handleSelect(location)}
            >
              <img src={location.image} alt={location.name} className="dropdown-image" />
              <span>{location.name}</span>
              </div>
          ))}
        </div>
      </div>
    )
  }
  
  const locations = [
    { id: 1, name: "The Arrow", image: "C:\Users\bams\dm\projects\lostwiki\lostwiki\src\assets\location-pictures\thearrow.webp" },
    { id: 2, name: "The Flame", image: "" },
    { id: 3, name: "The Hydra", image: "" },
    { id: 4, name: "The Lamppost", image: "" },
    { id: 5, name: "The Looking Glass", image: "" },
    { id: 6, name: "The Orchid", image: "" },
    { id: 7, name: "The Pearl", image: "" },
    { id: 8, name: "The Staff", image: "" },
    { id: 9, name: "The Tempest", image: "" },
  ]
     
  export default LocationsDropdown;