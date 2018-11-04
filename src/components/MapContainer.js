import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import InfoWindowDetail from './InfoWindowDetail.js';

 
export class MapContainer extends Component {


  constructor() {
    super();
    this.state = {
        map: null,
        markers: null
    }
  }
  
  
    render() {


      const markers = this.props.markers.map((cat) =>
          <Marker
              onClick={this.props.onMarkerClick}
              name={cat.name}
              breed={cat.breed}
              sex={cat.sex}
              position={cat.position}
              key={cat.name}
            />
      );
  
      // const style = {
      //   width: '90%',
      //   height: 'auto'
      // };
  
      return (
      <div className="mapcontainer">
        <Map
        google={this.props.google}
        // style={style}
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
            style={{}}
            >
              <InfoWindowDetail
              selectedCat={this.props.selectedCat}
              matchingCat={this.props.matchingCat}
              // matchingCatName={this.props.matchingCatName}
              // matchingCatBreed={this.props.matchingCatBreed}
              // matchingCatSex={this.props.matchingCatSex}
              // matchingCatId ={this.props.matchingCatId}
              // matchingCatCity ={this.props.matchingCatCity}
              // matchingCatState ={this.props.matchingCatState}
              >
              
              </InfoWindowDetail>

          </InfoWindow>
  
        </Map>
      
      </div>
      );
    }
  }
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
