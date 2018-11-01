import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List.js';
import MapContainer from './components/MapContainer';
import CatLocations from './CatLocations.json';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      markers: CatLocations
    }
  }

  
  
  render() {
    return (
      <div className="App">
          <Search/>
          <List markers={this.state.markers}/>
          <MapContainer markers={this.state.markers}/>

      </div>
    );
  }
}

export default App;
