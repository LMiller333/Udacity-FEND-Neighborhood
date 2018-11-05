import React, { Component } from 'react';
import Listing from '../components/Listing.js';

class List extends Component {


  render() {
    const listings = this.props.displayMarkers.map((cat) =>
        <Listing
            name={cat.name}
            id={cat.id}
            key={cat.id}
            breed={cat.breed}
            sex={cat.sex}
            listItemClicked={this.props.listItemClicked}
          />
    );

    return (
      <div>
        {listings}
      </div>

    )
  }
}

export default List;