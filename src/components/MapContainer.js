import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import InfoWindowDetail from './InfoWindowDetail.js';
import List from './List.js';
import Search from './Search.js';
import LoadingScreen from './LoadingScreen';
 
export class MapContainer extends Component {

  //This component is where all the magic happens.

  constructor(props){
    super(props);
    this.state = {
      map: null,
      markers: [], //Represents the actual Google marker objects
      markerProps: [], //Represents the properties of all the markers, obtained from SOT locations
      selectedCat: null, //Represents props for the selected marker (cat)
      activeMarker: null, //Represents the marker object for the active marker (cat)
      showingInfoWindow: false, //State of InfoWindow
      displayMarkers: this.props.locations, //This is a filtered array of markers/items that should be displayed based on the query
      query: "", //Self explanatory
      noMarkerMsg: [] //Message displayed if no markers being displayed
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  //Shout out to Doug Brown (Udacity Project Coach) for the P7 walkthrough, which helped me refactor my Markers
  //so that they could be more accessible by other DOM elements (e.g., list items)
  //Here's the link: https://www.youtube.com/watch?v=NVAVLCJwAAo&feature=youtu.be

  //This sets the map state and runs the updateMarkers function on map ready.

  mapReady = (props,map) => {
    this.setState({map});
    this.updateMarkers(this.props.locations);
  };

  //This updates the markers based on the locations param. On initial load and/or if no query
  //is entered, then the full location set is passed to updateMarkers.
  //If there is a query (see below), then only the displayMarkers are passed to updateMarkers.

  updateMarkers = (locations) => {

    if (!locations) {
      return;
    }

    this.state.markers.forEach((marker) => marker.setMap(null));

    let markerProps = [];

    let markers = locations.map((cat,i) => {

      let selectedCat = {
        i,
        name: cat.name,
        breed: cat.breed,
        key: cat.id,
        img: cat.img,
        alt: cat.imgalt,
        dsex: cat.displaysex
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

  //This updates the states when a marker is clicked. The list items also use this function.

  onMarkerClick(props,marker,e){
    this.setState({
      selectedCat: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
          setTimeout(() => {
            marker.setAnimation(null);
          }, 1000);
  };

  //This reverts states when the map is clicked. 

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
        })
    }
  };

  //This reverts states when InfoWindow is closed. 

  onInfoWindowClose = (props) =>{
    if (this.state.showingInfoWindow) {
      this.setState({
      showingInfoWindow: false,
      activeMarker: null
      })
    } 
  }

  //This updates the query state and displayMarkers list each type the text in the input field is changed. It also sets the noMarkerMsg
  //state if no markers are displayed.

  updateQuery = (query) => {
    let queryLc = query.toLowerCase();
    this.setState({
      query: query,
      displayMarkers:this.props.locations,
      noMarkerMsg: []
    });

    //TODO: Add male/female filter so that "male" doesn't bring up all results

    if (query){
      let displayMarkers = this.props.locations.filter((cat) => {
        return cat.name.toLowerCase().includes(queryLc) || cat.breed.toLowerCase().includes(queryLc) || cat.breed.toLowerCase().includes(queryLc) 
      });

      if (displayMarkers.length === 0){
        console.log("no markers");
        let noMarkerMsg = `There are no cats that meet your search`;
        this.setState({noMarkerMsg: noMarkerMsg});
        }

        this.setState({displayMarkers: displayMarkers}, 
          () => {
            this.updateMarkers(this.state.displayMarkers);
        });
        }

    else {
      this.setState({displayMarkers: this.props.locations}, 
        () => {
          this.updateMarkers(this.props.locations);
      });
    }

  }
   
  
  render() {

    //These are the main components here (Search, Map, InfoWindow, and List)

    let scProps = this.state.selectedCat;

    return (
    <div className="mapcontainer">
      <div className="page-title">
        <h1>Neighborhood Cat Map</h1>
      </div>

      <Search
          query={this.state.query}
          updateQuery={this.updateQuery}/>
      
      <div className="googleMap">
        <Map
        role="application"
        aria-label="map"
        google={this.props.google}
        initialCenter={{
          lat: 42.263210,
          lng: -83.739470
        }}
        zoom={16}
        onClick={this.onMapClicked}
        onReady={this.mapReady}
        >
  
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            >
              <InfoWindowDetail
              sc={scProps}
              matchingCats={this.props.matchingCats}
              >
              
              </InfoWindowDetail>

          </InfoWindow>
  
        </Map>
      </div>

      <div className="list">
        <List
            displayMarkers={this.state.displayMarkers}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
            showingInfoWindow={this.state.showingInfoWindow}
            listItemClicked={this.listItemClicked}
            markerProps={this.state.markerProps}
            onMarkerClick={this.onMarkerClick}
            markers={this.state.markers}
            noMarkerMsg={this.state.noMarkerMsg}
            locations={this.props.locations}
          />
      </div>
    
    </div>
    );
  }

}

//This is where you can plug in your Google API Key!
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY, LoadingContainer: LoadingScreen
})(MapContainer)
