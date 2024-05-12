import React, { useEffect, useState } from 'react';
import './hotels.css'; 

const MapPage: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    // Load the Google Maps JavaScript API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAtcTm3CJHafsnCcowGCJkSTNZ-v-SUcl4&libraries=places`;
    script.async = true;
    script.onload = initializeMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 36.897173, lng: 30.648305 },
      zoom: 12,
    };
    const map = new window.google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
    setMap(map);
    const placesService = new window.google.maps.places.PlacesService(map);
    const request: google.maps.places.PlaceSearchRequest = {
        location: mapOptions.center,
        radius: 5000, // in meters
        type: 'lodging', // search for lodging places (hotels)
      };

      placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // Add markers for each hotel
          results.forEach((place) => {
            new window.google.maps.Marker({
              position: place.geometry?.location!,
              map: map,
              title: place.name,
            });
          });
        }
      });

  };

  return (
    <div className="map-page">
      <h1>Nearby Hotels</h1>
      <div id="map" className="rounded-map"></div>
    </div>
  );
};

export default MapPage;
