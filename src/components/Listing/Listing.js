import React, { Component } from 'react';

 class Listing extends Component {
  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
}

export default Listing;