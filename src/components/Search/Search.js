import React, { Component } from 'react';
import './Search.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost)

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="search-input">
        <label>
          <FontAwesomeIcon icon="ghost" className="search-icon" />
          <input type="text" placeholder="Search for a place"/>
          {/* TODO: Add value this.props.query and onclick event */}
        </label>
        </div>
      </div>
    )
  }
}

export default Search;

