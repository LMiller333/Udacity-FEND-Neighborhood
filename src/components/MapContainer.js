import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {



   
  render() {

    const markers = this.props.markers.cats.map((cat) =>
        <Marker
            onClick={this.props.onMarkerClick}
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
      onClick={this.props.onMapClicked}>

        {markers}

        <InfoWindow
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}
          showingInfoWindow={this.props.showingInfoWindow}
          activeMarker={this.props.activeMarker}
          selectedCat={this.props.selectedCat}
          >
            <div>
              <h2>Test</h2>
              {/* <h1>{this.props.selectedCat.name}</h1>
              <p>{this.props.selectedCat.sex},{this.state.selectedCat.breed}</p> */}
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
