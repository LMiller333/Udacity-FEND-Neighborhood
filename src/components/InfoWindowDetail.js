import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faExternalLinkAlt)

class InfoWindowDetail extends Component {

    //This packages up the content for the InfoWindow

    render() {

    //Setting up some easier to remember/type shortcuts

    let scId = null;
    let scKey = null;
    let matchingCatMsg = null;
    let linkToPetfinder = null;
    let src = null;
    let alt = null;
    let name = null;
    let breed = null;
    let sex = null;

    //If there is a selected marker, change the value of these variables
    //Note: scId is intentionally different from the list item ids since html ids are supposed to be unique!

    if (this.props.sc){
        scKey = this.props.sc.key;
        src = this.props.sc.img;
        alt = this.props.sc.alt;
        name = this.props.sc.name;
        breed = this.props.sc.breed;
        sex = this.props.sc.dsex;
        scId = this.props.sc.name + this.props.sc.key;
    }

    //Get the appropriate "matched cat" from the PetFinder list by matching on id/key

    let matchedCat = this.props.matchingCats.find(function(cat) {
        return cat.origCatId === scKey;
        });

    //If there's a matchedCat, grab the message and link. If not, handle errors gracefully :-)

    if (matchedCat){
        matchingCatMsg = matchedCat.matchingCatMsg;
        linkToPetfinder = matchedCat.linkToPetfinder;
    }
    else{
        matchingCatMsg = "We're sorry, PetFinder data is currently unavailable";
        linkToPetfinder = "http://petfinder.com";
    }

    return (

        //Finally, show the info window!

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