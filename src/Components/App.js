import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends Component {
  state = {
    lat: "",
    long: "",
    showOutput: false,
    validLat: true,
    validLong: true,
    validResponse: false
  };

  updateResponseInState = obj => {
    this.setState({
      ...obj
    });
  };

  render() {
    let outResult = null;

    if (this.state.showOutput) {
      if (this.state.validResponse) {
        outResult = <Result {...this.state} />;
      } else {
        outResult = (
          <p>Sorry, Something went wrong. Please try again in sometime</p>
        );
      }
    }

    return (
      <div className="App-header">
        <header className="Allign-center row">
          <h3 className="col-md-12"> Weather Application </h3>
          <div className="col-md-2" />
          <p className="col-md-8">
            Enter Latitude(in range -90 to 90 ) and Longitude(in range -180 to
            180 ) to get the weather updates
          </p>
          <div className="col-md-2" />
        </header>
        <Form updateResponse={this.updateResponseInState} />
        {outResult}
      </div>
    );
  }
}

export default App;
