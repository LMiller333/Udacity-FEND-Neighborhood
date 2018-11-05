import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import InfoWindowDetail from './InfoWindowDetail.js';
import List from './List.js';
import Search from './Search.js';

 
export class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      map: null,
      markers: [],
      markerProps: [],
      selectedCat: null,
      activeMarker: null,
      showingInfoWindow: false,
      displayMarkers: this.props.locations,
      query: ""
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }



      // this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onMapClicked = this.onMapClicked.bind(this);
    // this.onListClick = this.onListClick.bind(this);

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

    let markers = locations.map((cat,i) => {

      let selectedCat = {
        i,
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
    // console.log(this.state.selectedCat);
  };

  

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
          this.setState({
          showingInfoWindow: false,
          activeMarker: null
          })
      }
    };

    updateQuery = (query) => {
      let queryLc = query.toLowerCase();
      this.setState({
        query: query,
        displayMarkers:this.props.locations
      });
      console.log(this.state.displayMarkers);
  
      //TODO: Add male/female filter so that "male" doesn't bring up all results
  
      if (query){
        console.log("query is " + query );
        let displayMarkers = this.props.locations.filter((cat) => {
          return cat.name.toLowerCase().includes(queryLc) || cat.breed.toLowerCase().includes(queryLc) || cat.breed.toLowerCase().includes(queryLc) 
        });
        console.log(displayMarkers);
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

      let scProps = this.state.selectedCat;
  
      return (
      <div className="mapcontainer">

        <Search
            query={this.state.query}
            updateQuery={this.updateQuery}/>
        
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
              displayMarkers={this.state.displayMarkers}
              activeMarker={this.state.activeMarker}
              selectedCat={this.state.selectedCat}
              showingInfoWindow={this.state.showingInfoWindow}
              listItemClicked={this.listItemClicked}
              markerProps={this.state.markerProps}
              onMarkerClick={this.onMarkerClick}
              markers={this.state.markers}
            />
        </div>
      
      </div>
      );
    }
  }
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
