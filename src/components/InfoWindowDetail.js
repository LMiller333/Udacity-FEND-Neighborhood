import React, { Component } from 'react';
import $ from 'jquery'; 

 class InfoWindowDetail extends Component {

    constructor(){
        super();
        this.state = {
            data:null
        };
        this.pfCatName = "";
    }

    componentDidMount(){
        console.log("detail mounted");
    }

    // getData = () => {
    //     console.log("getting data")
    //     const pfApiKey = process.env.REACT_APP_PETFINDER_API_KEY;
    //     $.ajax({
    //         url: 'http://api.petfinder.com/pet.getRandom?',
    //         jsonp: "callback",
    //         dataType: 'jsonp',
    //         data: {
    //             key: pfApiKey,
    //             animal: 'cat',
    //             output: 'basic',
    //             format: 'json',
    //         },
    //         cache: false,
    //         success: function (data){
    //             // console.log(data);
    //             // const array = data.response;
    //             // console.log(array);
    //             // this.pfCatName= data.petfinder.pet.name.$t;
    //             // var id = data.petfinder.pet.id.$t;
    //             // var linkToPfCat = `https://www.petfinder.com/petdetail/${id}`;
    //             // console.log(id,linkToPfCat);
    //     }
    //         .bind(this),
    //         error: function(xhr, status, err) {
    //         console.error(this.props.url, status, err.toString());
    //         }.bind(this),
    //     });
    // }

    // // https://jaketrent.com/post/react-componentdidmount-not-called-server-render/
  
     
    

  render() {

    console.log(this.props.matchingCat.name);


   return (
        <li className="infowindow" id={this.props.selectedCat.id}>
            <div className="neighborCatInfo">
                <h2>{this.props.selectedCat.name}</h2>
                <p>{this.props.selectedCat.sex} {this.props.selectedCat.breed}</p>
                <h3>Looking for a cat like {this.props.selectedCat.name}?</h3>
            </div>
            
            <div className="petfinderInfo">
                <p>{this.props.matchingCat.name.$t} is a  just like </p>
                <p>This  cat lives in </p>
                <p>Read more at Petfinder!</p>
            </div>
        </li>
    
    )      
  }
}

export default InfoWindowDetail;
