# Weather App

Weather App is a ReactJS application to get weather updates of a particular based on the given Latitude and Longitude.

## Prerequisite

[Node](https://nodejs.org/en/) has to be pre-installed.

## Installation

Navigate to root directory where the package.json is present and run the following command.

```bash
npm install
```

## Starting Application

Navigate to root directory where the package.json is present and run the following command.

```bash
npm start
```
Application will start and it will open in the default browser, if it fails to open use the [link](http://localhost:3000/).

## Test Application

Navigate to root directory where the package.json is present and run the following command.

```bash
npm test
```

## This App consists of 

### _App Component
   This will render the Form component and once the user inputs Latitude and Longitude it will render Result component.

### _InputBox Component
   This will have functionality to have Input Latitude and Longitude values.
   
### _Button Component
   This will have functionality to have Input Latitude and Longitude values.

### _Form Component
   This component will be rendering the input boxes for entering Latitude, Longitude and buttons to get weather details or clear the intered data.

### _Result Component
   This componenet renders the reuslt row components to show the weather details.

### _ResultRow Component
   This componenet returns a row with the details of each parameter like temperature, wind speed, sky apperance and humidity.