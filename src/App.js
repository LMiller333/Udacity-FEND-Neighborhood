import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.js';
import List from './components/List.js';
import MapContainer from './components/MapContainer';
import CatLocations from './CatLocations.json';
import $ from 'jquery'; 

class App extends Component {

  //I know it seems excessive to have a prop for each attribute of the matchingCat results, but
  //I was experiencing really odd errors when trying to access nested attributes in child components

  constructor(){
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedCat: {},
      markers: CatLocations.cats,
      displayMarkers: CatLocations.cats,
      query: "",
      matchingCatName: null,
      matchingCatBreed: null,
      matchingCatSex : null,
      matchingCatId : null,
      matchingCatCity : null,
      matchingCatState : null
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onListClick = this.onListClick.bind(this);
  }

  onListClick=(event)=>{
    console.log(this.state.markers);
    console.log(event.currentTarget.id);
  }
    
  onMarkerClick(props,marker,e){
    this.setState({
      selectedCat: props,
      activeMarker: marker,
    //   showingInfoWindow: true
    });


    console.log("running ajax");
    const pfApiKey = process.env.REACT_APP_PETFINDER_API_KEY;
    let params = {
        key: pfApiKey,
        animal: 'cat',
        sex:this.state.selectedCat.sex,
        breed: this.state.selectedCat.breed,
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
            // console.log(data);
            // console.log(matchingCat.name,matchingCat.sex, matchingCat.breeds.breed, matchingCat.age, matchingCat.contact.city, matchingCat.contact.state);
            this.setState({
              matchingCat: matchingCat,
              // matchingCatName : matchingCat.name.$t,
              // matchingCatBreed : matchingCat.breeds.breed.$t,
              // matchingCatSex : matchingCat.sex.$t,
              // matchingCatId : matchingCat.id.$t,
              // matchingCatCity : matchingCat.contact.city.$t,
              // matchingCatState : matchingCat.contact.state.$t,
              showingInfoWindow: true,
              });

        }.bind(this),
        error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        }.bind(this),
    });
  }
  

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
        })
    }
  }

  updateQuery = (query) => {
    let queryLc = query.toLowerCase();
    this.setState({ query: query});

    //TODO: Add male/female filter so that "male" doesn't bring up all results

    if (query){
      console.log("processing query");
      let displayMarkers = this.state.markers.filter((cat) => {
        return cat.name.toLowerCase().includes(queryLc) || cat.breed.toLowerCase().includes(queryLc) || cat.breed.toLowerCase().includes(queryLc) 
      });
      console.log(displayMarkers);
    this.setState({displayMarkers: displayMarkers});
    }
    else {
      this.setState({displayMarkers:this.state.markers})
    }

    }
 
  

  render() {

    

    return (
      <div className="App">
          <Search
            query={this.state.query}
            updateQuery={this.updateQuery}/>
            <MapContainer
              displayMarkers={this.state.displayMarkers}
              onMapClicked={this.onMapClicked}
              onMarkerClick={this.onMarkerClick}
              activeMarker={this.state.activeMarker}
              selectedCat={this.state.selectedCat}
              matchingCat={this.state.matchingCat}
              // matchingCatName={this.state.matchingCatName}
              // matchingCatBreed={this.state.matchingCatBreed}
              // matchingCatSex={this.state.matchingCatSex}
              // matchingCatId ={this.state.matchingCatId}
              // matchingCatCity ={this.state.matchingCatCity}
              // matchingCatState ={this.state.matchingCatState}
              showingInfoWindow={this.state.showingInfoWindow}
              markers={this.state.markers}
            />
          <List
            displayMarkers={this.state.displayMarkers}
            activeMarker={this.state.activeMarker}
            selectedCat={this.state.selectedCat}
            showingInfoWindow={this.state.showingInfoWindow}
          />

      </div>
    );
  }
}
export default App;
