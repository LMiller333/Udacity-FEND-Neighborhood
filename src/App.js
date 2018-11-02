import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List.js';
import MapContainer from './components/MapContainer';
import CatLocations from './CatLocations.json';

class App extends Component {
  // Marker & InfoWindow code obtained from https://github.com/fullstackreact/google-maps-react
 
  constructor(){
    super();
    this.state = {
      markers: CatLocations,
      showingInfoWindow: false,
      activeMarker: {},
      selectedCat: {},
    } 
    this.onMapClicked = this.onMapClicked.bind(this); 
  }
 
    
 

    // onMarkerClick = (props, marker, e) =>
    // this.setState({
    //     selectedCat: props,
    //     activeMarker: marker,
    //     showingInfoWindow: true
    // });

    onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
        })
    }
    }; 
  
  
  render() {
    return (
      <div className="App">
          <Search/>
          <List
            markers={this.state.markers} 
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
          />
          <MapContainer
            markers={this.state.markers} 
            onMapClicked={this.onMapClicked}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
          />

      </div>
    );
  }
}

export default App;
