import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function InputBox(props) {
    
    return(
        <div>
            <br></br>
            <input style={{width: "30%", marginLeft: "35%"}} type="text" className="form-control" placeholder="Enter coin name here..." aria-describedby="addon-wrapping" onChange={(event) => props.setCoinName(event.target.value)}></input>
            <br></br>
        </div>
    ) 
}