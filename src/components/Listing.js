import React, { Component } from 'react';

 class Listing extends Component {
  render() {
    return (
      <li className="listing" onClick={this.props.onListClick} id={this.props.name}><h2>{this.props.name}</h2>
      <p>{this.props.sex},{this.props.breed}</p></li>
    )
  }
}

export default Listing;