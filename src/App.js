import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List.js';
import MapContainer from './components/MapContainer';
import CatLocations from './CatLocations.json';

class App extends Component {
  // Marker & InfoWindow code adapted from https://github.com/fullstackreact/google-maps-react


  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedCat: {},
    markers: CatLocations
    };

    // onListClick(event) {
    //   let cat = event.currentTarget.id;
    //   console.log(cat);
    //   //Here is where I am stuck. I know that the marker.name and props.name from the below
    //   //function match the 'cat' name value here, but I'm not sure how to get the marker and props
    //   //with just 'cat' name.

    //   this.setState({
    //     // selectedCat: props,
    //     // activeMarker: marker,
    //     // showingInfoWindow: true


    //   });
    // }

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
  
  constructor(){
    super();

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onListClick = this.onListClick.bind(this);

  }

  
  
  render() {
    return (
      <div className="App">
          <Search/>
          <List
            markers={this.state.markers}
            onListClick={this.onListClick}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
          />
          <MapContainer
            markers={this.state.markers}
            onMarkerClick={this.onMarkerClick}
            onMapClicked={this.onMapClicked}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
            // onMarkerMounted={this.onMarkerMounted}
          />

      </div>
    );
  }
}

export default App;
