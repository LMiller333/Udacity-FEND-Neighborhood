import React, { Component } from 'react';
import newwindowicon from '../images/new-window.png';

 class InfoWindowDetail extends Component {

  render() {

    let scId = null;
    let matchingCatMsg = null;
    let linkToPetfinder = null;
    let src = null;

    if (this.props.sc){
        scId = this.props.sc.key;
        src = this.props.sc.img;
    }

    let matchedCat = this.props.matchingCats.find(function(cat) {
        return cat.origCatId === scId;
      });

    if (matchedCat){
        matchingCatMsg = matchedCat.matchingCatMsg;
        linkToPetfinder = matchedCat.linkToPetfinder;
    }
    else{
        matchingCatMsg = "We're sorry, PetFinder data is currently unavailable";
        linkToPetfinder = "http://petfinder.com";
    }
    // console.log(this.props.matchingCats);
    // const name = this.props.matchingCatName;
    // const breed = this.props.matchingCatBreed;
    // const sex = (this.props.matchingCatSex === "M") ? "Male" : "Female";
    // const pronoun = (this.props.matchingCatSex === "M") ? "He" : "She";
    // const city = this.props.matchingCatCity;
    // const state = this.props.matchingCatState;
    // const id = this.props.matchingCatId;


   return (
        <li className="infowindow" id={this.props.sc && this.props.sc.key}>
            <div className="neighborCatInfo">
            <div className="catHeader">
                <h3>{this.props.sc && this.props.sc.name} </h3>
                <p>({this.props.sc && this.props.sc.sex} {this.props.sc && this.props.sc.breed})</p>
            </div>
                <img src={src} alt={this.props.sc && this.props.sc.name} className="catPicture" height="auto" width="100%"/>
                <h4>Looking for a cat like {this.props.sc && this.props.sc.name}?</h4>
            </div>
            <div className="petfinderInfo">
                <p>{matchingCatMsg}</p>
                <p><a href={linkToPetfinder} target="_blank" rel="noopener noreferrer">More from PetFinder <img src={newwindowicon} alt="opens in new window" className="opensNewWindow"/></a></p>
            </div>
        </li>
    
    )      
  }
}

export default InfoWindowDetail;