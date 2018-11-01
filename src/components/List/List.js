import React, { Component } from 'react';
import Listing from '../Listing/Listing.js';

class List extends Component {
  render() {
    const listings = this.props.markers.cats.map((cat) =>
        <Listing
            name={cat.name}
            key={cat.name}
          />
    );

    return (
      <div className="list">
        This is the list component.
        {listings}
      </div>
    )
  }
}

export default List;