import React, { Component } from 'react';

 class InfoWindowDetail extends Component {

  render() {

    // const name = this.props.matchingCatName;
    // const breed = this.props.matchingCatBreed;
    // const sex = (this.props.matchingCatSex === "M") ? "Male" : "Female";
    // const pronoun = (this.props.matchingCatSex === "M") ? "He" : "She";
    // const city = this.props.matchingCatCity;
    // const state = this.props.matchingCatState;
    // const id = this.props.matchingCatId;

    // // const text = `${name} is a ${sex} ${breed} like ${this.props.selectedCat.name}. ${pronoun} lives in ${city}, ${state}.`

    // const petFinderUrl = `https://www.petfinder.com/petdetail/${id}`;


   return (
        <li className="infowindow" id={this.props.sc && this.props.sc.id}>
            <div className="neighborCatInfo">
                <h2>{this.props.sc && this.props.sc.name}</h2>
                <p>{this.props.sc && this.props.sc.sex} {this.props.sc && this.props.sc.breed}</p>
                <h3>Looking for a cat like {this.props.sc && this.props.sc.name}?</h3>
            </div>
            {/* <div className="petfinderInfo">
                <p>{this.props.matchingCatText}</p>
                <br/><br/>
                <a href={petFinderUrl} target="_blank">Visit PetFinder to Learn More</a>
            </div> */}
        </li>
    
    )      
  }
}

export default InfoWindowDetail;