import React, { Component } from 'react';
import './App.css';
import InputBox from './inputBox';
import Buttons from './Buttons';

class App extends Component {

  state = {
    lat : "",
    long : "",
    showOutput : false,
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

  clearAll = () => {
    this.setState(
      {
        lat:"",
        long:"",
        temp:"",
        showOutput : false
      }
    )
  };

  render() {
    return (
      <div className="App-header">
        <header className="Allign-center row">
          <h3 className="col-md-12"> Weather Application </h3>
          <div className="col-md-2"></div>
          <p className="col-md-8">Enter Latitude(in range -90 to 90 ) and Longitude(in range -180 to 180 ) to get the weather updates</p>
          <div className="col-md-2"></div>
        </header>
        <div className="row margin-top-30px">
          <InputBox name='Latitude' onChanged={this.latitudeChange} value={this.state.lat}/>
          <InputBox name='Longitude' onChanged={this.longitudeChange} value={this.state.long}/>
        </div>
        <div  className="row margin-top-30px">
          <div className="col-md-5"></div>
          <div className="col-md-1"></div>
          <div className="col-md-1"></div>
          <Buttons name="Clear" clicked={this.clearAll}></Buttons>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
