import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const clientId = process.env.REACT_APP_CLIENT_ID;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  // height: 100vh;
  height: calc(100vh - 150px);
`;

const MyLocationButton = styled.button`
  z-index: 10;
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Map: React.FC = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
    document.head.appendChild(script);

    script.onload = () => {
      const naver = (window as any).naver;

      const mapOptions = {
        center: new naver.maps.LatLng(37.5665, 126.978),
        zoom: 13,
      };

      const map = new naver.maps.Map(mapRef.current, mapOptions);

      const handleMyLocationClick = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const location = new naver.maps.LatLng(lat, lng);

          new naver.maps.Marker({
            map: map,
            position: location,
          });

          map.setCenter(location);
        });
      };

      document
        .getElementById('my-location-button')
        ?.addEventListener('click', handleMyLocationClick);
    };
  }, []);

  return (
    <MapContainer ref={mapRef} id="map">
      <MyLocationButton id="my-location-button">
        <MyLocationIcon fontSize="large" />
      </MyLocationButton>
    </MapContainer>
  );
};

export default Map;
