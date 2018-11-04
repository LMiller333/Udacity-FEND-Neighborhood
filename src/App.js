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
      displayMarkers: CatLocations.cats,
      query: ""
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onListClick = this.onListClick.bind(this);

  }

  onListClick=(event)=>{
    console.log(this.state.markers);
    console.log(event.currentTarget.id);

    // tmp[index].show = true;
    // this.setState({markers:tmp});
  }
    
  onMarkerClick(props,marker,e){
    console.log(props);
    console.log(marker);
    this.setState({
      selectedCat: props,
      activeMarker: marker,
      showingInfoWindow: true
  });
  }

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
            showingInfoWindow={this.state.showingInfoWindow}
          />
          <MapContainer
            displayMarkers={this.state.displayMarkers}
            onMapClicked={this.onMapClicked}
            onMarkerClick={this.onMarkerClick}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
            showingInfoWindow={this.state.showingInfoWindow}
            markers={this.state.markers}
          />

      </div>
    );
  }
}

export default App;
