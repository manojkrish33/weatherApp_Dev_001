import React, { Component } from "react";
import InputBox from "./inputBox";
import Button from "./Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      long: "",
      showOutput: false,
      validLat: true,
      validLong: true
    };
  }

  latitudeOnChange = event => {
    let updatedLatitude = event.target.value.trim();
    this.setState({
      lat: updatedLatitude
    });
    if (Math.abs(updatedLatitude) <= 90) {
      this.setState({
        validLat: true
      });
    } else {
      this.setState({
        validLat: false
      });
    }
  };

  longitudeOnChange = event => {
    let updatedLongitude = event.target.value.trim();
    this.setState({
      long: updatedLongitude
    });
    if (Math.abs(updatedLongitude) <= 180) {
      this.setState({
        validLong: true
      });
    } else {
      this.setState({
        validLong: false
      });
    }
  };

  clearAll = () => {
    this.setState({
      lat: "",
      long: "",
      temp: "",
      showOutput: false,
      validLat: true,
      validLong: true
    });
    this.props.updateResponse(this.state);
  };

  getWeather = () => {
    if (this.state.validLat && this.state.validLong) {
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?lat=" +
          this.state.lat +
          "&lon=" +
          this.state.long +
          "&APPID=208e7a419b466f5777abefb8f5594d48"
      )
        .then(results => {
          return results.json();
        })
        .then(data => {
          if (data.cod === 200) {
            this.setState({
              icon: data.weather[0].icon,
              temperature : data.main.temp,
              windSpeed: data.wind.speed,
              sky: data.weather[0].main,
              humidity : data.main.humidity,
              showOutput: true,
              validResponse: true
            });
          } else {
            this.setState({
              showOutput: true,
              validResponse: false
            });
          }
          this.props.updateResponse(this.state);
        });
    }
  };

  render() {
    return (
      <div>
        <div className="row margin-top-30px">
          <InputBox
            label="Latitude"
            isValid={this.state.validLat}
            onChanged={this.latitudeOnChange}
            value={this.state.lat}
          />
          <InputBox
            label="Longitude"
            isValid={this.state.validLong}
            onChanged={this.longitudeOnChange}
            value={this.state.long}
          />
        </div>
        <div className="row margin-top-30px">
          <div className="col-md-5" />
          <Button value="Check!" handleClick={this.getWeather} />
          <div className="col-md-1" />
          <Button value="Clear" handleClick={this.clearAll} />
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}

export default Form;
