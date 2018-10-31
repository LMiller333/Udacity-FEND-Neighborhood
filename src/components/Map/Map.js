import React, { Component } from 'react';
import MapMarker from '../MapMarker/MapMarker.js';

class Map extends Component {
  render() {
    return (
      <div className="map">
        This is the map component.
        <MapMarker/>
      </div>
    )
  }
}

export default Map;