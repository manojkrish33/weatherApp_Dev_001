import React from 'react';

const Buttons = (props) => {
    return <button className="Check-Button col-md-2" onClick={props.clicked}>{props.name}</button>
}

export default Buttons;