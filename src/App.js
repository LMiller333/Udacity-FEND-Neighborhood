import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search.js';
import List from './components/List/List.js';
import Map from './components/Map/Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="navbar">Navbar</div>
          <Search/>
          <List/>
          <Map/>

      </div>
    );
  }
}

export default App;
