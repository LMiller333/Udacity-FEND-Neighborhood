# Cat Neighborhood Map - Built with React

## Description
This app was developed as part of the Udacity Front-End Develompent Nanodegree program. It shows a list and map of my neighborhood's cats and allows you to learn more about similar cats that are up for adoption on PetFinder!

![Screenshot of Cat Neighborhood Map App](https://lh3.googleusercontent.com/udeE-_exYE3EWCYKnBigKYhAcozyj7Vc-mjT97lJZK2WWyK1bKqS6CaWvtBccNb1WZIHG2zOMKoVOaVBXGNiMD4l82aMJ-Fonczz5MkiD2yM98oBvALuMxCf_UxGzFxWkA21FYjWM-cUR1SlhYF9G-QtWuJXHGITPBpEikny6jDg8BEbxty-c2Yihlv3tQrqeW-HM2yup8F9Ok5sYjtbLbFPvX00qTLhQZiTa-L4QD2ULOqN1zCb95c2RTrim4SICiMeFSEcl-hQ6kbL_H8nGu-JanPFG6PVvwR0pE-DCSNU-obKzL6BNg9blEu94TN8y6zeYR61bDoRHFspjM6SNoteeIcUivHhgtJkaLeKXCNI2oXAaNnfxSSpIhkjcSSpX_qjfg7wuPV3tIaLuYe4ozCRUsEf28xqanOQs88ss2ylj8f1w6WJugs5n4QlvEm6AG5_rhSSyQu2k0tLmd4UEVuf4Pbu1pmgy-8ExJUd-5cfNMFRKdQ8NY9SN442h--fppTNJwP4vu9Ibw9kHf9W93B73_jT0CDswtWdZK7dzPL5cwYZB0qfZLGUTflIgEp90ly-j8bKIaL1WjaPcWDEqzRAywP4jAT9y3wZjBr52caKavIJlZiyjYIqYr2YItcWQ39jyxob5-_xGKrjMqiPmAPqoA_uKj9G3aGJvQorqysA-LY1KqRRQF6ZYZmphVg4eJfLEB8vVBhEvBvVAQ=w638-h321-no)

## Install
1. Get your API keys! You will need Google Maps and PetFinder. 
2. Clone this repository.
3. Install project dependencies using npm install
4. Add your API keys to an `.env` file or directly to the project (see `App.js` and `MapContainer.js` and ) 
5. Start the server with npm start

## Features
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




## Acknowledgements
Thank you to **Doug Brown, Iloan, & James Barlett** for helping me troubleshoot and think through my project!

