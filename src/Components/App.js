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

  getWeather = () =>{
    fetch("http://api.openweathermap.org/data/2.5/weather?lat="+ this.state.lat +"&lon="+ this.state.long +"&APPID=208e7a419b466f5777abefb8f5594d48")
    .then(results => {
       return results.json();
    }).then(data => {
      if(data.cod === 200){
        this.setState({
          ...data,
          showOutput : true
        })
      }else{
        this.setState({
          showOutput : false
      })
      }
      
      }
    )
  };

  render() {

    let outResult = null;

    if( this.state.showOutput){ 
      outResult = 
      (<div className="row col-md-12">
        <table >
          <thead>
            <tr>
              <th className="col-xs-3">Parameter</th>
              <th className="col-xs-1"> </th>
              <th className="col-xs-5">Values</th>
              <th>
              <img className="col-xs-3" alt="" src = {"http://openweathermap.org/img/w/"+this.state.weather[0].icon+".png"} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-xs-3">Temperature</td>
              <td className="col-xs-1"> </td>
              <td className="col-xs-5">{Math.round((this.state.main.temp - 273.15)*100)/100 } C</td>
              <td className="col-xs-3"> </td>
            </tr>
            <tr>
              <td className="col-xs-3">Wind</td>
              <td className="col-xs-1"> </td>
              <td className="col-xs-5">{this.state.wind.speed}</td>
              <td className="col-xs-3"> </td>
            </tr>
            <tr>
              <td className="col-xs-3">Sky</td>
              <td className="col-xs-1"> </td>
              <td className="col-xs-5">{this.state.weather[0].main}</td>
              <td className="col-xs-3"> </td>
            </tr>
            <tr>
              <td className="col-xs-3">Humidity</td>
              <td className="col-xs-1"> </td>
              <td className="col-xs-5">{this.state.main.humidity} %</td>
              <td className="col-xs-3"> </td>
            </tr>
          </tbody>
        </table>
      </div>)
    }

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
           <Buttons name="Check!" clicked={this.getWeather}></Buttons>
          <div className="col-md-1"></div>
          <Buttons name="Clear" clicked={this.clearAll}></Buttons>
          <div className="col-md-4"></div>
        </div>
        {outResult}
      </div>
    );
  }
}

export default App;
