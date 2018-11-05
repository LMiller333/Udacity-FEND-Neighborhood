import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faExternalLinkAlt)

 class InfoWindowDetail extends Component {

  render() {

    let scId = null;
    let scKey = null;
    let matchingCatMsg = null;
    let linkToPetfinder = null;
    let src = null;
    let alt = null;
    let name = null;
    let breed = null;
    let sex = null;

    if (this.props.sc){
        scKey = this.props.sc.key;
        src = this.props.sc.img;
        alt = this.props.sc.alt;
        name = this.props.sc.name;
        breed = this.props.sc.breed;
        sex = this.props.sc.dsex;
        scId = this.props.sc.name + this.props.sc.key;
    }

    let matchedCat = this.props.matchingCats.find(function(cat) {
        return cat.origCatId === scKey;
      });

    if (matchedCat){
        matchingCatMsg = matchedCat.matchingCatMsg;
        linkToPetfinder = matchedCat.linkToPetfinder;
    }
    else{
        matchingCatMsg = "We're sorry, PetFinder data is currently unavailable";
        linkToPetfinder = "http://petfinder.com";
    }

   return (
        <li className="infowindow" id={scId}>
            <div className="neighborCatInfo">
            <div className="catHeader">
                <h2>{name} </h2>
                <p>({sex} {breed})</p>
            </div>
                <img src={src} alt={alt} className="catPicture" height="auto" width="100%"/>
                <h3>Looking for a cat like {name}?</h3>
            </div>
            <div className="petfinderInfo">
                <p>{matchingCatMsg}</p>
                <p><a href={linkToPetfinder} target="_blank" rel="noopener noreferrer" aria-label="Opens in new window">More from PetFinder <FontAwesomeIcon icon="external-link-alt" className="opens-new-window-icon"/></a></p>
            </div>
        </li>
    
    )      
  }
}

export default InfoWindowDetail;