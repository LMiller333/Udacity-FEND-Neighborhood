# Cat Neighborhood Map - Built with React

## Summary of Features
* Uses CSS Grid Layout to achieve responsiveness across devices
* Filter search that updates list and map markers as you type
* Utilizes GoogleMaps API for Map (duh) and PetFinder API to find similar adoptable pets - because our neighborhood cats are not up for adoption :)
* Graceful handling of errors, with partial loading, friendly & plain language user-facing error messages, and a Service Worker for offline functionality
* Accessibility features such as semantic HTML (and aria when needed), WCAG AA compliant color contrast, and alternative text that actually adds value (e.g., describing what the cat is doing in the photo, to show personality)

## APIs
This app uses the [Google Maps API](https://developers.google.com/maps/documentation/) and the [PetFinder API](https://www.petfinder.com/developers/api-docs). 

## Packages, Libraries, Dependencies
* This is a [React](https://reactjs.org/) app built using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) 
* The Google API Wrapper was provided by [google-maps-react](https://github.com/fullstackreact/google-maps-react).
* Font icons courtesy of the [React Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) component.
* I used [jQuery](https://jquery.com/) $.ajax method for my third-party AJAX API calls. 

## Install
1. Get your API keys! You will need Google Maps and PetFinder. 
2. Clone this repository.
3. Install project dependencies using npm install
4. Add your API keys to an `.env` file or directly to the project (see `App.js` and `MapContainer.js` and ) 
5. Start the server with npm start


## Acknowledgements
Thank you to **Doug Brown, Iloan, & James Barlett** for helping me troubleshoot and think through my project!

