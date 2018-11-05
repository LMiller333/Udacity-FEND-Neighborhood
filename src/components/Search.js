import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class Search extends Component {

  // handleSearch(event) {
  //   this.props.updateQuery(event.target.value)
  // }

  render() {
    return (
      <div className="navbar">
        <div className="search">
          <div className="search-input">
            <label for="search-input-field">
            <span className="sr-only">Filter Search</span>
            <FontAwesomeIcon icon="search" className="search-icon" />
            </label>
            <input id="search-input-field"tabIndex="1" type="text" placeholder="Start typing a cat or breed" value={this.props.query} onChange={ (event) => this.props.updateQuery(event.target.value)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;

