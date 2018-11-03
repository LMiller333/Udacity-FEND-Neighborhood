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

      activeMarker: {},
      selectedCat: {},
      markers: CatLocations.cats,
      displayMarkers:CatLocations.cats,
      query: ""
    }
    this.updateQuery = this.updateQuery.bind(this);

  }

  updateQuery = (query) => {
    let queryLc = query.toLowerCase();
    this.setState({ query: query});

    //TODO: Add male/female filter so that "male" doesn't bring up all results

    if (query){
      console.log("processing query");
      let displayMarkers = this.state.markers.filter((cat) => {
        return cat.name.toLowerCase().includes(queryLc) || cat.breed.toLowerCase().includes(queryLc) || cat.breed.toLowerCase().includes(queryLc) 
      });
      console.log(displayMarkers);
    this.setState({displayMarkers: displayMarkers});
    }
    else {
      this.setState({displayMarkers:this.state.markers})
    }

    }
 
  

  render() {
    return (
      <div className="App">
          <Search
            query={this.state.query}
            updateQuery={this.updateQuery}/>
          <List
            displayMarkers={this.state.displayMarkers}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
          />
          <MapContainer
            displayMarkers={this.state.displayMarkers}
            onMapClicked={this.onMapClicked}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
            markers={this.state.markers}
          />

      </div>
    );
  }
}

export default App;
