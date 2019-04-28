import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import style from './google-maps-style.json';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapStyles = styled.div`
  height: 40vh;
  width: 100%;
  margin-top: 2em;
  border: 1px solid ${props => props.theme.fill6};
  box-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
`;

function Map({ locale }) {
  return (
    <MapStyles>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
          language: locale
        }}
        options={() => ({
          // mapTypeId: 'terrain',
          styles: style,
          disableDefaultUI: true
        })}
        defaultCenter={{ lat: 37.7022, lng: -121.9358 }}
        defaultZoom={10}
      />
    </MapStyles>
  );
}

export default Map;
