import React from 'react';


const inputLat = (props) => {
    return (
        <div className="col-md-6">
                <label className="col-md-5">Enter {props.name} :  </label>
                <input className="col-md-5" type="text" onChange={props.onChanged} value={props.value}></input>
        </div>
    );
}

export default inputLat;