import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const location = {
    lat: 23.752201,
    lng: 90.392658
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

function MapContainer() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyA9CAWqCMOcuAEjdix5zaO_EYOErnx4vWc"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={15}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker
                    onLoad={onLoad}
                    position={location}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MapContainer)