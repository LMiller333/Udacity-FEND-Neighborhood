import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

   
  render() {


    const markers = this.props.markers.cats.map((cat) =>
        <Marker
            name={cat.name}
            position={cat.position}
            key={cat.name}
          />
    );

    

    return (
    <div className="mapcontainer">
      <Map
      google={this.props.google}
      initialCenter={{
        lat: 42.2646788,
        lng: -83.7388272
      }}
      zoom={16}
      onClick={this.onMapClicked}>
      {markers}
      </Map>
    
    </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDOhVT-qBp1Nunga4g9z2w8i8nhc4ZQd24'
})(MapContainer)
