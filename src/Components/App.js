import React, { Component } from 'react';
import './App.css';
import InputBox from './inputBox';

class App extends Component {

  state = {
    lat : "",
    long : "",
    showOutput : false,
    errorInput :false
  }

  latitudeChange = (event) => {
    const re = /^[-]?[0-9]*\.?[0-9]*/;
    let updatedLatitude = event.target.value;
    if(event.target.value ==='' || re.test(event.target.value)){
      this.setState(
        {
          lat : updatedLatitude
        }
      )
    }  
  }

  longitudeChange = (event) => {
    const re = /^[-]?[0-9]*\.?[0-9]*/;
    let updatedLongitude = event.target.value;
    if(event.target.value ==='' || re.test(event.target.value)){
      this.setState(
        {
          long : updatedLongitude
        }
      )
    }
  }

  render() {
    return (
      <div className="App-header">
        <header className="Allign-center row">
          <h3 className="col-md-12"> Weather Application </h3>
          <div className="col-md-2"></div>
          <p className="col-md-8">Enter Latitude and Longitude to get the weather updates</p>
          <div className="col-md-2"></div>
        </header>
        <div className="row margin-top-30px">
          <InputBox name='Latitude' onChanged={this.latitudeChange} value={this.state.lat}/>
          <InputBox name='Longitude' onChanged={this.longitudeChange} value={this.state.long}/>
        </div>
      </div>
    );
  }
}

export default App;
