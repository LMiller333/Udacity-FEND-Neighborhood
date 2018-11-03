import React, { Component } from 'react';
import $ from 'jquery'; 
import InfoWindowAdopt from '../InfoWindowAdopt';
import { axios, jsonpAdapter } from 'axios-jsonp';

 class InfoWindow extends Component {

    constructor(){

        super();
        this.state = {
            data:null
        };
        this.getData(); 
    
    }

    getData() {
        console.log("getting data")
        const pfApiKey = process.env.REACT_APP_PETFINDER_API_KEY;

    $.ajax({
        url: 'http://api.petfinder.com/pet.getRandom?',
        jsonp: "callback",
        dataType: 'jsonp',
        data: {
            key: pfApiKey,
            animal: 'cat',
            output: 'basic',
            format: 'json',
        },
        cache: false,
        success: function (data){
           this.setState = {data};
            console.log(data);
            // var pfCatName= data.petfinder.pet.name.$t;
            // var id = data.petfinder.pet.id.$t;
            // var linkToPfCat = `https://www.petfinder.com/petdetail/${id}`;
            // console.log(id,linkToPfCat);
       }
        .bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this),
      });
    }

    // https://jaketrent.com/post/react-componentdidmount-not-called-server-render/
     
    

  render() {

    console.log(this.state.data);

   return (
    <li className="infowindow" id={this.props.id}>
    <h2>{this.props.name}</h2>
    <p>{this.props.sex} {this.props.breed}</p>
    <h3>Looking for a cat like {this.props.name}?</h3>
    <InfoWindowAdopt />
    
    </li>
    )      
  }
}

export default InfoWindow;