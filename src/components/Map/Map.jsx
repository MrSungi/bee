import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'




const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Aplankykite mūsų Bityną.</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_BEE_MAP_API_KEY }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <Marker
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
);

const Marker = () =>{
    return <>
        <div className='pin'></div>
        <div className='pulse'></div>
        </>
};

export default Map