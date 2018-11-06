import React, { Component } from 'react';

 class Listing extends Component {

  //No comments necessary, I hope

  render() {
    return (
      <li className="listing">
        <button onClick={this.props.listItemClicked} id={this.props.id} tabIndex={this.props.id}>
          <h2>{this.props.name}</h2>
          <p>{this.props.dsex} {this.props.breed}</p>
        </button>
      </li>
    )
  }
}

export default Listing;