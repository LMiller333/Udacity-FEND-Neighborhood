import React, { Component } from 'react';
import Listing from '../components/Listing.js';

class List extends Component {

  listItemClicked = (e) => {    

    let scProps = this.props.markerProps.find(function(selectedCat){
        return selectedCat.key.toString() === e.currentTarget.id
      });

    let scMarker = this.props.markers[scProps.i];

    this.props.onMarkerClick(scProps, scMarker,e);

  }


  render() {
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
      <div>
        <p>Showing {this.props.displayMarkers.length} of {this.props.locations.length}</p>
        <p>{this.props.noMarkerMsg}</p>
        {listings}
      </div>

    )
  }
}

export default List;