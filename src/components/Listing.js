import React, { Component } from 'react';

 class Listing extends Component {


  render() {
    return (
      <li className="listing" id={this.props.id} onClick={this.props.listItemClicked}><h3>{this.props.name}</h3>
      <p>{this.props.sex} {this.props.breed}</p></li>
    )
  }
}

export default Listing;