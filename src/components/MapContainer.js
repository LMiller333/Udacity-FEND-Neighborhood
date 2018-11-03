import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import InfoWindow from '../components/InfoWindow.js';
import ReactDOMServer from 'react-dom/server';

 
export class MapContainer extends Component {

  constructor() {
    super();
    this.state = {
        map: null,
        markers: null
    }
  }

  //TODO: Would like to add function where other infoWindows are hidden on new clicks

  mapReady = (props, map) => {
      // Save the map reference in state and prepare the location markers
      this.setState({
          map,
      });
      console.log("at mapready")
      this.generateMarkers();
  }


  // clickInfo(marker, infoWindow) {
  // }


  //This loops through all of the cat markers from CatLocations.json, which is passed 
  //as the markers prop. It creates a marker and infoWindow for each cat.

generateMarkers(){
    const markers = this.props.markers.map((cat) =>{

      let marker = new window.google.maps.Marker({
        position:cat.position,
        map:this.state.map
      });

        let infoContent = ReactDOMServer.renderToString(<InfoWindow name={cat.name} sex={cat.sex} breed={cat.breed}/>);
        
        let infoWindow = new window.google.maps.InfoWindow({
          map: this.map,
          anchor: this.marker,
          content: infoContent,
          maxWidth:300
        })

      let listing =document.getElementById((cat.id));

      //Event listener is added to listing which triggers the infoWindow display and bounce animation.

      if (listing) {
        listing.addEventListener('click', () => {
          infoWindow.open(this.state.map, marker);
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
          setTimeout(() => {
            marker.setAnimation(null);
          }, 1500);
        });
        
      };

      //Event listener is added to marker which triggers the infoWindow display and bounce animation.

      marker.addListener('click', () => {
        console.log('marker is clicked');
        infoWindow.open(this.state.map, marker);
        // marker.setAnimation(window.google.maps.Animate.BOUNCE);
        setTimeout(() => {
          marker.setAnimation(null);
        }, 1500);
      });

      return marker;

      });

      //markers state of this component is updated with new markers array

      this.setState({
        markers
      });
    }

    

   
  render() {

    const style = {
      width: '60%',
      height: 'calc(100%-80px)'
    };

    return (
    <div className="mapcontainer">
      <Map
      google={this.props.google}
      style={style}
      initialCenter={{
        lat: 42.2646788,
        lng: -83.7388272
      }}
      zoom={16}
      onClick={this.props.onMapClicked}
      onReady = {this.mapReady}>
      </Map>
    </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
