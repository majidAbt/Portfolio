

import GoogleMap from 'google-map-react';

export default function Map() {


  const defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };



    return (
       <GoogleMap
        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
        center={defaultProps.center}
        defaultCenter={defaultProps.center}
        zoom={defaultProps.zoom}>
        
        <span  lat={35.72115} lng={51.33460}   src="https://www.nicepng.com/png/detail/196-1963758_how-to-set-use-map-marker-svg-vector.png"   >s</span>
      </GoogleMap>
    )}
