import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import InfoWindowDetail from './InfoWindowDetail.js';

 
export class MapContainer extends Component {


  constructor() {
    super();
    this.state = {
        map: null,
        markers: null
    }
    // this.runAjaxRequest = this.runAjaxRequest.bind(this);

  }

  //update to handle result if no cat meets query

  // runAjaxRequest=()=>{
    // console.log("running ajax");
    // const pfApiKey = process.env.REACT_APP_PETFINDER_API_KEY;
    // let params = {
    //     key: pfApiKey,
    //     animal: 'cat',
    //     sex:this.props.selectedCat.sex,
    //     breed: this.props.selectedCat.breed,
    //     output: 'basic',
    //     format: 'json',
    // }
    // const url = `http://api.petfinder.com/pet.getRandom?key=${params.key}&animal=${params.animal}&sex=${params.sex}&breed=${params.breed}&output=${params.output}&format=${params.format}`
    // $.ajax({
    //     url: url,
    //     jsonp: "callback",
    //     dataType: 'jsonp',
    //     cache: false,
    //     success: function (data){
    //         let matchingCat = data.petfinder.pet;
    //         console.log(data);
    //         console.log(matchingCat.name,matchingCat.sex, matchingCat.breeds.breed, matchingCat.age, matchingCat.contact.city, matchingCat.contact.state);
    //         this.setState({matchingCat : matchingCat});
    // }
    //     .bind(this),
    //     error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //     }.bind(this),
    // });
  // }
  
  
    render() {


      const markers = this.props.markers.map((cat) =>
          <Marker
              onClick={this.props.onMarkerClick}
              name={cat.name}
              breed={cat.breed}
              sex={cat.sex}
              position={cat.position}
              key={cat.name}
            />
      );
  
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
        onClick={this.props.onMapClicked}>
  
          {markers}
  
          <InfoWindow
            marker={this.props.activeMarker}
            visible={this.props.showingInfoWindow}
            showingInfoWindow={this.props.showingInfoWindow}
            activeMarker={this.props.activeMarker}
            selectedCat={this.props.selectedCat}
            >
              <InfoWindowDetail
              selectedCat={this.props.selectedCat}
              matchingCat={this.props.matchingCat}>
              </InfoWindowDetail>

          </InfoWindow>
  
        </Map>
      
      </div>
      );
    }
  }
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
