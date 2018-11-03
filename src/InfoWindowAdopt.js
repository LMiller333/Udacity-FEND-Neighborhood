import React, { Component } from 'react';
import $ from 'jquery'; 

 class InfoWindowAdopt extends Component {


    componentDidMount(){
        console.log("mound yay")
    }
        

  render() {
   
    return (

        <div><p>NAME is a SEX BREED just like {this.props.name}.</p>
        <p>This AGE cat lives in CITY, STATE</p>
        <p>Read more at Petfinder!</p></div>
    )      
  }
}

export default InfoWindowAdopt;