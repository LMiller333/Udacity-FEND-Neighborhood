import React, { Component } from 'react';
import Listing from '../components/Listing.js';

class List extends Component {

  //This component is for the left list parent container. See "Listing" component for detail about each list item.

  //This is a function that's called when a Listing is clicked. It takes in the event data,
  //loops through the list of marker props, and finds the selected cat marker props (based on key and event target id).
  listItemClicked = (e) => {    

    let scProps = this.props.markerProps.find(function(selectedCat){
        return selectedCat.key.toString() === e.currentTarget.id
      });

    let scMarker = this.props.markers[scProps.i];

    this.props.onMarkerClick(scProps, scMarker,e);

  }

  render() {

    //Mapping over displayMarkers to generate a listing for each
    const listings = this.props.displayMarkers.map((cat) =>
        <Listing
            name={cat.name}
            id={cat.id}
            key={cat.id}
            breed={cat.breed}
            dsex={cat.displaysex}
            listItemClicked={this.listItemClicked}
          />
    );

    return (

      //Displays the number of displayed markers out of the number of total markers in the SOT locations
      //and then shows all the listings!
      <div>
        <p>Showing {this.props.displayMarkers.length} of {this.props.locations.length}</p>
        <p>{this.props.noMarkerMsg}</p>
        {listings}
      </div>

    )
  }
}

export default List;