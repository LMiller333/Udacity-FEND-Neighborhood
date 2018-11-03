import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.js';
import List from './components/List.js';
import MapContainer from './components/MapContainer';
import CatLocations from './CatLocations.json';

class App extends Component {


  constructor(){
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedCat: {},
      markers: CatLocations.cats,
      displayMarkers:CatLocations.cats,
      query: ""
    }

    this.onMapClicked = this.onMapClicked.bind(this);
    this.updateQuery = this.updateQuery.bind(this);

  }

  updateQuery = (query) => {
    this.setState({ query: query});

    if (query){
      console.log("processing query");
      let displayMarkers = this.state.markers.filter((cat) => {
        return cat.name.toLowerCase().includes(query) || cat.breed.toLowerCase().includes(query) || (cat.sex.toLowerCase() === query)
      });
      console.log(displayMarkers);
    this.setState({displayMarkers: displayMarkers});
    }
    else {
      this.setState({displayMarkers:this.state.markers})
    }

    }
  
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
          <Search
            query={this.state.query}
            updateQuery={this.updateQuery}/>
          <List
            displayMarkers={this.state.displayMarkers}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
            markers={this.state.markers}
          />
          <MapContainer
            displayMarkers={this.state.displayMarkers}
            onMapClicked={this.onMapClicked}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
            markers={this.state.markers}
          />

      </div>
    );
  }
}

export default App;
