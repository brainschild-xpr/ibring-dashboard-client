import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import CarTop from './car_top.png'

class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '66.6%',
            height: '95%',
        };
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: -0.3779683, lng: 35.944295 }}
            >
                <Marker
                    position={{ lat: -0.3779683, lng: 35.944295 }}
                    icon={{
                        url: 'https://firebasestorage.googleapis.com/v0/b/shopiwa-main.appspot.com/o/driverPhotos%2FLets%20Ibring?alt=media&token=2dc58a89-bf3e-4768-8e67-a77d5e06d610',
                        // CarTop,
                        scaledSize: new this.props.google.maps.Size(35, 35)
                    }}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCgm46BU_rGJ76dAoOR-w4CJIiOngf5lrA'
})(MapContainer);
