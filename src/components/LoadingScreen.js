import React, { Component } from 'react';
import Search from './Search.js';

//TODO: Add animation on marker click
//TODO: Add NoMapDisplay error handling

 
export class LoadingScreen extends Component {



  state = {
    showErrorScreen: false,
    delay: null
  }

  //The timeout was Doug Brown's suggestion! (see walkthrough)

  componentDidMount = () => {
    let delay = window.setTimeout(this.showErrorScreen, 1500);
    this.setState({delay});
  }

  showScreen = () => {
    this.setState({showErrorScreen: true});
  }
  
  render() {

    let errorMsg;

    if (this.state.showErrorScreen){
      errorMsg = <div className="errorMsg">Hmm, seems like Google is a bit slow right now, so the page is having trouble loading the map. Check your connection and try again.</div>
    }
    else{
      errorMsg = <div className="errorMsg">Let's see if this thing will load... </div>
    }

    return (
    <div className="mapcontainer">
      <div className="page-title">
        <h1>Neighborhood Cat Map</h1>
      </div>
      <Search/>
      {errorMsg}
    </div>

    );
  }

}
  
 
export default LoadingScreen;
