import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost)

class Search extends Component {

  // handleSearch(event) {
  //   this.props.updateQuery(event.target.value)
  // }

  render() {
    return (
      <div className="navbar">
        <button id="toggle">Toggle View</button>
        <div className="search">
          <div className="search-input">
          <label>
            <FontAwesomeIcon icon="ghost" className="search-icon" />
            <input type="text" placeholder="Search for a cat by name, breed, or sex" value={this.props.query} onChange={ (event) => this.props.updateQuery(event.target.value)}/>
          </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;

