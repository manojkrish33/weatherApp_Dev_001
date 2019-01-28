import React from "react";

const Button = props => {
  return (
    <button className="Check-Button col-md-2" onClick={props.handleClick}>
      {props.value}
    </button>
  );
};

export default Button;
