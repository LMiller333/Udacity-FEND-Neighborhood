import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import CatLocations from './CatLocations.json';
import $ from 'jquery';

class App extends Component {

  //I know it seems excessive to have a prop for each attribute of the matchingCat results, but
  //I was experiencing really odd errors when trying to access nested attributes in child components

  constructor(){
    super();
    this.state = {
      locations: CatLocations.cats,
      matchingCats: [],
      matchingCatName: null,
      matchingCatBreed: null,
      matchingCatSex : null,
      matchingCatId : null,
      matchingCatCity : null,
      matchingCatState : null,
      matchingCatText: null
    }
  }

  componentDidMount(){
    
    console.log("component mounted");
    this.getMatchingCats();


  }

  getMatchingCats =  () => {
    console.log("getting matching cats");

    const pfApiKey = process.env.REACT_APP_PETFINDER_API_KEY;
    
    let matchingCats = this.state.locations.map((cat,i) => {

      let origCat = this.state.locations[i];

      let params = {
        key: pfApiKey,
        animal: 'cat',
        sex: cat.sex,
        breed: cat.breed,
        output: 'basic',
        format: 'json',
      }

      const url = `http://api.petfinder.com/pet.getRandom?key=${params.key}&animal=${params.animal}&sex=${params.sex}&breed=${params.breed}&output=${params.output}&format=${params.format}`
      
      $.ajax({
        url: url,
        jsonp: "callback",
        dataType: 'jsonp',
        cache: false,
        success: function (data){

          let matchingCat = data.petfinder.pet;
          let matchingCatMsg = `${matchingCat.name.$t} is the same sex and breed as ${origCat.name}. This ${matchingCat.age.$t.toLowerCase()} cat lives in ${matchingCat.contact.city.$t}, ${matchingCat.contact.state.$t}.`;
          const linkToPetfinder = `https://www.petfinder.com/petdetail/${matchingCat.id.$t}`;
          console.log(matchingCat);
          console.log(linkToPetfinder);
          this.state.matchingCats.push(matchingCat);

          // let matchingCatText = `${matchingCat.name.$t} is a ${matchingCat.breeds.breed.$t}`;
          // console.log(data);
          // console.log(matchingCat.name,matchingCat.sex, matchingCat.breeds.breed, matchingCat.age, matchingCat.contact.city, matchingCat.contact.state);
          // this.setState({
          //   matchingCat: matchingCat,
          //   matchingCatText: matchingCatText,
          //   matchingCatName : matchingCat.name.$t,
          //   matchingCatBreed : matchingCat.breeds.breed.$t,
          //   matchingCatSex : matchingCat.sex.$t,
          //   matchingCatId : matchingCat.id.$t,
          //   matchingCatCity : matchingCat.contact.city.$t,
          //   matchingCatState : matchingCat.contact.state.$t
          //   });

        }.bind(this),
        error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        }.bind(this),
      });

    });



  };

 
    
  
 
  

  render() {

    

    return (
      <div className="App">
          <MapContainer
            matchingCat={this.state.matchingCat}
            matchingCats={this.state.matchingCats}
            matchingCatText={this.state.matchingCatText}
            matchingCatName={this.state.matchingCatName}
            matchingCatBreed={this.state.matchingCatBreed}
            matchingCatSex={this.state.matchingCatSex}
            matchingCatId ={this.state.matchingCatId}
            matchingCatCity ={this.state.matchingCatCity}
            matchingCatState ={this.state.matchingCatState}
            // showingInfoWindow={this.state.showingInfoWindow}
            locations={this.state.locations}
          />
      </div>
    );
  }
}
export default App;
