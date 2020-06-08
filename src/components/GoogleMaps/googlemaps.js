import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import CarTop from './car_top.png'

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
                        url: CarTop,
                        scaledSize: new this.props.google.maps.Size(20, 40)
                    }}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCgm46BU_rGJ76dAoOR-w4CJIiOngf5lrA'
})(MapContainer);
