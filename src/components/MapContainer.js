import React, {
    Component
} from 'react';
import {
    Map,
    Marker,
    InfoWindow,
    GoogleApiWrapper
} from 'google-maps-react';

export class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            map: null,
            markers: null
        }
    }
    mapReady = (props, map) => {
        // Save the map reference in state and prepare the location markers
        this.setState({
            map
        });
        console.log("at mapReady")
        this.addMarkers();
    }

    clickInfo(marker, infoWindow) {

    }

    addMarkers() {
        const markers = this.props.markers.cats.map((cat) => {

            let marker = new window.google.maps.Marker({
                position: cat.position,
                map: this.state.map
            })



            let infoWindow = new window.google.maps.InfoWindow({
                content: `<div class="location-data">
                  <h5>${cat.name}</h5>  
                </div>`,
                maxWidth: 300
            });


            let listItem = document.getElementById((cat.name).toLowerCase());

            if (listItem) {
                listItem.addEventListener('click', e => {
                  infoWindow.open(this.state.map, marker);
                marker.setAnimation(window.google.maps.Animation.BOUNCE);
                setTimeout(() => {
                    marker.setAnimation(null);
                }, 1500);
                });
            }

            marker.addListener('click', e => {
                infoWindow.open(this.state.map, marker);
                marker.setAnimation(window.google.maps.Animation.BOUNCE);
                setTimeout(() => {
                    marker.setAnimation(null);
                }, 1500);
            });



            return marker
        });

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
      onReady = {this.mapReady}
      initialCenter={{
        lat: 42.2646788,
        lng: -83.7388272
      }}
      zoom={16}
      onClick={this.props.onMapClicked}>
  
      </Map>
    
    </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
