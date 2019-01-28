import React from "react";
import "./inputBox.css";

const inputBox = props => {
  if (props.isValid) {
    return (
      <div className="col-md-6">
        <label className="col-md-5">Enter {props.label} : </label>
        <input
          className="col-md-5"
          type="text"
          onChange={props.onChanged}
          value={props.value}
        />
      </div>
    );
  } else {
    return (
      <div className="col-md-6">
        <label className="col-md-5">Enter {props.label} : </label>
        <input
          className="col-md-5"
          type="text"
          onChange={props.onChanged}
          value={props.value}
        />
        <p className="error-style">Please enter a valid {props.label}</p>
      </div>
    );
  }
};

export default inputBox;
