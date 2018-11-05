import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import InfoWindowDetail from './InfoWindowDetail.js';
import List from './List.js';

 
export class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      map: null,
      googleMarkers: []
    }
    this.googleMarkers = this.props.markers.map((cat) =>
    <Marker
      onClick={this.props.onMarkerClick}
      name={cat.name}
      breed={cat.breed}
      sex={cat.sex}
      position={cat.position}
      key={cat.id}
    />
  );
  console.log(this.googleMarkers);
  }

  mapReady = (props,map) => {
    this.setState = ({map});
  }

  listItemClicked = (e) => {
    console.log(e.currentTarget.id);
    console.log("list item clicked");

    let match = this.googleMarkers.find(function(googleMarker){
      return googleMarker.key === e.currentTarget.id;
    });

    console.log(match);

    // this.props.onMarkerClick(match.props,match,e);


  }

  // onMarkerClick(props,marker,e)

    // let match = googleMarkers.find(function(googleMarker){
    //   return googleMarker.key === "1";
    // })

  
    render() {
  
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
          onClick={this.props.onMapClicked}
          onRead={this.mapReady}>
    
            {this.googleMarkers}
    
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
              activeMarker={this.props.activeMarker}
              selectedCat={this.props.selectedCat}
              showingInfoWindow={this.props.showingInfoWindow}
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
