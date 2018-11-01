import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

    // Obtained from https://github.com/fullstackreact/google-maps-react


    state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedCat: {},
    };

    onMarkerClick = (props, marker, e) =>
    this.setState({
        selectedCat: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
        })
    }
    };

   
  render() {

    const markers = this.props.markers.cats.map((cat) =>
        <Marker
            onClick={this.onMarkerClick}
            name={cat.name}
            breed={cat.breed}
            sex={cat.sex}
            position={cat.position}
            key={cat.name}
          />
    );

    const style = {
      width: '60%',
      height: 'calc(100%-80px)'
    };

    return (
    <div className="mapcontainer">
      <Map
      google={this.props.google}
      style={style}
      initialCenter={{
        lat: 42.2646788,
        lng: -83.7388272
      }}
      zoom={16}
      onClick={this.onMapClicked}>

        {markers}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedCat.name}</h1>
              <p>{this.state.selectedCat.sex},{this.state.selectedCat.breed}</p>
            </div>
        </InfoWindow>

      </Map>
    
    </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
