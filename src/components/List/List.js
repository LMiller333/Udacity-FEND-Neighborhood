import React, { Component } from 'react';
import Listing from '../Listing/Listing.js';

class List extends Component {
  render() {
    return (
      <div className="list">
        This is the list component.
        <Listing/>
      </div>
    )
  }
}

export default List;