import React, { Component } from 'react';
// import Marker from '../Marker/Marker.js';
import {Map, Marker} from 'google-maps-react';
import { faMapMarkedAlt } from '../../../node_modules/@fortawesome/free-solid-svg-icons';

class Map extends Component {
  render() {
    return (

      <div className="map" ref="map">
        {this.props.markers.map (marker=>{
          <Marker
            name={marker.name}
            position={marker.position}
          />
        }
        )}

      </div>
    )
  }
}

export default Map;
