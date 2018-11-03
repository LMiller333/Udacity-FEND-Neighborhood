import React, { Component } from 'react';
import $ from 'jquery'; 

 class Listing extends Component {

  render() {
    return (
      <li className="listing" id={this.props.id}><h2>{this.props.name}</h2>
      <p>{this.props.sex} {this.props.breed}</p></li>
    )
  }
}

export default Listing;