import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <header className="Allign-center row"  >
          <h3 className="col-md-12"> Weather Application </h3>
          <div className="col-md-2"></div>
          <p className="col-md-8">Enter Latitude and Longitude to get the weather updates</p>
          <div className="col-md-2"></div>
        </header>
      </div>
    );
  }
}

export default App;
