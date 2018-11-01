import React, { Component } from 'react';
import Listing from '../components/Listing.js';

class List extends Component {
  render() {
    const listings = this.props.markers.cats.map((cat) =>
        <Listing
            name={cat.name}
            key={cat.name}
            breed={cat.breed}
            sex={cat.sex}
          />
    );

    return (
      <div className="list">
        Cats
        {listings}
      </div>
    )
  }
}

export default List;