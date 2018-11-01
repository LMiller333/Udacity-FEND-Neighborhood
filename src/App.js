import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search.js';
import List from './components/List/List.js';
import MapContainer from './components/MapContainer/MapContainer.js';
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
          <div className="navbar">Navbar</div>
          <Search/>
          <List markers={this.state.markers}/>
          <MapContainer markers={this.state.markers}/>

      </div>
    );
  }
}

export default App;
