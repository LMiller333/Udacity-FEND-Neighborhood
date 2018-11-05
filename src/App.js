import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import CatLocations from './CatLocations.json';
import $ from 'jquery';

//TODO: Update cat photos in CatLocations.json

class App extends Component {

  constructor(){
    super();
    this.state = {
      locations: CatLocations.cats,
      matchingCats: [],
    }
  }

  componentDidMount(){
    document.title = "Neighborhood Cat Map"
    this.getMatchingCats();
  }

  getMatchingCats =  () => {

    const pfApiKey = process.env.REACT_APP_PETFINDER_API_KEY;
    
    this.state.locations.map((cat,i) => {

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
          let matchingCatMsg = `${matchingCat.name.$t} is  a ${origCat.displaysex} ${origCat.breed} like ${origCat.name}. This ${matchingCat.age.$t.toLowerCase()} cat lives in ${matchingCat.contact.city.$t}, ${matchingCat.contact.state.$t}.`;
          let linkToPetfinder = `https://www.petfinder.com/petdetail/${matchingCat.id.$t}`;
          let origCatId = origCat.id;
          
          let matchingCatAll = {
            origCatId,
            matchingCat,
            matchingCatMsg,
            linkToPetfinder
          }
          
          this.state.matchingCats.push(matchingCatAll);

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
          matchingCats={this.state.matchingCats}
          locations={this.state.locations}
        />
      </div>
    );
  }
}
export default App;
