import React, { Component } from 'react';
import $ from 'jquery'; 
import InfoWindowAdopt from '../InfoWindowAdopt';

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

        // fetchJsonp(`http://api.petfinder.com/pet.getRandom?key=${pfApiKey}&format=json`,
        //     {
        //         jsonpCallback: 'cb',
        //         headers: {
        //             "Content-Type": "application/json",
        //             // "X-Content-Type-Options": nosniff,
        //             // "Content-Type": "application/x-www-form-urlencoded",
        //         } 
        //     })
        // .then(function(response) {
        //     console.log(response.json());
        //   return response.json()
        // }).then(function(json) {
        //   console.log('parsed json', json)
        // }).catch(function(ex) {
        //   console.log('parsing failed', ex)
        // })

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
                console.log(data);
                const array = data.response;
                console.log(array);
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

    // console.log(this.state.data);

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