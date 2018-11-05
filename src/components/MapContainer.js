import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import InfoWindowDetail from './InfoWindowDetail.js';
import List from './List.js';

 
export class MapContainer extends Component {

  state = {
    map: null,
    markers: [],
    markerProps: [],
    selectedCat: null,
    activeMarker: null,
    showingInfoWindow: false,
  };

  mapReady = (props,map) => {
    console.log("map ready");
    this.setState({map});
    this.updateMarkers(this.props.locations);
  };



  updateMarkers = (locations) => {

    //doug brown

    if (!locations) {
      return;
    }

    this.state.markers.forEach((marker) => marker.setMap(null));

    let markerProps = [];

    console.log(locations);

    let markers = locations.map((cat) => {

      let selectedCat = {
        name: cat.name,
        breed: cat.breed,
        sex: cat.sex,
        key: cat.id
      };

      markerProps.push(selectedCat);

      let marker = new this.props.google.maps.Marker({
        position: cat.position,
        map: this.state.map
      });

      marker.addListener('click', () => {
        this.onMarkerClick(selectedCat,marker,null);
      });

      return marker;
    });

    this.setState({markers, markerProps});

  };

  onMarkerClick(props,marker,e){
    this.setState({
      selectedCat: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(this.state.selectedCat);
  };

  // listItemClicked = (e) => {
  //   console.log(e.currentTarget.id);
  //   console.log("list item clicked");

  //   let match = this.googleMarkers.find(function(googleMarker){
  //     return googleMarker.key === e.currentTarget.id;
  //   });

  //   console.log(match);

    // this.props.onMarkerClick(match.props,match,e);

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
          this.setState({
          showingInfoWindow: false,
          activeMarker: null
          })
      }
    };

  
  
    render() {

      let scProps = this.state.selectedCat;
      console.log(scProps);
  
      return (
      <div className="mapcontainer">
        
        <div className="googleMap">
          <Map
          google={this.props.google}
          // style={style}
          initialCenter={{
            lat: 42.2646788,
            lng: -83.7388272
          }}
          zoom={16}
          onClick={this.onMapClicked}
          onReady={this.mapReady}>
    
            {/* {this.googleMarkers} */}
    
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              showingInfoWindow={this.state.showingInfoWindow}
              activeMarker={this.state.activeMarker}
              >
                <InfoWindowDetail
                sc={scProps}
                matchingCat={this.state.matchingCat}
                matchingCatText={this.props.matchingCatText}
                matchingCatName={this.props.matchingCatName}
                matchingCatBreed={this.props.matchingCatBreed}
                matchingCatSex={this.props.matchingCatSex}
                matchingCatId ={this.props.matchingCatId}
                matchingCatCity ={this.props.matchingCatCity}
                matchingCatState ={this.props.matchingCatState}
                >
                
                </InfoWindowDetail>

            </InfoWindow>
    
          </Map>
        </div>

        <div className="list">
          <List
              displayMarkers={this.props.displayMarkers}
              activeMarker={this.state.activeMarker}
              selectedCat={this.state.selectedCat}
              showingInfoWindow={this.state.showingInfoWindow}
              listItemClicked={this.listItemClicked}
            />
        </div>
      
      </div>
      );
    }
  }
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
