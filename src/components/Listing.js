import React, { Component } from 'react';

 class Listing extends Component {


  render() {
    return (
      <li className="listing" id={this.props.id} onClick={this.props.listItemClicked}><h2>{this.props.name}</h2>
      <p>{this.props.sex} {this.props.breed}</p></li>
    )
  }
}

export default Listing;