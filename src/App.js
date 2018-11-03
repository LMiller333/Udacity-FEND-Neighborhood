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
      markers: CatLocations,
      query: ""
    }

    this.onMapClicked = this.onMapClicked.bind(this);
    this.updateQuery = this.updateQuery.bind(this);

  }

  updateQuery = (query) => {
    this.setState({ query: query});

    if (query){
      let dMarkers = this.state.markers.cats.filter((cat) => {
        return cat.name.toLowerCase().includes(query) || cat.breed.toLowerCase().includes(query) || cat.sex.toLowerCase().match(query)
      });
      console.log(dMarkers);
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
            markers={this.state.markers}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
            markets={this.state.markers}
          />
          <MapContainer
            markers={this.state.markers}
            onMapClicked={this.onMapClicked}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
            markets={this.state.markers}
          />

      </div>
    );
  }
}

export default App;
