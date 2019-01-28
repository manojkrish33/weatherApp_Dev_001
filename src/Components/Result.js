import React, { Component } from "react";
import ResultRow from "./ResultRow";

class Result extends Component {
  convertTemparatureToCelsius = temprature =>
    Math.round((temprature  - 273.15) * 100) / 100 + " C";

  render() {
    return (
      <div className="row col-md-12">
        <table>
          <thead>
            <tr>
              <th className="col-xs-3">Parameter</th>
              <th className="col-xs-1"> </th>
              <th className="col-xs-5">Values</th>
              <th>
                <img
                  className="col-xs-3"
                  alt=""
                  src={
                    "http://openweathermap.org/img/w/" +
                    this.props.icon +
                    ".png"
                  }
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <ResultRow
              label="Temperature"
              value={this.convertTemparatureToCelsius(this.props.temperature)}
            />
            <ResultRow label="Wind" value={this.props.windSpeed} />
            <ResultRow label="Sky" value={this.props.sky} />
            <ResultRow
              label="Humidity"
              value={this.props.humidity + " %"}
            />
          </tbody>
        </table>
      </div>
    );
  }
}
export default Result;
